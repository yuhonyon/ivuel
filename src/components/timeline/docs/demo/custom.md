---
title:
  zh-CN: 自定义时间轴点
  en-US: icon&shapes
desc:
  zh-CN: 接受一个 slot 来自定义轴点的内容，比如一个图标。
  en-US: Button

order: 7
---

# zh-CN


# en-US



```vue
<template>
    <Timeline>
        <TimelineItem color="green">
            <Icon type="trophy" slot="dot"></Icon>
            <span>发布里程碑版本</span>
        </TimelineItem>
        <TimelineItem>发布1.0版本</TimelineItem>
        <TimelineItem>发布2.0版本</TimelineItem>
        <TimelineItem>发布3.0版本</TimelineItem>
    </Timeline>
</template>
<script>
    export default {

    }
</script>
```
