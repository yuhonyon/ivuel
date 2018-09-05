---
title:
  zh-CN: 配合外部组件使用
  en-US: Button Size
desc:
  zh-CN:
  en-US: Button

order: 21
---

# zh-CN
通过数据的联动和逻辑控制，实现动态效果。

# en-US



```vue
<template>
    <Progress :percent="percent"></Progress>
    <ButtonGroup size="large">
        <Button icon="ios-plus-empty" @click="add"></Button>
        <Button icon="ios-minus-empty" @click="minus"></Button>
    </ButtonGroup>
</template>
<script>
    export default {
        data () {
            return {
                percent: 0
            }
        },
        methods: {
            add () {
                if (this.percent >= 100) {
                    return false;
                }
                this.percent += 10;
            },
            minus () {
                if (this.percent <= 0) {
                    return false;
                }
                this.percent -= 10;
            }
        }
    }
</script>

```
