---
title:
  zh-CN: 步骤运行错误
  en-US: Button Size
desc:
  zh-CN:
  en-US: Button

order: 51
---

# zh-CN
设置Steps的属性status为error指定当前步骤状态。

# en-US



```vue
<template>
    <Steps :current="1" status="error">
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
