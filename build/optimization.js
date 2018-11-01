const config = require("./config")
const constants = require("./constants")
const UglifyJsPlugin = require("uglifyjs-webpack-plugin")
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin")
module.exports =
    constants.APP_ENV === "dev"
        ? {}
        : {
              // 缓存webpack固定生成 的代码块，该代码块通常不变
              runtimeChunk: {
                  name: "manifest"
              },
              // 制定需要进行分块的代码和分块后文件名
              splitChunks: {
                  cacheGroups: {
                      default: false,
                      commons: {
                          test: /[\\/]node_modules[\\/]/,
                          name: "vendor",
                          chunks: "all"
                      }
                  }
              },
              minimizer: [
                  new UglifyJsPlugin({
                      // 使用文件缓存，当前js文件没有变化的时候就利用缓存
                      cache: true,
                      // 采用多线程加速压缩
                      parallel: true,
                      // 是否配置source map
                      sourceMap: true
                  }),
                  new OptimizeCssAssetsPlugin({
                      // cssnano 用于优化css格式表，使得构建出来的css样式表文件变小
                      cssProcessor: require("cssnano"),
                      cssProcessorOptions: {
                          reduceIdents: false,
                          autoprefixer: false
                      }
                  })
              ]
          }
