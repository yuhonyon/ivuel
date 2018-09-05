---
title:
  zh-CN: 基本用法
  en-US: Button Size
desc:
  zh-CN:
  en-US: Button

order: 1
---

# zh-CN
处在不同状态下的进度条，当 percent 为 100 时，自动将状态置为 success。

# en-US



```vue
<template>
    <Progress :percent="25"></Progress>
    <Progress :percent="45" status="active"></Progress>
    <Progress :percent="65" status="wrong"></Progress>
    <Progress :percent="100"></Progress>
    <Progress :percent="25" hide-info></Progress>
</template>
<script>
    export default {

    }
</script>

```
