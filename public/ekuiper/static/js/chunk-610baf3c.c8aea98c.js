(window["webpackJsonp_eKuiper"]=window["webpackJsonp_eKuiper"]||[]).push([["chunk-610baf3c"],{"06ec":function(t,e,n){},"101e":function(t,e,n){"use strict";var o=n("510b");e["a"]={computed:{isSingleNode:function(){return this.$route.params.id===o["a"]},isSubApp:function(){return this.$store.state.isSubApp},hideTabBar:function(){return this.isSingleNode&&this.isSubApp&&this.$store.state.hideTabBarInNodePage}}}},2182:function(t,e,n){},"23ac":function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Modal",{attrs:{"class-name":"upload-modal--create",title:t.$t("upload.createFile"),width:480,"mask-closable":!1},on:{"on-cancel":t.closeModal},model:{value:t.visible,callback:function(e){t.visible=e},expression:"visible"}},[n("div",{staticClass:"upload-wrapper"},[n("section",{staticClass:"type-wrapper"},[n("RadioGroup",{staticClass:"radios-container",attrs:{type:"button","button-style":"solid"},model:{value:t.uploadType,callback:function(e){t.uploadType=e},expression:"uploadType"}},t._l(t.uploadTypes,(function(e){return n("Radio",{key:e.value,staticClass:"item--radio",attrs:{label:e.value}},[t._v(" "+t._s(e.label)+" ")])})),1)],1),"file"===t.uploadType?n("section",{staticClass:"content-wrapper upload-file-wrapper"},[n("UploadFile",{staticClass:"upload-file",attrs:{accept:t.fileAccepts},model:{value:t.file,callback:function(e){t.file=e},expression:"file"}}),n("span",{staticClass:"file-name"},[t._v(t._s(t.fileName))])],1):t._e(),"text"===t.uploadType?n("section",{staticClass:"content-wrapper code-editor-wapper"},[n("Form",{ref:"fileContentRef",attrs:{model:t.fileContent,rules:t.rules}},[n("FormItem",{attrs:{label:t.$t("upload.fileName"),prop:"name"}},[n("i-input",{attrs:{size:"large"},model:{value:t.fileContent.name,callback:function(e){t.$set(t.fileContent,"name",e)},expression:"fileContent.name"}})],1),n("FormItem",{staticClass:"form-item--code",attrs:{label:t.$t("upload.fileContent"),prop:"content"}},[n("UploadFile",{staticClass:"upload-file editor-upload-file--btn",attrs:{accept:t.textFileAccept},on:{handleUpload:t.getFileContent},scopedSlots:t._u([{key:"text",fn:function(){return[n("Button",{staticClass:"upload-file--link",attrs:{type:"text"}},[t._v(t._s(t.$t("upload.uploadFile")))])]},proxy:!0}],null,!1,3953072564)}),n("div",{staticClass:"monaco-container code-container"},[n("Monaco",{attrs:{id:"file-data",backgroud:"#2c3e50",lang:"json"},model:{value:t.fileContent.content,callback:function(e){t.$set(t.fileContent,"content",e)},expression:"fileContent.content"}})],1)],1)],1)],1):t._e()]),n("div",{attrs:{slot:"footer"},slot:"footer"},[n("Button",{attrs:{type:"text"},on:{click:t.closeModal}},[t._v(t._s(t.$t("common.cancel")))]),n("Button",{attrs:{loading:t.loadingUpload,type:"primary"},on:{click:t.submit}},[t._v(" "+t._s(t.$t("common.submit"))+" ")])],1)])},a=[],i=n("724c"),r=n("9146"),s=n("b476"),c=n("91b6"),l={name:"UploadFileModal",props:{modalVisible:{type:Boolean,deafult:!1},fileAccepts:{type:String,deafult:"-"}},mixins:[i["a"]],components:{UploadFile:s["a"],Monaco:r["a"]},data:function(){return{uploadTypes:[{value:"file",label:this.$t("upload.uploadByFile")},{value:"text",label:this.$t("upload.uploadByContent")}],uploadType:"file",file:null,fileContent:{name:"",content:""},textFileAccept:"text/plain, application/x-yaml, application/json, application/javascript",loadingUpload:!1,rules:{name:[{required:!0,message:this.$t("upload.fileNameRequried"),trigger:"blur"}],content:[{required:!0,message:this.$t("upload.fileContentRequried")}]}}},computed:{visible:{get:function(){return this.modalVisible},set:function(t){this.$emit("update:modalVisible",t)}},fileName:function(){return this.file?this.file.name:""}},methods:{readFile:function(t){var e=this;return new Promise((function(n,o){e.loadingUpload=!0;var a="",i=new FileReader;return"undefined"===typeof FileReader?(e.$Message.warning(e.$t("upload.unsupportReadOnBrower")),!1):(i.readAsText(t,"UTF-8"),i.onerror=function(t){e.loadingUpload=!1,e.$Message.warning(e.$t("upload.readFileError")),o(t)},i.onload=function(t){e.loadingUpload=!1,a=t.target.result,n(t.target.result)},a)}))},getFileContent:function(t){var e=this;this.readFile(t).then((function(t){e.fileContent.content=t}))},closeModal:function(){this.visible=!1,this.file=null,this.fileContent={name:"",content:""},this.$emit("clode")},upload:function(t,e){var n=this;return new Promise((function(o,a){n.loadingUpload=!0,Object(c["c"])(n.nodeID,t,e).then((function(t){n.$Message.success(n.$t("common.uploadSuccess")),n.closeModal(),n.$emit("reload"),o(t)})).catch((function(t){a(t)})).finally((function(){n.loadingUpload=!1}))}))},submit:function(){var t=this;if("file"===this.uploadType){if(!this.file)return void this.$Message.warning(this.$t("upload.fileRequried"));var e=new FormData;e.append("uploadFile",this.file),this.upload(e,!0)}else this.$refs.fileContentRef.validate((function(e){if(e){var n={name:t.fileContent.name,content:t.fileContent.content};t.upload(n,!1)}}))}}},u=l,d=(n("d710"),n("2877")),f=Object(d["a"])(u,o,a,!1,null,"4e3b22b2",null);e["a"]=f.exports},"58b8":function(t,e,n){"use strict";n("06ec")},"74b5":function(t,e,n){},7766:function(t,e,n){"use strict";n("ed50")},"8a7a":function(t,e,n){"use strict";n("2182")},"8d2f":function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tabs-head"},[t.isFabric||t.isSingleNode?t._e():n("Breadcrumb",[n("BreadcrumbItem",{attrs:{to:"/nodes"}},[t._v(t._s(this.$t("nodes.nodes")))]),n("BreadcrumbItem",[n("Select",{staticClass:"node-select",attrs:{"label-in-value":"",placeholder:t.$t("nodes.currentNode")},on:{"on-change":t.handleNodeChange},model:{value:t.selectNode,callback:function(e){t.selectNode=e},expression:"selectNode"}},t._l(t.nodes,(function(t){return n("Option",{key:t.value,attrs:{value:t.value,label:t.label}})})),1)],1)],1),n("div",[t._l(t.tabsData,(function(e){return[t.hiddenTabs.includes(e.id)?t._e():n("a",{key:e.id,staticClass:"crud-title",class:{active:t.activeTab===e.id},attrs:{href:"javascript:;"},on:{click:function(n){return t.goToTab(e)}}},[t._v(" "+t._s(e.name)+" ")]),t._t("custom-tab")]}))],2)],1)},a=[],i=n("2f62"),r=n("510b");function s(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?s(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var u={name:"TabsCardHead",props:{activeTab:{required:!0,type:String}},data:function(){return{selectNode:""}},computed:c(c({},Object(i["c"])(["isFabric","nodeMenuHiddenSettingMap"])),{},{hiddenTabs:function(){var t=this;return Object.keys(this.nodeMenuHiddenSettingMap).filter((function(e){return!0===t.nodeMenuHiddenSettingMap[e]}))},currentNode:function(){return this.$store.state.currentNode},isSingleNode:function(){return this.$route.params.id===r["a"]},nodes:function(){return this.$store.state.nodes},nodeID:function(){var t=this.$route.params.id||this.$store.state.currentNode.id;return t},tabsData:function(){return[{id:"source",name:this.$t("streams.source")},{id:"rules",name:this.$t("rules.rules")},{id:"extension",name:this.$t("extension.extension")},{id:"configuration",name:this.$t("configuration.configuration")},{id:"system",name:this.$t("system.system")}]}}),created:function(){this.selectNode=this.currentNode.id},methods:c(c({},Object(i["b"])(["SET_CURRENTNODE"])),{},{handleNodeChange:function(t){if(t){var e=t.value,n=t.label;this.SET_CURRENTNODE({id:e,name:n,refresh:!0}),this.$router.replace({name:this.activeTab,params:{id:e}})}},goToTab:function(t){this.$router.push({name:t.id,params:{id:this.nodeID}})}})},d=u,f=(n("7766"),n("2877")),m=Object(f["a"])(d,o,a,!1,null,null,null);e["a"]=m.exports},"91b6":function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return s}));var o=n("751a"),a=n("510b"),i=function(t){var e=Object(a["c"])(t,"/config/uploads");return o["a"].get(e)},r=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0,i=Object(a["c"])(t,"/config/uploads"),r={headers:{"Content-Type":"multipart/form-data"}},s=n?o["a"].post(i,e,r):o["a"].post(i,e);return s},s=function(t,e){var n=Object(a["c"])(t,"/config/uploads/".concat(e));return o["a"].delete(n)}},a26e:function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"configuration"},[t.hideTabBar?t._e():n("TabsHead",{attrs:{"active-tab":"configuration"}}),n("Card",[n("Tabs",{model:{value:t.name,callback:function(e){t.name=e},expression:"name"}},[n("TabPane",{attrs:{name:t.tabArr[0],label:t.$t("configuration.resource")}},[n("Resources",{staticClass:"tab-body"})],1),n("TabPane",{attrs:{name:t.tabArr[1],label:t.$t("configuration.connection")}},[n("Connections",{staticClass:"tab-body"})],1),n("TabPane",{attrs:{name:t.tabArr[2],label:t.$t("configuration.schema")}},[n("Schema",{staticClass:"tab-body"})],1),n("TabPane",{attrs:{name:t.tabArr[3],label:t.$t("configuration.fileManagement")}},[n("UploadManagement",{staticClass:"tab-body"})],1)],1)],1)],1)},a=[],i=n("8d2f"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"configuration"},[n("Table",{attrs:{loading:t.loading,columns:t.recordsCol,data:t.ConnectionssData}})],1)},s=[],c=n("724c"),l=n("751a"),u=n("510b"),d=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=Object(u["c"])(t,"/metadata/connections");return e&&(o="".concat(o,"/").concat(e)),l["a"].get(o,{params:n})},f=function(t,e,n){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return l["a"].put(Object(u["c"])(t,"/metadata/connections/".concat(e,"/confKeys/").concat(n)),o)},m=function(t,e,n){return l["a"].delete(Object(u["c"])(t,"/metadata/connections/".concat(e,"/confKeys/").concat(n)))},p=function(t,e){return l["a"].get(Object(u["c"])(t,"/metadata/connections/yaml/".concat(e)))},h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"config-keys"},[n("Row",{staticClass:"expand-header"},[n("h3",[t._v(" "+t._s(t.$t("configuration.confKey"))+" "),t.row.about.installed?n("Button",{staticClass:"add-confkey",attrs:{icon:"md-add",type:"primary",ghost:"",shape:"circle",size:"small"},on:{click:t.showAddModal}}):t._e()],1)]),n("Table",{attrs:{loading:t.loading,columns:t.confKeyCol,data:t.confKeys}}),n("Modal",{attrs:{"class-name":"confkey-modal--view view-form",title:t.modalTitle,width:650,"mask-closable":!1},on:{"on-visible-change":t.handleVisibleChange},model:{value:t.modalVisible,callback:function(e){t.modalVisible=e},expression:"modalVisible"}},[t.isDetail?n("div",{staticClass:"view-form"},t._l(t.confKeyForm,(function(e,o){return n("div",{key:o,staticClass:"view-item"},[n("label",{staticClass:"view-item--label"},[t._v(t._s(o)+": ")]),"object"===typeof e?[n("KeyValueEditor",{staticClass:"detail-key-value-table",attrs:{disabled:t.isDetail,value:e}})]:n("span",[t._v(t._s(e))])],2)})),0):[n("Form",{ref:"confKeyForm",attrs:{model:t.confKeyForm}},[n("Row",[n("i-col",{attrs:{span:"24"}},[n("FormItem",{attrs:{label:t.$t("common.name"),prop:"name",required:!t.isDetail}},[n("i-input",{attrs:{size:"large",disabled:t.isDetail||t.isEdit},model:{value:t.confKeyForm.name,callback:function(e){t.$set(t.confKeyForm,"name",e)},expression:"confKeyForm.name"}})],1)],1)],1)],1),n("PropertyForm",{ref:"propertyForm",attrs:{from:"sources",modalVisible:t.modalVisible,type:t.row.name,properties:t.confKeysProperties.default,form:t.confKeyForm}})],n("div",{attrs:{slot:"footer"},slot:"footer"},[n("Button",{attrs:{type:"text"},on:{click:function(e){t.modalVisible=!1}}},[t._v(t._s(t.$t("common.cancel")))]),t.isDetail?t._e():n("Button",{attrs:{type:"primary"},on:{click:t.save}},[t._v(t._s(t.$t("common.submit")))])],1)],2)],1)},b=[],y=n("7d99"),v=n("75f3"),g=n("5353"),C=["name"];function $(t,e){return K(t)||D(t,e)||w(t,e)||O()}function O(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function w(t,e){if(t){if("string"===typeof t)return j(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?j(t,e):void 0}}function j(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o}function D(t,e){var n=null==t?null:"undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var o,a,i=[],r=!0,s=!1;try{for(n=n.call(t);!(r=(o=n.next()).done);r=!0)if(i.push(o.value),e&&i.length===e)break}catch(c){s=!0,a=c}finally{try{r||null==n["return"]||n["return"]()}finally{if(s)throw a}}return i}}function K(t){if(Array.isArray(t))return t}function k(t,e){if(null==t)return{};var n,o,a=S(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(o=0;o<i.length;o++)n=i[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}function S(t,e){if(null==t)return{};var n,o,a={},i=Object.keys(t);for(o=0;o<i.length;o++)n=i[o],e.indexOf(n)>=0||(a[n]=t[n]);return a}function F(t){return F="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},F(t)}function _(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function x(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?_(Object(n),!0).forEach((function(e){M(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):_(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function M(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var T,E,P={name:"ConfigKeys",components:{PropertyForm:v["a"],KeyValueEditor:g["a"]},mixins:[c["a"]],props:{row:{type:Object,required:!0},configType:{type:String}},data:function(){var t=this;this.$createElement;return{loading:!1,modalVisible:!1,confKeys:[],confKeyForm:{},isDetail:!1,confKeysProperties:{default:[]},isEdit:!1,confKeyCol:[{title:this.$t("common.name"),render:function(e,n){var o=n.row.name;return e("div",[e("a",{attrs:{href:"javascript:;"},on:{click:function(){t.loadConfKeyDetail(o)}}},[o])])}},{title:this.$t("common.operations"),align:"center",render:function(e,n){var o=e("span",[e("a",{attrs:{herf:"javascript:;"},style:"margin-right:5px;",on:{click:function(){return t.editConfKey(n.row)}}},[e("Icon",{attrs:{type:"ios-create-outline"}})]),e("a",{attrs:{herf:"javascript:;"},on:{click:function(){return t.removeConfKey(n.row)}}},[e("Icon",{attrs:{type:"md-trash"}})])]),a=t.row.about.installed&&"default"!==n.row.name;return e("div",[a?o:""])}}],connectionsYamls:[],category:"sources"}},computed:{isConnection:function(){return"connection"===this.configType},modalTitle:function(){var t="";return t=this.isEdit?this.$t("configuration.editConfKey"):this.isDetail?this.$t("configuration.viewConfKey"):this.$t("configuration.addConfKey"),t}},created:function(){this.category=this.isConnection?"connections":"sources",this.isConnection?(this.loadDataDetail=p,this.addDataConfKey=f,this.deleteDataConfKey=m):(this.loadDataDetail=y["h"],this.addDataConfKey=y["b"],this.deleteDataConfKey=y["d"]),this.loadData()},methods:{loadData:function(){this.loadConfKeyProperties()},loadConfKeyProperties:function(){var t=this,e={nodeID:this.nodeID,name:this.row.name};Object(y["f"])(this.category,e).then((function(n){Object(y["g"])(t.category,e).then((function(o){t.confKeys=Object.keys(o.data).map((function(t){return{name:t}})),["mqtt","edgex"].includes(t.row.name)?Object(y["g"])("connections",e).then((function(e){t.confKeysProperties.default=n.data.properties.default.map((function(n){return n.default=t.getDefaultValue(o.data.default?o.data.default[n.name]:""),"insecureSkipVerify"===n.name&&o.data.default&&void 0===o.data.default[n.name]&&(n.default=!0),"connectionSelector"===n.name&&(n.values=Object.keys(e.data)),n}))||[]})):t.confKeysProperties.default=n.data.properties.default.map((function(e){return"list"===e.control&&"list_object"===e.type?(e.properties=e.default,e.default=t.getDefaultValue(o.data.default?o.data.default[e.name]:"")):e.default=t.getDefaultValue(o.data.default?o.data.default[e.name]:""),"insecureSkipVerify"===e.name&&o.data.default&&void 0===o.data.default[e.name]&&(e.default=!0),e}))||[]}))}))},getDefaultValue:function(t){var e=t;return Array.isArray(t)&&(e=t[0]),e},loadConfKeyDetail:function(t){var e=this;this.isDetail=!0,this.modalVisible=!0,this.loadDataDetail(this.nodeID,this.row.name).then((function(n){var o=n.data,a=o[t];e.confKeyForm=x({name:t},a)}))},showAddModal:function(){this.isEdit=!1,this.isDetail=!1,this.modalVisible=!0},handleVisibleChange:function(t){t||(this.isDetail=!1,this.confKeyForm={})},removeEmpetyObject:function(t){Object.keys(t).forEach((function(e){var n=t[e];if(n&&"object"===F(n)){var o=!0;Object.values(n).forEach((function(t){void 0!==t&&(o=!1)})),o&&delete t[e]}}))},save:function(){var t=this,e=this.$refs.confKeyForm.$refs.confKeyForm||this.$refs.confKeyForm,n=this.$refs.confKeyForm.$refs.propertyForm||this.$refs.propertyForm;e.validate((function(e){e&&n.getFormData().then((function(e){e.name;var n=k(e,C),o=n;if(o.connectionSelector){var a=[],i={};t.confKeysProperties.default.forEach((function(t){!1===t.connection_related&&o[t.name]&&a.push(t.name)})),a.forEach((function(t){i[t]=e[t]})),o=x(x({},i),{},{connectionSelector:"".concat(t.row.name,".").concat(o.connectionSelector)})}t.removeEmpetyObject(o),t.addDataConfKey(t.nodeID,t.row.name,t.confKeyForm.name,o).then((function(){t.loadData(),t.isEdit?t.$Message.success(t.$t("common.editSuccess")):t.$Message.success(t.$t("common.addSuccess")),t.modalVisible=!1,t.confKeyForm={}}))})).catch((function(){t.$Message.error(t.$t("common.fillContent"))}))}))},editConfKey:function(t){var e=this,n=t.name;this.loadDataDetail(this.nodeID,this.row.name).then((function(t){var o=t.data,a=o[n],i={};if(o[n].connectionSelector){var r=o[n].connectionSelector.split("."),s=$(r,2),c=s[0],l=s[1];p(e.nodeID,c).then((function(t){var r=t.data,s=r[l];Object.keys(s).forEach((function(t){i[t]=s[t]})),e.confKeyForm=x(x({name:n},a),{},{connectionSelector:o[n].connectionSelector.split(".")[1]||""},i),e.isDetail=!1,e.modalVisible=!0,e.isEdit=!0}))}else e.confKeyForm=x({name:n},a),e.isDetail=!1,e.modalVisible=!0,e.isEdit=!0}))},removeConfKey:function(t){var e=this,n=t.name;this.$Modal.confirm({title:this.$t("common.warning"),content:"".concat(this.$t("common.confirmDelete")," ").concat(n),onOk:function(){e.deleteDataConfKey(e.nodeID,e.row.name,n).then((function(){e.loadData()}))}})}}},I=P,V=(n("8a7a"),n("2877")),A=Object(V["a"])(I,h,b,!1,null,null,null),N=A.exports,U=n("4041"),R={name:"Configuration",mixins:[c["a"],U["a"]],components:{TabsHead:i["a"]},data:function(){var t=this;this.$createElement;return{loading:!1,ConnectionssData:[],recordsCol:[{type:"expand",width:50,render:function(t,e){return t(N,{attrs:{row:e.row,configType:"connection"}})}},{title:this.$t("common.name"),width:120,key:"name"},{title:this.$t("common.description"),minWidth:220,render:function(e,n){var o=n.row.about.description;return e("p",[t.i18nLabel(o)])}},{title:this.$t("common.trial"),width:80,render:function(e,n){var o=n.row.about.trial?t.$t("common.yes"):t.$t("common.no");return e("p",[o])}},{title:this.$t("plugins.installed"),width:100,render:function(e,n){var o=n.row.about.installed?t.$t("common.yes"):t.$t("common.no");return e("p",[o])}},{title:this.$t("common.operations"),width:200,render:function(e,n){var o=n.row.about,a=o.helpUrl,i=o.installed,r=e("a",{attrs:{href:"javascript:;"},style:"margin-right:10px;",on:{click:function(){t.routeToInstallPage(n.row.name)}}},[t.$t("common.install")]);return e("div",[i?null:r,e("a",{attrs:{href:t.i18nLabel(a),target:"_blank",rel:"noopener"}},[t.$t("common.documentation")])])}}]}},created:function(){this.loadConnections()},methods:{loadConnections:function(){var t=this;this.loading=!0,d(this.nodeID).then((function(e){t.ConnectionssData=e.data,t.loading=!1}))},routeToInstallPage:function(t){this.$router.push({name:"extension",params:{id:this.nodeID},query:{fromPage:"stream"}});var e={fromType:"sources",pluginName:t};sessionStorage.setItem("installInfo",JSON.stringify(e))}}},B=R,L=Object(V["a"])(B,r,s,!1,null,null,null),q=L.exports,H=n("101e"),z=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Card",[n("RadioGroup",{attrs:{type:"button","button-style":"solid"},model:{value:t.tabName,callback:function(e){t.tabName=e},expression:"tabName"}},[n("Radio",{attrs:{label:t.tabs[0]}},[t._v(t._s(t.$t("configuration.sourceConfKeys")))]),n("Radio",{attrs:{label:t.tabs[1]}},[t._v(t._s(t.$t("configuration.sinkTemplates")))])],1),t.tabName===t.tabs[0]?n("SourceConfKeys",{attrs:{confKeyList:t.confKeyListJSON.sources},on:{reload:t.getAllConfKeyList}}):t._e(),t.tabName===t.tabs[1]?n("SinkConfKeys",{attrs:{confKeyList:t.confKeyListJSON.sinks},on:{reload:t.getAllConfKeyList}}):t._e()],1)},J=[],G=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("article",{staticClass:"list-container"},[n("Button",{staticClass:"top-create--btn",attrs:{type:"primary"},on:{click:function(e){return t.showConfKeyPropertiesModal("add")}}},[t._v(" "+t._s(t.$t(""+t.addBtnText))+" ")]),n("Table",{attrs:{loading:t.loading,columns:t.columns,data:t.confKeyList}}),n("ConfKeyPeopertiesModal",{ref:"confKeyPropertiesRef",attrs:{modalVisible:t.confKeyPropertiesVisible,title:t.modalTitle,category:t.category,type:t.editConfKeyData.type,confKeyName:t.editConfKeyData.name,isEdit:t.isEditConfKey,isCanAdvanced:"sinks"===t.category,isShowConnectionSelector:"sources"===t.category},on:{"update:modalVisible":function(e){t.confKeyPropertiesVisible=e},"update:modal-visible":function(e){t.confKeyPropertiesVisible=e},submit:t.submitedConfKey}})],1)},W=[],Y=n("14e2"),Q={name:"SourceConfKey",mixins:[c["a"]],props:{confKeyList:{type:Array,default:function(){return[]}}},components:{ConfKeyPeopertiesModal:Y["a"]},data:function(){var t=this;this.$createElement;return{category:"sources",loading:!1,columns:[{title:this.$t("common.name"),key:"name"},{title:this.$t("common.type"),key:"type"},{title:this.$t("common.operations"),key:"action",width:200,align:"center",render:function(e,n){return e("div",[e("a",{style:"margin-right: 10px;",attrs:{href:"javascript:;"},on:{click:function(){t.showConfKeyPropertiesModal("edit",n.row)}}},[e("Icon",{attrs:{type:"ios-create"}})]),e("a",{attrs:{href:"javascript:;"}},[e("Poptip",{attrs:{confirm:!0,transfer:!0,width:200,title:t.$t("common.confirmDelete"),placement:"top",type:"error"},on:{"on-ok":function(){t.removeConfKey(n.row)},"on-cancel":function(){}}},[e("Icon",{attrs:{type:"md-trash"}})])])])}}],isEditConfKey:!1,confKeyPropertiesVisible:!1,editConfKeyData:{}}},computed:{addBtnText:function(){return"sources"===this.category?"configuration.addSourceConfKey":"configuration.addSinkTemplate"},modalTitle:function(){return this.isEditConfKey?this.$t("configuration.editSourceConfKey"):this.$t("configuration.addSourceConfKey")}},methods:{showConfKeyPropertiesModal:function(t,e){this.isEditConfKey="edit"===t,this.editConfKeyData=e||{},this.confKeyPropertiesVisible=!0},removeConfKey:function(t){var e=this,n=t.name,o=t.type;Object(y["d"])(this.nodeID,o,n).then((function(){e.$emit("reload")}))},submitedConfKey:function(){this.$emit("reload")}}},X=Q,Z=(n("58b8"),Object(V["a"])(X,G,W,!1,null,"d08562c2",null)),tt=Z.exports,et={name:"SinkConfKey",extends:tt,mixins:[c["a"]],data:function(){return{category:"sinks"}},computed:{modalTitle:function(){return this.isEditConfKey?this.$t("configuration.editSinkTemplate"):this.$t("configuration.addSinkTemplate")}},methods:{removeConfKey:function(t){var e=this,n=t.name,o=t.type;Object(y["c"])(this.nodeID,o,n).then((function(){e.$emit("reload")}))}}},nt=et,ot=Object(V["a"])(nt,T,E,!1,null,null,null),at=ot.exports;function it(t){return ct(t)||st(t)||dt(t)||rt()}function rt(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function st(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}function ct(t){if(Array.isArray(t))return ft(t)}function lt(t,e){return pt(t)||mt(t,e)||dt(t,e)||ut()}function ut(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function dt(t,e){if(t){if("string"===typeof t)return ft(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?ft(t,e):void 0}}function ft(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o}function mt(t,e){var n=null==t?null:"undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var o,a,i=[],r=!0,s=!1;try{for(n=n.call(t);!(r=(o=n.next()).done);r=!0)if(i.push(o.value),e&&i.length===e)break}catch(c){s=!0,a=c}finally{try{r||null==n["return"]||n["return"]()}finally{if(s)throw a}}return i}}function pt(t){if(Array.isArray(t))return t}var ht={name:"Resources",mixins:[c["a"]],components:{SourceConfKeys:tt,SinkConfKeys:at},data:function(){return{tabName:"source",tabs:["source","sink"],confKeyListJSON:{sources:[],sinks:[]}}},created:function(){this.getAllConfKeyList()},methods:{getAllConfKeyList:function(){var t=this;Object(y["e"])(this.nodeID).then((function(e){var n=e.data,o=n?Object.entries(n):[];o.length&&o.forEach((function(e){var n=lt(e,2),o=n[0],a=n[1],i=[],r=a||[];r.forEach((function(t){var e=Object.keys(t);e.forEach((function(e){var n={};n.name=e,n.type=t[e],i=[].concat(it(i),[n])}))})),t.confKeyListJSON[o]=i}))}))}}},bt=ht,yt=Object(V["a"])(bt,z,J,!1,null,null,null),vt=yt.exports,gt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"schema"},[n("Button",{staticClass:"top-create--btn",attrs:{type:"primary"},on:{click:t.showCreateModal}},[t._v(t._s(t.$t("schema.createSchema")))]),n("Table",{attrs:{loading:t.loading,columns:t.recordsCol,data:t.records}}),n("Modal",{attrs:{"class-name":"schema-modal--create",title:t.isEdit?t.$t("schema.editSchema"):t.isDetail?t.$t("schema.detailSchema"):t.$t("schema.addSchema"),width:480,"mask-closable":!1},model:{value:t.createModalVisible,callback:function(e){t.createModalVisible=e},expression:"createModalVisible"}},[n("Form",{ref:"createForm",attrs:{model:t.createForm,rules:t.rules}},[n("Row",[n("i-col",{attrs:{span:"24"}},[n("FormItem",{attrs:{label:t.$t("schema.schemaType"),prop:"type"}},[n("Select",{attrs:{size:"large"},model:{value:t.createForm.type,callback:function(e){t.$set(t.createForm,"type",e)},expression:"createForm.type"}},t._l(t.typesList,(function(e){return n("Option",{key:e.value,attrs:{disabled:t.isDetail,value:e.value,label:e.label}})})),1)],1)],1),n("i-col",{attrs:{span:"24"}},[n("FormItem",{attrs:{label:t.$t("schema.schemaName"),prop:"name"}},[n("i-input",{attrs:{disabled:t.isEdit||t.isDetail,size:"large"},model:{value:t.createForm.name,callback:function(e){t.$set(t.createForm,"name",e)},expression:"createForm.name"}})],1)],1),t.isDetail?t._e():n("RadioGroup",{model:{value:t.fileOrContent,callback:function(e){t.fileOrContent=e},expression:"fileOrContent"}},[n("Radio",{attrs:{label:"file"}}),n("Radio",{attrs:{label:"content"}})],1),"file"===t.fileOrContent||t.isDetail?n("i-col",{attrs:{span:"24"}},[n("FormItem",{attrs:{label:t.$t("schema.file"),prop:"file"}},[n("i-input",{attrs:{size:"large",disabled:t.isDetail,placeholder:"file:///tmp/ekuiper/internal/schema/test/test2.proto"},model:{value:t.createForm.file,callback:function(e){t.$set(t.createForm,"file",e)},expression:"createForm.file"}})],1)],1):t._e(),"content"===t.fileOrContent||t.isDetail?n("i-col",{attrs:{span:"24"}},[n("FormItem",{attrs:{label:t.$t("schema.content"),prop:"content"}},[n("i-input",{attrs:{type:"textarea",rows:3,size:"large",disabled:t.isDetail,placeholder:"message Book {required string title = 1; required int32 price = 2;}"},model:{value:t.createForm.content,callback:function(e){t.$set(t.createForm,"content",e)},expression:"createForm.content"}})],1)],1):t._e()],1)],1),n("div",{directives:[{name:"show",rawName:"v-show",value:!t.isDetail,expression:"!isDetail"}],attrs:{slot:"footer"},slot:"footer"},[n("Button",{attrs:{type:"text"},on:{click:function(e){t.createModalVisible=!1}}},[t._v(t._s(t.$t("common.cancel")))]),n("Button",{attrs:{type:"primary"},on:{click:t.save}},[t._v(t._s(t.$t("common.submit")))])],1)],1)],1)},Ct=[],$t=n("5a81"),Ot=["type"],wt=["file","content"];function jt(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function Dt(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?jt(Object(n),!0).forEach((function(e){Kt(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):jt(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function Kt(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function kt(t,e){if(null==t)return{};var n,o,a=St(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(o=0;o<i.length;o++)n=i[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}function St(t,e){if(null==t)return{};var n,o,a={},i=Object.keys(t);for(o=0;o<i.length;o++)n=i[o],e.indexOf(n)>=0||(a[n]=t[n]);return a}var Ft={name:"Schema",mixins:[c["a"]],data:function(){var t=this;this.$createElement;return{loading:!1,isEdit:!1,isDetail:!1,createModalVisible:!1,createForm:{},rules:{type:[{required:!0,message:this.$t("common.fillContent")}],name:[{required:!0,message:this.$t("common.fillContent")}]},typesList:[{value:"protobuf",label:"protobuf"}],fileOrContent:"file",records:[],recordsCol:[{title:this.$t("common.name"),key:"name",render:function(e,n){return e("div",[e("a",{attrs:{href:"javascript:;"},on:{click:function(){t.showDetail(n.row,"view")}}},[n.row.name])])}},{title:this.$t("common.operations"),key:"action",width:200,align:"center",render:function(e,n){return e("div",[e("a",{style:"margin-right: 10px;",attrs:{href:"javascript:;"},on:{click:function(){t.showDetail(n.row,"edit")}}},[e("Icon",{attrs:{type:"ios-create"}})]),e("a",{attrs:{href:"javascript:;"}},[e("Poptip",{attrs:{confirm:!0,transfer:!0,width:200,title:t.$t("common.confirmDelete"),placement:"top",type:"error"},on:{"on-ok":function(){t.remove(n.row,"edit")},"on-cancel":function(){}}},[e("Icon",{attrs:{type:"md-trash"}})])])])}}]}},watch:{createModalVisible:function(t){t||(this.$refs.createForm.resetFields(),this.isEdit=!1,this.isDetail=!1)}},created:function(){this.loadData()},methods:{loadData:function(){var t=this;this.loading=!0,Object($t["c"])(this.nodeID).then((function(e){t.records=e.data.map((function(t){return{name:t}})),t.loading=!1})).catch((function(){t.loading=!1}))},showCreateModal:function(){this.createModalVisible=!0},showDetail:function(t,e){var n=this,o=t.name;this.createModalVisible=!0,this.isEdit="edit"===e,this.isDetail="view"===e,Object($t["e"])(this.nodeID,o).then((function(t){n.createForm=t.data})).catch((function(){}))},remove:function(t){var e=this,n=t.name;Object($t["b"])(this.nodeID,n).then((function(){e.$Message.success(e.$t("common.deleteSuccess")),e.loadData()})).catch((function(){}))},save:function(){var t=this;this.$refs.createForm.validate((function(e){if(e){var n=t.createForm,o=n.type,a=kt(n,Ot),i=a.file,r=a.content,s=kt(a,wt),c="file"===t.fileOrContent?Dt({file:i},s):Dt({content:r},s);t.isEdit?Object($t["d"])(t.nodeID,o,a.name,c).then((function(){t.$Message.success(t.$t("common.editSuccess")),t.loadData(),t.createModalVisible=!1})).catch((function(){})):Object($t["a"])(t.nodeID,o,c).then((function(){t.$Message.success(t.$t("common.addSuccess")),t.loadData(),t.createModalVisible=!1})).catch((function(){}))}}))}}},_t=Ft,xt=Object(V["a"])(_t,gt,Ct,!1,null,null,null),Mt=xt.exports,Tt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("article",{staticClass:"upload-management"},[n("Button",{staticClass:"top-create--btn",attrs:{type:"primary"},on:{click:t.showUploadModal}},[t._v(t._s(t.$t("upload.createFile")))]),n("Table",{attrs:{loading:t.loading,columns:t.tableColumn,data:t.fileList}}),n("UploadFileModal",{attrs:{modalVisible:t.uploadModalVisible},on:{"update:modalVisible":function(e){t.uploadModalVisible=e},"update:modal-visible":function(e){t.uploadModalVisible=e},reload:t.getFileList}})],1)},Et=[],Pt=n("91b6"),It=n("23ac"),Vt={name:"UploadManagement",mixins:[c["a"]],components:{UploadFileModal:It["a"]},data:function(){var t=this;this.$createElement;return{loading:!1,fileList:[],tableColumn:[{title:this.$t("common.name"),key:"name"},{title:this.$t("common.operations"),key:"action",width:200,align:"center",render:function(e,n){return e("div",[e("a",{attrs:{href:"javascript:;"}},[e("Poptip",{attrs:{confirm:!0,transfer:!0,width:200,title:t.$t("common.confirmDelete"),placement:"top",type:"error"},on:{"on-ok":function(){t.remove(n.row,"edit")},"on-cancel":function(){}}},[e("Icon",{attrs:{type:"md-trash"}})])])])}}],uploadModalVisible:!1}},created:function(){this.getFileList()},methods:{getFileList:function(){var t=this;this.loading=!0,Object(Pt["b"])(this.nodeID).then((function(e){null!==e&&void 0!==e&&e.data&&(t.fileList=e.data.map((function(t){return{name:t}})))})).finally((function(){t.loading=!1}))},remove:function(t){var e=this;if(null!==t&&void 0!==t&&t.name){var n=t.name.split("/"),o=n[n.length-1];Object(Pt["a"])(this.nodeID,o).then((function(){e.$Message.success(e.$t("common.deleteSuccess")),e.getFileList()}))}},showUploadModal:function(){this.uploadModalVisible=!0}}},At=Vt,Nt=Object(V["a"])(At,Tt,Et,!1,null,null,null),Ut=Nt.exports,Rt={name:"Configuration",mixins:[H["a"]],components:{TabsHead:i["a"],Resources:vt,Connections:q,Schema:Mt,UploadManagement:Ut},data:function(){var t=["sourceConfig","connection","schema","fileManagement"];return{tabArr:t,name:t[0]}},computed:{hiddenTabMap:function(){var t;return(null===(t=this.$store.state.nodeMenuHiddenSettingMap)||void 0===t?void 0:t.configuration)||{}}},methods:{countDefaultActiveTab:function(){var t=this,e=Object.keys(this.hiddenTabMap).filter((function(e){return t.hiddenTabMap[e]})),n=this.tabArr.filter((function(t){return!e.includes(t)}));this.name=n[0]}},created:function(){this.countDefaultActiveTab()}},Bt=Rt,Lt=(n("b52e"),Object(V["a"])(Bt,o,a,!1,null,null,null));e["default"]=Lt.exports},b476:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Upload",{attrs:{"before-upload":t.handleUpload,action:t.action,accept:t.accept,name:"uploadFile"}},[t._t("text",(function(){return[n("Button",{attrs:{icon:"ios-cloud-upload-outline"}},[t._v(t._s(t.$t("upload.selectFile")))])]}))],2)},a=[],i={name:"UploadFile",props:{value:{type:[Object,File],default:null},action:{type:String,default:"#"},accept:{type:String,default:"-"}},data:function(){return{uploadfFles:this.value}},watch:{value:{immediate:!0,handler:function(t){this.uploadfFles=t}},uploadfFles:{immediate:!0,handler:function(t){this.$emit("input",t)}}},methods:{handleUpload:function(t){return this.uploadfFles=t,this.$emit("handleUpload",this.uploadfFles),!1}}},r=i,s=n("2877"),c=Object(s["a"])(r,o,a,!1,null,null,null);e["a"]=c.exports},b52e:function(t,e,n){"use strict";n("b54c")},b54c:function(t,e,n){},d710:function(t,e,n){"use strict";n("74b5")},ed50:function(t,e,n){}}]);