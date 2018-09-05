---
title:
  zh-CN: 基本用法
  en-US: Button Size
desc:
  zh-CN: 简单的展示，添加属性closable可以关闭标签。
  en-US: Button

order: 1
---

# zh-CN
点击关闭标签时，会触发 on-close 事件，需自己实现关闭逻辑。

# en-US



```vue
<template>
    <Tag>标签一</Tag>
    <Tag>标签二</Tag>
    <Tag v-if="show" closable @on-close="handleClose">标签三</Tag>
</template>
<script>
    export default {
        data () {
            return {
                show: true
            }
        },
        methods: {
            handleClose () {
                this.show = false;
            }
        }
    }
</script>
```
