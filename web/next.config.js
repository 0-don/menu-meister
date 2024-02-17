const { loadEnvConfig } = require("@next/env");
const withNextIntl = require("next-intl/plugin")();

loadEnvConfig(process.cwd());

/** @type {import('next').NextConfig} */
const config = {
  poweredByHeader: false,
  logging: {
    fetches: {
      fullUrl: process.env.NODE_ENV === "production",
    },
  },
};

module.exports = withNextIntl({ ...config });
