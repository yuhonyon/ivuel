---
title:
  zh-CN: 带图标
  en-US: Button Size
desc:
  zh-CN:
  en-US: Button

order: 21
---

# zh-CN
通过设置Step的icon属性可以自定义图标

# en-US



```vue
<template>
    <Steps :current="1">
        <Step title="注册" icon="person-add"></Step>
        <Step title="上传头像" icon="camera"></Step>
        <Step title="验证邮箱" icon="email"></Step>
    </Steps>
</template>
<script>
    export default {

    }
</script>

```
