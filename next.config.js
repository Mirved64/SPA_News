/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'media.guim.co.uk',
        port: '',
        pathname: '/**',
      },
    ],
  },
}

module.exports = nextConfig
