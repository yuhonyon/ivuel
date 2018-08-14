---
title:
  zh-CN: 尺寸
  en-US: icon&shapes
desc:
  zh-CN: 输入框有三种尺寸：大、默认（中）、小
  en-US: Button
author: yufangyang
order: 2
---

# zh-CN
通过设置size为large和small设置为大和小尺寸，不设置为默认（中）尺寸。


```vue
<template>
    <Input v-model="value1" size="large" placeholder="large size" />
    <br>
    <Input v-model="value2" placeholder="default size" />
    <br>
    <Input v-model="value3" size="small" placeholder="small size" />
</template>
<script>
    export default {
        data () {
            return {
                value1: '',
                value2: '',
                value3: ''
            }
        }
    }
</script>
```
