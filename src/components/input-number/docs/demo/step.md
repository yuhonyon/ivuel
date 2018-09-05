---
title:
  zh-CN: 精度
  en-US: Button Size
desc:
  zh-CN:
  en-US: Button

order: 11
---

# zh-CN
通过设置step属性控制每次改变的精度。

# en-US



```vue
<template>
    <InputNumber :max="10" :min="1" :step="1.2" v-model="value2"></InputNumber>
</template>
<script>
    export default {
        data () {
            return {
                value2: 1
            }
        }
    }
</script>

```
