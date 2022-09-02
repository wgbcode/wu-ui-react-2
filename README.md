## 项目描述

这是一个基于 React 框架实现的 UI 组件库，该项目总共设置了 6 个 UI 组件，每个组件都实现了查看、操作、代码查询和组件参数查看的功能，技术栈包括 `React` `React-dom`  `React-Router-dom`   `TypeScript` `SCSS` `Webpack` 。

## 项目使用

`git clone SSR_URL`

`yarn install`

`yarn start`

## 项目开发主要过程
- 使用 Webpack 对项目代码进行编译、打包和压缩，并配置相关属性。
- 利用 react-router-dom 创建路由，根据 Link 标签进行路由跳转。然后，分别实现 Button、Icon、Dialog、Layout、Form、Scroll 六个 React UI 组件。
- Dialog 组件利用 react 传送门将对话框放到最顶层，并将 Dialog 组件封装成函数，如 alert()、confirm()。
- Form 组件使用 table 元素制作表单样式，并配置校验器规则，对输入的内容进行校验。
- Scroll 组件先隐藏浏览器原生的滚动条，再用 JS 实现自定义的滚动条。
