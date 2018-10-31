const {
  resolve
} = require('../utils');
const theme = require('../../theme')
module.exports = [{
    test: /\.scss$/,
    //  只针对src下面的.scss文件进行编译
    include: [resolve('src')],
    use: [{
        loader: 'cache-loader',
        options: {
          // 加入cache-loader 对.scss文件类型的转换配置中使用它，在这里我们主要是针对转换出来的css进行缓存
          cacheDirectory: resolve('.cache-loader')
        }
      },
      {
        loader: 'style-loader',
        options: {}
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
      'style-loader',
      'css-loader',
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