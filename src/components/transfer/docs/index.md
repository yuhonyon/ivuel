---
title:
  zh-CN: Transfer 穿梭框
  en-US:
desc:
  zh-CN: 双栏穿梭选择框，常用于将多个项目从一边移动到另一边。
  en-US:
---
# zh-CN

## API

### Tooltip props

| 属性               | 说明                                                                      | 类型     | 默认值                       |
| ------------------ | ------------------------------------------------------------------------- | -------- | ---------------------------- |
| data               | 数据源，其中的数据将会被渲染到左边一栏中，targetKeys 中指定的除外。       | Array    | [ ]                          |
| targetKeys         | 显示在右侧框数据的key集合                                                 | Array    | [ ]                          |
| render-format      | 每行数据渲染函数，该函数的入参为 data 中的项                              | Function | 默认显示label，没有时显示key |
| selected-keys      | 设置哪些项应该被选中                                                      | Array    | [ ]                          |
| list-style         | 两个穿梭框的自定义样式                                                    | Object   | { }                          |
| titles             | 标题集合，顺序从左至右                                                    | Array    | ['源列表', '目的列表']       |
| operations         | 操作文案集合，顺序从上至下                                                | Array    | [ ]                          |
| filterable         | 是否显示搜索框                                                            | Boolean  | Boolean                      |
| filter-placeholder | 搜索框的占位                                                              | String   | 请输入搜索内容               |
| filter-method      | 自定义搜索函数，入参为 data 和 query，data 为项，query 为当前输入的搜索词 | Function | 默认搜索label                |
| not-found-text     | 当列表为空时显示的内容                                                    | String   | 列表为空                     |


### Transfer events

| 事件名         | 说明               | 返回值 |
| -------------- | ------------------ | ------ |
| on-popper-show | 在提示框显示时触发 | 无     |
| on-popper-hide | 在提示框消失时触发 | 无     |

### Tooltip slot
| 名称               | 说明                           | 返回值                                 |
| ------------------ | ------------------------------ | -------------------------------------- |
| on-change          | 选项在两栏之间转移时的回调函数 | targetKeys, direction, moveKeys        |
| on-selected-change | 选中项发生变化时触发           | sourceSelectedKeys, targetSelectedKeys |

### Transfer slot
| 名称 | 说明           |
| ---- | -------------- |
| 无   | 自定义底部内容 |




# en-US

## API
| Attribute        | Explanation    |  Type  | Default|
| --------   | -----:   | ---- | ---- |
| type        | Button type, options include primary、ghost、dashed、text、info、success、warning、error, optional      |   String   | -|
