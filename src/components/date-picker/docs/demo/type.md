---
title:
  zh-CN: 按钮尺寸
  en-US: Button Size
desc:
  zh-CN: 按钮有六种类型：主按钮、次按钮、虚线按钮、危险按钮。
  en-US: Button
author: yufangyang
order: 1
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
