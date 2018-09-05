---
title:
  zh-CN: 气泡提示
  en-US: Button Size
desc:
  zh-CN:
  en-US: Button

order: 1
---

# zh-CN
Poptip 与 Tooltip 类似，具有很多相同配置，不同点是 Poptip 以卡片的形式承载了更多的内容，比如链接、表格、按钮等。

Poptip 还 confirm 确认框，与 Modal 不同的是，它会出现在就近元素，相对轻量。


## API

### Poptip props
| 属性 |说明 |类型 |默认值 |
| --- |--- |--- |--- |
| trigger |触发方式，可选值为hover（悬停）click（点击）focus（聚焦）,在 confirm 模式下，只有 click 有效 |String |click |
| title |显示的标题 |String / Number |- |
| content |显示的正文内容，只在非 confirm 模式下有效 |String / Number |空 |
| placement |提示框出现的位置，可选值为toptop-starttop-endbottombottom-startbottom-endleftleft-startleft-endrightright-startright-end，2.12.0 版本开始支持自动识别 |String |top |
| width |宽度，最小宽度为 150px，在 confirm 模式下，默认最大宽度为 300px |String / Number |- |
| confirm |是否开启对话框模式 |Boolean |false |
| ok-text |确定按钮的文字，只在 confirm 模式下有效 |String |确定 |
| cancel-text |取消按钮的文字，只在 confirm 模式下有效 |String |取消 |
| transfer |是否将弹层放置于 body 内，在 Tabs、带有 fixed 的 Table 列内使用时，建议添加此属性，它将不受父级样式影响，从而达到更好的效果 |Boolean |false |
| popper-class |给 Poptip 设置 class-name，在使用 transfer 时会很有用 |String |- |
| options |自定义 popper.js 的配置项，具体配置见 popper.js 文档 |Object |{ modifiers: { computeStyle:{ gpuAcceleration: false, }, preventOverflow :{ boundariesElement: 'window' } } } |
|   disabled  | 是否禁用        | boolean | false |
| poptipClass | 为poptip添加类名 |  string |   -    |
### Poptip events
| 事件名 |说明 |返回值 |
| --- |--- |--- |
| on-popper-show |在提示框显示时触发 |无 |
| on-popper-hide |在提示框消失时触发 |无 |
| on-ok |点击确定的回调，只在 confirm 模式下有效 |无 |
| on-cancel |点击取消的回调，只在 confirm 模式下有效 |无 |


### Poptip slot
| 名称 |说明 |
| --- |--- |
| 无 |主体内容 |
| title |提示框标题，定义此 slot 时，会覆盖 props title |
| content |提示框内容，定义此 slot 时，会覆盖 props content，只在非 confirm 模式下有效 |


# en-US
