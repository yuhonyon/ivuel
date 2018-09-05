---
title:
  zh-CN: 自定义已选项
  en-US: Button Size
desc:
  zh-CN:
  en-US: Button

order: 61
---

# zh-CN
对于显示的结果，可以通过 render-format 接收一个函数来自定义。

其中第一个参数 labels 是当前选择的label的集合，第二个参数 selectedData 是当前选择的数据集合，可以利用它们组合出你想要显示的内容。

# en-US



```vue
<template>
    <Cascader :data="data3" :render-format="format"></Cascader>
</template>
<script>
    export default {
        data () {
            return {
                data3: [{
                    value: 'zhejiang',
                    label: '浙江',
                    children: [{
                        value: 'hangzhou',
                        label: '杭州',
                        children: [{
                            value: 'xihu',
                            label: '西湖',
                            code: 310000
                        }]
                    }]
                }, {
                    value: 'jiangsu',
                    label: '江苏',
                    children: [{
                        value: 'nanjing',
                        label: '南京',
                        children: [{
                            value: 'zhonghuamen',
                            label: '中华门',
                            code: 210000
                        }]
                    }]
                }]
            }
        },
        methods: {
            format (labels, selectedData) {
                const index = labels.length - 1;
                const data = selectedData[index] || false;
                if (data && data.code) {
                    return labels[index] + ' - ' + data.code;
                }
                return labels[index];
            }
        }
    }
</script>

```
