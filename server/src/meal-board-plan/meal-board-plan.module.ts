import { Module } from "@nestjs/common";
import { MealBoardPlanService } from "./meal-board-plan.service";
import { MealBoardPlanAdminResolver } from "./resolver/meal-board-plan-admin.resolver";
import { MealBoardPlanUserResolver } from "./resolver/meal-board-plan-user.resolver";

@Module({
  providers: [
    MealBoardPlanService,
    MealBoardPlanAdminResolver,
    MealBoardPlanUserResolver,
  ],
  exports: [],
})
export class MealBoardPlanModule {}
