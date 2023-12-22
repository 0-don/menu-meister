import cors from "@fastify/cors";
import { ValidationPipe } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import {
  FastifyAdapter,
  NestFastifyApplication,
} from "@nestjs/platform-fastify";
import { useContainer } from "class-validator";
import "dotenv/config";
import { UploadOptions, processRequest } from "graphql-upload-minimal";
import { AppModule } from "./app.module";
import { FastifyInstance } from "./app_modules/@types/types";
import { CORS_DOMAINS, PORT } from "./constants";

async function fastifyGraphqlUploadMinimal(
  fastify: FastifyInstance,
  opts: UploadOptions,
): Promise<void> {
  fastify.addContentTypeParser("multipart", (request, payload, done) => {
    console.log("request", request);
    processRequest(payload, (request as any).raw, opts)
      .then((body) => {
        request.body = body;
        done(null);
      })
      .catch((err) => done(err));
  });
}

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

  await app.register(require("@fastify/cookie"));

  await app.register(fastifyGraphqlUploadMinimal, {
    maxFileSize: 10000000,
    maxFiles: 1000,
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
