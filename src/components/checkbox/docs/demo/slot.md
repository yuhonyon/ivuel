---
title:
  zh-CN: 与其它组件通信
  en-US: Button Size
desc:
  zh-CN: 与其它组件进行数据联动。
  en-US: Button

order: 33
---

# zh-CN


# en-US



```vue
<template>
    <Checkbox v-model="checked" :disabled="disabled">
        <span v-if="checked">Checked</span>
        <span v-else>Unchecked</span>
         -
        <span v-if="!disabled">Usable</span>
        <span v-else>Disabled</span>
    </Checkbox>
    <br>
    <Button type="primary" @click="checked = !checked">
        <span v-if="!checked">Checked</span>
        <span v-else>Unchecked</span>
    </Button>
    <Button type="primary" @click="disabled = !disabled">
        <span v-if="disabled">Usable</span>
        <span v-else>Disabled</span>
    </Button>
</template>
<script>
    export default {
        data () {
            return {
                checked: true,
                disabled: false
            }
        }
    }
</script>


```
