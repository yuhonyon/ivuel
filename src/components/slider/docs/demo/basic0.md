---
title:
  zh-CN: 离散值
  en-US: Button Size
desc:
  zh-CN:
  en-US: Button

order: 11
---

# zh-CN
通过设置属性 step 可以控制每次滑动的间隔。

# en-US



```vue
<template>
    <Slider v-model="value4" :step="10"></Slider>
    <Slider v-model="value5" :step="10" range></Slider>
</template>
<script>
    export default {
        data () {
            return {
                value4: 30,
                value5: [20, 50]
            }
        }
    }
</script>

```
