---
title:
  zh-CN: 自定义时长
  en-US: Button Size
desc:
  zh-CN:
  en-US: Button

order: 21
---

# zh-CN
自定义时长，为 0 则不自动关闭。也可以在Notice.config()中全局配置，详见API。

# en-US



```vue
<template>
    <Button type="primary" @click="time">Open notice</Button>
</template>
<script>
    export default {
        methods: {
            time () {
                this.$Notice.open({
                    title: 'Notification title',
                    desc: 'This notification does not automatically close, and you need to click the close button to close.',
                    duration: 0
                });
            }
        }
    }
</script>

```
