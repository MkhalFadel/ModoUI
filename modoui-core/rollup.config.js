import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import babel from "@rollup/plugin-babel";
import postcss from "rollup-plugin-postcss";
import peerDepsExternal from "rollup-plugin-peer-deps-external";

export default {
  input: "src/index.js",

  output: [
    {
      file: "dist/index.esm.js",
      format: "esm",
      sourcemap: true
    },
    {
      file: "dist/index.cjs.js",
      format: "cjs",
      sourcemap: true,
      exports: "named"
    }
  ],

  plugins: [
    peerDepsExternal(),

    resolve({
      extensions: [".js", ".jsx"],
    }),

    commonjs({
      include: /node_modules/,
      extensions: [".js", ".jsx"],
      transformMixedEsModules: true
    }),

    babel({
      babelHelpers: "bundled",
      presets: [["@babel/preset-react", { runtime: "automatic" }]],
      extensions: [".js", ".jsx"],
      exclude: "node_modules/**"
    }),

    postcss({ modules: true })
  ]
};
