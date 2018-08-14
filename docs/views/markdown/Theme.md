---
title:
  zh-CN: 定制主题
  en-US: theme
desc:
  zh-CN: 定制新主题，以满足业务和品牌上的多样化视觉需求
  en-US: 定制新主题，以满足业务和品牌上的多样化视觉需求
---


# zh-CN
`ivuel` 的样式是基于 `Less` 进行开发的，默认以前缀 `.ivu-` 作为命名空间，并且定义了一套样式变量，定制主题，就是编辑`less`变量列表。

## 普通方法
如果你的项目是全部引进ivuel样式的,可以通过变量覆盖的方式来实现主题定制。
新建一个less文件引入
```js
@import '~ivuel/src/styles/index.less';

// Here are the variables to cover, such as:
@primary-color: #8c0776;
```
完整的变量列表可以查看 [默认样式变量](https://github.com/yuhonyon/ivuel/blob/master/src/styles/custom.less)。

然后在入口文件 main.js 内导入这个 less 文件即可：

```js
import Vue from 'vue';
import ivuel from 'ivuel';
import './styles/new-ivuel.less';

Vue.use(ivuel);
```

## 按需引进
如果你使用了按需引进样式的方式,可以通过`less-loader`的`modifyVars`配置来实现主题定制
通过package.json下的theme字段配置变量,也可以独立一个theme.json文件配置
```json
//package.json
{
  "name": "vue-project",
  "version": "1.0.0",
  ...
  "theme":{//此处修改样式变量
    "@primary-color":"red"
  }
}

```
配置`modifyVars`,下面是vue-cli webpack模板的配置方法
```js
  //vue-cli /build/utils.js
  const packageConfig = require('../package.json')
  return {
    css : generateLoaders(),
    postcss : generateLoaders(),
    less : generateLoaders('less',{"modifyVars":packageConfig.theme}),//修改此行
    sass : generateLoaders('sass', { indentedSyntax: true }),
    scss : generateLoaders('sass'),
    stylus : generateLoaders('stylus'),
    styl : generateLoaders('stylus')
  }
```
