---
title:
  zh-CN: Card 卡片
  en-US: Button
desc:
  zh-CN: 基础容器，用来显示文字、列表、图文等内容，也可以配合其它组件一起使用。
  en-US: Basic component that is used to trigger bussiness logic.
---


# zh-CN

## API

| 属性 |说明 |类型 |默认值 |
| --- |--- |--- |--- |
| bordered |是否显示边框，建议在灰色背景下使用 |Boolean |true |
| dis-hover |禁用鼠标悬停显示阴影 |Boolean |false |
| shadow |卡片阴影，建议在灰色背景下使用 |Boolean |false |
| padding |卡片内部间距，单位 px |Number |16 |
| title |标题，2.12.0 新增 |String |- |
| icon |标题前的图标，2.12.0 新增 |String |- |



| 名称 |说明 |
| --- |--- |
| title |自定义卡片标题，如果是简单文字，可以使用p标签包裹 |
| extra |额外显示的内容，默认位置在右上角 |
| 无 |卡片主体内容 |


# en-US

## API
| Attribute        | Explanation    |  Type  | Default|
| --------   | -----:   | ---- | ---- |
| type        | Button type, options include primary、ghost、dashed、text、info、success、warning、error, optional      |   String   | -|
