import { UserMealScalarFieldEnum } from "@/app_modules/@generated/user-meal/user-meal-scalar-field.enum";
import { Injectable } from "@nestjs/common";
import { PrismaService } from "../../app_modules/prisma/prisma.service";
import { UserMealGroupedCountAdminInput } from "./model/input/user-meal-grouped-count-admin.input";
import { UserMealGroupedCountAdminOutput } from "./model/output/user-meal-grouped-count-admin.output";

@Injectable()
export class UserMealService {
  constructor(private prisma: PrismaService) {}

  async getUserMealsGroupedCount(
    data: UserMealGroupedCountAdminInput,
  ): Promise<UserMealGroupedCountAdminOutput[]> {
    const mealsGrouped = await this.prisma.userMeal.groupBy({
      where: {
        mealBoardPlanId: { equals: data.mealBoardPlanId },
        date: { gte: data.dateFrom, lte: data.dateTo },
      },
      by: [UserMealScalarFieldEnum.date, UserMealScalarFieldEnum.mealId],
      _count: { mealId: true },
    });
    const mealIds = mealsGrouped.map((meal) => meal.mealId);

    const meals = await this.prisma.meal.findMany({
      where: { id: { in: mealIds } },
      select: { id: true, name: true },
    });

    return mealsGrouped
      .map((meal) => {
        const mealData = meals.find((m) => m.id === meal.mealId);
        return {
          count: meal._count?.mealId,
          date: meal.date.toISOString(),
          meal: mealData.name,
        };
      })
      .sort((a, b) => (a.date > b.date ? 1 : a.date < b.date ? -1 : 0));
  }
}
