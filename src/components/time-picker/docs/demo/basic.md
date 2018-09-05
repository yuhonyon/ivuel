---
title:
  zh-CN: 固定时间点
  en-US: Button Size
desc:
  zh-CN:
  en-US: Button

order: 1
---

# zh-CN


# en-US



```vue
<TimeSelect
  v-model="value1"
  :picker-options="{
    start: '08:30',
    step: '00:15',
    end: '18:30'
  }"
  placeholder="选择时间">
</TimeSelect>

<script>
  export default {
    data() {
      return {
        value1: ''
      };
    }
  }
</script>
```
