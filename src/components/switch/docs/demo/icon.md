---
title:
  zh-CN: 文字和图标
  en-US: Button Size
desc:
  zh-CN:
  en-US: Button

order: 21
---

# zh-CN
自定义内容，建议如果使用2个汉字，将开关尺寸设置为 large。

# en-US



```vue
<template>
    <Switch>
        <span slot="open">开</span>
        <span slot="close">关</span>
    </Switch>
    <Switch>
        <Icon type="android-done" slot="open"></Icon>
        <Icon type="android-close" slot="close"></Icon>
    </Switch>
    <br><br>
    <Switch size="large">
        <span slot="open">开启</span>
        <span slot="close">关闭</span>
    </Switch>
    <Switch size="large">
        <span slot="open">ON</span>
        <span slot="close">OFF</span>
    </Switch>
</template>
<script>
    export default {

    }
</script>

```
