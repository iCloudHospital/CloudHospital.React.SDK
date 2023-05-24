import babel from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import json from '@rollup/plugin-json'
import resolve from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'
import copy from 'rollup-plugin-copy'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import pkg from './package.json' assert { type: 'json' }

const extensions = ['.js', '.jsx', '.ts', '.tsx']
const external = ['moment-timezone', 'next-auth']

/**
 * @type {import('rollup').RollupOptions}
 */

const config = {
  input: 'src/index.ts',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      sourcemap: true
    },
    {
      file: pkg.module,
      format: 'esm',
      sourcemap: true
    }
  ],
  plugins: [
    resolve({ extensions }),
    babel({
      exclude: /node_modules/,
      babelHelpers: 'runtime'
    }),
    commonjs({
      include: /node_modules/
    }),
    typescript({
      tsconfig: 'tsconfig.json',
      declarationDir: 'dist'
      // verbosity: 3,
    }),
    peerDepsExternal(),
    copy({
      targets: [{ src: 'src/**/*.css', dest: 'dist' }]
    }),
    json()
  ],

  external
}

export default config
