import { MealAdminResolver } from "@/meal/resolver/meal-admin.resolver";
import { Module } from "@nestjs/common";
import { MealIngredientService } from "./meal-ingredient.service";
import { MealIngredientAdminResolver } from "./resolver/meal-ingredient-admin.resolver";

@Module({
  providers: [
    MealIngredientService,
    MealAdminResolver,
    MealIngredientAdminResolver,
  ],
  exports: [],
})
export class MealIngredientModule {}
