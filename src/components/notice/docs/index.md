---
title:
  zh-CN: Notice 通知提醒
  en-US: Button
desc:
  zh-CN: 在界面右上角显示可关闭的全局通知。
  en-US: Basic component that is used to trigger bussiness logic.
---


# zh-CN

## API

### Notice instance
通过直接调用以下方法来使用组件：

* `this.$Notice.open(config)`
* `this.$Notice.info(config)`
* `this.$Notice.success(config)`
* `this.$Notice.warning(config)`
* `this.$Notice.error(config)`
以上方法隐式地创建及维护Vue组件。参数 config 为对象，具体说明如下：


| 属性 |说明 |类型 |默认值 |
| --- |--- |--- |--- |
| title |通知提醒的标题 |String |- |
| desc |通知提醒的内容，为空或不填时，自动应用仅标题模式下的样式 |String |- |
| render |自定义描述内容，使用 Vue 的 Render 函数，如果同时设置了 render 和 desc，则只显示 render 的内容 |Function |- |
| duration |自动关闭的延时，单位秒，不关闭可以写 0 |Number |4.5 |
| name |当前通知的唯一标识 |String |自动 |
| onClose |关闭时的回调 |Function |- |

另外提供了全局配置、全局关闭某个通知和全局销毁的方法：

* `this.$Notice.config(options)`
* `this.$Notice.close(name)`
* `this.$Notice.destroy()`
```js
this.$Notice.config({
    top: 50,
    duration: 3
});
```

| 属性 |说明 |类型 |默认值 |
| --- |--- |--- |--- |
| top |通知组件距离顶端的距离，单位像素 |Number |24 |
| duration |默认自动关闭的延时，单位秒 |Number |4.5 |


# en-US

## API
| Attribute        | Explanation    |  Type  | Default|
| --------   | -----:   | ---- | ---- |
| type        | Button type, options include primary、ghost、dashed、text、info、success、warning、error, optional      |   String   | -|
