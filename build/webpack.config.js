
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const plugins = require('./plugins');
const { resolve } = require('./utils');
const jsRules = require('./rules/jsRules');
const styleRules = require('./rules/styleRules');
module.exports = {
  entry: {
    // app: path.join(__dirname, './../', 'src/index.tsx')
    // app: path.resolve(__dirname, '../src/index.tsx')
    app: resolve('src/index.tsx')
  },
  output: {
    // path: path.join(__dirname, './../', 'dist'),
    // path: path.resolve(__dirname, '../dist'),
    path: resolve('dist'),
    filename: '[name].js'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    alias: {
      /* // 方法一： 注意这里配置完后 还需要在 tsconfig 中进行配置
      'src': path.resolve(__dirname, '../src')
      '@components': path.resolve(__dirname, '../src/components')
      */

    },
    plugins: [
      /* 
        // 方法二： 使用 tsconfig-paths-webpack-plugin 插件包 可以将tsconfig.json中paths路径配置出来
     */
      new TsconfigPathsPlugin({
        // 配置文件引入tsconfig.json
        configFile: resolve('tsconfig.json')
      })
    ]
  },
  module: {
    rules: [
      ...jsRules, ...styleRules
      
    ]
  },
  plugins: [
    ...plugins
  ]
}