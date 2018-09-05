---
title:
  zh-CN: 基础用法
  en-US: Button Size
desc:
  zh-CN: 基本用法，通过 data 设置自动完成的数据源。
  en-US: Button

order: 1
---

# zh-CN


# en-US



```vue
<template>
    <AutoComplete
        v-model="value1"
        :data="data1"
        @on-search="handleSearch1"
        placeholder="input here"
        style="width:200px"></AutoComplete>
</template>
<script>
    export default {
        data () {
            return {
                value1: '',
                data1: []
            }
        },
        methods: {
            handleSearch1 (value) {
                this.data1 = !value ? [] : [
                    value,
                    value + value,
                    value + value + value
                ];
            }
        }
    }
</script>

```
