---
title:
  zh-CN: 帅选
  en-US: Button Size
desc:
  zh-CN: 描述
  en-US: Button
order: 10
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
      sortable
      width="180"
      :filters="[{text: '2016-05-01', value: '2016-05-01'}, {text: '2016-05-02', value: '2016-05-02'}, {text: '2016-05-03', value: '2016-05-03'}, {text: '2016-05-04', value: '2016-05-04'}]"
      :filter-method="filterHandler"
    >
    </Column>
    <Column
      prop="name"
      label="姓名"
      width="180">
    </Column>
    <Column
      prop="address"
      label="地址"
      :formatter="formatter">
    </Column>
    <Column
      prop="tag"
      label="标签"
      width="100"
      :filters="[{ text: '家', value: '家' }, { text: '公司', value: '公司' }]"
      :filter-method="filterTag"
      filter-placement="bottom-end">
      <template slot-scope="scope">
        <Tag
          :color="scope.row.tag === '家' ? 'gre' : 'success'"
          disable-transitions>{{scope.row.tag}}</Tag>
      </template>
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
          address: '上海市普陀区金沙江路 1518 弄',
          tag: '家'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄',
          tag: '公司'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄',
          tag: '家'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄',
          tag: '公司'
        }]
      }
    },
    methods: {
      formatter(row, column) {
        return row.address;
      },
      filterTag(value, row) {
        return row.tag === value;
      },
      filterHandler(value, row, column) {
        const property = column['property'];
        return row[property] === value;
      }
    }
  }
</script>
```
