---
title:
  zh-CN: 自定义引索
  en-US: Button Size
desc:
  zh-CN: 描述
  en-US: Button
order: 16
---

# zh-CN


# en-US



```vue
<template>
  <Table
    :data="tableData"
    style="width: 100%">
    <Column
      type="index"
      :index="indexMethod">
    </Column>
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
          date: '2016-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333,
          tag: '家'
        }, {
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333,
          tag: '公司'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333,
          tag: '家'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333,
          tag: '公司'
        }],
      }
    },
    methods: {
      indexMethod(index) {
        return index * 2;
      }
    }
  };
</script>
```
