import { Injectable } from "@nestjs/common";
import { PrismaService } from "../app_modules/prisma/prisma.service";

@Injectable()
export class MealIngredientService {
  constructor(private prisma: PrismaService) {}
}
