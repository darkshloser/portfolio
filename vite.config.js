import { defineConfig, loadEnv } from "vite";
import vue from '@vitejs/plugin-vue' // vue 3
// import { createVuePlugin as vue } from "vite-plugin-vue2"; //vue 2
const path = require("path");

// import.meta.env.VITE_PORT available here with: process.env.VITE_PORT
export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };
  return defineConfig({
    server: {
      host: true,
      port: process.env.VITE_PORT,
    },
    plugins: [vue()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    }
  });
}