webpackJsonp([25],{"7S+6":function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=e("go92"),v=e.n(a),o={mixins:[{data:function(){return{showVueDocCode:!1,vueDocCodeCopyText:"copy",vueDocCodeHeight:0}},methods:{vueDocCodeToggle:function(){this.showVueDocCode=!this.showVueDocCode,this.vueDocCodeHeight=this.vueDocCodeHeight||this.$refs.vueDocCodeBox.children[0].offsetHeight,this.$refs.vueDocCodeBox.style.height=this.showVueDocCode?this.vueDocCodeHeight+50+"px":"0px"},vueDocCodeCopy:function(){var t=this,s=new v.a(".vue-doc-code-copy",{text:function(t){return t.nextElementSibling.textContent}});s.on("success",function(e){t.vueDocCodeCopyText="copy success!",setTimeout(function(){t.vueDocCodeCopyText="copy"},1e3),e.clearSelection(),s.destroy()})}},components:{}}],data:function(){return{value1:25,value2:[20,50],value3:[20,50]}}},c={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"vue-doc-wrapper"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),e("div",{staticClass:"vue-doc-content-EN"}),t._v(" "),e("div",{staticClass:"vue-doc-demo"},[[e("Slider",{model:{value:t.value1,callback:function(s){t.value1=s},expression:"value1"}}),t._v(" "),e("Slider",{attrs:{range:""},model:{value:t.value2,callback:function(s){t.value2=s},expression:"value2"}}),t._v(" "),e("Slider",{attrs:{range:"",disabled:""},model:{value:t.value3,callback:function(s){t.value3=s},expression:"value3"}})]],2),t._v(" "),e("div",{staticClass:"vue-doc-code",class:{"vue-doc-code-show":t.showVueDocCode}},[e("div",{staticClass:"vue-doc-code-copy",on:{click:t.vueDocCodeCopy}},[t._v(t._s(t.vueDocCodeCopyText))]),t._v(" "),e("div",{ref:"vueDocCodeBox",staticClass:"vue-doc-code-content"},[t._m(3)]),t._v(" "),e("div",{staticClass:"vue-doc-code-toggle",on:{click:t.vueDocCodeToggle}},[e("span",{staticClass:"vue-doc-code-toggle-text"},[t._v("</>"+t._s(t.showVueDocCode?"隐藏代码":"显示代码"))]),t._v(" "),e("span",{staticClass:"vue-doc-code-toggle-text-EN"},[t._v("</>"+t._s(t.showVueDocCode?"Hide Code":"Show Code"))])])])])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"vue-doc-title"},[s("h2",{staticClass:"vue-doc-element",attrs:{id:"vue-doc-基础用法1"}},[this._v("基础用法")]),this._v(" "),s("p",{staticClass:"vue-doc-element"},[this._v("null")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"vue-doc-title-EN"},[s("h2",{staticClass:"vue-doc-element",attrs:{id:"vue-doc-buttonsize1"}},[this._v("Button Size")]),this._v(" "),s("p",{staticClass:"vue-doc-element"},[this._v("Button")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"vue-doc-content"},[s("p",{staticClass:"vue-doc-element"},[this._v("滑块的基本用法，可以使用 v-model 双向绑定数据。")]),this._v(" "),s("p",{staticClass:"vue-doc-element"},[this._v("通过设置属性 range 开启双滑块，通过设置属性 disabled 禁用滑块。")]),this._v(" "),s("p",{staticClass:"vue-doc-element"},[this._v("注意，单滑块时，value 格式为数字，当开启双滑块时，value 为长度是2的数组，且每项为数字。")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("pre",{staticClass:"vue-doc-element"},[e("code",{staticClass:"lang-vue"},[e("span",{staticClass:"hljs-tag"},[t._v("<"),e("span",{staticClass:"hljs-name"},[t._v("template")]),t._v(">")]),t._v("\n    "),e("span",{staticClass:"hljs-tag"},[t._v("<"),e("span",{staticClass:"hljs-name"},[t._v("Slider")]),t._v(" "),e("span",{staticClass:"hljs-attr"},[t._v("v-model")]),t._v("="),e("span",{staticClass:"hljs-string"},[t._v('"value1"')]),t._v(">")]),e("span",{staticClass:"hljs-tag"},[t._v("</"),e("span",{staticClass:"hljs-name"},[t._v("Slider")]),t._v(">")]),t._v("\n    "),e("span",{staticClass:"hljs-tag"},[t._v("<"),e("span",{staticClass:"hljs-name"},[t._v("Slider")]),t._v(" "),e("span",{staticClass:"hljs-attr"},[t._v("v-model")]),t._v("="),e("span",{staticClass:"hljs-string"},[t._v('"value2"')]),t._v(" "),e("span",{staticClass:"hljs-attr"},[t._v("range")]),t._v(">")]),e("span",{staticClass:"hljs-tag"},[t._v("</"),e("span",{staticClass:"hljs-name"},[t._v("Slider")]),t._v(">")]),t._v("\n    "),e("span",{staticClass:"hljs-tag"},[t._v("<"),e("span",{staticClass:"hljs-name"},[t._v("Slider")]),t._v(" "),e("span",{staticClass:"hljs-attr"},[t._v("v-model")]),t._v("="),e("span",{staticClass:"hljs-string"},[t._v('"value3"')]),t._v(" "),e("span",{staticClass:"hljs-attr"},[t._v("range")]),t._v(" "),e("span",{staticClass:"hljs-attr"},[t._v("disabled")]),t._v(">")]),e("span",{staticClass:"hljs-tag"},[t._v("</"),e("span",{staticClass:"hljs-name"},[t._v("Slider")]),t._v(">")]),t._v("\n"),e("span",{staticClass:"hljs-tag"},[t._v("</"),e("span",{staticClass:"hljs-name"},[t._v("template")]),t._v(">")]),t._v("\n"),e("span",{staticClass:"hljs-tag"},[t._v("<"),e("span",{staticClass:"hljs-name"},[t._v("script")]),t._v(">")]),e("span",{staticClass:"javascript"},[t._v("\n    "),e("span",{staticClass:"hljs-keyword"},[t._v("export")]),t._v(" "),e("span",{staticClass:"hljs-keyword"},[t._v("default")]),t._v(" {\n        data () {\n            "),e("span",{staticClass:"hljs-keyword"},[t._v("return")]),t._v(" {\n                "),e("span",{staticClass:"hljs-attr"},[t._v("value1")]),t._v(": "),e("span",{staticClass:"hljs-number"},[t._v("25")]),t._v(",\n                "),e("span",{staticClass:"hljs-attr"},[t._v("value2")]),t._v(": ["),e("span",{staticClass:"hljs-number"},[t._v("20")]),t._v(", "),e("span",{staticClass:"hljs-number"},[t._v("50")]),t._v("],\n                "),e("span",{staticClass:"hljs-attr"},[t._v("value3")]),t._v(": ["),e("span",{staticClass:"hljs-number"},[t._v("20")]),t._v(", "),e("span",{staticClass:"hljs-number"},[t._v("50")]),t._v("]\n            }\n        }\n    }\n")]),e("span",{staticClass:"hljs-tag"},[t._v("</"),e("span",{staticClass:"hljs-name"},[t._v("script")]),t._v(">")]),t._v("\n\n")])])}]};var l={mixins:[{data:function(){return{showVueDocCode:!1,vueDocCodeCopyText:"copy",vueDocCodeHeight:0}},methods:{vueDocCodeToggle:function(){this.showVueDocCode=!this.showVueDocCode,this.vueDocCodeHeight=this.vueDocCodeHeight||this.$refs.vueDocCodeBox.children[0].offsetHeight,this.$refs.vueDocCodeBox.style.height=this.showVueDocCode?this.vueDocCodeHeight+50+"px":"0px"},vueDocCodeCopy:function(){var t=this,s=new v.a(".vue-doc-code-copy",{text:function(t){return t.nextElementSibling.textContent}});s.on("success",function(e){t.vueDocCodeCopyText="copy success!",setTimeout(function(){t.vueDocCodeCopyText="copy"},1e3),e.clearSelection(),s.destroy()})}},components:{}}],data:function(){return{value4:30,value5:[20,50]}}},n={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"vue-doc-wrapper"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),e("div",{staticClass:"vue-doc-content-EN"}),t._v(" "),e("div",{staticClass:"vue-doc-demo"},[[e("Slider",{attrs:{step:10},model:{value:t.value4,callback:function(s){t.value4=s},expression:"value4"}}),t._v(" "),e("Slider",{attrs:{step:10,range:""},model:{value:t.value5,callback:function(s){t.value5=s},expression:"value5"}})]],2),t._v(" "),e("div",{staticClass:"vue-doc-code",class:{"vue-doc-code-show":t.showVueDocCode}},[e("div",{staticClass:"vue-doc-code-copy",on:{click:t.vueDocCodeCopy}},[t._v(t._s(t.vueDocCodeCopyText))]),t._v(" "),e("div",{ref:"vueDocCodeBox",staticClass:"vue-doc-code-content"},[t._m(3)]),t._v(" "),e("div",{staticClass:"vue-doc-code-toggle",on:{click:t.vueDocCodeToggle}},[e("span",{staticClass:"vue-doc-code-toggle-text"},[t._v("</>"+t._s(t.showVueDocCode?"隐藏代码":"显示代码"))]),t._v(" "),e("span",{staticClass:"vue-doc-code-toggle-text-EN"},[t._v("</>"+t._s(t.showVueDocCode?"Hide Code":"Show Code"))])])])])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"vue-doc-title"},[s("h2",{staticClass:"vue-doc-element",attrs:{id:"vue-doc-离散值1"}},[this._v("离散值")]),this._v(" "),s("p",{staticClass:"vue-doc-element"},[this._v("null")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"vue-doc-title-EN"},[s("h2",{staticClass:"vue-doc-element",attrs:{id:"vue-doc-buttonsize1"}},[this._v("Button Size")]),this._v(" "),s("p",{staticClass:"vue-doc-element"},[this._v("Button")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"vue-doc-content"},[s("p",{staticClass:"vue-doc-element"},[this._v("通过设置属性 step 可以控制每次滑动的间隔。")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("pre",{staticClass:"vue-doc-element"},[e("code",{staticClass:"lang-vue"},[e("span",{staticClass:"hljs-tag"},[t._v("<"),e("span",{staticClass:"hljs-name"},[t._v("template")]),t._v(">")]),t._v("\n    "),e("span",{staticClass:"hljs-tag"},[t._v("<"),e("span",{staticClass:"hljs-name"},[t._v("Slider")]),t._v(" "),e("span",{staticClass:"hljs-attr"},[t._v("v-model")]),t._v("="),e("span",{staticClass:"hljs-string"},[t._v('"value4"')]),t._v(" "),e("span",{staticClass:"hljs-attr"},[t._v(":step")]),t._v("="),e("span",{staticClass:"hljs-string"},[t._v('"10"')]),t._v(">")]),e("span",{staticClass:"hljs-tag"},[t._v("</"),e("span",{staticClass:"hljs-name"},[t._v("Slider")]),t._v(">")]),t._v("\n    "),e("span",{staticClass:"hljs-tag"},[t._v("<"),e("span",{staticClass:"hljs-name"},[t._v("Slider")]),t._v(" "),e("span",{staticClass:"hljs-attr"},[t._v("v-model")]),t._v("="),e("span",{staticClass:"hljs-string"},[t._v('"value5"')]),t._v(" "),e("span",{staticClass:"hljs-attr"},[t._v(":step")]),t._v("="),e("span",{staticClass:"hljs-string"},[t._v('"10"')]),t._v(" "),e("span",{staticClass:"hljs-attr"},[t._v("range")]),t._v(">")]),e("span",{staticClass:"hljs-tag"},[t._v("</"),e("span",{staticClass:"hljs-name"},[t._v("Slider")]),t._v(">")]),t._v("\n"),e("span",{staticClass:"hljs-tag"},[t._v("</"),e("span",{staticClass:"hljs-name"},[t._v("template")]),t._v(">")]),t._v("\n"),e("span",{staticClass:"hljs-tag"},[t._v("<"),e("span",{staticClass:"hljs-name"},[t._v("script")]),t._v(">")]),e("span",{staticClass:"javascript"},[t._v("\n    "),e("span",{staticClass:"hljs-keyword"},[t._v("export")]),t._v(" "),e("span",{staticClass:"hljs-keyword"},[t._v("default")]),t._v(" {\n        data () {\n            "),e("span",{staticClass:"hljs-keyword"},[t._v("return")]),t._v(" {\n                "),e("span",{staticClass:"hljs-attr"},[t._v("value4")]),t._v(": "),e("span",{staticClass:"hljs-number"},[t._v("30")]),t._v(",\n                "),e("span",{staticClass:"hljs-attr"},[t._v("value5")]),t._v(": ["),e("span",{staticClass:"hljs-number"},[t._v("20")]),t._v(", "),e("span",{staticClass:"hljs-number"},[t._v("50")]),t._v("]\n            }\n        }\n    }\n")]),e("span",{staticClass:"hljs-tag"},[t._v("</"),e("span",{staticClass:"hljs-name"},[t._v("script")]),t._v(">")]),t._v("\n\n")])])}]};var i={mixins:[{data:function(){return{showVueDocCode:!1,vueDocCodeCopyText:"copy",vueDocCodeHeight:0}},methods:{vueDocCodeToggle:function(){this.showVueDocCode=!this.showVueDocCode,this.vueDocCodeHeight=this.vueDocCodeHeight||this.$refs.vueDocCodeBox.children[0].offsetHeight,this.$refs.vueDocCodeBox.style.height=this.showVueDocCode?this.vueDocCodeHeight+50+"px":"0px"},vueDocCodeCopy:function(){var t=this,s=new v.a(".vue-doc-code-copy",{text:function(t){return t.nextElementSibling.textContent}});s.on("success",function(e){t.vueDocCodeCopyText="copy success!",setTimeout(function(){t.vueDocCodeCopyText="copy"},1e3),e.clearSelection(),s.destroy()})}},components:{}}],data:function(){return{value6:30,value7:[20,50]}}},_={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"vue-doc-wrapper"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),e("div",{staticClass:"vue-doc-content-EN"}),t._v(" "),e("div",{staticClass:"vue-doc-demo"},[[e("Slider",{attrs:{step:10,"show-stops":""},model:{value:t.value6,callback:function(s){t.value6=s},expression:"value6"}}),t._v(" "),e("Slider",{attrs:{step:10,"show-stops":"",range:""},model:{value:t.value7,callback:function(s){t.value7=s},expression:"value7"}})]],2),t._v(" "),e("div",{staticClass:"vue-doc-code",class:{"vue-doc-code-show":t.showVueDocCode}},[e("div",{staticClass:"vue-doc-code-copy",on:{click:t.vueDocCodeCopy}},[t._v(t._s(t.vueDocCodeCopyText))]),t._v(" "),e("div",{ref:"vueDocCodeBox",staticClass:"vue-doc-code-content"},[t._m(3)]),t._v(" "),e("div",{staticClass:"vue-doc-code-toggle",on:{click:t.vueDocCodeToggle}},[e("span",{staticClass:"vue-doc-code-toggle-text"},[t._v("</>"+t._s(t.showVueDocCode?"隐藏代码":"显示代码"))]),t._v(" "),e("span",{staticClass:"vue-doc-code-toggle-text-EN"},[t._v("</>"+t._s(t.showVueDocCode?"Hide Code":"Show Code"))])])])])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"vue-doc-title"},[s("h2",{staticClass:"vue-doc-element",attrs:{id:"vue-doc-显示间断点1"}},[this._v("显示间断点")]),this._v(" "),s("p",{staticClass:"vue-doc-element"},[this._v("null")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"vue-doc-title-EN"},[s("h2",{staticClass:"vue-doc-element",attrs:{id:"vue-doc-buttonsize1"}},[this._v("Button Size")]),this._v(" "),s("p",{staticClass:"vue-doc-element"},[this._v("Button")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"vue-doc-content"},[s("p",{staticClass:"vue-doc-element"},[this._v("通过设置属性 show-stops 可以显示间断点，建议在 step 间隔不密集时使用。")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("pre",{staticClass:"vue-doc-element"},[e("code",{staticClass:"lang-vue"},[e("span",{staticClass:"hljs-tag"},[t._v("<"),e("span",{staticClass:"hljs-name"},[t._v("template")]),t._v(">")]),t._v("\n    "),e("span",{staticClass:"hljs-tag"},[t._v("<"),e("span",{staticClass:"hljs-name"},[t._v("Slider")]),t._v(" "),e("span",{staticClass:"hljs-attr"},[t._v("v-model")]),t._v("="),e("span",{staticClass:"hljs-string"},[t._v('"value6"')]),t._v(" "),e("span",{staticClass:"hljs-attr"},[t._v(":step")]),t._v("="),e("span",{staticClass:"hljs-string"},[t._v('"10"')]),t._v(" "),e("span",{staticClass:"hljs-attr"},[t._v("show-stops")]),t._v(">")]),e("span",{staticClass:"hljs-tag"},[t._v("</"),e("span",{staticClass:"hljs-name"},[t._v("Slider")]),t._v(">")]),t._v("\n    "),e("span",{staticClass:"hljs-tag"},[t._v("<"),e("span",{staticClass:"hljs-name"},[t._v("Slider")]),t._v(" "),e("span",{staticClass:"hljs-attr"},[t._v("v-model")]),t._v("="),e("span",{staticClass:"hljs-string"},[t._v('"value7"')]),t._v(" "),e("span",{staticClass:"hljs-attr"},[t._v(":step")]),t._v("="),e("span",{staticClass:"hljs-string"},[t._v('"10"')]),t._v(" "),e("span",{staticClass:"hljs-attr"},[t._v("show-stops")]),t._v(" "),e("span",{staticClass:"hljs-attr"},[t._v("range")]),t._v(">")]),e("span",{staticClass:"hljs-tag"},[t._v("</"),e("span",{staticClass:"hljs-name"},[t._v("Slider")]),t._v(">")]),t._v("\n"),e("span",{staticClass:"hljs-tag"},[t._v("</"),e("span",{staticClass:"hljs-name"},[t._v("template")]),t._v(">")]),t._v("\n"),e("span",{staticClass:"hljs-tag"},[t._v("<"),e("span",{staticClass:"hljs-name"},[t._v("script")]),t._v(">")]),e("span",{staticClass:"javascript"},[t._v("\n    "),e("span",{staticClass:"hljs-keyword"},[t._v("export")]),t._v(" "),e("span",{staticClass:"hljs-keyword"},[t._v("default")]),t._v(" {\n        data () {\n            "),e("span",{staticClass:"hljs-keyword"},[t._v("return")]),t._v(" {\n                "),e("span",{staticClass:"hljs-attr"},[t._v("value6")]),t._v(": "),e("span",{staticClass:"hljs-number"},[t._v("30")]),t._v(",\n                "),e("span",{staticClass:"hljs-attr"},[t._v("value7")]),t._v(": ["),e("span",{staticClass:"hljs-number"},[t._v("20")]),t._v(", "),e("span",{staticClass:"hljs-number"},[t._v("50")]),t._v("]\n            }\n        }\n    }\n")]),e("span",{staticClass:"hljs-tag"},[t._v("</"),e("span",{staticClass:"hljs-name"},[t._v("script")]),t._v(">")]),t._v("\n\n")])])}]};var d={mixins:[{data:function(){return{showVueDocCode:!1,vueDocCodeCopyText:"copy",vueDocCodeHeight:0}},methods:{vueDocCodeToggle:function(){this.showVueDocCode=!this.showVueDocCode,this.vueDocCodeHeight=this.vueDocCodeHeight||this.$refs.vueDocCodeBox.children[0].offsetHeight,this.$refs.vueDocCodeBox.style.height=this.showVueDocCode?this.vueDocCodeHeight+50+"px":"0px"},vueDocCodeCopy:function(){var t=this,s=new v.a(".vue-doc-code-copy",{text:function(t){return t.nextElementSibling.textContent}});s.on("success",function(e){t.vueDocCodeCopyText="copy success!",setTimeout(function(){t.vueDocCodeCopyText="copy"},1e3),e.clearSelection(),s.destroy()})}},components:{}}],data:function(){return{value8:25}}},u={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"vue-doc-wrapper"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),e("div",{staticClass:"vue-doc-content-EN"}),t._v(" "),e("div",{staticClass:"vue-doc-demo"},[[e("Slider",{attrs:{"show-input":""},model:{value:t.value8,callback:function(s){t.value8=s},expression:"value8"}})]],2),t._v(" "),e("div",{staticClass:"vue-doc-code",class:{"vue-doc-code-show":t.showVueDocCode}},[e("div",{staticClass:"vue-doc-code-copy",on:{click:t.vueDocCodeCopy}},[t._v(t._s(t.vueDocCodeCopyText))]),t._v(" "),e("div",{ref:"vueDocCodeBox",staticClass:"vue-doc-code-content"},[t._m(3)]),t._v(" "),e("div",{staticClass:"vue-doc-code-toggle",on:{click:t.vueDocCodeToggle}},[e("span",{staticClass:"vue-doc-code-toggle-text"},[t._v("</>"+t._s(t.showVueDocCode?"隐藏代码":"显示代码"))]),t._v(" "),e("span",{staticClass:"vue-doc-code-toggle-text-EN"},[t._v("</>"+t._s(t.showVueDocCode?"Hide Code":"Show Code"))])])])])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"vue-doc-title"},[s("h2",{staticClass:"vue-doc-element",attrs:{id:"vue-doc-带有输入框1"}},[this._v("带有输入框")]),this._v(" "),s("p",{staticClass:"vue-doc-element"},[this._v("null")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"vue-doc-title-EN"},[s("h2",{staticClass:"vue-doc-element",attrs:{id:"vue-doc-buttonsize1"}},[this._v("Button Size")]),this._v(" "),s("p",{staticClass:"vue-doc-element"},[this._v("Button")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"vue-doc-content"},[s("p",{staticClass:"vue-doc-element"},[this._v("通过设置属性 show-input 可以显示数字输入框，配合使用，仅在单滑块模式下有效。")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("pre",{staticClass:"vue-doc-element"},[e("code",{staticClass:"lang-vue"},[e("span",{staticClass:"hljs-tag"},[t._v("<"),e("span",{staticClass:"hljs-name"},[t._v("template")]),t._v(">")]),t._v("\n    "),e("span",{staticClass:"hljs-tag"},[t._v("<"),e("span",{staticClass:"hljs-name"},[t._v("Slider")]),t._v(" "),e("span",{staticClass:"hljs-attr"},[t._v("v-model")]),t._v("="),e("span",{staticClass:"hljs-string"},[t._v('"value8"')]),t._v(" "),e("span",{staticClass:"hljs-attr"},[t._v("show-input")]),t._v(">")]),e("span",{staticClass:"hljs-tag"},[t._v("</"),e("span",{staticClass:"hljs-name"},[t._v("Slider")]),t._v(">")]),t._v("\n"),e("span",{staticClass:"hljs-tag"},[t._v("</"),e("span",{staticClass:"hljs-name"},[t._v("template")]),t._v(">")]),t._v("\n"),e("span",{staticClass:"hljs-tag"},[t._v("<"),e("span",{staticClass:"hljs-name"},[t._v("script")]),t._v(">")]),e("span",{staticClass:"javascript"},[t._v("\n    "),e("span",{staticClass:"hljs-keyword"},[t._v("export")]),t._v(" "),e("span",{staticClass:"hljs-keyword"},[t._v("default")]),t._v(" {\n        data () {\n            "),e("span",{staticClass:"hljs-keyword"},[t._v("return")]),t._v(" {\n                "),e("span",{staticClass:"hljs-attr"},[t._v("value8")]),t._v(": "),e("span",{staticClass:"hljs-number"},[t._v("25")]),t._v("\n            }\n        }\n    }\n")]),e("span",{staticClass:"hljs-tag"},[t._v("</"),e("span",{staticClass:"hljs-name"},[t._v("script")]),t._v(">")]),t._v("\n\n")])])}]};var r={mixins:[{data:function(){return{showVueDocCode:!1,vueDocCodeCopyText:"copy",vueDocCodeHeight:0}},methods:{vueDocCodeToggle:function(){this.showVueDocCode=!this.showVueDocCode,this.vueDocCodeHeight=this.vueDocCodeHeight||this.$refs.vueDocCodeBox.children[0].offsetHeight,this.$refs.vueDocCodeBox.style.height=this.showVueDocCode?this.vueDocCodeHeight+50+"px":"0px"},vueDocCodeCopy:function(){var t=this,s=new v.a(".vue-doc-code-copy",{text:function(t){return t.nextElementSibling.textContent}});s.on("success",function(e){t.vueDocCodeCopyText="copy success!",setTimeout(function(){t.vueDocCodeCopyText="copy"},1e3),e.clearSelection(),s.destroy()})}},components:{}}],data:function(){return{value9:25,value10:25}},methods:{format:function(t){return"Progress: "+t+"%"},hideFormat:function(){return null}}},h={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"vue-doc-wrapper"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),e("div",{staticClass:"vue-doc-content-EN"}),t._v(" "),e("div",{staticClass:"vue-doc-demo"},[[e("Slider",{attrs:{"tip-format":t.format},model:{value:t.value9,callback:function(s){t.value9=s},expression:"value9"}}),t._v(" "),e("Slider",{attrs:{"tip-format":t.hideFormat},model:{value:t.value10,callback:function(s){t.value10=s},expression:"value10"}})]],2),t._v(" "),e("div",{staticClass:"vue-doc-code",class:{"vue-doc-code-show":t.showVueDocCode}},[e("div",{staticClass:"vue-doc-code-copy",on:{click:t.vueDocCodeCopy}},[t._v(t._s(t.vueDocCodeCopyText))]),t._v(" "),e("div",{ref:"vueDocCodeBox",staticClass:"vue-doc-code-content"},[t._m(3)]),t._v(" "),e("div",{staticClass:"vue-doc-code-toggle",on:{click:t.vueDocCodeToggle}},[e("span",{staticClass:"vue-doc-code-toggle-text"},[t._v("</>"+t._s(t.showVueDocCode?"隐藏代码":"显示代码"))]),t._v(" "),e("span",{staticClass:"vue-doc-code-toggle-text-EN"},[t._v("</>"+t._s(t.showVueDocCode?"Hide Code":"Show Code"))])])])])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"vue-doc-title"},[s("h2",{staticClass:"vue-doc-element",attrs:{id:"vue-doc-自定义提示1"}},[this._v("自定义提示")]),this._v(" "),s("p",{staticClass:"vue-doc-element"},[this._v("null")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"vue-doc-title-EN"},[s("h2",{staticClass:"vue-doc-element",attrs:{id:"vue-doc-buttonsize1"}},[this._v("Button Size")]),this._v(" "),s("p",{staticClass:"vue-doc-element"},[this._v("Button")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"vue-doc-content"},[s("p",{staticClass:"vue-doc-element"},[this._v("Slider 会把当前值传给 tip-format，并在 Tooltip 中显示 tip-format 的返回值，若为 null，则隐藏 Tooltip。")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("pre",{staticClass:"vue-doc-element"},[e("code",{staticClass:"lang-vue"},[e("span",{staticClass:"hljs-tag"},[t._v("<"),e("span",{staticClass:"hljs-name"},[t._v("template")]),t._v(">")]),t._v("\n    "),e("span",{staticClass:"hljs-tag"},[t._v("<"),e("span",{staticClass:"hljs-name"},[t._v("Slider")]),t._v(" "),e("span",{staticClass:"hljs-attr"},[t._v("v-model")]),t._v("="),e("span",{staticClass:"hljs-string"},[t._v('"value9"')]),t._v(" "),e("span",{staticClass:"hljs-attr"},[t._v(":tip-format")]),t._v("="),e("span",{staticClass:"hljs-string"},[t._v('"format"')]),t._v(">")]),e("span",{staticClass:"hljs-tag"},[t._v("</"),e("span",{staticClass:"hljs-name"},[t._v("Slider")]),t._v(">")]),t._v("\n    "),e("span",{staticClass:"hljs-tag"},[t._v("<"),e("span",{staticClass:"hljs-name"},[t._v("Slider")]),t._v(" "),e("span",{staticClass:"hljs-attr"},[t._v("v-model")]),t._v("="),e("span",{staticClass:"hljs-string"},[t._v('"value10"')]),t._v(" "),e("span",{staticClass:"hljs-attr"},[t._v(":tip-format")]),t._v("="),e("span",{staticClass:"hljs-string"},[t._v('"hideFormat"')]),t._v(">")]),e("span",{staticClass:"hljs-tag"},[t._v("</"),e("span",{staticClass:"hljs-name"},[t._v("Slider")]),t._v(">")]),t._v("\n"),e("span",{staticClass:"hljs-tag"},[t._v("</"),e("span",{staticClass:"hljs-name"},[t._v("template")]),t._v(">")]),t._v("\n"),e("span",{staticClass:"hljs-tag"},[t._v("<"),e("span",{staticClass:"hljs-name"},[t._v("script")]),t._v(">")]),e("span",{staticClass:"javascript"},[t._v("\n    "),e("span",{staticClass:"hljs-keyword"},[t._v("export")]),t._v(" "),e("span",{staticClass:"hljs-keyword"},[t._v("default")]),t._v(" {\n        data () {\n            "),e("span",{staticClass:"hljs-keyword"},[t._v("return")]),t._v(" {\n                "),e("span",{staticClass:"hljs-attr"},[t._v("value9")]),t._v(": "),e("span",{staticClass:"hljs-number"},[t._v("25")]),t._v(",\n                "),e("span",{staticClass:"hljs-attr"},[t._v("value10")]),t._v(": "),e("span",{staticClass:"hljs-number"},[t._v("25")]),t._v("\n            }\n        },\n        "),e("span",{staticClass:"hljs-attr"},[t._v("methods")]),t._v(": {\n            format (val) {\n                "),e("span",{staticClass:"hljs-keyword"},[t._v("return")]),t._v(" "),e("span",{staticClass:"hljs-string"},[t._v("'Progress: '")]),t._v(" + val + "),e("span",{staticClass:"hljs-string"},[t._v("'%'")]),t._v(";\n            },\n            hideFormat () {\n                "),e("span",{staticClass:"hljs-keyword"},[t._v("return")]),t._v(" "),e("span",{staticClass:"hljs-literal"},[t._v("null")]),t._v(";\n            }\n        }\n    }\n")]),e("span",{staticClass:"hljs-tag"},[t._v("</"),e("span",{staticClass:"hljs-name"},[t._v("script")]),t._v(">")]),t._v("\n\n")])])}]};var C={mixins:[{data:function(){return{showVueDocCode:!1,vueDocCodeCopyText:"copy",vueDocCodeHeight:0}},methods:{vueDocCodeToggle:function(){this.showVueDocCode=!this.showVueDocCode,this.vueDocCodeHeight=this.vueDocCodeHeight||this.$refs.vueDocCodeBox.children[0].offsetHeight,this.$refs.vueDocCodeBox.style.height=this.showVueDocCode?this.vueDocCodeHeight+50+"px":"0px"},vueDocCodeCopy:function(){var t=this,s=new v.a(".vue-doc-code-copy",{text:function(t){return t.nextElementSibling.textContent}});s.on("success",function(e){t.vueDocCodeCopyText="copy success!",setTimeout(function(){t.vueDocCodeCopyText="copy"},1e3),e.clearSelection(),s.destroy()})}},components:{demobasic:e("D8HT")(o,c,!1,function(t){e("x5m5")},null,null).exports,demobasic0:e("D8HT")(l,n,!1,function(t){e("iReH")},null,null).exports,demobasic1:e("D8HT")(i,_,!1,function(t){e("XdPU")},null,null).exports,demobasic2:e("D8HT")(d,u,!1,function(t){e("a/xR")},null,null).exports,demobasic3:e("D8HT")(r,h,!1,function(t){e("cgBA")},null,null).exports}}]},p={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"vue-doc-wrapper"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),e("div",{staticClass:"vue-doc-components"},[e("demobasic"),t._v(" "),e("demobasic0"),t._v(" "),e("demobasic1"),t._v(" "),e("demobasic2"),t._v(" "),e("demobasic3")],1),t._v(" "),t._m(3),t._v(" "),t._m(4)])},staticRenderFns:[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"vue-doc-submenu"},[e("ul",{staticClass:"vue-doc-submenu-list"},[e("li",[e("a",{attrs:{href:"#vue-doc-基础用法1"}},[t._v("基础用法")])]),e("li",[e("a",{attrs:{href:"#vue-doc-离散值1"}},[t._v("离散值")])]),e("li",[e("a",{attrs:{href:"#vue-doc-显示间断点1"}},[t._v("显示间断点")])]),e("li",[e("a",{attrs:{href:"#vue-doc-带有输入框1"}},[t._v("带有输入框")])]),e("li",[e("a",{attrs:{href:"#vue-doc-自定义提示1"}},[t._v("自定义提示")])])]),e("ul",{staticClass:"vue-doc-submenu-list-EN"},[e("li",[e("a",{attrs:{href:"#vue-doc-ButtonSize1"}},[t._v("Button Size")])]),e("li",[e("a",{attrs:{href:"#vue-doc-ButtonSize1"}},[t._v("Button Size")])]),e("li",[e("a",{attrs:{href:"#vue-doc-ButtonSize1"}},[t._v("Button Size")])]),e("li",[e("a",{attrs:{href:"#vue-doc-ButtonSize1"}},[t._v("Button Size")])]),e("li",[e("a",{attrs:{href:"#vue-doc-ButtonSize1"}},[t._v("Button Size")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"vue-doc-title"},[s("h1",{staticClass:"vue-doc-element",attrs:{id:"vue-doc-slider滑块1"}},[this._v("Slider 滑块")]),this._v(" "),s("p",{staticClass:"vue-doc-element"},[this._v("滑动输入器，用于在数值区间/自定义区间内进行选择，支持连续或离散值。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"vue-doc-title-EN"},[s("h1",{staticClass:"vue-doc-element",attrs:{id:"vue-doc-button1"}},[this._v("Button")]),this._v(" "),s("p",{staticClass:"vue-doc-element"},[this._v("Basic component that is used to trigger bussiness logic.")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"vue-doc-content"},[e("h2",{staticClass:"vue-doc-element",attrs:{id:"vue-doc-api1"}},[t._v("API")]),t._v(" "),e("table",{staticClass:"vue-doc-element"},[e("thead",[e("tr",[e("th",[t._v("属性")]),t._v(" "),e("th",[t._v("说明")]),t._v(" "),e("th",[t._v("类型")]),t._v(" "),e("th",[t._v("默认值")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("value")]),t._v(" "),e("td",[t._v("滑块选定的值，可以使用 v-model 双向绑定数据。普通模式下，数据格式为数字，在双滑块模式下，数据格式为长度是2的数组，且每项都为数字")]),t._v(" "),e("td",[t._v("Number / Array")]),t._v(" "),e("td",[t._v("0")])]),t._v(" "),e("tr",[e("td",[t._v("min")]),t._v(" "),e("td",[t._v("最小值")]),t._v(" "),e("td",[t._v("Number")]),t._v(" "),e("td",[t._v("0")])]),t._v(" "),e("tr",[e("td",[t._v("max")]),t._v(" "),e("td",[t._v("最大值")]),t._v(" "),e("td",[t._v("Number")]),t._v(" "),e("td",[t._v("100")])]),t._v(" "),e("tr",[e("td",[t._v("step")]),t._v(" "),e("td",[t._v("步长，取值建议能被（max - min）整除")]),t._v(" "),e("td",[t._v("Number")]),t._v(" "),e("td",[t._v("1")])]),t._v(" "),e("tr",[e("td",[t._v("disabled")]),t._v(" "),e("td",[t._v("是否禁用滑块")]),t._v(" "),e("td",[t._v("Boolean")]),t._v(" "),e("td",[t._v("false")])]),t._v(" "),e("tr",[e("td",[t._v("range")]),t._v(" "),e("td",[t._v("是否开启双滑块模式")]),t._v(" "),e("td",[t._v("Boolean")]),t._v(" "),e("td",[t._v("false")])]),t._v(" "),e("tr",[e("td",[t._v("show-input")]),t._v(" "),e("td",[t._v("是否显示数字输入框，仅在单滑块模式下有效")]),t._v(" "),e("td",[t._v("Boolean")]),t._v(" "),e("td",[t._v("false")])]),t._v(" "),e("tr",[e("td",[t._v("show-stops")]),t._v(" "),e("td",[t._v("是否显示间断点，建议在 step 不密集时使用")]),t._v(" "),e("td",[t._v("Boolean")]),t._v(" "),e("td",[t._v("false")])]),t._v(" "),e("tr",[e("td",[t._v("show-tip")]),t._v(" "),e("td",[t._v("提示的显示控制，可选值为 hover（悬停，默认）、always（总是可见）、never（不可见）")]),t._v(" "),e("td",[t._v("String")]),t._v(" "),e("td",[t._v("hover")])]),t._v(" "),e("tr",[e("td",[t._v("tip-format")]),t._v(" "),e("td",[t._v("Slider 会把当前值传给 tip-format，并在 Tooltip 中显示 tip-format 的返回值，若为 null，则隐藏 Tooltip")]),t._v(" "),e("td",[t._v("Function")]),t._v(" "),e("td",[t._v("value")])]),t._v(" "),e("tr",[e("td",[t._v("input-size")]),t._v(" "),e("td",[t._v("数字输入框的尺寸，可选值为large、small、default或者不填，仅在开启 show-input 时有效")]),t._v(" "),e("td",[t._v("String")]),t._v(" "),e("td",[t._v("default")])])])]),t._v(" "),e("table",{staticClass:"vue-doc-element"},[e("thead",[e("tr",[e("th",[t._v("事件名")]),t._v(" "),e("th",[t._v("说明")]),t._v(" "),e("th",[t._v("返回值")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("on-change")]),t._v(" "),e("td",[t._v("在松开滑动时触发，返回当前的选值，在滑动过程中不会触发")]),t._v(" "),e("td",[t._v("value")])]),t._v(" "),e("tr",[e("td",[t._v("on-input")]),t._v(" "),e("td",[t._v("滑动条数据变化时触发，返回当前的选值，在滑动过程中实时触发")]),t._v(" "),e("td",[t._v("value")])])])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"vue-doc-content-EN"},[e("h2",{staticClass:"vue-doc-element",attrs:{id:"vue-doc-api1"}},[t._v("API")]),t._v(" "),e("table",{staticClass:"vue-doc-element"},[e("thead",[e("tr",[e("th",[t._v("Attribute")]),t._v(" "),e("th",{staticStyle:{"text-align":"right"}},[t._v("Explanation")]),t._v(" "),e("th",[t._v("Type")]),t._v(" "),e("th",[t._v("Default")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("type")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("Button type, options include primary、ghost、dashed、text、info、success、warning、error, optional")]),t._v(" "),e("td",[t._v("String")]),t._v(" "),e("td",[t._v("-")])])])])])}]};var m=e("D8HT")(C,p,!1,function(t){e("oSyX")},null,null);s.default=m.exports},XdPU:function(t,s){},"a/xR":function(t,s){},cgBA:function(t,s){},iReH:function(t,s){},oSyX:function(t,s){},x5m5:function(t,s){}});
//# sourceMappingURL=25.969df57495b31cd6202b.js.map