---
title:
  zh-CN: 自定义模板
  en-US: Button Size
desc:
  zh-CN: 描述
  en-US: Button
order: 9
---

# zh-CN


# en-US



```vue
<template>
  <Table
    :data="tableData"
    style="width: 100%">
    <Column
      label="日期"
      width="180">
      <template slot-scope="scope">
        <i class="el-icon-time"></i>
        <span style="margin-left: 10px">{{ scope.row.date }}</span>
      </template>
    </Column>
    <Column
      label="姓名"
      width="180">
      <template slot-scope="scope">
          <p>姓名: {{ scope.row.name }}</p>
          <p>住址: {{ scope.row.address }}</p>
          <div slot="reference" class="name-wrapper">
            <Tag>{{ scope.row.name }}</Tag>
          </div>
      </template>
    </Column>
    <Column label="操作">
      <template slot-scope="scope">
        <Button
          size="small"
          @click="handleEdit(scope.$index, scope.row)">编辑</Button>
        <Button
          size="small"
          type="error"
          @click="handleDelete(scope.$index, scope.row)">删除</Button>
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
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      }
    }
  }
</script>
```
