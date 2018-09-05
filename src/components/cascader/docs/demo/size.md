---
title:
  zh-CN: 尺寸
  en-US: Button Size
desc:
  zh-CN:
  en-US: Button

order: 71
---

# zh-CN
通过设置size属性为large和small将输入框设置为大和小尺寸，不设置为默认（中）尺寸。

# en-US



```vue
<template>
    <Cascader :data="data" size="large"></Cascader>
    <br>
    <Cascader :data="data"></Cascader>
    <br>
    <Cascader :data="data" size="small"></Cascader>
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
                }]
            }
        }
    }
</script>

```
