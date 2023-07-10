/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    workerThreads:false,
    cpus: 4
  }
}

module.exports = nextConfig
