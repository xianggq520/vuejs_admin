<p align="center">
  <img width="320" src="https://github.com/xianggq520/vuejs_admin/blob/master/favicon.ico">
</p>

<p align="center">
  <a href="https://github.com/vuejs/vue">
    <img src="https://img.shields.io/badge/vue-2.5.10-brightgreen.svg" alt="vue">
  </a>
  <a href="https://github.com/ElemeFE/element">
    <img src="https://img.shields.io/badge/element--ui-2.0.8-brightgreen.svg" alt="element-ui">
  </a>
</p>

English | [简体中文](./README.zh-CN.md)

## Introduction

`vuejs_admin` is a production-ready solution for admin interfaces. Based on [Vue.js](https://github.com/vuejs/vue) and use the UI Toolkit -- [element](https://github.com/ElemeFE/element). `vuejs_admin` is a magical vue admin, it based on the newest development stack of vue, built-in i18n solution, typical templates for enterprise applications, lots of awesome features. It helps you build a large complex Single-Page Applications. I believe whatever your needs are, this project will help you.

**Note: This project uses element-ui@2.0.0+ version, so the minimum compatible vue@2.5.0+**

## Preparation

You need to install [node](http://nodejs.org/) and [git](https://git-scm.com/) locally. The project is based on [ES2015+](http://es6.ruanyifeng.com/)、[vue](https://cn.vuejs.org/index.html)、[vuex](https://vuex.vuejs.org/zh-cn/)、[vue-router](https://router.vuejs.org/zh-cn/) 和 [element-ui](https://github.com/ElemeFE/element). All data requests for this project are simulated using [Mock.js](https://github.com/nuysoft/Mock). It would be helpful if you have pre-existing knowledge on those.


## Features
```
- Login / Logout
- Permission authentication
- Multi-environment build
- Dynamic sidebar (supports multi-level routing)
- Dynamic breadcrumb
- I18n
- Customizable theme
- Tags-view(Tab page Support right-click operation)
- Rich text editor
- Markdown editor
- JSON editor
- Screenfull
- Drag and drop list
- Svg Sprite
- Dashboard
- Mock data
- Echarts
- Clipboard
- 401/404 error page
- Error log
- Export excel
- Export zip
- Front-end visualization excel
- Tree Table
- Table example
- Dynamictable example
- Drag and drop table example
- Inline edit table example
- Form example
- Two-step login
- SplitPane
- Dropzone
- Sticky
- CountTo
- Markdown to html
```

## Getting started

```bash
# clone the project
git clone https://github.com/xianggq520/vuejs_admin.git

# install dependency
npm install

# develop
npm run dev
```

This will automatically open http://localhost:9527.

## Build
```bash
# build for test environment
npm run build:sit

# build for production environment
npm run build:prod
```

## Advanced
```bash
# --report to build with bundle size analytics
npm run build:prod --report

# --preview to start a server in local to preview
npm run build:prod --preview

# lint code
npm run lint

# auto fix
npm run lint -- --fix
```

## License

[MIT](https://github.com/xianggq520/vuejs_admin/blob/master/LICENSE)

Copyright (c) 2018-present xianggq520
