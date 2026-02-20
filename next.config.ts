import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",   // 👈 YE ADD KARNA HAI

  images: {
    unoptimized: true,   // 👈 YE BHI ADD KARO (IMPORTANT)
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
    ],
  },
};

export default nextConfig;
