const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { resolve } = require('../utils');
const config = require('./../config')
const theme = require('../../theme');

const cacheLoader = {
  loader: 'cache-loader',
  options: {
    // 加入cache-loader 对.scss文件类型的转换配置中使用它，在这里我们主要是针对转换出来的css进行缓存
    cacheDirectory: resolve('.cache-loader')
  }
}
module.exports = [
  {
    test: /\.css$/,
    // include: [resolve('node_nodules')],
    use: [
      config.extractCss ? MiniCssExtractPlugin.loader : 'style-loader',
      cacheLoader,
      'css-loader',
      'postcss-loader'
    ]
  },
  {
    test: /\.scss$/,
    //  只针对src下面的.scss文件进行编译
    include: [resolve('src')],
    use: [
      cacheLoader,
      // style-loader用于将css-loader编译出来的代码转为js代码并写入js文件中，所以在这里
      // 我们需要用mini-css-extract-plugin中的loader去替换掉style-loader
      // 让它写入单独的css文件而不是js文件中
      // {
      //   loader: 'style-loader'
      // },
      config.extractCss ? MiniCssExtractPlugin.loader : 'style-loader',
      // typescript 我们这里用 typings-for-css-modules-loader  代替 css-loader
      // {
      //   loader: 'css-loader?modules&localIdentName=[name]-[hash:base64:5]'
      // },
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
          sass: true,
          // 命名
          localIdentName: "[local]--[hash:base64:5]"
        }
      },
      'postcss-loader',
      {
        loader: 'sass-loader',
        options: {
          // 设置全局的 styles 引入路径
          includePaths: [resolve('src/styles')]
        }
      }
    ]
  },
  {
    test: /\.less$/,
    // 只针对node_modules里面的的less文件进行编译
    include: [resolve('node_modules')],
    // 编译顺序是 less-loader -> css-loader -> style-loader, 写法注意
    use: [
      // style-loader用于将css-loader编译出来的代码转为js代码并写入js文件中，所以在这里
      // 我们需要用mini-css-extract-plugin中的loader去替换掉style-loader
      // 让它写入单独的css文件而不是js文件中
      // 'style-loader',
      config.extractCss ? MiniCssExtractPlugin.loader : 'style-loader',
      'css-loader',
      'postcss-loader',
      {
        loader: 'less-loader',
        options: {
          // 禁用内联js代码， 这个功能用于禁用在样式变里面写js代码
          javascriptEnabled: true,
          // 根据antd官网进行主题修改
          modifyVars: theme
        }
      }
    ]
  }
]