---
title:
  zh-CN: 禁用
  en-US: Button Size
desc:
  zh-CN:
  en-US: Button

order: 41
---

# zh-CN
通过设置disabled属性禁用输入框，点击按钮切换状态。

# en-US



```vue
<template>
    <InputNumber v-model="value6" :disabled="disabled"></InputNumber>
    <Button type="primary" @click="disabled = !disabled">Toggle Disabled</Button>
</template>
<script>
    export default {
        data () {
            return {
                disabled: true,
                value6: 1
            }
        }
    }
</script>

```
