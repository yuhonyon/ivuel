---
title:
  zh-CN: 显示提示
  en-US: Button Size
desc:
  zh-CN:
  en-US: Button

order: 21
---

# zh-CN
设置属性 show-text 可以显示提示文字。

提示内容也可以通过 slot 自定义。

# en-US



```vue
<template>
    <Row>
        <Col span="12">
            <Rate show-text v-model="valueText"></Rate>
        </Col>
        <Col span="12">
            <Rate show-text allow-half v-model="valueCustomText">
                <span style="color: #f5a623">{{ valueCustomText }}</span>
            </Rate>
        </Col>
    </Row>
</template>
<script>
    export default {
        data () {
            return {
                valueText: 3,
                valueCustomText: 3.8
            }
        }
    }
</script>


```
