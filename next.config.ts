import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ['172.16.18.204', '172.16.18.204:3000', 'localhost:3000', 'localhost:3001'],
};

export default nextConfig;

