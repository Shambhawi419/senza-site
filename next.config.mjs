/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export — deploys directly to Cloudflare Pages with no server runtime.
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Emit /about/index.html style paths so static hosts route cleanly.
  trailingSlash: true,
  reactStrictMode: true,
};

export default nextConfig;
