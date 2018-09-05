---
title:
  zh-CN: 简洁
  en-US: Button Size
desc:
  zh-CN:
  en-US: Button

order: 51
---

# zh-CN
设置simple属性即可使用简洁版的分页，通过输入页码回车切换，或使用鼠标点击切换页码，或使用键盘的上下键来切换。简洁分页不能使用总数、电梯和切换数量。

# en-US



```vue
<template>
    <Page :current="2" :total="50" simple></Page>
</template>
<script>
    export default {

    }
</script>

```
