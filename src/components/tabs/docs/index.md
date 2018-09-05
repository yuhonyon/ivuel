---
title:
  zh-CN: Tabs 标签页
  en-US: Button
desc:
  zh-CN: 选项卡切换组件，常用于平级区域大块内容的的收纳和展现。
  en-US: Basic component that is used to trigger bussiness logic.
---

# zh-CN

## API

### Tabs props

| 属性            |                                         说明 |    类型   |      默认值     |
| ------------- | ----------------------------------------- | ----- | ---------- |
| value         |      当前激活 tab 面板的 name，可以使用 v-model 双向绑定数据 |  String | 默认为第一项的 name |
| type          |                   页签的基本样式，可选值为 line 和 card |  String |     line     |
| size          | 尺寸，可选值为 default 和 small，仅在 type="line" 时有效 |  String |    default   |
| closable      |                是否可以关闭页签，仅在 type="card" 时有效 | Boolean |     false    |
| animated      |                               是否使用 CSS3 动画 | Boolean |     true     |
| capture-focus |                       Tabs 内的表单类组件是否自动获得焦点 | Boolean |     false    |

### Tabs events

| 事件名           | 说明         | 返回值  |
| ------------- | ---------- | ---- |
| on-click      | tab 被点击时触发 | name |
| on-tab-remove | tab 被关闭时触发 | name |

### Tabs slot

| 名称    | 说明    |
| ----- | ----- |
| extra | 附加内容 |

### TabPane props

| 属性       | 说明                                     | 类型               | 默认值   |
| -------- | -------------------------------------- | ---------------- | ----- | --- |
| name     | 用于标识当前面板，对应 value，默认为其索引值              | String           | -  |
| label    | 选项卡头显示文字，支持 Render 函数。 学习 Render 函数的内容 | String  Function | 空 |
| icon     | 选项卡图标                                  | String           | - |
| disabled | 是否禁用该选项卡                               | Boolean          | false |
| closable | 是否可以关闭页签，仅在 type="card" 时有效            | Boolean          | null  |

# en-US

## API

| Attribute |                                                                                 Explanation |  Type  | Default |
| --------- | ------------------------------------------------------------------------------------------ | ---- | ----- |
| type      | Button type, options include primary、ghost、dashed、text、info、success、warning、error, optional | String |    -    |
