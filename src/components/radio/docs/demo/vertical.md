---
title:
  zh-CN: 垂直
  en-US: Button Size
desc:
  zh-CN: 设置属性 vertical 可以垂直显示，按钮样式下无效。
  en-US: Button

order: 31
---

# zh-CN


# en-US



```vue
<template>
    <RadioGroup v-model="vertical" vertical>
        <Radio label="apple">
            <Icon type="social-apple"></Icon>
            <span>Apple</span>
        </Radio>
        <Radio label="android">
            <Icon type="social-android"></Icon>
            <span>Android</span>
        </Radio>
        <Radio label="windows">
            <Icon type="social-windows"></Icon>
            <span>Windows</span>
        </Radio>
    </RadioGroup>
</template>
<script>
    export default {
        data () {
            return {
                vertical: 'apple'
            }
        }
    }
</script>

```
