import { MealScheduler as Ingredient } from "@/app_modules/@generated/meal-scheduler/meal-scheduler.model";
import { PrismaService } from "@/app_modules/prisma/prisma.service";
import { Resolver } from "@nestjs/graphql";
import { IngredientService } from "../ingredient.service";

@Resolver(() => Ingredient)
export class IngredientAdminResolver {
  constructor(
    private prisma: PrismaService,
    private ingredientService: IngredientService,
  ) {}
}
