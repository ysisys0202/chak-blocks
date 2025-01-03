import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import { defineConfig, UserConfig } from "vitest/config";

export default defineConfig({
  plugins: [vanillaExtractPlugin()] as UserConfig["plugins"],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/test/setupTests.ts",
  },
});
