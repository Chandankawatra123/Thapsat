module.exports = {
  env: {
    PUBLIC_URL: ''
  },
  experimental: {
    craCompat: true,
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  }
}
