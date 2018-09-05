---
title:
  zh-CN: 分隔符
  en-US: Button Size
desc:
  zh-CN: 通过设置separator属性来自定义分隔符，比如 > ，也可以接受自定义的HTML字符串。
  en-US: Button

order: 21
---

# zh-CN


# en-US



```vue
<style>
    .demo-breadcrumb-separator{
        color: #ff5500;
        padding: 0 5px;
    }
</style>
<template>
    <Breadcrumb separator=">">
        <BreadcrumbItem to="/">Home</BreadcrumbItem>
        <BreadcrumbItem to="/components/breadcrumb">Components</BreadcrumbItem>
        <BreadcrumbItem>Breadcrumb</BreadcrumbItem>
    </Breadcrumb>
    <Breadcrumb separator="<b class='demo-breadcrumb-separator'>=></b>">
        <BreadcrumbItem to="/">Home</BreadcrumbItem>
        <BreadcrumbItem to="/components/breadcrumb">Components</BreadcrumbItem>
        <BreadcrumbItem>Breadcrumb</BreadcrumbItem>
    </Breadcrumb>
</template>
<script>
    export default {

    }
</script>


```
