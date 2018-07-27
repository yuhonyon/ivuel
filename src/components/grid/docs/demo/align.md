---
title:
  zh-CN: Flex对齐 
  en-US: Button Size
desc:
  zh-CN: 通过给 row 添加 gutter 属性，可以给下属的 col 添加间距，推荐使用 (16+8n)px 作为栅格间隔。
  en-US: Button
order: 2
---

# zh-CN
`col`必须放在`row`里面。

# en-US



```vue
<template>
  <Row class-name="demo" :gutter="16">
      <Col span="6">
          <div>col-6</div>
      </Col>
      <Col span="6">
          <div>col-6</div>
      </Col>
      <Col span="6">
          <div>col-6</div>
      </Col>
      <Col span="6">
          <div>col-6</div>
      </Col>
  </Row>
</template>
<script>
    export default {

    }
</script>
```
