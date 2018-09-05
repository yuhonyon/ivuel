---
title:
  zh-CN: 按钮样式
  en-US: Button Size
desc:
  zh-CN: 组合使用时可以设置属性type为 button 来应用按钮的样式。
  en-US: Button

order: 41
---

# zh-CN


# en-US



```vue
<template>
    <RadioGroup v-model="button1" type="button">
        <Radio label="北京"></Radio>
        <Radio label="上海"></Radio>
        <Radio label="深圳"></Radio>
        <Radio label="杭州"></Radio>
    </RadioGroup>
    <RadioGroup v-model="button2" type="button">
        <Radio label="北京"></Radio>
        <Radio label="上海" disabled></Radio>
        <Radio label="深圳"></Radio>
        <Radio label="杭州"></Radio>
    </RadioGroup>
    <RadioGroup v-model="button3" type="button">
        <Radio label="北京" disabled></Radio>
        <Radio label="上海" disabled></Radio>
        <Radio label="深圳" disabled></Radio>
        <Radio label="杭州" disabled></Radio>
    </RadioGroup>
</template>
<script>
    export default {
        data () {
            return {
                button1: '北京',
                button2: '北京',
                button3: '北京'
            }
        }
    }
</script>

```
