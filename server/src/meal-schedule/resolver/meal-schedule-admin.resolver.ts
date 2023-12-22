import { MealSchedule } from "@/app_modules/@generated/meal-schedule/meal-schedule.model";
import { PrismaService } from "@/app_modules/prisma/prisma.service";
import { Resolver } from "@nestjs/graphql";
import { MealScheduleService } from "../meal-schedule.service";

@Resolver(() => MealSchedule)
export class MealScheduleAdminResolver {
  constructor(
    private prisma: PrismaService,
    private mealScheduleService: MealScheduleService,
  ) {}
}
