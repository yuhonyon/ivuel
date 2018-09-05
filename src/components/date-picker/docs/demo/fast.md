---
title:
  zh-CN: 快捷选择
  en-US: Button Size
desc:
  zh-CN:
  en-US: Button

order: 22
---

# zh-CN


# en-US



```vue
<template>
    <DatePicker v-model="date" :picker-options="pickerOptions"></DatePicker>
</template>
<script>
    export default {
      data(){
        return {
          date:new Date().getTime(),
          pickerOptions: {
          disabledDate(time) {
            return time.getTime() > Date.now();
          },
          shortcuts: [{
            text: '今天',
            onClick(picker) {
              picker.$emit('pick', new Date());
            }
          }, {
            text: '昨天',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit('pick', date);
            }
          }, {
            text: '一周前',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', date);
            }
          }]
        },
        }
      }
    }
</script>
```
