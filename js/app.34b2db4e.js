(function(t){function e(e){for(var s,a,r=e[0],c=e[1],l=e[2],d=0,h=[];d<r.length;d++)a=r[d],o[a]&&h.push(o[a][0]),o[a]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);u&&u(e);while(h.length)h.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],s=!0,r=1;r<n.length;r++){var c=n[r];0!==o[c]&&(s=!1)}s&&(i.splice(e--,1),t=a(a.s=n[0]))}return t}var s={},o={app:0},i=[];function a(e){if(s[e])return s[e].exports;var n=s[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=s,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)a.d(n,s,function(e){return t[e]}.bind(null,s));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/1-10calc/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var u=c;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("cd49")},"034f":function(t,e,n){"use strict";var s=n("64a9"),o=n.n(s);o.a},"4c44":function(t,e,n){"use strict";var s=n("884a"),o=n.n(s);o.a},6261:function(t,e,n){"use strict";var s=n("c825"),o=n.n(s);o.a},6400:function(t,e,n){"use strict";var s=n("9b0e"),o=n.n(s);o.a},"64a9":function(t,e,n){},"86be":function(t,e,n){"use strict";var s=n("e634"),o=n.n(s);o.a},"884a":function(t,e,n){},"8b2a":function(t,e,n){"use strict";var s=n("bc1f"),o=n.n(s);o.a},"9b0e":function(t,e,n){},bc1f:function(t,e,n){},c825:function(t,e,n){},cd49:function(t,e,n){"use strict";n.r(e);n("6b54"),n("cadf"),n("551c"),n("f751"),n("097d");var s=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},["app-menu"==t.store.currentPage?n("Menu"):t._e(),"app-solve"==t.store.currentPage?n("Solve"):t._e(),"app-stat"==t.store.currentPage?n("Stat"):t._e(),"app-qrcode"==t.store.currentPage?n("QrCode"):t._e()],1)},i=[],a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"select"}},[n("h1",[n("font-awesome-icon",{attrs:{icon:"pencil-alt"}}),t._v(" "+t._s(t.$t("notice")))],1),n("section",t._l(t.categories,function(e){return n("a",{key:e.id,class:"bg-"+e.id,on:{click:function(n){return t.setCategory(e.id)}}},[n("h2",[t._v(t._s(t.$t(e.id)))]),n("span",[t._v(t._s(e.example))]),e.done>0?n("span",{staticClass:"done"},[t._v(t._s(t.$t("done",[e.done])))]):t._e()])}),0),n("AddMeToHome"),n("footer",[n("a",{staticClass:"share-qr",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.showPage("app-qrcode")}}},[n("font-awesome-icon",{attrs:{icon:["fas","qrcode"],size:"lg"}})],1),n("a",{staticClass:"share-facebook",attrs:{href:"https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fnitoyon.github.io%2F1-10calc%2F"}},[n("font-awesome-icon",{attrs:{icon:["fab","facebook-f"],size:"lg"}})],1),n("a",{staticClass:"share-twitter",attrs:{href:"https://twitter.com/intent/tweet?text=https%3A%2F%2Fnitoyon.github.io%2F1-10calc%2F"}},[n("font-awesome-icon",{attrs:{icon:["fab","twitter"],size:"lg"}})],1),n("a",{staticClass:"share-line",attrs:{href:"https://social-plugins.line.me/lineit/share?url=https%3A%2F%2Fnitoyon.github.io%2F1-10calc%2F"}},[n("font-awesome-icon",{attrs:{icon:["fab","line"],size:"lg"}})],1),n("a",{staticClass:"share-github",attrs:{href:"https://github.com/nitoyon/1-10calc/"}},[n("font-awesome-icon",{attrs:{icon:["fab","github"],size:"lg"}})],1),n("a",{attrs:{href:"#",id:"showstat"},on:{click:function(e){return e.preventDefault(),t.showPage("app-stat")}}},[n("font-awesome-icon",{attrs:{icon:"chart-bar"}}),t._v(" "+t._s(t.$t("result"))+"\n    ")],1)])],1)},r=[],c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.visible?n("div",{attrs:{id:"add-me-to-home"},on:{click:function(e){return t.hide()}}},[n("font-awesome-icon",{staticClass:"close",attrs:{icon:"window-close"}}),t._v("\n  このアプリをホーム画面から開けるようにしましょう。"),n("br"),n("svg",{attrs:{height:"20px",id:"Layer_1",version:"1.1",viewBox:"0 0 50 50",width:"20px","xml:space":"preserve",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[n("polyline",{attrs:{fill:"none",points:"17,10 25,2 33,10   ",stroke:"#000000","stroke-linecap":"round","stroke-miterlimit":"10","stroke-width":"2"}}),n("line",{attrs:{fill:"none",stroke:"#000000","stroke-linecap":"round","stroke-miterlimit":"10","stroke-width":"2",x1:"25",x2:"25",y1:"32",y2:"2.333"}}),n("rect",{attrs:{fill:"none",height:"50",width:"50"}}),n("path",{attrs:{d:"M17,17H8v32h34V17h-9",fill:"none",stroke:"#000000","stroke-linecap":"round","stroke-miterlimit":"10","stroke-width":"2"}})]),t._v("\n  をタップして\n  "),n("font-awesome-icon",{attrs:{icon:"plus-square"}}),n("strong",[t._v(" ホーム画面に追加")]),t._v("\n  をタップするだけです。\n")],1):t._e()},l=[],u=(n("386d"),s["a"].extend({name:"AddMeToHome",data:function(){var t=-1!==location.search.indexOf("homescreen"),e=window.navigator.standalone,n=window.navigator.userAgent.toLowerCase(),s=/safari/.test(n),o=/iphone|ipod|ipad/.test(n);return{visible:!t&&e&&s&&o}},methods:{hide:function(){this.visible=!1}}})),d=u,h=(n("8b2a"),n("2877")),f=Object(h["a"])(d,c,l,!1,null,"4d03b171",null),g=f.exports,p=(n("7514"),{currentPage:"app-menu",selectedCategory:null,histories:[],categories:[{id:"add1",example:"3 + 6",done:0,sign:"+",isOK:!1,isNG:!1,q:null,questions:[]},{id:"sub1",example:"8 - 3",done:0,sign:"-",isOK:!1,isNG:!1,q:null,questions:[]},{id:"add2",example:"7 + 5",done:0,sign:"+",isOK:!1,isNG:!1,q:null,questions:[]},{id:"sub2",example:"13 - 7",done:0,sign:"-",isOK:!1,isNG:!1,q:null,questions:[]},{id:"mul1",example:"5 × 9",done:0,sign:"×",isOK:!1,isNG:!1,q:null,questions:[]}],init:function(){for(var t=1;t<=10;t++)for(var e=1;e<=10;e++)t+e<=10?this.categories[0].questions.push([t,e,t+e]):10!==t&&10!==e&&(this.categories[2].questions.push([t,e,t+e]),this.categories[3].questions.push([t+e,e,t])),t-e>=1&&this.categories[1].questions.push([t,e,t-e]),t<10&&e<10&&this.categories[4].questions.push([t,e,t*e])},showPage:function(t){this.currentPage=t},setCategory:function(t){var e=this.categories.find(function(e){return e.id===t});void 0===e?(this.selectedCategory=null,this.showPage("app-menu")):(this.selectedCategory=e,this.showPage("app-solve"))}}),v={name:"Stat",components:{AddMeToHome:g},computed:{categories:function(){return p.categories}},methods:{setCategory:function(t){return p.setCategory(t)},showPage:function(t){return p.showPage(t)}}},m=v,w=(n("4c44"),Object(h["a"])(m,a,r,!1,null,"5708c70d",null)),b=w.exports,_=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page",class:"page-"+t.category.id,attrs:{id:"qa"}},[n("header",{class:"bg-"+t.category.id},[n("span",{staticClass:"back",on:{click:function(e){return t.showPage("app-menu")}}},[n("font-awesome-icon",{attrs:{icon:"arrow-left",size:"lg"}})],1),n("div",[t._v(t._s(t.$t("done",[t.category.done]))+" ["+t._s(t.$t(t.category.id))+"]")])]),t.category.q?n("div",{class:{ok:t.category.isOK,ng:t.category.isNG},attrs:{id:"q"}},[n("span",[t._v(t._s(t.category.q[0])+" "+t._s(t.category.sign)+" "+t._s(t.category.q[1]))]),t._v("\n    =\n    "),t.inputValue?[t._v(t._s(t.inputValue))]:t._e(),t.showQuestionMark?n("font-awesome-icon",{attrs:{icon:"question"}}):t._e()],2):t._e(),t.category.q?n("div",{attrs:{id:"a"}},[t._l(t.buttons,function(e){return n("button",{key:e.label,class:{ng:e.ng,ok:e.ok},on:{click:function(n){return t.answer(e)}}},[t._v(t._s(e.label))])}),t.isMultiple?n("button",{class:{ok:t.inputValue},attrs:{id:"clear"},on:{click:function(e){return t.clear()}}},[t._v("C")]):t._e()],2):t._e(),n("transition",{attrs:{name:"fadeout"}},[t.category.isOK?n("div",{attrs:{id:"ok"}},[t._v("🙆")]):t._e()]),n("transition",{attrs:{name:"fadeout"}},[t.category.isNG?n("div",{attrs:{id:"ng"}},[t._v("😢")]):t._e()]),t.category.q?t._e():n("div",{attrs:{id:"done"}},[t._v("🎉")])],1)},y=[],k=s["a"].extend({name:"Solve",data:function(){return{buttons:[{label:1,ok:!1,ng:!1},{label:2,ok:!1,ng:!1},{label:3,ok:!1,ng:!1},{label:4,ok:!1,ng:!1},{label:5,ok:!1,ng:!1},{label:6,ok:!1,ng:!1},{label:7,ok:!1,ng:!1},{label:8,ok:!1,ng:!1},{label:9,ok:!1,ng:!1},{label:10,ok:!1,ng:!1}],inputValue:0,showQuestionMark:!0}},computed:{category:function(){return p.selectedCategory},histories:function(){return p.histories},isMultiple:function(){return null!=p.selectedCategory&&"mul1"===p.selectedCategory.id}},mounted:function(){this.newQuiz()},methods:{showPage:function(t){return p.showPage(t)},initButtons:function(){if(null===this.category)throw new Error("category is null");for(var t="add2"===this.category.id?11:1,e=0;e<this.buttons.length;e++)this.buttons[e].label=e+t,this.isMultiple&&(this.buttons[9].label=0),this.buttons[e].ok=!1,this.buttons[e].ng=!1;this.showQuestionMark=!0,this.inputValue=0},newQuiz:function(){if(null===this.category)throw new Error("category is null");if(this.initButtons(),this.category.q=this.findQuestion(),null!==this.category.q){var t=this.category.q,e=t[0]+this.category.sign+t[1];this.histories.push({q:t,text:e,start:new Date,end:null,ans:[]})}},clear:function(){this.inputValue=0,this.showQuestionMark=!0},answer:function(t){var e=this,n=this.category;if(null===n)throw new Error("category is null");var s=n.q;if(null===s)throw new Error("question is null");if(this.isMultiple||!t.ok&&!t.ng){var o=10*this.inputValue+t.label,i=s[2];if(this.isMultiple){if(this.inputValue=o,i>=10&&o<10)return;this.showQuestionMark=!1}var a=this.histories[this.histories.length-1];if(i!==o)a.ans.push({num:o,ok:!1}),t.ng=!this.isMultiple,n.isNG=!0,setTimeout(function(){e.inputValue=0,e.showQuestionMark=!0,n.isNG=!1},500);else{a.end=new Date,a.ans.push({num:i,ok:!0});var r=n.questions;r.splice(r.indexOf(s),1),t.ok=!0,n.isOK=!0,setTimeout(function(){n.isOK=!1,n.done++,e.newQuiz()},500)}}},findQuestion:function(){if(null===this.category)throw new Error("category is null");var t=this.category.questions;return 0===t.length?null:t[Math.floor(Math.random()*t.length)]}}}),q=k,C=(n("6400"),Object(h["a"])(q,_,y,!1,null,"28484492",null)),x=C.exports,P=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page",attrs:{id:"stat"}},[n("header",{staticClass:"bg-stat"},[n("span",{staticClass:"back",on:{click:function(e){return t.showPage("app-menu")}}},[n("font-awesome-icon",{attrs:{icon:"arrow-left",size:"lg"}})],1),n("div",[n("font-awesome-icon",{attrs:{icon:"chart-bar"}}),t._v(" "+t._s(t.$t("result_title")))],1)]),n("section",[0==t.histories.length?n("h2",[t._v(t._s(t.$t("not_solved")))]):t._e(),t.histories.length?n("table",t._l(t.histories,function(e,s){return n("tr",{key:s},[n("td",{staticClass:"q"},[t._v(t._s(e.text))]),n("td",{staticClass:"ans"},t._l(e.ans,function(e,s){return n("div",{key:s},[e.ok?n("font-awesome-icon",{staticClass:"ok",attrs:{icon:"check"}}):t._e(),e.ok?t._e():n("font-awesome-icon",{staticClass:"ng",attrs:{icon:"exclamation-triangle"}}),t._v("\n            "+t._s(e.num)+"\n          ")],1)}),0),n("td",{staticClass:"time"},[t._v("\n          "+t._s(e.end?t.$t("seconds",[Math.floor((e.end.getTime()-e.start.getTime())/100)/10]):"----")+"\n        ")])])}),0):t._e()])])},M=[],O={name:"Stat",computed:{histories:function(){return p.histories}},methods:{showPage:function(t){return p.showPage(t)}}},$=O,j=(n("6261"),Object(h["a"])($,P,M,!1,null,"baaa7a56",null)),Q=j.exports,S=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page",attrs:{id:"qrcode"}},[n("header",{staticClass:"bg-qrcode"},[n("span",{staticClass:"back",on:{click:function(e){return t.showPage("app-menu")}}},[n("font-awesome-icon",{attrs:{icon:"arrow-left",size:"lg"}})],1),n("div",[n("font-awesome-icon",{attrs:{icon:"qrcode"}}),t._v(" "+t._s(t.$t("qr_code")))],1)]),t._m(0)])},E=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("div",{staticClass:"qrcode"}),n("div",{staticClass:"url"},[t._v("https://nitoyon.github.io/1-10calc/")])])}],F={name:"QrCode",computed:{histories:function(){return p.histories}},methods:{showPage:function(t){return p.showPage(t)}}},z=F,A=(n("86be"),Object(h["a"])(z,S,E,!1,null,"4e5aaa0a",null)),V=A.exports;p.init();var T={components:{Menu:b,Stat:Q,Solve:x,QrCode:V},data:function(){return{store:p}}},G=T,K=(n("034f"),Object(h["a"])(G,o,i,!1,null,null,null)),N=K.exports,D=n("a925");s["a"].use(D["a"]);var H=new D["a"]({locale:navigator.language.substring(0,2),fallbackLocale:"en",messages:{en:{title:"Calc Card App",notice:"Please choose a category",add1:"Addition 1",sub1:"Subtraction 1",add2:"Addition 2",sub2:"Subtraction 2",mul1:"Multiplication ",done:"{0} Correct!!",result:"View results",result_title:"Results",not_solved:"You have not solved any problem yet.",seconds:"{0} sec",qr_code:"QR Code"},ja:{title:"けいさんカードアプリ",notice:"もんだいをえらんでね",add1:"たしざん 1",sub1:"ひきざん 1",add2:"たしざん 2",sub2:"ひきざん 2",mul1:"かけざん",done:"{0}もん",result:"勉強結果を見る",result_title:"勉強結果",not_solved:"まだ 1 問も解いていません",seconds:"{0} 秒",qr_code:"QR コード"}}}),L=n("ecee"),B=n("c074"),R=n("f2d1"),J=n("ad3d");L["c"].add(B["a"],B["b"],B["c"],B["d"],B["e"],B["g"],B["f"],B["h"],B["i"],R["a"],R["b"],R["d"],R["c"]),s["a"].component("font-awesome-icon",J["a"]),s["a"].config.productionTip=!1,new s["a"]({i18n:H,render:function(t){return t(N)}}).$mount("#app"),document.title=H.t("title").toString();var W=document.querySelector('meta[name="apple-mobile-web-app-title"]');null!==W&&W.setAttribute("content",document.title),window.addEventListener("load",function(){"serviceWorker"in navigator&&navigator.serviceWorker.register("./sw.js")})},e634:function(t,e,n){}});
//# sourceMappingURL=app.34b2db4e.js.map