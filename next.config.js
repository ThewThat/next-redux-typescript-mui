/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = {
  nextConfig,
  images: {
    domains: ['meow.senither.com','picsum.photos'],
  },
}

