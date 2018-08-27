---
title:
  zh-CN: icon&形状
  en-US: icon&shapes
desc:
  zh-CN: 设置按钮形状和图标。
  en-US: Button

order: 2
---

# zh-CN
使用CheckboxGroup配合数组来生成组合。在组合使用时，Checkbox 使用 label 来自动判断选中状态。每个 Checkbox 的内容可以自定义，如不填写则默认使用 label 的值。


```vue
<template>
    <CheckboxGroup v-model="social">
        <Checkbox label="twitter">
            <Icon type="logo-twitter"></Icon>
            <span>Twitter</span>
        </Checkbox>
        <Checkbox label="facebook">
            <Icon type="logo-facebook"></Icon>
            <span>Facebook</span>
        </Checkbox>
        <Checkbox label="github">
            <Icon type="logo-github"></Icon>
            <span>Github</span>
        </Checkbox>
        <Checkbox label="snapchat">
            <Icon type="logo-snapchat"></Icon>
            <span>Snapchat</span>
        </Checkbox>
    </CheckboxGroup>
    <CheckboxGroup v-model="fruit">
        <Checkbox label="香蕉"></Checkbox>
        <Checkbox label="苹果"></Checkbox>
        <Checkbox label="西瓜"></Checkbox>
    </CheckboxGroup>
</template>
<script>
    export default {
        data () {
            return {
                social: ['facebook', 'github'],
                fruit: ['苹果']
            }
        }
    }
</script>
```
