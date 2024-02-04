import { Module } from "@nestjs/common";
import { UserMealAdminResolver } from "./resolver/user-meal-admin.resolver";
import { UserMealUserResolver } from "./resolver/user-meal-user.resolver";
import { UserMealService } from "./user-meal.service";

@Module({
  providers: [UserMealService, UserMealUserResolver, UserMealAdminResolver],
  exports: [UserMealService],
})
export class UserMealModule {}
