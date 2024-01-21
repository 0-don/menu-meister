import { Module } from "@nestjs/common";
import { MealBoardPlanService } from "./meal-board-plan.service";
import { MealBoardPlanAdminResolver } from "./resolver/meal-board-plan-admin.resolver";

@Module({
  providers: [MealBoardPlanService, MealBoardPlanAdminResolver],
  exports: [],
})
export class MealBoardPlanModule {}
