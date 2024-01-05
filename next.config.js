/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: ["mongoose"],
  },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "res.cloudinary.com", port: "" },
    ],
  },
};

module.exports = nextConfig;

// mongodb+srv://mahmoudsalah11350:Ss3236113@tech-shop.mn9hfhl.mongodb.net/
