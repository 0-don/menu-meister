import { MealScheduler as Nutrition } from "@/app_modules/@generated/meal-scheduler/meal-scheduler.model";
import { PrismaService } from "@/app_modules/prisma/prisma.service";
import { Resolver } from "@nestjs/graphql";
import { NutritionService } from "../nutrition.service";

@Resolver(() => Nutrition)
export class NutritionAdminResolver {
  constructor(
    private prisma: PrismaService,
    private nutritionService: NutritionService,
  ) {}
}
