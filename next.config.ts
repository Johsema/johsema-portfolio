import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true, // Necesario porque GitHub Pages no tiene el servidor de optimización de imágenes de Next.js
  },
  // Si tu repositorio de GitHub no usa dominio propio y queda en tipo: usuario.github.io/mi-portfolio
  // descomenta la siguiente línea y pon el nombre de tu repositorio:
  //basePath: '/portfolio',
};

export default nextConfig;
