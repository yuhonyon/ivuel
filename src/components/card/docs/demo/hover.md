---
title:
  zh-CN: 禁用悬停阴影
  en-US: icon&shapes
desc:
  zh-CN: 通过设置属性dis-hover来禁用鼠标悬停显示阴影的效果。
  en-US: Button
author: yufangyang
order: 2
---

# zh-CN

# en-US



```vue
<template>
    <Row>
        <Col span="11">
            <Card>
                <p slot="title">The standard card</p>
                <p>Content of card</p>
                <p>Content of card</p>
                <p>Content of card</p>
            </Card>
        </Col>
        <Col span="11" offset="2">
            <Card dis-hover>
                <p slot="title">Disable card with hover shadows</p>
                <p>Content of card</p>
                <p>Content of card</p>
                <p>Content of card</p>
            </Card>
        </Col>
    </Row>
</template>
<script>
    export default {

    }
</script>

```
