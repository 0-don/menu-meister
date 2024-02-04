import { Meal as Allergens } from "@/app_modules/@generated/meal/meal.model";
import { PrismaService } from "@/app_modules/prisma/prisma.service";
import { Resolver } from "@nestjs/graphql";
import { AllergensService } from "../allergens.service";

@Resolver(() => Allergens)
export class AllergensAdminResolver {
  constructor(
    private prisma: PrismaService,
    private allergensService: AllergensService,
  ) {}
}
