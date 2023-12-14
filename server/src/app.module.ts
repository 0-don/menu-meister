import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { RequestContextModule } from "nestjs-request-context";

@Module({
  imports: [
    JwtModule.register({ secret: process.env.SECRET }),
    RequestContextModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
