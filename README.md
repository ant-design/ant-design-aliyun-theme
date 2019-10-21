<h1 align="center">Ant Design Theme for Aliyun</h1>

<div align="center">

[![Travis](https://img.shields.io/travis/ant-design/ant-design-aliyun-theme/master.svg?style=flat-square)](https://travis-ci.org/ant-design/ant-design-aliyun-theme)
[![npm package](https://img.shields.io/npm/v/@ant-design/aliyun-theme.svg?style=flat-square)](https://www.npmjs.org/package/@ant-design/aliyun-theme)
[![NPM downloads](http://img.shields.io/npm/dm/@ant-design/aliyun-theme.svg?style=flat-square)](http://npmjs.com/@ant-design/aliyun-theme)

[![Dependencies](https://img.shields.io/david/ant-design/ant-design-aliyun-theme.svg?style=flat-square)](https://david-dm.org/ant-design/ant-design-aliyun-theme)
[![DevDependencies](https://img.shields.io/david/dev/ant-design/ant-design-aliyun-theme.svg?style=flat-square)](https://david-dm.org/ant-design/ant-design-aliyun-theme?type=dev)

Ant Design theme [variables](https://github.com/ant-design/ant-design-aliyun-theme/blob/master/index.ts) for Aliyun console design.

> Still being experimental, welcome to try out and help us to improve it.

<span>Visit <a href="https://antdtheme.com/aliyun" target="_blank">https://antdtheme.com/aliyun</a> to preview.</span>

![](https://user-images.githubusercontent.com/507615/61530511-d214d200-aa56-11e9-864d-1e8b8e5fc9b1.png)

</div>

## Install

```bash
$ npm install @ant-design/aliyun-theme
```

## Usage

### webpack

```js
import aliyunTheme from '@ant-design/aliyun-theme';

// webpack.config.js: less-loader
{
  loader: 'less-loader',
  options: {
    modifyVars: aliyunTheme,
  },
},
```

### umi

[https://umijs.org/config/#theme](https://umijs.org/config/#theme)

```js
import aliyunTheme from '@ant-design/aliyun-theme';

// config.js or .umirc.js
export default {
  "theme": aliyunTheme,
}
```

> Use in Ant Design Pro: https://github.com/ant-design/ant-design-pro/pull/2946/

### less

```less
@import "~@ant-design/aliyun-theme/index.less";
```
