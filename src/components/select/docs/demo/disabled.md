---
title:
  zh-CN: 禁用
  en-US: Button Size
desc:
  zh-CN:
  en-US: Button

order: 21
---

# zh-CN
通过给Select设置属性disabled禁用整个选择器。

通过给Option设置属性disabled可以禁用当前项。

# en-US



```vue
<template>
    <Select v-model="model5" disabled style="width:200px">
        <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
    </Select>
    <Select v-model="model6" style="width:200px">
        <Option value="beijing">New York</Option>
        <Option value="shanghai" disabled>London</Option>
        <Option value="shenzhen">Sydney</Option>
    </Select>
</template>
<script>
    export default {
        data () {
            return {
                cityList: [
                    {
                        value: 'New York',
                        label: 'New York'
                    },
                    {
                        value: 'London',
                        label: 'London'
                    },
                    {
                        value: 'Sydney',
                        label: 'Sydney'
                    },
                    {
                        value: 'Ottawa',
                        label: 'Ottawa'
                    },
                    {
                        value: 'Paris',
                        label: 'Paris'
                    },
                    {
                        value: 'Canberra',
                        label: 'Canberra'
                    }
                ],
                model5: '',
                model6: ''
            }
        }
    }
</script>

```
