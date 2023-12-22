import { Module } from "@nestjs/common";
import { MealSchedulerService } from "./meal-scheduler.service";
import { MealSchedulerAdminResolver } from "./resolver/meal-ingredient-admin.resolver";

@Module({
  providers: [MealSchedulerService, MealSchedulerAdminResolver],
  exports: [],
})
export class MealIngredientModule {}
