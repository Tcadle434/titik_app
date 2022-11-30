/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'bafybeibl2zhzhbdbhi4k2pzi4hln6e27lgs5js7puf4tfymczhomqrk7cu.ipfs.nftstorage.link',
      'lh3.googleusercontent.com',
    ],
  },
};

module.exports = nextConfig;
