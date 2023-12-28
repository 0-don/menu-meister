import { Module } from "@nestjs/common";
import { ScheduleMealAdminResolver } from "./resolver/schedule-meal-admin.resolver";
import { ScheduleMealService } from "./schedule-meal.service";

@Module({
  providers: [ScheduleMealService, ScheduleMealAdminResolver],
  exports: [],
})
export class ScheduleMealModule {}
