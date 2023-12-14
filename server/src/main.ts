import cors from "@fastify/cors";
import { ValidationPipe } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import {
  FastifyAdapter,
  NestFastifyApplication,
} from "@nestjs/platform-fastify";
import { useContainer } from "class-validator";
import "dotenv/config";
import { AppModule } from "./app.module";
import { CORS_DOMAINS, PORT } from "./constants";

async function bootstrap() {
  const fastify = new FastifyAdapter({});

  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    fastify,
  );
  await app.register(cors as any, {
    origin: process.env.NODE_ENV === "production" ? CORS_DOMAINS : false,
    credentials: true,
  });

  // class-validator
  app.useGlobalPipes(new ValidationPipe({ forbidUnknownValues: false }));

  // class-validator
  useContainer(app.select(AppModule), { fallbackOnErrors: true });

  process.env.NODE_ENV === "production"
    ? await app.listen(PORT, "0.0.0.0")
    : await app.listen(PORT);
}

bootstrap();
