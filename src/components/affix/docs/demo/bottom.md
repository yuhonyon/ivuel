---
title:
  zh-CN: 固定在底部
  en-US: Button Size
desc:
  zh-CN: 在屏幕下方固定
  en-US: Button

order: 22
---

# zh-CN
注意，`offset-top`和`offset-bottom`只可以设置一个，如果都设置，会使用`offset-top`。

# en-US



```vue
<template>
    <Affix :offset-bottom="20">
        <Button>Fix at the bottom 20px</Button>
    </Affix>
</template>
<script>
    export default {

    }
</script>


```
