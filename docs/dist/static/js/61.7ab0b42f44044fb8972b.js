webpackJsonp([61],{"0hZ6":function(s,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var e=a("go92"),n=a.n(e),o={mixins:[{data:function(){return{showVueDocCode:!1,vueDocCodeCopyText:"copy",vueDocCodeHeight:0}},methods:{vueDocCodeToggle:function(){this.showVueDocCode=!this.showVueDocCode,this.vueDocCodeHeight=this.vueDocCodeHeight||this.$refs.vueDocCodeBox.children[0].offsetHeight,this.$refs.vueDocCodeBox.style.height=this.showVueDocCode?this.vueDocCodeHeight+50+"px":"0px"},vueDocCodeCopy:function(){var s=this,t=new n.a(".vue-doc-code-copy",{text:function(s){return s.nextElementSibling.textContent}});t.on("success",function(a){s.vueDocCodeCopyText="copy success!",setTimeout(function(){s.vueDocCodeCopyText="copy"},1e3),a.clearSelection(),t.destroy()})}},components:{}}],data:function(){return{modal1:!1}},methods:{ok:function(){this.$Message.info("Clicked ok")},cancel:function(){this.$Message.info("Clicked cancel")}}},l={render:function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"vue-doc-wrapper"},[s._m(0),s._v(" "),s._m(1),s._v(" "),a("div",{staticClass:"vue-doc-content"}),s._v(" "),a("div",{staticClass:"vue-doc-content-EN"}),s._v(" "),a("div",{staticClass:"vue-doc-demo"},[[a("Button",{attrs:{type:"primary"},on:{click:function(t){s.modal1=!0}}},[s._v("Display dialog box")]),s._v(" "),a("Modal",{attrs:{title:"Common Modal dialog box title"},on:{"on-ok":s.ok,"on-cancel":s.cancel},model:{value:s.modal1,callback:function(t){s.modal1=t},expression:"modal1"}},[a("p",[s._v("Content of dialog")]),s._v(" "),a("p",[s._v("Content of dialog")]),s._v(" "),a("p",[s._v("Content of dialog")]),s._v(" "),a("p",[s._v("Content of dialog")]),s._v(" "),a("p",[s._v("Content of dialog")]),s._v(" "),a("p",[s._v("Content of dialog")]),s._v(" "),a("p",[s._v("Content of dialog")]),s._v(" "),a("p",[s._v("Content of dialog")]),s._v(" "),a("p",[s._v("Content of dialog")]),s._v(" "),a("p",[s._v("Content of dialog")]),s._v(" "),a("p",[s._v("Content of dialog")]),s._v(" "),a("p",[s._v("Content of dialog")]),s._v(" "),a("p",[s._v("Content of dialog")]),s._v(" "),a("p",[s._v("Content of dialog")]),s._v(" "),a("p",[s._v("Content of dialog")])])]],2),s._v(" "),a("div",{staticClass:"vue-doc-code",class:{"vue-doc-code-show":s.showVueDocCode}},[a("div",{staticClass:"vue-doc-code-copy",on:{click:s.vueDocCodeCopy}},[s._v(s._s(s.vueDocCodeCopyText))]),s._v(" "),a("div",{ref:"vueDocCodeBox",staticClass:"vue-doc-code-content"},[s._m(2)]),s._v(" "),a("div",{staticClass:"vue-doc-code-toggle",on:{click:s.vueDocCodeToggle}},[a("span",{staticClass:"vue-doc-code-toggle-text"},[s._v("</>"+s._s(s.showVueDocCode?"隐藏代码":"显示代码"))]),s._v(" "),a("span",{staticClass:"vue-doc-code-toggle-text-EN"},[s._v("</>"+s._s(s.showVueDocCode?"Hide Code":"Show Code"))])])])])},staticRenderFns:[function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"vue-doc-title"},[t("h2",{staticClass:"vue-doc-element",attrs:{id:"vue-doc-模态框1"}},[this._v("模态框")]),this._v(" "),t("p",{staticClass:"vue-doc-element"},[this._v("按钮有六种类型：主按钮、次按钮、虚线按钮、危险按钮。")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"vue-doc-title-EN"},[t("h2",{staticClass:"vue-doc-element",attrs:{id:"vue-doc-buttonsize1"}},[this._v("Button Size")]),this._v(" "),t("p",{staticClass:"vue-doc-element"},[this._v("Button")])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("pre",{staticClass:"vue-doc-element"},[a("code",{staticClass:"lang-vue"},[a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("template")]),s._v(">")]),s._v("\n    "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("Button")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("type")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"primary"')]),s._v(" @"),a("span",{staticClass:"hljs-attr"},[s._v("click")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"modal1 = true"')]),s._v(">")]),s._v("Display dialog box"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("Button")]),s._v(">")]),s._v("\n    "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("Modal")]),s._v("\n        "),a("span",{staticClass:"hljs-attr"},[s._v("v-model")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"modal1"')]),s._v("\n        "),a("span",{staticClass:"hljs-attr"},[s._v("title")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"Common Modal dialog box title"')]),s._v("\n        @"),a("span",{staticClass:"hljs-attr"},[s._v("on-ok")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"ok"')]),s._v("\n        @"),a("span",{staticClass:"hljs-attr"},[s._v("on-cancel")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"cancel"')]),s._v(">")]),s._v("\n        "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("p")]),s._v(">")]),s._v("Content of dialog"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("p")]),s._v(">")]),s._v("\n        "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("p")]),s._v(">")]),s._v("Content of dialog"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("p")]),s._v(">")]),s._v("\n        "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("p")]),s._v(">")]),s._v("Content of dialog"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("p")]),s._v(">")]),s._v("\n        "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("p")]),s._v(">")]),s._v("Content of dialog"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("p")]),s._v(">")]),s._v("\n        "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("p")]),s._v(">")]),s._v("Content of dialog"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("p")]),s._v(">")]),s._v("\n        "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("p")]),s._v(">")]),s._v("Content of dialog"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("p")]),s._v(">")]),s._v("\n        "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("p")]),s._v(">")]),s._v("Content of dialog"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("p")]),s._v(">")]),s._v("\n        "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("p")]),s._v(">")]),s._v("Content of dialog"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("p")]),s._v(">")]),s._v("\n        "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("p")]),s._v(">")]),s._v("Content of dialog"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("p")]),s._v(">")]),s._v("\n        "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("p")]),s._v(">")]),s._v("Content of dialog"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("p")]),s._v(">")]),s._v("\n        "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("p")]),s._v(">")]),s._v("Content of dialog"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("p")]),s._v(">")]),s._v("\n        "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("p")]),s._v(">")]),s._v("Content of dialog"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("p")]),s._v(">")]),s._v("\n        "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("p")]),s._v(">")]),s._v("Content of dialog"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("p")]),s._v(">")]),s._v("\n        "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("p")]),s._v(">")]),s._v("Content of dialog"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("p")]),s._v(">")]),s._v("\n        "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("p")]),s._v(">")]),s._v("Content of dialog"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("p")]),s._v(">")]),s._v("\n    "),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("Modal")]),s._v(">")]),s._v("\n"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("template")]),s._v(">")]),s._v("\n"),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("script")]),s._v(">")]),a("span",{staticClass:"javascript"},[s._v("\n    "),a("span",{staticClass:"hljs-keyword"},[s._v("export")]),s._v(" "),a("span",{staticClass:"hljs-keyword"},[s._v("default")]),s._v(" {\n        data () {\n            "),a("span",{staticClass:"hljs-keyword"},[s._v("return")]),s._v(" {\n                "),a("span",{staticClass:"hljs-attr"},[s._v("modal1")]),s._v(": "),a("span",{staticClass:"hljs-literal"},[s._v("false")]),s._v("\n            }\n        },\n        "),a("span",{staticClass:"hljs-attr"},[s._v("methods")]),s._v(": {\n            ok () {\n                "),a("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".$Message.info("),a("span",{staticClass:"hljs-string"},[s._v("'Clicked ok'")]),s._v(");\n            },\n            cancel () {\n                "),a("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".$Message.info("),a("span",{staticClass:"hljs-string"},[s._v("'Clicked cancel'")]),s._v(");\n            }\n        }\n    }\n")]),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("script")]),s._v(">")]),s._v("\n")])])}]};var v={mixins:[{data:function(){return{showVueDocCode:!1,vueDocCodeCopyText:"copy",vueDocCodeHeight:0}},methods:{vueDocCodeToggle:function(){this.showVueDocCode=!this.showVueDocCode,this.vueDocCodeHeight=this.vueDocCodeHeight||this.$refs.vueDocCodeBox.children[0].offsetHeight,this.$refs.vueDocCodeBox.style.height=this.showVueDocCode?this.vueDocCodeHeight+50+"px":"0px"},vueDocCodeCopy:function(){var s=this,t=new n.a(".vue-doc-code-copy",{text:function(s){return s.nextElementSibling.textContent}});t.on("success",function(a){s.vueDocCodeCopyText="copy success!",setTimeout(function(){s.vueDocCodeCopyText="copy"},1e3),a.clearSelection(),t.destroy()})}},components:{demobasic:a("D8HT")(o,l,!1,function(s){a("nzk8")},null,null).exports}}]},i={render:function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"vue-doc-wrapper"},[s._m(0),s._v(" "),s._m(1),s._v(" "),s._m(2),s._v(" "),a("div",{staticClass:"vue-doc-components"},[a("demobasic")],1),s._v(" "),a("div",{staticClass:"vue-doc-content"}),s._v(" "),a("div",{staticClass:"vue-doc-content-EN"})])},staticRenderFns:[function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"vue-doc-submenu"},[t("ul",{staticClass:"vue-doc-submenu-list"},[t("li",[t("a",{attrs:{href:"#vue-doc-模态框1"}},[this._v("模态框")])])]),t("ul",{staticClass:"vue-doc-submenu-list-EN"},[t("li",[t("a",{attrs:{href:"#vue-doc-ButtonSize1"}},[this._v("Button Size")])])])])},function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"vue-doc-title"},[t("p",{staticClass:"vue-doc-element"},[this._v("# ")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"vue-doc-title-EN"},[t("p",{staticClass:"vue-doc-element"},[this._v("# ")])])}]};var c=a("D8HT")(v,i,!1,function(s){a("mM96")},null,null);t.default=c.exports},mM96:function(s,t){},nzk8:function(s,t){}});
//# sourceMappingURL=61.7ab0b42f44044fb8972b.js.map