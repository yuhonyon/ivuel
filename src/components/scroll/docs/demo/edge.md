---
title:
  zh-CN: 边缘触发
  en-US: Button Size
desc:
  zh-CN:
  en-US: Button

order: 22
---

# zh-CN
当滚动至底部或顶部时，触发加载更多。

需返回 Promise。

# en-US



```vue
<template>
    <Scroll :on-reach-edge="handleReachEdge">
        <Card dis-hover v-for="(item, index) in list3" :key="index" style="margin: 32px 0">
            Content {{ item }}
        </Card>
    </Scroll>
</template>
<script>
    export default {
        data () {
            return {
                list3: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
            }
        },
        methods: {
            handleReachEdge (dir) {
                return new Promise(resolve => {
                    setTimeout(() => {
                        if (dir > 0) {
                            const first = this.list3[0];
                            for (let i = 1; i < 11; i++) {
                                this.list3.unshift(first - i);
                            }
                        } else {
                            const last = this.list3[this.list3.length - 1];
                            for (let i = 1; i < 11; i++) {
                                this.list3.push(last + i);
                            }
                        }
                        resolve();
                    }, 2000);
                });
            }
        }
    }
</script>

```
