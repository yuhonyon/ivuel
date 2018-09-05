---
title:
  zh-CN: 禁用
  en-US: Button Size
desc:
  zh-CN:
  en-US: Button

order: 41
---

# zh-CN
设置属性 disabled 可以禁用组件。

给某项数据设置 disabled: true 可以禁用某一项。

# en-US



```vue
<template>
    <Cascader :data="data2" disabled></Cascader>
    <Cascader :data="data2"></Cascader>
</template>
<script>
    export default {
        data () {
            return {
                data2: [{
                    value: 'zhejiang',
                    label: '浙江',
                    children: [{
                        value: 'hangzhou',
                        label: '杭州',
                        children: [{
                            value: 'xihu',
                            label: '西湖'
                        }]
                    }]
                }, {
                    value: 'jiangsu',
                    label: '江苏',
                    disabled: true,
                    children: [{
                        value: 'nanjing',
                        label: '南京',
                        children: [{
                            value: 'zhonghuamen',
                            label: '中华门'
                        }]
                    }]
                }]
            }
        }
    }
</script>

```
