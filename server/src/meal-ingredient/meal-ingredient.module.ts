import { Module } from "@nestjs/common";
import { MealIngredientService } from "./meal-ingredient.service";
import { MealIngredientAdminResolver } from "./resolver/meal-ingredient-admin.resolver";

@Module({
  providers: [MealIngredientService, MealIngredientAdminResolver],
  exports: [],
})
export class MealIngredientModule {}
