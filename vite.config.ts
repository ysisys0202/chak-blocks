import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import path from "path";
import { defineConfig, UserConfig } from "vitest/config";
import svgr from "vite-plugin-svgr";

export default defineConfig({
  plugins: [vanillaExtractPlugin(), svgr()] as UserConfig["plugins"],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/test/setupTests.ts",
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"), // `src` 디렉토리를 `@`로 별칭
    },
  },
  optimizeDeps: {
    exclude: ["DocsRenderer-CFRXHY34-NWNQ4M6E.js"],
  },
});
