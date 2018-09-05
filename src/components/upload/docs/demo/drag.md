---
title:
  zh-CN: 拖拽上传
  en-US: icon&shapes
desc:
  zh-CN: 设置属性 type 为 drag，可以拖拽上传。
  en-US: Button

order: 6
---

# zh-CN

# en-US


```vue
<template>
    <Upload
        multiple
        type="drag"
        action="//jsonplaceholder.typicode.com/posts/">
        <div style="padding: 20px 0">
            <Icon type="ios-cloud-upload" size="52" style="color: #3399ff"></Icon>
            <p>Click or drag files here to upload</p>
        </div>
    </Upload>
</template>
<script>
    export default {

    }
</script>
```
