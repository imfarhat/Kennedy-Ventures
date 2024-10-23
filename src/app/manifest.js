export default function manifest() {
  return {
    name: "Kennedy Ventures",
    short_name: "Kennedy Ventures",
    description:
      "Helping extraordinary founders build and grow great companies.",
    start_url: "/",
    display: "standalone",
    background_color: "#fff",
    theme_color: "#fff",
    display: "fullscreen",
    orientation: "portrait",
    icons: [
      {
        src: "/icon.png", // 512x512 for Android
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/icon.png", // 192x192 for Android
        sizes: "192x192",
        type: "image/png",
      },

      {
        src: "/icon.png", // iPhone
        sizes: "180x180",
        type: "image/png",
      },
      {
        src: "/icon.png", // iPad
        sizes: "167x167",
        type: "image/png",
      },
      {
        src: "/icon.png",
        sizes: "152x152",
        type: "image/png",
      },
      {
        src: "/icon.png",
        sizes: "120x120",
        type: "image/png",
      },
      {
        src: "/icon.png",
        sizes: "96x96",
        type: "image/png",
      },
      {
        src: "/icon.png",
        sizes: "120x120",
        type: "image/png",
      },
      {
        src: "/icon.png",
        sizes: "76x76",
        type: "image/png",
      },
      {
        src: "/icon.png",
        sizes: "72x72",
        type: "image/png",
      },
      {
        src: "/icon.png",
        sizes: "60x60",
        type: "image/png",
      },
      {
        src: "/icon.png",
        sizes: "48x48",
        type: "image/png",
      },
      {
        src: "/icon.png",
        sizes: "36x36",
        type: "image/png",
      },
      {
        src: "/favicon.ico",
        // sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
