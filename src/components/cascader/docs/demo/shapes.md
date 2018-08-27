---
title:
  zh-CN: icon&形状
  en-US: icon&shapes
desc:
  zh-CN: 设置按钮形状和图标。
  en-US: Button

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
    <Button type="primary" shape="circle" icon="ios-search"></Button>
    <Button type="primary" icon="ios-search">Search</Button>
    <Button type="primary" shape="circle" icon="ios-search">Search</Button>
    <Button type="primary" shape="circle">Circle</Button>
    <br><br>
    <Button type="ghost" shape="circle" icon="ios-search"></Button>
    <Button type="ghost" icon="ios-search">Search</Button>
    <Button type="ghost" shape="circle" icon="ios-search">Search</Button>
    <Button type="ghost" shape="circle">Circle</Button>
</template>
<script>
    export default {

    }
</script>
```
