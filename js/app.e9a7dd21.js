(function(t){function e(e){for(var r,s,i=e[0],c=e[1],l=e[2],p=0,d=[];p<i.length;p++)s=i[p],Object.prototype.hasOwnProperty.call(n,s)&&n[s]&&d.push(n[s][0]),n[s]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);u&&u(e);while(d.length)d.shift()();return o.push.apply(o,l||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],r=!0,i=1;i<a.length;i++){var c=a[i];0!==n[c]&&(r=!1)}r&&(o.splice(e--,1),t=s(s.s=a[0]))}return t}var r={},n={app:0},o=[];function s(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=t,s.c=r,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(a,r,function(e){return t[e]}.bind(null,r));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var u=c;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"2f46":function(t,e,a){t.exports=a.p+"img/saratoga.2257d0cd.png"},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-app-bar",{attrs:{color:"deep-purple accent-4",dense:"",dark:"",app:""}},[a("v-toolbar-title",[a("v-btn",{attrs:{text:"",large:""},on:{click:function(e){return t.$router.push("/")}}},[a("span",[t._v("TAKEROID")]),a("span",[t._v("PORTFOLIO")])])],1),a("v-spacer"),a("v-btn",{attrs:{text:"",large:""},on:{click:function(e){return t.$router.push("/skill")}}},[a("span",[t._v("SKILL")])]),a("v-btn",{attrs:{text:"",large:""},on:{click:function(e){return t.$router.push("/works")}}},[a("span",[t._v("WORKS")])])],1),a("v-content",[a("router-view")],1)],1)},o=[],s=a("2877"),i=a("6544"),c=a.n(i),l=a("7496"),u=a("40dc"),p=a("8336"),d=a("a75b"),f=a("2fa4"),v=a("2a7f"),m={},h=Object(s["a"])(m,n,o,!1,null,null,null),x=h.exports;c()(h,{VApp:l["a"],VAppBar:u["a"],VBtn:p["a"],VContent:d["a"],VSpacer:f["a"],VToolbarTitle:v["a"]});var b=a("f309");a("5363");r["a"].use(b["a"]);var g=new b["a"]({icons:{iconfont:"mdi"}}),w=a("8c4f"),k=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",{staticClass:"mx-auto",attrs:{"max-width":"500","max-height":"1000",height:"800"}},[r("v-container",{attrs:{"grid-list-xs":""}},[r("v-layout",{attrs:{"justify-space-around":"",wrap:""}},[r("v-flex",{staticClass:"text-center mt-10",attrs:{xs12:""}},[r("v-avatar",{attrs:{"max-height":"300","max-width":"300","min-height":"100","min-width":"100",size:"300"}},[r("img",{attrs:{src:a("2f46"),alt:"Takeroid"}})])],1),r("v-flex",{staticClass:"mb-5",attrs:{xs12:""}},[r("h1",{staticClass:"font-weight-bold text-center"},[t._v("Takeroid")])]),r("v-flex",{staticClass:"text-right",attrs:{xl4:"",lg4:"",md4:"",sm4:"",xs4:""}},[r("v-icon",{staticClass:"ma-3",attrs:{size:"100",color:"blue"},on:{click:t.link1}},[t._v("mdi-twitter")])],1),r("v-flex",{staticClass:"text-center",attrs:{xl4:"",lg4:"",md4:"",sm4:"",xs4:""}},[r("v-icon",{staticClass:"ma-3",attrs:{size:"100",color:"red"},on:{click:t.link2}},[t._v("mdi-youtube")])],1),r("v-flex",{staticClass:"text-left",attrs:{xl4:"",lg4:"",md4:"",sm4:"",xs4:""}},[r("v-icon",{staticClass:"ma-3",attrs:{size:"100",color:"orange"},on:{click:t.link3}},[t._v("mdi-github-circle")])],1),r("v-flex",{attrs:{xl7:"",lg7:"",md7:"",sm7:"",xs7:""}},[r("p",{staticClass:"text-center"},[t._v("人生一週目")]),r("p",[t._v("フロントエンドエンジニアです。バックエンドもできるようになりたいなー")])])],1)],1)],1)},y=[],_={methods:{link1:function(){window.location="https://twitter.com/takenokoroid"},link2:function(){window.location="https://www.youtube.com/channel/UC2YQR0zkHGi68HCMybCoHpw"},link3:function(){window.location="https://github.com/takenokoroid/"}}},C=_,V=(a("a2e6"),a("8212")),j=a("b0af"),O=a("a523"),P=a("0e8f"),T=a("132d"),S=a("a722"),$=Object(s["a"])(C,k,y,!1,null,null,null),I=$.exports;c()($,{VAvatar:V["a"],VCard:j["a"],VContainer:O["a"],VFlex:P["a"],VIcon:T["a"],VLayout:S["a"]});var z=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{staticClass:"mx-auto",attrs:{"max-width":"500"}},[a("v-container",{attrs:{fluid:""}},[a("v-row",{attrs:{dense:""}},t._l(t.cards,(function(e){return a("v-col",{key:e.title,attrs:{cols:e.flex}},[a("v-card",[a("v-img",{staticClass:"white--text align-end",attrs:{src:e.src,gradient:"to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)",height:"200px"}},[a("v-card-title",{domProps:{textContent:t._s(e.title)}})],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{icon:""}},[a("v-icon",[t._v("mdi-heart")])],1),a("v-btn",{attrs:{icon:""}},[a("v-icon",[t._v("mdi-bookmark")])],1),a("v-btn",{attrs:{icon:""}},[a("v-icon",[t._v("mdi-share-variant")])],1)],1)],1)],1)})),1)],1)],1)},A=[],M={data:function(){return{cards:[{title:"Pre-fab homes",src:"https://cdn.vuetifyjs.com/images/cards/house.jpg",flex:12},{title:"Favorite road trips",src:"https://cdn.vuetifyjs.com/images/cards/road.jpg",flex:6},{title:"Best airlines",src:"https://cdn.vuetifyjs.com/images/cards/plane.jpg",flex:6}]}}},R=M,B=a("99d9"),E=a("62ad"),H=a("adda"),L=a("0fd9"),F=Object(s["a"])(R,z,A,!1,null,null,null),K=F.exports;c()(F,{VBtn:p["a"],VCard:j["a"],VCardActions:B["a"],VCardTitle:B["b"],VCol:E["a"],VContainer:O["a"],VIcon:T["a"],VImg:H["a"],VRow:L["a"],VSpacer:f["a"]}),r["a"].use(w["a"]);var J=[{path:"/",name:"Home",component:I},{path:"/works",name:"works",component:K}],D=new w["a"]({routes:J}),G=D;r["a"].config.productionTip=!1,new r["a"]({vuetify:g,router:G,render:function(t){return t(x)}}).$mount("#app")},9958:function(t,e,a){},a2e6:function(t,e,a){"use strict";var r=a("9958"),n=a.n(r);n.a}});
//# sourceMappingURL=app.e9a7dd21.js.map