---
title:
  zh-CN: 动态加载选项
  en-US: Button Size
desc:
  zh-CN:
  en-US: Button

order: 81
---

# zh-CN
使用 load-data 属性可以异步加载子选项，需要给数据增加 loading 来标识当前是否在加载中。

load-data 的第二个参数为回调，如果执行，则会自动展开当前项的子列表。

# en-US



```vue
<template>
    <Cascader :data="data4" :load-data="loadData"></Cascader>
</template>
<script>
    export default {
        data () {
            return {
                data4: [
                    {
                        value: 'beijing',
                        label: '北京',
                        children: [],
                        loading: false
                    },
                    {
                        value: 'hangzhou',
                        label: '杭州',
                        children: [],
                        loading:false
                    }
                ]
            }
        },
        methods: {
            loadData (item, callback) {
                item.loading = true;
                setTimeout(() => {
                    if (item.value === 'beijing') {
                        item.children = [
                            {
                                value: 'talkingdata',
                                label: 'TalkingData'
                            },
                            {
                                value: 'baidu',
                                label: '百度'
                            },
                            {
                                value: 'sina',
                                label: '新浪'
                            }
                        ];
                    } else if (item.value === 'hangzhou') {
                        item.children = [
                            {
                                value: 'ali',
                                label: '阿里巴巴'
                            },
                            {
                                value: '163',
                                label: '网易'
                            }
                        ];
                    }
                    item.loading = false;
                    callback();
                }, 1000);
            }
        }
    }
</script>

```
