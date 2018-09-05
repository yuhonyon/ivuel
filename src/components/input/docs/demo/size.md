---
title:
  zh-CN: 尺寸
  en-US: Button Size
desc:
  zh-CN:
  en-US: Button

order: 11
---

# zh-CN
输入框有三种尺寸：大、默认（中）、小

通过设置size为large和small设置为大和小尺寸，不设置为默认（中）尺寸。

# en-US



```vue
<template>
    <Input v-model="value1" size="large" placeholder="large size"></Input>
    <br>
    <Input v-model="value2" placeholder="default size"></Input>
    <br>
    <Input v-model="value3" size="small" placeholder="small size"></Input>
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
