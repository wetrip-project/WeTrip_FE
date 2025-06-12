import type { NextConfig } from 'next'
import createNextIntlPlugin from 'next-intl/plugin'
import NextPWA from 'next-pwa'

const withNextIntl = createNextIntlPlugin()

const withPWA = NextPWA({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development' || process.env.DISABLE_PWA === 'true',
  register: true,
  skipWaiting: true,
})

const nextConfig: NextConfig = withNextIntl({
  eslint: {
    ignoreDuringBuilds: true,
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })
    return config
  },
  experimental: {
    turbo: {
      rules: {
        '*.svg': {
          loaders: ['@svgr/webpack'],
          as: '*.js',
        },
      },
    },
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/main',
        permanent: true,
      },
    ]
  },
})

export default withPWA(nextConfig)
