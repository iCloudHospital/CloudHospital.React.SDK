import typescript from 'rollup-plugin-typescript2'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import resolve from '@rollup/plugin-node-resolve'
import babel from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import copy from 'rollup-plugin-copy'
import pkg from './package.json'
import json from '@rollup/plugin-json'
import includePaths from 'rollup-plugin-includepaths'

const extensions = ['.js', '.jsx', '.ts', '.tsx']
const external = ['moment-timezone', 'next-auth']

process.env.BABEL_ENV = 'production'

/**
 * @type {import('rollup').RollupOptions}
 */
const config = {
  input: 'src/index.ts',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: pkg.module,
      format: 'esm',
      sourcemap: true,
    },
  ],
  plugins: [
    resolve({ extensions }),
    babel({
      exclude: /node_modules/,
      babelHelpers: 'runtime',
    }),
    commonjs({
      include: /node_modules/,
    }),
    typescript({
      tsconfig: 'tsconfig.json',
      useTsconfigDeclarationDir: false,
      declarationDir: 'dist',
      clean: true,
      // verbosity: 3,
    }),
    peerDepsExternal(),
    copy({
      targets: [{ src: 'src/**/*.css', dest: 'dist' }],
    }),
    json(),

    includePaths({
      paths: ["./dist/store", "./dist/models", "./dist/store/reducers", "./dist/store/actions", "./dist/services", "./dist/store/models"],
    }),

  ],
  external,

}

export default config
