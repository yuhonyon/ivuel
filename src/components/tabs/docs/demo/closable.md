---
title:
  zh-CN: 可关闭
  en-US: icon&shapes
desc:
  zh-CN: 通过设置属性 closable 可以关闭某一项，仅在 type 为 card 时有效。需结合 @on-tab-remove 事件手动关闭标签页。
  en-US: Button

order: 6
---

# zh-CN


# en-US



```vue
<template>
    <Tabs type="card" closable @on-tab-remove="handleTabRemove">
        <TabPane label="标签一" v-if="tab0">标签一的内容</TabPane>
        <TabPane label="标签二" v-if="tab1">标签二的内容</TabPane>
        <TabPane label="标签三" v-if="tab2">标签三的内容</TabPane>
    </Tabs>
</template>
<script>
    export default {
        data () {
            return {
                tab0: true,
                tab1: true,
                tab2: true
            }
        },
        methods: {
            handleTabRemove (name) {
                this['tab' + name] = false;
            }
        }
    }
</script>

```
