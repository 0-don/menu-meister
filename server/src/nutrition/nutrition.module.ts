import { Module } from "@nestjs/common";
import { NutritionService } from "./nutrition.service";
import { NutritionAdminResolver } from "./resolver/nutrition-admin.resolver";

@Module({
  providers: [NutritionService, NutritionAdminResolver],
  exports: [],
})
export class NutritionModule {}
