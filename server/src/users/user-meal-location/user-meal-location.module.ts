import { Module } from "@nestjs/common";
import { UserMealLocationAdminResolver } from "./resolver/user-meal-location-admin.resolver";
import { UserMealLocationUserResolver } from "./resolver/user-meal-location-user.resolver";
import { UserMeaLocationService } from "./user-meal-location.service";

@Module({
  providers: [
    UserMeaLocationService,
    UserMealLocationUserResolver,
    UserMealLocationAdminResolver,
  ],
  exports: [UserMeaLocationService],
})
export class UserMealLocationModule {}
