---
title:
  zh-CN: 自定义 Render 函数
  en-US: Button Size
desc:
  zh-CN: 使用 Render 函数自定义内容。
  en-US: Button

order: 66
---

# zh-CN


# en-US



```vue
<template>
<Button @click="renderFunc">show message</Button>
</template>
<script>
    export default {
        methods: {
            renderFunc () {
                this.$Message.info({
                    render: h => {
                        return h('span', [
                            'This is created by ',
                            h('a', 'render'),
                            ' function'
                        ])
                    }
                });
            }
        }
    }
</script>

```
