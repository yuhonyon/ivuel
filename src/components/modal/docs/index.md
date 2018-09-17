---
title:
  zh-CN: Modal 对话框
  en-US: Button Size
desc:
  zh-CN: 模态对话框，在浮层中显示，引导用户进行相关操作。
  en-US: Button

order: 1
---

# zh-CN
`Modal`提供了两种用法，普通组件使用和封装好的简洁实例调用。
## API
### Modal props
| 属性 |说明 |类型 |默认值 |
| --- |--- |--- |--- |
| value |对话框是否显示，可使用 v-model 双向绑定数据。 |Boolean |false |
| title |对话框标题，如果使用 slot 自定义了页头，则 title 无效 |String |- |
| closable |是否显示右上角的关闭按钮，关闭后 Esc 按键也将关闭 |Boolean |true |
| mask-closable |是否允许点击遮罩层关闭 |Boolean |true |
| loading |点击确定按钮时，确定按钮是否显示 loading 状态，开启则需手动设置visible来关闭对话框 |Boolean |false |
| scrollable |页面是否可以滚动 |Boolean |false |
| fullscreen |是否全屏显示 |Boolean |false |
| draggable |是否可以拖拽移动 |Boolean |false |
| mask |是否显示遮罩层，开启 draggable 时，强制不显示 |Boolean |true |
| ok-text |确定按钮文字 |String |确定 |
| cancel-text |取消按钮文字 |String |取消 |
| width |对话框宽度，对话框的宽度是响应式的，当屏幕尺寸小于 768px 时，宽度会变为自动auto。当其值不大于 100 时以百分比显示，大于 100 时为像素 |Number / String |520 |
| footer-hide |不显示底部 |Boolean |false |
| styles |设置浮层样式，调整浮层位置等，该属性设置的是.ivu-modal的样式 |Object |- |
| class-name |设置对话框容器.ivu-modal-wrap的类名，可辅助实现垂直居中等自定义效果 |String |- |
| z-index |层级 |Number |1000 |
| transition-names |自定义显示动画，第一项是模态框，第二项是背景 |Array |['ease', 'fade'] |
| transfer |是否将弹层放置于 body 内 |Boolean |true |
| position | 纵向位置可取值("center"和数值) | string/number | "center" |

### Modal events


| 事件名 |说明 |返回值 |
| --- |--- |--- |
| on-ok |点击确定的回调 |无 |
| on-cancel |点击取消的回调 |无 |
| on-visible-change |显示状态发生变化时触发 |true / false |

### Modal slot

| 名称 |说明 |
| --- |--- |
| header |自定义页头 |
| footer |自定义页脚内容 |
| close |自定义右上角关闭内容 |
| 无 |对话框主体内容 |

### Modal instance

通过直接调用以下方法来使用：

* `this.$Modal.info(config)`
* `this.$Modal.success(config)`
* `this.$Modal.warning(config)`
* `this.$Modal.error(config)`
* `this.$Modal.confirm(config)`
* `this.$Modal.remove()//全局关闭对话框的方法`

以上方法隐式地创建及维护Vue组件。参数 `config` 为对象，具体说明如下：

| 属性 |说明 |类型 |默认值 |
| --- |--- |--- |--- |
| title |标题 |String / Element String |- |
| content |内容 |String / Element String |- |
| render |自定义内容，使用后不再限制类型， content 也无效。 学习 Render 函数的内容 |Function |- |
| width |宽度，单位 px |Number / String |416 |
| okText |确定按钮的文字 |String |确定 |
| cancelText |取消按钮的文字，只在Modal.confirm()下有效 |String |取消 |
| loading |点击确定按钮时，确定按钮是否显示 loading 状态，开启则需手动调用Modal.remove()来关闭对话框 |Boolean |false |
| scrollable |页面是否可以滚动 |Boolean |false |
| closable |是否可以按 Esc 键关闭 |Boolean |false |
| onOk |点击确定的回调 |Function |- |
| onCancel |点击取消的回调，只在Modal.confirm()下有效 |Function |- |
| extraBtn |添加按钮 |Array |- |

#### extraBtn

| 属性 | 说明 | 类型 | 默认值 |
| ---- | ---- | ---- | ------ |
| name |   按钮文字   |  String    |   -     |
| type |   按钮类型   |    String  | primary       |
| onOk     |  点击回调    |   Function   |   -     |

# en-US
