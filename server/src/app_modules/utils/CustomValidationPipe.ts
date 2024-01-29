import { ArgumentMetadata, Injectable, ValidationPipe } from "@nestjs/common";

@Injectable()
export class CustomValidationPipe extends ValidationPipe {
  async transform(value: any, metadata: ArgumentMetadata) {
    // This is the only change from the original ValidationPipe
    // It allows us to pass a File object through the pipe
    if (metadata.metatype && metadata.metatype.name === "File") {
      return value;
    }
    return super.transform(value, metadata);
  }
}
