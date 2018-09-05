---
title:
  zh-CN: 居中固定
  en-US: Button Size
desc:
  zh-CN: 
  en-US: Button

order: 21
---

# zh-CN
在容器内部垂直居中固定，需要父级有relative或absolute。

# en-US



```vue
<style>
    .demo-spin-container{
    	display: inline-block;
        width: 200px;
        height: 100px;
        position: relative;
        border: 1px solid #eee;
    }
</style>
<template>
    <div class="demo-spin-container">
        <Spin fix></Spin>
    </div>
</template>
<script>
    export default {

    }
</script>

```
