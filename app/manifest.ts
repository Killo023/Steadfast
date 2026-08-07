import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Steadfast Tactical | Firearm Competency Training",
    short_name: "Steadfast",
    description:
      "SAPS & PFTC accredited firearm competency training in Johannesburg, Gauteng.",
    start_url: "/",
    display: "standalone",
    background_color: "#000000",
    theme_color: "#0ea5e9",
    icons: [
      { src: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { src: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { src: "/favicon-192x192.png", sizes: "192x192", type: "image/png" },
      { src: "/favicon-512x512.png", sizes: "512x512", type: "image/png" },
      { src: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  };
}