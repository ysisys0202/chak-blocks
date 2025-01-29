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
    coverage: {
      provider: "v8",
      reporter: ["text", "html"],
      include: ["src/components/**/*.{ts,tsx}"],
      exclude: [
        "src/components/**/*.stories.{ts,tsx}",
        "src/components/**/index.ts",
        "src/components/**/*.css.ts",
      ],
    },
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
