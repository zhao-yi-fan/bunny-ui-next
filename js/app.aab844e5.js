(function(n){function e(e){for(var o,i,a=e[0],c=e[1],s=e[2],f=0,p=[];f<a.length;f++)i=a[f],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&p.push(r[i][0]),r[i]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(n[o]=c[o]);l&&l(e);while(p.length)p.shift()();return u.push.apply(u,s||[]),t()}function t(){for(var n,e=0;e<u.length;e++){for(var t=u[e],o=!0,a=1;a<t.length;a++){var c=t[a];0!==r[c]&&(o=!1)}o&&(u.splice(e--,1),n=i(i.s=t[0]))}return n}var o={},r={app:0},u=[];function i(e){if(o[e])return o[e].exports;var t=o[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.m=n,i.c=o,i.d=function(n,e,t){i.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:t})},i.r=function(n){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},i.t=function(n,e){if(1&e&&(n=i(n)),8&e)return n;if(4&e&&"object"===typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var o in n)i.d(t,o,function(e){return n[e]}.bind(null,o));return t},i.n=function(n){var e=n&&n.__esModule?function(){return n["default"]}:function(){return n};return i.d(e,"a",e),e},i.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},i.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],c=a.push.bind(a);a.push=e,a=a.slice();for(var s=0;s<a.length;s++)e(a[s]);var l=c;u.push([0,"chunk-vendors"]),t()})({0:function(n,e,t){n.exports=t("56d7")},"56d7":function(n,e,t){"use strict";t.r(e);t("e260"),t("e6cf"),t("cca6"),t("a79d");var o=t("2b0e"),r=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{attrs:{id:"app"}},[t("bn-button"),t("bn-button-group"),t("bn-icon")],1)},u=[],i={name:"App",components:{},mounted:function(){this.$message.info({message:"我很帅",duration:3e3})}},a=i,c=t("2877"),s=Object(c["a"])(a,r,u,!1,null,null,null),l=s.exports,f=(t("159b"),t("b0c0"),function(){var n=this,e=n.$createElement;n._self._c;return n._m(0)}),p=[function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",[t("button",[n._v("按钮")])])}],d={name:"BnButton"},m=d,b=Object(c["a"])(m,f,p,!1,null,null,null),v=b.exports;t("692e");v.install=function(n){n.component(v.name,v)};var h=v,g=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",[n._v(" button-group ")])},_=[],y={name:"BnButtonGroup"},O=y,j=Object(c["a"])(O,g,_,!1,null,null,null),$=j.exports;t("b4e0");$.install=function(n){n.component($.name,$)};var w=$,x=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",[n._v(" icon ")])},E=[],P={name:"BnIcon"},B=P,k=Object(c["a"])(B,x,E,!1,null,null,null),M=k.exports;t("ea74");M.install=function(n){n.component(M.name,M)};var S,T,C=M,J=(t("b64b"),function(){var n=this,e=n.$createElement,t=n._self._c||e;return n.messages.length?t("div",{staticClass:"messages"},n._l(n.messages,(function(e){return t("div",{key:e.id},[n._v(" "+n._s(e.message)+" ")])})),0):n._e()}),A=[],G=t("5530"),I=(t("4de4"),{name:"BnMessage",data:function(){return{messages:[]}},mounted:function(){this.id=0},methods:{add:function(n){var e=this,t=this.id++,o=Object(G["a"])(Object(G["a"])({},n),{},{id:t});this.messages.push(o),o.timer=setTimeout((function(){e.remove(o)}),n.duration)},remove:function(n){clearTimeout(n.timer),this.messages=this.messages.filter((function(e){return e.id!==n.id}))}}}),q=I,z=Object(c["a"])(q,J,A,!1,null,"4663964e",null),D=z.exports,F=function(){var n=new T({render:function(n){return n(D)}}).$mount();console.log(n,n.$el),document.body.appendChild(n.$el);var e=n.$children[0];return{add:function(n){e.add(n)}}},H=function(){return S=S||F(),S},K={info:function(n){H().add(n)},warn:function(){},success:function(){},error:function(){}},L={install:function(n,e){if(!T){T=n;var t={};Object.keys(K).forEach((function(n){t[n]=K[n]})),n.prototype.$message=t}n.mixin({beforeCreated:function(){this.$options.info?console.log("根"):console.log("不是根")}})}},N=[h,w,C],Q=function(n){N.forEach((function(e){n.use(e)})),n.use(L,{duration:1e3})},R={install:Q};o["a"].use(R),o["a"].config.productionTip=!1,new o["a"]({render:function(n){return n(l)}}).$mount("#app")},"692e":function(n,e,t){},b4e0:function(n,e,t){},ea74:function(n,e,t){}});
//# sourceMappingURL=app.aab844e5.js.map