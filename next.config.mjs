/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "https://dinkumdoc.com/",
        port: "",
        pathname: '/',
      },
    ],
  },
};

export default nextConfig;
