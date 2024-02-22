/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{
      hostname: '**',
      protocol: 'https'
    }]},
    async rewrites() {
      return []
}
};

export default nextConfig;
