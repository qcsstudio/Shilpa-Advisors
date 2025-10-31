/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // domains: ['www.qcsstudio.com','qcsstudio.vercel.app' , 'lh3.googleusercontent.com','media.licdn.com'],
    remotePatterns: [
      {
        protocol: "https",
        hostname: `shilpa-advisors.s3.eu-north-1.amazonaws.com`,
      },
      {
        protocol: "https",
        hostname: "firebasestorage.googleapis.com",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
      {
        protocol: "https",
        hostname: "drive.google.com",
      },
    ],
  },
};

export default nextConfig;
