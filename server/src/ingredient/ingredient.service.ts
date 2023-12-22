import { Injectable } from "@nestjs/common";
import { PrismaService } from "../app_modules/prisma/prisma.service";

@Injectable()
export class IngredientService {
  constructor(private prisma: PrismaService) {}
}
