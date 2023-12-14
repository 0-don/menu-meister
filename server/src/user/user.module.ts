import { AuthService } from "@/auth/auth.service";
import { Module } from "@nestjs/common";
import { UserUserResolver } from "./resolver/user-user.resolver";
import { UserService } from "./user.service";

@Module({
  providers: [UserService, AuthService, UserUserResolver],
  exports: [UserService],
})
export class UserModule {}
