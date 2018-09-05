---
title:
  zh-CN: 实例化-自定义内容
  en-US: Button Size
desc:
  zh-CN:
  en-US: Button
order: 66
---

# zh-CN

使用 render 字段可以基于 Render 函数来自定义内容。

使用 render 后，将不再限制类型，content 也将无效。

# en-US



```vue
<template>
    <p>
        Name: {{ value }}
    </p>
    <p>
        <Button @click="handleRender">Custom content</Button>
    </p>
</template>
<script>
    export default {
        data () {
            return {
                value: ''
            }
        },
        methods: {
            handleRender () {
                this.$Modal.confirm({
                    render: (h) => {
                        return h('Input', {
                            props: {
                                value: this.value,
                                autofocus: true,
                                placeholder: 'Please enter your name...'
                            },
                            on: {
                                input: (val) => {
                                    this.value = val;
                                }
                            }
                        })
                    }
                })
            }
        }
    }
</script>


```
