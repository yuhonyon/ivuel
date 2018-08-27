---
title:
  zh-CN: 按钮尺寸
  en-US: Button Size
desc:
  zh-CN: 按钮有三种尺寸：大、默认（中）、小
  en-US: Button

order: 3
---

# zh-CN
通过设置`size`为`large`和`small`将按钮设置为大和小尺寸，不设置为默认（中）尺寸。

# en-US



```vue
<template>
    <Button type="primary" size="large">Large</Button>
    <Button type="primary">Default</Button>
    <Button type="primary" size="small">Small</Button>
    <br><br>
    <Button type="primary" shape="circle" size="large">Large</Button>
    <Button type="primary" shape="circle">Default</Button>
    <Button type="primary" shape="circle" size="small">Small</Button>
</template>
<script>
    export default {

    }
</script>
```
