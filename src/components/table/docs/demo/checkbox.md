---
title:
  zh-CN: 多选
  en-US: Button Size
desc:
  zh-CN: 描述
  en-US: Button
order: 8
---

# zh-CN


# en-US



```vue
<template>
  <Table
    ref="multipleTable"
    :data="tableData3"
    tooltip-effect="dark"
    style="width: 100%"
    @selection-change="handleSelectionChange">
    <Column
      type="selection"
      width="55">
    </Column>
    <Column
      label="日期"
      width="120">
      <template slot-scope="scope">{{ scope.row.date }}</template>
    </Column>
    <Column
      prop="name"
      label="姓名"
      width="120">
    </Column>
    <Column
      prop="address"
      label="地址"
      show-overflow-tooltip>
    </Column>
  </Table>
  <div style="margin-top: 20px">
    <Button @click="toggleSelection([tableData3[1], tableData3[2]])">切换第二、第三行的选中状态</Button>
    <Button @click="toggleSelection()">取消选择</Button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        tableData3: [{
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-08',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-06',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-07',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }],
        multipleSelection: []
      }
    },

    methods: {
      toggleSelection(rows) {
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row);
          });
        } else {
          this.$refs.multipleTable.clearSelection();
        }
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
      }
    }
  }
</script>
```
