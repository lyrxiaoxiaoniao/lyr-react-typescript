const path = require('path');

// 路径指向函数、所有的路径以当前路径为准
// 例如：utils文件在build下 所有引入的地方都是__dirname: ..........\ts-react\build
// 例如：utils文件在tpl下 所有引入的地方都是__dirname: ..........\ts-react\tpl
exports.resolve = function (_path) {
  return path.resolve(__dirname, `../${_path}`)
}