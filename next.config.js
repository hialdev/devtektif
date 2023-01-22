/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  useFileSystemPublicRoutes: false,
  images: {
    domains:['i.pinimg.com'],
  }
}

module.exports = nextConfig
