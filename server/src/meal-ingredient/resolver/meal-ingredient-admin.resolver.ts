import { MealIngredient } from "@/app_modules/@generated/meal-ingredient/meal-ingredient.model";
import { PrismaService } from "@/app_modules/prisma/prisma.service";
import { Resolver } from "@nestjs/graphql";
import { MealIngredientService } from "../meal-ingredient.service";

@Resolver(() => MealIngredient)
export class MealIngredientAdminResolver {
  constructor(
    private prisma: PrismaService,
    private mealIngredientService: MealIngredientService,
  ) {}
}
