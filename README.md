## 项目描述

这是一个基于 React 框架实现的 UI 组件库，该项目总共设置了 6 个 UI 组件，每个组件都实现了查看、操作、代码查询和组件参数查看的功能，技术栈包括 `React` `React-dom`  `React-Router-dom`   `TypeScript` `SCSS` `Webpack` 。

## 项目使用

`git clone SSR_URL`

`yarn install`

`yarn start`

## 项目开发主要过程
- 利用 React-Router-dom 创建路由，根据 Link 标签进行跳转。
- 利用 Webpack 对项目进行打包和压缩，并配置 Webpack 文件的入口、出口、解析规则、HTMLWebpackPlugin 插件。
- 使用 svg-sprite-loader 加载 svg 文件，并一次性导入所有的 svg 文件，防止多次导入。
- 使用 table 元素做 form 表单样式，并配置校验器规则，对输入的内容进行校验。
- 利用 react 传送门将对话框放到最顶层，并将 Dialog 组件封装成函数，如 alert()、confirm()。
- 隐藏浏览器原生的滚动条，并用 JS 实现自定义的滚动条。
