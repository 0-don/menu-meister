import { Settings } from "@/app_modules/@generated/settings/settings.model";
import { Roles } from "@/app_modules/decorators/roles.decorator";
import { PrismaService } from "@/app_modules/prisma/prisma.service";
import { Logger } from "@nestjs/common";
import { Query, Resolver } from "@nestjs/graphql";
import { SettingsUserOutput } from "../model/output/settings-user.output";
import { SettingsService } from "../settings.service";

@Resolver(() => Settings)
export class SettingsUserResolver {
  constructor(
    private prisma: PrismaService,
    private settingsService: SettingsService,
  ) {}

  @Query(() => SettingsUserOutput, { nullable: true })
  @Roles("User", "Mod")
  async getSettingsUser() {
    try {
      return await this.prisma.settings.findFirst({
        where: { id: 1 },
        select: { maxEditOrderDays: true },
      });
    } catch (e) {
      Logger.error(e);
      return null;
    }
  }
}
