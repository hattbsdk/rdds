/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      // November iPhone draw page (static HTML in public/iphone.html)
      { source: "/iphone", destination: "/iphone.html" },
    ];
  },
};

export default nextConfig;
