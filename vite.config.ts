import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

const aliases = [""];
const prefix = "@";

export default defineConfig({
  resolve: {
    alias: aliases.map((alias) => ({
      find: `${prefix}${alias}`,
      replacement: path.resolve(__dirname, `src/${alias}`),
    })),
  },
  plugins: [vue({})],
});
