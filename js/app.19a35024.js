(function(t){function e(e){for(var a,i,s=e[0],c=e[1],l=e[2],u=0,d=[];u<s.length;u++)i=s[u],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&d.push(n[i][0]),n[i]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);p&&p(e);while(d.length)d.shift()();return o.push.apply(o,l||[]),r()}function r(){for(var t,e=0;e<o.length;e++){for(var r=o[e],a=!0,i=1;i<r.length;i++){var c=r[i];0!==n[c]&&(a=!1)}a&&(o.splice(e--,1),t=s(s.s=r[0]))}return t}var a={},n={app:0},o=[];function i(t){return s.p+"js/"+({pic:"pic"}[t]||t)+"."+{pic:"e77c536f"}[t]+".js"}function s(e){if(a[e])return a[e].exports;var r=a[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.e=function(t){var e=[],r=n[t];if(0!==r)if(r)e.push(r[2]);else{var a=new Promise((function(e,a){r=n[t]=[e,a]}));e.push(r[2]=a);var o,c=document.createElement("script");c.charset="utf-8",c.timeout=120,s.nc&&c.setAttribute("nonce",s.nc),c.src=i(t);var l=new Error;o=function(e){c.onerror=c.onload=null,clearTimeout(u);var r=n[t];if(0!==r){if(r){var a=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+a+": "+o+")",l.name="ChunkLoadError",l.type=a,l.request=o,r[1](l)}n[t]=void 0}};var u=setTimeout((function(){o({type:"timeout",target:c})}),12e4);c.onerror=c.onload=o,document.head.appendChild(c)}return Promise.all(e)},s.m=t,s.c=a,s.d=function(t,e,r){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(r,a,function(e){return t[e]}.bind(null,a));return r},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/",s.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var p=l;o.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"51b6":function(t,e,r){t.exports=r.p+"img/catchstar.20ab7870.png"},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var a=r("2b0e"),n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("vue-scroll",[r("v-app",{attrs:{id:"app"}},[r("v-app-bar",{attrs:{id:"navbar",color:"white",fixed:"",flat:"","elevate-on-scroll":"",app:""}},[r("v-toolbar-title",[r("strong",[t._v("Alfred Dai 個人作品集")])]),r("v-spacer"),r("div",{attrs:{id:"list"}},[r("router-link",{staticClass:"router",attrs:{to:"/"}},[r("v-icon",{staticClass:"list-icon"},[t._v("mdi-code-tags")]),t._v(" 網頁設計 ")],1),r("router-link",{staticClass:"router",attrs:{to:"/pic"}},[r("v-icon",{staticClass:"list-icon"},[t._v("mdi-feather")]),t._v(" 圖文設計 ")],1)],1),r("v-app-bar-nav-icon",{attrs:{id:"ham"},on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}})],1),r("v-navigation-drawer",{attrs:{app:"",temporary:"","hide-overlay":"",right:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[r("v-list",{attrs:{dense:""}},[r("v-list-item",{attrs:{to:"/"}},[r("v-list-item-action",[r("v-icon",[t._v("mdi-code-tags")])],1),r("v-list-item-content",[r("v-list-item-title",[t._v(" 網頁設計 ")])],1)],1),r("v-list-item",{attrs:{to:"/pic"}},[r("v-list-item-action",[r("v-icon",[t._v("mdi-feather")])],1),r("v-list-item-content",[r("v-list-item-title",[t._v(" 圖文設計 ")])],1)],1)],1)],1),r("div",{staticClass:"spacerT"}),r("v-footer",{staticClass:"d-flex justify-center align-center",attrs:{id:"footer",color:"transparent"}},[r("span",[t._v("© "+t._s((new Date).getFullYear()))])]),r("router-view")],1)],1)},o=[],i={name:"App",props:{source:String},data:function(){return{drawer:!1}}},s=i,c=r("2877"),l=r("6544"),u=r.n(l),p=r("7496"),d=r("40dc"),v=r("5bc1"),f=r("553a"),m=r("132d"),g=r("8860"),b=r("da13"),h=r("1800"),y=r("5d23"),w=r("f774"),_=r("2fa4"),x=r("2a7f"),C=Object(c["a"])(s,n,o,!1,null,null,null),V=C.exports;u()(C,{VApp:p["a"],VAppBar:d["a"],VAppBarNavIcon:v["a"],VFooter:f["a"],VIcon:m["a"],VList:g["a"],VListItem:b["a"],VListItemAction:h["a"],VListItemContent:y["a"],VListItemTitle:y["b"],VNavigationDrawer:w["a"],VSpacer:_["a"],VToolbarTitle:x["a"]});r("d3b7");var k=r("8c4f"),j=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"home"}},[a("v-container",[a("v-row",{staticClass:"justify-center"},[a("v-col",{staticClass:"text-center",attrs:{cols:"12"}},[t._v("功能型網站")]),a("v-col",{attrs:{cols:"12",md:"6"}},[a("v-img",{staticClass:"rounded",attrs:{src:r("f18c")}})],1),a("v-col",{attrs:{cols:"12",md:"6"}},[t._v(" describe ")])],1)],1),a("v-container",[a("v-row",{staticClass:"justify-center"},[a("v-col",{staticClass:"text-center",attrs:{cols:"12"}},[t._v("網頁切版")]),a("v-col",{attrs:{cols:"12",md:"4"}},[a("v-card",[a("v-img",{attrs:{src:r("63ab")}}),a("v-card-title",[t._v("123")]),a("v-card-text",[t._v("123")])],1)],1)],1)],1),a("v-container",[a("v-row",{staticClass:"justify-center"},[a("v-col",{staticClass:"text-center",attrs:{cols:"12"}},[t._v("網頁小遊戲")]),t._l(t.type3,(function(e){return a("v-col",{key:e,attrs:{cols:"12",md:"4"}},[a("v-card",[a("v-img",{attrs:{src:e.img}}),a("v-card-title",[t._v(t._s(e.title))]),a("v-card-text",[t._v(t._s(e.text))])],1)],1)}))],2)],1),a("div",{staticClass:"spacerB"})],1)},P=[],S={name:"Home",data:function(){return{type3:[{img:r("8a00"),title:"記憶 Poker",text:"很適合三五好友相聚時，可以一起玩的小遊戲 😊",site:"ya95123.github.io/game-memorypoker/"},{img:r("51b6"),title:"記憶 Poker",text:"很適合三五好友相聚時，可以一起玩的小遊戲 😊",site:"ya95123.github.io/game-memorypoker/"},{img:r("a420"),title:"記憶 Poker",text:"很適合三五好友相聚時，可以一起玩的小遊戲 😊",site:"ya95123.github.io/game-memorypoker/"}]}}},O=S,T=r("b0af"),A=r("99d9"),E=r("62ad"),I=r("a523"),L=r("adda"),B=r("0fd9"),D=Object(c["a"])(O,j,P,!1,null,null,null),z=D.exports;u()(D,{VCard:T["a"],VCardText:A["a"],VCardTitle:A["b"],VCol:E["a"],VContainer:I["a"],VImg:L["a"],VRow:B["a"]}),a["default"].use(k["a"]);var M=[{path:"/",name:"Home",component:z,meta:{title:"Alfred Dai 個人作品集"}},{path:"/pic",name:"Pic",component:function(){return r.e("pic").then(r.bind(null,"2361"))},meta:{title:"Alfred Dai 個人作品集"}}],H=new k["a"]({routes:M});H.afterEach((function(t,e){document.title=t.meta.title}));var N=H,R=r("f309");a["default"].use(R["a"]);var Y=new R["a"]({}),$=(r("fe75"),r("77a0")),F=r.n($);a["default"].config.productionTip=!1,a["default"].use(F.a,{ops:{vuescroll:{vuescroll:{mode:"slide",sizeStrategy:"number",detectResize:!0}},scrollPanel:{initialScrollY:!1,initialScrollX:!1,scrollingX:!1,scrollingY:!0,speed:300,easing:void 0,verticalNativeBarPos:"right",maxHeight:1e4,maxWidth:void 0},bar:{showDelay:500,onlyShowBarOnScroll:!0,keepShow:!1,background:"#6AC7E6",opacity:.7,hoverStyle:!1,specifyBorderRadius:!1,minSize:!1,size:"6px",disable:!1}}}),new a["default"]({router:N,vuetify:Y,render:function(t){return t(V)}}).$mount("#app")},"63ab":function(t,e,r){t.exports=r.p+"img/onepage.bc152579.png"},"8a00":function(t,e,r){t.exports=r.p+"img/memoryPoker.a7ec64d7.png"},a420:function(t,e,r){t.exports=r.p+"img/gotogether.d4f4c9f7.png"},f18c:function(t,e,r){t.exports=r.p+"img/d_hand_guesse.9ddbd0bd.png"},fe75:function(t,e,r){}});
//# sourceMappingURL=app.19a35024.js.map