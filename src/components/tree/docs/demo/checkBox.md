---
title:
  zh-CN: 可勾选
  en-US: icon&shapes
desc:
  zh-CN: 设置属性 show-checkbox 可以对节点进行勾选。
  en-US: Button

order: 2
---

# zh-CN

# en-US


```vue
<template>
    <Tree :data="data2" show-checkbox></Tree>
</template>
<script>
    export default {
        data () {
            return {
                data2: [
                    {
                        title: 'parent 1',
                        expand: true,
                        children: [
                            {
                                title: 'parent 1-1',
                                expand: true,
                                children: [
                                    {
                                        title: 'leaf 1-1-1'
                                    },
                                    {
                                        title: 'leaf 1-1-2'
                                    }
                                ]
                            },
                            {
                                title: 'parent 1-2',
                                expand: true,
                                children: [
                                    {
                                        title: 'leaf 1-2-1'
                                    },
                                    {
                                        title: 'leaf 1-2-1'
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        }
    }
</script>
```
