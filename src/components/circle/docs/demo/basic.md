---
title:
  zh-CN: 基础用法
  en-US: Button Size
desc:
  zh-CN: 圆形进度环有一系列的参数可配置，具体可以查看下面的API文档。
  en-US: Button

order: 1
---

# zh-CN


# en-US



```vue
<template>
    <Circle :percent="80">
        <span class="demo-Circle-inner" style="font-size:24px">80%</span>
    </Circle>
    <Circle :percent="100" stroke-color="#5cb85c">
        <Icon type="ios-checkmark-empty" size="60" style="color:#5cb85c"></Icon>
    </Circle>
    <Circle :percent="35" stroke-color="#ff5500">
        <span class="demo-Circle-inner">
            <Icon type="ios-close-empty" size="50" style="color:#ff5500"></Icon>
        </span>
    </Circle>
</template>
<script>
    export default {

    }
</script>

```
