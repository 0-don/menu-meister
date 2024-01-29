import { NestFactory } from "@nestjs/core";
import { GraphQLSchemaHost } from "@nestjs/graphql";
import {
  FastifyAdapter,
  NestFastifyApplication,
} from "@nestjs/platform-fastify";
import { useContainer } from "class-validator";
import "dotenv/config";
import { writeFileSync } from "fs";
import { printSchema } from "graphql";
import { AppModule } from "./app.module";
import { CustomValidationPipe } from "./app_modules/utils/CustomValidationPipe";
import { MyLogger } from "./app_modules/utils/MyLogger";
import { CORS_DOMAINS, PORT } from "./constants";

async function bootstrap() {
  const fastify = new FastifyAdapter();

  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    fastify,
    { logger: new MyLogger() },
  );

  await app.register(require("@fastify/cookie"));

  app.enableCors({
    origin: process.env.NODE_ENV === "production" ? CORS_DOMAINS : false,
    credentials: true,
  });

  // class-validator
  app.useGlobalPipes(new CustomValidationPipe({ forbidUnknownValues: false }));

  // class-validator
  useContainer(app.select(AppModule), { fallbackOnErrors: true });

  if (process.env.NODE_ENV !== "production") {
    await app.init();
    const { schema } = app.get(GraphQLSchemaHost);
    writeFileSync("./schema.graphql", printSchema(schema));
  }

  fastify
    .getInstance()
    .addContentTypeParser("multipart/form-data", {}, (req, payload, done) =>
      done(null),
    );
  process.env.NODE_ENV === "production"
    ? await app.listen(PORT, "0.0.0.0")
    : await app.listen(PORT);
}

bootstrap();
