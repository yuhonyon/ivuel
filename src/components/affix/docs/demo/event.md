---
title:
  zh-CN: 固定状态改变时的回调
  en-US: Button Size
desc:
  zh-CN: 当固定状态发生改变时，会触发事件。
  en-US: Button

order: 33
---

# zh-CN


# en-US



```vue
<template>
    <Affix :offset-top="100" @on-change="change">
        <Button>Fix the position at the top of 100px at the top</Button>
    </Affix>
</template>
<script>
    export default {
        methods: {
            change (status) {
                this.$Message.info(`Status: ${status}`);
            }
        }
    }
</script>


```
