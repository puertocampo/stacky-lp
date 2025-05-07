/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  output: "export",
  trailingSlash: true,
  distDir: "out",
  reactStrictMode: false,
  webpack: (config, { dev, isServer }) => {
    // 開発環境でのみ適用
    if (dev && !isServer) {
      config.watchOptions = {
        poll: 1000, // 1秒ごとにポーリング
        aggregateTimeout: 300, // 変更を検知してから再ビルドまでの待機時間
      };
    }
    return config;
  },
};

export default nextConfig
