---
title:
  zh-CN: 格式化数据
  en-US: Button Size
desc:
  zh-CN:
  en-US: Button

order: 21
---

# zh-CN
通过 formatter 格式化数字，以展示具有具体含义的数据，往往需要配合 parser 一起使用。

# en-US



```vue
<template>
    <div>
        <InputNumber
            :max="10000"
            v-model="value9"
            :formatter="value => `$ ${value}`.replace(/B(?=(d{3})+(?!d))/g, ',')"
            :parser="value => value.replace(/$s?|(,*)/g, '')"></InputNumber>
        <InputNumber
            :max="100"
            v-model="value10"
            :formatter="value => `${value}%`"
            :parser="value => value.replace('%', '')"></InputNumber>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                value9: 1000,
                value10: 100
            }
        }
    }
</script>

```
