---
title:
  zh-CN: 自定义标签页
  en-US: icon&shapes
desc:
  zh-CN: 设置 label 为 Render 函数后，可以自定义标签页的内容。
  en-US: Button

order: 8
---

# zh-CN


# en-US



```vue
<template>
    <Tabs value="name1">
        <TabPane :label="label" name="name1">标签一的内容</TabPane>
        <TabPane label="标签二" name="name2">标签二的内容</TabPane>
        <TabPane label="标签三" name="name3">标签三的内容</TabPane>
    </Tabs>
</template>
<script>
    export default {
        data () {
            return {
                label: (h) => {
                    return h('div', [
                        h('span', '标签一'),
                        h('Badge', {
                            props: {
                                count: 3
                            }
                        })
                    ])
                }
            }
        }
    }
</script>

```
