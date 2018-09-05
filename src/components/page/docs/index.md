---
title:
  zh-CN: Page 分页
  en-US: Button
desc:
  zh-CN: 当数据量较多时，使用分页可以快速进行数据切换。
  en-US: Basic component that is used to trigger bussiness logic.
---


# zh-CN

## API


### Page props

| 属性 |说明 |类型 |默认值 |
| --- |--- |--- |--- |
| current |当前页码，支持 .sync 修饰符 |Number |1 |
| total |数据总数 |Number |0 |
| page-size |每页条数 |Number |10 |
| page-size-opts |每页条数切换的配置 |Array |[10, 20, 30, 40] |
| placement |条数切换弹窗的展开方向，可选值为 bottom 和 top |String |bottom |
| size |可选值为small（迷你版）或不填（默认） |String |- |
| simple |简洁版 |Boolean |false |
| show-total |显示总数 |Boolean |false |
| show-elevator |显示电梯，可以快速切换到某一页 |Boolean |false |
| show-sizer |显示分页，用来改变page-size |Boolean |false |
| class-name |自定义 class 名称 |String |- |
| styles |自定义 style 样式 |Object |- |
| transfer |是否将弹层放置于 body 内，在 Tabs、带有 fixed 的 Table 列内使用时，建议添加此属性，它将不受父级样式影响，从而达到更好的效果 |Boolean |false |

### Page events

| 事件名 |说明 |返回值 |
| --- |--- |--- |
| on-change |页码改变的回调，返回改变后的页码 |页码 |
| on-page-size-change |切换每页条数时的回调，返回切换后的每页条数 |page-size |


### Page slot

| 名称 |说明 |
| --- |--- |
| 无 |自定义显示总数的内容 |


# en-US

## API
| Attribute        | Explanation    |  Type  | Default|
| --------   | -----:   | ---- | ---- |
| type        | Button type, options include primary、ghost、dashed、text、info、success、warning、error, optional      |   String   | -|
