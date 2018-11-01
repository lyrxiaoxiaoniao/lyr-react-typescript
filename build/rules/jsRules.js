const tsImportPluginFactory = require("ts-import-plugin")
const { resolve } = require("../utils")

module.exports = [
    {
        // 需要解析什么类型的文件
        test: /\.(ts(x?)|js(x?))$/,
        // 使用什么规则解析对应文件
        use: [
            {
                loader: "awesome-typescript-loader",
                options: {
                    // awesome-typescript-loader这个库自带了开启缓存的选项useCache，然后我们需要指定一个保存缓存文件的地方cacheDirectory
                    useCache: true,
                    cacheDirectory: resolve(".cache-loader"),
                    babelOptions: {
                        // 不需要.babelrc文件
                        babelrc: false,
                        // react-hot-loader/babel 热加载不同于webpack-dev-serve 这个是局部刷新
                        // transform-class-properties 主要是解决 es6 中使用class声明中 :defaultProps={} 不支持的问题。
                        // syntax-dynamic-import 切分js代码 与 react-loadable 配合实现按需加载
                        plugins: ["react-hot-loader/babel", "transform-class-properties", "syntax-dynamic-import"]
                    },
                    transpileOnly: true,
                    getCustomTransformers: () => ({
                        before: [
                            tsImportPluginFactory({
                                libraryName: "antd",
                                libraryDirectory: "lib",
                                // 填true的话使用组件的less文件
                                // 填写css对的话使用css文件，但是不能定制主题了
                                style: true
                            })
                        ]
                    })
                }
            }
        ],
        exclude: /node_modules/
    }
]
