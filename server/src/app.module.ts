import { YogaDriverConfig } from "@graphql-yoga/nestjs";
import { Module } from "@nestjs/common";
import { APP_GUARD } from "@nestjs/core";
import { GraphQLModule } from "@nestjs/graphql";
import { JwtModule } from "@nestjs/jwt";
import { RequestContextModule } from "nestjs-request-context";
import { RolesGuard } from "./app_modules/guards/roles.guard";
import { ModulesModule } from "./app_modules/modules.module";
import { AuthModule } from "./auth/auth.module";
import { graphqlModuleFactory } from "./graphql";
import { MealModule } from "./meal/meal.module";
import { UserModule } from "./user/user.module";

@Module({
  imports: [
    GraphQLModule.forRoot<YogaDriverConfig<"fastify">>(graphqlModuleFactory()),
    JwtModule.register({ secret: process.env.SECRET }),
    RequestContextModule,
    AuthModule,
    UserModule,
    ModulesModule,
    MealModule,
  ],
  controllers: [],
  providers: [
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },
  ],
})
export class AppModule {}
