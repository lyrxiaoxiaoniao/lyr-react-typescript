## react-16.6.0 + typescript-3.1.4 + mobx-5.5.2 + antd-3.10.3

`npm run dev`
`npm run build:test/prod`

### TODO

- [x] react + typescript + mobx + antd 开发环境
- [x] 添加常用工具函数：深拷贝，防抖函数，节流函数，时间格式处理函数， 基本页面布局完成.
- [x] 添加用户登陆注册，后台用[koa2 + mysql + sequlize](https://github.com/lyrxiaoxiaoniao/lyr-blog-koa2)搭建
- [ ] markdown集成
- [ ] 日记功能

### 项目结构

```
ts-react-mobx
├── README.md
├── theme.js                   // antd主题
├── @types                     // ts  类型定义文件(*.d.ts)
├── index.html                 // html
├── src                        // 代码
|   ├── assets                 // 静态资源
|   ├── components             // 公共组件
|   ├── containers             // 页面容器
|   |    ├──shared             // app.tsx 路由入口
|   |    └──views              // 容器
|   ├── models                 // models interface
|   ├── store                  // mobx 状态仓库
|   ├── router                 // 路由文件
|   ├── styles                 // 样式
|   ├── utils                  // 工具包
|   └── index.tsx              // 入口文件
├── package.json
├── tsconfig.json
└── record                     // 文档
```