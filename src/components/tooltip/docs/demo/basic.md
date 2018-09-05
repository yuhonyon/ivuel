---
title:
  zh-CN: 基础用法
  en-US: Button Size
desc:
  zh-CN: 最简单的用法。
  en-US: Button

order: 1
---

# zh-CN
注意 Tooltip 内的文本使用了 white-space: nowrap;，即不自动换行，如需展示很多内容并自动换行时，建议给内容 slot 增加样式 white-space: normal;。

# en-US



```vue
<template>
    <Tooltip content="Here is the prompt text">
        A balloon appears when the mouse passes over this text
    </Tooltip>
</template>
<script>
    export default {

    }
</script>

```
