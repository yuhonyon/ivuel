---
title:
  zh-CN: 过滤方法
  en-US: Button Size
desc:
  zh-CN:
  en-US: Button

order: 22
---

# zh-CN
不区分大小写的 AutoComplete，及过滤的用法。

# en-US



```vue
<template>
    <AutoComplete
        v-model="value3"
        :data="data3"
        :filter-method="filterMethod"
        placeholder="input here"
        style="width:200px">
    </AutoComplete>
</template>
<script>
    export default {
        data () {
            return {
                value3: '',
                data3: ['Steve Jobs', 'Stephen Gary Wozniak', 'Jonathan Paul Ive']
            }
        },
        methods: {
            filterMethod (value, option) {
                return option.toUpperCase().indexOf(value.toUpperCase()) !== -1;
            }
        }
    }
</script>


```
