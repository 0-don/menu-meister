import { PrismaService } from "@/app_modules/prisma/prisma.service";
import { Injectable } from "@nestjs/common";
import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from "class-validator";

/**
 * Custom validator, checks for name/email unique.
 * Make sure that all your dependencies are not SCOPE.Default'ed.
 */
@ValidatorConstraint({ name: "user", async: true })
@Injectable()
export class UserExistsValidator implements ValidatorConstraintInterface {
  constructor(private readonly prisma: PrismaService) {}

  /**
   * Method should return true, if name is not taken.
   */
  async validate(email: string) {
    const result = await this.prisma.user.findFirst({
      where: { email: { equals: email } },
      select: { id: true },
    });

    return !result;
  }

  defaultMessage() {
    return "USER_EXISTS";
  }
}
