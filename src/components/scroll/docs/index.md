---
title:
  zh-CN: Scroll 无限滚动
  en-US: Button
desc:
  zh-CN: 常用于滚动至底部时，触发加载更多数据。
  en-US: Basic component that is used to trigger bussiness logic.
---


# zh-CN

## API




| 属性 |说明 |类型 |默认值 |
| --- |--- |--- |--- |
| height |滚动区域的高度，单位像素 |String / Number |300 |
| loading-text |加载中的文案 |String |加载中 |
| on-reach-top |滚动至顶部时触发，需返回 Promise |Function |- |
| on-reach-bottom |滚动至底部时触发，需返回 Promise |Function |- |
| on-reach-edge |滚动至顶部或底部时触发，需返回 Promise |Function |- |
| distance-to-edge |从边缘到触发回调的距离。如果是负的，回调将在到达边缘之前触发。值最好在 24 以下。 |Number / Array |[20, 20] |


# en-US

## API
| Attribute        | Explanation    |  Type  | Default|
| --------   | -----:   | ---- | ---- |
| type        | Button type, options include primary、ghost、dashed、text、info、success、warning、error, optional      |   String   | -|
