import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  webpack: (config) => {
    config.watchOptions = {
      ignored: /node_modules|\.next/,
      aggregateTimeout: 300,
      poll: 1000,
    };
    return config;
  },
};

export default nextConfig;
