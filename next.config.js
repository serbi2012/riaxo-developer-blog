/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {},
};

const withNextEnv = require("next-env");
const dotenvLoad = require("dotenv-load");

dotenvLoad();

module.exports = withNextEnv(nextConfig);
