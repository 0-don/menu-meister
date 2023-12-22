import { MealOrderByWithRelationInput } from "@/app_modules/@generated/meal/meal-order-by-with-relation.input";
import { MealWhereInput } from "@/app_modules/@generated/meal/meal-where.input";
import { Meal } from "@/app_modules/@generated/meal/meal.model";
import { Roles } from "@/app_modules/decorators/roles.decorator";
import { PrismaService } from "@/app_modules/prisma/prisma.service";
import { Args, Info, Query, Resolver } from "@nestjs/graphql";
import { PrismaSelect } from "@paljs/plugins";
import { GraphQLResolveInfo } from "graphql";
import { MealService } from "../meal.service";

@Resolver(() => Meal)
export class MealAdminResolver {
  constructor(
    private prisma: PrismaService,
    private mealService: MealService,
  ) {}

  @Query(() => [Meal], { nullable: true })
  @Roles("ADMIN")
  async getAllMealsAdmin(
    @Args("where", { nullable: true }) where: MealWhereInput,
    @Args("orderBy", { nullable: true })
    orderBy: MealOrderByWithRelationInput,
    @Info() info: GraphQLResolveInfo,
  ) {
    const select = new PrismaSelect(info).value;
    return await this.prisma.user.findMany({
      where,
      orderBy,
      ...select,
    });
  }
}
