(function(t){function e(e){for(var a,s,i=e[0],l=e[1],m=e[2],u=0,d=[];u<i.length;u++)s=i[u],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&d.push(r[s][0]),r[s]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);c&&c(e);while(d.length)d.shift()();return n.push.apply(n,m||[]),o()}function o(){for(var t,e=0;e<n.length;e++){for(var o=n[e],a=!0,i=1;i<o.length;i++){var l=o[i];0!==r[l]&&(a=!1)}a&&(n.splice(e--,1),t=s(s.s=o[0]))}return t}var a={},r={app:0},n=[];function s(e){if(a[e])return a[e].exports;var o=a[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,s),o.l=!0,o.exports}s.m=t,s.c=a,s.d=function(t,e,o){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(s.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(o,a,function(e){return t[e]}.bind(null,a));return o},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=e,i=i.slice();for(var m=0;m<i.length;m++)e(i[m]);var c=l;n.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"1c49":function(t,e,o){},"56d7":function(t,e,o){"use strict";o.r(e);var a=o("2b0e"),r=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("h1",[t._v("Modelbureau")]),o("nav",[o("router-link",{attrs:{to:"/"}},[t._v("Home")]),t._v(" |\n        "),o("router-link",{attrs:{to:"/Login"}},[t._v("Login")]),t._v(" |\n        "),o("router-link",{attrs:{to:"/Account"}},[t._v("Account")]),t._v(" |\n        "),o("router-link",{attrs:{to:"/Job"}},[t._v("Job")]),t._v(" |\n        "),o("router-link",{attrs:{to:"/CreateModel"}},[t._v("Create Model")]),t._v(" |\n        "),o("router-link",{attrs:{to:"/CreateManager"}},[t._v("Create Manager")]),t._v("|\n        "),o("router-link",{attrs:{to:"/CreateNewJob"}},[t._v(" Create New Job")]),t._v("|\n    ")],1),o("router-view")],1)},n=[],s={name:"app"},i=s,l=o("2877"),m=Object(l["a"])(i,r,n,!1,null,null,null),c=m.exports,u=o("8c4f"),d=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"home"},[o("h1",[t._v(t._s(t.msg))]),t._m(0)])},p=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("p",[t._v("Welcome to your new single-page application, built with "),o("a",{attrs:{href:"https://vuejs.org",target:"_blank"}},[t._v("Vue.js")]),t._v(".")])}],f={name:"Home",props:{msg:"HEJ"}},v=f,h=Object(l["a"])(v,d,p,!1,null,"04a9939a",null),g=h.exports,b=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"Login"}},[o("div",[o("div",[o("form",[o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"email"}},[t._v("Email")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.form.email,expression:"form.email"}],attrs:{type:"email",placeholder:"Please enter your email"},domProps:{value:t.form.email},on:{input:function(e){e.target.composing||t.$set(t.form,"email",e.target.value)}}})]),o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"password"}},[t._v("Password")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.form.password,expression:"form.password"}],attrs:{type:"text",placeholder:"Please enter your password"},domProps:{value:t.form.password},on:{input:function(e){e.target.composing||t.$set(t.form,"password",e.target.value)}}})]),o("div",{staticClass:"form-group"},[o("button",{staticClass:"button",staticStyle:{"margin-left":"110px"},attrs:{type:"button"},on:{click:t.loginApplication}},[t._v("\n                        Login In\n                    ")]),t._v("   \n                ")])])])])])},_=[],y=(o("28a5"),{name:"Login",data:function(){return{form:{email:"",password:""},credentials:{}}},methods:{loginApplication:function(){var t=this,e={};e.email=this.form.email,e.password=this.form.password,fetch("https://localhost:44368/api/Account/login",{method:"POST",body:JSON.stringify(e),headers:new Headers({"Content-Type":"application/json"})}).then(function(e){return e.json().then(function(e){localStorage.setItem("token",e.jwt),t.credentials=JSON.parse(atob(e.jwt.split(".")[1]))}).catch(function(t){return alert("Error:",t)})})}}}),w=y,C=Object(l["a"])(w,b,_,!1,null,"27374308",null),x=C.exports,j=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"Account"}},[o("form",t._l(t.form.account,function(e){return o("p",[t._v("\n            Name: "+t._s(e.firstName)+" "+t._s(e.lastName)+" "),o("br"),t._v("\n            Email: "+t._s(e.email)+"\n        ")])}))])},P=[],N={name:"Account",data:function(){return{form:{account:[]},credentials:{}}},created:function(){this.credentials=JSON.parse(atob(localStorage.getItem("token").split(".")[1])),this.validateAccount()},methods:{getManagerAccount:function(){var t=this,e="https://localhost:44368/api/Managers",o={};o.account=this.form.account,fetch(e,{method:"GET",credentials:"include",headers:{Authorization:"Bearer "+localStorage.getItem("token"),"Content-Type":"application/json"}}).then(function(t){return t.json()}).then(function(e){t.form.account=e}).catch(function(t){console.log(t)})},getModelAccount:function(){var t=this,e="https://localhost:44368/api/Models/"+this.credentials.ModelId,o={};o.account=this.form.account,fetch(e,{method:"GET",credentials:"include",headers:{Authorization:"Bearer "+localStorage.getItem("token"),"Content-Type":"application/json"}}).then(function(t){return t.json()}).then(function(e){t.form.account=e}).catch(function(t){console.log(t)})},validateAccount:function(){"Manager"==this.credentials.role?this.getManagerAccount():this.getModelAccount()}}},M=N,S=Object(l["a"])(M,j,P,!1,null,"5fec21e0",null),J=S.exports,O=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"Job"}},[o("form",[o("div",{staticClass:"row"},[o("div",{staticClass:"column"},[o("div",{staticClass:"form-group"},[o("br"),o("label",{attrs:{for:"jobid"}},[t._v("Job id: ")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.form.jobId,expression:"form.jobId"}],attrs:{type:"text",placeholder:"Enter job id"},domProps:{value:t.form.jobId},on:{input:function(e){e.target.composing||t.$set(t.form,"jobId",e.target.value)}}})]),o("div",{staticClass:"form-group"},[o("br"),o("label",{attrs:{for:"modelid"}},[t._v("Model id: ")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.form.modelId,expression:"form.modelId"}],attrs:{type:"text",placeholder:"Enter model id"},domProps:{value:t.form.modelId},on:{input:function(e){e.target.composing||t.$set(t.form,"modelId",e.target.value)}}})])]),o("div",{staticClass:"column"},[o("div",{staticClass:"form-group"},[o("br"),o("button",{staticClass:"button",attrs:{type:"button"},on:{click:t.addModel}},[t._v("Add model to job")])]),o("div",{staticClass:"form-group"},[o("br"),o("button",{staticClass:"button",attrs:{type:"button"},on:{click:t.deleteModel}},[t._v("Delete model from job")]),o("br"),o("br")])]),o("div",[o("br"),o("label",{attrs:{for:"expenses"}},[t._v("Add Expenses:")]),o("div",[o("br"),o("input",{directives:[{name:"model",rawName:"v-model",value:t.form.date,expression:"form.date"}],attrs:{type:"date",placeholder:"Enter date"},domProps:{value:t.form.date},on:{input:function(e){e.target.composing||t.$set(t.form,"date",e.target.value)}}})]),o("div",[o("br"),o("input",{directives:[{name:"model",rawName:"v-model",value:t.form.text,expression:"form.text"}],attrs:{type:"text",placeholder:"Enter text"},domProps:{value:t.form.text},on:{input:function(e){e.target.composing||t.$set(t.form,"text",e.target.value)}}})]),o("div",[o("br"),o("input",{directives:[{name:"model",rawName:"v-model",value:t.form.amount,expression:"form.amount"}],attrs:{type:"text",placeholder:"Enter amount"},domProps:{value:t.form.amount},on:{input:function(e){e.target.composing||t.$set(t.form,"amount",e.target.value)}}})])])]),o("div",{staticClass:"row"},[o("div",{staticClass:"column"},[o("ul",[o("h3",[t._v("All Jobs")]),t._l(t.form.jobs,function(e){return o("li",[o("div",[t._v("\n                            Customer: "+t._s(e.customer)+" "),o("br"),t._v("\n                            Location: "+t._s(e.location)+" "),o("br"),t._v("\n                            StartDate: "+t._s(e.startDate)+" "),o("br"),t._v("\n                            Durations: "+t._s(e.days)+" days "),o("br"),t._v("\n                            JobID: "+t._s(e.efJobId)+" "),o("br"),t._v("\n                            Comments: "+t._s(e.comments)+" "),o("br"),o("br")])])})],2)]),o("div",{staticClass:"column"},[o("div",{staticClass:"form-group"},[o("h3",[t._v("All Models ")]),o("ul",t._l(t.form.models,function(e){return o("li",[o("div",[t._v("\n                                ModelId: "+t._s(e.efModelId)+" "),o("br"),t._v("\n                                Model: "+t._s(e.firstName)+" "+t._s(e.lastName)+" "),o("br"),o("br")])])}))])])])])])},$=[],I={name:"Job",data:function(){return{form:{jobs:[],models:[],JobId:"",modelId:""}}},created:function(){this.getJobs(),this.getModels()},methods:{getJobs:function(){var t=this,e="https://localhost:44368/api/Jobs",o={};o.jobs=this.form.jobs,fetch(e,{method:"GET",credentials:"include",headers:{Authorization:"Bearer "+localStorage.getItem("token"),"Content-Type":"application/json"}}).then(function(t){return t.json()}).then(function(e){t.form.jobs=e}).catch(function(t){console.log(t)})},addModel:function(){var t=this,e="https://localhost:44368/api/Jobs/"+this.form.jobId+"/model/"+this.form.modelId;fetch(e,{method:"POST",credentials:"include",body:JSON.stringify(this.form),headers:{Authorization:"Bearer "+localStorage.getItem("token"),"Content-Type":"application/json"}}).then(function(t){t.json()}).then(function(e){t.form.jobs=e}).catch(function(t){console.log(t)})},getModels:function(){var t=this,e="https://localhost:44368/api/Models",o={};o.models=this.form.models,fetch(e,{method:"GET",credentials:"include",headers:{Authorization:"Bearer "+localStorage.getItem("token"),"Content-Type":"application/json"}}).then(function(t){return t.json()}).then(function(e){t.form.models=e}).catch(function(t){console.log(t)})},deleteModel:function(){var t=this,e="https://localhost:44368/api/Jobs/"+this.form.jobId+"/model/"+this.form.modelId;fetch(e,{method:"DELETE",credentials:"include",body:JSON.stringify(this.form),headers:{Authorization:"Bearer "+localStorage.getItem("token"),"Content-Type":"application/json"}}).then(function(t){t.json()}).then(function(e){t.form.jobs=e}).catch(function(t){console.log(t)})}}},k=I,A=(o("7138"),Object(l["a"])(k,O,$,!1,null,"0f81924e",null)),E=A.exports,T=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"CreateModel"}},[o("div",[o("div",[o("form",[o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"firstname"}},[t._v("firstname")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.form.firstname,expression:"form.firstname"}],attrs:{type:"text",placeholder:"Please enter your lastname"},domProps:{value:t.form.firstname},on:{input:function(e){e.target.composing||t.$set(t.form,"firstname",e.target.value)}}})]),o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"lastname"}},[t._v("lastname")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.form.lastname,expression:"form.lastname"}],attrs:{type:"text",placeholder:"Please enter your lastname"},domProps:{value:t.form.lastname},on:{input:function(e){e.target.composing||t.$set(t.form,"lastname",e.target.value)}}})]),o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"email"}},[t._v("Email")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.form.email,expression:"form.email"}],attrs:{type:"email",placeholder:"Please enter your email"},domProps:{value:t.form.email},on:{input:function(e){e.target.composing||t.$set(t.form,"email",e.target.value)}}})]),o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"phoneNo"}},[t._v("phoneNo")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.form.phoneNo,expression:"form.phoneNo"}],attrs:{type:"number",placeholder:"Please enter your phoneNo"},domProps:{value:t.form.phoneNo},on:{input:function(e){e.target.composing||t.$set(t.form,"phoneNo",e.target.value)}}})]),o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"password"}},[t._v("Password")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.form.password,expression:"form.password"}],attrs:{type:"text",placeholder:"Please enter your password"},domProps:{value:t.form.password},on:{input:function(e){e.target.composing||t.$set(t.form,"password",e.target.value)}}})]),o("div",{staticClass:"form-group"},[o("button",{staticClass:"button",staticStyle:{"margin-left":"110px"},attrs:{type:"button"},on:{click:t.createmodel}},[t._v("\n                        create model\n                    ")]),t._v("   \n                ")])]),o("span",{staticClass:"text-danger",staticStyle:{"margin-left":"110px"}},[t._v(t._s(t.message))])])])])},D=[],z={name:"CreateModel",data:function(){return{form:{firstname:"",lastname:"",email:"",phoneNo:"",password:""},message:""}},methods:{createmodel:function(){var t=this;fetch("https://localhost:44368/api/Models",{method:"POST",credentials:"include",body:JSON.stringify(this.form),headers:{Authorization:"Bearer "+localStorage.getItem("token"),"Content-Type":"application/json"}}).then(function(t){return t.json()}).then(function(e){t.form.createmanager=e})}}},B=z,L=Object(l["a"])(B,T,D,!1,null,"4ff7718b",null),G=L.exports,H=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"CreateManager"}},[o("div",[o("div",[o("form",[o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"firstname"}},[t._v("firstname")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.form.firstname,expression:"form.firstname"}],attrs:{type:"text",placeholder:"Please enter your lastname"},domProps:{value:t.form.firstname},on:{input:function(e){e.target.composing||t.$set(t.form,"firstname",e.target.value)}}})]),o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"lastname"}},[t._v("lastname")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.form.lastname,expression:"form.lastname"}],attrs:{type:"text",placeholder:"Please enter your lastname"},domProps:{value:t.form.lastname},on:{input:function(e){e.target.composing||t.$set(t.form,"lastname",e.target.value)}}})]),o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"email"}},[t._v("Email")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.form.email,expression:"form.email"}],attrs:{type:"email",placeholder:"Please enter your email"},domProps:{value:t.form.email},on:{input:function(e){e.target.composing||t.$set(t.form,"email",e.target.value)}}})]),o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"password"}},[t._v("Password")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.form.password,expression:"form.password"}],attrs:{type:"text",placeholder:"Please enter your password"},domProps:{value:t.form.password},on:{input:function(e){e.target.composing||t.$set(t.form,"password",e.target.value)}}})]),o("div",{staticClass:"form-group"},[o("button",{staticClass:"button",staticStyle:{"margin-left":"110px"},attrs:{type:"button"},on:{click:t.createmanager}},[t._v("\n                        create manager\n                    ")]),t._v("   \n                ")])]),o("span",{staticClass:"text-danger",staticStyle:{"margin-left":"110px"}},[t._v(t._s(t.message))])])])])},U=[],V={name:"CreateManager",data:function(){return{form:{firstname:"",lastname:"",email:"",password:""},message:""}},methods:{createmanager:function(){var t=this;fetch("https://localhost:44368/api/Managers",{method:"POST",credentials:"include",body:JSON.stringify(this.form),headers:{Authorization:"Bearer "+localStorage.getItem("token"),"Content-Type":"application/json"}}).then(function(t){return t.json()}).then(function(e){t.form.createmanager=e})}}},W=V,q=Object(l["a"])(W,H,U,!1,null,"4e30ca0c",null),F=q.exports,K=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"CreateJob"}},[o("div",[o("div",[o("form",[o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"custumer"}},[t._v("costumer")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.form.custumer,expression:"form.custumer"}],attrs:{type:"text",placeholder:"Please enter your custumer"},domProps:{value:t.form.custumer},on:{input:function(e){e.target.composing||t.$set(t.form,"custumer",e.target.value)}}})]),o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"startDate"}},[t._v("startDate")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.form.startDate,expression:"form.startDate"}],attrs:{type:"date",placeholder:"Please enter your startDate"},domProps:{value:t.form.startDate},on:{input:function(e){e.target.composing||t.$set(t.form,"startDate",e.target.value)}}})]),o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"days"}},[t._v("days")]),o("input",{directives:[{name:"model",rawName:"v-model.number",value:t.form.days,expression:"form.days",modifiers:{number:!0}}],attrs:{type:"number",placeholder:"how many days"},domProps:{value:t.form.days},on:{input:function(e){e.target.composing||t.$set(t.form,"days",t._n(e.target.value))},blur:function(e){t.$forceUpdate()}}})]),o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"location"}},[t._v("location")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.form.location,expression:"form.location"}],attrs:{type:"text",placeholder:"Please enter your location"},domProps:{value:t.form.location},on:{input:function(e){e.target.composing||t.$set(t.form,"location",e.target.value)}}})]),o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"comments"}},[t._v("comments")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.form.comments,expression:"form.comments"}],attrs:{type:"text",placeholder:"Please enter your comments"},domProps:{value:t.form.comments},on:{input:function(e){e.target.composing||t.$set(t.form,"comments",e.target.value)}}})]),o("div",{staticClass:"form-group"},[o("button",{staticClass:"button",staticStyle:{"margin-left":"110px"},attrs:{type:"button"},on:{click:t.createjob}},[t._v("\n                        create new job\n                    ")]),t._v("   \n                ")])])])])])},Q=[],R={name:"CreateJob",data:function(){return{form:{costumer:"",startDate:"",days:1,location:"",comments:""},message:""}},methods:{createjob:function(){var t=this;fetch("https://localhost:44368/api/Jobs",{method:"POST",credentials:"include",body:JSON.stringify(this.form),headers:{Authorization:"Bearer "+localStorage.getItem("token"),"Content-Type":"application/json"}}).then(function(t){return t.json()}).then(function(e){t.form.createmanager=e})}}},X=R,Y=Object(l["a"])(X,K,Q,!1,null,"2b96cadb",null),Z=Y.exports;a["a"].use(u["a"]);var tt=new u["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:g},{path:"/Login",name:"Login",component:x},{path:"/Account",name:"Account",component:J},{path:"/Job",name:"Job",component:E},{path:"/CreateModel",name:"CreateModel",component:G},{path:"/CreateManager",name:"CreateManager",component:F},{path:"/CreateNewJob",name:"CreateNewJob",component:Z}]});a["a"].config.productionTip=!0,new a["a"]({router:tt,render:function(t){return t(c)}}).$mount("#app")},7138:function(t,e,o){"use strict";var a=o("1c49"),r=o.n(a);r.a}});
//# sourceMappingURL=app.3c995f14.js.map