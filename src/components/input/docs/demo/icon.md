---
title:
  zh-CN: 带Icon的输入框
  en-US: Button Size
desc:
  zh-CN:
  en-US: Button

order: 31
---

# zh-CN
通过 icon 属性可以在输入框右边加一个图标。

点击图标，会触发 on-click 事件。

# en-US



```vue
<template>
    <Input v-model="value4" icon="ios-clock-outline" placeholder="Enter something..." style="width: 200px"></Input>
</template>
<script>
    export default {
        data () {
            return {
                value4: ''
            }
        }
    }
</script>

```
