import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  // 部分预渲染
  // experimental: {
  //   ppr: "incremental"
  // }
  async rewrites() {
    return [
      {
        source: '/api/auth/:path*',
        destination: "/"
      }
    ]
  }
};


export default nextConfig;
