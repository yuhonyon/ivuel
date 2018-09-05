---
title:
  zh-CN: LoadingBar 加载进度条
  en-US: Button
desc:
  zh-CN: 全局创建一个显示页面加载、异步请求、文件上传等的加载进度条。
  en-US: Basic component that is used to trigger bussiness logic.
---


# zh-CN

LoadingBar 只会在全局创建一个，因此在任何位置调用的方法都会控制这同一个组件。主要使用场景是路由切换和Ajax，因为这两者都不能拿到精确的进度，LoadingBar 会模拟进度，当然也可以通过update()方法来传入一个精确的进度，比如在文件上传时会很有用，具体见API。

### 在路由中使用

```js
// 部分代码省略
import iView from 'iview';
Vue.use(iView);

router.beforeEach((to, from, next) => {
    iView.LoadingBar.start();
    next();
});

router.afterEach(route => {
    iView.LoadingBar.finish();
});
```
### 在异步请求中使用
```js
<script>
// 以jQuery的Ajax为例，部分代码省略
import $ from 'jquery';
export default {
    methods: {
        getData () {
            this.$Loading.start();
            $.ajax({
                url: '/api/someurl',
                type: 'get',
                success: () => {
                    this.$Loading.finish();
                }
                error: () => {
                    this.$Loading.error();
                }
            });
        }
    }
}
</script>
```

## API


### LoadingBar instance

通过直接调用以下方法来使用组件：

* `this.$Loading.start()`
* `this.$Loading.finish()`
* `this.$Loading.error()`
* `this.$Loading.update(percent)`
以上方法隐式的创建及维护Vue组件。函数及参数说明如下：

| 函数名 |说明 |参数 |
| --- |--- |--- |
| start |开始从 0 显示进度条，并自动加载进度 |无 |
| finish |结束进度条，自动补全剩余进度 |无 |
| error |以错误的类型结束进度条，自动补全剩余进度 |无 |
| update |精确加载到指定的进度 |percent，指定的进度百分比 |

另外提供了全局配置和全局销毁的方法：

* `this.$Loading.config(options)`
* `this.$Loading.destroy()`

```js
this.$Loading.config({
    color: '#5cb85c',
    failedColor: '#f0ad4e',
    height: 5
});
```

| 属性 |说明 |类型 |默认值 |
| --- |--- |--- |--- |
| color |进度条的颜色，默认为 iView 主色 |String |primary |
| failedColor |失败时的进度条颜色，默认为 iView 主色 |String |error |
| height |进度条高度，单位 px |Number |2 |


# en-US

## API
| Attribute        | Explanation    |  Type  | Default|
| --------   | -----:   | ---- | ---- |
| type        | Button type, options include primary、ghost、dashed、text、info、success、warning、error, optional      |   String   | -|
