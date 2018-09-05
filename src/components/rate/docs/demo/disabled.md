---
title:
  zh-CN: 只读
  en-US: Button Size
desc:
  zh-CN:
  en-US: Button

order: 31
---

# zh-CN
设置属性 disabled 开启只读模式，无法交互。

# en-US



```vue
<template>
    <Rate disabled v-model="valueDisabled"></Rate>
</template>
<script>
    export default {
        data () {
            return {
                valueDisabled: 2
            }
        }
    }
</script>


```
