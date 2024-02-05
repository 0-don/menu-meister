import { User } from "@/app_modules/@generated/user/user.model";
import { PrismaService } from "@/app_modules/prisma/prisma.service";
import { Resolver } from "@nestjs/graphql";
import { UserService } from "../user.service";

@Resolver(() => User)
export class UserUserResolver {
  constructor(
    private prisma: PrismaService,
    private userService: UserService,
  ) {}
}
