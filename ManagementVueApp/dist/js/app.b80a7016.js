(function(e){function t(t){for(var r,n,i=t[0],l=t[1],m=t[2],p=0,d=[];p<i.length;p++)n=i[p],Object.prototype.hasOwnProperty.call(a,n)&&a[n]&&d.push(a[n][0]),a[n]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);u&&u(t);while(d.length)d.shift()();return s.push.apply(s,m||[]),o()}function o(){for(var e,t=0;t<s.length;t++){for(var o=s[t],r=!0,i=1;i<o.length;i++){var l=o[i];0!==a[l]&&(r=!1)}r&&(s.splice(t--,1),e=n(n.s=o[0]))}return e}var r={},a={app:0},s=[];function n(t){if(r[t])return r[t].exports;var o=r[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=r,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var m=0;m<i.length;m++)t(i[m]);var u=l;s.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},"56d7":function(e,t,o){"use strict";o.r(t);var r=o("2b0e"),a=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"app"}},[o("h1",[e._v("App test")]),o("nav",[o("router-link",{attrs:{to:"/"}},[e._v("Home")]),e._v(" |\n        "),o("router-link",{attrs:{to:"/Login"}},[e._v("Login")]),e._v(" |\n        "),o("router-link",{attrs:{to:"/Account"}},[e._v("Account")]),e._v(" |\n        "),o("router-link",{attrs:{to:"/Job"}},[e._v("Job")]),e._v(" |\n        "),o("router-link",{attrs:{to:"/CreateModel"}},[e._v("Create Model")]),e._v(" | \n        "),o("router-link",{attrs:{to:"/CreateManager"}},[e._v("Create Manager")])],1),o("router-view")],1)},s=[],n={name:"app"},i=n,l=o("2877"),m=Object(l["a"])(i,a,s,!1,null,null,null),u=m.exports,p=o("8c4f"),d=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"home"},[o("h1",[e._v(e._s(e.msg))]),e._m(0)])},c=[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("p",[e._v("Welcome to your new single-page application, built with "),o("a",{attrs:{href:"https://vuejs.org",target:"_blank"}},[e._v("Vue.js")]),e._v(".")])}],f={name:"Home",props:{msg:"HEJ"}},v=f,g=Object(l["a"])(v,d,c,!1,null,"04a9939a",null),h=g.exports,y=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"Login"}},[o("div",[o("div",[o("form",[o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"email"}},[e._v("Email")]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.form.email,expression:"form.email"}],attrs:{type:"email",placeholder:"Please enter your email"},domProps:{value:e.form.email},on:{input:function(t){t.target.composing||e.$set(e.form,"email",t.target.value)}}})]),o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"password"}},[e._v("Password")]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.form.password,expression:"form.password"}],attrs:{type:"text",placeholder:"Please enter your password"},domProps:{value:e.form.password},on:{input:function(t){t.target.composing||e.$set(e.form,"password",t.target.value)}}})]),o("div",{staticClass:"form-group"},[o("button",{staticClass:"button",staticStyle:{"margin-left":"110px"},attrs:{type:"button"},on:{click:e.loginApplication}},[e._v("\n                        Login In\n                    ")]),e._v("   \n                ")])]),o("span",{staticClass:"text-danger",staticStyle:{"margin-left":"110px"}},[e._v(e._s(e.message))])])])])},C=[],N={name:"Login",data:function(){return{form:{email:"",password:""},message:""}},methods:{loginApplication:function(){var e={};e.email=this.form.email,e.password=this.form.password,fetch("https://localhost:44368/api/Account/login",{method:"POST",body:JSON.stringify(e),headers:new Headers({"Content-Type":"application/json"})}).then(function(e){return e.json().then(function(e){localStorage.setItem("token",e.jwt)}).catch(function(e){return alert("Error:",e)})})}}},b=N,_=Object(l["a"])(b,y,C,!1,null,"64a4e716",null),P=_.exports,w=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"Account"}},[o("h4",[e._v("Account")]),o("p",[o("ul",[o("li",[e._v("\n                Name: "+e._s(e.firstName)+" "+e._s(e.lastName)+"  \n            ")]),o("li",[e._v("\n                Email: "+e._s(e.Email)+"\n            ")])])]),e.isManager?o("div",[o("ul",e._l(e.jobs,function(t){return o("li",[e._v(e._s(t))])}))]):e._e(),o("p")])},x=[],S={name:"Account",data:function(){return{form:{firstName:"",lastName:"",email:"",isManager:!1,jobs:[]}}},methods:{getAccount:function(){var e=this,t="https://localhost:44368/api/Account/login";fetch(t,{method:"GET",credentials:"include",headers:{Authorization:"Bearer "+localStorage.getItem("token"),"Content-Type":"application/json"}}).then(function(e){JSON.parse(e)}).catch(function(t){return e.setState({isLoading:!1,message:"Something bad happend "+t})})}}},E=S,L=Object(l["a"])(E,w,x,!1,null,"4b6fa460",null),A=L.exports,j=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"Job"}},[o("form",[o("div",{staticClass:"form-group"},[o("button",{staticClass:"button",staticStyle:{"margin-left":"110px"},attrs:{type:"button"},on:{click:e.getJobs}},[e._v("\n                Get Jobs\n            ")]),e._v("   \n        ")]),o("div",[o("ul",e._l(e.jobs,function(t){return o("li",[e._v(e._s(t))])}))])])])},$=[],M={name:"Job",data:function(){return{form:{firstName:"",lastName:"",email:"",isManager:!1,jobs:[]}}},methods:{getJobs:function(){var e=this,t="https://localhost:44368/api/Jobs";fetch(t,{method:"GET",credentials:"include",headers:{Authorization:"Bearer "+localStorage.getItem("token"),"Content-Type":"application/json"}}).then(function(e){JSON.parse(e)}).catch(function(t){return e.setState({isLoading:!1,message:"Something bad happened "+t})})}}},O=M,H=Object(l["a"])(O,j,$,!1,null,"4126b3f2",null),J=H.exports,k=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"CreateModel"}},[o("div",[o("div",[o("form",[o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"FirstName"}},[e._v("FirstName")]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.form.FirstName,expression:"form.FirstName"}],attrs:{type:"text",placeholder:"The model's firstname"},domProps:{value:e.form.FirstName},on:{input:function(t){t.target.composing||e.$set(e.form,"FirstName",t.target.value)}}})]),o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"LastName"}},[e._v("LastName")]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.form.LastName,expression:"form.LastName"}],attrs:{type:"text",placeholder:"The model's lastname"},domProps:{value:e.form.LastName},on:{input:function(t){t.target.composing||e.$set(e.form,"LastName",t.target.value)}}})]),o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"Email"}},[e._v("Email")]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.form.Email,expression:"form.Email"}],attrs:{type:"text",placeholder:"Please enter the model's Email"},domProps:{value:e.form.Email},on:{input:function(t){t.target.composing||e.$set(e.form,"Email",t.target.value)}}})]),o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"PhoneNo"}},[e._v("PhoneNo")]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.form.PhoneNo,expression:"form.PhoneNo"}],attrs:{type:"text",placeholder:"Please enter the model's PhoneNo"},domProps:{value:e.form.PhoneNo},on:{input:function(t){t.target.composing||e.$set(e.form,"PhoneNo",t.target.value)}}})]),o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"AddresLine1"}},[e._v("AddresLine1")]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.form.AddresLine1,expression:"form.AddresLine1"}],attrs:{type:"text",placeholder:"Please enter AddresLine1"},domProps:{value:e.form.AddresLine1},on:{input:function(t){t.target.composing||e.$set(e.form,"AddresLine1",t.target.value)}}})]),o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"AddresLine1"}},[e._v("AddresLine2")]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.form.AddresLine2,expression:"form.AddresLine2"}],attrs:{type:"text",placeholder:"Please enter AddresLine2"},domProps:{value:e.form.AddresLine2},on:{input:function(t){t.target.composing||e.$set(e.form,"AddresLine2",t.target.value)}}})]),o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"Zip"}},[e._v("Zip")]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.form.Zip,expression:"form.Zip"}],attrs:{type:"text",placeholder:"Please enter Zip"},domProps:{value:e.form.Zip},on:{input:function(t){t.target.composing||e.$set(e.form,"Zip",t.target.value)}}})]),o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"City"}},[e._v("City")]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.form.City,expression:"form.City"}],attrs:{type:"text",placeholder:"Please enter City"},domProps:{value:e.form.City},on:{input:function(t){t.target.composing||e.$set(e.form,"City",t.target.value)}}})]),o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"Country"}},[e._v("Country")]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.form.Country,expression:"form.Country"}],attrs:{type:"text",placeholder:"Please enter Country"},domProps:{value:e.form.Country},on:{input:function(t){t.target.composing||e.$set(e.form,"Country",t.target.value)}}})]),o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"Nationality"}},[e._v("Nationality")]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.form.Nationality,expression:"form.Nationality"}],attrs:{type:"text",placeholder:"Please enter Nationality"},domProps:{value:e.form.Nationality},on:{input:function(t){t.target.composing||e.$set(e.form,"Nationality",t.target.value)}}})]),o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"Height"}},[e._v("Height")]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.form.Height,expression:"form.Height"}],attrs:{type:"text",placeholder:"Please enter Height"},domProps:{value:e.form.Height},on:{input:function(t){t.target.composing||e.$set(e.form,"Height",t.target.value)}}})]),o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"ShoeSize"}},[e._v("ShoeSize")]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.form.ShoeSize,expression:"form.ShoeSize"}],attrs:{type:"text",placeholder:"Please enter ShoeSize"},domProps:{value:e.form.ShoeSize},on:{input:function(t){t.target.composing||e.$set(e.form,"ShoeSize",t.target.value)}}})]),o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"HairColor"}},[e._v("HairColor")]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.form.HairColor,expression:"form.HairColor"}],attrs:{type:"text",placeholder:"Please enter HairColor"},domProps:{value:e.form.HairColor},on:{input:function(t){t.target.composing||e.$set(e.form,"HairColor",t.target.value)}}})]),o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"EyeColor"}},[e._v("EyeColor")]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.form.EyeColor,expression:"form.EyeColor"}],attrs:{type:"text",placeholder:"Please enter EyeColor"},domProps:{value:e.form.EyeColor},on:{input:function(t){t.target.composing||e.$set(e.form,"EyeColor",t.target.value)}}})]),o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"Comments"}},[e._v("Comments")]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.form.Comments,expression:"form.Comments"}],attrs:{type:"text",placeholder:"Please enter Comments"},domProps:{value:e.form.Comments},on:{input:function(t){t.target.composing||e.$set(e.form,"Comments",t.target.value)}}})]),o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"Password"}},[e._v("Password")]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.form.Password,expression:"form.Password"}],attrs:{type:"text",placeholder:"Please enter Password"},domProps:{value:e.form.Password},on:{input:function(t){t.target.composing||e.$set(e.form,"Password",t.target.value)}}})]),o("div",{staticClass:"form-group"},[o("button",{staticClass:"button",staticStyle:{"margin-left":"110px"},attrs:{type:"button"},on:{click:e.CreateModel}},[e._v("\n                        Create Model\n                    ")]),e._v("   \n                ")])]),o("span",{staticClass:"text-danger",staticStyle:{"margin-left":"110px"}},[e._v(e._s(e.message))])])])])},T=[],z={name:"CreateModel",data:function(){return{form:{FirstName:"",LastName:"",Email:"",PhoneNo:"",AddresLine1:"",AddresLine2:"",Zip:"",City:"",Country:"",Nationality:"",Height:"",ShoeSize:"",HairColor:"",EyeColor:"",Comments:"",Password:""},message:""}},methods:{CreateModel:function(){var e=this,t="https://localhost:44368/api/Models/",o={};o.FirstName=this.form.FirstName,o.LastName=this.form.LastName,o.Email=this.form.Email,o.PhoneNo=this.form.PhoneNo,o.AddresLine1=this.AddresLine1,o.Zip=this.Zip,o.City=this.City,o.Country=this.Country,o.BirthDate=this.BirthDate,o.Nationality=this.Nationality,o.Height=this.Height,o.ShoeSize=this.ShoeSize,o.HairColor=this.HairColor,o.EyeColor=this.EyeColor,o.Comments=this.Comments,o.JobModels=this.JobModels,o.Expenses=this.Expenses,o.Password=this.Password,fetch(t,{method:"POST",credentials:"include",body:JSON.stringify(o),headers:{Authorization:"Bearer "+localStorage.getItem("token"),"Content-Type":"application/json"}}).then(function(e){JSON.parse(e)}).catch(function(t){return e.setItem({message:"Something bad happened "+t})})}}},F=z,Z=Object(l["a"])(F,k,T,!1,null,"9c3accfe",null),I=Z.exports,B=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("v-container",[o("v-layout",{attrs:{column:""}},[o("form",[o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"firstName"}},[e._v("FirstName ")]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.form.firstName,expression:"form.firstName"}],attrs:{type:"text",placeholder:"Please enter your firstName"},domProps:{value:e.form.firstName},on:{input:function(t){t.target.composing||e.$set(e.form,"firstName",t.target.value)}}})]),o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"lastName"}},[e._v("LastName ")]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.form.lastName,expression:"form.lastName"}],attrs:{type:"text",placeholder:"Please enter your lastName"},domProps:{value:e.form.lastName},on:{input:function(t){t.target.composing||e.$set(e.form,"lastName",t.target.value)}}})]),o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"email"}},[e._v("Email ")]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.form.email,expression:"form.email"}],attrs:{type:"email",placeholder:"Please enter your email"},domProps:{value:e.form.email},on:{input:function(t){t.target.composing||e.$set(e.form,"email",t.target.value)}}})]),o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"password"}},[e._v("Password")]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.form.password,expression:"form.password"}],attrs:{type:"text",placeholder:"Please enter your password"},domProps:{value:e.form.password},on:{input:function(t){t.target.composing||e.$set(e.form,"password",t.target.value)}}})]),o("div",{staticClass:"form-group"},[o("button",{staticClass:"button",staticStyle:{"margin-left":"110px"},attrs:{type:"button"},on:{click:e.CreateManager}},[e._v("\n                    Create Manager\n                ")])])])])],1)},G=[],D={name:"CreateManager",data:function(){return{form:{firstName:"",lastName:"",email:"",password:""}}},method:{CreateManager:function(){var e={};e.firstName=this.form.firstName,e.lastName=this.form.lastName,e.password=this.form.password,e.email=this.form.email,fetch("https://localhost:44368/api/Managers",{method:"POST",body:JSON.stringify(e),headers:new Headers({"Content-Type":"application/json"})}).then(function(e){return e.json().then(function(e){localStorage.setItem("token",e.jwt)}).catch(function(e){return alert("Error:",e)})})}}},V=D,W=Object(l["a"])(V,B,G,!1,null,"b511720a",null),q=W.exports;r["a"].use(p["a"]);var K=new p["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:h},{path:"/Login",name:"Login",component:P},{path:"/Account",name:"Account",component:A},{path:"/Job",name:"Job",component:J},{path:"/CreateModel",name:"CreateModel",component:I},{path:"/CreateManager",name:"CreateManager",component:q}]});r["a"].config.productionTip=!0,new r["a"]({router:K,render:function(e){return e(u)}}).$mount("#app")}});
//# sourceMappingURL=app.b80a7016.js.map