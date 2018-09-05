---
title:
  zh-CN: 搜索
  en-US: Button Size
desc:
  zh-CN:
  en-US: Button

order: 91
---

# zh-CN
使用属性 filterable 可直接搜索选项并选择。

暂不支持服务端搜索。

# en-US



```vue
<template>
    <Cascader v-model="value3" :data="data" filterable></Cascader>
</template>
<script>
    export default {
        data () {
            return {
                data: [{
                    value: 'beijing',
                    label: '北京',
                    children: [
                        {
                            value: 'gugong',
                            label: '故宫'
                        },
                        {
                            value: 'tiantan',
                            label: '天坛'
                        },
                        {
                            value: 'wangfujing',
                            label: '王府井'
                        }
                    ]
                }, {
                    value: 'jiangsu',
                    label: '江苏',
                    children: [
                        {
                            value: 'nanjing',
                            label: '南京',
                            children: [
                                {
                                    value: 'fuzimiao',
                                    label: '夫子庙',
                                }
                            ]
                        },
                        {
                            value: 'suzhou',
                            label: '苏州',
                            children: [
                                {
                                    value: 'zhuozhengyuan',
                                    label: '拙政园',
                                },
                                {
                                    value: 'shizilin',
                                    label: '狮子林',
                                }
                            ]
                        }
                    ],
                }],
                value3: []
            }
        }
    }
</script>

```
