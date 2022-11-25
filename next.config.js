/** @type {import('next').NextConfig} */
const apiDevUrl = "http://localhost:3001";

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  urlApi: apiDevUrl
}

module.exports = nextConfig;
