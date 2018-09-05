---
title:
  zh-CN: 加载中
  en-US: Button Size
desc:
  zh-CN: Loading 的状态，并异步在某个时机移除。
  en-US: Button

order: 33
---

# zh-CN


# en-US



```vue
<template>
    <Button @click="loading">Display loading...</Button>
</template>
<script>
    export default {
        methods: {
            loading () {
                const msg = this.$Message.loading({
                    content: 'Loading...',
                    duration: 0
                });
                setTimeout(msg, 3000);
            },
        }
    }
</script>

```
