---
title:
  zh-CN: 基础用法
  en-US: Button Size
desc:
  zh-CN:
  en-US: Button

order: 1
---

# zh-CN
滑块的基本用法，可以使用 v-model 双向绑定数据。

通过设置属性 range 开启双滑块，通过设置属性 disabled 禁用滑块。

注意，单滑块时，value 格式为数字，当开启双滑块时，value 为长度是2的数组，且每项为数字。

# en-US



```vue
<template>
    <Slider v-model="value1"></Slider>
    <Slider v-model="value2" range></Slider>
    <Slider v-model="value3" range disabled></Slider>
</template>
<script>
    export default {
        data () {
            return {
                value1: 25,
                value2: [20, 50],
                value3: [20, 50]
            }
        }
    }
</script>

```
