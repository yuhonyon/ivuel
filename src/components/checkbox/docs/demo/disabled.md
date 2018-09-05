---
title:
  zh-CN: 禁用
  en-US: Button Size
desc:
  zh-CN: 通过设置disabled属性来禁用多选框。
  en-US: Button

order: 22
---

# zh-CN


# en-US



```vue
<template>
    <Checkbox v-model="disabledSingle" disabled>Checkbox</Checkbox>
    <CheckboxGroup v-model="disabledGroup">
        <Checkbox label="香蕉" disabled></Checkbox>
        <Checkbox label="苹果" disabled></Checkbox>
        <Checkbox label="西瓜"></Checkbox>
    </CheckboxGroup>
    <CheckboxGroup v-model="disabledGroup" disabled>
        <Checkbox label="香蕉"></Checkbox>
        <Checkbox label="苹果"></Checkbox>
        <Checkbox label="西瓜"></Checkbox>
    </CheckboxGroup>
</template>
<script>
    export default {
        data () {
            return {
                disabledSingle: true,
                disabledGroup: ['苹果']
            }
        }
    }
</script>



```
