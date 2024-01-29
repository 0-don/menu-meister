import { ArgumentMetadata, Injectable, ValidationPipe } from "@nestjs/common";

@Injectable()
export class CustomValidationPipe extends ValidationPipe {
  async transform(value: any, metadata: ArgumentMetadata) {
    if (metadata.metatype && metadata.metatype.name === "File") {
      return value;
    }
    return super.transform(value, metadata);
  }
}
