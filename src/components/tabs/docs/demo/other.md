---
title:
  zh-CN: 其它样式
  en-US: icon&shapes
desc:
  zh-CN: 可以根据业务自定义 UI，需要一点额外的样式覆盖。
  en-US: Button

order: 17
---

# zh-CN


# en-US



```vue
<style>
    .demo-tabs-style1 > .ivu-tabs-card > .ivu-tabs-content {
        height: 120px;
        margin-top: -16px;
    }

    .demo-tabs-style1 > .ivu-tabs-card > .ivu-tabs-content > .ivu-tabs-tabpane {
        background: #fff;
        padding: 16px;
    }

    .demo-tabs-style1 > .ivu-tabs.ivu-tabs-card > .ivu-tabs-bar .ivu-tabs-tab {
        border-color: transparent;
    }

    .demo-tabs-style1 > .ivu-tabs-card > .ivu-tabs-bar .ivu-tabs-tab-active {
        border-color: #fff;
    }
    .demo-tabs-style2 > .ivu-tabs.ivu-tabs-card > .ivu-tabs-bar .ivu-tabs-tab{
        border-radius: 0;
        background: #fff;
    }
    .demo-tabs-style2 > .ivu-tabs.ivu-tabs-card > .ivu-tabs-bar .ivu-tabs-tab-active{
        border-top: 1px solid #3399ff;
    }
    .demo-tabs-style2 > .ivu-tabs.ivu-tabs-card > .ivu-tabs-bar .ivu-tabs-tab-active:before{
        content: '';
        display: block;
        width: 100%;
        height: 1px;
        background: #3399ff;
        position: absolute;
        top: 0;
        left: 0;
    }
</style>
<template>
    <Row :gutter="32">
        <Col span="12" class="demo-tabs-style1" style="background: #e3e8ee;padding:16px;">
            <Tabs type="card">
                <TabPane label="标签一">标签一的内容</TabPane>
                <TabPane label="标签二">标签二的内容</TabPane>
                <TabPane label="标签三">标签三的内容</TabPane>
            </Tabs>
        </Col>
        <Col span="12" class="demo-tabs-style2">
            <Tabs type="card">
                <TabPane label="标签一">标签一的内容</TabPane>
                <TabPane label="标签二">标签二的内容</TabPane>
                <TabPane label="标签三">标签三的内容</TabPane>
            </Tabs>
        </Col>
    </Row>
</template>
<script>
    export default {

    }
</script>

```
