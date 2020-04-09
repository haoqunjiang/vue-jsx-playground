(function(e){function t(t){for(var n,s,i=t[0],c=t[1],u=t[2],l=0,p=[];l<i.length;l++)s=i[l],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&p.push(o[s][0]),o[s]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);d&&d(t);while(p.length)p.shift()();return a.push.apply(a,u||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],n=!0,s=1;s<r.length;s++){var c=r[s];0!==o[c]&&(n=!1)}n&&(a.splice(t--,1),e=i(i.s=r[0]))}return e}var n={},o={app:0},a=[];function s(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-2d0c51a5":"5bdded95","chunk-5b5f63d0":"bdfd4fa5"}[e]+".js"}function i(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.e=function(e){var t=[],r=o[e];if(0!==r)if(r)t.push(r[2]);else{var n=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=n);var a,c=document.createElement("script");c.charset="utf-8",c.timeout=120,i.nc&&c.setAttribute("nonce",i.nc),c.src=s(e);var u=new Error;a=function(t){c.onerror=c.onload=null,clearTimeout(l);var r=o[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+n+": "+a+")",u.name="ChunkLoadError",u.type=n,u.request=a,r[1](u)}o[e]=void 0}};var l=setTimeout((function(){a({type:"timeout",target:c})}),12e4);c.onerror=c.onload=a,document.head.appendChild(c)}return Promise.all(t)},i.m=e,i.c=n,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(r,n,function(t){return e[t]}.bind(null,n));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/vue-jsx-playground/",i.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var d=u;a.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("router-view")],1)},a=[],s=(r("5c0b"),r("2877")),i={},c=Object(s["a"])(i,o,a,!1,null,null,null),u=c.exports,l=r("9483");Object(l["a"])("".concat("/vue-jsx-playground/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var d=r("8c4f"),p=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("header",{staticClass:"header"},[r("div",{staticClass:"container"},[r("div",{staticClass:"header-left"},[r("h1",[r("router-link",{attrs:{to:"/"}},[e._v("JSX Live Editor")])],1),r("h2",[e._v(e._s(e.version)+", "),r("a",{attrs:{target:"_blank",href:"https://github.com/sodatea/vue-jsx-playground"}},[e._v("check out source code")])])]),r("div",{staticClass:"header-right"},[r("select",{directives:[{name:"model",rawName:"v-model",value:e.mode,expression:"mode"}],staticClass:"form-control",attrs:{"aria-label":"Select JSX mode"},on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.mode=t.target.multiple?r:r[0]}}},[r("option",{attrs:{value:"vue"}},[e._v("Vue")]),r("option",{attrs:{value:"react"}},[e._v("React")])]),r("button",{staticClass:"form-control save-button",on:{click:e.saveGist}},[e._v("Save as Gist")])])])]),r("div",{staticClass:"editors"},[r("editor-window",{staticStyle:{margin:"0 20px"},attrs:{title:"input",width:"500px"}},[r("code-mirror",{staticClass:"input",attrs:{options:e.editorOptions},model:{value:e.code,callback:function(t){e.code=t},expression:"code"}})],1),r("editor-window",{staticStyle:{margin:"0 20px"},attrs:{title:"result",width:"500px"}},[r("div",{staticClass:"result"},[r("pre",{staticClass:"code cm-s-default"},[r("code",{domProps:{innerHTML:e._s(e.result)}})]),r("div",{directives:[{name:"show",rawName:"v-show",value:e.error,expression:"error"}],staticClass:"error"},[e._v(e._s(e.error))])])])],1)])},f=[],v=(r("99af"),r("b0c0"),r("d3b7"),r("3ca3"),r("38cf"),r("498a"),r("ddb0"),r("ade3")),h=r("3835"),m=(r("96cf"),r("1da1")),b=r("5530"),g=r("4fd6"),w=r("d0ba"),y=r.n(w),j=r("9339"),x=r.n(j),_=r("bc3a"),O=r.n(_),k=r("323e"),S=r.n(k),E=(r("f9d4"),r("a279"),r("11b4")),C=r("1609"),P={name:"JSXEditor",components:{CodeMirror:x.a,EditorWindow:g["a"]},data:function(){var e='\n<div id="welcome">\n  <h1>Hello World!</h1>\n</div>\n'.trim(),t=this.$route.query,r=t.input,n=t.mode;return{result:"Loading...",error:"",mode:n||"vue",code:r||e,version:"@babel/standalone@".concat(E["a"]," & @vue/babel-preset-jsx@").concat(C["a"]),editorOptions:{mode:"jsx",tabSize:2,indentWithTabs:!1,extraKeys:{Tab:function(e){e.replaceSelection(" ".repeat(e.getOption("tabSize")))}}}}},created:function(){"gist"===this.$route.name&&this.fetchGist(this.$route.params.id)},mounted:function(){this.transform()},watch:{code:function(){this.transform()},mode:function(){this.transform(),this.$router.push({query:Object(b["a"])({},this.$route.query,{mode:this.mode})})}},methods:{transform:function(){var e=this;return Object(m["a"])(regeneratorRuntime.mark((function t(){var n,o,a,s,i,c,u;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.code,t.prev=1,t.next=4,Promise.all([r.e("chunk-2d0c51a5").then(r.t.bind(null,"3e52",7)),r.e("chunk-5b5f63d0").then(r.t.bind(null,"1d61",7))]);case 4:o=t.sent,a=Object(h["a"])(o,2),s=a[0],i=a[1],c={presets:[],plugins:[]},"vue"===e.mode?c.presets.push(i):"react"===e.mode&&c.presets.push("react"),u=s.transform(n,c),e.result=y()(u.code,{mode:"jsx"}),e.error=null,t.next=18;break;case 15:t.prev=15,t.t0=t["catch"](1),e.error=t.t0.message;case 18:case"end":return t.stop()}}),t,null,[[1,15]])})))()},saveGist:function(){var e=this;return Object(m["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return S.a.start(),t.next=3,O.a.post("https://api.github.com/gists?access_token=".concat(Object({NODE_ENV:"production",BASE_URL:"/vue-jsx-playground/"}).APP_GH_TOKEN),{description:"Saved by https://jsx.egoist.sh",files:Object(v["a"])({},"".concat(e.mode,".jsx"),{content:e.code})});case 3:r=t.sent,e.$router.push("/gist/".concat(r.data.id)),S.a.done();case 6:case"end":return t.stop()}}),t)})))()},fetchGist:function(e){var t=this;return Object(m["a"])(regeneratorRuntime.mark((function r(){var n,o;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return S.a.start(),r.next=3,O.a.get("https://api.github.com/gists/".concat(e,"?access_token=").concat(Object({NODE_ENV:"production",BASE_URL:"/vue-jsx-playground/"}).APP_GH_TOKEN));case 3:n=r.sent,o=n.data,o.files["vue.jsx"]?(t.mode="vue",t.code=o.files["vue.jsx"].content):o.files["react.jsx"]&&(t.mode="react",t.code=o.files["react.jsx"].content),S.a.done();case 7:case"end":return r.stop()}}),r)})))()}}},N=P,T=(r("5fe7"),r("f697"),r("b6ea"),r("5510"),r("bef9"),Object(s["a"])(N,p,f,!1,null,null,null)),A=T.exports;n["a"].use(d["a"]);var R=[{path:"/",name:"home",component:A}],$=new d["a"]({mode:"history",base:"/vue-jsx-playground/",routes:R}),G=$;n["a"].config.productionTip=!1,new n["a"]({router:G,render:function(e){return e(u)}}).$mount("#app")},"5c0b":function(e,t,r){"use strict";var n=r("9c0c"),o=r.n(n);o.a},"9c0c":function(e,t,r){},abe0:function(e,t,r){},bef9:function(e,t,r){"use strict";var n=r("abe0"),o=r.n(n);o.a}});
//# sourceMappingURL=app.52f0e66f.js.map