(function(e){function t(t){for(var n,i,s=t[0],l=t[1],u=t[2],c=0,f=[];c<s.length;c++)i=s[c],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&f.push(o[i][0]),o[i]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);p&&p(t);while(f.length)f.shift()();return a.push.apply(a,u||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],n=!0,s=1;s<r.length;s++){var l=r[s];0!==o[l]&&(n=!1)}n&&(a.splice(t--,1),e=i(i.s=r[0]))}return e}var n={},o={app:0},a=[];function i(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=e,i.c=n,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(r,n,function(t){return e[t]}.bind(null,n));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var p=l;a.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"56d7":function(e,t,r){"use strict";r.r(t);var n=r("2b0e"),o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("h1",[e._v("App test")]),r("div",[r("router-link",{attrs:{to:"/"}},[e._v("Home")]),e._v(" |\n        "),r("router-link",{attrs:{to:"/Login"}},[e._v("Login")]),e._v(" |\n    ")],1),r("router-view")],1)},a=[],i={name:"app"},s=i,l=r("2877"),u=Object(l["a"])(s,o,a,!1,null,null,null),p=u.exports,c=r("8c4f"),f=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"home"},[r("h1",[e._v(e._s(e.msg))]),e._m(0)])},m=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[e._v("Welcome to your new single-page application, built with "),r("a",{attrs:{href:"https://vuejs.org",target:"_blank"}},[e._v("Vue.js")]),e._v(".")])}],d={name:"Home",props:{msg:"HEJ"}},v=d,g=Object(l["a"])(v,f,m,!1,null,"04a9939a",null),h=g.exports,b=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"loginVue"}},[r("div",[r("div",[r("form",[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"email"}},[e._v("Email")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.email,expression:"form.email"}],attrs:{type:"email",placeholder:"Please enter your email"},domProps:{value:e.form.email},on:{input:function(t){t.target.composing||e.$set(e.form,"email",t.target.value)}}})]),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"password"}},[e._v("Password")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.password,expression:"form.password"}],attrs:{type:"text",placeholder:"Please enter your password"},domProps:{value:e.form.password},on:{input:function(t){t.target.composing||e.$set(e.form,"password",t.target.value)}}})]),r("div",{staticClass:"form-group"},[r("button",{staticClass:"button",staticStyle:{"margin-left":"110px"},attrs:{type:"button"},on:{click:e.loginApplication}},[e._v("\n                        Login In\n                    ")]),e._v("   \n                ")])]),r("span",{staticClass:"text-danger",staticStyle:{"margin-left":"110px"}},[e._v(e._s(e.message))])])])])},_=[],w={name:"Login",data:function(){return{form:{email:"",password:""},message:""}},methods:{loginApplication:function(){var e={};e.email=this.form.email,e.password=this.form.password,fetch("/api/Account/login",{method:"POST",body:JSON.stringify(e),headers:new Headers({"Content-Type":"application/json"})}).then(function(e){return e.json().then(function(e){localStorage.setItem("token",e.jwt)}).catch(function(e){return alert("Error:",e)})})}}},y=w,j=Object(l["a"])(y,b,_,!1,null,"3ccba15c",null),O=j.exports;n["a"].use(c["a"]);var x=new c["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:h},{path:"/Login",name:"Login",component:O}]});n["a"].config.productionTip=!0,new n["a"]({router:x,render:function(e){return e(p)}}).$mount("#app")}});
//# sourceMappingURL=app.8839c4ec.js.map