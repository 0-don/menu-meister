import { AuthService } from "@/auth/auth.service";
import { Module } from "@nestjs/common";
import { UserService } from "./user.service";

@Module({
  providers: [UserService, AuthService],
  exports: [UserService],
})
export class UserModule {}
