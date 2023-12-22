import { MealScheduler } from "@/app_modules/@generated/meal-scheduler/meal-scheduler.model";
import { PrismaService } from "@/app_modules/prisma/prisma.service";
import { Resolver } from "@nestjs/graphql";
import { MealSchedulerService } from "../meal-scheduler.service";

@Resolver(() => MealScheduler)
export class MealSchedulerAdminResolver {
  constructor(
    private prisma: PrismaService,
    private mealService: MealSchedulerService,
  ) {}
}
