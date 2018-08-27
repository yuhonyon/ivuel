---
title:
  zh-CN: 加载中状态
  en-US: Button Size
desc:
  zh-CN: 通过添加loading属性可以让按钮处于加载中状态，后两个按钮在点击时进入加载状态。
  en-US: Button

order: 6
---

# zh-CN


# en-US



```vue
<template>
    <Button type="primary" loading>Loading...</Button>
    <Button type="primary" :loading="loading" @click="toLoading">
        <span v-if="!loading">Click me!</span>
        <span v-else>Loading...</span>
    </Button>
    <Button type="primary" :loading="loading2" icon="checkmark-round" @click="toLoading2">
        <span v-if="!loading2">Click me!</span>
        <span v-else>Loading...</span>
    </Button>
</template>
<script>
    export default {
        data () {
            return {
                loading: false,
                loading2: false
            }
        },
        methods: {
            toLoading () {
                this.loading = true;
            },
            toLoading2 () {
                this.loading2 = true;
            }
        }
    }
</script>
```
