import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",   // 👈 YE ADD KARNA HAI
  trailingSlash: false,

  async redirects() {
    return [
      {
        source: '/courses/ssb',
        destination: '/courses/ssb-interview-coaching-lucknow',
        permanent: true,
      },
      {
        source: '/courses/sainik-school',
        destination: '/courses/sainik-school-coaching-lucknow',
        permanent: true,
      },
      {
        source: '/courses/nda-foundation-course-lucknow',
        destination: '/courses/foundation',
        permanent: true,
      },
      {
        source: '/blog/nda-vs-cds-questions',
        destination: '/blog/nda-vs-cds',
        permanent: true,
      },
      {
        source: '/blog/nda-vs-cds-exam-comparison-selection-roadmap',
        destination: '/blog/nda-vs-cds',
        permanent: true,
      },
    ];
  },

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
