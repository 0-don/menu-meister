import { YogaDriverConfig } from "@graphql-yoga/nestjs";
import { Module } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";
import { JwtModule } from "@nestjs/jwt";
import { RequestContextModule } from "nestjs-request-context";
import { AuthModule } from "./auth/auth.module";
import { graphqlModuleFactory } from "./graphql";

@Module({
  imports: [
    GraphQLModule.forRoot<YogaDriverConfig<"fastify">>(graphqlModuleFactory()),
    JwtModule.register({ secret: process.env.SECRET }),
    RequestContextModule,
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
