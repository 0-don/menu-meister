import { PrismaService } from "@/app_modules/prisma/prisma.service";
import { Injectable } from "@nestjs/common";

@Injectable()
export class WeeklyMealGroupService {
  constructor(private prisma: PrismaService) {}
}
