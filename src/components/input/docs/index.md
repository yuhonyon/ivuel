---
title:
  zh-CN: Input 输入框
  en-US: Button
desc:
  zh-CN: 基本表单组件，支持 input 和 textarea，并在原生控件基础上进行了功能扩展，可以组合使用。
  en-US: Basic component that is used to trigger bussiness logic.
---


# zh-CN

## API


### Input props

| 属性 |说明 |类型 |默认值 |
| --- |--- |--- |--- |
| type |输入框类型，可选值为 text、password、textarea、url、email、date |String |text |
| value |绑定的值，可使用 v-model 双向绑定 |String / Number |空 |
| size |输入框尺寸，可选值为large、small、default或者不设置 |String |- |
| placeholder |占位文本 |String |- |
| clearable |是否显示清空按钮 |Boolean |false |
| disabled |设置输入框为禁用状态 |Boolean |false |
| readonly |设置输入框为只读 |Boolean |false |
| maxlength |最大输入长度 |Number |- |
| icon |输入框尾部图标，仅在 text 类型下有效 |String |- |
| rows |文本域默认行数，仅在 textarea 类型下有效 |Number |2 |
| autosize |自适应内容高度，仅在 textarea 类型下有效，可传入对象，如 { minRows: 2, maxRows: 6 } |Boolean / Object |false |
| number |将用户的输入转换为 Number 类型 |Boolean |false |
| autofocus |自动获取焦点 |Boolean |false |
| autocomplete |原生的自动完成功能，可选值为 off 和 on |String |off |
| element-id |给表单元素设置 id，详见 Form 用法。 |String |- |
| spellcheck |原生的 spellcheck 属性 |Boolean |false |
| wrap |原生的 wrap 属性，可选值为 hard 和 soft，仅在 textarea 下生效 |String |soft |

### Input events

| 事件名 |说明 |返回值 |
| --- |--- |--- |
| on-enter |按下回车键时触发 |无 |
| on-click |设置 icon 属性后，点击图标时触发 |无 |
| on-change |数据改变时触发 |event |
| on-focus |输入框聚焦时触发 |无 |
| on-blur |输入框失去焦点时触发 |无 |
| on-keyup |原生的 keyup 事件 |event |
| on-keydown |原生的 keydown 事件 |event |
| on-keypress |原生的 keypress 事件 |event |


### Input slot

| 名称 |说明 |
| --- |--- |
| prepend |前置内容，仅在 text 类型下有效 |
| append |后置内容，仅在 text 类型下有效 |


### Input methods

| 方法名 |说明 |参数 |
| --- |--- |--- |
| focus |手动聚焦输入框 |无 |


# en-US

## API
| Attribute        | Explanation    |  Type  | Default|
| --------   | -----:   | ---- | ---- |
| type        | Button type, options include primary、ghost、dashed、text、info、success、warning、error, optional      |   String   | -|
