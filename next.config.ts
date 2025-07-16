import type { NextConfig } from "next";
import build from "next/dist/build";

const nextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: "**",
      },
    ],
  },
  experimental:{
    ppr: "incremental",
  },
  devIndicators:{
    appIsStatus: true,
    buildActivity: true,
    buildActivityPosition: "bottom-right",
  }
};

export default nextConfig;
