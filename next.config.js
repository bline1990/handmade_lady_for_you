/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "yyhllvymwxscxuuhesyj.supabase.co",
        port: "",
        pathname: "/storage/v1/object/public/pictures/**",
      },
    ],
  },
  // OBRISATI cacheComponents
};

module.exports = nextConfig;
