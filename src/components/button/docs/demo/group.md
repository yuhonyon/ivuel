---
title:
  zh-CN: 按钮组
  en-US: Button Size
desc:
  zh-CN: 多个按钮组合
  en-US: Button

order: 7
---

# zh-CN
将多个`Button`放入`ButtonGroup`内，可实现按钮组合的效果。

通过设置`ButtonGroup`的属性`size`为l`arge`和`small`，可将按钮组尺寸设置为大和小，不设置`size`，则为默认（中）尺寸。

通过设置`ButtonGroup`的属性`shape`为`circle`，可将按钮组形状设置为圆角。
# en-US



```vue
<template>
    <h4>Basic</h4>
    <br><br>
    <ButtonGroup>
        <Button>Cancel</Button>
        <Button type="primary">Confirm</Button>
    </ButtonGroup>
    <ButtonGroup>
        <Button disabled>Yesterday</Button>
        <Button disabled>Today</Button>
        <Button disabled>Tomorrow</Button>
    </ButtonGroup>
    <ButtonGroup>
        <Button type="primary">L</Button>
        <Button>M</Button>
        <Button type="ghost">M</Button>
        <Button type="dashed">R</Button>
    </ButtonGroup>
    <br><br>
    <h4>Icons</h4>
    <br><br>
    <ButtonGroup>
        <Button type="primary">
            <Icon type="chevron-left"></Icon>
            Backward
        </Button>
        <Button type="primary">
            Forward
            <Icon type="chevron-right"></Icon>
        </Button>
    </ButtonGroup>
    <ButtonGroup>
        <Button type="primary" icon="ios-skipbackward"></Button>
        <Button type="primary" icon="ios-skipforward"></Button>
    </ButtonGroup>
    <ButtonGroup>
        <Button type="ghost" icon="ios-color-wand-outline"></Button>
        <Button type="ghost" icon="ios-sunny-outline"></Button>
        <Button type="ghost" icon="ios-crop"></Button>
        <Button type="ghost" icon="ios-color-filter-outline"></Button>
    </ButtonGroup>
    <br><br>
    <h4>Circle</h4>
    <br><br>
    <ButtonGroup shape="circle">
        <Button type="primary">
            <Icon type="chevron-left"></Icon>
            Backward
        </Button>
        <Button type="primary">
            Forward
            <Icon type="chevron-right"></Icon>
        </Button>
    </ButtonGroup>
    <ButtonGroup shape="circle">
        <Button type="primary" icon="ios-skipbackward"></Button>
        <Button type="primary" icon="ios-skipforward"></Button>
    </ButtonGroup>
    <ButtonGroup shape="circle">
        <Button type="ghost" icon="ios-color-wand-outline"></Button>
        <Button type="ghost" icon="ios-sunny-outline"></Button>
        <Button type="ghost" icon="ios-crop"></Button>
        <Button type="ghost" icon="ios-color-filter-outline"></Button>
    </ButtonGroup>
    <br><br>
    <h4>Size</h4>
    <br><br>
    <ButtonGroup size="large">
        <Button type="ghost">Large</Button>
        <Button type="ghost">Large</Button>
    </ButtonGroup>
    <ButtonGroup>
        <Button type="ghost">Default</Button>
        <Button type="ghost">Default</Button>
    </ButtonGroup>
    <ButtonGroup size="small">
        <Button type="ghost">Small</Button>
        <Button type="ghost">Small</Button>
    </ButtonGroup>
    <br><br>
    <ButtonGroup size="large" shape="circle">
        <Button type="ghost">Large</Button>
        <Button type="ghost">Large</Button>
    </ButtonGroup>
    <ButtonGroup shape="circle">
        <Button type="ghost">Default</Button>
        <Button type="ghost">Default</Button>
    </ButtonGroup>
    <ButtonGroup size="small" shape="circle">
        <Button type="ghost">Small</Button>
        <Button type="ghost">Small</Button>
    </ButtonGroup>
</template>
<script>
    export default {

    }
</script>
```
