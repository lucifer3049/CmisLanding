import { defineConfig } from 'vite'
import vue from "@vitejs/plugin-vue";
import pages from "vite-plugin-pages";
import layouts from "vite-plugin-vue-layouts";
import path from "path";

const config = {
  plugins: [vue(), pages(), layouts()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src")
    }
  },
  server: {
    listen: "0.0.0.0",
    proxy: {
      '/webapi': {
        target: 'http://localhost:8000',
        changeOrigin: true,
        secure: false,
        ws: true,
      }
    }
  },
  base: './',
}

export default defineConfig(({ command, mode }) => {

  if (command === 'serve') {
    return config
  }
  else {
    config.base = '/'
    return config
  }
});
