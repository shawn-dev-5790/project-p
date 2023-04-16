/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'p.kindpng.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
}

module.exports = nextConfig
