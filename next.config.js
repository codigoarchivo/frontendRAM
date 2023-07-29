/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        hostname: "rickandmortyapi.com",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
