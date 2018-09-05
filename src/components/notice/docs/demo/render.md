---
title:
  zh-CN: Render 函数
  en-US: Button Size
desc:
  zh-CN: 你可以自定义 Render 函数来替代 desc
  en-US: Button

order: 31
---

# zh-CN


# en-US



```vue
<template>
    <Button type="primary" @click="renderFunc">Open notice</Button>
</template>
<script>
    export default {
        methods: {
            renderFunc () {
                this.$Notice.success({
                    title: 'Notification title',
                    desc: 'The desc will hide when you set render.',
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
