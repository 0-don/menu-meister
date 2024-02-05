import { Injectable, OnModuleInit } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { Prisma, PrismaClient } from "@prisma/client";
import { writeFileSync } from "fs";
import { IncomingMessage } from "http";
import { RequestContext } from "nestjs-request-context";
import { JwtUser } from "../@types/types";
import { getUserFromJwt } from "../utils/helpers";

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  actionTypes: Prisma.PrismaAction[] = ["create", "update", "upsert"];

  constructor(private jwtService: JwtService) {
    super({
      // log: ['query'],
      errorFormat: process.env.NODE_ENV === "production" ? "minimal" : "pretty",
    });
  }

  async onModuleInit() {
    this.$use((params, next) => {
      if (!this.actionTypes.includes(params.action)) return next(params);

      try {
        const user = this.getUserFromContext();

        if (!user) return next(params);

        if (params.action === "create") {
          params.args.data.createdBy = user.sub;
          params.args.data.updatedBy = user.sub;
          this.enrichObjectAudit(params.args.data, user.sub);
        }
        if (params.action === "update") {
          params.args.data.updatedBy = user.sub;
          this.enrichObjectAudit(params.args.data, user.sub);
        }
        if (params.action === "upsert") {
          params.args.create.createdBy = user.sub;
          params.args.create.updatedBy = user.sub;
          params.args.update.updatedBy = user.sub;
          this.enrichObjectAudit(params.args.data, user.sub);
        }
      } catch (_) {}

      writeFileSync("prisma.json", JSON.stringify(params, null, 2));
      return next(params);
    });
    await this.$connect();
  }

  enrichObjectAudit(obj: any, userSub: number): void {
    // Base case: if obj is not an object or is null, do nothing
    if (obj === null || typeof obj !== "object") return;

    Object.keys(obj).forEach((key) => {
      if (Array.isArray(obj[key])) {
        obj[key].forEach((item: any) => {
          // Recursively apply to items in arrays
          this.enrichObjectAudit(item, userSub);
        });
      } else if (typeof obj[key] === "object") {
        // Recursively apply to nested objects
        this.enrichObjectAudit(obj[key], userSub);
      }

      // Specific logic for connectOrCreate
      if (key === "connectOrCreate" && Array.isArray(obj[key])) {
        obj[key].forEach((connectOrCreateObj: any) => {
          if (connectOrCreateObj.create) {
            connectOrCreateObj.create.createdBy = userSub;
            connectOrCreateObj.create.updatedBy = userSub;
          }
        });
      }
    });
  }

  getUserFromContext(): JwtUser | null {
    const req = RequestContext.currentContext.req as IncomingMessage;

    return getUserFromJwt(req);
  }
}
