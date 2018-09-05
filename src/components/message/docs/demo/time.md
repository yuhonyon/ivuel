---
title:
  zh-CN: 自定义时长
  en-US: Button Size
desc:
  zh-CN:
  en-US: Button

order: 44
---

# zh-CN
自定义时长，也可以在`Message.config()`中全局配置

# en-US



```vue
<template>
    <Button @click="time">Displays a 10 second prompt</Button>
</template>
<script>
    export default {
        methods: {
            time(){
              this.$Message.info({
                  content: `I'll be gone in 10 seconds`,
                  duration: 10
              });
            }
        }
    }
</script>

```
