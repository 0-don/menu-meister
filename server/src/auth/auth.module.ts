import { Module } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthUserResolver } from "./resolver/auth-user.resolver";
import { AuthResolver } from "./resolver/auth.resolver";
import { UserExistsValidator } from "./validators/user-exist.validator";

@Module({
  providers: [AuthService, AuthResolver, UserExistsValidator, AuthUserResolver],
  exports: [AuthService],
})
export class AuthModule {}
