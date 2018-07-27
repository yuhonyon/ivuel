---
title:
  zh-CN: Grid 栅格
  en-US: Grid
desc:
  zh-CN: 我们采用了24栅格系统，将区域进行24等分，这样可以轻松应对大部分布局问题。使用栅格系统进行网页布局，可以使页面排版美观、舒适。
  en-US: Basic component that is used to trigger bussiness logic.
---

# asdfasdf

# zh-CN

## API


### Row props

| 属性         | 说明                                                              |   类型   | 默认值 |
| :--------- | :-------------------------------------------------------------- | :----: | :-: |
| gutter     | 栅格间距，单位 px，左右平分                                                 | Number |  0  |
| type       | 布局模式，可选值为flex或不选，在现代浏览器下有效                                      | String |  -  |
| align      | flex 布局下的垂直对齐方式，可选值为top、middle、bottom                           | String |  -  |
| justify    | flex 布局下的水平排列方式，可选值为start、end、center、space-around、space-between | String |  -  |
| class-name | 自定义的class名称                                                     | String |  -  |

### Col props

| 属性         | 说明                                        |        类型       | 默认值 |
| :--------- | :---------------------------------------- | :-------------: | :-: |
| span       | 栅格的占位格数，可选值为0~24的整数，为 0 时，相当于display:none | Number / String |  -  |
| order      | 栅格的顺序，在flex布局模式下有效                        | Number / String |  -  |
| offset     | 栅格左侧的间隔格数，间隔内不可以有栅格                       | Number / String |  -  |
| push       | 栅格向右移动格数                                  | Number / String |  -  |
| pull       | 栅格向左移动格数                                  | Number / String |  -  |
| class-name | 自定义的class名称                               | Number / String |  -  |
| xs         | &lt;768px 响应式栅格，可为栅格数或一个包含其他属性的对象         | Number / String |  -  |
| sm         | ≥768px 响应式栅格，可为栅格数或一个包含其他属性的对象            | Number / String |  -  |
| md         | ≥992px 响应式栅格，可为栅格数或一个包含其他属性的对象            | Number / String |  -  |
| lg         | ≥1200px 响应式栅格，可为栅格数或一个包含其他属性的对象           | Number / String |  -  |

# en-US

## API

| Attribute | Explanation                                                                                 |  Type  | Default |
| :-------- | :------------------------------------------------------------------------------------------ | :----: | :-----: |
| type      | Button type, options include primary、ghost、dashed、text、info、success、warning、error, optional | String |    -    |
