import { Module } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthUserResolver } from "./resolver/auth-user.resolver";
import { AuthResolver } from "./resolver/auth.resolver";

@Module({
  providers: [AuthService, AuthResolver, AuthUserResolver],
  exports: [AuthService],
})
export class AuthModule {}
