webpackJsonp([10],{SwVT:function(s,t){},T6D4:function(s,t){},XvB7:function(s,t){},j1iy:function(s,t){},"sJ/W":function(s,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var e=a("TQvf"),n=a.n(e),l={mixins:[{data:function(){return{showVueDocCode:!1,vueDocCodeCopyText:"copy",vueDocCodeHeight:0}},methods:{vueDocCodeToggle:function(){this.showVueDocCode=!this.showVueDocCode,this.vueDocCodeHeight=this.vueDocCodeHeight||this.$refs.vueDocCodeBox.children[0].offsetHeight,this.$refs.vueDocCodeBox.style.height=this.showVueDocCode?this.vueDocCodeHeight+50+"px":"0px"},vueDocCodeCopy:function(){var s=this,t=new n.a(".vue-doc-code-copy",{text:function(s){return s.nextElementSibling.textContent}});t.on("success",function(a){s.vueDocCodeCopyText="copy success!",setTimeout(function(){s.vueDocCodeCopyText="copy"},1e3),a.clearSelection(),t.destroy()})}},components:{}}]},v={render:function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"vue-doc-wrapper"},[s._m(0),s._v(" "),s._m(1),s._v(" "),a("div",{staticClass:"vue-doc-content"}),s._v(" "),a("div",{staticClass:"vue-doc-content-EN"}),s._v(" "),a("div",{staticClass:"vue-doc-demo"},[[a("div",{staticClass:"top"},[a("Tooltip",{attrs:{content:"Top Left text",trigger:"click",placement:"top-start"}},[a("Button",[s._v("Top Left")])],1),s._v(" "),a("Tooltip",{attrs:{content:"Top Center text",placement:"top"}},[a("Button",[s._v("Top Center")])],1),s._v(" "),a("Tooltip",{attrs:{content:"Top Right text",placement:"top-end"}},[a("Button",[s._v("Top Right")])],1)],1),s._v(" "),a("div",{staticClass:"center"},[a("div",{staticClass:"center-left"},[a("Tooltip",{attrs:{content:"Left Top text",placement:"left-start"}},[a("Button",[s._v("Left Top")])],1),a("br"),a("br"),s._v(" "),a("Tooltip",{attrs:{content:"Left Center text",placement:"left"}},[a("Button",[s._v("Left Center")])],1),a("br"),a("br"),s._v(" "),a("Tooltip",{attrs:{content:"Left Bottom text",placement:"left-end"}},[a("Button",[s._v("Left Bottom")])],1)],1),s._v(" "),a("div",{staticClass:"center-right"},[a("Tooltip",{attrs:{content:"Right Top text",placement:"right-start"}},[a("Button",[s._v("Right Top")])],1),a("br"),a("br"),s._v(" "),a("Tooltip",{attrs:{content:"Right Center text",placement:"right"}},[a("Button",[s._v("Right Center")])],1),a("br"),a("br"),s._v(" "),a("Tooltip",{attrs:{content:"Right Bottom text",placement:"right-end"}},[a("Button",[s._v("Right Bottom")])],1)],1)]),s._v(" "),a("div",{staticClass:"bottom"},[a("Tooltip",{attrs:{content:"Bottom Left text",placement:"bottom-start"}},[a("Button",[s._v("Bottom Left")])],1),s._v(" "),a("Tooltip",{attrs:{content:"Bottom Center text",placement:"bottom"}},[a("Button",[s._v("Bottom Center")])],1),s._v(" "),a("Tooltip",{attrs:{content:"Bottom Right text",placement:"bottom-end"}},[a("Button",[s._v("Bottom Right")])],1)],1)]],2),s._v(" "),a("div",{staticClass:"vue-doc-code",class:{"vue-doc-code-show":s.showVueDocCode}},[a("div",{staticClass:"vue-doc-code-copy",on:{click:s.vueDocCodeCopy}},[s._v(s._s(s.vueDocCodeCopyText))]),s._v(" "),a("div",{ref:"vueDocCodeBox",staticClass:"vue-doc-code-content"},[s._m(2)]),s._v(" "),a("div",{staticClass:"vue-doc-code-toggle",on:{click:s.vueDocCodeToggle}},[a("span",{staticClass:"vue-doc-code-toggle-text"},[s._v("</>"+s._s(s.showVueDocCode?"隐藏代码":"显示代码"))]),s._v(" "),a("span",{staticClass:"vue-doc-code-toggle-text-EN"},[s._v("</>"+s._s(s.showVueDocCode?"Hide Code":"Show Code"))])])])])},staticRenderFns:[function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"vue-doc-title"},[t("h2",{staticClass:"vue-doc-element",attrs:{id:"vue-doc-按钮尺寸1"}},[this._v("按钮尺寸")]),this._v(" "),t("p",{staticClass:"vue-doc-element"},[this._v("按钮有六种类型：主按钮、次按钮、虚线按钮、危险按钮。")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"vue-doc-title-EN"},[t("h2",{staticClass:"vue-doc-element",attrs:{id:"vue-doc-buttonsize1"}},[this._v("Button Size")]),this._v(" "),t("p",{staticClass:"vue-doc-element"},[this._v("Button")])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("pre",{staticClass:"vue-doc-element"},[a("code",{staticClass:"lang-vue"},[a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("template")]),s._v(">")]),s._v("\n    "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("class")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"top"')]),s._v(">")]),s._v("\n        "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("Tooltip")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("content")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"Top Left text"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("trigger")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"click"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("placement")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"top-start"')]),s._v(">")]),s._v("\n            "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("Button")]),s._v(">")]),s._v("Top Left"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("Button")]),s._v(">")]),s._v("\n        "),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("Tooltip")]),s._v(">")]),s._v("\n        "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("Tooltip")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("content")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"Top Center text"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("placement")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"top"')]),s._v(">")]),s._v("\n            "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("Button")]),s._v(">")]),s._v("Top Center"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("Button")]),s._v(">")]),s._v("\n        "),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("Tooltip")]),s._v(">")]),s._v("\n        "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("Tooltip")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("content")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"Top Right text"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("placement")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"top-end"')]),s._v(">")]),s._v("\n            "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("Button")]),s._v(">")]),s._v("Top Right"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("Button")]),s._v(">")]),s._v("\n        "),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("Tooltip")]),s._v(">")]),s._v("\n    "),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(">")]),s._v("\n    "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("class")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"center"')]),s._v(">")]),s._v("\n        "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("class")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"center-left"')]),s._v(">")]),s._v("\n            "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("Tooltip")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("content")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"Left Top text"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("placement")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"left-start"')]),s._v(">")]),s._v("\n                "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("Button")]),s._v(">")]),s._v("Left Top"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("Button")]),s._v(">")]),s._v("\n            "),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("Tooltip")]),s._v(">")]),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("br")]),s._v(">")]),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("br")]),s._v(">")]),s._v("\n            "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("Tooltip")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("content")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"Left Center text"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("placement")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"left"')]),s._v(">")]),s._v("\n                "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("Button")]),s._v(">")]),s._v("Left Center"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("Button")]),s._v(">")]),s._v("\n            "),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("Tooltip")]),s._v(">")]),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("br")]),s._v(">")]),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("br")]),s._v(">")]),s._v("\n            "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("Tooltip")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("content")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"Left Bottom text"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("placement")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"left-end"')]),s._v(">")]),s._v("\n                "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("Button")]),s._v(">")]),s._v("Left Bottom"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("Button")]),s._v(">")]),s._v("\n            "),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("Tooltip")]),s._v(">")]),s._v("\n        "),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(">")]),s._v("\n        "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("class")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"center-right"')]),s._v(">")]),s._v("\n            "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("Tooltip")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("content")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"Right Top text"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("placement")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"right-start"')]),s._v(">")]),s._v("\n                "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("Button")]),s._v(">")]),s._v("Right Top"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("Button")]),s._v(">")]),s._v("\n            "),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("Tooltip")]),s._v(">")]),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("br")]),s._v(">")]),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("br")]),s._v(">")]),s._v("\n            "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("Tooltip")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("content")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"Right Center text"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("placement")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"right"')]),s._v(">")]),s._v("\n                "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("Button")]),s._v(">")]),s._v("Right Center"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("Button")]),s._v(">")]),s._v("\n            "),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("Tooltip")]),s._v(">")]),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("br")]),s._v(">")]),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("br")]),s._v(">")]),s._v("\n            "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("Tooltip")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("content")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"Right Bottom text"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("placement")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"right-end"')]),s._v(">")]),s._v("\n                "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("Button")]),s._v(">")]),s._v("Right Bottom"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("Button")]),s._v(">")]),s._v("\n            "),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("Tooltip")]),s._v(">")]),s._v("\n        "),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(">")]),s._v("\n    "),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(">")]),s._v("\n    "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("class")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"bottom"')]),s._v(">")]),s._v("\n        "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("Tooltip")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("content")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"Bottom Left text"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("placement")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"bottom-start"')]),s._v(">")]),s._v("\n            "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("Button")]),s._v(">")]),s._v("Bottom Left"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("Button")]),s._v(">")]),s._v("\n        "),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("Tooltip")]),s._v(">")]),s._v("\n        "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("Tooltip")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("content")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"Bottom Center text"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("placement")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"bottom"')]),s._v(">")]),s._v("\n            "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("Button")]),s._v(">")]),s._v("Bottom Center"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("Button")]),s._v(">")]),s._v("\n        "),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("Tooltip")]),s._v(">")]),s._v("\n        "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("Tooltip")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("content")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"Bottom Right text"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("placement")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"bottom-end"')]),s._v(">")]),s._v("\n            "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("Button")]),s._v(">")]),s._v("Bottom Right"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("Button")]),s._v(">")]),s._v("\n        "),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("Tooltip")]),s._v(">")]),s._v("\n    "),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(">")]),s._v("\n"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("template")]),s._v(">")]),s._v("\n"),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("script")]),s._v(">")]),a("span",{staticClass:"javascript"},[s._v("\n    "),a("span",{staticClass:"hljs-keyword"},[s._v("export")]),s._v(" "),a("span",{staticClass:"hljs-keyword"},[s._v("default")]),s._v(" {\n\n    }\n")]),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("script")]),s._v(">")]),s._v("\n"),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("style")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("scoped")]),s._v(">")]),a("span",{staticClass:"css"},[s._v("\n    "),a("span",{staticClass:"hljs-selector-class"},[s._v(".top")]),s._v(","),a("span",{staticClass:"hljs-selector-class"},[s._v(".bottom")]),s._v("{\n        "),a("span",{staticClass:"hljs-attribute"},[s._v("text-align")]),s._v(": center;\n    }\n    "),a("span",{staticClass:"hljs-selector-class"},[s._v(".center")]),s._v("{\n        "),a("span",{staticClass:"hljs-attribute"},[s._v("width")]),s._v(": "),a("span",{staticClass:"hljs-number"},[s._v("300px")]),s._v(";\n        "),a("span",{staticClass:"hljs-attribute"},[s._v("margin")]),s._v(": "),a("span",{staticClass:"hljs-number"},[s._v("10px")]),s._v(" auto;\n        "),a("span",{staticClass:"hljs-attribute"},[s._v("overflow")]),s._v(": hidden;\n    }\n    "),a("span",{staticClass:"hljs-selector-class"},[s._v(".center-left")]),s._v("{\n        "),a("span",{staticClass:"hljs-attribute"},[s._v("float")]),s._v(": left;\n    }\n    "),a("span",{staticClass:"hljs-selector-class"},[s._v(".center-right")]),s._v("{\n        "),a("span",{staticClass:"hljs-attribute"},[s._v("float")]),s._v(": right;\n    }\n")]),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("style")]),s._v(">")]),s._v("\n")])])}]};var i={mixins:[{data:function(){return{showVueDocCode:!1,vueDocCodeCopyText:"copy",vueDocCodeHeight:0}},methods:{vueDocCodeToggle:function(){this.showVueDocCode=!this.showVueDocCode,this.vueDocCodeHeight=this.vueDocCodeHeight||this.$refs.vueDocCodeBox.children[0].offsetHeight,this.$refs.vueDocCodeBox.style.height=this.showVueDocCode?this.vueDocCodeHeight+50+"px":"0px"},vueDocCodeCopy:function(){var s=this,t=new n.a(".vue-doc-code-copy",{text:function(s){return s.nextElementSibling.textContent}});t.on("success",function(a){s.vueDocCodeCopyText="copy success!",setTimeout(function(){s.vueDocCodeCopyText="copy"},1e3),a.clearSelection(),t.destroy()})}},components:{}}]},c={render:function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"vue-doc-wrapper"},[s._m(0),s._v(" "),s._m(1),s._v(" "),a("div",{staticClass:"vue-doc-content"}),s._v(" "),a("div",{staticClass:"vue-doc-content-EN"}),s._v(" "),a("div",{staticClass:"vue-doc-demo"},[[a("Button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:"aaa",expression:'"aaa"'}]},[s._v("Hover")]),s._v(" "),a("Tooltip",{ref:"aaa",attrs:{trigger:"hover",title:"Title",content:"content"}})]],2),s._v(" "),a("div",{staticClass:"vue-doc-code",class:{"vue-doc-code-show":s.showVueDocCode}},[a("div",{staticClass:"vue-doc-code-copy",on:{click:s.vueDocCodeCopy}},[s._v(s._s(s.vueDocCodeCopyText))]),s._v(" "),a("div",{ref:"vueDocCodeBox",staticClass:"vue-doc-code-content"},[s._m(2)]),s._v(" "),a("div",{staticClass:"vue-doc-code-toggle",on:{click:s.vueDocCodeToggle}},[a("span",{staticClass:"vue-doc-code-toggle-text"},[s._v("</>"+s._s(s.showVueDocCode?"隐藏代码":"显示代码"))]),s._v(" "),a("span",{staticClass:"vue-doc-code-toggle-text-EN"},[s._v("</>"+s._s(s.showVueDocCode?"Hide Code":"Show Code"))])])])])},staticRenderFns:[function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"vue-doc-title"},[t("h2",{staticClass:"vue-doc-element",attrs:{id:"vue-doc-按钮尺寸1"}},[this._v("按钮尺寸")]),this._v(" "),t("p",{staticClass:"vue-doc-element"},[this._v("按钮有六种类型：主按钮、次按钮、虚线按钮、危险按钮。")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"vue-doc-title-EN"},[t("h2",{staticClass:"vue-doc-element",attrs:{id:"vue-doc-buttonsize1"}},[this._v("Button Size")]),this._v(" "),t("p",{staticClass:"vue-doc-element"},[this._v("Button")])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("pre",{staticClass:"vue-doc-element"},[a("code",{staticClass:"lang-vue"},[a("span",{staticClass:"xml"},[a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("template")]),s._v(">")]),s._v("\n    "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("Button")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("v-tooltip")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v("'\"aaa\"'")]),s._v(" >")]),s._v("Hover"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("Button")]),s._v(">")]),s._v("\n    "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("Tooltip")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("ref")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"aaa"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("trigger")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"hover"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("title")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"Title"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("content")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"content"')]),s._v(">")]),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("Tooltip")]),s._v(">")]),s._v("\n\n"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("template")]),s._v(">")]),s._v("\n"),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("script")]),s._v(">")]),a("span",{staticClass:"javascript"},[s._v("\n    "),a("span",{staticClass:"hljs-keyword"},[s._v("export")]),s._v(" "),a("span",{staticClass:"hljs-keyword"},[s._v("default")]),s._v(" ")])]),a("span",{staticClass:"hljs-template-variable"},[s._v("{\n\n    }")]),a("span",{staticClass:"xml"},[a("span",{staticClass:"undefined"},[s._v("\n")]),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("script")]),s._v(">")])]),s._v("\n")])])}]};var o={mixins:[{data:function(){return{showVueDocCode:!1,vueDocCodeCopyText:"copy",vueDocCodeHeight:0}},methods:{vueDocCodeToggle:function(){this.showVueDocCode=!this.showVueDocCode,this.vueDocCodeHeight=this.vueDocCodeHeight||this.$refs.vueDocCodeBox.children[0].offsetHeight,this.$refs.vueDocCodeBox.style.height=this.showVueDocCode?this.vueDocCodeHeight+50+"px":"0px"},vueDocCodeCopy:function(){var s=this,t=new n.a(".vue-doc-code-copy",{text:function(s){return s.nextElementSibling.textContent}});t.on("success",function(a){s.vueDocCodeCopyText="copy success!",setTimeout(function(){s.vueDocCodeCopyText="copy"},1e3),a.clearSelection(),t.destroy()})}},components:{demobasic:a("VU/8")(l,v,!1,function(s){a("SwVT"),a("XvB7")},"data-v-12ff3c9b",null).exports,demodirective:a("VU/8")(i,c,!1,function(s){a("j1iy")},null,null).exports}}]},_={render:function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"vue-doc-wrapper"},[s._m(0),s._v(" "),s._m(1),s._v(" "),s._m(2),s._v(" "),a("div",{staticClass:"vue-doc-components"},[a("demobasic"),s._v(" "),a("demodirective")],1),s._v(" "),a("div",{staticClass:"vue-doc-content"}),s._v(" "),a("div",{staticClass:"vue-doc-content-EN"})])},staticRenderFns:[function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"vue-doc-submenu"},[t("ul",{staticClass:"vue-doc-submenu-list"},[t("li",[t("a",{attrs:{href:"#vue-doc-按钮尺寸1"}},[this._v("按钮尺寸")])]),t("li",[t("a",{attrs:{href:"#vue-doc-按钮尺寸1"}},[this._v("按钮尺寸")])])]),t("ul",{staticClass:"vue-doc-submenu-list-EN"},[t("li",[t("a",{attrs:{href:"#vue-doc-ButtonSize1"}},[this._v("Button Size")])]),t("li",[t("a",{attrs:{href:"#vue-doc-ButtonSize1"}},[this._v("Button Size")])])])])},function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"vue-doc-title"},[t("p",{staticClass:"vue-doc-element"},[this._v("# ")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"vue-doc-title-EN"},[t("p",{staticClass:"vue-doc-element"},[this._v("# ")])])}]};var p=a("VU/8")(o,_,!1,function(s){a("T6D4")},null,null);t.default=p.exports}});
//# sourceMappingURL=10.e8c64a382bc7b32e40b2.js.map