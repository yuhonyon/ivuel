---
title:
  zh-CN: 禁用
  en-US: Button Size
desc:
  zh-CN: 通过设置disabled属性来禁用单选框。
  en-US: Button

order: 21
---

# zh-CN


# en-US



```vue
<template>
    <Radio v-model="disabledSingle" disabled>Radio</Radio>
    <RadioGroup v-model="disabledGroup">
        <Radio label="金斑蝶" disabled></Radio>
        <Radio label="爪哇犀牛"></Radio>
        <Radio label="印度黑羚"></Radio>
    </RadioGroup>
    <RadioGroup disabled v-model="disabledGroup">
        <Radio label="金斑蝶"></Radio>
        <Radio label="爪哇犀牛"></Radio>
        <Radio label="印度黑羚"></Radio>
    </RadioGroup>
</template>
<script>
    export default {
        data () {
            return {
                disabledSingle: true,
                disabledGroup: '爪哇犀牛'
            }
        }
    }
</script>

```
