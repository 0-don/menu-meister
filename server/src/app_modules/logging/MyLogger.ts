import { ConsoleLogger } from "@nestjs/common";

export class MyLogger extends ConsoleLogger {
  error(message: string, trace: string) {
    // add your tailored logic here
    super.error(message, trace);
  }
}
