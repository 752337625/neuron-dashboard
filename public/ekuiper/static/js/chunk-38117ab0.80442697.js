(window["webpackJsonp_eKuiper"]=window["webpackJsonp_eKuiper"]||[]).push([["chunk-38117ab0"],{"50fc":function(t,e,a){"use strict";a.d(e,"f",(function(){return o})),a.d(e,"b",(function(){return n})),a.d(e,"d",(function(){return s})),a.d(e,"j",(function(){return i})),a.d(e,"h",(function(){return c})),a.d(e,"e",(function(){return l})),a.d(e,"a",(function(){return u})),a.d(e,"c",(function(){return d})),a.d(e,"i",(function(){return m})),a.d(e,"g",(function(){return f}));var r=a("751a"),o=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return r["a"].get("/users",{params:t})},n=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return r["a"].post("/users",t)},s=function(t){return r["a"].delete("/users/".concat(t))},i=function(t){return r["a"].get("/users/".concat(t))},c=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return r["a"].put("/users/".concat(t),e)},l=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return r["a"].get("/roles",{params:t})},u=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return r["a"].post("/roles",t)},d=function(t){return r["a"].delete("/roles/".concat(t))},m=function(t){return r["a"].get("/roles/".concat(t))},f=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return r["a"].put("/roles/".concat(t),e)}},c785:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"users"},[a("div",{staticClass:"page-header"},[a("h1",[t._v(t._s(t.$t("admin.admin")))]),a("Button",{staticClass:"top-create--btn",attrs:{type:"primary",icon:"md-add"},on:{click:t.showCreateModal}},[t._v(t._s(t.$t("admin.createUser")))])],1),a("Table",{attrs:{loading:t.loading,columns:t.recordsCol,data:t.records}}),t.total>=10?a("Page",{attrs:{"show-total":"",current:t.page,total:t.total,"page-size":t.limit},on:{"on-change":t.handlePageChange,"on-page-size-change":t.handlePageSizeChange}}):t._e(),a("Modal",{attrs:{"class-name":"users-modal--create",title:t.isEdit?t.$t("admin.editUser"):t.$t("admin.createUser"),width:480,"mask-closable":!1},model:{value:t.createModalVisible,callback:function(e){t.createModalVisible=e},expression:"createModalVisible"}},[a("Form",{ref:"createForm",attrs:{model:t.createForm,rules:t.rules}},[a("Row",[a("i-col",{attrs:{span:"24"}},[a("FormItem",{attrs:{label:t.$t("admin.role"),prop:"roleId"}},[a("Select",{attrs:{size:"large"},model:{value:t.createForm.roleId,callback:function(e){t.$set(t.createForm,"roleId",e)},expression:"createForm.roleId"}},t._l(t.rolesList,(function(t){return a("Option",{key:t.value,attrs:{value:t.value,label:t.label}})})),1)],1)],1),a("i-col",{attrs:{span:"24"}},[a("FormItem",{attrs:{label:t.$t("admin.username"),prop:"username"}},[a("i-input",{attrs:{size:"large"},model:{value:t.createForm.username,callback:function(e){t.$set(t.createForm,"username",e)},expression:"createForm.username"}})],1)],1),a("i-col",{attrs:{span:"24"}},[a("FormItem",{attrs:{label:t.$t("common.password"),prop:"password"}},[a("i-input",{attrs:{type:"password",size:"large"},model:{value:t.createForm.password,callback:function(e){t.$set(t.createForm,"password",e)},expression:"createForm.password"}})],1)],1),a("i-col",{attrs:{span:"24"}},[a("FormItem",{attrs:{label:t.$t("common.confirmPassword"),type:"password",prop:"confirmPassword"}},[a("i-input",{attrs:{type:"password",size:"large"},model:{value:t.createForm.confirmPassword,callback:function(e){t.$set(t.createForm,"confirmPassword",e)},expression:"createForm.confirmPassword"}})],1)],1)],1)],1),a("div",{attrs:{slot:"footer"},slot:"footer"},[a("Button",{attrs:{type:"text"},on:{click:function(e){t.createModalVisible=!1}}},[t._v(t._s(t.$t("common.cancel")))]),a("Button",{attrs:{type:"primary"},on:{click:t.save}},[t._v(t._s(t.$t("common.submit")))])],1)],1)],1)},o=[],n=a("50fc"),s={name:"Users",data:function(){var t=this,e=function(e,a,r){""===a?r(new Error(t.$t("common.pleaseEnterYourPasswordAgain"))):a!==t.createForm.password?r(new Error(t.$t("common.confirmNotMatch"))):r()};return{loading:!1,createModalVisible:!1,isEdit:!1,page:1,limit:10,total:0,createForm:{},rolesList:[],rules:{roleId:[{required:!0,message:this.$t("common.fillContent")}],username:[{required:!0,message:this.$t("common.fillContent")}],password:[{required:!0,message:this.$t("common.fillContent")}],confirmPassword:[{required:!0,message:this.$t("common.pleaseEnterYourPasswordAgain")},{validator:e,trigger:"blur"}]},records:[]}},computed:{recordsCol:function(){var t=this;this.$createElement;return[{title:this.$t("admin.username"),key:"username"},{title:this.$t("admin.role"),key:"roleId",render:function(e,a){var r=t.findRoleName(a.row.roleId);return e("div",[r])}},{title:this.$t("common.operations"),key:"action",width:300,align:"center",render:function(e,a){var r="admin"===a.row.username,o=e("div",[e("a",{attrs:{href:"javascript:;"},style:"margin-right: 10px;",on:{click:function(){t.showDetail(a.row)}}},[e("Icon",{attrs:{type:"ios-create"}})]),e("a",{attrs:{href:"javascript:;"}},[e("Poptip",{attrs:{confirm:!0,transfer:!0,width:200,title:t.$t("common.confirmDelete"),placement:"top",type:"error"},on:{"on-ok":function(){t.remove(a.row)},"on-cancel":function(){}}},[e("Icon",{attrs:{type:"md-trash"}})])])]);return r?"":o}}]}},watch:{createModalVisible:function(t){t||(this.$refs.createForm.resetFields(),this.isEdit=!1,this.createForm={})}},created:function(){this.loadData()},methods:{loadData:function(){var t=this;this.loading=!0,Object(n["f"])({$limit:this.limit,$skip:(this.page-1)*this.limit}).then((function(e){t.records=e.data.data,t.total=e.data.total,t.loading=!1})).catch((function(){t.loading=!1})),Object(n["e"])({$limit:100}).then((function(e){t.rolesList=e.data.data.map((function(t){return{label:t.name,value:t.id}}))})).catch((function(){}))},showDetail:function(t){var e=this,a=t.id;this.createModalVisible=!0,this.isEdit=!0,Object(n["j"])(a).then((function(t){e.createForm=t.data})).catch((function(){}))},remove:function(t){var e=this,a=t.id;Object(n["d"])(a).then((function(){e.$Message.success(e.$t("common.deleteSuccess")),e.page=1,e.loadData()})).catch((function(){}))},showCreateModal:function(){this.createModalVisible=!0},save:function(){var t=this;this.$refs.createForm.validate((function(e){if(e){var a=t.createForm,r=a.id,o=a.roleId,s=a.username,i=a.password,c={roleId:o,username:s,password:i};t.isEdit?Object(n["h"])(r,c).then((function(){t.$Message.success(t.$t("common.editSuccess")),t.loadData(),t.createModalVisible=!1})).catch((function(){})):Object(n["b"])(c).then((function(){t.$Message.success(t.$t("common.addSuccess")),t.loadData(),t.createModalVisible=!1}))}}))},findRoleName:function(t){var e=this.rolesList.find((function(e){return e.value===t}));return e?e.label:""},handlePageChange:function(t){this.page=t,this.loadData()},handlePageSizeChange:function(t){this.limit=t,this.page=1,this.loadData()}}},i=s,c=a("2877"),l=Object(c["a"])(i,r,o,!1,null,null,null);e["default"]=l.exports}}]);