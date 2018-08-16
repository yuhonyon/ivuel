---
title:
  zh-CN: 展开
  en-US: Button Size
desc:
  zh-CN: 描述
  en-US: Button
order: 17
---

# zh-CN


# en-US



```vue
<template>
  <Table
    :data="tableData5"
    style="width: 100%">
    <Column type="expand">
      <template slot-scope="props">
        <Form label-position="left" inline class="demo-table-expand">
          <Form-item label="商品名称">
            <span>{{ props.row.name }}</span>
          </Form-item>
          <Form-item label="所属店铺">
            <span>{{ props.row.shop }}</span>
          </Form-item>
          <Form-item label="商品 ID">
            <span>{{ props.row.id }}</span>
          </Form-item>
          <Form-item label="店铺 ID">
            <span>{{ props.row.shopId }}</span>
          </Form-item>
          <Form-item label="商品分类">
            <span>{{ props.row.category }}</span>
          </Form-item>
          <Form-item label="店铺地址">
            <span>{{ props.row.address }}</span>
          </Form-item>
          <Form-item label="商品描述">
            <span>{{ props.row.desc }}</span>
          </Form-item>
        </Form>
      </template>
    </Column>
    <Column
      label="商品 ID"
      prop="id">
    </Column>
    <Column
      label="商品名称"
      prop="name">
    </Column>
    <Column
      label="描述"
      prop="desc">
    </Column>
  </Table>
</template>



<script>
  export default {
    data() {
      return {
        tableData5: [{
          id: '12987122',
          name: '好滋好味鸡蛋仔',
          category: '江浙小吃、小吃零食',
          desc: '荷兰优质淡奶，奶香浓而不腻',
          address: '上海市普陀区真北路',
          shop: '王小虎夫妻店',
          shopId: '10333'
        }, {
          id: '12987123',
          name: '好滋好味鸡蛋仔',
          category: '江浙小吃、小吃零食',
          desc: '荷兰优质淡奶，奶香浓而不腻',
          address: '上海市普陀区真北路',
          shop: '王小虎夫妻店',
          shopId: '10333'
        }, {
          id: '12987125',
          name: '好滋好味鸡蛋仔',
          category: '江浙小吃、小吃零食',
          desc: '荷兰优质淡奶，奶香浓而不腻',
          address: '上海市普陀区真北路',
          shop: '王小虎夫妻店',
          shopId: '10333'
        }, {
          id: '12987126',
          name: '好滋好味鸡蛋仔',
          category: '江浙小吃、小吃零食',
          desc: '荷兰优质淡奶，奶香浓而不腻',
          address: '上海市普陀区真北路',
          shop: '王小虎夫妻店',
          shopId: '10333'
        }]
      }
    }
  }
</script>
```
