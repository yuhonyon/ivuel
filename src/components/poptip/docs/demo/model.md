---
title:
  zh-CN: 双向绑定
  en-US: Button Size
desc:
  zh-CN: 通过v-model来控制提示框的显示和隐藏。
  en-US: Button

order: 44
---

# zh-CN


# en-US



```vue
<template>
    <Poptip v-model="visible">
        <a>Click</a>
        <div slot="title"><i>Custom title</i></div>
        <div slot="content">
            <a @click="close">close</a>
        </div>
    </Poptip>
</template>
<script>
    export default {
        data () {
            return {
                visible: false
            }
        },
        methods: {
            close () {
                this.visible = false;
            }
        }
    }
</script>

```
