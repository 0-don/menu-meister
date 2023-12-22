import { Module } from "@nestjs/common";
import { MealScheduleService } from "./meal-schedule.service";
import { MealScheduleAdminResolver } from "./resolver/meal-schedule-admin.resolver";

@Module({
  providers: [MealScheduleService, MealScheduleAdminResolver],
  exports: [],
})
export class MealScheduleModule {}
