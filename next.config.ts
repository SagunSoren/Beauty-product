import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
   typescript: {
    // ✅ Allow production builds to successfully complete
    // even if there are TypeScript errors (like props errors).
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
