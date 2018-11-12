const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin")

const config = require("./config")
const constants = require("./constants")
const plugins = require("./plugins")
const { assetsPath, resolve } = require("./utils")
const jsRules = require("./rules/jsRules")
const styleRules = require("./rules/styleRules")
const fileRules = require("./rules/fileRules")
const optimization = require("./optimization")
module.exports = {
    entry: {
        app: ['babel-polyfill', resolve("src/index.tsx")]
    },
    output: {
        path: config.assetsRoot,
        filename: constants.APP_ENV === 'dev' ? '[name].js' : assetsPath('js/[name].[chunkhash].js'),
        chunkFilename: constants.APP_ENV === 'dev' ? '[name].js' : assetsPath('js/[name].[id].[chunkhash].js'),
        publicPath: config.assetsPublicPath
    },
    resolve: {
        extensions: constants.FILE_EXTENSIONS,
        modules: [resolve('src'), resolve('node_modules')],
        alias: {
            /* // 方法一： 注意这里配置完后 还需要在 tsconfig 中进行配置
              'src': path.resolve(__dirname, '../src')
              '@components': path.resolve(__dirname, '../src/components')
            */
            mobx: resolve("node_modules/mobx/lib/mobx.es6.js")
        },
        plugins: [
            /* 
                // 方法二： 使用 tsconfig-paths-webpack-plugin 插件包 可以将tsconfig.json中paths路径配置出来
            */
            new TsconfigPathsPlugin({
                // 配置文件引入tsconfig.json
                configFile: resolve("tsconfig.json"),
                extensions: constants.FILE_EXTENSIONS
            })
        ]
    },
    module: {
        rules: [...jsRules, ...styleRules, ...fileRules]
    },
    plugins: [...plugins],
    optimization,
    stats: { children: false },
    devtool: config.sourceMap ? "#source-map" : false,
    devServer: {
        host: "localhost",
        compress: true,
        hot: true,
        port: config.port,
        historyApiFallback: true
    }
}
