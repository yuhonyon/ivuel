webpackJsonp([32],{"/SHh":function(s,t){},"0hZ6":function(s,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=e("TQvf"),o=e.n(a),n={mixins:[{data:function(){return{showVueDocCode:!1,vueDocCodeCopyText:"copy",vueDocCodeHeight:0}},methods:{vueDocCodeToggle:function(){this.showVueDocCode=!this.showVueDocCode,this.vueDocCodeHeight=this.vueDocCodeHeight||this.$refs.vueDocCodeBox.children[0].offsetHeight,this.$refs.vueDocCodeBox.style.height=this.showVueDocCode?this.vueDocCodeHeight+50+"px":"0px"},vueDocCodeCopy:function(){var s=this,t=new o.a(".vue-doc-code-copy",{text:function(s){return s.nextElementSibling.textContent}});t.on("success",function(e){s.vueDocCodeCopyText="copy success!",setTimeout(function(){s.vueDocCodeCopyText="copy"},1e3),e.clearSelection(),t.destroy()})}},components:{}}],data:function(){return{modal1:!1}},methods:{ok:function(){this.$Message.info("Clicked ok")},cancel:function(){this.$Message.info("Clicked cancel")}}},c={render:function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{staticClass:"vue-doc-wrapper"},[s._m(0),s._v(" "),s._m(1),s._v(" "),s._m(2),s._v(" "),e("div",{staticClass:"vue-doc-content-EN"}),s._v(" "),e("div",{staticClass:"vue-doc-demo"},[[e("Button",{attrs:{type:"primary"},on:{click:function(t){s.modal1=!0}}},[s._v("Display dialog box")]),s._v(" "),e("Modal",{attrs:{title:"Common Modal dialog box title"},on:{"on-ok":s.ok,"on-cancel":s.cancel},model:{value:s.modal1,callback:function(t){s.modal1=t},expression:"modal1"}},[e("p",[s._v("Content of dialog")]),s._v(" "),e("p",[s._v("Content of dialog")]),s._v(" "),e("p",[s._v("Content of dialog")])])]],2),s._v(" "),e("div",{staticClass:"vue-doc-code",class:{"vue-doc-code-show":s.showVueDocCode}},[e("div",{staticClass:"vue-doc-code-copy",on:{click:s.vueDocCodeCopy}},[s._v(s._s(s.vueDocCodeCopyText))]),s._v(" "),e("div",{ref:"vueDocCodeBox",staticClass:"vue-doc-code-content"},[s._m(3)]),s._v(" "),e("div",{staticClass:"vue-doc-code-toggle",on:{click:s.vueDocCodeToggle}},[e("span",{staticClass:"vue-doc-code-toggle-text"},[s._v("</>"+s._s(s.showVueDocCode?"隐藏代码":"显示代码"))]),s._v(" "),e("span",{staticClass:"vue-doc-code-toggle-text-EN"},[s._v("</>"+s._s(s.showVueDocCode?"Hide Code":"Show Code"))])])])])},staticRenderFns:[function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"vue-doc-title"},[t("h2",{staticClass:"vue-doc-element",attrs:{id:"vue-doc-基础使用1"}},[this._v("基础使用")]),this._v(" "),t("p",{staticClass:"vue-doc-element"},[this._v("null")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"vue-doc-title-EN"},[t("h2",{staticClass:"vue-doc-element",attrs:{id:"vue-doc-buttonsize1"}},[this._v("Button Size")]),this._v(" "),t("p",{staticClass:"vue-doc-element"},[this._v("Button")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"vue-doc-content"},[t("p",{staticClass:"vue-doc-element"},[this._v("可以使用 v-model 实现双向绑定。")]),this._v(" "),t("p",{staticClass:"vue-doc-element"},[this._v("默认按键盘ESC键也可以关闭。")])])},function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("pre",{staticClass:"vue-doc-element"},[e("code",{staticClass:"lang-vue"},[e("span",{staticClass:"hljs-tag"},[s._v("<"),e("span",{staticClass:"hljs-name"},[s._v("template")]),s._v(">")]),s._v("\n    "),e("span",{staticClass:"hljs-tag"},[s._v("<"),e("span",{staticClass:"hljs-name"},[s._v("Button")]),s._v(" "),e("span",{staticClass:"hljs-attr"},[s._v("type")]),s._v("="),e("span",{staticClass:"hljs-string"},[s._v('"primary"')]),s._v(" @"),e("span",{staticClass:"hljs-attr"},[s._v("click")]),s._v("="),e("span",{staticClass:"hljs-string"},[s._v('"modal1 = true"')]),s._v(">")]),s._v("Display dialog box"),e("span",{staticClass:"hljs-tag"},[s._v("</"),e("span",{staticClass:"hljs-name"},[s._v("Button")]),s._v(">")]),s._v("\n    "),e("span",{staticClass:"hljs-tag"},[s._v("<"),e("span",{staticClass:"hljs-name"},[s._v("Modal")]),s._v("\n        "),e("span",{staticClass:"hljs-attr"},[s._v("v-model")]),s._v("="),e("span",{staticClass:"hljs-string"},[s._v('"modal1"')]),s._v("\n        "),e("span",{staticClass:"hljs-attr"},[s._v("title")]),s._v("="),e("span",{staticClass:"hljs-string"},[s._v('"Common Modal dialog box title"')]),s._v("\n        @"),e("span",{staticClass:"hljs-attr"},[s._v("on-ok")]),s._v("="),e("span",{staticClass:"hljs-string"},[s._v('"ok"')]),s._v("\n        @"),e("span",{staticClass:"hljs-attr"},[s._v("on-cancel")]),s._v("="),e("span",{staticClass:"hljs-string"},[s._v('"cancel"')]),s._v(">")]),s._v("\n        "),e("span",{staticClass:"hljs-tag"},[s._v("<"),e("span",{staticClass:"hljs-name"},[s._v("p")]),s._v(">")]),s._v("Content of dialog"),e("span",{staticClass:"hljs-tag"},[s._v("</"),e("span",{staticClass:"hljs-name"},[s._v("p")]),s._v(">")]),s._v("\n        "),e("span",{staticClass:"hljs-tag"},[s._v("<"),e("span",{staticClass:"hljs-name"},[s._v("p")]),s._v(">")]),s._v("Content of dialog"),e("span",{staticClass:"hljs-tag"},[s._v("</"),e("span",{staticClass:"hljs-name"},[s._v("p")]),s._v(">")]),s._v("\n        "),e("span",{staticClass:"hljs-tag"},[s._v("<"),e("span",{staticClass:"hljs-name"},[s._v("p")]),s._v(">")]),s._v("Content of dialog"),e("span",{staticClass:"hljs-tag"},[s._v("</"),e("span",{staticClass:"hljs-name"},[s._v("p")]),s._v(">")]),s._v("\n    "),e("span",{staticClass:"hljs-tag"},[s._v("</"),e("span",{staticClass:"hljs-name"},[s._v("Modal")]),s._v(">")]),s._v("\n"),e("span",{staticClass:"hljs-tag"},[s._v("</"),e("span",{staticClass:"hljs-name"},[s._v("template")]),s._v(">")]),s._v("\n"),e("span",{staticClass:"hljs-tag"},[s._v("<"),e("span",{staticClass:"hljs-name"},[s._v("script")]),s._v(">")]),e("span",{staticClass:"javascript"},[s._v("\n    "),e("span",{staticClass:"hljs-keyword"},[s._v("export")]),s._v(" "),e("span",{staticClass:"hljs-keyword"},[s._v("default")]),s._v(" {\n        data () {\n            "),e("span",{staticClass:"hljs-keyword"},[s._v("return")]),s._v(" {\n                "),e("span",{staticClass:"hljs-attr"},[s._v("modal1")]),s._v(": "),e("span",{staticClass:"hljs-literal"},[s._v("false")]),s._v("\n            }\n        },\n        "),e("span",{staticClass:"hljs-attr"},[s._v("methods")]),s._v(": {\n            ok () {\n                "),e("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".$Message.info("),e("span",{staticClass:"hljs-string"},[s._v("'Clicked ok'")]),s._v(");\n            },\n            cancel () {\n                "),e("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".$Message.info("),e("span",{staticClass:"hljs-string"},[s._v("'Clicked cancel'")]),s._v(");\n            }\n        }\n    }\n")]),e("span",{staticClass:"hljs-tag"},[s._v("</"),e("span",{staticClass:"hljs-name"},[s._v("script")]),s._v(">")]),s._v("\n\n")])])}]};var l={mixins:[{data:function(){return{showVueDocCode:!1,vueDocCodeCopyText:"copy",vueDocCodeHeight:0}},methods:{vueDocCodeToggle:function(){this.showVueDocCode=!this.showVueDocCode,this.vueDocCodeHeight=this.vueDocCodeHeight||this.$refs.vueDocCodeBox.children[0].offsetHeight,this.$refs.vueDocCodeBox.style.height=this.showVueDocCode?this.vueDocCodeHeight+50+"px":"0px"},vueDocCodeCopy:function(){var s=this,t=new o.a(".vue-doc-code-copy",{text:function(s){return s.nextElementSibling.textContent}});t.on("success",function(e){s.vueDocCodeCopyText="copy success!",setTimeout(function(){s.vueDocCodeCopyText="copy"},1e3),e.clearSelection(),t.destroy()})}},components:{}}],data:function(){return{modal1:!1}},methods:{ok:function(){this.$Message.info("Clicked ok")},cancel:function(){this.$Message.info("Clicked cancel")}}},i={render:function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{staticClass:"vue-doc-wrapper"},[s._m(0),s._v(" "),s._m(1),s._v(" "),s._m(2),s._v(" "),e("div",{staticClass:"vue-doc-content-EN"}),s._v(" "),e("div",{staticClass:"vue-doc-demo"},[[e("Button",{attrs:{type:"primary"},on:{click:function(t){s.modal1=!0}}},[s._v("Display dialog box")]),s._v(" "),e("Modal",{attrs:{title:"Common Modal dialog box title"},on:{"on-ok":s.ok,"on-cancel":s.cancel},model:{value:s.modal1,callback:function(t){s.modal1=t},expression:"modal1"}},[e("p",[s._v("Content of dialog")]),s._v(" "),e("p",[s._v("Content of dialog")]),s._v(" "),e("p",[s._v("Content of dialog")])])]],2),s._v(" "),e("div",{staticClass:"vue-doc-code",class:{"vue-doc-code-show":s.showVueDocCode}},[e("div",{staticClass:"vue-doc-code-copy",on:{click:s.vueDocCodeCopy}},[s._v(s._s(s.vueDocCodeCopyText))]),s._v(" "),e("div",{ref:"vueDocCodeBox",staticClass:"vue-doc-code-content"},[s._m(3)]),s._v(" "),e("div",{staticClass:"vue-doc-code-toggle",on:{click:s.vueDocCodeToggle}},[e("span",{staticClass:"vue-doc-code-toggle-text"},[s._v("</>"+s._s(s.showVueDocCode?"隐藏代码":"显示代码"))]),s._v(" "),e("span",{staticClass:"vue-doc-code-toggle-text-EN"},[s._v("</>"+s._s(s.showVueDocCode?"Hide Code":"Show Code"))])])])])},staticRenderFns:[function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"vue-doc-title"},[t("h2",{staticClass:"vue-doc-element",attrs:{id:"vue-doc-基础使用1"}},[this._v("基础使用")]),this._v(" "),t("p",{staticClass:"vue-doc-element"},[this._v("null")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"vue-doc-title-EN"},[t("h2",{staticClass:"vue-doc-element",attrs:{id:"vue-doc-buttonsize1"}},[this._v("Button Size")]),this._v(" "),t("p",{staticClass:"vue-doc-element"},[this._v("Button")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"vue-doc-content"},[t("p",{staticClass:"vue-doc-element"},[this._v("可以使用 v-model 实现双向绑定。")]),this._v(" "),t("p",{staticClass:"vue-doc-element"},[this._v("默认按键盘ESC键也可以关闭。")])])},function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("pre",{staticClass:"vue-doc-element"},[e("code",{staticClass:"lang-vue"},[e("span",{staticClass:"hljs-tag"},[s._v("<"),e("span",{staticClass:"hljs-name"},[s._v("template")]),s._v(">")]),s._v("\n    "),e("span",{staticClass:"hljs-tag"},[s._v("<"),e("span",{staticClass:"hljs-name"},[s._v("Button")]),s._v(" "),e("span",{staticClass:"hljs-attr"},[s._v("type")]),s._v("="),e("span",{staticClass:"hljs-string"},[s._v('"primary"')]),s._v(" @"),e("span",{staticClass:"hljs-attr"},[s._v("click")]),s._v("="),e("span",{staticClass:"hljs-string"},[s._v('"modal1 = true"')]),s._v(">")]),s._v("Display dialog box"),e("span",{staticClass:"hljs-tag"},[s._v("</"),e("span",{staticClass:"hljs-name"},[s._v("Button")]),s._v(">")]),s._v("\n    "),e("span",{staticClass:"hljs-tag"},[s._v("<"),e("span",{staticClass:"hljs-name"},[s._v("Modal")]),s._v("\n        "),e("span",{staticClass:"hljs-attr"},[s._v("v-model")]),s._v("="),e("span",{staticClass:"hljs-string"},[s._v('"modal1"')]),s._v("\n        "),e("span",{staticClass:"hljs-attr"},[s._v("title")]),s._v("="),e("span",{staticClass:"hljs-string"},[s._v('"Common Modal dialog box title"')]),s._v("\n        @"),e("span",{staticClass:"hljs-attr"},[s._v("on-ok")]),s._v("="),e("span",{staticClass:"hljs-string"},[s._v('"ok"')]),s._v("\n        @"),e("span",{staticClass:"hljs-attr"},[s._v("on-cancel")]),s._v("="),e("span",{staticClass:"hljs-string"},[s._v('"cancel"')]),s._v(">")]),s._v("\n        "),e("span",{staticClass:"hljs-tag"},[s._v("<"),e("span",{staticClass:"hljs-name"},[s._v("p")]),s._v(">")]),s._v("Content of dialog"),e("span",{staticClass:"hljs-tag"},[s._v("</"),e("span",{staticClass:"hljs-name"},[s._v("p")]),s._v(">")]),s._v("\n        "),e("span",{staticClass:"hljs-tag"},[s._v("<"),e("span",{staticClass:"hljs-name"},[s._v("p")]),s._v(">")]),s._v("Content of dialog"),e("span",{staticClass:"hljs-tag"},[s._v("</"),e("span",{staticClass:"hljs-name"},[s._v("p")]),s._v(">")]),s._v("\n        "),e("span",{staticClass:"hljs-tag"},[s._v("<"),e("span",{staticClass:"hljs-name"},[s._v("p")]),s._v(">")]),s._v("Content of dialog"),e("span",{staticClass:"hljs-tag"},[s._v("</"),e("span",{staticClass:"hljs-name"},[s._v("p")]),s._v(">")]),s._v("\n    "),e("span",{staticClass:"hljs-tag"},[s._v("</"),e("span",{staticClass:"hljs-name"},[s._v("Modal")]),s._v(">")]),s._v("\n"),e("span",{staticClass:"hljs-tag"},[s._v("</"),e("span",{staticClass:"hljs-name"},[s._v("template")]),s._v(">")]),s._v("\n"),e("span",{staticClass:"hljs-tag"},[s._v("<"),e("span",{staticClass:"hljs-name"},[s._v("script")]),s._v(">")]),e("span",{staticClass:"javascript"},[s._v("\n    "),e("span",{staticClass:"hljs-keyword"},[s._v("export")]),s._v(" "),e("span",{staticClass:"hljs-keyword"},[s._v("default")]),s._v(" {\n        data () {\n            "),e("span",{staticClass:"hljs-keyword"},[s._v("return")]),s._v(" {\n                "),e("span",{staticClass:"hljs-attr"},[s._v("modal1")]),s._v(": "),e("span",{staticClass:"hljs-literal"},[s._v("false")]),s._v("\n            }\n        },\n        "),e("span",{staticClass:"hljs-attr"},[s._v("methods")]),s._v(": {\n            ok () {\n                "),e("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".$Message.info("),e("span",{staticClass:"hljs-string"},[s._v("'Clicked ok'")]),s._v(");\n            },\n            cancel () {\n                "),e("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".$Message.info("),e("span",{staticClass:"hljs-string"},[s._v("'Clicked cancel'")]),s._v(");\n            }\n        }\n    }\n")]),e("span",{staticClass:"hljs-tag"},[s._v("</"),e("span",{staticClass:"hljs-name"},[s._v("script")]),s._v(">")]),s._v("\n\n")])])}]};var v={mixins:[{data:function(){return{showVueDocCode:!1,vueDocCodeCopyText:"copy",vueDocCodeHeight:0}},methods:{vueDocCodeToggle:function(){this.showVueDocCode=!this.showVueDocCode,this.vueDocCodeHeight=this.vueDocCodeHeight||this.$refs.vueDocCodeBox.children[0].offsetHeight,this.$refs.vueDocCodeBox.style.height=this.showVueDocCode?this.vueDocCodeHeight+50+"px":"0px"},vueDocCodeCopy:function(){var s=this,t=new o.a(".vue-doc-code-copy",{text:function(s){return s.nextElementSibling.textContent}});t.on("success",function(e){s.vueDocCodeCopyText="copy success!",setTimeout(function(){s.vueDocCodeCopyText="copy"},1e3),e.clearSelection(),t.destroy()})}},components:{demobasic:e("VU/8")(n,c,!1,function(s){e("gPHk")},null,null).exports,democustom:e("VU/8")(l,i,!1,function(s){e("ZGHu")},null,null).exports}}]},_={render:function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{staticClass:"vue-doc-wrapper"},[s._m(0),s._v(" "),s._m(1),s._v(" "),s._m(2),s._v(" "),e("div",{staticClass:"vue-doc-components"},[e("demobasic"),s._v(" "),e("democustom")],1),s._v(" "),s._m(3),s._v(" "),e("div",{staticClass:"vue-doc-content-EN"})])},staticRenderFns:[function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"vue-doc-submenu"},[t("ul",{staticClass:"vue-doc-submenu-list"},[t("li",[t("a",{attrs:{href:"#vue-doc-基础使用1"}},[this._v("基础使用")])]),t("li",[t("a",{attrs:{href:"#vue-doc-基础使用1"}},[this._v("基础使用")])])]),t("ul",{staticClass:"vue-doc-submenu-list-EN"},[t("li",[t("a",{attrs:{href:"#vue-doc-ButtonSize1"}},[this._v("Button Size")])]),t("li",[t("a",{attrs:{href:"#vue-doc-ButtonSize1"}},[this._v("Button Size")])])])])},function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"vue-doc-title"},[t("h1",{staticClass:"vue-doc-element",attrs:{id:"vue-doc-modal对话框1"}},[this._v("Modal 对话框")]),this._v(" "),t("p",{staticClass:"vue-doc-element"},[this._v("模态对话框，在浮层中显示，引导用户进行相关操作。")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"vue-doc-title-EN"},[t("h1",{staticClass:"vue-doc-element",attrs:{id:"vue-doc-buttonsize1"}},[this._v("Button Size")]),this._v(" "),t("p",{staticClass:"vue-doc-element"},[this._v("Button")])])},function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{staticClass:"vue-doc-content"},[e("p",{staticClass:"vue-doc-element"},[e("code",{staticClass:"vue-doc-element"},[s._v("Modal")]),s._v("提供了两种用法，普通组件使用和封装好的简洁实例调用。")]),s._v(" "),e("h2",{staticClass:"vue-doc-element",attrs:{id:"vue-doc-api1"}},[s._v("API")]),s._v(" "),e("h3",{staticClass:"vue-doc-element",attrs:{id:"vue-doc-modalprops1_1"}},[s._v("Modal props")]),s._v(" "),e("table",{staticClass:"vue-doc-element"},[e("thead",[e("tr",[e("th",[s._v("属性")]),s._v(" "),e("th",[s._v("说明")]),s._v(" "),e("th",[s._v("类型")]),s._v(" "),e("th",[s._v("默认值")])])]),s._v(" "),e("tbody",[e("tr",[e("td"),s._v(" "),e("td"),s._v(" "),e("td")])])]),s._v(" "),e("h3",{staticClass:"vue-doc-element",attrs:{id:"vue-doc-aaa1_2"}},[s._v("aaa")])])}]};var d=e("VU/8")(v,_,!1,function(s){e("/SHh")},null,null);t.default=d.exports},ZGHu:function(s,t){},gPHk:function(s,t){}});
//# sourceMappingURL=32.239e6202fe29bbbe5dab.js.map