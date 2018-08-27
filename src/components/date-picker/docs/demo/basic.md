---
title:
  zh-CN: 按钮尺寸
  en-US: Button Size
desc:
  zh-CN: 按钮有六种类型：主按钮、次按钮、虚线按钮、危险按钮。
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
