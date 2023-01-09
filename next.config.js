/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig

nextConfig.exports={
  webpack5:true,
  webpack:(config)=>{
    config.resolve.fallback = {fs : false};
    return config;
  }
  }