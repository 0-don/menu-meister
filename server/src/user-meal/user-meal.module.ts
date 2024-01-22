import { AuthService } from "@/auth/auth.service";
import { Module } from "@nestjs/common";
import { UserMealUserResolver } from "./resolver/user-meal-user.resolver";
import { UserMealService } from "./user-meal.service";

@Module({
  providers: [UserMealService, AuthService, UserMealUserResolver],
  exports: [UserMealService],
})
export class UserMealModule {}
