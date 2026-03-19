import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Gary Joyal | Joyal Capital Management",
    short_name: "Gary Joyal",
    description:
      "Founder and CEO of Joyal Capital Management - specializing in asset protection, estate planning, and family-owned ventures.",
    start_url: "/",
    display: "standalone",
    background_color: "#faf9f6",
    theme_color: "#0f2a4a",
    icons: [
      {
        src: "/favicon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
      {
        src: "/photos/cropped-logo1.png",
        sizes: "192x192",
        type: "image/png",
      },
    ],
  };
}
