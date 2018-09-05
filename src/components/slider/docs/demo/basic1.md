---
title:
  zh-CN: 显示间断点
  en-US: Button Size
desc:
  zh-CN:
  en-US: Button

order: 21
---

# zh-CN
通过设置属性 show-stops 可以显示间断点，建议在 step 间隔不密集时使用。

# en-US



```vue
<template>
    <Slider v-model="value6" :step="10" show-stops></Slider>
    <Slider v-model="value7" :step="10" show-stops range></Slider>
</template>
<script>
    export default {
        data () {
            return {
                value6: 30,
                value7: [20, 50]
            }
        }
    }
</script>

```
