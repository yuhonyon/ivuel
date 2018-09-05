---
title:
  zh-CN: Radio 单选框
  en-US: Button
desc:
  zh-CN: 基本组件-单选框。主要用于一组可选项单项选择，或者单独用于切换到选中状态。
  en-US: Basic component that is used to trigger bussiness logic.
---


# zh-CN

## API



### Radio props

| 属性 |说明 |类型 |默认值 |
| --- |--- |--- |--- |
| value |只在单独使用时有效。可以使用 v-model 双向绑定数据 |Boolean |false |
| label |只在组合使用时有效。指定当前选项的 value 值，组合会自动判断当前选择的项目 |String / Number |- |
| disabled |是否禁用当前项 |Boolean |false |
| size |单选框的尺寸，可选值为 large、small、default 或者不设置 |String |- |
| true-value |选中时的值，当使用类似 1 和 0 来判断是否选中时会很有用 |String, Number, Boolean |true |
| false-value |没有选中时的值，当使用类似 1 和 0 来判断是否选中时会很有用 |String, Number, Boolean |false |

### Radio events

| 事件名 |说明 |返回值 |
| --- |--- |--- |
| on-change |在选项状态发生改变时触发，返回当前状态。通过修改外部的数据改变时不会触发 |... |

### RadioGroup props

| 属性 |说明 |类型 |默认值 |
| --- |--- |--- |--- |
| value |指定当前选中的项目数据。可以使用 v-model 双向绑定数据 |String / Number |- |
| type |可选值为 button 或不填，为 button 时使用按钮样式 |String |- |
| size |尺寸，可选值为large、small、default或者不设置 |String |- |
| vertical |是否垂直排列，按钮样式下无效 |Boolean |false |


### RadioGroup events

| 事件名 |说明 |返回值 |
| --- |--- |--- |
| on-change |在选项状态发生改变时触发，返回当前选中的项。通过修改外部的数据改变时不会触发 |... |


# en-US

## API
| Attribute        | Explanation    |  Type  | Default|
| --------   | -----:   | ---- | ---- |
| type        | Button type, options include primary、ghost、dashed、text、info、success、warning、error, optional      |   String   | -|
