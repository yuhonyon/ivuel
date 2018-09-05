---
title:
  zh-CN: 带有输入框
  en-US: Button Size
desc:
  zh-CN:
  en-US: Button

order: 31
---

# zh-CN
通过设置属性 show-input 可以显示数字输入框，配合使用，仅在单滑块模式下有效。

# en-US



```vue
<template>
    <Slider v-model="value8" show-input></Slider>
</template>
<script>
    export default {
        data () {
            return {
                value8: 25
            }
        }
    }
</script>

```
