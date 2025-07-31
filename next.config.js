/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  images: {
    unoptimized: true,
  },
  serverExternalPackages: [],
  serverRuntimeConfig: {
    // Increase timeout for API routes
    maxDuration: 30,
  },
};

module.exports = nextConfig;
