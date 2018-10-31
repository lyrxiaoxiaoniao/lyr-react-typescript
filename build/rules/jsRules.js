const tsImportPluginFactory = require('ts-import-plugin');
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
      cacheDirectory: resolve('.cache-loader'),
      transpileOnly: true,
      getCustomTransformers: () => ({
        before: [
          tsImportPluginFactory({
            libraryName: 'antd',
            libraryDirectory: 'lib',
            // 填true的话使用组件的less文件
            // 填写css对的话使用css文件，但是不能定制主题了
            style: true
          })
        ]
      })
    }
  }]
}]