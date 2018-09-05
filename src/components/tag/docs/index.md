---
title:
  zh-CNTag 标签
  en-USButton
desc:
  zh-CN对不同维度进行简单的标记和分类。
  en-USBasic component that is used to trigger bussiness logic.
---

# zh-CN

## API

### Tag props

| 属性        |                                                   说明 |        类型       |  默认值  |
| --------- | ---------------------------------------------------| -------------| ---|
| closable  |                                             标签是否可以关闭 |     Boolean     | false |
| checkable |                                             标签是否可以选择 |     Boolean     | false |
| checked   |                                              标签的选中状态 |     Boolean     |  true |
| type      |                           标签的样式类型，可选值为 border、dot或不填 |      String     |   -   |
| color     | 标签颜色，预设颜色值为blue、green、red、yellow、default，你也可以自定义颜色值。 |      String     |   —   |
| name      |                        当前标签的名称，使用 v-for，并支持关闭时，会比较有用 | String / Number |   -   |
| fade      |                      是否在出现和消失时使用渐变的动画，动画时长可能会引起占位的闪烁 |     Boolean     |  true |



### Tag events

| Attribute |                                                                                 Explanation |  Type  | Default |
| --------- | ------------------------------------------------------------------------------------------| ----| -----|
| type      | Button type, options include primary、ghost、dashed、text、info、success、warning、error, optional | String |    -    |

# en-US
