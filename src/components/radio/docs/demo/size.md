---
title:
  zh-CN: 尺寸
  en-US: Button Size
desc:
  zh-CN:
  en-US: Button

order: 1
---

# zh-CN
通过设置属性size为large或small将按钮样式设置为大和小尺寸，不设置为默认(中)尺寸

# en-US



```vue
<template>
    <RadioGroup v-model="button4" type="button" size="large">
        <Radio label="北京"></Radio>
        <Radio label="上海"></Radio>
        <Radio label="深圳"></Radio>
        <Radio label="杭州"></Radio>
    </RadioGroup>
    <RadioGroup v-model="button5" type="button">
        <Radio label="北京"></Radio>
        <Radio label="上海"></Radio>
        <Radio label="深圳"></Radio>
        <Radio label="杭州"></Radio>
    </RadioGroup>
    <RadioGroup v-model="button6" type="button" size="small">
        <Radio label="北京"></Radio>
        <Radio label="上海"></Radio>
        <Radio label="深圳"></Radio>
        <Radio label="杭州"></Radio>
    </RadioGroup>
</template>
<script>
    export default {
        data () {
            return {
                button4: '北京',
                button5: '北京',
                button6: '北京'
            }
        }
    }
</script>

```
