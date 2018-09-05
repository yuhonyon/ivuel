---
title:
  zh-CN: 异步关闭
  en-US: Button Size
desc:
  zh-CN:
  en-US: Button
order: 11
---

# zh-CN

给Modal添加属性loading后，点击确定按钮对话框不会自动消失，并显示 loading 状态，需要手动关闭对话框，常用于表单提交。

# en-US



```vue
<template>
    <Button type="primary" @click="modal6 = true">Display dialog box</Button>
    <Modal
        v-model="modal6"
        title="Title"
        :loading="loading"
        @on-ok="asyncOK">
        <p>After you click ok, the dialog box will close in 2 seconds.</p>
    </Modal>
</template>
<script>
    export default {
        data () {
            return {
                modal6: false,
                loading: true
            }
        },
        methods: {
            asyncOK () {
                setTimeout(() => {
                    this.modal6 = false;
                }, 2000);
            }
        }
    }
</script>



```
