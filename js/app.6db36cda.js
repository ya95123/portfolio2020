(function(t){function e(e){for(var r,o,s=e[0],c=e[1],l=e[2],u=0,d=[];u<s.length;u++)o=s[u],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&d.push(i[o][0]),i[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);v&&v(e);while(d.length)d.shift()();return n.push.apply(n,l||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],r=!0,o=1;o<a.length;o++){var c=a[o];0!==i[c]&&(r=!1)}r&&(n.splice(e--,1),t=s(s.s=a[0]))}return t}var r={},i={app:0},n=[];function o(t){return s.p+"js/"+({pic:"pic"}[t]||t)+"."+{pic:"de3822bc"}[t]+".js"}function s(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.e=function(t){var e=[],a=i[t];if(0!==a)if(a)e.push(a[2]);else{var r=new Promise((function(e,r){a=i[t]=[e,r]}));e.push(a[2]=r);var n,c=document.createElement("script");c.charset="utf-8",c.timeout=120,s.nc&&c.setAttribute("nonce",s.nc),c.src=o(t);var l=new Error;n=function(e){c.onerror=c.onload=null,clearTimeout(u);var a=i[t];if(0!==a){if(a){var r=e&&("load"===e.type?"missing":e.type),n=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+r+": "+n+")",l.name="ChunkLoadError",l.type=r,l.request=n,a[1](l)}i[t]=void 0}};var u=setTimeout((function(){n({type:"timeout",target:c})}),12e4);c.onerror=c.onload=n,document.head.appendChild(c)}return Promise.all(e)},s.m=t,s.c=r,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(a,r,function(e){return t[e]}.bind(null,r));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="",s.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var v=l;n.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"51b6":function(t,e,a){t.exports=a.p+"img/catchstar.20ab7870.png"},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",{attrs:{id:"app"}},[a("vue-scroll",[a("v-app-bar",{attrs:{id:"navbar",color:"white",fixed:"",flat:"","elevate-on-scroll":"",app:""}},[a("v-toolbar-title",[a("strong",[t._v("Alfred Dai 個人作品集")])]),a("v-spacer"),a("div",{attrs:{id:"list"}},[a("router-link",{staticClass:"router",attrs:{to:"/"}},[a("v-icon",{staticClass:"list-icon"},[t._v("mdi-code-tags")]),t._v(" 網頁設計 ")],1),a("router-link",{staticClass:"router",attrs:{to:"/pic"}},[a("v-icon",{staticClass:"list-icon"},[t._v("mdi-feather")]),t._v(" 圖文設計 ")],1)],1),a("v-app-bar-nav-icon",{attrs:{id:"ham"},on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}})],1),a("v-navigation-drawer",{attrs:{app:"",temporary:"","hide-overlay":"",right:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[a("v-list",{attrs:{dense:""}},[a("v-list-item",{attrs:{to:"/"}},[a("v-list-item-action",[a("v-icon",[t._v("mdi-code-tags")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v(" 網頁設計 ")])],1)],1),a("v-list-item",{attrs:{to:"/pic"}},[a("v-list-item-action",[a("v-icon",[t._v("mdi-feather")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v(" 圖文設計 ")])],1)],1)],1)],1),a("div",{staticClass:"spacerT"}),a("v-footer",{staticClass:"d-flex justify-center align-center",attrs:{id:"footer",color:"transparent"}},[a("v-btn",{staticClass:"pt-0",attrs:{icon:""}},[a("a",{staticStyle:{"text-decoration":"none"},attrs:{href:"https://github.com/ya95123/portfolio",target:"_blank"}},[a("v-icon",{attrs:{color:"#333"}},[t._v("mdi-github")])],1)]),a("span",[t._v("Alfred Dai © "+t._s((new Date).getFullYear()))])],1),a("router-view")],1)],1)},n=[],o={name:"App",data:function(){return{drawer:!1}}},s=o,c=a("2877"),l=a("6544"),u=a.n(l),v=a("7496"),d=a("40dc"),p=a("5bc1"),f=a("8336"),m=a("553a"),g=a("132d"),b=a("8860"),h=a("da13"),y=a("1800"),_=a("5d23"),C=a("f774"),w=a("2fa4"),x=a("2a7f"),k=Object(c["a"])(s,i,n,!1,null,null,null),S=k.exports;u()(k,{VApp:v["a"],VAppBar:d["a"],VAppBarNavIcon:p["a"],VBtn:f["a"],VFooter:m["a"],VIcon:g["a"],VList:b["a"],VListItem:h["a"],VListItemAction:y["a"],VListItemContent:_["a"],VListItemTitle:_["b"],VNavigationDrawer:C["a"],VSpacer:w["a"],VToolbarTitle:x["a"]});a("d3b7");var V=a("8c4f"),A=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"home"}},[r("v-container",[r("v-row",{staticClass:"justify-center"},[r("v-col",{staticClass:"text-center",attrs:{cols:"12"}},[t._v("功能型網站")]),r("v-col",{attrs:{cols:"12",md:"6"}},[r("v-img",{staticClass:"rounded",attrs:{src:a("f18c")}})],1),r("v-col",{attrs:{cols:"12",md:"6"}},[r("v-card-title",{staticClass:"pt-0"},[t._v(" 狄斯俊之手 Decision Hand ")]),r("a",{staticClass:"icon",attrs:{href:"https://ya95123.github.io/vue-decisionHand/#/",target:"_blank"}},[r("v-btn",{staticClass:"ml-2",attrs:{icon:"",color:"#6AC7E6"}},[r("v-icon",{attrs:{color:"#6AC7E6"}},[t._v(" mdi-link-variant ")])],1),r("span",{staticClass:"green--text"},[t._v("網站連結")])],1),r("a",{staticClass:"icon",attrs:{href:"https://github.com/ya95123/vue-decisionHand",target:"_blank"}},[r("v-btn",{staticClass:"ml-2",attrs:{icon:"",color:"#6AC7E6"}},[r("v-icon",{attrs:{color:"#6AC7E6"}},[t._v(" mdi-github ")])],1),r("span",{staticClass:"green--text"},[t._v("GitHub")])],1),r("v-card-text",{staticClass:"text--black"},[t._v(" 使用 Vue.js 搭配 Vuetify 製成的功能型網站，其功能為協助易有"),r("u",[t._v("選擇困難症的人")]),t._v("，透過簡易有趣的方式，加速做決定的過程，達到減少猶豫不決的效益，其中也特別設置了團體活動常見的轉盤、轉酒瓶、抽獎功能等。 ")])],1)],1)],1),r("v-container",[r("v-row",{staticClass:"justify-center"},[r("v-col",{staticClass:"text-center",attrs:{cols:"12"}},[t._v("網頁切版")]),t._l(t.type2,(function(e,a){return r("v-col",{key:a,attrs:{cols:"12",md:"4",sm:"6"}},[r("v-card",[r("v-img",{attrs:{src:e.img}}),r("v-card-title",[t._v(" "+t._s(e.title)+" "),r("a",{staticClass:"icon",attrs:{href:e.website,target:"_blank"}},[r("v-btn",{staticClass:"ml-2",attrs:{icon:"",color:"#6AC7E6"}},[r("v-icon",{attrs:{color:"#6AC7E6"}},[t._v(" mdi-link-variant ")])],1)],1),r("a",{staticClass:"icon",attrs:{href:e.github,target:"_blank"}},[r("v-btn",{attrs:{icon:"",color:"#6AC7E6"}},[r("v-icon",{attrs:{color:"#6AC7E6"}},[t._v(" mdi-github ")])],1)],1)]),r("v-card-text",[t._v(t._s(e.text))])],1)],1)}))],2)],1),r("v-container",[r("v-row",{staticClass:"justify-center"},[r("v-col",{staticClass:"text-center",attrs:{cols:"12"}},[t._v("網頁小遊戲")]),t._l(t.type3,(function(e,a){return r("v-col",{key:a,attrs:{cols:"12",md:"4",sm:"6"}},[r("v-card",[r("v-img",{attrs:{src:e.img}}),r("v-card-title",[t._v(" "+t._s(e.title)+" "),r("a",{staticClass:"icon",attrs:{href:e.website,target:"_blank"}},[r("v-btn",{staticClass:"ml-2",attrs:{icon:"",color:"#6AC7E6"}},[r("v-icon",{attrs:{color:"#6AC7E6"}},[t._v(" mdi-link-variant ")])],1)],1),r("a",{staticClass:"icon",attrs:{href:e.github,target:"_blank"}},[r("v-btn",{attrs:{icon:"",color:"#6AC7E6"}},[r("v-icon",{attrs:{color:"#6AC7E6"}},[t._v(" mdi-github ")])],1)],1)]),r("v-card-text",[t._v(t._s(e.text))])],1)],1)}))],2)],1),r("div",{staticClass:"spacerB"})],1)},j=[],E={name:"Home",data:function(){return{type2:[{img:a("63ab"),title:"泰山寇汀咖啡莊園",text:"用 Bootstrap 搭配 jQuery 外部套件做成的一頁式介紹網頁。",github:"https://github.com/ya95123/bs-onePage",website:"https://ya95123.github.io/bs-onePage/"},{img:a("5763"),title:"CSS Zen Garden",text:"以現有固定的 HTML 架構，自行設計 CSS 並加上 jQuery 做成動態網頁。",github:"https://github.com/ya95123/css-zen-garden",website:"https://ya95123.github.io/css-zen-garden/"}],type3:[{img:a("8a00"),title:"記憶 Poker",text:"使用 CSS 3D 搭配 jQuery 做成的翻牌小遊戲，並設置玩家名稱及計分設定。",github:"https://github.com/ya95123/game-memoryPoker",website:"https://ya95123.github.io/game-memoryPoker/"},{img:a("51b6"),title:"捉 星 星！Catch Star",text:"使用 jQuery 及 隨機數設定，使星星往不同方向移動做成的小遊戲，並設定最高分即可上榜。",github:"https://github.com/ya95123/game-catchStar",website:"https://ya95123.github.io/game-catchStar/"},{img:a("a420"),title:"天堂見 We will see in Heaven",text:"使用 JavaScript 搭配其 settimeout 功能做成的類似打地鼠遊戲，另外添上了排行榜功能。",github:"https://github.com/ya95123/game-goTogether",website:"https://ya95123.github.io/game-goTogether/"}]}}},P=E,O=a("b0af"),T=a("99d9"),B=a("62ad"),D=a("a523"),H=a("adda"),I=a("0fd9"),L=Object(c["a"])(P,A,j,!1,null,null,null),z=L.exports;u()(L,{VBtn:f["a"],VCard:O["a"],VCardText:T["a"],VCardTitle:T["b"],VCol:B["a"],VContainer:D["a"],VIcon:g["a"],VImg:H["a"],VRow:I["a"]}),r["default"].use(V["a"]);var M=[{path:"/",name:"Home",component:z,meta:{title:"Alfred Dai 個人作品集"}},{path:"/pic",name:"Pic",component:function(){return a.e("pic").then(a.bind(null,"2361"))},meta:{title:"Alfred Dai 個人作品集"}}],Q=new V["a"]({routes:M});Q.afterEach((function(t,e){document.title=t.meta.title}));var J=Q,N=a("f309");r["default"].use(N["a"]);var R=new N["a"]({}),Y=(a("fe75"),a("77a0")),$=a.n(Y),F=a("71a5"),G=a.n(F);r["default"].use($.a,{ops:{vuescroll:{vuescroll:{mode:"slide",sizeStrategy:"number",detectResize:!0}},scrollPanel:{initialScrollY:!1,initialScrollX:!1,scrollingX:!1,scrollingY:!0,speed:300,easing:void 0,verticalNativeBarPos:"right",maxHeight:1e4,maxWidth:void 0},bar:{showDelay:500,onlyShowBarOnScroll:!0,keepShow:!1,background:"#6AC7E6",opacity:.7,hoverStyle:!1,specifyBorderRadius:!1,minSize:!1,size:"6px",disable:!1}}}),r["default"].use(G.a),r["default"].config.productionTip=!1,new r["default"]({router:J,vuetify:R,render:function(t){return t(S)}}).$mount("#app")},5763:function(t,e,a){t.exports=a.p+"img/garden_black.3896d3c2.png"},"63ab":function(t,e,a){t.exports=a.p+"img/onepage.bc152579.png"},"8a00":function(t,e,a){t.exports=a.p+"img/memoryPoker.a7ec64d7.png"},a420:function(t,e,a){t.exports=a.p+"img/gotogether.d4f4c9f7.png"},f18c:function(t,e,a){t.exports=a.p+"img/d_hand_guesse.9ddbd0bd.png"},fe75:function(t,e,a){}});
//# sourceMappingURL=app.6db36cda.js.map