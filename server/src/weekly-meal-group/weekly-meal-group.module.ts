import { Module } from "@nestjs/common";
import { WeeklyMealGroupAdminResolver } from "./resolver/weekly-meal-group-admin.resolver";
import { WeeklyMealGroupService } from "./weekly-meal-group.service";

@Module({
  providers: [WeeklyMealGroupService, WeeklyMealGroupAdminResolver],
  exports: [],
})
export class WeeklyMealGroupModule {}
