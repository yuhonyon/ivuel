---
title:
  zh-CN: 基础用法
  en-US: Button Size
desc:
  zh-CN:
  en-US: Button

order: 1
---

# zh-CN
基本用法，可以使用 v-model 实现数据的双向绑定。

可以直接设置 style 来改变输入框的宽度，默认 100%。

# en-US



```vue
<template>
    <Input v-model="value" placeholder="Enter something..." style="width: 300px"></Input>
</template>
<script>
    export default {
        data () {
            return {
                value: ''
            }
        }
    }
</script>

```
