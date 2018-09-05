---
title:
  zh-CN: 对齐方式
  en-US: Button Size
desc:
  zh-CN:
  en-US: Button

order: 21
---

# zh-CN
设置属性 label-position，可以改变表单域标签的位置，left 为左对齐，right 为右对齐，top 会置于表单域顶部。

# en-US



```vue
<template>
    <Form :model="formLeft" label-position="left" :label-width="100">
        <FormItem label="Title">
            <Input v-model="formLeft.input1"></Input>
        </FormItem>
        <FormItem label="Title name">
            <Input v-model="formLeft.input2"></Input>
        </FormItem>
        <FormItem label="Aligned title">
            <Input v-model="formLeft.input3"></Input>
        </FormItem>
    </Form>
    <Form :model="formRight" label-position="right" :label-width="100">
        <FormItem label="Title">
            <Input v-model="formRight.input1"></Input>
        </FormItem>
        <FormItem label="Title name">
            <Input v-model="formRight.input2"></Input>
        </FormItem>
        <FormItem label="Aligned title">
            <Input v-model="formRight.input3"></Input>
        </FormItem>
    </Form>
    <Form :model="formTop" label-position="top">
        <FormItem label="Title">
            <Input v-model="formTop.input1"></Input>
        </FormItem>
        <FormItem label="Title name">
            <Input v-model="formTop.input2"></Input>
        </FormItem>
        <FormItem label="Aligned title">
            <Input v-model="formTop.input3"></Input>
        </FormItem>
    </Form>
</template>
<script>
    export default {
        data () {
            return {
                formLeft: {
                    input1: '',
                    input2: '',
                    input3: ''
                },
                formRight: {
                    input1: '',
                    input2: '',
                    input3: ''
                },
                formTop: {
                    input1: '',
                    input2: '',
                    input3: ''
                }
            }
        }
    }
</script>

```
