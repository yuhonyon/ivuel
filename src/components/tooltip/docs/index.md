---
title:
  zh-CN: Tooltip 文字提示
  en-US:
desc:
  zh-CN: 文字提示气泡框，在鼠标悬停时显示，代替了系统的title提示。
  en-US:
---


# zh-CN




## API

### Tooltip props

| 属性      | 说明                                                                                                                                                  | 类型            | 默认值 |
| --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | --------------- | ------ |
| content   | 显示的内容                                                                                                                                            | String / Number | 空     |
| placement | 提示框出现的位置，可选值为toptop-starttop-endbottombottom-startbottom-endleftleft-startleft-endrightright-startright-end，2.12.0 版本开始支持自动识别 | String          | bottom |
| disabled  | 是否禁用提示框                                                                                                                                        | Boolean         | false  |
| delay     | 延迟显示，单位毫秒                                                                                                                                    | Number          | 0      |
| always    | 是否总是可见                                                                                                                                          | Boolean         | false  |
| transfer  | 是否将弹层放置于 body 内，在 Tabs、带有 fixed 的 Table 列内使用时，建议添加此属性，它将不受父级样式影响，从而达到更好的效果                           | Boolean         | false  |
| options   | 自定义 popper.js 的配置项，具体配置见 popper.js 文档                                                                                                  | Object          | |

属性：options

#### 自定义 popper.js 的配置项，具体配置见 popper.js 文档
```{
    modifiers: {
        computeStyle:{
            gpuAcceleration: false,
        },
        preventOverflow :{
            boundariesElement: 'window'
        }
    }
}```

### Tooltip events

| 事件名         | 说明               | 返回值 |
| -------------- | ------------------ | ------ |
| on-popper-show | 在提示框显示时触发 | 无     |
| on-popper-hide | 在提示框消失时触发 | 无     |

### Tooltip slot
| 名称    | 说明                                                 |
| ------- | ---------------------------------------------------- |
| 无      | 主体内容                                             |
| content | 提示框的内容，定义此 slot 时，会覆盖 props content。 |



# en-US

## API
| Attribute        | Explanation    |  Type  | Default|
| --------   | -----:   | ---- | ---- |
| type        | Button type, options include primary、ghost、dashed、text、info、success、warning、error, optional      |   String   | -|
