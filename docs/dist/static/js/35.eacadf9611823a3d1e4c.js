webpackJsonp([35],{"41IX":function(t,s){},"7+Hm":function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=e("go92"),c=e.n(a),o={mixins:[{data:function(){return{showVueDocCode:!1,vueDocCodeCopyText:"copy",vueDocCodeHeight:0}},methods:{vueDocCodeToggle:function(){this.showVueDocCode=!this.showVueDocCode,this.vueDocCodeHeight=this.vueDocCodeHeight||this.$refs.vueDocCodeBox.children[0].offsetHeight,this.$refs.vueDocCodeBox.style.height=this.showVueDocCode?this.vueDocCodeHeight+50+"px":"0px"},vueDocCodeCopy:function(){var t=this,s=new c.a(".vue-doc-code-copy",{text:function(t){return t.nextElementSibling.textContent}});s.on("success",function(e){t.vueDocCodeCopyText="copy success!",setTimeout(function(){t.vueDocCodeCopyText="copy"},1e3),e.clearSelection(),s.destroy()})}},components:{}}],data:function(){return{value:""}}},i={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"vue-doc-wrapper"},[t._m(0),t._v(" "),t._m(1),t._v(" "),e("div",{staticClass:"vue-doc-content"}),t._v(" "),e("div",{staticClass:"vue-doc-content-EN"}),t._v(" "),e("div",{staticClass:"vue-doc-demo"},[[e("Input",{staticStyle:{width:"300px"},attrs:{placeholder:"Enter something..."},model:{value:t.value,callback:function(s){t.value=s},expression:"value"}})]],2),t._v(" "),e("div",{staticClass:"vue-doc-code",class:{"vue-doc-code-show":t.showVueDocCode}},[e("div",{staticClass:"vue-doc-code-copy",on:{click:t.vueDocCodeCopy}},[t._v(t._s(t.vueDocCodeCopyText))]),t._v(" "),e("div",{ref:"vueDocCodeBox",staticClass:"vue-doc-code-content"},[t._m(2)]),t._v(" "),e("div",{staticClass:"vue-doc-code-toggle",on:{click:t.vueDocCodeToggle}},[e("span",{staticClass:"vue-doc-code-toggle-text"},[t._v("</>"+t._s(t.showVueDocCode?"隐藏代码":"显示代码"))]),t._v(" "),e("span",{staticClass:"vue-doc-code-toggle-text-EN"},[t._v("</>"+t._s(t.showVueDocCode?"Hide Code":"Show Code"))])])])])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"vue-doc-title"},[s("h2",{staticClass:"vue-doc-element",attrs:{id:"vue-doc-基础用法1"}},[this._v("基础用法")]),this._v(" "),s("p",{staticClass:"vue-doc-element"},[this._v("基本表单组件，支持 input 和 textarea，并在原生控件基础上进行了功能扩展，可以组合使用。。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"vue-doc-title-EN"},[s("h2",{staticClass:"vue-doc-element",attrs:{id:"vue-doc-buttonsize1"}},[this._v("Button Size")]),this._v(" "),s("p",{staticClass:"vue-doc-element"},[this._v("Button")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("pre",{staticClass:"vue-doc-element"},[e("code",{staticClass:"lang-vue"},[e("span",{staticClass:"hljs-tag"},[t._v("<"),e("span",{staticClass:"hljs-name"},[t._v("template")]),t._v(">")]),t._v("\n    "),e("span",{staticClass:"hljs-tag"},[t._v("<"),e("span",{staticClass:"hljs-name"},[t._v("Input")]),t._v(" "),e("span",{staticClass:"hljs-attr"},[t._v("v-model")]),t._v("="),e("span",{staticClass:"hljs-string"},[t._v('"value"')]),t._v(" "),e("span",{staticClass:"hljs-attr"},[t._v("placeholder")]),t._v("="),e("span",{staticClass:"hljs-string"},[t._v('"Enter something..."')]),t._v(" "),e("span",{staticClass:"hljs-attr"},[t._v("style")]),t._v("="),e("span",{staticClass:"hljs-string"},[t._v('"width: 300px"')]),t._v(" />")]),t._v("\n"),e("span",{staticClass:"hljs-tag"},[t._v("</"),e("span",{staticClass:"hljs-name"},[t._v("template")]),t._v(">")]),t._v("\n"),e("span",{staticClass:"hljs-tag"},[t._v("<"),e("span",{staticClass:"hljs-name"},[t._v("script")]),t._v(">")]),e("span",{staticClass:"javascript"},[t._v("\n    "),e("span",{staticClass:"hljs-keyword"},[t._v("export")]),t._v(" "),e("span",{staticClass:"hljs-keyword"},[t._v("default")]),t._v(" {\n        data () {\n            "),e("span",{staticClass:"hljs-keyword"},[t._v("return")]),t._v(" {\n                "),e("span",{staticClass:"hljs-attr"},[t._v("value")]),t._v(": "),e("span",{staticClass:"hljs-string"},[t._v("''")]),t._v("\n            }\n        }\n    }\n")]),e("span",{staticClass:"hljs-tag"},[t._v("</"),e("span",{staticClass:"hljs-name"},[t._v("script")]),t._v(">")]),t._v("\n")])])}]};var n={mixins:[{data:function(){return{showVueDocCode:!1,vueDocCodeCopyText:"copy",vueDocCodeHeight:0}},methods:{vueDocCodeToggle:function(){this.showVueDocCode=!this.showVueDocCode,this.vueDocCodeHeight=this.vueDocCodeHeight||this.$refs.vueDocCodeBox.children[0].offsetHeight,this.$refs.vueDocCodeBox.style.height=this.showVueDocCode?this.vueDocCodeHeight+50+"px":"0px"},vueDocCodeCopy:function(){var t=this,s=new c.a(".vue-doc-code-copy",{text:function(t){return t.nextElementSibling.textContent}});s.on("success",function(e){t.vueDocCodeCopyText="copy success!",setTimeout(function(){t.vueDocCodeCopyText="copy"},1e3),e.clearSelection(),s.destroy()})}},components:{}}],data:function(){return{value1:"",value2:"",value3:""}}},l={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"vue-doc-wrapper"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),e("div",{staticClass:"vue-doc-content-EN"}),t._v(" "),e("div",{staticClass:"vue-doc-demo"},[[e("Input",{attrs:{size:"large",placeholder:"large size"},model:{value:t.value1,callback:function(s){t.value1=s},expression:"value1"}}),t._v(" "),e("br"),t._v(" "),e("Input",{attrs:{placeholder:"default size"},model:{value:t.value2,callback:function(s){t.value2=s},expression:"value2"}}),t._v(" "),e("br"),t._v(" "),e("Input",{attrs:{size:"small",placeholder:"small size"},model:{value:t.value3,callback:function(s){t.value3=s},expression:"value3"}})]],2),t._v(" "),e("div",{staticClass:"vue-doc-code",class:{"vue-doc-code-show":t.showVueDocCode}},[e("div",{staticClass:"vue-doc-code-copy",on:{click:t.vueDocCodeCopy}},[t._v(t._s(t.vueDocCodeCopyText))]),t._v(" "),e("div",{ref:"vueDocCodeBox",staticClass:"vue-doc-code-content"},[t._m(3)]),t._v(" "),e("div",{staticClass:"vue-doc-code-toggle",on:{click:t.vueDocCodeToggle}},[e("span",{staticClass:"vue-doc-code-toggle-text"},[t._v("</>"+t._s(t.showVueDocCode?"隐藏代码":"显示代码"))]),t._v(" "),e("span",{staticClass:"vue-doc-code-toggle-text-EN"},[t._v("</>"+t._s(t.showVueDocCode?"Hide Code":"Show Code"))])])])])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"vue-doc-title"},[s("h2",{staticClass:"vue-doc-element",attrs:{id:"vue-doc-尺寸1"}},[this._v("尺寸")]),this._v(" "),s("p",{staticClass:"vue-doc-element"},[this._v("输入框有三种尺寸：大、默认（中）、小")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"vue-doc-title-EN"},[s("h2",{staticClass:"vue-doc-element",attrs:{id:"vue-doc-iconshapes1"}},[this._v("icon&shapes")]),this._v(" "),s("p",{staticClass:"vue-doc-element"},[this._v("Button")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"vue-doc-content"},[s("p",{staticClass:"vue-doc-element"},[this._v("通过设置size为large和small设置为大和小尺寸，不设置为默认（中）尺寸。")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("pre",{staticClass:"vue-doc-element"},[e("code",{staticClass:"lang-vue"},[e("span",{staticClass:"hljs-tag"},[t._v("<"),e("span",{staticClass:"hljs-name"},[t._v("template")]),t._v(">")]),t._v("\n    "),e("span",{staticClass:"hljs-tag"},[t._v("<"),e("span",{staticClass:"hljs-name"},[t._v("Input")]),t._v(" "),e("span",{staticClass:"hljs-attr"},[t._v("v-model")]),t._v("="),e("span",{staticClass:"hljs-string"},[t._v('"value1"')]),t._v(" "),e("span",{staticClass:"hljs-attr"},[t._v("size")]),t._v("="),e("span",{staticClass:"hljs-string"},[t._v('"large"')]),t._v(" "),e("span",{staticClass:"hljs-attr"},[t._v("placeholder")]),t._v("="),e("span",{staticClass:"hljs-string"},[t._v('"large size"')]),t._v(" />")]),t._v("\n    "),e("span",{staticClass:"hljs-tag"},[t._v("<"),e("span",{staticClass:"hljs-name"},[t._v("br")]),t._v(">")]),t._v("\n    "),e("span",{staticClass:"hljs-tag"},[t._v("<"),e("span",{staticClass:"hljs-name"},[t._v("Input")]),t._v(" "),e("span",{staticClass:"hljs-attr"},[t._v("v-model")]),t._v("="),e("span",{staticClass:"hljs-string"},[t._v('"value2"')]),t._v(" "),e("span",{staticClass:"hljs-attr"},[t._v("placeholder")]),t._v("="),e("span",{staticClass:"hljs-string"},[t._v('"default size"')]),t._v(" />")]),t._v("\n    "),e("span",{staticClass:"hljs-tag"},[t._v("<"),e("span",{staticClass:"hljs-name"},[t._v("br")]),t._v(">")]),t._v("\n    "),e("span",{staticClass:"hljs-tag"},[t._v("<"),e("span",{staticClass:"hljs-name"},[t._v("Input")]),t._v(" "),e("span",{staticClass:"hljs-attr"},[t._v("v-model")]),t._v("="),e("span",{staticClass:"hljs-string"},[t._v('"value3"')]),t._v(" "),e("span",{staticClass:"hljs-attr"},[t._v("size")]),t._v("="),e("span",{staticClass:"hljs-string"},[t._v('"small"')]),t._v(" "),e("span",{staticClass:"hljs-attr"},[t._v("placeholder")]),t._v("="),e("span",{staticClass:"hljs-string"},[t._v('"small size"')]),t._v(" />")]),t._v("\n"),e("span",{staticClass:"hljs-tag"},[t._v("</"),e("span",{staticClass:"hljs-name"},[t._v("template")]),t._v(">")]),t._v("\n"),e("span",{staticClass:"hljs-tag"},[t._v("<"),e("span",{staticClass:"hljs-name"},[t._v("script")]),t._v(">")]),e("span",{staticClass:"javascript"},[t._v("\n    "),e("span",{staticClass:"hljs-keyword"},[t._v("export")]),t._v(" "),e("span",{staticClass:"hljs-keyword"},[t._v("default")]),t._v(" {\n        data () {\n            "),e("span",{staticClass:"hljs-keyword"},[t._v("return")]),t._v(" {\n                "),e("span",{staticClass:"hljs-attr"},[t._v("value1")]),t._v(": "),e("span",{staticClass:"hljs-string"},[t._v("''")]),t._v(",\n                "),e("span",{staticClass:"hljs-attr"},[t._v("value2")]),t._v(": "),e("span",{staticClass:"hljs-string"},[t._v("''")]),t._v(",\n                "),e("span",{staticClass:"hljs-attr"},[t._v("value3")]),t._v(": "),e("span",{staticClass:"hljs-string"},[t._v("''")]),t._v("\n            }\n        }\n    }\n")]),e("span",{staticClass:"hljs-tag"},[t._v("</"),e("span",{staticClass:"hljs-name"},[t._v("script")]),t._v(">")]),t._v("\n")])])}]};var v={mixins:[{data:function(){return{showVueDocCode:!1,vueDocCodeCopyText:"copy",vueDocCodeHeight:0}},methods:{vueDocCodeToggle:function(){this.showVueDocCode=!this.showVueDocCode,this.vueDocCodeHeight=this.vueDocCodeHeight||this.$refs.vueDocCodeBox.children[0].offsetHeight,this.$refs.vueDocCodeBox.style.height=this.showVueDocCode?this.vueDocCodeHeight+50+"px":"0px"},vueDocCodeCopy:function(){var t=this,s=new c.a(".vue-doc-code-copy",{text:function(t){return t.nextElementSibling.textContent}});s.on("success",function(e){t.vueDocCodeCopyText="copy success!",setTimeout(function(){t.vueDocCodeCopyText="copy"},1e3),e.clearSelection(),s.destroy()})}},components:{demobasic:e("D8HT")(o,i,!1,function(t){e("41IX")},null,null).exports,demosize:e("D8HT")(n,l,!1,function(t){e("TFKa")},null,null).exports}}]},u={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"vue-doc-wrapper"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),e("div",{staticClass:"vue-doc-components"},[e("demobasic"),t._v(" "),e("demosize")],1),t._v(" "),t._m(3),t._v(" "),t._m(4)])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"vue-doc-submenu"},[s("ul",{staticClass:"vue-doc-submenu-list"},[s("li",[s("a",{attrs:{href:"#vue-doc-基础用法1"}},[this._v("基础用法")])]),s("li",[s("a",{attrs:{href:"#vue-doc-尺寸1"}},[this._v("尺寸")])])]),s("ul",{staticClass:"vue-doc-submenu-list-EN"},[s("li",[s("a",{attrs:{href:"#vue-doc-ButtonSize1"}},[this._v("Button Size")])]),s("li",[s("a",{attrs:{href:"#vue-doc-iconshapes1"}},[this._v("icon&shapes")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"vue-doc-title"},[s("h1",{staticClass:"vue-doc-element",attrs:{id:"vue-doc-button按钮1"}},[this._v("Button 按钮")]),this._v(" "),s("p",{staticClass:"vue-doc-element"},[this._v("基础组件，触发业务逻辑时使用。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"vue-doc-title-EN"},[s("h1",{staticClass:"vue-doc-element",attrs:{id:"vue-doc-button1"}},[this._v("Button")]),this._v(" "),s("p",{staticClass:"vue-doc-element"},[this._v("Basic component that is used to trigger bussiness logic.")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"vue-doc-content"},[e("h2",{staticClass:"vue-doc-element",attrs:{id:"vue-doc-api1"}},[t._v("API")]),t._v(" "),e("table",{staticClass:"vue-doc-element"},[e("thead",[e("tr",[e("th",[t._v("属性")]),t._v(" "),e("th",{staticStyle:{"text-align":"right"}},[t._v("说明")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("类型")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("默认值")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("type")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("按钮类型，可选值为primary、ghost、dashed、text、info、success、warning、error或者不设置")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("String")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("-")])])])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"vue-doc-content-EN"},[e("h2",{staticClass:"vue-doc-element",attrs:{id:"vue-doc-api1"}},[t._v("API")]),t._v(" "),e("table",{staticClass:"vue-doc-element"},[e("thead",[e("tr",[e("th",[t._v("Attribute")]),t._v(" "),e("th",{staticStyle:{"text-align":"right"}},[t._v("Explanation")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("Type")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("Default")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("type")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("Button type, options include primary、ghost、dashed、text、info、success、warning、error, optional")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("String")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("-")])])])])])}]};var _=e("D8HT")(v,u,!1,function(t){e("uSL7")},null,null);s.default=_.exports},TFKa:function(t,s){},uSL7:function(t,s){}});
//# sourceMappingURL=35.eacadf9611823a3d1e4c.js.map