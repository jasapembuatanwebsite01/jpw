import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",        // Static export untuk cPanel
  trailingSlash: true,     // Biar /about/ nggak 404
  images: {
    unoptimized: true,     // Matikan Image Optimization Next
  },
};

export default nextConfig;
