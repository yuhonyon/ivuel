---
title:
  zh-CN: 顶部触发
  en-US: Button Size
desc:
  zh-CN: 按钮有六种类型：主按钮、次按钮、虚线按钮、危险按钮。
  en-US: Button

order: 11
---

# zh-CN
当滚动至顶部时，触发加载更多。

需返回 Promise。

# en-US



```vue
<template>
    <Scroll :on-reach-top="handleReachTop">
        <Card dis-hover v-for="(item, index) in list2" :key="index" style="margin: 32px 0">
            Content {{ item }}
        </Card>
    </Scroll>
</template>
<script>
    export default {
        data () {
            return {
                list2: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
            }
        },
        methods: {
            handleReachTop () {
                return new Promise(resolve => {
                    setTimeout(() => {
                        const first = this.list2[0];
                        for (let i = 1; i < 11; i++) {
                            this.list2.unshift(first - i);
                        }
                        resolve();
                    }, 2000);
                });
            }
        }
    }
</script>

```
