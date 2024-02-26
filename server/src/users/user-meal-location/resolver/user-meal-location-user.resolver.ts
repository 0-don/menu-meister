import { UserMealLocation } from "@/app_modules/@generated/user-meal-location/user-meal-location.model";
import { PrismaService } from "@/app_modules/prisma/prisma.service";
import { Resolver } from "@nestjs/graphql";
import { UserMeaLocationService } from "../user-meal-location.service";

@Resolver(() => UserMealLocation)
export class UserMealLocationUserResolver {
  constructor(
    private prisma: PrismaService,
    private userMealLocationService: UserMeaLocationService,
  ) {}

  // @Query(() => [UserMealLocation], { nullable: true })
  // @Roles("User", "Mod")
  // async getAllUserMealLocationsUser(
  //   @Args() args: FindManyUserMealLocationArgs,
  //   @Info() info: GraphQLResolveInfo,
  // ) {
  //   const select = new PrismaSelect(info).value
  //     .select as Prisma.UserMealLocationSelect;

  //   try {
  //     return await this.prisma.userMealLocation.findMany({
  //       select,
  //       ...args,
  //     });
  //   } catch (e) {
  //     Logger.error(e);
  //     return null;
  //   }
  // }

  // @Query(() => UserMealLocation, { nullable: true })
  // @Roles("User", "Mod")
  // async getUserMealLocationUser(
  //   @Args() args: FindFirstUserMealLocationArgs,
  //   @Info() info: GraphQLResolveInfo,
  // ) {
  //   const select = new PrismaSelect(info).value
  //     .select as Prisma.UserMealLocationSelect;
  //   try {
  //     return await this.prisma.userMealLocation.findFirst({
  //       select,
  //       ...args,
  //     });
  //   } catch (e) {
  //     Logger.error(e);
  //     return null;
  //   }
  // }

  // @Mutation(() => UserMealLocation, { nullable: true })
  // @Roles("User", "Mod")
  // async createUserMealLocationUser(
  //   @Args("data") data: UserMealLocationUncheckedCreateInput,
  //   @Info() info: GraphQLResolveInfo,
  // ) {
  //   const select = new PrismaSelect(info).value
  //     .select as Prisma.UserMealLocationSelect;
  //   try {
  //     return await this.prisma.userMealLocation.create({ data: data as any, select });
  //   } catch (e) {
  //     Logger.error(e);
  //     return null;
  //   }
  // }

  // @Mutation(() => [UserMealLocation], { nullable: true })
  // @Roles("User", "Mod")
  // async createManyUserMealLocationsUser(
  //   @Args() args: CreateManyUserMealLocationArgs,
  //   @Info() info: GraphQLResolveInfo,
  // ) {
  //   const select = new PrismaSelect(info).value
  //     .select as Prisma.UserMealLocationSelect;
  //   try {
  //     const data = await Promise.all(
  //       args.data.map((data) =>
  //         this.prisma.userMealLocation.create({ data, select }),
  //       ),
  //     );

  //     return data;
  //   } catch (e) {
  //     Logger.error(e);
  //     return null;
  //   }
  // }

  // @Mutation(() => UserMealLocation, { nullable: true })
  // @Roles("User", "Mod")
  // async deleteUserMealLocationUser(
  //   @Args() args: DeleteOneUserMealLocationArgs,
  //   @Info() info: GraphQLResolveInfo,
  // ) {
  //   const select = new PrismaSelect(info).value
  //     .select as Prisma.UserMealLocationSelect;
  //   try {
  //     return await this.prisma.userMealLocation.delete({ ...args, select });
  //   } catch (e) {
  //     Logger.error(e);
  //     return null;
  //   }
  // }

  // @Mutation(() => Int, { nullable: true })
  // @Roles("User", "Mod")
  // async deleteManyUserMealLocationsUser(
  //   @Args() args: DeleteManyUserMealLocationArgs,
  // ) {
  //   try {
  //     return (await this.prisma.userMealLocation.deleteMany({ ...args })).count;
  //   } catch (e) {
  //     Logger.error(e);
  //     return null;
  //   }
  // }

  // @Mutation(() => UserMealLocation, { nullable: true })
  // @Roles("User", "Mod")
  // async updateUserMealLocationUser(
  //   @Args() args: UpdateOneUserMealLocationArgs,
  //   @Info() info: GraphQLResolveInfo,
  // ) {
  //   const select = new PrismaSelect(info).value
  //     .select as Prisma.UserMealLocationSelect;
  //   try {
  //     return await this.prisma.userMealLocation.update({
  //       ...(args as any),
  //       select,
  //     });
  //   } catch (e) {
  //     Logger.error(e);
  //     return null;
  //   }
  // }

  // @Mutation(() => [UserMealLocation], { nullable: true })
  // @Roles("User", "Mod")
  // async updateManyUserMealLocationsUser(
  //   @Args() args: UpdateManyUserMealLocationArgs,
  //   @Info() info: GraphQLResolveInfo,
  // ) {
  //   const select = new PrismaSelect(info).value
  //     .select as Prisma.UserMealLocationSelect;
  //   try {
  //     const data = await this.prisma.userMealLocation.findMany({
  //       where: args.where,
  //       select,
  //     });

  //     await this.prisma.userMealLocation.updateMany({ ...args });

  //     return data.map((d) => ({ ...d, ...args.data }));
  //   } catch (e) {
  //     Logger.error(e);
  //     return null;
  //   }
  // }

  // @Mutation(() => UserMealLocation, { nullable: true })
  // @Roles("User", "Mod")
  // async upsertUserMealLocationUser(
  //   @Args() args: UpsertOneUserMealLocationArgs,
  //   @Info() info: GraphQLResolveInfo,
  // ) {
  //   const select = new PrismaSelect(info).value
  //     .select as Prisma.UserMealLocationSelect;
  //   try {
  //     return await this.prisma.userMealLocation.upsert({
  //       ...(args as any),
  //       select,
  //     });
  //   } catch (e) {
  //     Logger.error(e);
  //     return null;
  //   }
  // }

  // @Mutation(() => UserMealLocation, { nullable: true })
  // @Roles("User", "Mod")
  // async updateUserMealUser(
  //   @Args() args: UpdateOneUserMealLocationArgs,
  //   @Info() info: GraphQLResolveInfo,
  // ) {
  //   const select = new PrismaSelect(info).value
  //     .select as Prisma.UserMealLocationSelect;
  //   try {
  //     return await this.prisma.userMealLocation.update({
  //       ...(args as any),
  //       select,
  //     });
  //   } catch (e) {
  //     Logger.error(e);
  //     return null;
  //   }
  // }

  // @Mutation(() => UserMealLocation, { nullable: true })
  // @Roles("User", "Mod")
  // async upsertUserMealUser(
  //   @Args() args: UpsertOneUserMealLocationArgs,
  //   @Info() info: GraphQLResolveInfo,
  // ) {
  //   const select = new PrismaSelect(info).value
  //     ?.select as Prisma.UserMealLocationSelect;
  //   try {
  //     return await this.prisma.userMealLocation.upsert({
  //       ...(args as any),
  //       select,
  //     });
  //   } catch (e) {
  //     Logger.error(e);
  //     return null;
  //   }
  // }
}
