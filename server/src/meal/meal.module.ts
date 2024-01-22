import { Module } from "@nestjs/common";
import { MealService } from "./meal.service";
import { MealAdminResolver } from "./resolver/meal-admin.resolver";
import { MealUserResolver } from "./resolver/meal-user.resolver";

@Module({
  providers: [MealService, MealAdminResolver, MealUserResolver],
  exports: [],
})
export class MealModule {}
