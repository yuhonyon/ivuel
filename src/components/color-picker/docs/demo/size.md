---
title:
  zh-CN: 尺寸
  en-US: Button Size
desc:
  zh-CN: 描述。
  en-US: Button
order: 1
---

# zh-CN


# en-US



```vue
<template>
  <ColorPicker v-model="value"></ColorPicker>
  <ColorPicker v-model="value" size="medium"></ColorPicker>
  <ColorPicker v-model="value" size="small"></ColorPicker>
  <ColorPicker v-model="value" size="mini"></ColorPicker>
</template>
<script>
    export default {
      data(){
        return{
          value:"#09c"
        }
      }
    }
</script>
```
