---
title:
  zh-CN: Checkbox 多选框
  en-US: Button
desc:
  zh-CN: 基本组件-多选框。主要用于一组可选项多项选择，或者单独用于标记切换某种状态。
  en-US: Basic component that is used to trigger bussiness logic.
---


# zh-CN

## API


### Checkbox props


| 属性 |说明 |类型 |默认值 |
| --- |--- |--- |--- |
| value |只在单独使用时有效。可以使用 v-model 双向绑定数据 |Boolean |false |
| label |只在组合使用时有效。指定当前选项的 value 值，组合会自动判断是否选中 |String / Number / Boolean |- |
| disabled |是否禁用当前项 |Boolean |false |
| indeterminate |设置 indeterminate 状态，只负责样式控制 |Boolean |false |
| size |多选框的尺寸，可选值为 large、small、default 或者不设置 |String |- |
| true-value |选中时的值，当使用类似 1 和 0 来判断是否选中时会很有用 |String, Number, Boolean |true |
| false-value |没有选中时的值，当使用类似 1 和 0 来判断是否选中时会很有用 |String, Number, Boolean |false |

### Checkbox events

| 事件名 |说明 |返回值 |
| --- |--- |--- |
| on-change |只在单独使用时有效。在选项状态发生改变时触发，通过修改外部的数据改变时不会触发 |true / false |

### CheckboxGroup props

| 属性 |说明 |类型 |默认值 |
| --- |--- |--- |--- |
| value |指定选中项目的集合，可以使用 v-model 双向绑定数据 |Array |[] |
| size |多选框组的尺寸，可选值为 large、small、default 或者不设置 |String |- |

### CheckboxGroup events

| 事件名 |说明 |返回值 |
| --- |--- |--- |
| on-change |在选项状态发生改变时触发，返回已选中的数组。通过修改外部的数据改变时不会触发 |[...] |


# en-US

## API
| Attribute        | Explanation    |  Type  | Default|
| --------   | -----:   | ---- | ---- |
| type        | Button type, options include primary、ghost、dashed、text、info、success、warning、error, optional      |   String   | -|
