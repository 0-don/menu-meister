import { Module } from "@nestjs/common";
import { IngredientService } from "./ingredient.service";
import { IngredientAdminResolver } from "./resolver/ingredient-admin.resolver";

@Module({
  providers: [IngredientAdminResolver, IngredientService],
  exports: [],
})
export class IngredientIModule {}
