import esbuild from "esbuild";
import { vanillaExtractPlugin } from "@vanilla-extract/esbuild-plugin";
import pkg from "./package.json" assert { type: "json" };

const dev = process.argv.includes("--dev");
const minify = !dev;

const watch = process.argv.includes("--watch");

const external = Object.keys({ ...pkg.dependencies, ...pkg.peerDependencies });

const baseConfig = {
  entryPoints: ["src/index.ts"],
  bundle: true,
  minify,
  sourcemap: true,
  outdir: "dist",
  external,
  plugins: [vanillaExtractPlugin()],
};

const createBuildConfig = (format, outExtension = "") => ({
  ...baseConfig,
  format,
  outExtension: outExtension ? { ".js": outExtension } : undefined,
});

const buildWithWatch = async (format, outExtension = "") => {
  const ctx = await esbuild.context(createBuildConfig(format, outExtension));
  ctx.watch();
  console.log(`${format.toUpperCase()} Watching...👀`);
};

const build = async (format, outExtension = "") => {
  await esbuild.build(createBuildConfig(format, outExtension));
};

const handleError = (error) => {
  if (error instanceof Error) {
    console.error("빌드에 실패했습니다 🚨", error.message);
  }
  process.exit(1);
};

if (watch) {
  Promise.all([buildWithWatch("esm"), buildWithWatch("cjs", ".cjs")])
    .then(() => {
      console.log("My Blocks watching...👀");
    })
    .catch((error) => {
      handleError(error);
    });
} else {
  Promise.all([build("esm"), build("cjs", ".cjs")])
    .then(() => {
      console.log("My Blocks 빌드가 완료되었습니다 🎉");
    })
    .catch((error) => {
      handleError(error);
    });
}
