import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()], // ✅ make sure to include React plugin
  server: {
    proxy: {
      "/api": "http://localhost:5000",
    },
  },
});
