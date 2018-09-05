---
title:
  zh-CN: Carousel 走马灯
  en-US: Button
desc:
  zh-CN: 常用于一组图片或卡片轮播，当内容空间不足时，可以用走马灯的形式进行收纳，进行轮播展现。
  en-US: Basic component that is used to trigger bussiness logic.
---


# zh-CN

## API


| 属性 |说明 |类型 |默认值 |
| --- |--- |--- |--- |
| value |幻灯片的索引，从 0 开始，可以使用 v-model 双向绑定数据 |Number |0 |
| height |走马灯的高度，可填 auto 或具体高度数值，单位 px |String / Number |auto |
| loop |是否开启循环 |Boolean |false |
| autoplay |是否自动切换 |Boolean |false |
| autoplay-speed |自动切换的时间间隔，单位为毫秒 |Number |2000 |
| dots |指示器的位置，可选值为 inside （内部），outside（外部），none（不显示） |String |inside |
| radius-dot |是否显示圆形指示器 |Boolean |false |
| trigger |指示器的触发方式，可选值为 click（点击），hover（悬停） |String |click |
| arrow |切换箭头的显示时机，可选值为 hover（悬停），always（一直显示），never（不显示） |String |hover |
| easing |动画效果 |String |ease |



| 事件名 |说明 |返回值 |
| --- |--- |--- |
| on-change |幻灯片切换时触发，目前激活的幻灯片的索引，原幻灯片的索引 |oldValue, value |


# en-US

## API
| Attribute        | Explanation    |  Type  | Default|
| --------   | -----:   | ---- | ---- |
| type        | Button type, options include primary、ghost、dashed、text、info、success、warning、error, optional      |   String   | -|
