---
title:
  zh-CN: 组合使用
  en-US: 使用RadioGroup实现一组互斥的选项组
desc:
  zh-CN: 设置按钮形状和图标。
  en-US: Button

order: 2
---

# zh-CN
在组合使用时，Radio 使用 label 来自动判断。每个 Radio 的内容可以自定义，如不填写则默认使用 label 的值。


```vue
<template>
    <RadioGroup v-model="phone">
        <Radio label="apple">
            <Icon type="logo-apple"></Icon>
            <span>Apple</span>
        </Radio>
        <Radio label="android">
            <Icon type="logo-android"></Icon>
            <span>Android</span>
        </Radio>
        <Radio label="windows">
            <Icon type="logo-windows"></Icon>
            <span>Windows</span>
        </Radio>
    </RadioGroup>
    <RadioGroup v-model="animal">
        <Radio label="金斑蝶"></Radio>
        <Radio label="爪哇犀牛"></Radio>
        <Radio label="印度黑羚"></Radio>
    </RadioGroup>
</template>
<script>
    export default {
        data () {
            return {
                phone: 'apple',
                animal: '爪哇犀牛'
            }
        }
    }
</script>
```
