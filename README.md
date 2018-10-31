## React + Typescript 记录

### 项目简介

react + typescript + antd

### 开始安装

- 全局安装 typescript

  `npm install -g typescript`

- 初始化 package.json , tsconfig.json

  `npm init -y && tsc --init`

- 安装 webpack 自动化工具

  `npm install-D webpack webpack-cli webpack-dev-server`

- 安装 react 以及相关的 ts 验证包

  `npm install -S react react-dom`

  `npm install -D @types/react @types/react-dom`

- 安装`awesome-typescript-loader`或者`ts-loader`这两款 loader 用于将 ts 代码编译成 js 代码

  `npm install -D awesome-typescript-loader`

初步依赖包基本上安装完毕了，接下来开始完成项目结构与配置

### webpack 配置

- 新建根目录`build`文件夹,新建`webpack.config.js` 简单配置一下 `entry` `output`

  ```
  webpack.config.js ------------------------------

  const path = require('path');
  module.exports = {
  entry: {
    // app: path.join(__dirname, './../', 'src/index.tsx')
    app: path.resolve(__dirname, '../src/index.tsx')
  },
  output: {
    // path: path.join(__dirname, './../', 'dist'),
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].js'
  }}
  ```

- 完成[awesome-typescript-loader](https://github.com/Jimdo/typings-for-css-modules-loader)配置项同时配置开启缓存的`useCache`与缓存文件夹`cacheDirectory`, 并且同时还需要在`tsconfig.json`里面`compilerOptions`添加 `"jsx": "react"` 否则会出现报错

  ```
  ...

  module: {
    rules: [
      {
        // 需要解析什么类型的文件
        test: /\.ts(x?)$/,
        // 使用什么规则解析对应文件
        use: [{
          loader: 'awesome-typescript-loader',
          options: {
            // awesome-typescript-loader这个库自带了开启缓存的选项useCache，然后我们需要指定一个保存缓存文件的地方cacheDirectory
            useCache: true,
            cacheDirectory: path.resolve(__dirname, '../.cache-loader')
          }
        }]
      },
      ...
    ]
  }
  ```

- webpack 配置`resolve`配置

  `extensions` : 项目引入文件就不需要带扩展名

  `alias` : 项目引入文件优化路径

  `plugins`: 配置插件

  **注意: 因为我们是 ts 所以配置路径的时候有两种方法**

  ```
  ...
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    alias: {
      /* // 方法一： 注意这里配置完后 还需要在 tsconfig 中进行配置
      'src': path.resolve(__dirname, '../src')
      '@components': path.resolve(__dirname, '../src/components')
      */

    },
    plugins: [
      /*
        // 方法二： 使用 tsconfig-paths-webpack-plugin 插件包 可以将tsconfig.json中paths路径配置出来
     */
      new TsconfigPathsPlugin({
        // 配置文件引入tsconfig.json
        configFile: path.resolve(__dirname, '../tsconfig.json')
      })
    ]
  },
  ...
  ```

- 配置 html-webpack-plugin， `npm install -D html-webpack-plugin`

  在 build 文件夹下新建一个 tpl 文件夹然后在新建一个 index.html 文件，并且加上`<div id="app"></div>`

  ```
  ...
  plugins: [
    // 配置html模板
    new HtmlWebpackPlugin({
      title: 'ts-react',
      template: 'build/tpl/index.html'
    })
  ]
  ```

- 配置 tsconfig.json

  ```
  {
    "compilerOptions": {
      /* Basic Options */
      "target": "es5",                          /* Specify ECMAScript target version: 'ES3' (default), 'ES5', 'ES2015', 'ES2016', 'ES2017','ES2018' or 'ESNEXT'. */
      "module": "commonjs",                     /* Specify module code generation: 'none', 'commonjs', 'amd', 'system', 'umd', 'es2015', or 'ESNext'. */
      // "lib": [],                             /* Specify library files to be included in the compilation. */
      // "allowJs": true,                       /* Allow javascript files to be compiled. */
      // "checkJs": true,                       /* Report errors in .js files. */
      "jsx": "react",                        /* Specify JSX code generation: 'preserve', 'react-native', or 'react'. */
      // "declaration": true,                   /* Generates corresponding '.d.ts' file. */
      // "declarationMap": true,                /* Generates a sourcemap for each corresponding '.d.ts' file. */
      // "sourceMap": true,                     /* Generates corresponding '.map' file. */
      // "outFile": "./",                       /* Concatenate and emit output to single file. */
      // "outDir": "./",                        /* Redirect output structure to the directory. */
      // "rootDir": "./",                       /* Specify the root directory of input files. Use to control the output directory structure with --outDir. */
      // "composite": true,                     /* Enable project compilation */
      // "removeComments": true,                /* Do not emit comments to output. */
      // "noEmit": true,                        /* Do not emit outputs. */
      // "importHelpers": true,                 /* Import emit helpers from 'tslib'. */
      // "downlevelIteration": true,            /* Provide full support for iterables in 'for-of', spread, and destructuring when targeting 'ES5' or 'ES3'. */
      // "isolatedModules": true,               /* Transpile each file as a separate module (similar to 'ts.transpileModule'). */

      /* Strict Type-Checking Options */
      "strict": true,                           /* Enable all strict type-checking options. */
      // "noImplicitAny": true,                 /* Raise error on expressions and declarations with an implied 'any' type. */
      // "strictNullChecks": true,              /* Enable strict null checks. */
      // "strictFunctionTypes": true,           /* Enable strict checking of function types. */
      // "strictPropertyInitialization": true,  /* Enable strict checking of property initialization in classes. */
      // "noImplicitThis": true,                /* Raise error on 'this' expressions with an implied 'any' type. */
      // "alwaysStrict": true,                  /* Parse in strict mode and emit "use strict" for each source file. */

      /* Additional Checks */
      // "noUnusedLocals": true,                /* Report errors on unused locals. */
      // "noUnusedParameters": true,            /* Report errors on unused parameters. */
      // "noImplicitReturns": true,             /* Report error when not all code paths in function return a value. */
      // "noFallthroughCasesInSwitch": true,    /* Report errors for fallthrough cases in switch statement. */

      /* Module Resolution Options */
      "moduleResolution": "node",            /* Specify module resolution strategy: 'node' (Node.js) or 'classic' (TypeScript pre-1.6). */
      "baseUrl": "./src",                       /* Base directory to resolve non-absolute module names. */
      "paths": {
        "@components/*": ["components/*"]
      },                           /* A series of entries which re-map imports to lookup locations relative to the 'baseUrl'. */
      // "rootDirs": [],                        /* List of root folders whose combined content represents the structure of the project at runtime. */
      // "typeRoots": [],                       /* List of folders to include type definitions from. */
      // "types": [],                           /* Type declaration files to be included in compilation. */
      // "allowSyntheticDefaultImports": true,  /* Allow default imports from modules with no default export. This does not affect code emit, just typechecking. */
      "esModuleInterop": true,                   /* Enables emit interoperability between CommonJS and ES Modules via creation of namespace objects for all imports. Implies 'allowSyntheticDefaultImports'. */
      // "preserveSymlinks": true,              /* Do not resolve the real path of symlinks. */

      /* Source Map Options */
      // "sourceRoot": "",                      /* Specify the location where debugger should locate TypeScript files instead of source locations. */
      // "mapRoot": "",                         /* Specify the location where debugger should locate map files instead of generated locations. */
      // "inlineSourceMap": true,               /* Emit a single file with source maps instead of having a separate file. */
      // "inlineSources": true,                 /* Emit the source alongside the sourcemaps within a single file; requires '--inlineSourceMap' or '--sourceMap' to be set. */

      /* Experimental Options */
      "experimentalDecorators": true,        /* Enables experimental support for ES7 decorators. */
      // "emitDecoratorMetadata": true,         /* Enables experimental support for emitting type metadata for decorators. */
    }
  }
  ```

- 配置一下package.json添加一条命令,然后`npm run dev`

  `"dev": "webpack-dev-server --config build/webpack.config.js --mode development",`