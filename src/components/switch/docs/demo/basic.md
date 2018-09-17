---
title:
  zh-CN: 基本使用
  en-US: Button Size
desc:
  zh-CN:
  en-US: Button

order: 1
---

# zh-CN
基本用法，状态切换时会触发事件。

# en-US



```vue
<template>
    <i-switch v-model="switch1" @on-change="change"></i-switch>
</template>
<script>
    export default {
        data () {
            return {
                switch1: false
            }
        },
        methods: {
            change (status) {
                this.$Message.info('开关状态：' + status);
            }
        }
    }
</script>

```
