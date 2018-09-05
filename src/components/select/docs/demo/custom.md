---
title:
  zh-CN: 自定义模板
  en-US: Button Size
desc:
  zh-CN:
  en-US: Button

order: 51
---

# zh-CN

对选项内容可以进行自定义。注意在Option中使用label属性，可以让选择器优先读取该属性的值以显示，否则选中时显示的内容会和自定义的一样，这往往不是我们想要的。

对于选项显示内容的逻辑：优先显示 slot 内容，如果没有定义 slot，则显示label的值，如果没有设置 label，则显示value的值。
# en-US



```vue
<template>
    <Select v-model="model9" style="width:200px">
        <Option value="New York" label="New York">
            <span>New York</span>
            <span style="float:right;color:#ccc">America</span>
        </Option>
        <Option value="London" label="London">
            <span>London</span>
            <span style="float:right;color:#ccc">U.K.</span>
        </Option>
        <Option value="Sydney" label="Sydney">
            <span>Sydney</span>
            <span style="float:right;color:#ccc">Australian</span>
        </Option>
    </Select>
</template>
<script>
    export default {
        data () {
            return {
                model9: ''
            }
        }
    }
</script>

```
