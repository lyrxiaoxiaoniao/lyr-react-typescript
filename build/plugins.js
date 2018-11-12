const webpack = require("webpack")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const { resolveAssetRootDir, assetsPath } = require("./utils")
const constants = require("./constants")
const config = require("./config")
const env = require("./env.json")

const oriEnv = env[constants.APP_ENV]
Object.assign(oriEnv, {
    APP_ENV: constants.APP_ENV
})
// 照旧将webpack下发变量置于process.env
const defineEnv = {}
for (let key in oriEnv) {
    defineEnv[`process.env.${key}`] = JSON.stringify(oriEnv[key])
}
const basePlugins = [
  new webpack.DefinePlugin(defineEnv),
  new webpack.ProvidePlugin({
    $: 'jquery',
    jQuery: 'jquery',
    'window.jQuery': 'jquery'
  }),
]

const devPlugins = [
  new webpack.NamedModulesPlugin(), //用于启动HMR时可以显示模块的相对路径
  new webpack.HotModuleReplacementPlugin(), //hot module replacement 启动模块热替换的插件
  new HtmlWebpackPlugin({
    title: config.title,
    filename: 'index.html',
    template: 'index.html',
    inject: true
  })
]

const prodPlugins = [
  new webpack.WatchIgnorePlugin([/css\.d\.ts$/]),
  new HtmlWebpackPlugin({
    title: config.title,
    filename: config.index,
    template: 'index.html',
    inject: true,
    minify: {
      removeComments: true,
      collapseWhitespace: true,
      removeAttributeQuotes: true
      // more options:
      // https://github.com/kangax/html-minifier#options-quick-reference
    },
    // necessary to consistently work with multiple chunks via CommonsChunkPlugin
    chunksSortMode: 'dependency'
  }),
  new MiniCssExtractPlugin({
    // Options similar to the same options in webpackOptions.output
    // both options are optional
    filename: assetsPath('css/[name].[hash].css'),
    chunkFilename: assetsPath('css/[name].[id].[hash].css')
  })
]

if (config.bundleAnalyzerReport) {
  const {
    BundleAnalyzerPlugin
  } = require('webpack-bundle-analyzer')
  prodPlugins.push(new BundleAnalyzerPlugin())
}

module.exports = basePlugins.concat(constants.APP_ENV === 'dev' ? devPlugins : prodPlugins)
