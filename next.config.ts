import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  images: {
    formats: ["image/webp"],
  },
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
