(function(e){function t(t){for(var n,i,o=t[0],u=t[1],l=t[2],c=0,d=[];c<o.length;c++)i=o[c],r[i]&&d.push(r[i][0]),r[i]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);m&&m(t);while(d.length)d.shift()();return s.push.apply(s,l||[]),a()}function a(){for(var e,t=0;t<s.length;t++){for(var a=s[t],n=!0,i=1;i<a.length;i++){var u=a[i];0!==r[u]&&(n=!1)}n&&(s.splice(t--,1),e=o(o.s=a[0]))}return e}var n={},r={app:0},s=[];function i(e){return o.p+"js/"+({about:"about"}[e]||e)+"."+{about:"b0ff3b1c"}[e]+".js"}function o(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.e=function(e){var t=[],a=r[e];if(0!==a)if(a)t.push(a[2]);else{var n=new Promise(function(t,n){a=r[e]=[t,n]});t.push(a[2]=n);var s,u=document.getElementsByTagName("head")[0],l=document.createElement("script");l.charset="utf-8",l.timeout=120,o.nc&&l.setAttribute("nonce",o.nc),l.src=i(e),s=function(t){l.onerror=l.onload=null,clearTimeout(c);var a=r[e];if(0!==a){if(a){var n=t&&("load"===t.type?"missing":t.type),s=t&&t.target&&t.target.src,i=new Error("Loading chunk "+e+" failed.\n("+n+": "+s+")");i.type=n,i.request=s,a[1](i)}r[e]=void 0}};var c=setTimeout(function(){s({type:"timeout",target:l})},12e4);l.onerror=l.onload=s,u.appendChild(l)}return Promise.all(t)},o.m=e,o.c=n,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(a,n,function(t){return e[t]}.bind(null,n));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/hotel_admin/",o.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var c=0;c<u.length;c++)t(u[c]);var m=l;s.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"009b":function(e,t,a){"use strict";var n=a("d6a1"),r=a.n(n);r.a},"0af1":function(e,t,a){},"0f41":function(e,t,a){},"189c":function(e){e.exports=[{aboutTable:"Пользователи системы",name:"users",rightsRequired:"A",columns:[{name:"createdAt",type:"date",readonly:!0},{name:"createdBy",type:"number",readonly:!0,link:{table:"users",keyField:"_id",valueField:"name"}},{name:"name",type:"text",required:!0},{name:"rights",type:"text"},{name:"about_user",type:"textarea",about_column:"Уточняющая информация о пользователе"}]},{aboutTable:"Отели",name:"hotels",columns:[{name:"createdAt",type:"date",readonly:!0},{name:"updatedAt",type:"date",readonly:!0},{name:"createdBy",type:"number",readonly:!0,link:{table:"users",keyField:"_id",valueField:"name"}},{name:"name",type:"text",required:!0},{name:"about_hotel",type:"textarea","about-column":"Уточняющая информация об Отеле"},{name:"images",type:"image",array:!0}]},{aboutTable:"Комнаты отеля",name:"rooms",columns:[{name:"createdAt",type:"date",readonly:!0},{name:"updatedAt",type:"date",readonly:!0},{name:"createdBy",type:"number",readonly:!0,link:{table:"users",keyField:"_id",valueField:"name"}},{name:"hotel_id",type:"text",link:{table:"hotels",keyField:"_id",valueField:"name",imageField:"images"}},{name:"room_number",type:"text",required:!0},{name:"about_room",type:"textarea",about_column:"Уточняющая информация о комнате"},{name:"images",type:"image",array:!0}]},{aboutTable:"Модели предметов",name:"item_models",columns:[{name:"createdAt",type:"date",readonly:!0},{name:"updatedAt",type:"date",readonly:!0},{name:"createdBy",type:"text",readonly:!0,link:{table:"users",keyField:"_id",valueField:"name"}},{name:"name",type:"text",required:!0},{name:"description",type:"textarea",about_column:"Уточняющая информация о модели предмета"},{name:"images",type:"image",array:!0}]},{aboutTable:"Предметы",name:"items",columns:[{name:"createdAt",type:"date",readonly:!0},{name:"updatedAt",type:"date",readonly:!0},{name:"createdBy",type:"text",readonly:!0,link:{table:"users",keyField:"_id",valueField:"name"}},{name:"item_model_id",type:"text",link:{table:"item_models",keyField:"_id",valueField:"name",imageField:"images"}},{name:"room_id",type:"text",link:{table:"rooms",keyField:"_id",valueField:"room_number",imageField:"images"}},{name:"description",type:"textarea",about_column:"Уточняющая информация о предмете",required:!0},{name:"images",type:"image",array:!0}]},{aboutTable:"Картинки",name:"images",columns:[{name:"createdAt",type:"date",readonly:!0},{name:"updatedAt",type:"date",readonly:!0},{name:"createdBy",type:"number",readonly:!0,link:{table:"users",keyField:"_id",valueField:"name"}},{name:"name",type:"text",required:!0},{name:"image",type:"image",readonly:!0}]}]},1941:function(e,t,a){"use strict";var n=a("8f01"),r=a.n(n);r.a},"260a":function(e,t,a){"use strict";var n=a("5d07"),r=a.n(n);r.a},2709:function(e,t,a){"use strict";var n=a("2b09"),r=a.n(n);r.a},"2b09":function(e,t,a){},4916:function(e,t,a){"use strict";var n=a("5fc2"),r=a.n(n);r.a},"4abf":function(e,t,a){"use strict";var n=a("82a5"),r=a.n(n);r.a},"56d7":function(e,t,a){"use strict";a.r(t);a("7f7f"),a("ac6a"),a("cadf"),a("551c"),a("097d");var n=a("2b0e"),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("div",{attrs:{id:"nav"}},[a("router-link",{attrs:{to:"/"}},[e._v("Main")]),e._v("\n        |\n        "),a("router-link",{attrs:{to:"/table/"+this.$store.state.currentTable.name+"/page/"+this.$store.state.currentTable.curPage}},[e._v("\n            Tables\n        ")]),e._v("\n        |\n        "),a("router-link",{attrs:{to:"/about"}},[e._v("About")]),e._v("\n        |\n        "),a("router-link",{attrs:{to:"/login"}},[e._v("Login")]),this.$store.state.username?a("label",{attrs:{id:"user"}},[e._v("\n            User: "+e._s(this.$store.state.username)+"\n            "),a("button",{on:{click:e.logout}},[e._v("logout")])]):e._e()],1),a("StatusBar"),a("router-view")],1)},s=[],i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{directives:[{name:"show",rawName:"v-show",value:!this.$store.state.statusBar.hidden,expression:"!this.$store.state.statusBar.hidden"}]},[e._v("\n    "+e._s(this.$store.state.statusBar.text)+"\n")])},o=[],u={name:"statusBar"},l=u,c=(a("009b"),a("2877")),m=Object(c["a"])(l,i,o,!1,null,"0fb6f070",null);m.options.__file="StatusBar.vue";var d=m.exports,g={methods:{logout:function(){this.$store.dispatch("logout")}},components:{StatusBar:d}},p=g,f=(a("7faf"),Object(c["a"])(p,r,s,!1,null,null,null));f.options.__file="App.vue";var b=f.exports,h=a("8c4f"),v=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-main"},[a("AppMainHeader",{staticClass:"app-main-header",attrs:{headerText:e.message}}),a("AppMainSide",{staticClass:"app-main-side",attrs:{links:e.links}})],1)},w=[],_=a("c93e"),T=a("2f62"),y=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-main-header"},[e._v("\n    "+e._s(e.headerText)+"\n")])},P=[],k={name:"AppMainHeader",props:{headerText:String}},C=k,R=(a("4abf"),Object(c["a"])(C,y,P,!1,null,"d248d34e",null));R.options.__file="AppMainHeader.vue";var x=R.exports,$=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-main-side"},[a("strong",[e._v("Режим работы:")]),a("ul",e._l(e.links,function(t,n){return a("li",{key:n},[e._v(e._s(t.name)+"\n        ")])}))])},L=[],S={name:"AppMainSide",props:{links:Array}},N=S,O=(a("2709"),Object(c["a"])(N,$,L,!1,null,"58dabef8",null));O.options.__file="AppMainSide.vue";var F=O.exports,j=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"view-table-list"},[e._m(0),a("ul",e._l(e.getTableList,function(t,n){return a("li",{key:n,class:[n==e.getCurrentTableNum?"selected":""],attrs:{"data-index":n},on:{click:function(a){e.onSelectTable(t.name)}}},[e._v("\n            "+e._s(t.name)+"\n            ")])}))])},A=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"header"},[a("strong",[e._v("Список таблиц:")])])}],E=(a("a481"),{name:"ViewTableList",computed:Object(_["a"])({},Object(T["b"])(["getTableList","getCurrentTableNum"])),methods:{onSelectTable:function(e){this.$router.replace("/table/"+e+"/page/1")}}}),B=E,I=(a("1941"),Object(c["a"])(B,j,A,!1,null,"4097d85c",null));I.options.__file="ViewTableList.vue";var V=I.exports,M=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"view-table"},[e.getCurrentTable?a("table",[a("caption",[a("strong",[e._v(e._s(e.getCurrentTable.aboutTable))]),a("Paginator",{staticClass:"paginator"}),a("PerPage",{staticClass:"per-page"})],1),a("thead",[a("tr",[a("th",[e._v("№")]),e._l(e.getCurrentTable.columns,function(t,n){return a("th",{key:n},[e._v("\n                    "+e._s(t.name)+"\n                ")])}),a("th",{staticClass:"action-column"})],2)]),a("ViewTableFooter"),a("ViewTablePage")],1):e._e()])},U=[],q=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("tbody",e._l(e.getCurrentTable.rows,function(t,n){return a("tr",{key:t._id,class:e.getNewRow._id===t._id?"onedit":""},[a("td",[e._v(e._s(n+1+(e.getCurrentTable.curPage-1)*e.getCurrentTable.perPage))]),e._l(e.getCurrentTable.columns,function(n){return a("td",{key:t._id+"."+n.name},["image"===n.type?a("div",e._l(e.getImageArr(t,n),function(t,n){return a("img",{key:n,attrs:{src:"images/"+t},on:{click:e.onClickImage}})})):n.link?a("div",[e._l(e.getLinkImage(n,t[n.name]),function(t,n){return a("img",{key:n,attrs:{src:"images/"+t},on:{click:e.onClickImage}})}),a("span",[e._v(e._s(e.getLinkValue(n,t)))])],2):a("span",[e._v("\n        "+e._s(e.getLinkValue(n,t))+"\n            ")])])}),a("td",[a("button",{on:{click:function(a){e.onEditRow(t)}}},[e._v("\n            Редактировать\n        ")])])],2)}))},H=[],J=(a("b54a"),{name:"ViewTablePage",computed:Object(_["a"])({},Object(T["b"])(["getCurrentTable","getNewRow"])),methods:{getImageArr:function(e,t){var a=e[t.name];return a instanceof Array?a:a?[a]:[]},onClickImage:function(e){this.$store.dispatch("viewImage",e.srcElement.src)},onEditRow:function(e){this.$store.commit("onEditRow",e)},getLinkImage:function(e,t){try{var a=e.linkList[t].image;return a instanceof Array?a:a?[a]:[]}catch(e){this.$store.dispatch("showStatusText",e)}},getLinkValue:function(e,t){return e.link&&e.linkList&&e.linkList[t[e.name]]?e.linkList[t[e.name]].value||"not found :(":"date"===e.type?(t[e.name]+"").slice(0,10):t[e.name]}},components:{Vue:n["a"]}}),G=J,X=(a("6718"),Object(c["a"])(G,q,H,!1,null,"10d02e4f",null));X.options.__file="ViewTablePage.vue";var D=X.exports,z=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("tfoot",[a("tr",[a("td",[e._v("new:")]),e._l(e.getCurrentColumns(),function(t){return a("td",{key:t.name},[t.readonly?a("span",[e._v("\n                    "+e._s(e.getNewRowField(t))+"\n                ")]):t.link?a("select",{directives:[{name:"model",rawName:"v-model",value:e.$store.state.newRow[e.getCurrentTable.name][t.name],expression:"$store.state.newRow[getCurrentTable.name][column.name]"}],on:{change:function(a){var n=Array.prototype.filter.call(a.target.options,function(e){return e.selected}).map(function(e){var t="_value"in e?e._value:e.value;return t});e.$set(e.$store.state.newRow[e.getCurrentTable.name],t.name,a.target.multiple?n:n[0])}}},e._l(t.linkList,function(t,n){return a("option",{key:n,domProps:{value:n}},[e._v("\n                "+e._s(t.value)+"\n            ")])})):"image"===t.type?a("div",{staticClass:"image-list"},[e.imagesFiles[t.name]&&0!==e.imagesFiles[t.name].length?e._e():a("div",[t.array?a("div",e._l(e.getNewRow[t.name],function(n,r){return a("div",{key:r,staticClass:"image"},[a("img",{attrs:{src:"images/"+n}}),a("div",{staticClass:"image-close",on:{click:function(a){e.$store.state.newRow[e.getCurrentTable.name][t.name].splice(r,1)}}},[e._v("X\n                        ")])])})):e.getNewRow[t.name]?a("div",[a("div",{staticClass:"image"},[a("img",{attrs:{src:"images/"+e.$store.state.newRow[e.getCurrentTable.name][t.name]}}),a("div",{staticClass:"image-close",on:{click:function(a){e.$store.state.newRow[e.getCurrentTable.name][t.name]=null}}},[e._v("X\n                        ")])])]):e._e()]),a("div",{staticClass:"input-files"},[a("input",{attrs:{type:"file",multiple:t.array,"data-column-name":t.name},on:{change:e.onChangeFiles}}),e.imagesFiles[t.name]&&e.imagesFiles[t.name].length>0?a("button",{on:{click:function(a){e.clearInputFiles(t.name)}}},[e._v("X\n                ")]):e._e()]),e._l(e.imagesFiles[t.name],function(t,n){return a("img",{key:n,attrs:{src:e.file2Src(t)}})})],2):"textarea"!==t.type?"checkbox"===t.type?a("input",{directives:[{name:"model",rawName:"v-model",value:e.$store.state.newRow[e.getCurrentTable.name][t.name],expression:"$store.state.newRow[getCurrentTable.name][column.name]"}],attrs:{title:t.about_column?t.about_column:t.name,type:"checkbox"},domProps:{checked:Array.isArray(e.$store.state.newRow[e.getCurrentTable.name][t.name])?e._i(e.$store.state.newRow[e.getCurrentTable.name][t.name],null)>-1:e.$store.state.newRow[e.getCurrentTable.name][t.name]},on:{change:function(a){var n=e.$store.state.newRow[e.getCurrentTable.name][t.name],r=a.target,s=!!r.checked;if(Array.isArray(n)){var i=null,o=e._i(n,i);r.checked?o<0&&e.$set(e.$store.state.newRow[e.getCurrentTable.name],t.name,n.concat([i])):o>-1&&e.$set(e.$store.state.newRow[e.getCurrentTable.name],t.name,n.slice(0,o).concat(n.slice(o+1)))}else e.$set(e.$store.state.newRow[e.getCurrentTable.name],t.name,s)}}}):"radio"===t.type?a("input",{directives:[{name:"model",rawName:"v-model",value:e.$store.state.newRow[e.getCurrentTable.name][t.name],expression:"$store.state.newRow[getCurrentTable.name][column.name]"}],attrs:{title:t.about_column?t.about_column:t.name,type:"radio"},domProps:{checked:e._q(e.$store.state.newRow[e.getCurrentTable.name][t.name],null)},on:{change:function(a){e.$set(e.$store.state.newRow[e.getCurrentTable.name],t.name,null)}}}):a("input",{directives:[{name:"model",rawName:"v-model",value:e.$store.state.newRow[e.getCurrentTable.name][t.name],expression:"$store.state.newRow[getCurrentTable.name][column.name]"}],attrs:{title:t.about_column?t.about_column:t.name,type:t.type},domProps:{value:e.$store.state.newRow[e.getCurrentTable.name][t.name]},on:{input:function(a){a.target.composing||e.$set(e.$store.state.newRow[e.getCurrentTable.name],t.name,a.target.value)}}}):a("textarea",{directives:[{name:"model",rawName:"v-model",value:e.$store.state.newRow[e.getCurrentTable.name][t.name],expression:"$store.state.newRow[getCurrentTable.name][column.name]"}],attrs:{title:t.about_column?t.about_column:t.name},domProps:{value:e.$store.state.newRow[e.getCurrentTable.name][t.name]},on:{input:function(a){a.target.composing||e.$set(e.$store.state.newRow[e.getCurrentTable.name],t.name,a.target.value)}}})])}),a("td",[a("button",{on:{click:e.rowPutPost}},[e._v("\n            "+e._s(e.buttonName())+"\n        ")]),a("button",{on:{click:e.clearNewRow}},[e._v("\n            Очист.\n        ")])])],2)])},K=[];a("f751"),a("6762"),a("2fdb"),a("ac4d"),a("8a81");function Q(e,t,a,n){var r="application/json; charset=utf-8";return new Promise(function(s,i){var o=new XMLHttpRequest;o.open(e,t),o.onreadystatechange=function(){if(4===o.readyState)if(200===o.status){try{var e=JSON.parse(o.response)}catch(e){i(e)}s(e)}else i(o.status)},a?n?o.send(a):(o.setRequestHeader("Content-type",r),o.send(JSON.stringify(a))):o.send()})}var W=Q,Y={components:{Vue:n["a"]},name:"ViewTableFooter",data:function(){return{imagesInput:{},imagesFiles:{},imagesArray:{}}},computed:Object(_["a"])({},Object(T["b"])(["getCurrentTable","getNewRow"])),methods:{getCurrentColumns:function(){var e=!0,t=!1,a=void 0;try{for(var r,s=this.getCurrentTable.columns[Symbol.iterator]();!(e=(r=s.next()).done);e=!0){var i=r.value;"image"!==i.type||this.imagesFiles[i.name]||(n["a"].set(this.imagesFiles,[i.name],[]),n["a"].set(this.imagesInput,[i.name],HTMLInputElement),n["a"].set(this.imagesArray,[i.name],!1))}}catch(e){t=!0,a=e}finally{try{e||null==s.return||s.return()}finally{if(t)throw a}}return this.getCurrentTable.columns},clearInputFiles:function(e){this.imagesInput[e].value="",this.imagesFiles[e]=[],this.imagesArray[e]=!1},file2Src:function(e){return window.URL.createObjectURL(e)},onChangeFiles:function(e){var t=e.srcElement,a="",n=t.dataset.columnName;this.imagesFiles[n]=[],this.imagesInput[n]=t;for(var r=0;r<t.files.length;r++)t.files[r].type.includes("image")&&t.files[r].size<105e4?this.imagesFiles[n].push(t.files[r]):a+=t.files[r].name+", ";a&&(a="Для загрузки изображений не подходят файлы: "+a,this.$store.dispatch("showStatusText",a))},buttonName:function(){return this.getNewRow&&this.getNewRow["_id"]?"Изм.":"Доб."},rowPutPost:function(){var e=this,t=this.getCurrentTable,a=this.getNewRow,n=!0,r="";if(t.columns.forEach(function(e){e.readonly||!e.required||a[e.name]||(r||(r="Не заполнено обязательное поле:"),r+=" "+e.name)}),r)return this.$store.dispatch("showStatusText",r);var s=[],i=[],o={};t.columns.forEach(function(t){if("image"===t.type&&e.imagesFiles[t.name]&&e.imagesFiles[t.name].length>0){var a=new FormData;e.imagesFiles[t.name].forEach(function(e){a.append("file",e)});var r=W("POST",e.$store.state.serverURL+"images/",a,n);s.push(r),i.push(t.name)}}),s.length>0?Promise.all(s).then(function(t){for(var n=0;n<i.length;n++)o[i[n]]=t[n].res;Object.assign(a,o),e.sendNewRow(a)}).catch(function(e){console.dir(e)}):this.sendNewRow(a)},sendNewRow:function(e){e._id?this.$store.dispatch("putRow",e).then(this.clearNewRow):this.$store.dispatch("postRow",e).then(this.clearNewRow)},clearNewRow:function(){var e=this;for(var t in this.$store.state.newRow[this.getCurrentTable.name]._id=null,this.imagesFiles)this.imagesFiles[t]=[],this.imagesInput[t].value="",this.imagesArray[t]=!1;this.getCurrentTable.columns.forEach(function(t){e.$store.state.newRow[e.getCurrentTable.name][t.name]=null})},getNewRowField:function(e){var t=this.getNewRow;return t[e.name]?e.link&&e.linkList&&e.linkList[t[e.name]]?e.linkList[t[e.name]].value||"not found :(":"date"===e.type?(t[e.name]+"").slice(0,10):t[e.name]:""}}},Z=Y,ee=(a("faa2"),Object(c["a"])(Z,z,K,!1,null,"50cb45a4",null));ee.options.__file="ViewTableFooter.vue";var te=ee.exports,ae=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[e._v("\n    Стр.\n    "),e._l(e.getPages,function(t,n){return a("button",{key:n,attrs:{"data-page":t,disabled:e.getCurrentTable.curPage==t||0==t},on:{click:e.onSelectPage}},[e._v("\n        "+e._s(t>0?t:"...")+"\n    ")])})],2)},ne=[],re={name:"Paginator",computed:Object(_["a"])({},Object(T["b"])(["getCurrentTable"]),{getPages:function(){var e=[],t=this.getCurrentTable,a=t.curPage,n=t.maxPage;if(a<5)for(var r=1;r<=Math.min(a+2,n);r++)e.push(r);else{e=[1,0];for(var s=a-2;s<=Math.min(a+2,n);s++)e.push(s)}return a<n-3&&e.push(0),a<n-2&&e.push(n),e}}),methods:{onSelectPage:function(e){this.$router.replace("/table/"+this.getCurrentTable.name+"/page/"+e.target.dataset.page)}}},se=re,ie=(a("4916"),Object(c["a"])(se,ae,ne,!1,null,"6fa47aad",null));ie.options.__file="Paginator.vue";var oe=ie.exports,ue=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[e._v("\n    По\n    "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.perPage,expression:"perPage"}],attrs:{type:"number"},domProps:{value:e.perPage},on:{change:e.onChangePerPage,input:function(t){t.target.composing||(e.perPage=t.target.value)}}}),e._v("\n    строк\n")])},le=[],ce={name:"PerPage",created:function(){this.perPage=this.$store.state.currentTable.perPage},data:function(){return{perPage:1}},methods:{onChangePerPage:function(){this.perPage>=1?this.$store.dispatch("onChangePerPage",this.perPage):this.perPage=1}}},me=ce,de=(a("260a"),Object(c["a"])(me,ue,le,!1,null,"38e2aad8",null));de.options.__file="PerPage.vue";var ge=de.exports,pe={name:"ViewTable",computed:Object(_["a"])({},Object(T["b"])(["getCurrentTable"])),components:{ViewTableFooter:te,ViewTablePage:D,Paginator:oe,PerPage:ge}},fe=pe,be=(a("5b60"),Object(c["a"])(fe,M,U,!1,null,"3c77bf44",null));be.options.__file="ViewTable.vue";var he=be.exports,ve={name:"HotelsMain",data:function(){return{message:"Это супер-пупер прога про отели"}},computed:Object(_["a"])({},Object(T["c"])(["links"]),Object(T["b"])(["tableList"])),components:{ViewTableList:V,ViewTable:he,AppMainHeader:x,AppMainSide:F,StatusBar:d}},we=ve,_e=(a("9614"),Object(c["a"])(we,v,w,!1,null,"27d1014d",null));_e.options.__file="HotelsMain.vue";var Te=_e.exports,ye=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("label",[e._v("User name:\n        "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.username,expression:"username"}],attrs:{type:"text"},domProps:{value:e.username},on:{input:function(t){t.target.composing||(e.username=t.target.value)}}})]),a("label",[e._v("password:\n        "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"password"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}})]),a("button",{on:{click:e.login}},[e._v("login")])])},Pe=[],ke={name:"Login",data:function(){return{username:"",password:""}},methods:{login:function(){var e={username:this.username,password:this.password};this.$store.dispatch("login",e)}}},Ce=ke,Re=(a("9463"),Object(c["a"])(Ce,ye,Pe,!1,null,"329649c0",null));Re.options.__file="Login.vue";var xe=Re.exports,$e=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-main"},[a("AppMainHeader",{staticClass:"app-main-header",attrs:{headerText:e.message}}),a("ViewTableList",{staticClass:"app-main-view-table-list"}),a("ViewTable",{staticClass:"app-main-view-table"}),a("ViewImage",{attrs:{"image-src":this.$store.state.imageSrc}})],1)},Le=[],Se=function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.imageSrc?a("div",{staticClass:"image-back-screen"},[a("div",{staticClass:"image-black-screen",on:{click:e.closeImage}}),a("img",{attrs:{src:e.imageSrc},on:{click:e.closeImage}})]):e._e()},Ne=[],Oe={name:"ViewImage",props:["imageSrc"],methods:{closeImage:function(){this.$store.dispatch("viewImage","")}}},Fe=Oe,je=(a("f47c"),Object(c["a"])(Fe,Se,Ne,!1,null,"4a5df9d8",null));je.options.__file="ViewImage.vue";var Ae=je.exports;a("456d");n["a"].use(T["a"]);var Ee=new T["a"].Store({state:{serverURL:"",username:"",links:[{name:"Конфигурация"},{name:"Работаем с отелем"}],tableList:[],currentTable:{num:null,name:"",curPage:1,maxPage:0,perPage:5,columns:[],rows:[],length:0},statusBar:{text:"statusBar",hidden:!1},currentUser:0,newRow:{},imageSrc:""},getters:{getTableList:function(e){return e.tableList},getTableRows:function(e){return e.tableRows},getCurrentTableNum:function(e){return e.currentTable.num},getCurrentTable:function(e){return e.currentTable},getCurrentTableRows:function(e){return e.currentTable.rows},getNewRow:function(e){return e.newRow[e.currentTable.name]}},mutations:{checkLogin:function(e){W("GET",e.serverURL+"login").then(function(t){t.res&&(e.username=t.res)}).catch(function(t){e.statusBar.text="Ошибка проверки подключения: ".concat(t)})},logout:function(e){W("POST",e.serverURL+"logout"),e.username=null,e.currentTable.rows=[]},login:function(e,t){var a=this;t.username&&t.password?W("POST",e.serverURL+"login",t).then(function(t){t.res&&t.res.username?(e.statusBar.text="Успешная авториация: ".concat(t.res.username),e.username=t.res.username,a.dispatch("selectTable",e.currentTable.num)):e.statusBar.text="Неизвестный ответ: ".concat(t)}).catch(function(t){e.statusBar.text="Ошибка аутентификации: ".concat(t)}):e.statusBar.text="Имя пользователя и пароль должны быть заполнены!!!"},showStatusBar:function(e,t){e.statusBar={text:t,hidden:!1}},selectTableName:function(e,t){for(var a in e.tableList)if(e.tableList[a].name===t)return this.commit("selectTable",a);this.commit("showStatusBar","Не найдена таблица ".concat(t))},selectTable:function(e,t){var a=this,r=+t,s=e.tableList[r].name,i=e.tableList[r].columns;e.currentTable=Object(_["a"])({},e.currentTable,{num:r,name:s,curPage:1,columns:i});for(var o=[],u=function(t){var a=i[t].link;if(a){var r={},s=W("GET",e.serverURL+a.table+"/toarray").then(function(s){return s.result&&s.result instanceof Array&&s.result.forEach(function(e){r[e[a.keyField]]={value:e[a.valueField],image:e[a.imageField]}}),n["a"].set(e.currentTable.columns[t],"linkList",r)});o.push(s)}},l=0;l<i.length;l++)u(l);o.length>0?Promise.all(o).then(this.dispatch("selectPage",1)).catch(function(e){a.state.statusBar.text="error when load linkList: "+e}):this.dispatch("selectPage",1)},selectPage:function(e,t){var a=this;e.statusBar.text="Loading page ".concat(t," data...");var n=e.currentTable,r=n.name,s=n.perPage;W("GET",e.serverURL+r+"/page/"+t+"/perpage/"+s).then(function(n){n.err?e.statusBar.text=n:(e.currentTable.rows=n.result,e.currentTable.curPage=+t,e.statusBar.text="page ".concat(t," loaded successfull"),a.dispatch("countTableLength"))}).catch(function(a){e.statusBar.text="error: ".concat(a," when loading page ").concat(t)})},countTableLength:function(e){var t=e.currentTable.name;W("GET",e.serverURL+t+"/count").then(function(t){e.currentTable.length=t.result,e.currentTable.maxPage=Math.ceil(t.result/e.currentTable.perPage),e.statusBar.text=t})},onEditRow:function(e,t){var a=JSON.parse(JSON.stringify(t));n["a"].set(e.newRow,[e.currentTable.name],a)},replaceRow:function(e,t){var a=e.tableList[e.currentTable.num];e.tableRows[a.name].forEach(function(r,s){+r.id===+t.id&&Object.keys(t).forEach(function(r){n["a"].set(e.tableRows[a.name][s],r,t[r])})})},onChangePerPage:function(e,t){e.currentTable.curPage=1,e.currentTable.perPage=+t,this.dispatch("selectTable",e.currentTable.num).then(this.dispatch("selectPage",1))},delNewRowImage:function(e,t){var a=t.imageId,n=t.columnName,r=e.currentTable.name,s=e.newRow[r][n];s instanceof Array?s.splice(s.indexOf(a),1):s=null,Object.assign(e.newRow[r][n],s)},viewImage:function(e,t){e.imageSrc=t}},actions:{checkLogin:function(e){var t=e.commit;t("checkLogin")},login:function(e,t){var a=e.commit;a("login",t)},logout:function(e){var t=e.commit;t("logout")},delNewRowImage:function(e,t){var a=e.commit,n=t.imageId,r=t.columnName;console.log(n,r),a("delNewRowImage",{imageId:n,columnName:r})},selectTable:function(e,t){var a=e.commit;a("selectTable",t)},selectTableName:function(e,t){var a=e.commit;a("selectTableName",t)},selectPage:function(e,t){var a=e.commit;a("selectPage",t)},putRow:function(e,t){var a=e.commit,n=e.state;W("PUT",n.serverURL+n.currentTable.name+"/"+t._id,t).then(function(e){a("selectPage",n.currentTable.curPage),a("showStatusBar","result: "+e)}).catch(function(e){return a("showStatusBar","error: "+e)})},postRow:function(e,t){var a=e.commit,n=e.state,r=n.tableList[n.currentTable.num];W("POST",n.serverURL+r.name,t).then(function(e){a("selectPage",n.currentTable.curPage),a("showStatusBar","result: "+e.req)}).catch(function(e){return a("showStatusBar","error: "+e)})},onSelectPage:function(e,t){var a=e.commit;e.state;a("selectPage",t)},countTableLength:function(e){var t=e.commit;t("countTableLength")},onChangePerPage:function(e,t){var a=e.commit;e.state;a("onChangePerPage",t)},showStatusText:function(e,t){var a=e.commit;a("showStatusBar",t)},viewImage:function(e,t){var a=e.commit;a("viewImage",t)}}}),Be={name:"HotelsMain",data:function(){return{message:"Это супер-пупер прога про отели"}},beforeRouteEnter:function(e,t,a){var n=this,r=Ee.dispatch("selectTableName",e.params.tableName);r.then(function(){return a()}).catch(function(e){return n.$store.dispatch("showStatusText",e)})},beforeRouteUpdate:function(e,t,a){this.fetchData(e,t,a)},computed:Object(_["a"])({},Object(T["c"])(["links"]),Object(T["b"])(["getCurrentTable"])),methods:{fetchData:function(e,t,a){var n=this;if(this.getCurrentTable.name!==e.params.tableName)var r=this.$store.dispatch("selectTableName",e.params.tableName);else this.getCurrentTable.curPage!==e.params.page?r=this.$store.dispatch("onSelectPage",e.params.page):this.$store.dispatch("showStatusText","cant fetch data").then(function(){return a(!1)}).catch(function(e){return n.$store.dispatch("showStatusText",e)});r.then(function(){return a()}).catch(function(e){return n.$store.dispatch("showStatusText",e)})}},components:{ViewTableList:V,ViewTable:he,AppMainHeader:x,AppMainSide:F,StatusBar:d,ViewImage:Ae,store:Ee}},Ie=Be,Ve=(a("f1d5"),Object(c["a"])(Ie,$e,Le,!1,null,"bd30b27e",null));Ve.options.__file="TablesView.vue";var Me=Ve.exports;n["a"].use(h["a"]);var Ue=new h["a"]({routes:[{path:"/",name:"main",component:Te},{path:"/table/:tableName/page/:page",name:"table",component:Me},{path:"/about",name:"about",component:function(){return a.e("about").then(a.bind(null,"f820"))}},{path:"/login",name:"login",component:xe}]});n["a"].config.productionTip=!1;var qe=a("189c");Ee.state.tableList=qe,Ee.state.tableList.forEach(function(e){n["a"].set(Ee.state.newRow,e.name,{})}),Ee.dispatch("checkLogin").then(new n["a"]({router:Ue,store:Ee,render:function(e){return e(b)}}).$mount("#app"))},"5b60":function(e,t,a){"use strict";var n=a("c596"),r=a.n(n);r.a},"5d07":function(e,t,a){},"5fc2":function(e,t,a){},6707:function(e,t,a){},6718:function(e,t,a){"use strict";var n=a("ba2c"),r=a.n(n);r.a},"7faf":function(e,t,a){"use strict";var n=a("0af1"),r=a.n(n);r.a},"82a5":function(e,t,a){},"8f01":function(e,t,a){},9463:function(e,t,a){"use strict";var n=a("f2a8"),r=a.n(n);r.a},9614:function(e,t,a){"use strict";var n=a("a807"),r=a.n(n);r.a},a807:function(e,t,a){},ba2c:function(e,t,a){},c596:function(e,t,a){},d6a1:function(e,t,a){},f1d5:function(e,t,a){"use strict";var n=a("fa9b"),r=a.n(n);r.a},f2a8:function(e,t,a){},f47c:function(e,t,a){"use strict";var n=a("6707"),r=a.n(n);r.a},fa9b:function(e,t,a){},faa2:function(e,t,a){"use strict";var n=a("0f41"),r=a.n(n);r.a}});
//# sourceMappingURL=app.a41056d8.js.map