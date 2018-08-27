---
title:
  zh-CN: 基础使用
  en-US: Button Size
desc:
  zh-CN:
  en-US: Button
order: 1
---

# zh-CN

可以使用 v-model 实现双向绑定。

默认按键盘ESC键也可以关闭。

# en-US



```vue
<template>
    <Button type="primary" @click="modal1 = true">Display dialog box</Button>
    <Modal
        v-model="modal1"
        title="Common Modal dialog box title"
        @on-ok="ok"
        @on-cancel="cancel">
        <p>Content of dialog</p>
        <p>Content of dialog</p>
        <p>Content of dialog</p>
    </Modal>
</template>
<script>
    export default {
        data () {
            return {
                modal1: false
            }
        },
        methods: {
            ok () {
                this.$Message.info('Clicked ok');
            },
            cancel () {
                this.$Message.info('Clicked cancel');
            }
        }
    }
</script>

```
