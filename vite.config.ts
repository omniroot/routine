import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), svgr({})],
  resolve: {
    alias: {
      "@pages": path.resolve(__dirname, "src", "pages"),
      "@ui": path.resolve(__dirname, "src", "components", "ui"),
      "@widgets": path.resolve(__dirname, "src", "components", "widgets"),
      "@": path.resolve(__dirname, "src"),
      "~": path.resolve(__dirname),
    },
  },
});
