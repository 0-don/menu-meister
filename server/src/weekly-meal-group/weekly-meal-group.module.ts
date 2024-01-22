import { Module } from "@nestjs/common";
import { WeeklyMealGroupAdminResolver } from "./resolver/weekly-meal-group-admin.resolver";
import { WeeklyMealGroupUseresolver } from "./resolver/weekly-meal-group-user.resolver";
import { WeeklyMealGroupService } from "./weekly-meal-group.service";

@Module({
  providers: [
    WeeklyMealGroupService,
    WeeklyMealGroupAdminResolver,
    WeeklyMealGroupUseresolver,
  ],
  exports: [],
})
export class WeeklyMealGroupModule {}
