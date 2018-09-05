---
title:
  zh-CN: 禁用
  en-US: Button Size
desc:
  zh-CN: 通过设置属性disabled可以禁用文字提示。
  en-US: Button

order: 7
---

# zh-CN


# en-US

```vue
<template>
    <Tooltip placement="top" content="Can disable text prompts" :disabled="disabled">
        <Button @click="disabled = true">Click to close</Button>
    </Tooltip>
</template>
<script>
    export default {
        data () {
            return {
                disabled: false
            }
        }
    }
</script>
```
