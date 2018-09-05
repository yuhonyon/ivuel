---
title:
  zh-CN: 自定义提示
  en-US: Button Size
desc:
  zh-CN:
  en-US: Button

order: 41
---

# zh-CN
Slider 会把当前值传给 tip-format，并在 Tooltip 中显示 tip-format 的返回值，若为 null，则隐藏 Tooltip。

# en-US



```vue
<template>
    <Slider v-model="value9" :tip-format="format"></Slider>
    <Slider v-model="value10" :tip-format="hideFormat"></Slider>
</template>
<script>
    export default {
        data () {
            return {
                value9: 25,
                value10: 25
            }
        },
        methods: {
            format (val) {
                return 'Progress: ' + val + '%';
            },
            hideFormat () {
                return null;
            }
        }
    }
</script>

```
