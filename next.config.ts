import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/do8gdtozt/**",
      },
    ],
  },
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },
  // Otimização de Build
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "query",
            key: "feed",
          },
        ],
        destination: "/:path*",
        permanent: true,
      },
      // Redirects 301 - Nova Arquitetura de Silos
      {
        source: "/blog/alisamento-natural-com-maizena-funciona",
        destination: "/alisamento-caseiro/alisamento-natural-com-maizena-funciona",
        permanent: true,
      },
      {
        source: "/blog/hidraliso-funciona-resenha",
        destination: "/progressivas-de-chuveiro/hidraliso-funciona-resenha",
        permanent: true,
      },
      {
        source: "/blog/melhores-progressivas-de-chuveiro",
        destination: "/comparativos/melhores-progressivas-de-chuveiro",
        permanent: true,
      },
      {
        source: "/blog/hidraliso-vs-la-bella-liss",
        destination: "/comparativos/hidraliso-vs-la-bella-liss",
        permanent: true,
      },
      {
        source: "/blog/como-usar-hidraliso-passo-a-passo",
        destination: "/cuidados/como-usar-hidraliso-passo-a-passo",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
