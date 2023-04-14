/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'encrypted-tbn0.gstatic.com',
        port: '',
        pathname: '/images/**',
      },
    ],
  },
}

module.exports = nextConfig

//https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKgwZr4PeCzY6OAQ1om5D8fCHlPn35rcanOQ&usqp=CAU