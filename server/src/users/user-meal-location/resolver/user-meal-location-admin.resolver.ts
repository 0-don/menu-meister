import { UserMealLocation } from "@/app_modules/@generated/user-meal-location/user-meal-location.model";
import { PrismaService } from "@/app_modules/prisma/prisma.service";
import { Resolver } from "@nestjs/graphql";
import { UserMeaLocationService } from "../user-meal-location.service";

@Resolver(() => UserMealLocation)
export class UserMealLocationAdminResolver {
  constructor(
    private prisma: PrismaService,
    private userMealLocationService: UserMeaLocationService,
  ) {}
}
