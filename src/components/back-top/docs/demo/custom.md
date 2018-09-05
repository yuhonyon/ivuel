---
title:
  zh-CN: 自定义样式
  en-US: icon&shapes
desc:
  zh-CN: 自定义了位置在页面底部 200px,滚动至距顶端 200px 时显示。
  en-US: Button

order: 2
---

# zh-CN



```vue
<style scoped>
    .top{
        padding: 10px;
        background: rgba(0, 153, 229, .7);
        color: #fff;
        text-align: center;
        border-radius: 2px;
    }
</style>
<template>
    <BackTop :height="100" :bottom="200">
        <div class="top">返回顶端</div>
    </BackTop>
</template>
<script>
    export default {

    }
</script>

```
