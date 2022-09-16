import { defineConfig } from "vite";
import preact from "@preact/preset-vite";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    preact(),
    VitePWA({
      registerType: "autoUpdate",
      workbox: {
        globPatterns: ["**/*.{js,css,html,webp,svg}"],
      },
      devOptions: {
        enabled: true,
      },
      manifest: {
        orientation: "portrait",
        description:
          "Bastian Jakobi ist ein Javascript Entwickler mit drei Jahren Erfahrung in den Bereichen Fullstack-Softwareentwicklung und UI-/UX-Design.",
        name: "Bastian Jakobi",
        short_name: "Bastian Jakobi",
        theme_color: "#0B4F6C",
        icons: [
          {
            src: "/android-chrome-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/android-chrome-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "/android-chrome-maskable-192x192.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "maskable",
          },
          {
            src: "/android-chrome-maskable-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "maskable",
          },
        ],
      },
    }),
  ],
});
