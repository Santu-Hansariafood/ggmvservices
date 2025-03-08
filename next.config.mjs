/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      unoptimized: true, // ✅ Allows loading images from the public folder
    },
    reactStrictMode: true, // ✅ Recommended for better debugging
  };
  
  export default nextConfig;
  