import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // All images are pre-optimized WebP served from /public. Skipping Next's
    // on-demand image optimization (sharp) avoids its per-request memory
    // cost, which matters on a small droplet.
    unoptimized: true,
  },
};

export default nextConfig;
