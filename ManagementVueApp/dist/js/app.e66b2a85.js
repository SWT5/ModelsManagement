(function(e){function t(t){for(var o,s,i=t[0],l=t[1],m=t[2],c=0,p=[];c<i.length;c++)s=i[c],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&p.push(r[s][0]),r[s]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(e[o]=l[o]);u&&u(t);while(p.length)p.shift()();return n.push.apply(n,m||[]),a()}function a(){for(var e,t=0;t<n.length;t++){for(var a=n[t],o=!0,i=1;i<a.length;i++){var l=a[i];0!==r[l]&&(o=!1)}o&&(n.splice(t--,1),e=s(s.s=a[0]))}return e}var o={},r={app:0},n=[];function s(t){if(o[t])return o[t].exports;var a=o[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=e,s.c=o,s.d=function(e,t,a){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)s.d(a,o,function(t){return e[t]}.bind(null,o));return a},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var m=0;m<i.length;m++)t(i[m]);var u=l;n.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"56d7":function(e,t,a){"use strict";a.r(t);var o=a("2b0e"),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("h1",[e._v("App test")]),a("nav",[a("router-link",{attrs:{to:"/"}},[e._v("Home")]),e._v(" |\n        "),a("router-link",{attrs:{to:"/Login"}},[e._v("Login")]),e._v(" |\n        "),a("router-link",{attrs:{to:"/Account"}},[e._v("Account")]),e._v(" |\n        "),a("router-link",{attrs:{to:"/Job"}},[e._v("Job")]),e._v(" |\n        "),a("router-link",{attrs:{to:"/CreateModel"}},[e._v("Create Model")]),e._v(" |\n        "),a("router-link",{attrs:{to:"/CreateManager"}},[e._v("Create Manager")]),e._v("|\n        "),a("router-link",{attrs:{to:"/CreateNewJob"}},[e._v(" Create New Job")]),e._v("|\n    ")],1),a("router-view")],1)},n=[],s={name:"app"},i=s,l=a("2877"),m=Object(l["a"])(i,r,n,!1,null,null,null),u=m.exports,c=a("8c4f"),p=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"home"},[a("h1",[e._v(e._s(e.msg))]),e._m(0)])},f=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[e._v("Welcome to your new single-page application, built with "),a("a",{attrs:{href:"https://vuejs.org",target:"_blank"}},[e._v("Vue.js")]),e._v(".")])}],d={name:"Home",props:{msg:"HEJ"}},v=d,g=Object(l["a"])(v,p,f,!1,null,"04a9939a",null),h=g.exports,b=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"Login"}},[a("div",[a("div",[a("form",[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"email"}},[e._v("Email")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.form.email,expression:"form.email"}],attrs:{type:"email",placeholder:"Please enter your email"},domProps:{value:e.form.email},on:{input:function(t){t.target.composing||e.$set(e.form,"email",t.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"password"}},[e._v("Password")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.form.password,expression:"form.password"}],attrs:{type:"text",placeholder:"Please enter your password"},domProps:{value:e.form.password},on:{input:function(t){t.target.composing||e.$set(e.form,"password",t.target.value)}}})]),a("div",{staticClass:"form-group"},[a("button",{staticClass:"button",staticStyle:{"margin-left":"110px"},attrs:{type:"button"},on:{click:e.loginApplication}},[e._v("\n                        Login In\n                    ")]),e._v("   \n                ")])]),a("span",{staticClass:"text-danger",staticStyle:{"margin-left":"110px"}},[e._v(e._s(e.message))])])])])},_=[],y={name:"Login",data:function(){return{form:{email:"",password:""},message:""}},methods:{loginApplication:function(){var e={};e.email=this.form.email,e.password=this.form.password,fetch("https://localhost:44368/api/Account/login",{method:"POST",body:JSON.stringify(e),headers:new Headers({"Content-Type":"application/json"})}).then(function(e){return e.json().then(function(e){localStorage.setItem("token",e.jwt)}).catch(function(e){return alert("Error:",e)})})}}},w=y,C=Object(l["a"])(w,b,_,!1,null,"64a4e716",null),x=C.exports,P=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"Account"}},[a("h4",[e._v("Account")]),a("p",[a("ul",[a("li",[e._v("\n                Name: "+e._s(e.firstName)+" "+e._s(e.lastName)+"  \n            ")]),a("li",[e._v("\n                Email: "+e._s(e.Email)+"\n            ")])])]),e.isManager?a("div",[a("ul",e._l(e.jobs,function(t){return a("li",[e._v(e._s(t))])}))]):e._e(),a("p")])},j=[],N={name:"Account",data:function(){return{form:{firstName:"",lastName:"",email:"",isManager:!1,jobs:[]}}},methods:{getAccount:function(){var e=this,t="https://localhost:44368/api/Account/login";fetch(t,{method:"GET",credentials:"include",headers:{Authorization:"Bearer "+localStorage.getItem("token"),"Content-Type":"application/json"}}).then(function(e){JSON.parse(e)}).catch(function(t){return e.setState({isLoading:!1,message:"Something bad happend "+t})})}}},S=N,O=Object(l["a"])(S,P,j,!1,null,"4b6fa460",null),$=O.exports,J=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"Job"}},[a("form",[a("div",{staticClass:"form-group"},[a("button",{staticClass:"button",staticStyle:{"margin-left":"110px"},attrs:{type:"button"},on:{click:e.getJobs}},[e._v("\n                Get Jobs\n            ")]),e._v("   \n        ")]),a("div",[a("ul",e._l(e.jobs,function(t){return a("li",[e._v(e._s(t))])}))])])])},k=[],M={name:"Job",data:function(){return{form:{firstName:"",lastName:"",email:"",isManager:!1,jobs:[]}}},methods:{getJobs:function(){var e=this,t="https://localhost:44368/api/Jobs";fetch(t,{method:"GET",credentials:"include",headers:{Authorization:"Bearer "+localStorage.getItem("token"),"Content-Type":"application/json"}}).then(function(e){JSON.parse(e)}).catch(function(t){return e.setState({isLoading:!1,message:"Something bad happened "+t})})}}},A=M,E=Object(l["a"])(A,J,k,!1,null,"4126b3f2",null),I=E.exports,T=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"CreateModel"}},[a("div",[a("div",[a("form",[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"firstname"}},[e._v("firstname")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.form.firstname,expression:"form.firstname"}],attrs:{type:"text",placeholder:"Please enter your lastname"},domProps:{value:e.form.firstname},on:{input:function(t){t.target.composing||e.$set(e.form,"firstname",t.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"lastname"}},[e._v("lastname")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.form.lastname,expression:"form.lastname"}],attrs:{type:"text",placeholder:"Please enter your lastname"},domProps:{value:e.form.lastname},on:{input:function(t){t.target.composing||e.$set(e.form,"lastname",t.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"email"}},[e._v("Email")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.form.email,expression:"form.email"}],attrs:{type:"email",placeholder:"Please enter your email"},domProps:{value:e.form.email},on:{input:function(t){t.target.composing||e.$set(e.form,"email",t.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"phoneNo"}},[e._v("phoneNo")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.form.phoneNo,expression:"form.phoneNo"}],attrs:{type:"number",placeholder:"Please enter your phoneNo"},domProps:{value:e.form.phoneNo},on:{input:function(t){t.target.composing||e.$set(e.form,"phoneNo",t.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"password"}},[e._v("Password")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.form.password,expression:"form.password"}],attrs:{type:"text",placeholder:"Please enter your password"},domProps:{value:e.form.password},on:{input:function(t){t.target.composing||e.$set(e.form,"password",t.target.value)}}})]),a("div",{staticClass:"form-group"},[a("button",{staticClass:"button",staticStyle:{"margin-left":"110px"},attrs:{type:"button"},on:{click:e.createmodel}},[e._v("\n                        create model\n                    ")]),e._v("   \n                ")])]),a("span",{staticClass:"text-danger",staticStyle:{"margin-left":"110px"}},[e._v(e._s(e.message))])])])])},L=[],D={name:"CreateModel",data:function(){return{form:{firstname:"",lastname:"",email:"",phoneNo:"",password:""},message:""}},methods:{createmodel:function(){var e=this;fetch("https://localhost:44368/api/Models",{method:"POST",credentials:"include",body:JSON.stringify(this.form),headers:{Authorization:"Bearer "+localStorage.getItem("token"),"Content-Type":"application/json"}}).then(function(e){return e.json()}).then(function(t){e.form.createmanager=t})}}},z=D,B=Object(l["a"])(z,T,L,!1,null,"4ff7718b",null),H=B.exports,G=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"CreateManager"}},[a("div",[a("div",[a("form",[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"firstname"}},[e._v("firstname")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.form.firstname,expression:"form.firstname"}],attrs:{type:"text",placeholder:"Please enter your lastname"},domProps:{value:e.form.firstname},on:{input:function(t){t.target.composing||e.$set(e.form,"firstname",t.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"lastname"}},[e._v("lastname")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.form.lastname,expression:"form.lastname"}],attrs:{type:"text",placeholder:"Please enter your lastname"},domProps:{value:e.form.lastname},on:{input:function(t){t.target.composing||e.$set(e.form,"lastname",t.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"email"}},[e._v("Email")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.form.email,expression:"form.email"}],attrs:{type:"email",placeholder:"Please enter your email"},domProps:{value:e.form.email},on:{input:function(t){t.target.composing||e.$set(e.form,"email",t.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"password"}},[e._v("Password")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.form.password,expression:"form.password"}],attrs:{type:"text",placeholder:"Please enter your password"},domProps:{value:e.form.password},on:{input:function(t){t.target.composing||e.$set(e.form,"password",t.target.value)}}})]),a("div",{staticClass:"form-group"},[a("button",{staticClass:"button",staticStyle:{"margin-left":"110px"},attrs:{type:"button"},on:{click:e.createmanager}},[e._v("\n                        create manager\n                    ")]),e._v("   \n                ")])]),a("span",{staticClass:"text-danger",staticStyle:{"margin-left":"110px"}},[e._v(e._s(e.message))])])])])},V=[],W={name:"CreateManager",data:function(){return{form:{firstname:"",lastname:"",email:"",password:""},message:""}},methods:{createmanager:function(){var e=this;fetch("https://localhost:44368/api/Managers",{method:"POST",credentials:"include",body:JSON.stringify(this.form),headers:{Authorization:"Bearer "+localStorage.getItem("token"),"Content-Type":"application/json"}}).then(function(e){return e.json()}).then(function(t){e.form.createmanager=t})}}},q=W,F=Object(l["a"])(q,G,V,!1,null,"4e30ca0c",null),K=F.exports,Q=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"CreateJob"}},[a("div",[a("div",[a("form",[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"jobId"}},[e._v("jobId")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.form.jobId,expression:"form.jobId"}],attrs:{type:"text",placeholder:"Please enter your jobId"},domProps:{value:e.form.jobId},on:{input:function(t){t.target.composing||e.$set(e.form,"jobId",t.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"custumer"}},[e._v("costumer")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.form.custumer,expression:"form.custumer"}],attrs:{type:"text",placeholder:"Please enter your custumer"},domProps:{value:e.form.custumer},on:{input:function(t){t.target.composing||e.$set(e.form,"custumer",t.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"startDate"}},[e._v("startDate")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.form.startDate,expression:"form.startDate"}],attrs:{type:"date",placeholder:"Please enter your startDate"},domProps:{value:e.form.startDate},on:{input:function(t){t.target.composing||e.$set(e.form,"startDate",t.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"days"}},[e._v("days")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.form.days,expression:"form.days"}],attrs:{type:"number",placeholder:"how many days"},domProps:{value:e.form.days},on:{input:function(t){t.target.composing||e.$set(e.form,"days",t.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"location"}},[e._v("location")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.form.location,expression:"form.location"}],attrs:{type:"text",placeholder:"Please enter your location"},domProps:{value:e.form.location},on:{input:function(t){t.target.composing||e.$set(e.form,"location",t.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"comments"}},[e._v("comments")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.form.comments,expression:"form.comments"}],attrs:{type:"text",placeholder:"Please enter your comments"},domProps:{value:e.form.comments},on:{input:function(t){t.target.composing||e.$set(e.form,"comments",t.target.value)}}})]),a("div",{staticClass:"form-group"},[a("button",{staticClass:"button",staticStyle:{"margin-left":"110px"},attrs:{type:"button"},on:{click:e.createjob}},[e._v("\n                        create new job\n                    ")]),e._v("   \n                ")])])])])])},R=[],U={name:"CreateJob",data:function(){return{form:{jobId:"",custumer:"",startDate:"",days:0,location:"",comments:""}}},methods:{createjob:function(){var e=this;fetch("https://localhost:44368/api/Jobs",{method:"POST",credentials:"include",body:JSON.stringify(this.form),headers:{Authorization:"Bearer "+localStorage.getItem("token"),"Content-Type":"application/json"}}).then(function(e){return e.json()}).then(function(t){e.form.createmanager=t})}}},X=U,Y=Object(l["a"])(X,Q,R,!1,null,"db266a4e",null),Z=Y.exports;o["a"].use(c["a"]);var ee=new c["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:h},{path:"/Login",name:"Login",component:x},{path:"/Account",name:"Account",component:$},{path:"/Job",name:"Job",component:I},{path:"/CreateModel",name:"CreateModel",component:H},{path:"/CreateManager",name:"CreateManager",component:K},{path:"/CreateNewJob",name:"CreateNewJob",component:Z}]});o["a"].config.productionTip=!0,new o["a"]({router:ee,render:function(e){return e(u)}}).$mount("#app")}});
//# sourceMappingURL=app.e66b2a85.js.map