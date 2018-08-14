---
title:
  zh-CN: 单独使用
  en-US: Button Size
desc:
  zh-CN: 使用 v-model 可以双向绑定数据。
  en-US: Button
author: yufangyang
order: 1
---

# zh-CN


# en-US



```vue
<template>
    <Radio v-model="single">Radio</Radio>
</template>
<script>
    export default {
        data () {
            return {
                single: false
            }
        }
    }
</script>
```
