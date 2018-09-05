---
title:
  zh-CN: 封顶数字
  en-US: Button Size
desc:
  zh-CN:
  en-US: Button

order: 21
---

# zh-CN
通过设置`overflow-count`属性设置一个封顶值，当超过时，会显示`${overflowCount}+`

# en-US



```vue
<template>
    <Badge count="100">
        <a href="#" class="demo-badge"></a>
    </Badge>
    <Badge count="1000" overflow-count="999">
        <a href="#" class="demo-badge"></a>
    </Badge>
</template>
<script>
    export default {

    }
</script>


```
