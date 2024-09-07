/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/dvpwgfigk/image/upload/**",
      },
    ],
  },
  transpilePackages: ['@storefront-ui/react'],
}

export default nextConfig
