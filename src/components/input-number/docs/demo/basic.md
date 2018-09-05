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
可以通过输入、鼠标点击或键盘的上下键来改变数值大小。

# en-US



```vue
<template>
    <InputNumber :max="10" :min="1" v-model="value1"></InputNumber>
</template>
<script>
    export default {
        data () {
            return {
                value1: 1
            }
        }
    }
</script>

```
