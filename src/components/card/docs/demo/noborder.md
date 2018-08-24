---
title:
  zh-CN: 无边框
  en-US: icon&shapes
desc:
  zh-CN: 通过设置属性bordered为 false ，可以不添加边框，建议在灰色背景下使用。
  en-US: Button
author: yufangyang
order: 3
---

# zh-CN

# en-US



```vue
<template>
    <div style="background:#eee;padding: 20px">
        <Card :bordered="false">
            <p slot="title">No border title</p>
            <p>Content of no border type. Content of no border type. Content of no border type. Content of no border type. </p>
        </Card>
    </div>
</template>
<script>
    export default {

    }
</script>

```
