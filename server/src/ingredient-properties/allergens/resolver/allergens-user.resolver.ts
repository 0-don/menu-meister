import { Allergens } from "@/app_modules/@generated/allergens/allergens.model";
import { FindManyAllergensArgs } from "@/app_modules/@generated/allergens/find-many-allergens.args";
import { Roles } from "@/app_modules/decorators/roles.decorator";
import { PrismaService } from "@/app_modules/prisma/prisma.service";
import { Logger } from "@nestjs/common";
import { Args, Info, Query, Resolver } from "@nestjs/graphql";
import { PrismaSelect } from "@paljs/plugins";
import { Prisma } from "@prisma/client";
import { GraphQLResolveInfo } from "graphql";
import { AllergensService } from "../allergens.service";

@Resolver(() => Allergens)
export class AllergensUserResolver {
  constructor(
    private prisma: PrismaService,
    private allergensService: AllergensService,
  ) {}

  @Query(() => [Allergens], { nullable: true })
  @Roles("User", "Mod")
  async getAllAllergensUser(
    @Args() args: FindManyAllergensArgs,
    @Info() info: GraphQLResolveInfo,
  ) {
    const select = new PrismaSelect(info).value
      .select as Prisma.AllergensSelect;
    try {
      return await this.prisma.allergens.findMany({ ...args, select });
    } catch (e) {
      Logger.error(e);
      return null;
    }
  }
}
