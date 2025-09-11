/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  ...(isProd && {
    basePath: '/portfolio2025',
    assetPrefix: '/portfolio2025'
  })
}

module.exports = nextConfig
