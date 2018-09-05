---
title:
  zh-CN: Collapse 折叠面板
  en-US: Button
desc:
  zh-CN: 将内容区域折叠/展开。
  en-US: Basic component that is used to trigger bussiness logic.
---


# zh-CN



## API
### Collapse props

| 属性 |说明 |类型 |默认值 |
| --- |--- |--- |--- |
| value |当前激活的面板的 name，可以使用 v-model 双向绑定 |Array / String |- |
| accordion |是否开启手风琴模式，开启后每次至多展开一个面板 |Boolean |false |


### Collapse events

| 事件名 |说明 |返回值 |
| --- |--- |--- |
| on-change |切换面板时触发，返回当前已展开的面板的 key，格式为数组 |[] |


### Panel props

| 属性 |说明 |类型 |默认值 |
| --- |--- |--- |--- |
| name |当前面板的 name，与 Collapse的value对应，不填为索引值 |String |index |


### Panel slot

| 名称 |说明 |
| --- |--- |
| 无 |面板头内容 |
| content |描述内容 |


# en-US

## API
| Attribute        | Explanation    |  Type  | Default|
| --------   | -----:   | ---- | ---- |
| type        | Button type, options include primary、ghost、dashed、text、info、success、warning、error, optional      |   String   | -|
