const {
  resolve
} = require('../utils');

module.exports = [{
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
}]