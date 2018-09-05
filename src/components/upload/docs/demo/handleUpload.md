---
title:
  zh-CN: 手动上传
  en-US: icon&shapes
desc:
  zh-CN: 绑定 before-upload，并返回false，可以阻止默认上传流程，手动控制文件上传。
  en-US: Button

order: 4
---

# zh-CN

# en-US


```vue
<template>
    <div>
        <Upload
            :before-upload="handleUpload"
            action="//jsonplaceholder.typicode.com/posts/">
            <Button type="ghost" icon="ios-cloud-upload-outline">Select the file to upload</Button>
        </Upload>
        <div v-if="file !== null">Upload file: {{ file.name }} <Button type="text" @click="upload" :loading="loadingStatus">{{ loadingStatus ? 'Uploading' : 'Click to upload' }}</Button></div>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                file: null,
                loadingStatus: false
            }
        },
        methods: {
            handleUpload (file) {
                this.file = file;
                return false;
            },
            upload () {
                this.loadingStatus = true;
                setTimeout(() => {
                    this.file = null;
                    this.loadingStatus = false;
                    this.$Message.success('Success')
                }, 1500);
            }
        }
    }
</script>
```
