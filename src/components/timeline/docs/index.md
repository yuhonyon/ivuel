---
title:
  zh-CN: Timeline 时间轴
  en-US:
desc:
  zh-CN: 对一系列信息进行时间排序时，垂直地展示。
  en-US:
---


# zh-CN

## API

### Timeline props

| 属性    |                           说明 |  类型   | 默认值 |
| ------- | ------------------------------|-------|------|
| pending | 指定是否最后一个节点为幽灵节点 | Boolean | false  |

### TimelineItem props

| 属性    |                           说明 |  类型   | 默认值 |
| ------- | ------------------------------|-------|------|
| color | 圆圈颜色，可选值为blue、red、green，或自定义色值 | String | blue  |

### TimelineItem slot
| 名称 | 说明               |
| ---- | ------------------|
| dot  | 自定义时间轴点内容 |
| 无   | 基本内容           |



# en-US

## API
| Attribute        | Explanation    |  Type  | Default|
| --------   | -----:   | ---- | ---- |
| type        | Button type, options include primary、ghost、dashed、text、info、success、warning、error, optional      |   String   | -|
