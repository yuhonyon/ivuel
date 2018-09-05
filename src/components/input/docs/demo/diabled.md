---
title:
  zh-CN: 禁用状态
  en-US: Button Size
desc:
  zh-CN:
  en-US: Button

order: 61
---

# zh-CN
通过添加disabled属性可设置为不可用状态。

# en-US



```vue
<template>
    <Input v-model="value9" disabled placeholder="Enter something..."></Input>
    <Input v-model="value10" disabled type="textarea" placeholder="Enter something..."></Input>
</template>
<script>
    export default {
        data () {
            return {
                value9: '',
                value10: ''
            }
        }
    }
</script>

```
