---
title:
  zh-CN: 固定时间范围
  en-US: Button Size
desc:
  zh-CN:
  en-US: Button

order: 1
---

# zh-CN
若先选择开始时间，则结束时间内备选项的状态会随之改变

# en-US



```vue
<template>
  <TimeSelect
    placeholder="起始时间"
    v-model="startTime"
    :picker-options="{
      start: '08:30',
      step: '00:15',
      end: '18:30'
    }">
  </TimeSelect>
  <TimeSelect
    placeholder="结束时间"
    v-model="endTime"
    :picker-options="{
      start: '08:30',
      step: '00:15',
      end: '18:30',
      minTime: startTime
    }">
  </TimeSelect>
</template>

<script>
  export default {
    data() {
      return {
        startTime: '',
        endTime: ''
      };
    }
  }
</script>
```
