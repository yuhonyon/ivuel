---
title:
  zh-CN: Menu 导航菜单
  en-US: Button
desc:
  zh-CN: 为页面和功能提供导航的菜单列表，常用于网站顶部和左侧。
  en-US: Basic component that is used to trigger bussiness logic.
---


# zh-CN

## API

### Menu props
| 属性 |说明 |类型 |默认值 |
| --- |--- |--- |--- |
| mode |菜单类型，可选值为 horizontal（水平） 和 vertical（垂直） |String |vertical |
| theme |主题，可选值为 light、dark、primary，其中 primary 只适用于 mode="horizontal" |String |light |
| active-name |激活菜单的 name 值 |String / Number |- |
| open-names |展开的 Submenu 的 name 集合 |Array |[] |
| accordion |是否开启手风琴模式，开启后每次至多展开一个子菜单 |Boolean |false |
| width |导航菜单的宽度，只在 mode="vertical" 时有效，如果使用 Col 等布局，建议设置为 auto |String |240px |
| collapse | 是否开启collapse功能 | boolean | false |
| router | 是否开启router功能 | boolean | false |

### Menu events

| 事件名 |说明 |返回值 |
| --- |--- |--- |
| on-select |选择菜单（MenuItem）时触发 |name |
| on-open-change |当 展开/收起 子菜单时触发 |当前展开的 Submenu 的 name 值数组 |

### Menu methods

| 方法名 |说明 |参数 |
| --- |--- |--- |
| updateOpened |手动更新展开的子目录，注意要在 $nextTick 里调用 |无 |
| updateActiveName |手动更新当前选择项，注意要在 $nextTick 里调用 |无 |

### MenuItem props

| 属性 |说明 |类型 |默认值 |
| --- |--- |--- |--- |
| name |菜单项的唯一标识，必填 |String / Number |- |
| tooltip | 收起后提示内容 | string |  -   |
### Submenu props

| 属性 |说明 |类型 |默认值 |
| --- |--- |--- |--- |
| name |子菜单的唯一标识，必填 |String / Number |- |
| tooltip | 收起后提示内容 | string |  -   |
### Submenu slot

| 名称 |说明 |
| --- |--- |
| 无 |菜单项 |
| title |子菜单标题 |

### MenuGroup props

| 属性 |说明 |类型 |默认值 |
| --- |--- |--- |--- |
| title |分组标题 |String |空 |

# en-US

## API
| Attribute        | Explanation    |  Type  | Default|
| --------   | -----:   | ---- | ---- |
| type        | Button type, options include primary、ghost、dashed、text、info、success、warning、error, optional      |   String   | -|
