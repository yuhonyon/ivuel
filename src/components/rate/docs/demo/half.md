---
title:
  zh-CN: 半个星
  en-US: Button Size
desc:
  zh-CN:
  en-US: Button

order: 11
---

# zh-CN
设置属性 allow-half 可以选中半星。

# en-US



```vue
<template>
    <Rate allow-half v-model="valueHalf"></Rate>
</template>
<script>
    export default {
        data () {
            return {
                valueHalf: 2.5
            }
        }
    }
</script>

```
