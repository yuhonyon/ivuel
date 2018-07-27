---
title:
  zh-CN: 按钮尺寸
  en-US: Button Size
desc:
  zh-CN: 按钮有六种类型：主按钮、次按钮、虚线按钮、危险按钮。
  en-US: Button
author: yufangyang
order: 1
---

# zh-CN


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
