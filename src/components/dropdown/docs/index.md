---
title:
  zh-CN: Dropdown 下拉菜单
  en-US: Button
desc:
  zh-CN: 展示一组折叠的下拉菜单。
  en-US: Basic component that is used to trigger bussiness logic.
---


# zh-CN

## API



### Dropdown props

| 属性 |说明 |类型 |默认值 |
| --- |--- |--- |--- |
| trigger |触发方式，可选值为 hover（悬停）click（点击）custom（自定义），使用 custom 时，需配合 visible 一起使用 |String |hover |
| visible |手动控制下拉框的显示，在 trigger = 'custom' 时使用 |Boolean |false |
| placement |下拉菜单出现的位置，可选值为toptop-starttop-endbottombottom-startbottom-endleftleft-startleft-endrightright-startright-end, 2.12.0 版本开始支持自动识别 |String |bottom |
| transfer |是否将弹层放置于 body 内，在 Tabs、带有 fixed 的 Table 列内使用时，建议添加此属性，它将不受父级样式影响，从而达到更好的效果 |Boolean |false |
| disabled |禁用 |Boolean |false |


### Dropdown events

| 事件名 |说明 |返回值 |
| --- |--- |--- |
| on-click |点击菜单项时触发 |DropdownItem 的 name 值 |
| on-visible-change |菜单显示状态改变时调用 |visible |
| on-clickoutside |点击外部关闭下拉菜单时触发 |event |

### Dropdown slot

| 名称 |说明 |
| --- |--- |
| 无 |主体内容 |
| list |列表内容，一般由 DropdownMenu 承担 |

### DropdownItem props

| 属性 |说明 |类型 |默认值 |
| --- |--- |--- |--- |
| name |用来标识这一项 |String |- |
| disabled |禁用该项 |Boolean |false |
| divided |显示分割线 |Boolean |false |
| selected |标记该项为选中状态 |Boolean |false |


# en-US

## API
| Attribute        | Explanation    |  Type  | Default|
| --------   | -----:   | ---- | ---- |
| type        | Button type, options include primary、ghost、dashed、text、info、success、warning、error, optional      |   String   | -|
