### 修改记录

### 替换 datepicker 组件

|     API     | 说明                        |      类型     |     默认     |
| :---------: | ------------------------- | :---------: | :--------: |
| defaultTime | 可选最大值,可取值('now'或HH:mm:ss) | string/date | "00:00:00" |

### datepicker 组件添加最大最小值

|   API   | 说明                      |      类型     |  默认  |
| :-----: | ----------------------- | :---------: | :--: |
| maxDate | 可选最大值,可取值('today'或date) | string/date | null |
| minDate | 可选最小值,可取值('today'或date) | string/date | null |

### modal 组件添加纵向位置

|    API   | 说明                   |       类型      |   默认   |
| :------: | -------------------- | :-----------: | :----: |
| position | 纵向位置可取值("center"和数值) | string/number | center |



### table 组件添加全局对齐方式

|     API     | 说明                    |   类型   |  默认  |
| :---------: | --------------------- | :----: | :--: |
|    align    | 对齐方式center left right | string | left |
| headerAlign | 对齐方式center left right | string | left |

### table 组件添加过滤方法confirmFilter

|    Methods    | 说明   |           参数           |
| :-----------: | ---- | :--------------------: |
| confirmFilter | 过滤方法 | columnId,filteredValue |

### poptip 组件添加指令v-poptip:ref

解决 poptip组件影响布局问题

### poptip 添加 disabled  poptipClass功能

|     API     | 说明          |    类型   |   默认  |
| :---------: | ----------- | :-----: | :---: |
|   disabled  | 是否禁用        | boolean | false |
| poptipClass | 为poptip添加类名 |  string |       |

### tooltip 组件添加指令v-tooltip:ref

解决 tooltip组件影响布局问题

### tooltip 添加 disabled  tooltipClass功能

|     API     | 说明             |  类型   | 默认  |
|:-----------:| ---------------- |:-------:|:-----:|
|  disabled   | 是否禁用         | boolean | false |
| tooltipClass | 为tooltip添加类名 | string  |       |

### tooltip 组件添加触发方式


### select 添加事件on-select

手动选择select选项触发

### inputNumber 添加带加减风格

|    API    | 说明  |    类型   |  默认  |
| :-------: | --- | :-----: | :--: |
| plusminus | 风格  | boolean | true |

### select 组件bug修复

bug描述:select的value不能为空

### datePicker&timePicker 组件修复

bug描述:on-change事件触发时机错误,value未改变

### datePicker&timePicker 添加输出格式api

|      API     | 说明                                              |   类型   |  默认  |
| :----------: | ----------------------------------------------- | :----: | :--: |
| value-format | 'number'(毫秒数) | string | date |

### tabs组件添加router功能

|     API    | 说明              |    类型   |   默认  |
| :--------: | --------------- | :-----: | :---: |
|   router   | 是否开启router功能    | boolean | false |
| routerRoot | router basePath |  string |       |

### menu组件添加横向收起功能并添加tooltip提示

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

### icon组件添加支持第三方字体功能

|   API  | 说明        |   类型   |    默认    |
| :----: | --------- | :----: | :------: |
| prefix | 字体class前缀 | string | ivu-icon |

### form组件 添加动态修改验证功能及重置验证方法

|       方法      | 说明                              |
| :-----------: | ------------------------------- |
| resetValidate | 参数为String重置一个item,多个使用数组,为空重置所有 |
|  resetFields  | 规则同上                            |

### 表单验证添加类型 any

### 表单验证正则失效bug

### 添加table&column组件,原table组件改名data-grid默认不打包

### modal添加zindex管理
