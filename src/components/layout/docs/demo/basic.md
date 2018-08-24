---
title:
  zh-CN: 基本结构
  en-US: Button Size
desc:
  zh-CN: 典型的页面布局。
  en-US: Button
author: yufangyang
order: 0
---

# zh-CN


# en-US



```vue
<template>
<div class="layout">
    <Layout>
        <Header>Header</Header>
        <Content>Content</Content>
        <Footer>Footer</Footer>
    </Layout>

    <Layout>
        <Header>Header</Header>
        <Layout>
            <Sider hide-trigger>Sider</Sider>
            <Content>Content</Content>
        </Layout>
        <Footer>Footer</Footer>
    </Layout>

    <Layout>
        <Header>Header</Header>
        <Layout>
            <Content>Content</Content>
            <Sider hide-trigger>Sider</Sider>
        </Layout>
        <Footer>Footer</Footer>
    </Layout>

    <Layout>
        <Sider hide-trigger>Sider</Sider>
        <Layout>
            <Header>Header</Header>
            <Content>Content</Content>
            <Footer>Footer</Footer>
        </Layout>
    </Layout>
</div>
</template>
<script>
    export default {

    }
</script>
```
