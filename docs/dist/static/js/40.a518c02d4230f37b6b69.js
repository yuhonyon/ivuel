webpackJsonp([40],{Al9q:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=e("go92"),c=e.n(a),n={mixins:[{data:function(){return{showVueDocCode:!1,vueDocCodeCopyText:"copy",vueDocCodeHeight:0}},methods:{vueDocCodeToggle:function(){this.showVueDocCode=!this.showVueDocCode,this.vueDocCodeHeight=this.vueDocCodeHeight||this.$refs.vueDocCodeBox.children[0].offsetHeight,this.$refs.vueDocCodeBox.style.height=this.showVueDocCode?this.vueDocCodeHeight+50+"px":"0px"},vueDocCodeCopy:function(){var t=this,s=new c.a(".vue-doc-code-copy",{text:function(t){return t.nextElementSibling.textContent}});s.on("success",function(e){t.vueDocCodeCopyText="copy success!",setTimeout(function(){t.vueDocCodeCopyText="copy"},1e3),e.clearSelection(),s.destroy()})}},components:{}}],data:function(){return{value:"#000"}}},i={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"vue-doc-wrapper"},[t._m(0),t._v(" "),t._m(1),t._v(" "),e("div",{staticClass:"vue-doc-content"}),t._v(" "),e("div",{staticClass:"vue-doc-content-EN"}),t._v(" "),e("div",{staticClass:"vue-doc-demo"},[[e("ColorPicker",{model:{value:t.value,callback:function(s){t.value=s},expression:"value"}})]],2),t._v(" "),e("div",{staticClass:"vue-doc-code",class:{"vue-doc-code-show":t.showVueDocCode}},[e("div",{staticClass:"vue-doc-code-copy",on:{click:t.vueDocCodeCopy}},[t._v(t._s(t.vueDocCodeCopyText))]),t._v(" "),e("div",{ref:"vueDocCodeBox",staticClass:"vue-doc-code-content"},[t._m(2)]),t._v(" "),e("div",{staticClass:"vue-doc-code-toggle",on:{click:t.vueDocCodeToggle}},[e("span",{staticClass:"vue-doc-code-toggle-text"},[t._v("</>"+t._s(t.showVueDocCode?"隐藏代码":"显示代码"))]),t._v(" "),e("span",{staticClass:"vue-doc-code-toggle-text-EN"},[t._v("</>"+t._s(t.showVueDocCode?"Hide Code":"Show Code"))])])])])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"vue-doc-title"},[s("h2",{attrs:{id:"vue-doc-按钮尺寸1"}},[this._v("按钮尺寸")]),this._v(" "),s("p",[this._v("按钮有六种类型：主按钮、次按钮、虚线按钮、危险按钮。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"vue-doc-title-EN"},[s("h2",{attrs:{id:"vue-doc-buttonsize1"}},[this._v("Button Size")]),this._v(" "),s("p",[this._v("Button")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("pre",[e("code",{staticClass:"lang-vue"},[e("span",{staticClass:"hljs-tag"},[t._v("<"),e("span",{staticClass:"hljs-name"},[t._v("template")]),t._v(">")]),t._v("\n    "),e("span",{staticClass:"hljs-tag"},[t._v("<"),e("span",{staticClass:"hljs-name"},[t._v("ColorPicker")]),t._v(" "),e("span",{staticClass:"hljs-attr"},[t._v("v-model")]),t._v("="),e("span",{staticClass:"hljs-string"},[t._v('"value"')]),t._v(">")]),e("span",{staticClass:"hljs-tag"},[t._v("</"),e("span",{staticClass:"hljs-name"},[t._v("ColorPicker")]),t._v(">")]),t._v("\n"),e("span",{staticClass:"hljs-tag"},[t._v("</"),e("span",{staticClass:"hljs-name"},[t._v("template")]),t._v(">")]),t._v("\n"),e("span",{staticClass:"hljs-tag"},[t._v("<"),e("span",{staticClass:"hljs-name"},[t._v("script")]),t._v(">")]),e("span",{staticClass:"javascript"},[t._v("\n    "),e("span",{staticClass:"hljs-keyword"},[t._v("export")]),t._v(" "),e("span",{staticClass:"hljs-keyword"},[t._v("default")]),t._v(" {\n      data(){\n        "),e("span",{staticClass:"hljs-keyword"},[t._v("return")]),t._v("{\n          "),e("span",{staticClass:"hljs-attr"},[t._v("value")]),t._v(":"),e("span",{staticClass:"hljs-string"},[t._v('"#000"')]),t._v("\n        }\n      }\n    }\n")]),e("span",{staticClass:"hljs-tag"},[t._v("</"),e("span",{staticClass:"hljs-name"},[t._v("script")]),t._v(">")]),t._v("\n")])])}]};var o={mixins:[{data:function(){return{showVueDocCode:!1,vueDocCodeCopyText:"copy",vueDocCodeHeight:0}},methods:{vueDocCodeToggle:function(){this.showVueDocCode=!this.showVueDocCode,this.vueDocCodeHeight=this.vueDocCodeHeight||this.$refs.vueDocCodeBox.children[0].offsetHeight,this.$refs.vueDocCodeBox.style.height=this.showVueDocCode?this.vueDocCodeHeight+50+"px":"0px"},vueDocCodeCopy:function(){var t=this,s=new c.a(".vue-doc-code-copy",{text:function(t){return t.nextElementSibling.textContent}});s.on("success",function(e){t.vueDocCodeCopyText="copy success!",setTimeout(function(){t.vueDocCodeCopyText="copy"},1e3),e.clearSelection(),s.destroy()})}},components:{}}]},v={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"vue-doc-wrapper"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),e("div",{staticClass:"vue-doc-demo"},[[e("Button",{attrs:{type:"primary",shape:"circle",icon:"ios-search"}}),t._v(" "),e("Button",{attrs:{type:"primary",icon:"ios-search"}},[t._v("Search")]),t._v(" "),e("Button",{attrs:{type:"primary",shape:"circle",icon:"ios-search"}},[t._v("Search")]),t._v(" "),e("Button",{attrs:{type:"primary",shape:"circle"}},[t._v("Circle")]),t._v(" "),e("br"),e("br"),t._v(" "),e("Button",{attrs:{type:"ghost",shape:"circle",icon:"ios-search"}}),t._v(" "),e("Button",{attrs:{type:"ghost",icon:"ios-search"}},[t._v("Search")]),t._v(" "),e("Button",{attrs:{type:"ghost",shape:"circle",icon:"ios-search"}},[t._v("Search")]),t._v(" "),e("Button",{attrs:{type:"ghost",shape:"circle"}},[t._v("Circle")])]],2),t._v(" "),e("div",{staticClass:"vue-doc-code",class:{"vue-doc-code-show":t.showVueDocCode}},[e("div",{staticClass:"vue-doc-code-copy",on:{click:t.vueDocCodeCopy}},[t._v(t._s(t.vueDocCodeCopyText))]),t._v(" "),e("div",{ref:"vueDocCodeBox",staticClass:"vue-doc-code-content"},[t._m(4)]),t._v(" "),e("div",{staticClass:"vue-doc-code-toggle",on:{click:t.vueDocCodeToggle}},[e("span",{staticClass:"vue-doc-code-toggle-text"},[t._v("</>"+t._s(t.showVueDocCode?"隐藏代码":"显示代码"))]),t._v(" "),e("span",{staticClass:"vue-doc-code-toggle-text-EN"},[t._v("</>"+t._s(t.showVueDocCode?"Hide Code":"Show Code"))])])])])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"vue-doc-title"},[s("h2",{attrs:{id:"vue-doc-icon形状1"}},[this._v("icon&形状")]),this._v(" "),s("p",[this._v("设置按钮形状和图标。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"vue-doc-title-EN"},[s("h2",{attrs:{id:"vue-doc-iconshapes1"}},[this._v("icon&shapes")]),this._v(" "),s("p",[this._v("Button")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"vue-doc-content"},[e("p",[t._v("通过设置"),e("code",[t._v("icon")]),t._v("属性在"),e("code",[t._v("Button")]),t._v("内嵌入一个"),e("code",[t._v("Icon")]),t._v("，或者直接在"),e("code",[t._v("Button")]),t._v("内使用"),e("code",[t._v("Icon")]),t._v("组件。")]),t._v(" "),e("p",[t._v("使用"),e("code",[t._v("Button")]),t._v("的"),e("code",[t._v("icon")]),t._v("属性，图标位置将在最左边，如果需要自定义位置，需使用"),e("code",[t._v("Icon")]),t._v("组件。")]),t._v(" "),e("p",[t._v("通过设置"),e("code",[t._v("shape")]),t._v("属性为"),e("code",[t._v("circle")]),t._v("，可将按钮置为圆的形状。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"vue-doc-content-EN"},[s("p",[this._v("Set the icon to insert an Icon to the Button, or use the Icon component inside the Button directly.")]),this._v(" "),s("p",[this._v("The icon would appear at the leftmost side of the Button when\nusing the icon; use Icon component for different icons' positions.")]),this._v(" "),s("p",[this._v("Set the shape to circle to use a circle button.")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("pre",[e("code",{staticClass:"lang-vue"},[e("span",{staticClass:"xml"},[e("span",{staticClass:"hljs-tag"},[t._v("<"),e("span",{staticClass:"hljs-name"},[t._v("template")]),t._v(">")]),t._v("\n    "),e("span",{staticClass:"hljs-tag"},[t._v("<"),e("span",{staticClass:"hljs-name"},[t._v("Button")]),t._v(" "),e("span",{staticClass:"hljs-attr"},[t._v("type")]),t._v("="),e("span",{staticClass:"hljs-string"},[t._v('"primary"')]),t._v(" "),e("span",{staticClass:"hljs-attr"},[t._v("shape")]),t._v("="),e("span",{staticClass:"hljs-string"},[t._v('"circle"')]),t._v(" "),e("span",{staticClass:"hljs-attr"},[t._v("icon")]),t._v("="),e("span",{staticClass:"hljs-string"},[t._v('"ios-search"')]),t._v(">")]),e("span",{staticClass:"hljs-tag"},[t._v("</"),e("span",{staticClass:"hljs-name"},[t._v("Button")]),t._v(">")]),t._v("\n    "),e("span",{staticClass:"hljs-tag"},[t._v("<"),e("span",{staticClass:"hljs-name"},[t._v("Button")]),t._v(" "),e("span",{staticClass:"hljs-attr"},[t._v("type")]),t._v("="),e("span",{staticClass:"hljs-string"},[t._v('"primary"')]),t._v(" "),e("span",{staticClass:"hljs-attr"},[t._v("icon")]),t._v("="),e("span",{staticClass:"hljs-string"},[t._v('"ios-search"')]),t._v(">")]),t._v("Search"),e("span",{staticClass:"hljs-tag"},[t._v("</"),e("span",{staticClass:"hljs-name"},[t._v("Button")]),t._v(">")]),t._v("\n    "),e("span",{staticClass:"hljs-tag"},[t._v("<"),e("span",{staticClass:"hljs-name"},[t._v("Button")]),t._v(" "),e("span",{staticClass:"hljs-attr"},[t._v("type")]),t._v("="),e("span",{staticClass:"hljs-string"},[t._v('"primary"')]),t._v(" "),e("span",{staticClass:"hljs-attr"},[t._v("shape")]),t._v("="),e("span",{staticClass:"hljs-string"},[t._v('"circle"')]),t._v(" "),e("span",{staticClass:"hljs-attr"},[t._v("icon")]),t._v("="),e("span",{staticClass:"hljs-string"},[t._v('"ios-search"')]),t._v(">")]),t._v("Search"),e("span",{staticClass:"hljs-tag"},[t._v("</"),e("span",{staticClass:"hljs-name"},[t._v("Button")]),t._v(">")]),t._v("\n    "),e("span",{staticClass:"hljs-tag"},[t._v("<"),e("span",{staticClass:"hljs-name"},[t._v("Button")]),t._v(" "),e("span",{staticClass:"hljs-attr"},[t._v("type")]),t._v("="),e("span",{staticClass:"hljs-string"},[t._v('"primary"')]),t._v(" "),e("span",{staticClass:"hljs-attr"},[t._v("shape")]),t._v("="),e("span",{staticClass:"hljs-string"},[t._v('"circle"')]),t._v(">")]),t._v("Circle"),e("span",{staticClass:"hljs-tag"},[t._v("</"),e("span",{staticClass:"hljs-name"},[t._v("Button")]),t._v(">")]),t._v("\n    "),e("span",{staticClass:"hljs-tag"},[t._v("<"),e("span",{staticClass:"hljs-name"},[t._v("br")]),t._v(">")]),e("span",{staticClass:"hljs-tag"},[t._v("<"),e("span",{staticClass:"hljs-name"},[t._v("br")]),t._v(">")]),t._v("\n    "),e("span",{staticClass:"hljs-tag"},[t._v("<"),e("span",{staticClass:"hljs-name"},[t._v("Button")]),t._v(" "),e("span",{staticClass:"hljs-attr"},[t._v("type")]),t._v("="),e("span",{staticClass:"hljs-string"},[t._v('"ghost"')]),t._v(" "),e("span",{staticClass:"hljs-attr"},[t._v("shape")]),t._v("="),e("span",{staticClass:"hljs-string"},[t._v('"circle"')]),t._v(" "),e("span",{staticClass:"hljs-attr"},[t._v("icon")]),t._v("="),e("span",{staticClass:"hljs-string"},[t._v('"ios-search"')]),t._v(">")]),e("span",{staticClass:"hljs-tag"},[t._v("</"),e("span",{staticClass:"hljs-name"},[t._v("Button")]),t._v(">")]),t._v("\n    "),e("span",{staticClass:"hljs-tag"},[t._v("<"),e("span",{staticClass:"hljs-name"},[t._v("Button")]),t._v(" "),e("span",{staticClass:"hljs-attr"},[t._v("type")]),t._v("="),e("span",{staticClass:"hljs-string"},[t._v('"ghost"')]),t._v(" "),e("span",{staticClass:"hljs-attr"},[t._v("icon")]),t._v("="),e("span",{staticClass:"hljs-string"},[t._v('"ios-search"')]),t._v(">")]),t._v("Search"),e("span",{staticClass:"hljs-tag"},[t._v("</"),e("span",{staticClass:"hljs-name"},[t._v("Button")]),t._v(">")]),t._v("\n    "),e("span",{staticClass:"hljs-tag"},[t._v("<"),e("span",{staticClass:"hljs-name"},[t._v("Button")]),t._v(" "),e("span",{staticClass:"hljs-attr"},[t._v("type")]),t._v("="),e("span",{staticClass:"hljs-string"},[t._v('"ghost"')]),t._v(" "),e("span",{staticClass:"hljs-attr"},[t._v("shape")]),t._v("="),e("span",{staticClass:"hljs-string"},[t._v('"circle"')]),t._v(" "),e("span",{staticClass:"hljs-attr"},[t._v("icon")]),t._v("="),e("span",{staticClass:"hljs-string"},[t._v('"ios-search"')]),t._v(">")]),t._v("Search"),e("span",{staticClass:"hljs-tag"},[t._v("</"),e("span",{staticClass:"hljs-name"},[t._v("Button")]),t._v(">")]),t._v("\n    "),e("span",{staticClass:"hljs-tag"},[t._v("<"),e("span",{staticClass:"hljs-name"},[t._v("Button")]),t._v(" "),e("span",{staticClass:"hljs-attr"},[t._v("type")]),t._v("="),e("span",{staticClass:"hljs-string"},[t._v('"ghost"')]),t._v(" "),e("span",{staticClass:"hljs-attr"},[t._v("shape")]),t._v("="),e("span",{staticClass:"hljs-string"},[t._v('"circle"')]),t._v(">")]),t._v("Circle"),e("span",{staticClass:"hljs-tag"},[t._v("</"),e("span",{staticClass:"hljs-name"},[t._v("Button")]),t._v(">")]),t._v("\n"),e("span",{staticClass:"hljs-tag"},[t._v("</"),e("span",{staticClass:"hljs-name"},[t._v("template")]),t._v(">")]),t._v("\n"),e("span",{staticClass:"hljs-tag"},[t._v("<"),e("span",{staticClass:"hljs-name"},[t._v("script")]),t._v(">")]),e("span",{staticClass:"javascript"},[t._v("\n    "),e("span",{staticClass:"hljs-keyword"},[t._v("export")]),t._v(" "),e("span",{staticClass:"hljs-keyword"},[t._v("default")]),t._v(" ")])]),e("span",{staticClass:"hljs-template-variable"},[t._v("{\n\n    }")]),e("span",{staticClass:"xml"},[e("span",{staticClass:"undefined"},[t._v("\n")]),e("span",{staticClass:"hljs-tag"},[t._v("</"),e("span",{staticClass:"hljs-name"},[t._v("script")]),t._v(">")])]),t._v("\n")])])}]};var l={mixins:[{data:function(){return{showVueDocCode:!1,vueDocCodeCopyText:"copy",vueDocCodeHeight:0}},methods:{vueDocCodeToggle:function(){this.showVueDocCode=!this.showVueDocCode,this.vueDocCodeHeight=this.vueDocCodeHeight||this.$refs.vueDocCodeBox.children[0].offsetHeight,this.$refs.vueDocCodeBox.style.height=this.showVueDocCode?this.vueDocCodeHeight+50+"px":"0px"},vueDocCodeCopy:function(){var t=this,s=new c.a(".vue-doc-code-copy",{text:function(t){return t.nextElementSibling.textContent}});s.on("success",function(e){t.vueDocCodeCopyText="copy success!",setTimeout(function(){t.vueDocCodeCopyText="copy"},1e3),e.clearSelection(),s.destroy()})}},components:{demobasic:e("D8HT")(n,i,!1,function(t){e("ObKD")},null,null).exports,demoshapes:e("D8HT")(o,v,!1,function(t){e("z46T")},null,null).exports}}]},_={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"vue-doc-wrapper"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),e("div",{staticClass:"vue-doc-components"},[e("demobasic"),t._v(" "),e("demoshapes")],1),t._v(" "),t._m(3),t._v(" "),t._m(4)])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"vue-doc-submenu"},[s("ul",{staticClass:"vue-doc-submenu-list"},[s("li",[s("a",{attrs:{href:"#vue-doc-按钮尺寸1"}},[this._v("按钮尺寸")])]),s("li",[s("a",{attrs:{href:"#vue-doc-icon形状1"}},[this._v("icon&形状")])])]),s("ul",{staticClass:"vue-doc-submenu-list-EN"},[s("li",[s("a",{attrs:{href:"#vue-doc-ButtonSize1"}},[this._v("Button Size")])]),s("li",[s("a",{attrs:{href:"#vue-doc-iconshapes1"}},[this._v("icon&shapes")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"vue-doc-title"},[s("h1",{attrs:{id:"vue-doc-button按钮1"}},[this._v("Button 按钮")]),this._v(" "),s("p",[this._v("基础组件，触发业务逻辑时使用。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"vue-doc-title-EN"},[s("h1",{attrs:{id:"vue-doc-button1"}},[this._v("Button")]),this._v(" "),s("p",[this._v("Basic component that is used to trigger bussiness logic.")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"vue-doc-content"},[e("h2",{attrs:{id:"vue-doc-api1"}},[t._v("API")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("属性")]),t._v(" "),e("th",{staticStyle:{"text-align":"right"}},[t._v("说明")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("类型")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("默认值")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("type")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("按钮类型，可选值为primary、ghost、dashed、text、info、success、warning、error或者不设置")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("String")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("-")])])])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"vue-doc-content-EN"},[e("h2",{attrs:{id:"vue-doc-api1"}},[t._v("API")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Attribute")]),t._v(" "),e("th",{staticStyle:{"text-align":"right"}},[t._v("Explanation")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("Type")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("Default")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("type")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("Button type, options include primary、ghost、dashed、text、info、success、warning、error, optional")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("String")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("-")])])])])])}]};var h=e("D8HT")(l,_,!1,function(t){e("PYnG")},null,null);s.default=h.exports},ObKD:function(t,s){},PYnG:function(t,s){},z46T:function(t,s){}});
//# sourceMappingURL=40.a518c02d4230f37b6b69.js.map