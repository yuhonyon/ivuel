---
title:
  zh-CN: 自定义选项
  en-US: Button Size
desc:
  zh-CN: 除了使用 data，还可以直接传入 Option 组件作为 slot 使用，这样可以自定义显示效果。
  en-US: Button

order: 11
---

# zh-CN


# en-US



```vue
<template>
    <AutoComplete
        v-model="value2"
        @on-search="handleSearch2"
        placeholder="input here"
        style="width:200px">
        <Option v-for="item in data2" :value="item" :key="item">{{ item }}</Option>
    </AutoComplete>
</template>
<script>
    export default {
        data () {
            return {
                value2: '',
                data2: []
            }
        },
        methods: {
            handleSearch2 (value) {
                this.data2 = !value || value.indexOf('@') >= 0 ? [] : [
                    value + '@qq.com',
                    value + '@sina.com',
                    value + '@163.com'
                ];
            }
        }
    }
</script>


```
