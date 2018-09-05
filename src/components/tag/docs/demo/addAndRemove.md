---
title:
  zh-CN: 动态添加和删除
  en-US: icon&shapes
desc:
  zh-CN: 用数组生成一组标签，可以动态添加和删除。
  en-US: Button

order: 12
---

# zh-CN

# en-US



```vue
<template>
    <Tag v-for="item in count" :key="item" :name="item" closable @on-close="handleClose2">标签{{ item + 1 }}</Tag>
    <Button icon="ios-plus-empty" type="dashed" size="small" @click="handleAdd">添加标签</Button>
</template>
<script>
    export default {
        data () {
            return {
                count: [0, 1, 2]
            }
        },
        methods: {
            handleAdd () {
                if (this.count.length) {
                    this.count.push(this.count[this.count.length - 1] + 1);
                } else {
                    this.count.push(0);
                }
            },
            handleClose2 (event, name) {
                const index = this.count.indexOf(name);
                this.count.splice(index, 1);
            }
        }
    }
</script>
```
