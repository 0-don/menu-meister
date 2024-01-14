import { Module } from "@nestjs/common";
import { WeeklyMealGroupAdminResolver } from "./resolver/weekly-meal-group-admin.resolver";
import { WeeklyMealGroup } from "./weekly-meal-group.service";

@Module({
  providers: [WeeklyMealGroup, WeeklyMealGroupAdminResolver],
  exports: [],
})
export class WeeklyMealGroupModule {}
