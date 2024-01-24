import { Module } from "@nestjs/common";
import { SettingsAdminResolver } from "./resolver/settings-admin.resolver";
import { SettingsUserResolver } from "./resolver/settings-user.resolver";
import { SettingsService } from "./settings.service";

@Module({
  providers: [SettingsService, SettingsAdminResolver, SettingsUserResolver],
  exports: [SettingsService],
})
export class SettingsModule {}
