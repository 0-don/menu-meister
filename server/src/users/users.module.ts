import { Module } from "@nestjs/common";
import { UserMealLocationModule } from "./user-meal-location/user-meal-location.module";
import { UserMealModule } from "./user-meal/user-meal.module";
import { UserModule } from "./user/user.module";

@Module({
  imports: [UserModule, UserMealModule, UserMealLocationModule],
})
export class UsersModule {}
