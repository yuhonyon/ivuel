webpackJsonp([56],{"7zHa":function(s,t){},FPBd:function(s,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var e=a("go92"),n=a.n(e),c={mixins:[{data:function(){return{showVueDocCode:!1,vueDocCodeCopyText:"copy",vueDocCodeHeight:0}},methods:{vueDocCodeToggle:function(){this.showVueDocCode=!this.showVueDocCode,this.vueDocCodeHeight=this.vueDocCodeHeight||this.$refs.vueDocCodeBox.children[0].offsetHeight,this.$refs.vueDocCodeBox.style.height=this.showVueDocCode?this.vueDocCodeHeight+50+"px":"0px"},vueDocCodeCopy:function(){var s=this,t=new n.a(".vue-doc-code-copy",{text:function(s){return s.nextElementSibling.textContent}});t.on("success",function(a){s.vueDocCodeCopyText="copy success!",setTimeout(function(){s.vueDocCodeCopyText="copy"},1e3),a.clearSelection(),t.destroy()})}},components:{}}]},v={render:function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"vue-doc-wrapper"},[s._m(0),s._v(" "),s._m(1),s._v(" "),a("div",{staticClass:"vue-doc-content"}),s._v(" "),a("div",{staticClass:"vue-doc-content-EN"}),s._v(" "),a("div",{staticClass:"vue-doc-demo"},[[a("Button",[s._v("Default")]),s._v(" "),a("Button",{attrs:{type:"primary"}},[s._v("Primary")]),s._v(" "),a("Button",{attrs:{type:"ghost"}},[s._v("Ghost")]),s._v(" "),a("Button",{attrs:{type:"dashed"}},[s._v("Dashed")]),s._v(" "),a("Button",{attrs:{type:"text"}},[s._v("Text")]),s._v(" "),a("br"),a("br"),s._v(" "),a("Button",{attrs:{type:"info"}},[s._v("Info")]),s._v(" "),a("Button",{attrs:{type:"success"}},[s._v("Success")]),s._v(" "),a("Button",{attrs:{type:"warning"}},[s._v("Warning")]),s._v(" "),a("Button",{attrs:{type:"error"}},[s._v("Error")])]],2),s._v(" "),a("div",{staticClass:"vue-doc-code",class:{"vue-doc-code-show":s.showVueDocCode}},[a("div",{staticClass:"vue-doc-code-copy",on:{click:s.vueDocCodeCopy}},[s._v(s._s(s.vueDocCodeCopyText))]),s._v(" "),a("div",{ref:"vueDocCodeBox",staticClass:"vue-doc-code-content"},[s._m(2)]),s._v(" "),a("div",{staticClass:"vue-doc-code-toggle",on:{click:s.vueDocCodeToggle}},[a("span",{staticClass:"vue-doc-code-toggle-text"},[s._v("</>"+s._s(s.showVueDocCode?"隐藏代码":"显示代码"))]),s._v(" "),a("span",{staticClass:"vue-doc-code-toggle-text-EN"},[s._v("</>"+s._s(s.showVueDocCode?"Hide Code":"Show Code"))])])])])},staticRenderFns:[function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"vue-doc-title"},[t("h2",{attrs:{id:"vue-doc-按钮尺寸1"}},[this._v("按钮尺寸")]),this._v(" "),t("p",[this._v("按钮有六种类型：主按钮、次按钮、虚线按钮、危险按钮。")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"vue-doc-title-EN"},[t("h2",{attrs:{id:"vue-doc-buttonsize1"}},[this._v("Button Size")]),this._v(" "),t("p",[this._v("Button")])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("pre",[a("code",{staticClass:"lang-vue"},[a("span",{staticClass:"xml"},[a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("template")]),s._v(">")]),s._v("\n    "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("Button")]),s._v(">")]),s._v("Default"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("Button")]),s._v(">")]),s._v("\n    "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("Button")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("type")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"primary"')]),s._v(">")]),s._v("Primary"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("Button")]),s._v(">")]),s._v("\n    "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("Button")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("type")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"ghost"')]),s._v(">")]),s._v("Ghost"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("Button")]),s._v(">")]),s._v("\n    "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("Button")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("type")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"dashed"')]),s._v(">")]),s._v("Dashed"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("Button")]),s._v(">")]),s._v("\n    "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("Button")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("type")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"text"')]),s._v(">")]),s._v("Text"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("Button")]),s._v(">")]),s._v("\n    "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("br")]),s._v(">")]),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("br")]),s._v(">")]),s._v("\n    "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("Button")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("type")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"info"')]),s._v(">")]),s._v("Info"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("Button")]),s._v(">")]),s._v("\n    "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("Button")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("type")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"success"')]),s._v(">")]),s._v("Success"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("Button")]),s._v(">")]),s._v("\n    "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("Button")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("type")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"warning"')]),s._v(">")]),s._v("Warning"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("Button")]),s._v(">")]),s._v("\n    "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("Button")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("type")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"error"')]),s._v(">")]),s._v("Error"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("Button")]),s._v(">")]),s._v("\n"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("template")]),s._v(">")]),s._v("\n"),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("script")]),s._v(">")]),a("span",{staticClass:"javascript"},[s._v("\n    "),a("span",{staticClass:"hljs-keyword"},[s._v("export")]),s._v(" "),a("span",{staticClass:"hljs-keyword"},[s._v("default")]),s._v(" ")])]),a("span",{staticClass:"hljs-template-variable"},[s._v("{\n\n    }")]),a("span",{staticClass:"xml"},[a("span",{staticClass:"undefined"},[s._v("\n")]),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("script")]),s._v(">")])]),s._v("\n")])])}]};var i={mixins:[{data:function(){return{showVueDocCode:!1,vueDocCodeCopyText:"copy",vueDocCodeHeight:0}},methods:{vueDocCodeToggle:function(){this.showVueDocCode=!this.showVueDocCode,this.vueDocCodeHeight=this.vueDocCodeHeight||this.$refs.vueDocCodeBox.children[0].offsetHeight,this.$refs.vueDocCodeBox.style.height=this.showVueDocCode?this.vueDocCodeHeight+50+"px":"0px"},vueDocCodeCopy:function(){var s=this,t=new n.a(".vue-doc-code-copy",{text:function(s){return s.nextElementSibling.textContent}});t.on("success",function(a){s.vueDocCodeCopyText="copy success!",setTimeout(function(){s.vueDocCodeCopyText="copy"},1e3),a.clearSelection(),t.destroy()})}},components:{}}]},o={render:function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"vue-doc-wrapper"},[s._m(0),s._v(" "),s._m(1),s._v(" "),s._m(2),s._v(" "),s._m(3),s._v(" "),a("div",{staticClass:"vue-doc-demo"},[[a("Button",{attrs:{type:"primary",shape:"circle",icon:"ios-search"}}),s._v(" "),a("Button",{attrs:{type:"primary",icon:"ios-search"}},[s._v("Search")]),s._v(" "),a("Button",{attrs:{type:"primary",shape:"circle",icon:"ios-search"}},[s._v("Search")]),s._v(" "),a("Button",{attrs:{type:"primary",shape:"circle"}},[s._v("Circle")]),s._v(" "),a("br"),a("br"),s._v(" "),a("Button",{attrs:{type:"ghost",shape:"circle",icon:"ios-search"}}),s._v(" "),a("Button",{attrs:{type:"ghost",icon:"ios-search"}},[s._v("Search")]),s._v(" "),a("Button",{attrs:{type:"ghost",shape:"circle",icon:"ios-search"}},[s._v("Search")]),s._v(" "),a("Button",{attrs:{type:"ghost",shape:"circle"}},[s._v("Circle")])]],2),s._v(" "),a("div",{staticClass:"vue-doc-code",class:{"vue-doc-code-show":s.showVueDocCode}},[a("div",{staticClass:"vue-doc-code-copy",on:{click:s.vueDocCodeCopy}},[s._v(s._s(s.vueDocCodeCopyText))]),s._v(" "),a("div",{ref:"vueDocCodeBox",staticClass:"vue-doc-code-content"},[s._m(4)]),s._v(" "),a("div",{staticClass:"vue-doc-code-toggle",on:{click:s.vueDocCodeToggle}},[a("span",{staticClass:"vue-doc-code-toggle-text"},[s._v("</>"+s._s(s.showVueDocCode?"隐藏代码":"显示代码"))]),s._v(" "),a("span",{staticClass:"vue-doc-code-toggle-text-EN"},[s._v("</>"+s._s(s.showVueDocCode?"Hide Code":"Show Code"))])])])])},staticRenderFns:[function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"vue-doc-title"},[t("h2",{attrs:{id:"vue-doc-icon形状1"}},[this._v("icon&形状")]),this._v(" "),t("p",[this._v("设置按钮形状和图标。")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"vue-doc-title-EN"},[t("h2",{attrs:{id:"vue-doc-iconshapes1"}},[this._v("icon&shapes")]),this._v(" "),t("p",[this._v("Button")])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"vue-doc-content"},[a("p",[s._v("通过设置"),a("code",[s._v("icon")]),s._v("属性在"),a("code",[s._v("Button")]),s._v("内嵌入一个"),a("code",[s._v("Icon")]),s._v("，或者直接在"),a("code",[s._v("Button")]),s._v("内使用"),a("code",[s._v("Icon")]),s._v("组件。")]),s._v(" "),a("p",[s._v("使用"),a("code",[s._v("Button")]),s._v("的"),a("code",[s._v("icon")]),s._v("属性，图标位置将在最左边，如果需要自定义位置，需使用"),a("code",[s._v("Icon")]),s._v("组件。")]),s._v(" "),a("p",[s._v("通过设置"),a("code",[s._v("shape")]),s._v("属性为"),a("code",[s._v("circle")]),s._v("，可将按钮置为圆的形状。")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"vue-doc-content-EN"},[t("p",[this._v("Set the icon to insert an Icon to the Button, or use the Icon component inside the Button directly.")]),this._v(" "),t("p",[this._v("The icon would appear at the leftmost side of the Button when\nusing the icon; use Icon component for different icons' positions.")]),this._v(" "),t("p",[this._v("Set the shape to circle to use a circle button.")])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("pre",[a("code",{staticClass:"lang-vue"},[a("span",{staticClass:"xml"},[a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("template")]),s._v(">")]),s._v("\n    "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("Button")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("type")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"primary"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("shape")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"circle"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("icon")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"ios-search"')]),s._v(">")]),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("Button")]),s._v(">")]),s._v("\n    "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("Button")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("type")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"primary"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("icon")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"ios-search"')]),s._v(">")]),s._v("Search"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("Button")]),s._v(">")]),s._v("\n    "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("Button")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("type")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"primary"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("shape")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"circle"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("icon")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"ios-search"')]),s._v(">")]),s._v("Search"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("Button")]),s._v(">")]),s._v("\n    "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("Button")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("type")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"primary"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("shape")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"circle"')]),s._v(">")]),s._v("Circle"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("Button")]),s._v(">")]),s._v("\n    "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("br")]),s._v(">")]),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("br")]),s._v(">")]),s._v("\n    "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("Button")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("type")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"ghost"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("shape")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"circle"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("icon")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"ios-search"')]),s._v(">")]),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("Button")]),s._v(">")]),s._v("\n    "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("Button")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("type")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"ghost"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("icon")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"ios-search"')]),s._v(">")]),s._v("Search"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("Button")]),s._v(">")]),s._v("\n    "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("Button")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("type")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"ghost"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("shape")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"circle"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("icon")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"ios-search"')]),s._v(">")]),s._v("Search"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("Button")]),s._v(">")]),s._v("\n    "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("Button")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("type")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"ghost"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("shape")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"circle"')]),s._v(">")]),s._v("Circle"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("Button")]),s._v(">")]),s._v("\n"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("template")]),s._v(">")]),s._v("\n"),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("script")]),s._v(">")]),a("span",{staticClass:"javascript"},[s._v("\n    "),a("span",{staticClass:"hljs-keyword"},[s._v("export")]),s._v(" "),a("span",{staticClass:"hljs-keyword"},[s._v("default")]),s._v(" ")])]),a("span",{staticClass:"hljs-template-variable"},[s._v("{\n\n    }")]),a("span",{staticClass:"xml"},[a("span",{staticClass:"undefined"},[s._v("\n")]),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("script")]),s._v(">")])]),s._v("\n")])])}]};var l={mixins:[{data:function(){return{showVueDocCode:!1,vueDocCodeCopyText:"copy",vueDocCodeHeight:0}},methods:{vueDocCodeToggle:function(){this.showVueDocCode=!this.showVueDocCode,this.vueDocCodeHeight=this.vueDocCodeHeight||this.$refs.vueDocCodeBox.children[0].offsetHeight,this.$refs.vueDocCodeBox.style.height=this.showVueDocCode?this.vueDocCodeHeight+50+"px":"0px"},vueDocCodeCopy:function(){var s=this,t=new n.a(".vue-doc-code-copy",{text:function(s){return s.nextElementSibling.textContent}});t.on("success",function(a){s.vueDocCodeCopyText="copy success!",setTimeout(function(){s.vueDocCodeCopyText="copy"},1e3),a.clearSelection(),t.destroy()})}},components:{demobasic:a("D8HT")(c,v,!1,function(s){a("iRZS")},null,null).exports,demoshapes:a("D8HT")(i,o,!1,function(s){a("7zHa")},null,null).exports}}]},_={render:function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"vue-doc-wrapper"},[s._m(0),s._v(" "),s._m(1),s._v(" "),s._m(2),s._v(" "),a("div",{staticClass:"vue-doc-components"},[a("demobasic"),s._v(" "),a("demoshapes")],1),s._v(" "),s._m(3),s._v(" "),s._m(4)])},staticRenderFns:[function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"vue-doc-submenu"},[t("ul",{staticClass:"vue-doc-submenu-list"},[t("li",[t("a",{attrs:{href:"#vue-doc-按钮尺寸1"}},[this._v("按钮尺寸")])]),t("li",[t("a",{attrs:{href:"#vue-doc-icon形状1"}},[this._v("icon&形状")])])]),t("ul",{staticClass:"vue-doc-submenu-list-EN"},[t("li",[t("a",{attrs:{href:"#vue-doc-ButtonSize1"}},[this._v("Button Size")])]),t("li",[t("a",{attrs:{href:"#vue-doc-iconshapes1"}},[this._v("icon&shapes")])])])])},function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"vue-doc-title"},[t("h1",{attrs:{id:"vue-doc-button按钮1"}},[this._v("Button 按钮")]),this._v(" "),t("p",[this._v("基础组件，触发业务逻辑时使用。")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"vue-doc-title-EN"},[t("h1",{attrs:{id:"vue-doc-button1"}},[this._v("Button")]),this._v(" "),t("p",[this._v("Basic component that is used to trigger bussiness logic.")])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"vue-doc-content"},[a("h2",{attrs:{id:"vue-doc-api1"}},[s._v("API")]),s._v(" "),a("table",[a("thead",[a("tr",[a("th",[s._v("属性")]),s._v(" "),a("th",{staticStyle:{"text-align":"right"}},[s._v("说明")]),s._v(" "),a("th",{staticStyle:{"text-align":"center"}},[s._v("类型")]),s._v(" "),a("th",{staticStyle:{"text-align":"center"}},[s._v("默认值")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("type")]),s._v(" "),a("td",{staticStyle:{"text-align":"right"}},[s._v("按钮类型，可选值为primary、ghost、dashed、text、info、success、warning、error或者不设置")]),s._v(" "),a("td",{staticStyle:{"text-align":"center"}},[s._v("String")]),s._v(" "),a("td",{staticStyle:{"text-align":"center"}},[s._v("-")])])])])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"vue-doc-content-EN"},[a("h2",{attrs:{id:"vue-doc-api1"}},[s._v("API")]),s._v(" "),a("table",[a("thead",[a("tr",[a("th",[s._v("Attribute")]),s._v(" "),a("th",{staticStyle:{"text-align":"right"}},[s._v("Explanation")]),s._v(" "),a("th",{staticStyle:{"text-align":"center"}},[s._v("Type")]),s._v(" "),a("th",{staticStyle:{"text-align":"center"}},[s._v("Default")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("type")]),s._v(" "),a("td",{staticStyle:{"text-align":"right"}},[s._v("Button type, options include primary、ghost、dashed、text、info、success、warning、error, optional")]),s._v(" "),a("td",{staticStyle:{"text-align":"center"}},[s._v("String")]),s._v(" "),a("td",{staticStyle:{"text-align":"center"}},[s._v("-")])])])])])}]};var h=a("D8HT")(l,_,!1,function(s){a("og5z")},null,null);t.default=h.exports},iRZS:function(s,t){},og5z:function(s,t){}});
//# sourceMappingURL=56.67735a5001127564605f.js.map