---
title:
  zh-CN: InputNumber 数字输入框
  en-US: Button
desc:
  zh-CN: 使用鼠标或键盘输入一定范围的标准数值。
  en-US: Basic component that is used to trigger bussiness logic.
---


# zh-CN

## API


### InputNumber props


| 属性 |说明 |类型 |默认值 |
| --- |--- |--- |--- |
| max |最大值 |Number |Infinity |
| min |最小值 |Number |-Infinity |
| value |当前值，可以使用 v-model 双向绑定数据 |Number |1 |
| step |每次改变的步伐，可以是小数 |Number |1 |
| size |输入框尺寸，可选值为large、small、default或者不填 |String |- |
| disabled |设置禁用状态 |Boolean |false |
| placeholder |占位文本 |String |- |
| formatter |指定输入框展示值的格式 |Function |- |
| parser |指定从 formatter 里转换回数字的方式，和 formatter 搭配使用 |Function |- |
| readonly |是否设置为只读 |Boolean |false |
| editable |是否可编辑 |Boolean |true |
| precision |数值精度 |Number |- |
| element-id |给表单元素设置 id，详见 Form 用法。 |String |- |
| plusminus | 风格  | boolean | true |

### InputNumber events

| 事件名 |说明 |返回值 |
| --- |--- |--- |
| on-change |数值改变时的回调，返回当前值 |当前值 |
| on-focus |聚焦时触发 |event |
| on-blur |失焦时触发 |- |


# en-US

## API
| Attribute        | Explanation    |  Type  | Default|
| --------   | -----:   | ---- | ---- |
| type        | Button type, options include primary、ghost、dashed、text、info、success、warning、error, optional      |   String   | -|
