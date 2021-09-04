import babel from 'rollup-plugin-babel';
import babelrc from 'babelrc-rollup';
import istanbul from 'rollup-plugin-istanbul';

let pkg = require('./package.json');
let external = Object.keys(pkg.dependencies);

let plugins = [
  babel(babelrc()),
];

export default {
  entry: 'src/index.js',
  plugins: plugins,
  external: external,
  targets: [
    {
      name: 'Test',
      dest: 'dist/ext-client.js',
      format: 'iife',
      moduleName: 'ext-client',
      sourceMap: true
    }
  ]
};