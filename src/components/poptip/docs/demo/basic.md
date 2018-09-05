---
title:
  zh-CN: 基础用法
  en-US: Button Size
desc:
  zh-CN: 支持三种触发方式：鼠标悬停、点击、聚焦。默认是点击。
  en-US: Button

order: 1
---

# zh-CN
注意 Poptip 内的文本使用了 white-space: nowrap;，即不自动换行，如需展示很多内容并自动换行时，建议给内容 slot 增加样式 white-space: normal;。

# en-US



```vue
<template>
    <Poptip trigger="hover" title="Title" content="content">
        <Button>Hover</Button>
    </Poptip>
    <Poptip title="Title" content="content">
        <Button>Click</Button>
    </Poptip>
    <Poptip trigger="focus" title="Title" content="content">
        <Button>Focus</Button>
    </Poptip>
    <Poptip trigger="focus" title="Title" content="content">
        <Input placeholder="Input focus" />
    </Poptip>
</template>
<script>
    export default {

    }
</script>

```
