---
title:
  zh-CN: 固定列
  en-US: Button Size
desc:
  zh-CN: 描述
  en-US: Button
order: 6
---

# zh-CN


# en-US



```vue
<template>
  <Table
    :data="tableData"
    border
    style="width: 100%">
    <Column
      fixed
      prop="date"
      label="日期"
      width="150">
    </Column>
    <Column
      prop="name"
      label="姓名"
      width="120">
    </Column>
    <Column
      prop="province"
      label="省份"
      width="120">
    </Column>
    <Column
      prop="city"
      label="市区"
      width="120">
    </Column>
    <Column
      prop="address"
      label="地址"
      width="300">
    </Column>
    <Column
      prop="zip"
      label="邮编"
      width="120">
    </Column>
    <Column
      fixed="right"
      label="操作"
      width="100">
      <template slot-scope="scope">
        <Button @click="handleClick(scope.row)" type="text" size="small">查看</Button>
        <Button type="text" size="small">编辑</Button>
      </template>
    </Column>
  </Table>
</template>

<script>
  export default {
    methods: {
      handleClick(row) {
        console.log(row);
      }
    },

    data() {
      return {
        tableData: [{
          date: '2016-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-04',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-01',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }]
      }
    }
  }
</script>
```
