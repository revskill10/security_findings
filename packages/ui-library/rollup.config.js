import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import { terser } from "rollup-plugin-terser";
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import jsonPlugin from '@rollup/plugin-json';
import nodePolyfills from 'rollup-plugin-node-polyfills';

const packageJson = require("./package.json");

export default [
    {
        input: "src/index.tsx",
        output: [
            {
                file: packageJson.main,
                format: "cjs",
                sourcemap: true,
            },
            {
                file: packageJson.module,
                format: "esm",
                sourcemap: true,
            },
        ],
        plugins: [
            nodePolyfills(),
            peerDepsExternal(),
            resolve(),
            commonjs(),
            typescript({ tsconfig: "./tsconfig.json" }),
            terser(),
            jsonPlugin()
        ],
        external: ["react", "react-dom", "semantic-ui-react", "react-router-dom"]
    },
    {
        input: "dist/esm/types/index.d.ts",
        output: [{ file: "dist/index.d.ts", format: "esm" }],
        plugins: [
            nodePolyfills(),
            peerDepsExternal(),
            resolve(),
            dts(),
            jsonPlugin()
        ],
    }
];