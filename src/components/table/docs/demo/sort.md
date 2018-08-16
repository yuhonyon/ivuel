---
title:
  zh-CN: 排序
  en-US: Button Size
desc:
  zh-CN: 描述
  en-US: Button
order: 11
---

# zh-CN


# en-US



```vue
<template>
  <Table
    :data="tableData"
    style="width: 100%"
    :default-sort = "{prop: 'date', order: 'descending'}"
    >
    <Column
      prop="date"
      label="日期"
      sortable
      width="180">
    </Column>
    <Column
      prop="name"
      label="姓名"
      sortable
      width="180">
    </Column>
    <Column
      prop="address"
      label="地址"
      :formatter="formatter">
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
    },
    methods: {
      formatter(row, column) {
        return row.address;
      }
    }
  }
</script>
```
