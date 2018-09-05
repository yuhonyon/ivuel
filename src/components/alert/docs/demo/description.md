---
title:
  zh-CN: 含描述信息
  en-US: Button Size
desc:
  zh-CN:
  en-US: Button

order: 11
---

# zh-CN

自定义`<slot name="desc">`描述内容。

# en-US



```vue
<template>
    <Alert>
        An info prompt
        <template slot="desc">Content of prompt. Content of prompt. Content of prompt. Content of prompt. </template>
    </Alert>
    <Alert type="success">
        A success prompt
        <template slot="desc">Content of prompt. Content of prompt. Content of prompt. Content of prompt. </template>
    </Alert>
    <Alert type="warning">
        A warning prompt
        <template slot="desc">
        Content of prompt. Content of prompt. Content of prompt.
    </template>
    </Alert>
    <Alert type="error">
        An error prompt
        <span slot="desc">
            Custom error description copywriting. <Icon type="help-circled" size="14"></Icon>
        </span>
    </Alert>
</template>
<script>
    export default {

    }
</script>

```
