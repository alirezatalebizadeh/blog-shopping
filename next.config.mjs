/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["iili.io"],
  },
  reactStrictMode: true,
  experimental: {
    reactRefresh: false, // غیرفعال کردن Fast Refresh
  },
};

export default nextConfig;
