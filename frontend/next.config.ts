import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
      {
        protocol: 'https',
        hostname: 'openweathermap.org',
      },

      {
        protocol: 'https',
        hostname: 'img.youtube.com',
      },
    ],
  },
  devIndicators: false,
};

export default nextConfig;
