---
title:
  zh-CN: 基础使用
  en-US: Button Size
desc:
  zh-CN: 以「日」为基本单位，基础的日期选择控件
  en-US: Button

order: 1
---

# zh-CN


# en-US



```vue
<template>
    <DatePicker forceUpdate value-format='yyyy-MM-dd' max-date="today" min-date="2018-7-23" type="date"  v-model="date"></DatePicker>
    <TimePicker :value-format="'HH:mm'" :format="'HH:mm'"  v-model="time"></TimePicker>
</template>
<script>
    export default {
      data(){
        return {
          date:null,
          time:null
        }
      }
    }
</script>
```
