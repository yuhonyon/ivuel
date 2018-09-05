---
title:
  zh-CN: 基础用法
  en-US: Button Size
desc:
  zh-CN:
  en-US: Button

order: 1
---

# zh-CN
基本用法，默认在 4.5秒后关闭。如果 desc 参数为空或不填，则自动应用仅标题模式下的样式。

建议标题言简意赅，例如"删除成功"，更详细的内容可以放在描述信息里。

# en-US



```vue
<template>
    <Button type="primary" @click="open(false)">Open notice</Button>
    <Button @click="open(true)">Open notice(only title)</Button>
</template>
<script>
    export default {
        methods: {
            open (nodesc) {
                this.$Notice.open({
                    title: 'Notification title',
                    desc: nodesc ? '' : 'Here is the notification description. Here is the notification description. '
                });
            }
        }
    }
</script>

```
