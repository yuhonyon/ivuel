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
  <ColorPicker :predefine="predefineColors" v-model="value" show-alpha></ColorPicker>
</template>
<script>
    export default {
      data(){
        return{
          value:'rgba(19, 206, 102, 0.8)',
          predefineColors: [
          '#ff4500',
          '#ff8c00',
          '#ffd700',
          '#90ee90',
          '#00ced1',
          '#1e90ff',
          '#c71585',
          'rgba(255, 69, 0, 0.68)',
          'rgb(255, 120, 0)',
          'hsv(51, 100, 98)',
          'hsva(120, 40, 94, 0.5)',
          'hsl(181, 100%, 37%)',
          'hsla(209, 100%, 56%, 0.73)',
          '#c7158577'
        ]
        }
      }
    }
</script>
```
