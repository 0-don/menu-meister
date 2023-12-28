import { Module } from "@nestjs/common";
import { MealGroupService } from "./meal-group.service";
import { MealGroupAdminResolver } from "./resolver/meal-group-admin.resolver";

@Module({
  providers: [MealGroupService, MealGroupAdminResolver],
  exports: [],
})
export class MealGroupModule {}
