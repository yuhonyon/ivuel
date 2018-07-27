---
title:
  zh-CN: 其它属性的响应式
  en-US: Button Size
desc:
  zh-CN: 水平排列的布局。
  en-US: Button
order: 9
---

# zh-CN
`col`必须放在`row`里面。

# en-US



```vue
<template>
    <div class="demo">
      <Row>
          <Col span="12">col-12</Col>
          <Col span="12">col-12</Col>
      </Row>
      <br>
      <Row>
          <Col span="8">col-8</Col>
          <Col span="8">col-8</Col>
          <Col span="8">col-8</Col>
      </Row>
      <br>
      <Row>
          <Col span="6">col-6</Col>
          <Col span="6">col-6</Col>
          <Col span="6">col-6</Col>
          <Col span="6">col-6</Col>
      </Row>
    </div>
</template>
<script>
    export default {

    }
</script>
```
