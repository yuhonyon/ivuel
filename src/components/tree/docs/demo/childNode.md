---
title:
  zh-CN: 异步加载子节点
  en-US: icon&shapes
desc:
  zh-CN: 使用 load-data 属性可以异步加载子节点，需要给数据增加 loading 来标识当前是否在加载中。
  en-US: Button

order: 4
---

# zh-CN
load-data 第一个参数为当前节点信息；执行 load-data 的第二个参数，将需要添加的数据传入。

如果某节点不包含 loading 和 children 字段，则不会应用异步加载效果。

# en-US


```vue
<template>
    <Tree :data="data3" :load-data="loadData" show-checkbox></Tree>
</template>
<script>
    export default {
        data () {
            return {
                data3: [
                    {
                        title: 'parent',
                        loading: false,
                        children: []
                    }
                ]
            }
        },
        methods: {
            loadData (item, callback) {
                setTimeout(() => {
                    const data = [
                        {
                            title: 'children',
                            loading: false,
                            children: []
                        },
                        {
                            title: 'children',
                            loading: false,
                            children: []
                        }
                    ];
                    callback(data);
                }, 1000);
            }
        }
    }
</script>
```
