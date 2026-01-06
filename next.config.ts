import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      { hostname: "www.mangerbouger.fr" },
      { hostname: "www.produits-laitiers.com" },
      { hostname: "www.afdn.org" },
      { hostname: "www.cerin.org" },
      { hostname: "www.anses.fr" },
      { hostname: "www.santepubliquefrance.fr" },
    ],
  },
}

export default nextConfig
