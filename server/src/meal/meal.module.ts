import { Module } from "@nestjs/common";
import { MealService } from "./meal.service";

@Module({
  providers: [MealService],
  exports: [],
})
export class UserModule {}
