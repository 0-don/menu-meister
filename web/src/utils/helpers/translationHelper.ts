"use client";
import { IntlError, IntlErrorCode } from "next-intl";

export function getMessageFallbackTranslation({
  namespace,
  key,
  error,
}: {
  error: IntlError;
  key: string;
  namespace?: string | undefined;
}) {
  const path = [namespace, key].filter((part) => part != null).join(".");

  if (process.env.NODE_ENV === "development") {
  }

  if (error.code === IntlErrorCode.MISSING_MESSAGE) {
    return key;
  } else {
    return "";
  }
}

export function onErrorTranslation(error: IntlError) {
  if (error.code === IntlErrorCode.MISSING_MESSAGE) {
    // Missing translations are expected and should only log an error
  } else {
    // Other errors indicate a bug in the app and should be reported
  }
}
