import { Module } from "@nestjs/common";
import { UserMealModule } from "./user-meal/user-meal.module";
import { UserModule } from "./user/user.module";

@Module({
  imports: [UserModule, UserMealModule],
})
export class UsersModule {}
