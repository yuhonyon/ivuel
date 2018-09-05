---
title:
  zh-CN: 尺寸
  en-US: Button Size
desc:
  zh-CN:
  en-US: Button

order: 31
---

# zh-CN
通过设置size属性为large和small将输入框设置为大和小尺寸，不设置为默认（中）尺寸。

# en-US



```vue
<template>
    <InputNumber v-model="value3" size="small"></InputNumber>
    <InputNumber v-model="value4"></InputNumber>
    <InputNumber v-model="value5" size="large"></InputNumber>
</template>
<script>
    export default {
        data () {
            return {
                value3: 2,
                value4: 2,
                value5: 2
            }
        }
    }
</script>

```
