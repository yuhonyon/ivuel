---
title:
  zh-CN: 自定义显示
  en-US: Button Size
desc:
  zh-CN: 通过设置 slot 可以自定义显示内容，不局限于输入框。
  en-US: Button

order: 31
---

# zh-CN


# en-US



```vue
<template>
    {{ text }}
    <Cascader :data="data" @on-change="handleChange">
        <a href="javascript:void(0)">选择</a>
    </Cascader>
</template>
<script>
    export default {
        data () {
            return {
                text: '未选择',
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
        },
        methods: {
            handleChange (value, selectedData) {
                this.text = selectedData.map(o => o.label).join(', ');
            }
        }
    }
</script>

```
