---
title:
  zh-CN: 适应文本高度的文本域
  en-US: Button Size
desc:
  zh-CN:
  en-US: Button

order: 1
---

# zh-CN
设置属性 autosize，文本域会自动适应高度的变化。

autosize也可以设定为一个对象，指定最小行数和最大行数。

# en-US



```vue
<template>
    <Input v-model="value7" type="textarea" :autosize="true" placeholder="Enter something..."></Input>
    <Input v-model="value8" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="Enter something..."></Input>
</template>
<script>
    export default {
        data () {
            return {
                value7: '',
                value8: ''
            }
        }
    }
</script>

```
