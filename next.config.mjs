/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["images.pexels.com"],
  },
  output: "export",
  basePath: "/portfolio", // Replace with your repo name
  assetPrefix: "/portfolio",
};

export default nextConfig;
