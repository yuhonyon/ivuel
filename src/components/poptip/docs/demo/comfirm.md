---
title:
  zh-CN: 确认框
  en-US: Button Size
desc:
  zh-CN:
  en-US: Button

order: 66
---

# zh-CN
通过设置属性confirm开启确认框模式。确认框只会以 click 的形式激活，并且只会显示 title 的内容，忽略 content。

# en-US



```vue
<template>
    <Poptip
        confirm
        title="Are you sure you want to delete this item?"
        @on-ok="ok"
        @on-cancel="cancel">
        <Button>Delete</Button>
    </Poptip>
    <Poptip
        confirm
        title="Are you sure delete this task?"
        @on-ok="ok"
        @on-cancel="cancel"
        ok-text="yes"
        cancel-text="no">
        <Button>Internationalization</Button>
    </Poptip>
</template>
<script>
    export default {
        methods: {
            ok () {
                this.$Message.info('You click ok');
            },
            cancel () {
                this.$Message.info('You click cancel');
            }
        }
    }
</script>

```
