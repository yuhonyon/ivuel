---
title:
  zh-CN: 独立使用及自定义样式
  en-US: Button Size
desc:
  zh-CN: 可以没有 slot 独立展示。
  en-US: Button

order: 31
---

# zh-CN


# en-US



```vue
<style>
    .demo-badge-alone{
        background: #5cb85c !important;
    }
</style>
<template>
    <Badge count="10"></Badge>
    <Badge count="20" class-name="demo-badge-alone"></Badge>
</template>
<script>
    export default {

    }
</script>


```
