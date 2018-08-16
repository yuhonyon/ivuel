---
title:
  zh-CN: 嵌套表头
  en-US: Button Size
desc:
  zh-CN: 描述
  en-US: Button
order: 14
---

# zh-CN


# en-US



```vue
<template>
  <Table
    :data="tableData3"
    style="width: 100%">
    <Column
      prop="date"
      label="日期"
      width="150">
    </Column>
    <Column label="配送信息">
      <Column
        prop="name"
        label="姓名"
        width="120">
      </Column>
      <Column label="地址">
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
      </Column>
    </Column>
  </Table>
</template>

<script>
  export default {
    data() {
      return {
        tableData3: [{
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
        }, {
          date: '2016-05-08',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-06',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-07',
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
