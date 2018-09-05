---
title:
  zh-CN: 提示类型
  en-US: Button Size
desc:
  zh-CN: 不同的提示状态：成功、警告、错误。
  en-US: Button

order: 22
---

# zh-CN


# en-US



```vue
<template>
    <Button @click="success">Display success prompt</Button>
    <Button @click="warning">Display warning prompt</Button>
    <Button @click="error">Display error prompt</Button>
</template>
<script>
    export default {
        methods: {
            success () {
                this.$Message.success('This is a success tip');
            },
            warning () {
                this.$Message.warning('This is a warning tip');
            },
            error () {
                this.$Message.error('This is an error tip');
            }
        }
    }
</script>

```
