---
title:
  zh-CN: 任意时间范围
  en-US: Button Size
desc:
  zh-CN: 可选择任意的时间范围
  en-US: Button

order: 1
---

# zh-CN

添加is-range属性即可选择时间范围，同样支持arrow-control属性。

# en-US



```vue
<template>
  <TimePicker
    is-range
    v-model="value4"
    range-separator="至"
    start-placeholder="开始时间"
    end-placeholder="结束时间"
    placeholder="选择时间范围">
  </TimePicker>
  <TimePicker
    is-range
    arrow-control
    v-model="value5"
    range-separator="至"
    start-placeholder="开始时间"
    end-placeholder="结束时间"
    placeholder="选择时间范围">
  </TimePicker>
</template>

<script>
  export default {
    data() {
      return {
        value4: [new Date(2016, 9, 10, 8, 40), new Date(2016, 9, 10, 9, 40)],
        value5: [new Date(2016, 9, 10, 8, 40), new Date(2016, 9, 10, 9, 40)]
      };
    }
  }
</script>
```
