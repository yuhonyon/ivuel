---
title:
  zh-CN: Button 按钮
  en-US: Button
desc:
  zh-CN: 基础组件，触发业务逻辑时使用。
  en-US: Basic component that is used to trigger bussiness logic.
---

# zh-CN

## API

通过直接调用以下方法来使用组件：

-   `this.$Message.info(config)`
-   `this.$Message.success(config)`
-   `this.$Message.warning(config)`
-   `this.$Message.error(config)`
-   `this.$Message.loading(config)`

以上方法隐式的创建及维护 Vue 组件。参数 `config` 可以是字符串或对象，当为字符串时，直接显示内容，当为对象时，具体说明如下：

| 属性       | 说明                         | 类型       | 默认值   |
| -------- | -------------------------- | -------- | ----- |
| content  | 提示内容                       | String   | -     |
| render   | 自定义描述内容，使用 Vue 的 Render 函数 | Function | -     |
| duration | 自动关闭的延时，单位秒，不关闭可以写 0       | Number   | 1.5   |
| onClose  | 关闭时的回调                     | Function | -     |
| closable | 是否显示关闭按钮                   | Boolean  | false |

另外提供了全局配置和全局销毁的方法：

-   `this.$Message.config(options)`
-   `this.$Message.destroy()`

```js
this.$Message.config({
    top: 50,
    duration: 3
});
```

| 属性       | 说明               | 类型     | 默认值 |
| -------- | ---------------- | ------ | --- |
| top      | 提示组件距离顶端的距离，单位像素 | Number | 24  |
| duration | 默认自动关闭的延时，单位秒    | Number | 1.5 |

# en-US

## API

| Attribute |                                                                                 Explanation | Type   | Default |
| --------- | ------------------------------------------------------------------------------------------: | ------ | ------- |
| type      | Button type, options include primary、ghost、dashed、text、info、success、warning、error, optional | String | -       |
