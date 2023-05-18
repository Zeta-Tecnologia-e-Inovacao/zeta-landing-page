/** @type {import('next').NextConfig} */
// next.config.js
const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  reactStrictMode: true,
  assetPrefix: isProd ? '/zeta-landing-page/' : '',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
