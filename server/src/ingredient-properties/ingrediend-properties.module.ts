import { Module } from "@nestjs/common";
import { AllergensModule } from "./allergens/allergens.module";

@Module({
  imports: [AllergensModule],
})
export class IngredientPropertiesModule {}
