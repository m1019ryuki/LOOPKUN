/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "qr-official.line.me",
      },
    ],
  },
};

export default nextConfig;
