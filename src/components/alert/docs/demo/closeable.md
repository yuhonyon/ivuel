---
title:
  zh-CN: 可关闭
  en-US: Button Size
desc:
  zh-CN: 显示关闭按钮，点击可关闭提示，也可以自定义关闭 slot 。
  en-US: Button

order: 31
---

# zh-CN


# en-US



```vue
<template>
    <Alert closable>An info prompt</Alert>
    <Alert type="success" show-icon closable>
        A success prompt
        <span slot="desc">Content of prompt. Content of prompt. Content of prompt. Content of prompt. </span>
    </Alert>
    <Alert type="warning" closable>
        Custom closing content
        <span slot="close">No longer prompt</span>
    </Alert>
</template>
<script>
    export default {

    }
</script>


```
