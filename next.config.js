/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["localhost", "islamicdawah.com"],
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  output: "standalone",
  trailingSlash: true,
  generateEtags: false,
  poweredByHeader: false,
  compress: true,
  swcMinify: true,
}

module.exports = nextConfig
