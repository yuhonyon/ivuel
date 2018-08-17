---
title:
  zh-CN: 固定表头
  en-US: 纵向内容过多时，可选择固定表头。
desc:
  zh-CN: 描述
  en-US: Button
order: 5
---

# zh-CN
只要在`Table`元素中定义了`height`属性，即可实现固定表头的表格，而不需要额外的代码。

# en-US




```vue
<template>
    <Table
      :data="tableData"
      border
      height="200"
      style="width: 100%">
      <Column
        prop="date"
        label="日期"
        width="180">
      </Column>
      <Column
        prop="name"
        label="姓名"
        width="180">
      </Column>
      <Column
        prop="address"
        label="地址">
      </Column>
    </Table>
  </template>

  <script>
    export default {
      data() {
        return {
          tableData: [{
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄'
          }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
          }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          }]
        }
      }
    }
  </script>
```
