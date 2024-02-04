import { Module } from "@nestjs/common";
import { AllergensService } from "./allergens.service";
import { AllergensAdminResolver } from "./resolver/allergens-admin.resolver";
import { AllergensUserResolver } from "./resolver/allergens-user.resolver";

@Module({
  providers: [AllergensService, AllergensUserResolver, AllergensAdminResolver],
  exports: [],
})
export class AllergensModule {}
