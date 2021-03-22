import path from 'path';
import ts from 'rollup-plugin-typescript2';
import { nodeResolve } from '@rollup/plugin-node-resolve';


export default {
  input: 'src/index.ts',
  ouput: {
    format: 'cjs', // commonjs规范 [umd esm life]
    file: path.resolve('dist/bundle.js')
  },
  plugins: [
    ts({
      tsconfig: path.resolve('tsconfig.json')
    }),
    nodeResolve({ // 使用一些第三方插件
      extensions: ['.js', '.ts']
    })
  ]
}