const { loadEnvConfig } = require("@next/env");
const withNextIntl = require("next-intl/plugin")();

loadEnvConfig(process.cwd());

/** @type {import('next').NextConfig} */
const config = {
  poweredByHeader: false,
  webpack: (config) => {
    config.resolve = {
      ...config.resolve,
      fallback: {
        fs: false,
      },
    };
    return config;
  },
  // logging: {
  //   fetches: {
  //     fullUrl: process.env.NODE_ENV === "production",
  //   },
  // },
};

module.exports = withNextIntl({
  ...config,
});
