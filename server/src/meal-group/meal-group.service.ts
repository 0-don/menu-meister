import { Injectable } from "@nestjs/common";
import { PrismaService } from "../app_modules/prisma/prisma.service";

@Injectable()
export class MealGroupService {
  constructor(private prisma: PrismaService) {}
}
