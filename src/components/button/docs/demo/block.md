---
title:
  zh-CN: 长按钮
  en-US: Button Size
desc:
  zh-CN: 宽度撑满的按钮
  en-US: Button
author: yufangyang
order: 4
---

# zh-CN
通过设置属性 `long` 可将按钮宽度设置为 100%，常用于弹窗内操作按钮。

使用者也可以直接通过给组件添加 `style` 来设置更细节的样式，比如定宽。

# en-US



```vue
<template>
    <Button type="success" long>SUBMIT</Button>
    <br><br>
    <Button type="error" long>DELETE</Button>
</template>
<script>
    export default {

    }
</script>
```
