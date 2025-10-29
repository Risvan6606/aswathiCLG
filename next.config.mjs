/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove basePath and assetPrefix for normal deployment
  images: {
    unoptimized: true,
  },
};

export default nextConfig;