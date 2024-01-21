import { Module } from "@nestjs/common";
import { RecipeService } from "./recipe.service";
import { RecipeAdminResolver } from "./resolver/recipe-admin.resolver";

@Module({
  providers: [RecipeService, RecipeAdminResolver],
  exports: [RecipeService],
})
export class RecipeModule {}
