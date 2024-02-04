import { AuthService } from "@/auth/auth.service";
import { Module } from "@nestjs/common";
import { UserAdminResolver } from "./resolver/user-admin.resolver";
import { UserUserResolver } from "./resolver/user-user.resolver";
import { UserService } from "./user.service";

@Module({
  providers: [UserService, AuthService, UserAdminResolver, UserUserResolver],
  exports: [UserService],
})
export class UserModule {}
