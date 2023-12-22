import { ConsoleLogger } from "@nestjs/common";
import ErrorStackParser from "error-stack-parser";
export class MyLogger extends ConsoleLogger {
  PROD: boolean = process.env.NODE_ENV === "production";
  error(message: string, trace: string | Error) {
    if (this.PROD) {
      super.error(message, trace);
    } else {
      const errorObj = trace instanceof Error ? trace : new Error(trace);
      const lines = ErrorStackParser.parse(errorObj)
        .map(
          (frame) =>
            `${frame.fileName}:${frame.lineNumber}:${frame.columnNumber}`,
        )
        .filter((line) => !line.includes("node_modules"))
        .join("\n");

      const error = JSON.stringify(message);
      super.error(`\n${error}\n${lines}`);
    }
  }
}
