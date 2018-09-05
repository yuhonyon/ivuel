---
title:
  zh-CN: Badge 徽标数
  en-US: Button
desc:
  zh-CN: 主要用于通知未读数的角标，提醒用户点击。
  en-US: Basic component that is used to trigger bussiness logic.
---


# zh-CN

## API


| 属性 |说明 |类型 |默认值 |
| --- |--- |--- |--- |
| count |显示的数字，大于overflowCount时，显示${overflowCount}+，为 0 时隐藏 |Number / String |- |
| overflow-count |展示封顶的数字值 |Number / String |99 |
| dot |不展示数字，只有一个小红点，如需隐藏 dot ，需要设置count为 0 |Boolean |false |
| class-name |自定义的class名称，dot 模式下无效 |String |- |


# en-US

## API
| Attribute        | Explanation    |  Type  | Default|
| --------   | -----:   | ---- | ---- |
| type        | Button type, options include primary、ghost、dashed、text、info、success、warning、error, optional      |   String   | -|
