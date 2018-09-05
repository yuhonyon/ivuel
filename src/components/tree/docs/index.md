---
title:
  zh-CN: Tree 树形控件
  en-US:
desc:
  zh-CN: 文件夹、组织架构、生物分类、国家地区等等，世间万物的大多数结构都是树形结构。使用树控件可以完整展现其中的层级关系，并具有展开收起选择等交互功能。
  en-US:
---


# zh-CN

## API

### Tree props

| 属性          |                                     说明 | 类型             | 默认值   |
| ------------- | ----------------------------------------:| ---------------- | -------- |
| data          | 可嵌套的节点属性的数组，生成 tree 的数据 | Array            | [ ]      |
| multiple      |                             是否支持多选 | Boolean          | Boolean  |
| show-checkbox |                           是否显示多选框 | Boolean          | Boolean  |
| empty-text    |                         没有数据时的提示 | 没有数据时的提示 | 暂无数据 |
| load-data     |               异步加载数据的方法，见示例 | Function         | -        |
| render        |                   自定义渲染内容，见示例 | Function         | -        |
| children-key  |                             定义子节点键 | String           | String   |


### Tree events

| 事件名           | 说明                   | 返回值               |
| ---------------- | ---------------------- | -------------------- |
| on-select-change | 点击树节点时触发       | 当前已选中的节点数组 |
| on-check-change  | 点击复选框时触发       | 当前已勾选节点的数组 |
| on-toggle-expand | 展开和收起子列表时触发 | 当前节点的数据       |


### Tree methods

| 方法名           | 说明             | 参数 |
| ---------------- | ---------------- | ---- |
| getCheckedNodes  | 获取被勾选的节点 | 无   |
| getSelectedNodes | 获取被选中的节点 | 无   |

### children

| 属性            |                                   说明 | 类型                    | 默认值 |
| --------------- | --------------------------------------:| ----------------------- | ------ |
| title           |                                   标题 | String / Element String | -      |
| expand          |                       是否展开直子节点 | Boolean                 | false  |
| disabled        |                               禁掉响应 | Boolean                 | false  |
| disableCheckbox |                          禁掉 checkbox | Boolean                 | false  |
| selected        |                         是否选中子节点 | Boolean                 | false  |
| checked         | 是否勾选(如果勾选，子节点也会全部勾选) | Boolean                 | false  |
| children        |                         子节点属性数组 | Array                   | -      |
| render          |         自定义当前节点渲染内容，见示例 | Function                | -      |


# en-US

## API
