---
title:
  zh-CN: 自定义位置 #
  en-US: Button Size
desc:
  zh-CN:
  en-US: Button
order: 33
---

# zh-CN



# en-US



```vue
<template>
    <Button @click="modal9 = true">20px from the top</Button>
    <Modal
        title="Title"
        :vertical="20"
        v-model="modal9">
        <p>Content of dialog</p>
        <p>Content of dialog</p>
        <p>Content of dialog</p>
    </Modal>
    <Button @click="modal10 = true">Vertical center</Button>
    <Modal
        title="Title"
        v-model="modal10"
        vertical="center">
        <p>Content of dialog</p>
        <p>Content of dialog</p>
        <p>Content of dialog</p>
    </Modal>
</template>
<script>
    export default {
        data () {
            return {
                modal9: false,
                modal10: false,
            }
        }
    }
</script>

```
