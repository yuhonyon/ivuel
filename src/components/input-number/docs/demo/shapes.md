---
title:
  zh-CN: icon&形状
  en-US: icon&shapes
desc:
  zh-CN: 设置按钮形状和图标。
  en-US: Button
author: yufangyang
order: 2
---

# zh-CN
通过设置`icon`属性在`Button`内嵌入一个`Icon`，或者直接在`Button`内使用`Icon`组件。

使用`Button`的`icon`属性，图标位置将在最左边，如果需要自定义位置，需使用`Icon`组件。

通过设置`shape`属性为`circle`，可将按钮置为圆的形状。

# en-US
Set the icon to insert an Icon to the Button, or use the Icon component inside the Button directly.

The icon would appear at the leftmost side of the Button when
using the icon; use Icon component for different icons' positions.

Set the shape to circle to use a circle button.


```vue
<template>
    <InputNumber v-model="value3" size="small"></InputNumber>
    <br/><br/>
    <InputNumber v-model="value4"></InputNumber>
    <br/><br/>
    <InputNumber v-model="value5" size="large"></InputNumber>
</template>
<script>
    export default {
        data () {
            return {
                value3: 2,
                value4: 2,
                value5: 2
            }
        }
    }
</script>
```
