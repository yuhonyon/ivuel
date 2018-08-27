---
title:
  zh-CN: 按钮尺寸
  en-US: Button Size
desc:
  zh-CN: 按钮有六种类型：主按钮、次按钮、虚线按钮、危险按钮。
  en-US: Button

order: 1
---

# zh-CN


# en-US



```vue
<template>
    <Menu collapse active-name="1-2" >
        <Submenu name="1" tooltip="Navigation1">
            <template slot="title">
                <Icon type="ios-analytics"></Icon>
                <span>Navigation One</span>
            </template>
            <MenuGroup title="Item 1">
                <MenuItem name="1-1">Option 1</MenuItem>
                <MenuItem name="1-2">Option 2</MenuItem>
            </MenuGroup>
            <MenuGroup title="Item 2">
                <MenuItem name="1-3">Option 3</MenuItem>
                <MenuItem name="1-4">Option 4</MenuItem>
            </MenuGroup>
        </Submenu>
        <Submenu name="2" tooltip="Navigation2">
            <template slot="title">
                <Icon type="ios-filing"></Icon>
                <span>Navigation 2</span>
            </template>
            <MenuItem name="2-1">Option 5</MenuItem>
            <MenuItem name="2-2">Option 6</MenuItem>
            <Submenu name="3">
                <template slot="title">Submenu</template>
                <MenuItem name="3-1">Option 7</MenuItem>
                <MenuItem name="3-2">Option 8</MenuItem>
            </Submenu>
        </Submenu>
        <MenuItem tooltip="Navigation" name="4-4"><Icon type="ios-filing"></Icon><span>菜单</span></MenuItem>
    </Menu>
</template>
<script>
    export default {

    }
</script>
```
