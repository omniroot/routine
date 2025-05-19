import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import stylex from "vite-plugin-stylex";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  // @ts-ignore
  plugins: [react(), stylex({})],
  resolve: {
    alias: {
      "@pages": path.resolve(__dirname, "src", "pages"),
      "@features": path.resolve(__dirname, "src", "components", "features"),
      "@ui": path.resolve(__dirname, "src", "components", "ui"),
      "@components": path.resolve(__dirname, "src", "components"),
      "@": path.resolve(__dirname, "src"),
      "~": path.resolve(__dirname),
    },
  },
});
