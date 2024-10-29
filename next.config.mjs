/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["iili.io"], 
  },
  reactStrictMode: true, // فعال‌سازی React Strict Mode برای کمک به تشخیص خطاها
  experimental: {
    reactRefresh: false, // غیرفعال کردن Fast Refresh
  },
};

export default nextConfig;
