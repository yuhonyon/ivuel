# 修改记录

## 按需加载

### 添加样式按需加载方案

## datepicker

### 替换为element组件

### 添加最大最小值

|   API   | 说明                      |      类型     |  默认  |
| :-----: | ----------------------- | :---------: | :--: |
| maxDate | 可选最大值,可取值('today'或date) | string/date | null |
| minDate | 可选最小值,可取值('today'或date) | string/date | null |

### 添加zIndex management

### 修复on-change事件触发时机错误,value未改变

## modal

### 添加纵向位置

|    API   | 说明                   |       类型      |   默认   |
| :------: | -------------------- | :-----------: | :----: |
| position | 纵向位置可取值("center"和数值) | string/number | center |

### 添加zIndex management

## table

### 替换为element组件,原table组件改名data-grid默认不打包,按需引进

### 添加全局对齐方式

|     API     | 说明                    |   类型   |  默认  |
| :---------: | --------------------- | :----: | :--: |
|    align    | 对齐方式center left right | string | left |
| headerAlign | 对齐方式center left right | string | left |

### 添加过滤方法confirmFilter

|    Methods    | 说明   |           参数           |
| :-----------: | ---- | :--------------------: |
| confirmFilter | 过滤方法 | columnId,filteredValue |

## poptip

### 组件添加指令v-poptip:ref 解决poptip组件影响布局问题

### 添加 disabled  poptipClass功能

|     API     | 说明          |    类型   |   默认  |
| :---------: | ----------- | :-----: | :---: |
|   disabled  | 是否禁用        | boolean | false |
| poptipClass | 为poptip添加类名 |  string |       |

## tooltip

### 组件添加指令v-tooltip:ref 解决 tooltip组件影响布局问题

### tooltip 添加 disabled  tooltipClass功能

|      API     | 说明           |    类型   |   默认  |
| :----------: | ------------ | :-----: | :---: |
|   disabled   | 是否禁用         | boolean | false |
| tooltipClass | 为tooltip添加类名 |  string |       |

### tooltip 组件添加触发方式

## select

### 添加事件on-select 手动选择select选项触发

### 解决select的value不能为空

### 解决select的value不能为boolean值

## inputNumber

### 添加带加减风格

|    API    | 说明  |    类型   |  默认  |
| :-------: | --- | :-----: | :--: |
| plusminus | 风格  | boolean | true |

## menu

### 组件添加横向收起功能并添加tooltip提示

#### Menu属性

|    API   | 说明             |    类型   |   默认  |
| :------: | -------------- | :-----: | :---: |
| collapse | 是否开启collapse功能 | boolean | false |

#### MenuItem&&Submenu 属性

|   API   | 说明      |   类型   |  默认 |
| :-----: | ------- | :----: | :-: |
| tooltip | 收起后提示内容 | string |     |

### menu 组件添加router功能

|   API  | 说明           |    类型   |   默认  |
| :----: | ------------ | :-----: | :---: |
| router | 是否开启router功能 | boolean | false |

## icon

### 组件添加支持第三方字体功能

|   API  | 说明        |   类型   |    默认    |
| :----: | --------- | :----: | :------: |
| prefix | 字体class前缀 | string | ivu-icon |

## form组件

### 添加动态修改验证功能及重置验证方法

|       方法      | 说明                              |
| :-----------: | ------------------------------- |
| resetValidate | 参数为String重置一个item,多个使用数组,为空重置所有 |
|  resetFields  | 规则同上                            |

### 表单验证添加类型 any

### 表单验证正则失效bug

## tabs

### 解决其不同pane之间布局影响

## color

### 替换为element组件

## checkbox

### group添加disabled功能

|    API   | 说明  |    类型   |   默认  |
| :------: | --- | :-----: | :---: |
| disabled | 禁用  | boolean | false |

## radio

### group添加disabled功能

|    API   | 说明  |    类型   |   默认  |
| :------: | --- | :-----: | :---: |
| disabled | 禁用  | boolean | false |
