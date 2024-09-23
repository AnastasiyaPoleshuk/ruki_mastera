import path from "path";

import { defineConfig } from "vite";

export default defineConfig(({ command }) => ({
  resolve: {
    alias: {
      "@app": path.resolve(__dirname, "./src/app"),
      "@widgets": path.resolve(__dirname, "./src/widgets"),
      "@pages": path.resolve(__dirname, "./src/pages"),
      "@entities": path.resolve(__dirname, "./src/entities"),
      "@features": path.resolve(__dirname, "./src/features"),
    },
  },
}));
