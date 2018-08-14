---
title:
  zh-CN: 快速上手
  en-US: start
desc:
  zh-CN: 使用 webpack 作为构建工具
  en-US:
---


# zh-CN

## 引入 ivuel
一般在 webpack 入口页面 main.js 中如下配置:
```js
import Vue from 'vue';
import ivuel from 'ivuel';
import 'ivuel/dist/styles/ivuel.css';
Vue.use(ivuel);
```


## 按需引用
```base
npm install babel-plugin-import-ivuel --save-dev

```
`.babelrc`配置
```json
{
  "plugins": [["import-ivuel", {
    "libraryName": "ivuel",
    "libraryDirectory": "src/components"
  }]]
}
```
或者(按需引进包括样式)
```json
{
  "plugins": [["import-ivuel", {
    "libraryName": "ivuel",
    "libraryDirectory": "src/components",
    "style":"ivuel"
  }]]
}
```



然后这样按需引入组件，就可以减小体积了：
```js
import { Button, Table } from 'ivuel';
Vue.component('Button', Button);
Vue.component('Table', Table);
```
特殊组件引进
```js
import { Poptip,Tooltip,Message,Modal,Spin,Notice,LoadingBar } from 'ivuel';
;
Vue.directive('poptip', Poptip.directive);
Vue.directive('tooltip', Tooltip.directive);
Vue.component('Tooltip', Tooltip);
Vue.component('Poptip', Poptip)

Vue.component('Modal', Modal);
Vue.component('Spin', Spin);
Vue.component('Notice', Notice);
Vue.component('LoadingBar', LoadingBar);
Vue.component('Message', Message);

Vue.prototype.$Loading = LoadingBar;
Vue.prototype.$Message = Message;
Vue.prototype.$Modal = Modal;
Vue.prototype.$Notice = Notice;
Vue.prototype.$Spin = Spin;
```


### 特别提醒
* 前一种按需引用仍然需要导入样式，即在 main.js 或根组件执行 import 'ivuel/dist/styles/ivuel.css';
* 按需引进样式的话,配置皮肤方法参考****

##  使用ivuel-loader
