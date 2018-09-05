---
title:
  zh-CN: Switch 开关
  en-US: Button
desc:
  zh-CN: 在两种状态间切换时用到的开关选择器。
  en-US: Basic component that is used to trigger bussiness logic.
---


# zh-CN

## API



### Switch props
| 属性 |说明 |类型 |默认值 |
| --- |--- |--- |--- |
| value |指定当前是否选中，可以使用 v-model 双向绑定数据 |Boolean |false |
| size |开关的尺寸，可选值为large、small、default或者不写。建议开关如果使用了2个汉字的文字，使用 large。 |String |- |
| disabled |禁用开关 |Boolean |false |
| true-value |选中时的值，当使用类似 1 和 0 来判断是否选中时会很有用 |String, Number, Boolean |true |
| false-value |没有选中时的值，当使用类似 1 和 0 来判断是否选中时会很有用 |String, Number, Boolean |false |

### Switch events

| 事件名 |说明 |返回值 |
| --- |--- |--- |
| on-change |开关变化时触发，返回当前的状态 |true / false |

### Switch slot

| 名称 |说明 |
| --- |--- |
| open |自定义显示打开时的内容 |
| close |自定义显示关闭时的内容 |


# en-US

## API
| Attribute        | Explanation    |  Type  | Default|
| --------   | -----:   | ---- | ---- |
| type        | Button type, options include primary、ghost、dashed、text、info、success、warning、error, optional      |   String   | -|
