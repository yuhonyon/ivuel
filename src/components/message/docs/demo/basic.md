---
title:
  zh-CN: 基本使用
  en-US: Button Size
desc:
  zh-CN: 最基本的提示，默认在1.5秒后消失。
  en-US: Button

order: 1
---

# zh-CN


# en-US



```vue
<template>
    <Button type="primary" @click="info">Display info prompt</Button>
</template>
<script>
    export default {
        methods: {
            info () {
                this.$Message.info('This is a info tip');
            }
        }
    }
</script>

```
