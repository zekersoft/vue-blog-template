(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-033efe78"],{"4ffd":function(e,t,o){e.exports=o.p+"img/logo.b642c4ed.png"},"674f":function(e,t,o){"use strict";var s=o("7080"),r=o.n(s);r.a},7080:function(e,t,o){e.exports={appColor:"#409eff",appColorRGB:"64, 158, 255"}},a86a:function(e,t,o){"use strict";o.r(t);var s=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"login"}},[o("div",{staticClass:"login-wrapper"},[o("div",{staticClass:"login-container"},[e._m(0),o("div",{staticClass:"login-box"},[o("el-form",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"login-form",attrs:{model:e.form,"label-position":"top","element-loading-text":"登录中...","element-loading-background":"rgba(255, 255, 255, 0.7)"},nativeOn:{submit:function(t){return t.preventDefault(),e.verify(t)}}},[o("el-form-item",{staticClass:"tip"},[e._v("系统登录")]),o("el-form-item",{attrs:{label:"用户名"}},[o("el-input",{attrs:{"auto-complete":"off"},model:{value:e.form.username,callback:function(t){e.$set(e.form,"username",t)},expression:"form.username"}})],1),o("el-form-item",{attrs:{label:"密码"}},[o("el-input",{attrs:{"auto-complete":"off",type:"password","show-password":""},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}})],1),o("el-form-item",{attrs:{label:" "}},[o("el-input",{staticClass:"submit",attrs:{type:"submit",value:"登录"}})],1)],1)],1)])])])},r=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"login-brand"},[s("img",{attrs:{src:o("4ffd")}})])}],a={name:"login",data:function(){return{form:{username:"admin",password:"123456"},loading:!1}},methods:{verify:function(){var e="请输入用户名",t="请输入密码";this.form.username?this.form.password?this.login():this.$message.error(t):this.$message.error(e)},login:function(){var e=this;this.loading=!0;var t="登录成功",o="账号或密码错误";this.$store.dispatch("login/getLoginToken",this.form).then(function(o){e.$route.query.redirect?e.$router.push(e.$route.query.redirect):e.$router.push("/index"),e.$message.success(t),e.loading=!1}).catch(function(t){console.log(t),e.$message.error(o),e.loading=!1})}}},n=a,i=(o("674f"),o("2877")),l=Object(i["a"])(n,s,r,!1,null,null,null);t["default"]=l.exports}}]);