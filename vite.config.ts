import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import path from "path";
import { defineConfig, UserConfig } from "vitest/config";

export default defineConfig({
  plugins: [vanillaExtractPlugin()] as UserConfig["plugins"],
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
