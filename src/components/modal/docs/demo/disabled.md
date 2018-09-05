---
title:
  zh-CN: 禁用关闭
  en-US: Button Size
desc:
  zh-CN: 可以禁用关闭和遮罩层关闭。
  en-US: Button
order: 22
---

# zh-CN



# en-US



```vue
<template>
    <Button @click="modal7 = true">Disable upper right corner (including Esc key)</Button>
    <Modal
        title="Title"
        v-model="modal7"
        :closable="false">
        <p>Content of dialog</p>
        <p>Content of dialog</p>
        <p>Content of dialog</p>
    </Modal>
    <Button @click="modal8 = true">Disable mask layer closure</Button>
    <Modal
        title="Title"
        v-model="modal8"
        :mask-closable="false">
        <p>Content of dialog</p>
        <p>Content of dialog</p>
        <p>Content of dialog</p>
    </Modal>
</template>
<script>
    export default {
        data () {
            return {
                modal7: false,
                modal8: false,
            }
        }
    }
</script>



```
