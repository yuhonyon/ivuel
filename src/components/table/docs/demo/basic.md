---
title:
  zh-CN: 基础表格
  en-US: Button Size
desc:
  zh-CN: 基础的表格展示用法。
  en-US: Button
author: yufangyang
order: 1
---

# zh-CN
当`Table`元素中注入data对象数组后，在`Column`中用prop属性来对应对象中的键名即可填入数据，用label属性来定义表格的列名。可以使用width属性来定义列宽。

# en-US



```vue
<template>
    <Table
      :data="tableData"
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
