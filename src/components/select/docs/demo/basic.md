---
title:
  zh-CN: 按钮尺寸
  en-US: Button Size
desc:
  zh-CN: 按钮有六种类型：主按钮、次按钮、虚线按钮、危险按钮。
  en-US: Button

order: 1
---

# zh-CN


# en-US



```vue
<template>
    <Select v-model="model1" style="width:200px" @on-change="handlerChanged" @on-select="handlerSelected">
        <Option value="" >空选项</Option>
        <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
    </Select>
</template>
<script>
    export default {
        data () {
            return {
                cityList: [
                    {
                        value: true,
                        label: 'New York1'
                    },
                    {
                        value: 'London',
                        label: 'London1'
                    },
                    {
                        value: 'Sydney',
                        label: 'Sydney1'
                    },
                    {
                        value: 'Ottawa',
                        label: 'Ottawa1'
                    },
                    {
                        value: 'Paris',
                        label: 'Paris1'
                    },
                    {
                        value: 'Canberra',
                        label: 'Canberra1'
                    }
                ],
                model1: true
            }
        },
        methods: {
          handlerSelected() {
            console.log("select",this.model1)
          },
          handlerChanged() {
            console.log("change",this.model1)
          }
        }
    }
</script>
```
