(function(e){function t(t){for(var n,u,i=t[0],c=t[1],s=t[2],l=0,d=[];l<i.length;l++)u=i[l],Object.prototype.hasOwnProperty.call(o,u)&&o[u]&&d.push(o[u][0]),o[u]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);f&&f(t);while(d.length)d.shift()();return a.push.apply(a,s||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],n=!0,u=1;u<r.length;u++){var c=r[u];0!==o[c]&&(n=!1)}n&&(a.splice(t--,1),e=i(i.s=r[0]))}return e}var n={},o={app:0},a=[];function u(e){return i.p+"js/"+({about:"about"}[e]||e)+"."+{about:"97850c1d"}[e]+".js"}function i(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.e=function(e){var t=[],r=o[e];if(0!==r)if(r)t.push(r[2]);else{var n=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=n);var a,c=document.createElement("script");c.charset="utf-8",c.timeout=120,i.nc&&c.setAttribute("nonce",i.nc),c.src=u(e);var s=new Error;a=function(t){c.onerror=c.onload=null,clearTimeout(l);var r=o[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;s.message="Loading chunk "+e+" failed.\n("+n+": "+a+")",s.name="ChunkLoadError",s.type=n,s.request=a,r[1](s)}o[e]=void 0}};var l=setTimeout((function(){a({type:"timeout",target:c})}),12e4);c.onerror=c.onload=a,document.head.appendChild(c)}return Promise.all(t)},i.m=e,i.c=n,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(r,n,function(t){return e[t]}.bind(null,n));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var f=s;a.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"56d7":function(e,t,r){"use strict";r.r(t);r("4160"),r("d3b7"),r("159b"),r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("div",{attrs:{id:"nav"}},[r("router-link",{attrs:{to:"/"}},[e._v("Home")]),e._v(" | "),r("router-link",{attrs:{to:"/about"}},[e._v("About")])],1),r("router-view")],1)},a=[],u=(r("5c0b"),r("2877")),i={},c=Object(u["a"])(i,o,a,!1,null,null,null),s=c.exports,l=r("8c4f"),f=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"home"},[r("formsTable",{staticClass:"form-table",attrs:{url:e.urlToGetForms}})],1)},d=[],p=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("b-table",{attrs:{striped:"",hover:"",items:e.allForms},scopedSlots:e._u([{key:"cell(LinkToSubmit)",fn:function(t){return[r("a",{attrs:{href:t.item.LinkToSubmit}},[e._v("Submit to this form")])]}},{key:"cell(LinkToSubmission)",fn:function(t){return[r("a",{attrs:{href:t.item.LinkToSubmission}},[e._v("View all Submissions of this form")])]}}])})],1)},m=[],b=(r("96cf"),r("1da1")),h=r("bc3a"),v=r.n(h);function y(e){return g.apply(this,arguments)}function g(){return g=Object(b["a"])(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,v.a.get(t).then((function(e){return console.log(e),r=e.data,r})).catch((function(e){return console.log("no recipes")}));case 2:return e.abrupt("return",{recivedForms:r});case 3:case"end":return e.stop()}}),e)}))),g.apply(this,arguments)}var w={name:"formsTable",props:{url:{type:String,required:!0}},data:function(){return{fields:[{key:"LinkToSubmit",label:"Submit",formatter:"fullName"},{key:"LinkToSubmission"},{key:"birthYear",label:"Calculated Birth Year",formatter:function(e,t,r){return(new Date).getFullYear()-r.age}}],allForms:[]}},methods:{updateTable:function(){var e=this;return Object(b["a"])(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return console.log("Entered updateTable()"),t.next=3,y(e.url);case 3:r=t.sent,n=r.recivedForms,e.allForms=n;case 6:case"end":return t.stop()}}),t)})))()}},mounted:function(){this.updateTable()}},k=w,T=Object(u["a"])(k,p,m,!1,null,"a82ae80a",null),_=T.exports,j={name:"Home",data:function(){return{urlToGetForms:"https://heroku-form-builder.herokuapp.com/forms/all_forms"}},components:{formsTable:_}},S=j,O=(r("cccb"),Object(u["a"])(S,f,d,!1,null,null,null)),x=O.exports;n["default"].use(l["a"]);var P=[{path:"/",name:"Home",component:x},{path:"/about",name:"About",component:function(){return r.e("about").then(r.bind(null,"f820"))}}],E=new l["a"]({mode:"history",base:"/",routes:P}),F=E,L=r("2f62");n["default"].use(L["a"]);var C=new L["a"].Store({state:{},mutations:{},actions:{},modules:{}}),M=r("a7fe"),R=r.n(M),$=r("2797"),q=r.n($),A=r("7207"),H=r.n(A),Y=r("1dce"),G=r.n(Y),J=(r("f9e3"),r("2dd8"),r("1073")),B=r("3d31"),D=r("cbd0"),N=r("b1fc"),V=r("7049"),z=r("a7e2"),I=r("f9bc"),K=r("44d4"),Q=r("cca8"),U=r("51c2"),W=r("498a"),X=r("b519"),Z=r("dbbe"),ee=r("8c60"),te=r("63e9"),re=r("1f1a");[J["a"],B["a"],D["a"],N["a"],V["a"],z["a"],I["a"],K["a"],Q["a"],U["a"],W["a"],X["a"],Z["a"],ee["a"],te["a"],re["a"]].forEach((function(e){return n["default"].use(e)})),n["default"].use(G.a),n["default"].use(q.a),n["default"].use(H.a),v.a.interceptors.request.use((function(e){return e}),(function(e){return Promise.reject(e)})),n["default"].use(l["a"]),v.a.interceptors.response.use((function(e){return e}),(function(e){return Promise.reject(e)})),n["default"].use(R.a,v.a),n["default"].config.productionTip=!1,new n["default"]({router:F,store:C,render:function(e){return e(s)}}).$mount("#app")},"5c0b":function(e,t,r){"use strict";var n=r("9c0c"),o=r.n(n);o.a},"5ced":function(e,t,r){},"9c0c":function(e,t,r){},cccb:function(e,t,r){"use strict";var n=r("5ced"),o=r.n(n);o.a}});
//# sourceMappingURL=app.ed688968.js.map