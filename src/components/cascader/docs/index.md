---
title:
  zh-CN: Cascader 级联选择
  en-US: Button
desc:
  zh-CN: 从一组相关联的数据集合中进行选择，常用于省市区、公司级层、事务分类等。相比 Select 组件，可以一次性完成选择，体验更好。
  en-US: Basic component that is used to trigger bussiness logic.
---


# zh-CN

## API

| 属性 |说明 |类型 |默认值 |
| --- |--- |--- |--- |
| data |可选项的数据源，格式参照示例说明 |Array |[] |
| value |当前已选项的数据，格式参照示例说明 |Array |[] |
| render-format |选择后展示的函数，用于自定义显示格式 |Function |label => label.join(' / ') |
| disabled |是否禁用选择器 |Boolean |false |
| clearable |是否支持清除 |Boolean |true |
| placeholder |输入框占位符 |String |请选择 |
| trigger |次级菜单展开方式，可选值为 click 或 hover |String |click |
| change-on-select |当此项为 true 时，点选每级菜单选项值都会发生变化，具体见上面的示例 |Boolean |false |
| size |输入框大小，可选值为large和small或者不填 |String |- |
| load-data |动态获取数据，数据源需标识 loading |Function |- |
| filterable |是否支持搜索 |Boolean |false |
| not-found-text |当搜索列表为空时显示的内容 |String |无匹配数据 |
| transfer |是否将弹层放置于 body 内，在 Tabs、带有 fixed 的 Table 列内使用时，建议添加此属性，它将不受父级样式影响，从而达到更好的效果 |Boolean |false |
| element-id |给表单元素设置 id，详见 Form 用法。 |String |- |



| 事件名 |说明 |返回值 |
| --- |--- |--- |
| on-change |选择完成后的回调，返回值 value 即已选值 value，selectedData 为已选项的具体数据 |value, selectedData |
| on-visible-change |展开和关闭弹窗时触发 |显示状态，Boolean |


# en-US

## API
| Attribute        | Explanation    |  Type  | Default|
| --------   | -----:   | ---- | ---- |
| type        | Button type, options include primary、ghost、dashed、text、info、success、warning、error, optional      |   String   | -|
