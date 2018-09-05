---
title:
  zh-CN: 自定义内容
  en-US: Button Size
desc:
  zh-CN: 通过自定义 slot 显示多行文本或更复杂的样式。
  en-US: Button

order: 5
---

# zh-CN


# en-US

```vue
<template>
    <Tooltip placement="top">
        <Button>Multiple lines</Button>
        <div slot="content">
            <p>Display multiple lines of information</p>
            <p><i>Can customize the style</i></p>
        </div>
    </Tooltip>
</template>
<script>
    export default {

    }
</script>
```
