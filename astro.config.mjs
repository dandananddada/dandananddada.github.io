import { defineConfig } from 'astro/config';
import yaml from '@rollup/plugin-yaml';
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [yaml(), tailwindcss()],
    resolve: {
      alias: {
        "@": "/src",
      }
    },
    build: {
      sourcemap: true, // 确保 sourcemap 配置正确
    },
    server: {
      sourcemap: true, // 确保开发服务器也启用 sourcemap
    }
  },
  site: 'https://eten.wang',
});
