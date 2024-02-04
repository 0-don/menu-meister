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
import { IngredientModule } from "./ingredient/ingredient.module";
import { MealBoardPlanModule } from "./meal-board-plan/meal-board-plan.module";
import { MealModule } from "./meal/meal.module";
import { RecipeModule } from "./recipe/recipe.module";
import { SettingsModule } from "./settings/settings.module";
import { UserMealModule } from "./users/user-meal/user-meal.module";
import { UsersModule } from "./users/users.module";
import { WeeklyMealGroupModule } from "./weekly-meal-group/weekly-meal-group.module";

@Module({
  imports: [
    GraphQLModule.forRoot<YogaDriverConfig<"fastify">>(graphqlModuleFactory()),
    JwtModule.register({ secret: process.env.SECRET }),
    RequestContextModule,
    AuthModule,
    UsersModule,
    ModulesModule,
    IngredientModule,
    MealBoardPlanModule,
    MealModule,
    WeeklyMealGroupModule,
    SettingsModule,
    RecipeModule,
    UserMealModule,
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
