---
title:
  zh-CN: Progress 进度条
  en-US: Button
desc:
  zh-CN: 展示操作或任务的当前进度，比如上传文件。
  en-US: Basic component that is used to trigger bussiness logic.
---


# zh-CN

## API


### Progress props

| 属性 |说明 |类型 |默认值 |
| --- |--- |--- |--- |
| percent |百分比 |Number |0 |
| status |状态，可选值为normal、active、wrong、success |String |normal |
| stroke-width |进度条的线宽，单位 px |Number |10 |
| hide-info |隐藏数值或状态图标 |Boolean |false |
| vertical |是否在垂直方向显示 |Boolean |false |

### Progress slot

| 名称 |说明 |
| --- |--- |
| 无 |自定义显示状态内容 |


# en-US

## API
| Attribute        | Explanation    |  Type  | Default|
| --------   | -----:   | ---- | ---- |
| type        | Button type, options include primary、ghost、dashed、text、info、success、warning、error, optional      |   String   | -|
