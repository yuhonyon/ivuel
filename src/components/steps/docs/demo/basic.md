---
title:
  zh-CN: 基础用法
  en-US: Button Size
desc:
  zh-CN:
  en-US: Button

order: 1
---

# zh-CN

基本用法，组件会根据current自动判断各步骤状态。
# en-US



```vue
<template>
    <Steps :current="1">
        <Step title="已完成" content="这里是该步骤的描述信息"></Step>
        <Step title="进行中" content="这里是该步骤的描述信息"></Step>
        <Step title="待进行" content="这里是该步骤的描述信息"></Step>
        <Step title="待进行" content="这里是该步骤的描述信息"></Step>
    </Steps>
</template>
<script>
    export default {

    }
</script>

```
