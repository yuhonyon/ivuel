---
title:
  zh-CN: 实例化-确认对话框
  en-US: Button Size
desc:
  zh-CN: 快速弹出确认对话框，并且可以自定义按钮文字及异步关闭
  en-US: Button
order: 55
---

# zh-CN


# en-US



```vue
<template>
    <Button @click="confirm">Normal</Button>
    <Button @click="custom">Custom button text</Button>
    <Button @click="async">Asynchronous closing</Button>
    <Button @click="cancle">cancel closing</Button>
</template>
<script>
    export default {
        methods: {
            confirm () {
                this.$Modal.confirm({
                    title: 'Title',
                    content: '<p>Content of dialog</p><p>Content of dialog</p>',
                    onOk: () => {
                        this.$Message.info('Clicked ok');
                    },
                    onCancel: () => {
                        this.$Message.info('Clicked cancel');
                    }
                });
            },
            custom () {
                this.$Modal.confirm({
                    title: 'Title',
                    content: '<p>Content of dialog</p><p>Content of dialog</p>',
                    okText: 'OK',
                    extraBtn:[{name:"按钮2",onOk:()=>{alert(9)}}],
                    cancelText: 'Cancel'
                });
            },
            async () {
                this.$Modal.confirm({
                    title: 'Title',
                    content: '<p>The dialog box will be closed after 2 seconds</p>',
                    loading: true,
                    onOk: () => {
                        setTimeout(() => {
                            this.$Modal.remove();
                            this.$Message.info('Asynchronously close the dialog box');
                        }, 2000);
                    }
                });
            },
            cancle(){
              this.$Modal.confirm({
                  title: 'Title',
                  content: '<p>Content of dialog</p><p>Content of dialog</p>',
                  onOk: () => {
                      this.$Message.info('cancel');
                      return false;
                  },
                  loading:true,
                  extraBtn:[{name:"按钮2",onOk:()=>{}}],
                  onCancel: () => {
                      this.$Message.info('Clicked cancel');
                  }
              });
            }
        }
    }
</script>


```
