webpackJsonp([62],{F53x:function(t,e){},VQby:function(t,e,v){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=v("go92"),a=v.n(i),_={mixins:[{data:function(){return{showVueDocCode:!1,vueDocCodeCopyText:"copy",vueDocCodeHeight:0}},methods:{vueDocCodeToggle:function(){this.showVueDocCode=!this.showVueDocCode,this.vueDocCodeHeight=this.vueDocCodeHeight||this.$refs.vueDocCodeBox.children[0].offsetHeight,this.$refs.vueDocCodeBox.style.height=this.showVueDocCode?this.vueDocCodeHeight+50+"px":"0px"},vueDocCodeCopy:function(){var t=this,e=new a.a(".vue-doc-code-copy",{text:function(t){return t.nextElementSibling.textContent}});e.on("success",function(v){t.vueDocCodeCopyText="copy success!",setTimeout(function(){t.vueDocCodeCopyText="copy"},1e3),v.clearSelection(),e.destroy()})}},components:{}}]},l={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,v=t._self._c||e;return v("div",{staticClass:"vue-doc-wrapper"},[v("div",{staticClass:"vue-doc-title"},[v("p",[t._v("## ")])]),t._v(" "),v("div",{staticClass:"vue-doc-title-EN"},[v("p",[t._v("## ")])]),t._v(" "),v("div",{staticClass:"vue-doc-content"},[v("h3",{attrs:{id:"vue-doc-修改记录1"}},[t._v("修改记录")]),t._v(" "),v("h3",{attrs:{id:"vue-doc-替换datepicker组件2"}},[t._v("替换 datepicker 组件")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",{staticStyle:{"text-align":"center"}},[t._v("API")]),t._v(" "),v("th",[t._v("说明")]),t._v(" "),v("th",{staticStyle:{"text-align":"center"}},[t._v("类型")]),t._v(" "),v("th",{staticStyle:{"text-align":"center"}},[t._v("默认")])])]),t._v(" "),v("tbody",[v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("defaultTime")]),t._v(" "),v("td",[t._v("可选最大值,可取值('now'或HH:mm:ss)")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("string/date")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v('"00:00:00"')])])])]),t._v(" "),v("h3",{attrs:{id:"vue-doc-datepicker组件添加最大最小值3"}},[t._v("datepicker 组件添加最大最小值")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",{staticStyle:{"text-align":"center"}},[t._v("API")]),t._v(" "),v("th",[t._v("说明")]),t._v(" "),v("th",{staticStyle:{"text-align":"center"}},[t._v("类型")]),t._v(" "),v("th",{staticStyle:{"text-align":"center"}},[t._v("默认")])])]),t._v(" "),v("tbody",[v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("maxDate")]),t._v(" "),v("td",[t._v("可选最大值,可取值('today'或date)")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("string/date")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("null")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("minDate")]),t._v(" "),v("td",[t._v("可选最小值,可取值('today'或date)")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("string/date")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("null")])])])]),t._v(" "),v("h3",{attrs:{id:"vue-doc-modal组件添加纵向位置4"}},[t._v("modal 组件添加纵向位置")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",{staticStyle:{"text-align":"center"}},[t._v("API")]),t._v(" "),v("th",[t._v("说明")]),t._v(" "),v("th",{staticStyle:{"text-align":"center"}},[t._v("类型")]),t._v(" "),v("th",{staticStyle:{"text-align":"center"}},[t._v("默认")])])]),t._v(" "),v("tbody",[v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("position")]),t._v(" "),v("td",[t._v('纵向位置可取值("center"和数值)')]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("string/number")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("center")])])])]),t._v(" "),v("h3",{attrs:{id:"vue-doc-table组件添加全局对齐方式5"}},[t._v("table 组件添加全局对齐方式")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",{staticStyle:{"text-align":"center"}},[t._v("API")]),t._v(" "),v("th",[t._v("说明")]),t._v(" "),v("th",{staticStyle:{"text-align":"center"}},[t._v("类型")]),t._v(" "),v("th",{staticStyle:{"text-align":"center"}},[t._v("默认")])])]),t._v(" "),v("tbody",[v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("align")]),t._v(" "),v("td",[t._v("对齐方式center left right")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("left")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("headerAlign")]),t._v(" "),v("td",[t._v("对齐方式center left right")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("left")])])])]),t._v(" "),v("h3",{attrs:{id:"vue-doc-table组件添加过滤方法confirmfilter6"}},[t._v("table 组件添加过滤方法confirmFilter")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",{staticStyle:{"text-align":"center"}},[t._v("Methods")]),t._v(" "),v("th",[t._v("说明")]),t._v(" "),v("th",{staticStyle:{"text-align":"center"}},[t._v("参数")])])]),t._v(" "),v("tbody",[v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("confirmFilter")]),t._v(" "),v("td",[t._v("过滤方法")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("columnId,filteredValue")])])])]),t._v(" "),v("h3",{attrs:{id:"vue-doc-poptip组件添加指令vpoptipref7"}},[t._v("poptip 组件添加指令v-poptip:ref")]),t._v(" "),v("p",[t._v("解决 poptip组件影响布局问题")]),t._v(" "),v("h3",{attrs:{id:"vue-doc-poptip添加disabledpoptipclass功能8"}},[t._v("poptip 添加 disabled  poptipClass功能")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",{staticStyle:{"text-align":"center"}},[t._v("API")]),t._v(" "),v("th",[t._v("说明")]),t._v(" "),v("th",{staticStyle:{"text-align":"center"}},[t._v("类型")]),t._v(" "),v("th",{staticStyle:{"text-align":"center"}},[t._v("默认")])])]),t._v(" "),v("tbody",[v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("disabled")]),t._v(" "),v("td",[t._v("是否禁用")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("boolean")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("false")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("poptipClass")]),t._v(" "),v("td",[t._v("为poptip添加类名")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("string")])])])]),t._v(" "),v("h3",{attrs:{id:"vue-doc-tooltip组件添加指令vtooltipref9"}},[t._v("tooltip 组件添加指令v-tooltip:ref")]),t._v(" "),v("p",[t._v("解决 tooltip组件影响布局问题")]),t._v(" "),v("h3",{attrs:{id:"vue-doc-tooltip添加disabledtooltipclass功能10"}},[t._v("tooltip 添加 disabled  tooltipClass功能")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",{staticStyle:{"text-align":"center"}},[t._v("API")]),t._v(" "),v("th",[t._v("说明")]),t._v(" "),v("th",{staticStyle:{"text-align":"center"}},[t._v("类型")]),t._v(" "),v("th",{staticStyle:{"text-align":"center"}},[t._v("默认")])])]),t._v(" "),v("tbody",[v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("disabled")]),t._v(" "),v("td",[t._v("是否禁用")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("boolean")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("false")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("tooltipClass")]),t._v(" "),v("td",[t._v("为tooltip添加类名")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("string")])])])]),t._v(" "),v("h3",{attrs:{id:"vue-doc-tooltip组件添加触发方式11"}},[t._v("tooltip 组件添加触发方式")]),t._v(" "),v("h3",{attrs:{id:"vue-doc-select添加事件onselect12"}},[t._v("select 添加事件on-select")]),t._v(" "),v("p",[t._v("手动选择select选项触发")]),t._v(" "),v("h3",{attrs:{id:"vue-doc-inputnumber添加带加减风格13"}},[t._v("inputNumber 添加带加减风格")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",{staticStyle:{"text-align":"center"}},[t._v("API")]),t._v(" "),v("th",[t._v("说明")]),t._v(" "),v("th",{staticStyle:{"text-align":"center"}},[t._v("类型")]),t._v(" "),v("th",{staticStyle:{"text-align":"center"}},[t._v("默认")])])]),t._v(" "),v("tbody",[v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("plusminus")]),t._v(" "),v("td",[t._v("风格")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("boolean")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("true")])])])]),t._v(" "),v("h3",{attrs:{id:"vue-doc-select组件bug修复14"}},[t._v("select 组件bug修复")]),t._v(" "),v("p",[t._v("bug描述:select的value不能为空")]),t._v(" "),v("h3",{attrs:{id:"vue-doc-datepickertimepicker组件修复15"}},[t._v("datePicker&timePicker 组件修复")]),t._v(" "),v("p",[t._v("bug描述:on-change事件触发时机错误,value未改变")]),t._v(" "),v("h3",{attrs:{id:"vue-doc-datepickertimepicker添加输出格式api16"}},[t._v("datePicker&timePicker 添加输出格式api")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",{staticStyle:{"text-align":"center"}},[t._v("API")]),t._v(" "),v("th",[t._v("说明")]),t._v(" "),v("th",{staticStyle:{"text-align":"center"}},[t._v("类型")]),t._v(" "),v("th",{staticStyle:{"text-align":"center"}},[t._v("默认")])])]),t._v(" "),v("tbody",[v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("value-format")]),t._v(" "),v("td",[t._v("'number'(毫秒数)")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("date")])])])]),t._v(" "),v("h3",{attrs:{id:"vue-doc-tabs组件添加router功能17"}},[t._v("tabs组件添加router功能")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",{staticStyle:{"text-align":"center"}},[t._v("API")]),t._v(" "),v("th",[t._v("说明")]),t._v(" "),v("th",{staticStyle:{"text-align":"center"}},[t._v("类型")]),t._v(" "),v("th",{staticStyle:{"text-align":"center"}},[t._v("默认")])])]),t._v(" "),v("tbody",[v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("router")]),t._v(" "),v("td",[t._v("是否开启router功能")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("boolean")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("false")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("routerRoot")]),t._v(" "),v("td",[t._v("router basePath")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("string")])])])]),t._v(" "),v("h3",{attrs:{id:"vue-doc-menu组件添加横向收起功能并添加tooltip提示18"}},[t._v("menu组件添加横向收起功能并添加tooltip提示")]),t._v(" "),v("h4",{attrs:{id:"vue-doc-menu属性"}},[t._v("Menu属性")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",{staticStyle:{"text-align":"center"}},[t._v("API")]),t._v(" "),v("th",[t._v("说明")]),t._v(" "),v("th",{staticStyle:{"text-align":"center"}},[t._v("类型")]),t._v(" "),v("th",{staticStyle:{"text-align":"center"}},[t._v("默认")])])]),t._v(" "),v("tbody",[v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("collapse")]),t._v(" "),v("td",[t._v("是否开启collapse功能")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("boolean")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("false")])])])]),t._v(" "),v("h4",{attrs:{id:"vue-doc-menuitemsubmenu属性"}},[t._v("MenuItem&&Submenu 属性")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",{staticStyle:{"text-align":"center"}},[t._v("API")]),t._v(" "),v("th",[t._v("说明")]),t._v(" "),v("th",{staticStyle:{"text-align":"center"}},[t._v("类型")]),t._v(" "),v("th",{staticStyle:{"text-align":"center"}},[t._v("默认")])])]),t._v(" "),v("tbody",[v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("tooltip")]),t._v(" "),v("td",[t._v("收起后提示内容")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("string")])])])]),t._v(" "),v("h3",{attrs:{id:"vue-doc-menu组件添加router功能19"}},[t._v("menu 组件添加router功能")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",{staticStyle:{"text-align":"center"}},[t._v("API")]),t._v(" "),v("th",[t._v("说明")]),t._v(" "),v("th",{staticStyle:{"text-align":"center"}},[t._v("类型")]),t._v(" "),v("th",{staticStyle:{"text-align":"center"}},[t._v("默认")])])]),t._v(" "),v("tbody",[v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("router")]),t._v(" "),v("td",[t._v("是否开启router功能")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("boolean")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("false")])])])]),t._v(" "),v("h3",{attrs:{id:"vue-doc-icon组件添加支持第三方字体功能20"}},[t._v("icon组件添加支持第三方字体功能")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",{staticStyle:{"text-align":"center"}},[t._v("API")]),t._v(" "),v("th",[t._v("说明")]),t._v(" "),v("th",{staticStyle:{"text-align":"center"}},[t._v("类型")]),t._v(" "),v("th",{staticStyle:{"text-align":"center"}},[t._v("默认")])])]),t._v(" "),v("tbody",[v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("prefix")]),t._v(" "),v("td",[t._v("字体class前缀")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("ivu-icon")])])])]),t._v(" "),v("h3",{attrs:{id:"vue-doc-form组件添加动态修改验证功能及重置验证方法21"}},[t._v("form组件 添加动态修改验证功能及重置验证方法")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",{staticStyle:{"text-align":"center"}},[t._v("方法")]),t._v(" "),v("th",[t._v("说明")])])]),t._v(" "),v("tbody",[v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("resetValidate")]),t._v(" "),v("td",[t._v("参数为String重置一个item,多个使用数组,为空重置所有")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("resetFields")]),t._v(" "),v("td",[t._v("规则同上")])])])]),t._v(" "),v("h3",{attrs:{id:"vue-doc-表单验证添加类型any22"}},[t._v("表单验证添加类型 any")]),t._v(" "),v("h3",{attrs:{id:"vue-doc-表单验证正则失效bug23"}},[t._v("表单验证正则失效bug")]),t._v(" "),v("h3",{attrs:{id:"vue-doc-添加tablecolumn组件原table组件改名datagrid默认不打包24"}},[t._v("添加table&column组件,原table组件改名data-grid默认不打包")]),t._v(" "),v("h3",{attrs:{id:"vue-doc-modal添加zindex管理25"}},[t._v("modal添加zindex管理")])]),t._v(" "),v("div",{staticClass:"vue-doc-content-EN"})])}]};var c=v("D8HT")(_,l,!1,function(t){v("F53x")},null,null);e.default=c.exports}});
//# sourceMappingURL=62.e8d65cb6749e0775d1ca.js.map