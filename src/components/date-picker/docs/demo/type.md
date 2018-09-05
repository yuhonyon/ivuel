---
title:
  zh-CN: 其他日期单位
  en-US: Button Size
desc:
  zh-CN: 通过扩展基础的日期选择，可以选择周、月、年或多个日期
  en-US: Button

order: 11
---

# zh-CN


# en-US



```vue

<template>

  <span>多个日期</span>
  <DatePicker
    type="dates"
    v-model="value14"
    placeholder="选择一个或多个日期">
  </DatePicker>
  <span>周</span>
  <DatePicker
    v-model="value3"
    type="week"
    format="yyyy 第 WW 周"
    placeholder="选择周">
  </DatePicker>

  <span>月</span>
  <DatePicker
    v-model="value4"
    type="month"
    placeholder="选择月">
  </DatePicker>

  <span>年</span>
  <DatePicker
    v-model="value5"
    type="year"
    placeholder="选择年">
  </DatePicker>

</template>


<script>
  export default {
    data() {
      return {
        value3: '',
        value4: '',
        value5: '',
        value14: []
      };
    }
  };
</script>
```
