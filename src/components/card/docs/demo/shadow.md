---
title:
  zh-CN: 卡片阴影
  en-US: icon&shapes
desc:
  zh-CN: .
  en-US: Button

order: 5
---

# zh-CN
通过设置属性`shadow`来显示卡片阴影，使用该属性后，`bordered`和`dis-hover`将无效，建议在灰色背景下使用。
# en-US



```vue
<template>
    <Row style="background:#eee;padding:20px">
        <Col span="11">
            <Card :bordered="false">
                <p slot="title">Borderless card</p>
                <p>Content of card</p>
                <p>Content of card</p>
                <p>Content of card</p>
            </Card>
        </Col>
        <Col span="11" offset="2">
            <Card shadow>
                <p slot="title">Use a card with a shadow effect</p>
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
