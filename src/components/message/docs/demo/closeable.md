---
title:
  zh-CN: 可关闭
  en-US: Button Size
desc:
  zh-CN:
  en-US: Button

order: 55
---

# zh-CN
将参数设置为一个对象，并指定 `closable` 为 `true` 后可以手动关闭提示，完整参数详见API。

# en-US



```vue
<template>
    <Button @click="closable">Display a closable message</Button>
</template>
<script>
    export default {
        methods: {
            closable () {
                this.$Message.info({
                    content: 'Tips for manual closing',
                    duration: 10,
                    closable: true
                });
            }
        }
    }
</script>


```
