/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "192.168.68.112",
        port: "8000",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "blog-admin.robibat.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
