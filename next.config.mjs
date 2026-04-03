/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/LOOPKUN",
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "qr-official.line.me",
      },
    ],
  },
};

export default nextConfig;
