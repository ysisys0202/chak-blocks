import esbuild from "esbuild";
import { vanillaExtractPlugin } from "@vanilla-extract/esbuild-plugin";
import svgr from "esbuild-plugin-svgr";
import pkg from "./package.json" assert { type: "json" };

const dev = process.argv.includes("--dev");
const minify = !dev;
const watch = process.argv.includes("--watch");

const external = Object.keys({
  ...pkg.dependencies,
  ...pkg.peerDependencies,
});

const baseConfig = {
  bundle: true,
  minify,
  sourcemap: true,
  external,
  plugins: [vanillaExtractPlugin(), svgr()],
};

const createBuildConfig = (
  format,
  outExtension = "",
  entryPoints = [],
  outdir = ""
) => ({
  ...baseConfig,
  format,
  outExtension: outExtension ? { ".js": outExtension } : undefined,
  entryPoints,
  outdir,
});

const build = async (
  format,
  outExtension = "",
  entryPoints = [],
  outdir = ""
) => {
  const config = createBuildConfig(format, outExtension, entryPoints, outdir);

  if (watch) {
    const ctx = await esbuild.context(config);
    ctx.watch();
    console.log(`${format.toUpperCase()} Watching... 👀`);
  } else {
    await esbuild.build(config);
    console.log(`${format.toUpperCase()} 빌드가 완료되었습니다 🎉`);
  }
};

const buildTasks = [
  {
    format: "esm",
    outdir: "dist/plain",
    entryPoints: ["src/components/plain/index.ts"],
  },
  {
    format: "esm",
    outdir: "dist/context",
    entryPoints: ["src/components/context/index.ts"],
  },
  {
    format: "cjs",
    outdir: "dist/plain",
    entryPoints: ["src/components/plain/index.ts"],
    outExtension: ".cjs",
  },
  {
    format: "cjs",
    outdir: "dist/context",
    entryPoints: ["src/components/context/index.ts"],
    outExtension: ".cjs",
  },
];

const handleError = (error) => {
  if (error instanceof Error) {
    console.error("빌드에 실패했습니다 🚨", error.message);
  }
  process.exit(1);
};

const runBuild = async () => {
  try {
    await Promise.all(
      buildTasks.map(({ format, outdir, entryPoints, outExtension }) =>
        build(format, outExtension, entryPoints, outdir)
      )
    );
    const mode = watch ? "watching... 👀" : "빌드가 완료되었습니다 🎉";
    console.log(`Chak Blocks ${mode}`);
  } catch (error) {
    handleError(error);
  }
};

runBuild();
