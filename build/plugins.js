const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = [
  // 配置html模板
  new HtmlWebpackPlugin({
    title: 'ts-react',
    template: 'build/tpl/index.html'
  })
]