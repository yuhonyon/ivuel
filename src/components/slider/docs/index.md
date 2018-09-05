---
title:
  zh-CN: Slider 滑块
  en-US: Button
desc:
  zh-CN: 滑动输入器，用于在数值区间/自定义区间内进行选择，支持连续或离散值。
  en-US: Basic component that is used to trigger bussiness logic.
---


# zh-CN

## API




| 属性 |说明 |类型 |默认值 |
| --- |--- |--- |--- |
| value |滑块选定的值，可以使用 v-model 双向绑定数据。普通模式下，数据格式为数字，在双滑块模式下，数据格式为长度是2的数组，且每项都为数字 |Number / Array |0 |
| min |最小值 |Number |0 |
| max |最大值 |Number |100 |
| step |步长，取值建议能被（max - min）整除 |Number |1 |
| disabled |是否禁用滑块 |Boolean |false |
| range |是否开启双滑块模式 |Boolean |false |
| show-input |是否显示数字输入框，仅在单滑块模式下有效 |Boolean |false |
| show-stops |是否显示间断点，建议在 step 不密集时使用 |Boolean |false |
| show-tip |提示的显示控制，可选值为 hover（悬停，默认）、always（总是可见）、never（不可见） |String |hover |
| tip-format |Slider 会把当前值传给 tip-format，并在 Tooltip 中显示 tip-format 的返回值，若为 null，则隐藏 Tooltip |Function |value |
| input-size |数字输入框的尺寸，可选值为large、small、default或者不填，仅在开启 show-input 时有效 |String |default |



| 事件名 |说明 |返回值 |
| --- |--- |--- |
| on-change |在松开滑动时触发，返回当前的选值，在滑动过程中不会触发 |value |
| on-input |滑动条数据变化时触发，返回当前的选值，在滑动过程中实时触发 |value |


# en-US

## API
| Attribute        | Explanation    |  Type  | Default|
| --------   | -----:   | ---- | ---- |
| type        | Button type, options include primary、ghost、dashed、text、info、success、warning、error, optional      |   String   | -|
