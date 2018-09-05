---
title:
  zh-CN: 默认展开、选中、勾选和禁用
  en-US: icon&shapes
desc:
  zh-CN: 给节点设置 expand、selected、checked 和 disabled 可以将节点设置为展开、选中、勾选和禁用。
  en-US: Button

order: 4
---

# zh-CN
设置属性 multiple 可进行多选。


# en-US


```vue
<template>
    <Tree :data="data4" show-checkbox multiple></Tree>
</template>
<script>
    export default {
        data () {
            return {
                data4: [
                    {
                        title: 'parent 1',
                        expand: true,
                        selected: true,
                        children: [
                            {
                                title: 'parent 1-1',
                                expand: true,
                                children: [
                                    {
                                        title: 'leaf 1-1-1',
                                        disabled: true
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
                                        title: 'leaf 1-2-1',
                                        checked: true
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
