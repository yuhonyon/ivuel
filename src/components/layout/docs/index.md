---
title:
  zh-CN: Layout 布局
  en-US: Button
desc:
  zh-CN: 协助进行页面级整体布局
  en-US: Basic component that is used to trigger bussiness logic.
---


# zh-CN
## 设计规则
### 尺寸
一级导航项偏左靠近 `logo` 放置，辅助菜单偏右放置。
* 顶部导航（大部分系统）：一级导航高度 64px，二级导航 48px。
* 顶部导航（展示类页面）：一级导航高度 80px，二级导航 56px。
* 顶部导航高度的范围计算公式为：48+8n。
* 侧边导航宽度的范围计算公式：200+8n。
### 交互
* 一级导航和末级的导航需要在可视化的层面被强调出来；
* 当前项应该在呈现上优先级最高；
* 当导航收起的时候，当前项的样式自动赋予给它的上一个层级；
* 左侧导航栏的收放交互同时支持手风琴和全展开的样式，根据业务的要求进行适当的选择。
### 视觉
导航样式上需要根据信息层级合理的选择样式：

#### 大色块强调

建议用于底色为深色系时，当前页面父级的导航项。

#### 高亮火柴棍

当导航栏底色为浅色系时使用，可用于当前页面对应导航项，建议尽量在导航路径的最终项使用。

#### 字体高亮变色

从可视化层面，字体高亮的视觉强化力度低于大色块，通常在当前项的上一级使用。

#### 字体放大

12px、14px 是导航的标准字号，14 号字体用在一、二级导航中。字号可以考虑导航项的等级做相应选择。

### 组件概述
* Layout：布局容器，其下可嵌套 HeaderSiderContentFooter或 Layout 本身，可以放在任何父容器中。
* Header：顶部布局，自带默认样式，其下可嵌套任何元素，只能放在 Layout 中。
* Sider：侧边栏，自带默认样式及基本功能，其下可嵌套任何元素，只能放在 Layout 中。
* Content：内容部分，自带默认样式，其下可嵌套任何元素，只能放在 Layout 中。
* Footer：底部布局，自带默认样式，其下可嵌套任何元素，只能放在 Layout 中。

## API


Sider props

| 属性 |说明 |类型 |默认值 |
| --- |--- |--- |--- |
| breakpoint |触发响应式布局的断点，可选值为xs,sm,md,lg,xl或xxl，若不设此属性则不会触发响应式布局。 |String |- |
| value |侧边栏是否收起，可使用 v-model 双向绑定数据。 |Boolean |false |
| width |宽度 |Number |200 |
| collapsible |是否可收起，设为false后，默认触发器会隐藏，且响应式布局不会触发 |Boolean |false |
| collapsed-width |收缩宽度，设置为 0 会出现特殊 trigger |Number |64 |
| hide-trigger |隐藏默认触发器 |Boolean |false |
| default-collapsed |是否默认收起，设置了collapsible后设置此属性侧边栏仍会收起。 |Boolean |false |
| reverse-arrow |改变侧边栏触发器箭头方向，和改变侧边栏收起方向，当Sider在右边时可以使用。 |Boolean |false |


Sider events

| 事件名 |说明 |返回值 |
| --- |--- |--- |
| on-collapse |展开-收起时的回调 |true / false |

Sider slot

| 名称 |说明 |
| --- |--- |
| trigger |自定义触发器 |

Sider methods

| 方法名 |说明 |
| --- |--- |
| toggleCollapse |改变Sider展开-收起状态。 |


# en-US

## API
| Attribute        | Explanation    |  Type  | Default|
| --------   | -----:   | ---- | ---- |
| type        | Button type, options include primary、ghost、dashed、text、info、success、warning、error, optional      |   String   | -|
