import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    hmr: true,
  },
  pages: {
    index: {
      hmr: true,
    },
  },
  plugins: [react()],
});
