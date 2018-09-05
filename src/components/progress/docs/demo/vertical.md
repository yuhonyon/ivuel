---
title:
  zh-CN: 垂直方向
  en-US: Button Size
desc:
  zh-CN:
  en-US: Button

order: 11
---

# zh-CN
设置属性 vertical 将以垂直方向显示。

# en-US



```vue
<template>
    <div style="height: 100px;">
        <Progress vertical :percent="25"></Progress>
        <Progress vertical :percent="45" status="active"></Progress>
        <Progress vertical :percent="65" status="wrong"></Progress>
        <Progress vertical :percent="100"></Progress>
        <Progress vertical :percent="25" hide-info></Progress>
    </div>
</template>
<script>
    export default {

    }
</script>

```
