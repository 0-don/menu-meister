import { Module } from "@nestjs/common";
import { SettingsAdminResolver } from "./resolver/settings-admin.resolver";
import { SettingsService } from "./settings.service";

@Module({
  providers: [SettingsService, SettingsAdminResolver],
  exports: [SettingsService],
})
export class SettingsModule {}
