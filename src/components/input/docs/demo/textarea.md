---
title:
  zh-CN: 文本域
  en-US: Button Size
desc:
  zh-CN:
  en-US: Button

order: 41
---

# zh-CN
通过设置属性 type 为 textarea 来使用文本域，用于多行输入。

通过设置属性 rows 控制文本域默认显示的行数。

# en-US



```vue
<template>
    <Input v-model="value5" type="textarea" placeholder="Enter something..."></Input>
    <Input v-model="value6" type="textarea" :rows="4" placeholder="Enter something..."></Input>
</template>
<script>
    export default {
        data () {
            return {
                value5: '',
                value6: ''
            }
        }
    }
</script>

```
