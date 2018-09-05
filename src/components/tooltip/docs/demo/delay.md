---
title:
  zh-CN: 延时
  en-US: Button Size
desc:
  zh-CN: 通过设置属性delay可以延时显示文字提示，单位毫秒。
  en-US: Button

order: 7
---

# zh-CN


# en-US

```vue
<template>
    <Tooltip placement="top" content="Tooltip text" :delay="1000">
        <Button @click="disabled = true">Delay 1 second to show</Button>
    </Tooltip>
</template>
<script>
    export default {

    }
</script>
```
