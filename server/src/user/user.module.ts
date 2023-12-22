import { AuthService } from "@/auth/auth.service";
import { Module } from "@nestjs/common";
import { UserAdminResolver } from "./resolver/user-admin.resolver";
import { UserService } from "./user.service";

@Module({
  providers: [UserService, AuthService, UserAdminResolver],
  exports: [UserService],
})
export class UserModule {}
