/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.discordapp.com',
        port: '',
      },

    ],
  },
  env: {
    GITHUB_APP_CLIENT_ID: '526ae02f9132efc624cb',
    GITHUB_APP_CLIENT_SECRET: 'c7f36f07c224c0d095b2b69d7d0da1dd43ea4af7',
    NEXTAUTH_SECRET: 'k1JCreUpZ+3zh1anVs5EPugVUECoG+QM7s2K3PaK3WA=',
  },
}

module.exports = nextConfig
