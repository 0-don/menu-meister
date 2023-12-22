import { Module } from "@nestjs/common";
import { MealService } from "./meal.service";
import { MealAdminResolver } from "./resolver/meal-admin.resolver";

@Module({
  providers: [MealService, MealAdminResolver],
  exports: [],
})
export class MealModule {}
