import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
      {
        protocol: "http",
        hostname: "**",
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: "/api/listings/:path*",
        destination: "https://next-match-server.vercel.app/api/listings/:path*",
      },
      {
        source: "/api/listings",
        destination: "https://next-match-server.vercel.app/api/listings",
      },
      {
        source: "/api/ai/:path*",
        destination: "https://next-match-server.vercel.app/api/ai/:path*",
      },
    ];
  },
  reactCompiler: true,
};

export default nextConfig;
