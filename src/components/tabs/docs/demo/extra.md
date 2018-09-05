---
title:
  zh-CN: 附加内容
  en-US: icon&shapes
desc:
  zh-CN: 设置 slot extra 可以在页签右边添加附加操作。
  en-US: Button

order: 10
---

# zh-CN


# en-US



```vue
<template>
    <Tabs type="card">
        <TabPane v-for="tab in tabs" :key="tab" :label="'标签' + tab">标签{{ tab }}</TabPane>
        <Button @click="handleTabsAdd" size="small" slot="extra">增加</Button>
    </Tabs>
</template>
<script>
    export default {
        data () {
            return {
                tabs: 2
            }
        },
        methods: {
            handleTabsAdd () {
                this.tabs ++;
            }
        }
    }
</script>

```
