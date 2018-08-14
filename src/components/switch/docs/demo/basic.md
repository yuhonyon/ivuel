---
title:
  zh-CN: 基本使用
  en-US: Button Size
desc:
  zh-CN: 按钮有六种类型：主按钮、次按钮、虚线按钮、危险按钮。
  en-US: Button
author: yufangyang
order: 1
---

# zh-CN


# en-US



```vue
<template>
    <Switch v-model="switch1" @on-change="change" />
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
