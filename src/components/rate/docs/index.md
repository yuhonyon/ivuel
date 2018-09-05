---
title:
  zh-CN: Rate 评分
  en-US: Button
desc:
  zh-CN: 对事物进行快速的评级操作，或对评价进行展示。
  en-US: Basic component that is used to trigger bussiness logic.
---


# zh-CN

## API

Rate props

| 属性 |说明 |类型 |默认值 |
| --- |--- |--- |--- |
| count |star 总数 |Number |5 |
| value |当前 star 数，可以使用 v-model 双向绑定数据 |Number |0 |
| allow-half |是否允许半选 |Boolean |false |
| disabled |是否只读，无法进行交互 |Boolean |false |
| show-text |是否显示提示文字 |Boolean |false |
| clearable |是否可以取消选择 |Boolean |false |

Rate events

| 事件名 |说明 |返回值 |
| --- |--- |--- |
| on-change |评分改变时触发 |value |


# en-US

## API
| Attribute        | Explanation    |  Type  | Default|
| --------   | -----:   | ---- | ---- |
| type        | Button type, options include primary、ghost、dashed、text、info、success、warning、error, optional      |   String   | -|
