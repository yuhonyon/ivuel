webpackJsonp([21],{"/63v":function(s,t){},"2mar":function(s,t){},"9Tf5":function(s,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=e("go92"),n=e.n(a),l={mixins:[{data:function(){return{showVueDocCode:!1,vueDocCodeCopyText:"copy",vueDocCodeHeight:0}},methods:{vueDocCodeToggle:function(){this.showVueDocCode=!this.showVueDocCode,this.vueDocCodeHeight=this.vueDocCodeHeight||this.$refs.vueDocCodeBox.children[0].offsetHeight,this.$refs.vueDocCodeBox.style.height=this.showVueDocCode?this.vueDocCodeHeight+50+"px":"0px"},vueDocCodeCopy:function(){var s=this,t=new n.a(".vue-doc-code-copy",{text:function(s){return s.nextElementSibling.textContent}});t.on("success",function(e){s.vueDocCodeCopyText="copy success!",setTimeout(function(){s.vueDocCodeCopyText="copy"},1e3),e.clearSelection(),t.destroy()})}},components:{}}],data:function(){return{cityList:[{value:!0,label:"New York1"},{value:"London",label:"London1"},{value:"Sydney",label:"Sydney1"},{value:"Ottawa",label:"Ottawa1"},{value:"Paris",label:"Paris1"},{value:"Canberra",label:"Canberra1"}],model1:!0}},methods:{handlerSelected:function(){console.log("select",this.model1)},handlerChanged:function(){console.log("change",this.model1)}}},c={render:function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{staticClass:"vue-doc-wrapper"},[s._m(0),s._v(" "),s._m(1),s._v(" "),e("div",{staticClass:"vue-doc-content"}),s._v(" "),e("div",{staticClass:"vue-doc-content-EN"}),s._v(" "),e("div",{staticClass:"vue-doc-demo"},[[e("Select",{staticStyle:{width:"200px"},on:{"on-change":s.handlerChanged,"on-select":s.handlerSelected},model:{value:s.model1,callback:function(t){s.model1=t},expression:"model1"}},[e("Option",{attrs:{value:""}},[s._v("空选项")]),s._v(" "),s._l(s.cityList,function(t){return e("Option",{key:t.value,attrs:{value:t.value}},[s._v(s._s(t.label))])})],2)]],2),s._v(" "),e("div",{staticClass:"vue-doc-code",class:{"vue-doc-code-show":s.showVueDocCode}},[e("div",{staticClass:"vue-doc-code-copy",on:{click:s.vueDocCodeCopy}},[s._v(s._s(s.vueDocCodeCopyText))]),s._v(" "),e("div",{ref:"vueDocCodeBox",staticClass:"vue-doc-code-content"},[s._m(2)]),s._v(" "),e("div",{staticClass:"vue-doc-code-toggle",on:{click:s.vueDocCodeToggle}},[e("span",{staticClass:"vue-doc-code-toggle-text"},[s._v("</>"+s._s(s.showVueDocCode?"隐藏代码":"显示代码"))]),s._v(" "),e("span",{staticClass:"vue-doc-code-toggle-text-EN"},[s._v("</>"+s._s(s.showVueDocCode?"Hide Code":"Show Code"))])])])])},staticRenderFns:[function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"vue-doc-title"},[t("h2",{staticClass:"vue-doc-element",attrs:{id:"vue-doc-按钮尺寸1"}},[this._v("按钮尺寸")]),this._v(" "),t("p",{staticClass:"vue-doc-element"},[this._v("按钮有六种类型：主按钮、次按钮、虚线按钮、危险按钮。")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"vue-doc-title-EN"},[t("h2",{staticClass:"vue-doc-element",attrs:{id:"vue-doc-buttonsize1"}},[this._v("Button Size")]),this._v(" "),t("p",{staticClass:"vue-doc-element"},[this._v("Button")])])},function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("pre",{staticClass:"vue-doc-element"},[e("code",{staticClass:"lang-vue"},[e("span",{staticClass:"xml"},[e("span",{staticClass:"hljs-tag"},[s._v("<"),e("span",{staticClass:"hljs-name"},[s._v("template")]),s._v(">")]),s._v("\n    "),e("span",{staticClass:"hljs-tag"},[s._v("<"),e("span",{staticClass:"hljs-name"},[s._v("Select")]),s._v(" "),e("span",{staticClass:"hljs-attr"},[s._v("v-model")]),s._v("="),e("span",{staticClass:"hljs-string"},[s._v('"model1"')]),s._v(" "),e("span",{staticClass:"hljs-attr"},[s._v("style")]),s._v("="),e("span",{staticClass:"hljs-string"},[s._v('"width:200px"')]),s._v(" @"),e("span",{staticClass:"hljs-attr"},[s._v("on-change")]),s._v("="),e("span",{staticClass:"hljs-string"},[s._v('"handlerChanged"')]),s._v(" @"),e("span",{staticClass:"hljs-attr"},[s._v("on-select")]),s._v("="),e("span",{staticClass:"hljs-string"},[s._v('"handlerSelected"')]),s._v(">")]),s._v("\n        "),e("span",{staticClass:"hljs-tag"},[s._v("<"),e("span",{staticClass:"hljs-name"},[s._v("Option")]),s._v(" "),e("span",{staticClass:"hljs-attr"},[s._v("value")]),s._v("="),e("span",{staticClass:"hljs-string"},[s._v('""')]),s._v(" >")]),s._v("空选项"),e("span",{staticClass:"hljs-tag"},[s._v("</"),e("span",{staticClass:"hljs-name"},[s._v("Option")]),s._v(">")]),s._v("\n        "),e("span",{staticClass:"hljs-tag"},[s._v("<"),e("span",{staticClass:"hljs-name"},[s._v("Option")]),s._v(" "),e("span",{staticClass:"hljs-attr"},[s._v("v-for")]),s._v("="),e("span",{staticClass:"hljs-string"},[s._v('"item in cityList"')]),s._v(" "),e("span",{staticClass:"hljs-attr"},[s._v(":value")]),s._v("="),e("span",{staticClass:"hljs-string"},[s._v('"item.value"')]),s._v(" "),e("span",{staticClass:"hljs-attr"},[s._v(":key")]),s._v("="),e("span",{staticClass:"hljs-string"},[s._v('"item.value"')]),s._v(">")])]),e("span",{staticClass:"hljs-template-variable"},[e("span",[s._v("{{")]),s._v(" item.label }}")]),e("span",{staticClass:"xml"},[e("span",{staticClass:"hljs-tag"},[s._v("</"),e("span",{staticClass:"hljs-name"},[s._v("Option")]),s._v(">")]),s._v("\n    "),e("span",{staticClass:"hljs-tag"},[s._v("</"),e("span",{staticClass:"hljs-name"},[s._v("Select")]),s._v(">")]),s._v("\n"),e("span",{staticClass:"hljs-tag"},[s._v("</"),e("span",{staticClass:"hljs-name"},[s._v("template")]),s._v(">")]),s._v("\n"),e("span",{staticClass:"hljs-tag"},[s._v("<"),e("span",{staticClass:"hljs-name"},[s._v("script")]),s._v(">")]),e("span",{staticClass:"javascript"},[s._v("\n    "),e("span",{staticClass:"hljs-keyword"},[s._v("export")]),s._v(" "),e("span",{staticClass:"hljs-keyword"},[s._v("default")]),s._v(" {\n        data () {\n            "),e("span",{staticClass:"hljs-keyword"},[s._v("return")]),s._v(" {\n                "),e("span",{staticClass:"hljs-attr"},[s._v("cityList")]),s._v(": [\n                    {\n                        "),e("span",{staticClass:"hljs-attr"},[s._v("value")]),s._v(": "),e("span",{staticClass:"hljs-literal"},[s._v("true")]),s._v(",\n                        "),e("span",{staticClass:"hljs-attr"},[s._v("label")]),s._v(": "),e("span",{staticClass:"hljs-string"},[s._v("'New York1'")]),s._v("\n                    },\n                    {\n                        "),e("span",{staticClass:"hljs-attr"},[s._v("value")]),s._v(": "),e("span",{staticClass:"hljs-string"},[s._v("'London'")]),s._v(",\n                        "),e("span",{staticClass:"hljs-attr"},[s._v("label")]),s._v(": "),e("span",{staticClass:"hljs-string"},[s._v("'London1'")]),s._v("\n                    },\n                    {\n                        "),e("span",{staticClass:"hljs-attr"},[s._v("value")]),s._v(": "),e("span",{staticClass:"hljs-string"},[s._v("'Sydney'")]),s._v(",\n                        "),e("span",{staticClass:"hljs-attr"},[s._v("label")]),s._v(": "),e("span",{staticClass:"hljs-string"},[s._v("'Sydney1'")]),s._v("\n                    },\n                    {\n                        "),e("span",{staticClass:"hljs-attr"},[s._v("value")]),s._v(": "),e("span",{staticClass:"hljs-string"},[s._v("'Ottawa'")]),s._v(",\n                        "),e("span",{staticClass:"hljs-attr"},[s._v("label")]),s._v(": "),e("span",{staticClass:"hljs-string"},[s._v("'Ottawa1'")]),s._v("\n                    },\n                    {\n                        "),e("span",{staticClass:"hljs-attr"},[s._v("value")]),s._v(": "),e("span",{staticClass:"hljs-string"},[s._v("'Paris'")]),s._v(",\n                        "),e("span",{staticClass:"hljs-attr"},[s._v("label")]),s._v(": "),e("span",{staticClass:"hljs-string"},[s._v("'Paris1'")]),s._v("\n                    },\n                    {\n                        "),e("span",{staticClass:"hljs-attr"},[s._v("value")]),s._v(": "),e("span",{staticClass:"hljs-string"},[s._v("'Canberra'")]),s._v(",\n                        "),e("span",{staticClass:"hljs-attr"},[s._v("label")]),s._v(": "),e("span",{staticClass:"hljs-string"},[s._v("'Canberra1'")]),s._v("\n                    }\n                ],\n                "),e("span",{staticClass:"hljs-attr"},[s._v("model1")]),s._v(": "),e("span",{staticClass:"hljs-literal"},[s._v("true")]),s._v("\n            }\n        },\n        "),e("span",{staticClass:"hljs-attr"},[s._v("methods")]),s._v(": {\n          handlerSelected() {\n            "),e("span",{staticClass:"hljs-built_in"},[s._v("console")]),s._v(".log("),e("span",{staticClass:"hljs-string"},[s._v('"select"')]),s._v(","),e("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".model1)\n          },\n          handlerChanged() {\n            "),e("span",{staticClass:"hljs-built_in"},[s._v("console")]),s._v(".log("),e("span",{staticClass:"hljs-string"},[s._v('"change"')]),s._v(","),e("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".model1)\n          }\n        }\n    }\n")]),e("span",{staticClass:"hljs-tag"},[s._v("</"),e("span",{staticClass:"hljs-name"},[s._v("script")]),s._v(">")])]),s._v("\n")])])}]};var i={mixins:[{data:function(){return{showVueDocCode:!1,vueDocCodeCopyText:"copy",vueDocCodeHeight:0}},methods:{vueDocCodeToggle:function(){this.showVueDocCode=!this.showVueDocCode,this.vueDocCodeHeight=this.vueDocCodeHeight||this.$refs.vueDocCodeBox.children[0].offsetHeight,this.$refs.vueDocCodeBox.style.height=this.showVueDocCode?this.vueDocCodeHeight+50+"px":"0px"},vueDocCodeCopy:function(){var s=this,t=new n.a(".vue-doc-code-copy",{text:function(s){return s.nextElementSibling.textContent}});t.on("success",function(e){s.vueDocCodeCopyText="copy success!",setTimeout(function(){s.vueDocCodeCopyText="copy"},1e3),e.clearSelection(),t.destroy()})}},components:{}}],data:function(){return{cityList:[{value:"New York",label:"New York"},{value:"London",label:"London"},{value:"Sydney",label:"Sydney"},{value:"Ottawa",label:"Ottawa"},{value:"Paris",label:"Paris"},{value:"Canberra",label:"Canberra"}],model10:[]}},methods:{handlerSelected:function(){console.log("select",this.model10)},handlerChanged:function(){console.log("change",this.model10)}}},v={render:function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{staticClass:"vue-doc-wrapper"},[s._m(0),s._v(" "),s._m(1),s._v(" "),s._m(2),s._v(" "),s._m(3),s._v(" "),e("div",{staticClass:"vue-doc-demo"},[[e("Select",{staticStyle:{width:"260px"},attrs:{multiple:""},on:{"on-change":s.handlerChanged,"on-select":s.handlerSelected},model:{value:s.model10,callback:function(t){s.model10=t},expression:"model10"}},s._l(s.cityList,function(t){return e("Option",{key:t.value,attrs:{value:t.value}},[s._v(s._s(t.label))])}))]],2),s._v(" "),e("div",{staticClass:"vue-doc-code",class:{"vue-doc-code-show":s.showVueDocCode}},[e("div",{staticClass:"vue-doc-code-copy",on:{click:s.vueDocCodeCopy}},[s._v(s._s(s.vueDocCodeCopyText))]),s._v(" "),e("div",{ref:"vueDocCodeBox",staticClass:"vue-doc-code-content"},[s._m(4)]),s._v(" "),e("div",{staticClass:"vue-doc-code-toggle",on:{click:s.vueDocCodeToggle}},[e("span",{staticClass:"vue-doc-code-toggle-text"},[s._v("</>"+s._s(s.showVueDocCode?"隐藏代码":"显示代码"))]),s._v(" "),e("span",{staticClass:"vue-doc-code-toggle-text-EN"},[s._v("</>"+s._s(s.showVueDocCode?"Hide Code":"Show Code"))])])])])},staticRenderFns:[function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"vue-doc-title"},[t("h2",{staticClass:"vue-doc-element",attrs:{id:"vue-doc-icon形状1"}},[this._v("icon&形状")]),this._v(" "),t("p",{staticClass:"vue-doc-element"},[this._v("设置按钮形状和图标。")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"vue-doc-title-EN"},[t("h2",{staticClass:"vue-doc-element",attrs:{id:"vue-doc-iconshapes1"}},[this._v("icon&shapes")]),this._v(" "),t("p",{staticClass:"vue-doc-element"},[this._v("Button")])])},function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{staticClass:"vue-doc-content"},[e("p",{staticClass:"vue-doc-element"},[s._v("通过设置"),e("code",{staticClass:"vue-doc-element"},[s._v("icon")]),s._v("属性在"),e("code",{staticClass:"vue-doc-element"},[s._v("Button")]),s._v("内嵌入一个"),e("code",{staticClass:"vue-doc-element"},[s._v("Icon")]),s._v("，或者直接在"),e("code",{staticClass:"vue-doc-element"},[s._v("Button")]),s._v("内使用"),e("code",{staticClass:"vue-doc-element"},[s._v("Icon")]),s._v("组件。")]),s._v(" "),e("p",{staticClass:"vue-doc-element"},[s._v("使用"),e("code",{staticClass:"vue-doc-element"},[s._v("Button")]),s._v("的"),e("code",{staticClass:"vue-doc-element"},[s._v("icon")]),s._v("属性，图标位置将在最左边，如果需要自定义位置，需使用"),e("code",{staticClass:"vue-doc-element"},[s._v("Icon")]),s._v("组件。")]),s._v(" "),e("p",{staticClass:"vue-doc-element"},[s._v("通过设置"),e("code",{staticClass:"vue-doc-element"},[s._v("shape")]),s._v("属性为"),e("code",{staticClass:"vue-doc-element"},[s._v("circle")]),s._v("，可将按钮置为圆的形状。")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"vue-doc-content-EN"},[t("p",{staticClass:"vue-doc-element"},[this._v("Set the icon to insert an Icon to the Button, or use the Icon component inside the Button directly.")]),this._v(" "),t("p",{staticClass:"vue-doc-element"},[this._v("The icon would appear at the leftmost side of the Button when\nusing the icon; use Icon component for different icons' positions.")]),this._v(" "),t("p",{staticClass:"vue-doc-element"},[this._v("Set the shape to circle to use a circle button.")])])},function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("pre",{staticClass:"vue-doc-element"},[e("code",{staticClass:"lang-vue"},[e("span",{staticClass:"xml"},[e("span",{staticClass:"hljs-tag"},[s._v("<"),e("span",{staticClass:"hljs-name"},[s._v("template")]),s._v(">")]),s._v("\n    "),e("span",{staticClass:"hljs-tag"},[s._v("<"),e("span",{staticClass:"hljs-name"},[s._v("Select")]),s._v(" "),e("span",{staticClass:"hljs-attr"},[s._v("v-model")]),s._v("="),e("span",{staticClass:"hljs-string"},[s._v('"model10"')]),s._v(" "),e("span",{staticClass:"hljs-attr"},[s._v("multiple")]),s._v(" "),e("span",{staticClass:"hljs-attr"},[s._v("style")]),s._v("="),e("span",{staticClass:"hljs-string"},[s._v('"width:260px"')]),s._v(" @"),e("span",{staticClass:"hljs-attr"},[s._v("on-change")]),s._v("="),e("span",{staticClass:"hljs-string"},[s._v('"handlerChanged"')]),s._v(" @"),e("span",{staticClass:"hljs-attr"},[s._v("on-select")]),s._v("="),e("span",{staticClass:"hljs-string"},[s._v('"handlerSelected"')]),s._v(">")]),s._v("\n        "),e("span",{staticClass:"hljs-tag"},[s._v("<"),e("span",{staticClass:"hljs-name"},[s._v("Option")]),s._v(" "),e("span",{staticClass:"hljs-attr"},[s._v("v-for")]),s._v("="),e("span",{staticClass:"hljs-string"},[s._v('"item in cityList"')]),s._v(" "),e("span",{staticClass:"hljs-attr"},[s._v(":value")]),s._v("="),e("span",{staticClass:"hljs-string"},[s._v('"item.value"')]),s._v(" "),e("span",{staticClass:"hljs-attr"},[s._v(":key")]),s._v("="),e("span",{staticClass:"hljs-string"},[s._v('"item.value"')]),s._v(">")])]),e("span",{staticClass:"hljs-template-variable"},[e("span",[s._v("{{")]),s._v(" item.label }}")]),e("span",{staticClass:"xml"},[e("span",{staticClass:"hljs-tag"},[s._v("</"),e("span",{staticClass:"hljs-name"},[s._v("Option")]),s._v(">")]),s._v("\n    "),e("span",{staticClass:"hljs-tag"},[s._v("</"),e("span",{staticClass:"hljs-name"},[s._v("Select")]),s._v(">")]),s._v("\n"),e("span",{staticClass:"hljs-tag"},[s._v("</"),e("span",{staticClass:"hljs-name"},[s._v("template")]),s._v(">")]),s._v("\n"),e("span",{staticClass:"hljs-tag"},[s._v("<"),e("span",{staticClass:"hljs-name"},[s._v("script")]),s._v(">")]),e("span",{staticClass:"javascript"},[s._v("\n    "),e("span",{staticClass:"hljs-keyword"},[s._v("export")]),s._v(" "),e("span",{staticClass:"hljs-keyword"},[s._v("default")]),s._v(" {\n        data () {\n            "),e("span",{staticClass:"hljs-keyword"},[s._v("return")]),s._v(" {\n                "),e("span",{staticClass:"hljs-attr"},[s._v("cityList")]),s._v(": [\n                    {\n                        "),e("span",{staticClass:"hljs-attr"},[s._v("value")]),s._v(": "),e("span",{staticClass:"hljs-string"},[s._v("'New York'")]),s._v(",\n                        "),e("span",{staticClass:"hljs-attr"},[s._v("label")]),s._v(": "),e("span",{staticClass:"hljs-string"},[s._v("'New York'")]),s._v("\n                    },\n                    {\n                        "),e("span",{staticClass:"hljs-attr"},[s._v("value")]),s._v(": "),e("span",{staticClass:"hljs-string"},[s._v("'London'")]),s._v(",\n                        "),e("span",{staticClass:"hljs-attr"},[s._v("label")]),s._v(": "),e("span",{staticClass:"hljs-string"},[s._v("'London'")]),s._v("\n                    },\n                    {\n                        "),e("span",{staticClass:"hljs-attr"},[s._v("value")]),s._v(": "),e("span",{staticClass:"hljs-string"},[s._v("'Sydney'")]),s._v(",\n                        "),e("span",{staticClass:"hljs-attr"},[s._v("label")]),s._v(": "),e("span",{staticClass:"hljs-string"},[s._v("'Sydney'")]),s._v("\n                    },\n                    {\n                        "),e("span",{staticClass:"hljs-attr"},[s._v("value")]),s._v(": "),e("span",{staticClass:"hljs-string"},[s._v("'Ottawa'")]),s._v(",\n                        "),e("span",{staticClass:"hljs-attr"},[s._v("label")]),s._v(": "),e("span",{staticClass:"hljs-string"},[s._v("'Ottawa'")]),s._v("\n                    },\n                    {\n                        "),e("span",{staticClass:"hljs-attr"},[s._v("value")]),s._v(": "),e("span",{staticClass:"hljs-string"},[s._v("'Paris'")]),s._v(",\n                        "),e("span",{staticClass:"hljs-attr"},[s._v("label")]),s._v(": "),e("span",{staticClass:"hljs-string"},[s._v("'Paris'")]),s._v("\n                    },\n                    {\n                        "),e("span",{staticClass:"hljs-attr"},[s._v("value")]),s._v(": "),e("span",{staticClass:"hljs-string"},[s._v("'Canberra'")]),s._v(",\n                        "),e("span",{staticClass:"hljs-attr"},[s._v("label")]),s._v(": "),e("span",{staticClass:"hljs-string"},[s._v("'Canberra'")]),s._v("\n                    }\n                ],\n                "),e("span",{staticClass:"hljs-attr"},[s._v("model10")]),s._v(": []\n            }\n        }\n        ,\n        "),e("span",{staticClass:"hljs-attr"},[s._v("methods")]),s._v(": {\n          handlerSelected() {\n            "),e("span",{staticClass:"hljs-built_in"},[s._v("console")]),s._v(".log("),e("span",{staticClass:"hljs-string"},[s._v('"select"')]),s._v(","),e("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".model10)\n          },\n          handlerChanged() {\n            "),e("span",{staticClass:"hljs-built_in"},[s._v("console")]),s._v(".log("),e("span",{staticClass:"hljs-string"},[s._v('"change"')]),s._v(","),e("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".model10)\n          }\n        }\n    }\n")]),e("span",{staticClass:"hljs-tag"},[s._v("</"),e("span",{staticClass:"hljs-name"},[s._v("script")]),s._v(">")])]),s._v("\n")])])}]};var o={mixins:[{data:function(){return{showVueDocCode:!1,vueDocCodeCopyText:"copy",vueDocCodeHeight:0}},methods:{vueDocCodeToggle:function(){this.showVueDocCode=!this.showVueDocCode,this.vueDocCodeHeight=this.vueDocCodeHeight||this.$refs.vueDocCodeBox.children[0].offsetHeight,this.$refs.vueDocCodeBox.style.height=this.showVueDocCode?this.vueDocCodeHeight+50+"px":"0px"},vueDocCodeCopy:function(){var s=this,t=new n.a(".vue-doc-code-copy",{text:function(s){return s.nextElementSibling.textContent}});t.on("success",function(e){s.vueDocCodeCopyText="copy success!",setTimeout(function(){s.vueDocCodeCopyText="copy"},1e3),e.clearSelection(),t.destroy()})}},components:{demobasic:e("D8HT")(l,c,!1,function(s){e("/63v")},null,null).exports,demoshapes:e("D8HT")(i,v,!1,function(s){e("2mar")},null,null).exports}}]},_={render:function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{staticClass:"vue-doc-wrapper"},[s._m(0),s._v(" "),s._m(1),s._v(" "),s._m(2),s._v(" "),e("div",{staticClass:"vue-doc-components"},[e("demobasic"),s._v(" "),e("demoshapes")],1),s._v(" "),s._m(3),s._v(" "),s._m(4)])},staticRenderFns:[function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"vue-doc-submenu"},[t("ul",{staticClass:"vue-doc-submenu-list"},[t("li",[t("a",{attrs:{href:"#vue-doc-按钮尺寸1"}},[this._v("按钮尺寸")])]),t("li",[t("a",{attrs:{href:"#vue-doc-icon形状1"}},[this._v("icon&形状")])])]),t("ul",{staticClass:"vue-doc-submenu-list-EN"},[t("li",[t("a",{attrs:{href:"#vue-doc-ButtonSize1"}},[this._v("Button Size")])]),t("li",[t("a",{attrs:{href:"#vue-doc-iconshapes1"}},[this._v("icon&shapes")])])])])},function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"vue-doc-title"},[t("h1",{staticClass:"vue-doc-element",attrs:{id:"vue-doc-button按钮1"}},[this._v("Button 按钮")]),this._v(" "),t("p",{staticClass:"vue-doc-element"},[this._v("基础组件，触发业务逻辑时使用。")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"vue-doc-title-EN"},[t("h1",{staticClass:"vue-doc-element",attrs:{id:"vue-doc-button1"}},[this._v("Button")]),this._v(" "),t("p",{staticClass:"vue-doc-element"},[this._v("Basic component that is used to trigger bussiness logic.")])])},function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{staticClass:"vue-doc-content"},[e("h2",{staticClass:"vue-doc-element",attrs:{id:"vue-doc-api1"}},[s._v("API")]),s._v(" "),e("table",{staticClass:"vue-doc-element"},[e("thead",[e("tr",[e("th",[s._v("属性")]),s._v(" "),e("th",{staticStyle:{"text-align":"right"}},[s._v("说明")]),s._v(" "),e("th",{staticStyle:{"text-align":"center"}},[s._v("类型")]),s._v(" "),e("th",{staticStyle:{"text-align":"center"}},[s._v("默认值")])])]),s._v(" "),e("tbody",[e("tr",[e("td",[s._v("type")]),s._v(" "),e("td",{staticStyle:{"text-align":"right"}},[s._v("按钮类型，可选值为primary、ghost、dashed、text、info、success、warning、error或者不设置")]),s._v(" "),e("td",{staticStyle:{"text-align":"center"}},[s._v("String")]),s._v(" "),e("td",{staticStyle:{"text-align":"center"}},[s._v("-")])])])])])},function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{staticClass:"vue-doc-content-EN"},[e("h2",{staticClass:"vue-doc-element",attrs:{id:"vue-doc-api1"}},[s._v("API")]),s._v(" "),e("table",{staticClass:"vue-doc-element"},[e("thead",[e("tr",[e("th",[s._v("Attribute")]),s._v(" "),e("th",{staticStyle:{"text-align":"right"}},[s._v("Explanation")]),s._v(" "),e("th",{staticStyle:{"text-align":"center"}},[s._v("Type")]),s._v(" "),e("th",{staticStyle:{"text-align":"center"}},[s._v("Default")])])]),s._v(" "),e("tbody",[e("tr",[e("td",[s._v("type")]),s._v(" "),e("td",{staticStyle:{"text-align":"right"}},[s._v("Button type, options include primary、ghost、dashed、text、info、success、warning、error, optional")]),s._v(" "),e("td",{staticStyle:{"text-align":"center"}},[s._v("String")]),s._v(" "),e("td",{staticStyle:{"text-align":"center"}},[s._v("-")])])])])])}]};var h=e("D8HT")(o,_,!1,function(s){e("Qtfj")},null,null);t.default=h.exports},Qtfj:function(s,t){}});
//# sourceMappingURL=21.254758fbf664c200b2b7.js.map