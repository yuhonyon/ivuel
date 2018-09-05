---
title:
  zh-CN: 自定义更多样式
  en-US: Button Size
desc:
  zh-CN:
  en-US: Button

order: 31
---

# zh-CN
通过自定义slot和属性stroke-width改变进度条效果。

# en-US



```vue
<template>
    <Progress :percent="25" :stroke-width="5"></Progress>
    <Progress :percent="100">
        <Icon type="checkmark-circled"></Icon>
        <span>成功</span>
    </Progress>
</template>
<script>
    export default {

    }
</script>

```
