import { Global, Module } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { PrismaService } from "./prisma/prisma.service";

@Global()
@Module({
  providers: [JwtService, PrismaService],
  exports: [JwtService, PrismaService],
})
export class ModulesModule {}
