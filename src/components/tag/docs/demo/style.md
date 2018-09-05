---
title:
  zh-CN: 样式类型
  en-US: icon&shapes
desc:
  zh-CN:
  en-US: Button

order: 2
---

# zh-CN
通过设置 type 属性为 border 或 dot 来选择不同的样式类型。建议有关闭的某些场景下使用 border，图例的场景下使用 dot。

# en-US



```vue
<template>
    <Tag type="border">标签三</Tag>
    <Tag type="border" closable>标签四</Tag>
    <Tag type="dot">标签一</Tag>
    <Tag type="dot" closable>标签二</Tag>
</template>
<script>
    export default {

    }
</script>
```
