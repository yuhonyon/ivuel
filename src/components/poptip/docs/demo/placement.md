---
title:
  zh-CN: 位置
  en-US: Button Size
desc:
  zh-CN:
  en-US: 组件提供了12个不同的方向显示Poptip

order: 33
---

# zh-CN


# en-US



```vue
<style scoped>
    .top,.bottom{
        text-align: center;
    }
    .center{
        width: 300px;
        margin: 10px auto;
        overflow: hidden;
    }
    .center-left{
        float: left;
    }
    .center-right{
        float: right;
    }
</style>
<template>
    <div class="top">
        <Poptip title="Title" content="content" placement="top-start">
            <Button>Top Left</Button>
        </Poptip>
        <Poptip title="Title" content="content" placement="top">
            <Button>Top Center</Button>
        </Poptip>
        <Poptip title="Title" content="content" placement="top-end">
            <Button>Top Right</Button>
        </Poptip>
    </div>
    <div class="center">
        <div class="center-left">
            <Poptip title="Title" content="content" placement="left-start">
                <Button>Left Top</Button>
            </Poptip><br><br>
            <Poptip title="Title" content="content" placement="left">
                <Button>Left Center</Button>
            </Poptip><br><br>
            <Poptip title="Title" content="content" placement="left-end">
                <Button>Left Right</Button>
            </Poptip>
        </div>
        <div class="center-right">
            <Poptip title="Title" content="content" placement="right-start">
                <Button>Right Top</Button>
            </Poptip><br><br>
            <Poptip title="Title" content="content" placement="right">
                <Button>Right Center</Button>
            </Poptip><br><br>
            <Poptip title="Title" content="content" placement="right-end">
                <Button>Right Bottom</Button>
            </Poptip>
        </div>
    </div>
    <div class="bottom">
        <Poptip title="Title" content="content" placement="bottom-start">
            <Button>Bottom Left</Button>
        </Poptip>
        <Poptip title="Title" content="content" placement="bottom">
            <Button>Bottom Center</Button>
        </Poptip>
        <Poptip title="Title" content="content" placement="bottom-end">
            <Button>Bottom Right</Button>
        </Poptip>
    </div>
</template>
<script>
    export default {

    }
</script>

```
