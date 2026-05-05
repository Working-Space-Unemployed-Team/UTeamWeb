/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  allowedDevOrigins: [
    'vm-7car6mnnuxsh9bfmxjjijaot.vusercontent.net',
    'localhost',
    '127.0.0.1',
  ],
}

export default nextConfig
