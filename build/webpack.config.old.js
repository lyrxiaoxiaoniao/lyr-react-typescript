const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const {
  resolve
} = require('./utils');
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
    rules: [{
        // 需要解析什么类型的文件
        test: /\.ts(x?)$/,
        // 使用什么规则解析对应文件
        use: [{
          loader: 'awesome-typescript-loader',
          options: {
            // awesome-typescript-loader这个库自带了开启缓存的选项useCache，然后我们需要指定一个保存缓存文件的地方cacheDirectory
            useCache: true,
            // cacheDirectory: path.resolve(__dirname, '../.cache-loader')
            cacheDirectory: resolve('.cache-loader')
          }
        }]
      },
      {
        test: /\.scss$/,
        //  只针对src下面的.scss文件进行编译
        // include: [path.resolve(__dirname, '../src')],
        include: [resolve('src')],
        use: [{
            loader: 'cache-loader',
            options: {
              // 加入cache-loader 对.scss文件类型的转换配置中使用它，在这里我们主要是针对转换出来的css进行缓存
              cacheDirectory: resolve('.cache-loader')
            }
          },
          {
            loader: 'style-loader'
          },
          // typescript 我们这里用 typings-for-css-modules-loader  代替 css-loader
          // 'css-loader',
          {
            loader: 'typings-for-css-modules-loader',
            options: {
              // 是否有使用css modules
              modules: true,
              // 类名导出
              namedExport: true,
              // 支持驼峰
              camelCase: true,
              // 是否使用sass
              sass: true
            }
          },
          {
            loader: 'sass-loader',
            options: {
              // 设置全局的 styles 引入路径
              // includePaths: [path.resolve(__dirname, '../src/styles')]
              includePaths: [resolve('src/styles')]
            }
          }
        ]
      }
    ]
  },
  plugins: [
    // 配置html模板
    new HtmlWebpackPlugin({
      title: 'ts-react',
      template: 'build/tpl/index.html'
    })
  ]
}