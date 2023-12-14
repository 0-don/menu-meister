import { Injectable, OnModuleInit } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { Prisma, PrismaClient } from "@prisma/client";
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
        }
        if (params.action === "update") {
          params.args.data.updatedBy = user.sub;
        }
        if (params.action === "upsert") {
          params.args.create.createdBy = user.sub;
          params.args.create.updatedBy = user.sub;
          params.args.update.updatedBy = user.sub;
        }
      } catch (_) {}

      return next(params);
    });
    await this.$connect();
  }

  getUserFromContext(): JwtUser | null {
    const req = RequestContext.currentContext.req as IncomingMessage;

    return getUserFromJwt(req);
  }
}
