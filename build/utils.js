const path = require('path');
const config = require('./config')

// 路径指向函数、所有的路径以当前路径为准
// 例如：utils文件在build下 所有引入的地方都是__dirname: ..........\ts-react\build
// 例如：utils文件在tpl下 所有引入的地方都是__dirname: ..........\ts-react\tpl
exports.resolve = function (dir) {
  return path.join(__dirname, './../', dir)
}

exports.resolveAssetRootDir = function (_path) {
  return path.join(_path)
}

exports.assetsPath = function (_path) {
  return path.posix.join(config.assetsSubDirectory, _path)
}


