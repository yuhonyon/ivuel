---
title:
  zh-CN: 嵌套复杂内容
  en-US: Button Size
desc:
  zh-CN: 通过自定义 slot 来实现复杂的内容。
  en-US: Button

order: 55
---

# zh-CN


# en-US



```vue
<template>
    <Poptip placement="right" width="400">
        <Button type="ghost">Click</Button>
        <div class="api" slot="content">
            <table>
                <thead>
                    <tr>
                        <th>Version</th>
                        <th>Update Time</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>0.9.5</td>
                        <td>2016-10-26</td>
                        <td>Add new components <code>Tooltip</code> and <code>Poptip</code></td>
                    </tr>
                    <tr>
                        <td>0.9.4</td>
                        <td>2016-10-25</td>
                        <td>Add new components <code>Modal</code></td>
                    </tr>
                    <tr>
                        <td>0.9.2</td>
                        <td>2016-09-28</td>
                        <td>Add new components <code>Select</code></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </Poptip>
</template>
<script>
    export default {

    }
</script>

```
