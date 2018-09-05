---
title:
  zh-CN: 嵌套用法
  en-US: Button Size
desc:
  zh-CN:
  en-US: Button

order: 33
---

# zh-CN
下拉菜单可以进行嵌套实现级联的效果，嵌套时注意设置子集的展开方向。

# en-US



```vue
<template>
    <Dropdown>
        <a href="javascript:void(0)">
            北京小吃
            <Icon type="arrow-down-b"></Icon>
        </a>
        <DropdownMenu slot="list">
            <DropdownItem>驴打滚</DropdownItem>
            <DropdownItem>炸酱面</DropdownItem>
            <DropdownItem>豆汁儿</DropdownItem>
            <Dropdown placement="right-start">
                <DropdownItem>
                    北京烤鸭
                    <Icon type="ios-arrow-right"></Icon>
                </DropdownItem>
                <DropdownMenu slot="list">
                    <DropdownItem>挂炉烤鸭</DropdownItem>
                    <DropdownItem>焖炉烤鸭</DropdownItem>
                </DropdownMenu>
            </Dropdown>
            <DropdownItem>冰糖葫芦</DropdownItem>
        </DropdownMenu>
    </Dropdown>
</template>
<script>
    export default {

    }
</script>


```
