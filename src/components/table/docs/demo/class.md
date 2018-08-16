---
title:
  zh-CN: 状态
  en-US: Button Size
desc:
  zh-CN: 描述
  en-US: Button
order: 3
---

# zh-CN


# en-US



```vue
<template>
  <Table
    :data="tableData2"
    style="width: 100%"
    :row-class-name="tableRowClassName">
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

<style>
  .warning-row {
    background: oldlace;
  }

  .success-row {
    background: #f0f9eb;
  }
</style>

<script>
  export default {
    methods: {
      tableRowClassName({row, rowIndex}) {
        if (rowIndex === 1) {
          return 'warning-row';
        } else if (rowIndex === 3) {
          return 'success-row';
        }
        return '';
      }
    },
    data() {
      return {
        tableData2: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }]
      }
    }
  }
</script>
```
