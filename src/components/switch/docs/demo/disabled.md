---
title:
  zh-CN: 禁用
  en-US: Button Size
desc:
  zh-CN:
  en-US: Button

order: 31
---

# zh-CN


# en-US



```vue
<template>
    <Switch :disabled="disabled"></Switch>
    <Button type="primary" @click="disabled = !disabled">Toggle Disabled</Button>
</template>
<script>
    export default {
        data () {
            return {
                disabled: true
            }
        },
    }
</script>

```
