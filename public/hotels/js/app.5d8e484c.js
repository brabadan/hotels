(function(e){function t(t){for(var a,o,i=t[0],u=t[1],l=t[2],c=0,d=[];c<i.length;c++)o=i[c],r[o]&&d.push(r[o][0]),r[o]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(e[a]=u[a]);m&&m(t);while(d.length)d.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],a=!0,o=1;o<n.length;o++){var u=n[o];0!==r[u]&&(a=!1)}a&&(s.splice(t--,1),e=i(i.s=n[0]))}return e}var a={},r={app:0},s=[];function o(e){return i.p+"js/"+({about:"about"}[e]||e)+"."+{about:"b0ff3b1c"}[e]+".js"}function i(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n=r[e];if(0!==n)if(n)t.push(n[2]);else{var a=new Promise(function(t,a){n=r[e]=[t,a]});t.push(n[2]=a);var s,u=document.getElementsByTagName("head")[0],l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=o(e),s=function(t){l.onerror=l.onload=null,clearTimeout(c);var n=r[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),s=t&&t.target&&t.target.src,o=new Error("Loading chunk "+e+" failed.\n("+a+": "+s+")");o.type=a,o.request=s,n[1](o)}r[e]=void 0}};var c=setTimeout(function(){s({type:"timeout",target:l})},12e4);l.onerror=l.onload=s,u.appendChild(l)}return Promise.all(t)},i.m=e,i.c=a,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(n,a,function(t){return e[t]}.bind(null,a));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/hotel_admin/",i.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var c=0;c<u.length;c++)t(u[c]);var m=l;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"009b":function(e,t,n){"use strict";var a=n("d6a1"),r=n.n(a);r.a},"0af1":function(e,t,n){},"189c":function(e){e.exports=[{aboutTable:"Пользователи системы",name:"users",rightsRequired:"A",columns:[{name:"createdAt",type:"date",readonly:!0},{name:"createdBy",type:"number",readonly:!0,link:{table:"users",keyField:"_id",valueField:"name"}},{name:"name",type:"text",required:!0},{name:"rights",type:"text"},{name:"about_user",type:"textarea",about_column:"Уточняющая информация о пользователе"}]},{aboutTable:"Отели",name:"hotels",columns:[{name:"createdAt",type:"date",readonly:!0},{name:"updatedAt",type:"date",readonly:!0},{name:"createdBy",type:"number",readonly:!0,link:{table:"users",keyField:"_id",valueField:"name"}},{name:"name",type:"text",required:!0},{name:"about_hotel",type:"textarea","about-column":"Уточняющая информация об Отеле"},{name:"images",type:"image",array:!0}]},{aboutTable:"Комнаты отеля",name:"rooms",columns:[{name:"createdAt",type:"date",readonly:!0},{name:"updatedAt",type:"date",readonly:!0},{name:"createdBy",type:"number",readonly:!0,link:{table:"users",keyField:"_id",valueField:"name"}},{name:"hotel_id",type:"text",link:{table:"hotels",keyField:"_id",valueField:"name"}},{name:"room_number",type:"text",required:!0},{name:"about_room",type:"textarea",about_column:"Уточняющая информация о комнате"},{name:"images",type:"image",array:!0}]},{aboutTable:"Модели предметов",name:"item_models",columns:[{name:"createdAt",type:"date",readonly:!0},{name:"updatedAt",type:"date",readonly:!0},{name:"createdBy",type:"text",readonly:!0,link:{table:"users",keyField:"_id",valueField:"name"}},{name:"name",type:"text",required:!0},{name:"description",type:"textarea",about_column:"Уточняющая информация о модели предмета"},{name:"images",type:"image",array:!0}]},{aboutTable:"Предметы",name:"items",columns:[{name:"createdAt",type:"date",readonly:!0},{name:"updatedAt",type:"date",readonly:!0},{name:"createdBy",type:"text",readonly:!0,link:{table:"users",keyField:"_id",valueField:"name"}},{name:"item_model_id",type:"text",link:{table:"item_models",keyField:"_id",valueField:"name"}},{name:"description",type:"textarea",about_column:"Уточняющая информация о предмете",required:!0},{name:"images",type:"image",array:!0}]},{aboutTable:"Картинки",name:"images",columns:[{name:"createdAt",type:"date",readonly:!0},{name:"updatedAt",type:"date",readonly:!0},{name:"createdBy",type:"number",readonly:!0,link:{table:"users",keyField:"_id",valueField:"name"}},{name:"name",type:"text",required:!0},{name:"_id",type:"image"}]}]},"1fb9":function(e,t,n){},"260a":function(e,t,n){"use strict";var a=n("5d07"),r=n.n(a);r.a},2709:function(e,t,n){"use strict";var a=n("2b09"),r=n.n(a);r.a},2735:function(e,t,n){},"2b09":function(e,t,n){},"3eff":function(e,t,n){"use strict";var a=n("2735"),r=n.n(a);r.a},"40d7":function(e,t,n){"use strict";var a=n("1fb9"),r=n.n(a);r.a},"4abf":function(e,t,n){"use strict";var a=n("82a5"),r=n.n(a);r.a},"53d0":function(e,t,n){"use strict";var a=n("7036"),r=n.n(a);r.a},"56d7":function(e,t,n){"use strict";n.r(t);n("7f7f"),n("ac6a"),n("cadf"),n("551c"),n("097d");var a=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[e._v("Main")]),e._v("\n        |\n        "),n("router-link",{attrs:{to:"/about"}},[e._v("About")]),e._v("\n        |\n        "),n("router-link",{attrs:{to:"/login"}},[e._v("Login")]),this.$store.state.username?n("label",{attrs:{id:"user"}},[e._v("\n            User: "+e._s(this.$store.state.username)+"\n            "),n("button",{on:{click:e.logout}},[e._v("logout")])]):e._e()],1),n("StatusBar"),n("router-view")],1)},s=[],o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{directives:[{name:"show",rawName:"v-show",value:!this.$store.state.statusBar.hidden,expression:"!this.$store.state.statusBar.hidden"}]},[e._v("\n    "+e._s(this.$store.state.statusBar.text)+"\n")])},i=[],u={name:"statusBar"},l=u,c=(n("009b"),n("2877")),m=Object(c["a"])(l,o,i,!1,null,"0fb6f070",null);m.options.__file="StatusBar.vue";var d=m.exports,p={methods:{logout:function(){this.$store.dispatch("logout")}},components:{StatusBar:d}},g=p,f=(n("7faf"),Object(c["a"])(g,r,s,!1,null,null,null));f.options.__file="App.vue";var b=f.exports,v=n("8c4f"),h=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-main"},[n("AppMainHeader",{staticClass:"app-main-header",attrs:{headerText:e.message}}),n("AppMainSide",{staticClass:"app-main-side",attrs:{links:e.links}}),n("ViewTableList",{staticClass:"app-main-view-table-list"}),n("ViewTable",{staticClass:"app-main-view-table"})],1)},w=[],_=n("c93e"),y=n("2f62"),T=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-main-header"},[e._v("\n    "+e._s(e.headerText)+"\n")])},P=[],R={name:"AppMainHeader",props:{headerText:String}},C=R,x=(n("4abf"),Object(c["a"])(C,T,P,!1,null,"d248d34e",null));x.options.__file="AppMainHeader.vue";var $=x.exports,k=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-main-side"},[n("strong",[e._v("Режим работы:")]),n("ul",e._l(e.links,function(t,a){return n("li",{key:a},[e._v(e._s(t.name)+"\n        ")])}))])},L=[],O={name:"AppMainSide",props:{links:Array}},N=O,S=(n("2709"),Object(c["a"])(N,k,L,!1,null,"58dabef8",null));S.options.__file="AppMainSide.vue";var j=S.exports,E=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"view-table-list"},[e._m(0),n("ul",e._l(e.getTableList,function(t,a){return n("li",{key:a,class:[a==e.getCurrentTableNum?"selected":""],attrs:{"data-index":a},on:{click:e.onSelectTable}},[e._v("\n            "+e._s(t.name)+"\n        ")])}))])},B=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"header"},[n("strong",[e._v("Список таблиц:")])])}],A={name:"ViewTableList",computed:Object(_["a"])({},Object(y["b"])(["getTableList","getCurrentTableNum"])),methods:{onSelectTable:function(e){this.$store.dispatch("selectTable",e.target.dataset.index)}}},F=A,M=(n("40d7"),Object(c["a"])(F,E,B,!1,null,"4e18fe67",null));M.options.__file="ViewTableList.vue";var V=M.exports,U=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"view-table"},[e.getCurrentTable?n("table",[n("caption",[n("strong",[e._v(e._s(e.getCurrentTable.aboutTable))]),n("Paginator",{staticClass:"paginator"}),n("PerPage",{staticClass:"per-page"})],1),n("thead",[n("tr",[n("th",[e._v("№")]),e._l(e.getCurrentTable.columns,function(t,a){return n("th",{key:a},[e._v("\n                    "+e._s(t.name)+"\n                ")])}),n("th",{staticClass:"action-column"})],2)]),n("ViewTableFooter"),n("ViewTablePage")],1):e._e()])},q=[],I=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("tbody",e._l(e.getCurrentTable.rows,function(t,a){return n("tr",{key:t._id,class:e.getNewRow._id===t._id?"onedit":""},[n("td",[e._v(e._s(a+1+(e.getCurrentTable.curPage-1)*e.getCurrentTable.perPage))]),e._l(e.getCurrentTable.columns,function(a){return n("td",{key:t._id+"."+a.name},["image"===a.type&&a.array?n("div",e._l(t[a.name],function(e){return n("img",{attrs:{src:"images/"+e}})})):"image"===a.type?n("div",[n("img",{attrs:{src:"images/"+t[a.name]}})]):n("span",[e._v("\n        "+e._s(e.getFieldData(a,t))+"\n            ")])])}),n("td",[n("button",{on:{click:function(n){e.onEditRow(t)}}},[e._v("\n            Редактировать\n        ")])])],2)}))},H=[],J=(n("b54a"),{name:"ViewTablePage",computed:Object(_["a"])({},Object(y["b"])(["getCurrentTable","getNewRow"])),methods:{getImageArr:function(e,t){var n=t[e.name];return n instanceof Array?n:n?[n]:[]},onEditRow:function(e){this.$store.commit("onEditRow",e)},getFieldData:function(e,t){return e.link&&e.linkList?e.linkList[t[e.name]]||"not found :(":"date"===e.type?(t[e.name]+"").slice(0,10):t[e.name]}},components:{Vue:a["a"]}}),G=J,X=(n("c1ec"),Object(c["a"])(G,I,H,!1,null,"26a31040",null));X.options.__file="ViewTablePage.vue";var D=X.exports,z=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("tfoot",[n("tr",[n("td",[e._v("new:")]),e._l(e.getCurrentTable.columns,function(t){return n("td",{key:t.name},[t.readonly?n("span",[e._v("\n                    "+e._s(e.getNewRowField(t))+"\n                ")]):t.link?n("select",{directives:[{name:"model",rawName:"v-model",value:e.$store.state.newRow[e.getCurrentTable.name][t.name],expression:"$store.state.newRow[getCurrentTable.name][column.name]"}],on:{change:function(n){var a=Array.prototype.filter.call(n.target.options,function(e){return e.selected}).map(function(e){var t="_value"in e?e._value:e.value;return t});e.$set(e.$store.state.newRow[e.getCurrentTable.name],t.name,n.target.multiple?a:a[0])}}},e._l(t.linkList,function(t,a){return n("option",{key:a,domProps:{value:a}},[e._v("\n                "+e._s(t)+"\n            ")])})):"image"===t.type?n("div",{staticClass:"image-list"},[0===e.images.files.length?n("div",[t.array?n("div",e._l(e.$store.state.newRow[e.getCurrentTable.name][t.name],function(a,r){return n("div",{staticClass:"image"},[n("img",{attrs:{src:"images/"+a}}),n("div",{staticClass:"image-close",on:{click:function(n){e.$store.state.newRow[e.getCurrentTable.name][t.name].splice(r,1)}}},[e._v("X\n                        ")])])})):e.$store.state.newRow[e.getCurrentTable.name][t.name]?n("div",[n("div",{staticClass:"image"},[n("img",{attrs:{src:"images/"+e.$store.state.newRow[e.getCurrentTable.name][t.name]}}),n("div",{staticClass:"image-close",on:{click:function(n){e.$store.state.newRow[e.getCurrentTable.name][t.name].splice(e.index,1)}}},[e._v("X\n                        ")])])]):e._e()]):e._e(),n("div",{staticClass:"input-files"},[n("input",{attrs:{type:"file",multiple:t.array},on:{change:e.onChangeFiles}}),e.images.files.length>0?n("button",{on:{click:e.clearInputFiles}},[e._v("X\n                ")]):e._e()]),e._l(e.images.files,function(t){return n("img",{attrs:{src:e.file2Src(t)}})})],2):"textarea"!==t.type?"checkbox"===t.type?n("input",{directives:[{name:"model",rawName:"v-model",value:e.$store.state.newRow[e.getCurrentTable.name][t.name],expression:"$store.state.newRow[getCurrentTable.name][column.name]"}],attrs:{title:t.about_column?t.about_column:t.name,type:"checkbox"},domProps:{checked:Array.isArray(e.$store.state.newRow[e.getCurrentTable.name][t.name])?e._i(e.$store.state.newRow[e.getCurrentTable.name][t.name],null)>-1:e.$store.state.newRow[e.getCurrentTable.name][t.name]},on:{change:function(n){var a=e.$store.state.newRow[e.getCurrentTable.name][t.name],r=n.target,s=!!r.checked;if(Array.isArray(a)){var o=null,i=e._i(a,o);r.checked?i<0&&e.$set(e.$store.state.newRow[e.getCurrentTable.name],t.name,a.concat([o])):i>-1&&e.$set(e.$store.state.newRow[e.getCurrentTable.name],t.name,a.slice(0,i).concat(a.slice(i+1)))}else e.$set(e.$store.state.newRow[e.getCurrentTable.name],t.name,s)}}}):"radio"===t.type?n("input",{directives:[{name:"model",rawName:"v-model",value:e.$store.state.newRow[e.getCurrentTable.name][t.name],expression:"$store.state.newRow[getCurrentTable.name][column.name]"}],attrs:{title:t.about_column?t.about_column:t.name,type:"radio"},domProps:{checked:e._q(e.$store.state.newRow[e.getCurrentTable.name][t.name],null)},on:{change:function(n){e.$set(e.$store.state.newRow[e.getCurrentTable.name],t.name,null)}}}):n("input",{directives:[{name:"model",rawName:"v-model",value:e.$store.state.newRow[e.getCurrentTable.name][t.name],expression:"$store.state.newRow[getCurrentTable.name][column.name]"}],attrs:{title:t.about_column?t.about_column:t.name,type:t.type},domProps:{value:e.$store.state.newRow[e.getCurrentTable.name][t.name]},on:{input:function(n){n.target.composing||e.$set(e.$store.state.newRow[e.getCurrentTable.name],t.name,n.target.value)}}}):n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.$store.state.newRow[e.getCurrentTable.name][t.name],expression:"$store.state.newRow[getCurrentTable.name][column.name]"}],attrs:{title:t.about_column?t.about_column:t.name},domProps:{value:e.$store.state.newRow[e.getCurrentTable.name][t.name]},on:{input:function(n){n.target.composing||e.$set(e.$store.state.newRow[e.getCurrentTable.name],t.name,n.target.value)}}})])}),n("td",[n("button",{on:{click:e.rowPutPost}},[e._v("\n            "+e._s(e.buttonName())+"\n        ")]),n("button",{on:{click:e.clearNewRow}},[e._v("\n            Очист.\n        ")])])],2)])},K=[];n("6762"),n("2fdb");function Q(e,t,n,a){var r="application/json; charset=utf-8";return new Promise(function(s,o){var i=new XMLHttpRequest;i.open(e,t),i.onreadystatechange=function(){if(4===i.readyState)if(200===i.status){try{var e=JSON.parse(i.response)}catch(e){o(e)}s(e)}else o(i.status)},n?a?i.send(n):(i.setRequestHeader("Content-type",r),i.send(JSON.stringify(n))):i.send()})}var W=Q,Y={name:"ViewTableFooter",data:function(){return{images:{input:HTMLInputElement,files:[],array:!1}}},computed:Object(_["a"])({},Object(y["b"])(["getCurrentTable","getNewRow"])),methods:{clearInputFiles:function(){this.images.input.value="",this.images.files=[]},file2Src:function(e){return window.URL.createObjectURL(e)},onChangeFiles:function(e){var t="";this.images.files=[],this.images.input=e.srcElement;for(var n=0;n<e.srcElement.files.length;n++)e.srcElement.files[n].type.includes("image")&&e.srcElement.files[n].size<105e4?this.images.files.push(e.srcElement.files[n]):t+=e.srcElement.files[n].name+", ";t&&(t="Для загрузки изображений не подходят файлы: "+t,this.$store.dispatch("showStatusText",t))},buttonName:function(){return this.getNewRow&&this.getNewRow["_id"]?"Изм.":"Доб."},rowPutPost:function(){var e=this,t=this.getCurrentTable,n=this.getNewRow,a="",r="";if(t.columns.forEach(function(e){"image"===e.type&&(r=e.name),e.readonly||!e.required||n[e.name]||(a||(a="Не заполнено обязательное поле:"),a+=" "+e.name)}),a)return this.$store.dispatch("showStatusText",a);if(this.images.files.length>0){var s=new FormData;this.images.files.forEach(function(e){s.append("file",e)});var o=!0;W("POST",this.$store.state.serverURL+"images/",s,o).then(function(t){n[r]=t.res,e.sendNewRow(n)}).catch(function(e){console.dir(e)})}else this.sendNewRow(n)},sendNewRow:function(e){e._id?this.$store.dispatch("putRow",e).then(this.clearNewRow):this.$store.dispatch("postRow",e).then(this.clearNewRow)},clearNewRow:function(){var e=this;this.$store.state.newRow[this.getCurrentTable.name]._id=null,this.images.files=[],this.images.input.value="",this.getCurrentTable.columns.forEach(function(t){e.$store.state.newRow[e.getCurrentTable.name][t.name]=null})},getNewRowField:function(e){var t=this.getNewRow;return t[e.name]?e.link&&e.linkList?e.linkList[t[e.name]]||"not found :(":"date"===e.type?(t[e.name]+"").slice(0,10):t[e.name]:""}}},Z=Y,ee=(n("53d0"),Object(c["a"])(Z,z,K,!1,null,"333eaab8",null));ee.options.__file="ViewTableFooter.vue";var te=ee.exports,ne=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e._v("\n    Стр.\n    "),e._l(e.getPages,function(t,a){return n("button",{key:a,attrs:{"data-page":t,disabled:e.getCurrentTable.curPage==t||0==t},on:{click:e.onSelectPage}},[e._v("\n        "+e._s(t>0?t:"...")+"\n    ")])})],2)},ae=[],re={name:"Paginator",computed:Object(_["a"])({},Object(y["b"])(["getCurrentTable"]),{getPages:function(){var e=[],t=this.getCurrentTable,n=t.curPage,a=t.maxPage;if(n<5)for(var r=1;r<=Math.min(n+2,a);r++)e.push(r);else{e=[1,0];for(var s=n-2;s<=Math.min(n+2,a);s++)e.push(s)}return n<a-3&&e.push(0),n<a-2&&e.push(a),e}}),methods:{onSelectPage:function(e){this.$store.dispatch("onSelectPage",e.target.dataset.page)}}},se=re,oe=(n("3eff"),Object(c["a"])(se,ne,ae,!1,null,"1b959e49",null));oe.options.__file="Paginator.vue";var ie=oe.exports,ue=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e._v("\n    По\n    "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.perPage,expression:"perPage"}],attrs:{type:"number"},domProps:{value:e.perPage},on:{change:e.onChangePerPage,input:function(t){t.target.composing||(e.perPage=t.target.value)}}}),e._v("\n    строк\n")])},le=[],ce={name:"PerPage",created:function(){this.perPage=this.$store.state.currentTable.perPage},data:function(){return{perPage:1}},methods:{onChangePerPage:function(){this.perPage>=1?this.$store.dispatch("onChangePerPage",this.perPage):this.perPage=1}}},me=ce,de=(n("260a"),Object(c["a"])(me,ue,le,!1,null,"38e2aad8",null));de.options.__file="PerPage.vue";var pe=de.exports,ge={name:"ViewTable",computed:Object(_["a"])({},Object(y["b"])(["getCurrentTable"])),components:{ViewTableFooter:te,ViewTablePage:D,Paginator:ie,PerPage:pe}},fe=ge,be=(n("5b60"),Object(c["a"])(fe,U,q,!1,null,"3c77bf44",null));be.options.__file="ViewTable.vue";var ve=be.exports,he={name:"HotelsMain",data:function(){return{message:"Это супер-пупер прога про отели"}},computed:Object(_["a"])({},Object(y["c"])(["links"]),Object(y["b"])(["tableList"])),components:{ViewTableList:V,ViewTable:ve,AppMainHeader:$,AppMainSide:j,StatusBar:d}},we=he,_e=(n("6561"),Object(c["a"])(we,h,w,!1,null,"67eb6bef",null));_e.options.__file="HotelsMain.vue";var ye=_e.exports,Te=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("label",[e._v("User name:\n        "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.username,expression:"username"}],attrs:{type:"text"},domProps:{value:e.username},on:{input:function(t){t.target.composing||(e.username=t.target.value)}}})]),n("label",[e._v("password:\n        "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"password"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}})]),n("button",{on:{click:e.login}},[e._v("login")])])},Pe=[],Re={name:"Login",data:function(){return{username:"",password:""}},methods:{login:function(){var e={username:this.username,password:this.password};this.$store.dispatch("login",e)}}},Ce=Re,xe=(n("9463"),Object(c["a"])(Ce,Te,Pe,!1,null,"329649c0",null));xe.options.__file="Login.vue";var $e=xe.exports;a["a"].use(v["a"]);var ke=new v["a"]({routes:[{path:"/",name:"main",component:ye},{path:"/about",name:"about",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/login",name:"login",component:$e}]});n("f751"),n("456d");a["a"].use(y["a"]);var Le=new y["a"].Store({state:{serverURL:"",username:"",links:[{name:"Конфигурация"},{name:"Работаем с отелем"}],tableList:[],currentTable:{num:null,name:"",curPage:1,maxPage:0,perPage:5,columns:[],rows:[],length:0},statusBar:{text:"statusBar",hidden:!1},currentUser:0,newRow:{}},getters:{getTableList:function(e){return e.tableList},getTableRows:function(e){return e.tableRows},getCurrentTableNum:function(e){return e.currentTable.num},getCurrentTable:function(e){return e.currentTable},getCurrentTableRows:function(e){return e.currentTable.rows},getNewRow:function(e){return e.newRow[e.currentTable.name]}},mutations:{checkLogin:function(e){W("GET",e.serverURL+"login").then(function(t){t.res&&(e.username=t.res)}).catch(function(t){e.statusBar.text="Ошибка проверки подключения: ".concat(t)})},logout:function(e){W("POST",e.serverURL+"logout"),e.username=null,e.currentTable.rows=[]},login:function(e,t){var n=this;t.username&&t.password?W("POST",e.serverURL+"login",t).then(function(t){t.res&&t.res.username?(e.statusBar.text="Успешная авториация: ".concat(t.res.username),e.username=t.res.username,n.dispatch("selectTable",e.currentTable.num)):e.statusBar.text="Неизвестный ответ: ".concat(t)}).catch(function(t){e.statusBar.text="Ошибка аутентификации: ".concat(t)}):e.statusBar.text="Имя пользователя и пароль должны быть заполнены!!!"},showStatusBar:function(e,t){e.statusBar={text:t,hidden:!1}},selectTable:function(e,t){var n=this,r=+t,s=e.tableList[r].name,o=e.tableList[r].columns;e.currentTable=Object(_["a"])({},e.currentTable,{num:r,name:s,curPage:1,columns:o});for(var i=[],u=function(t){var n=o[t].link;if(n){var r={},s=W("GET",e.serverURL+n.table+"/toarray").then(function(s){return s.result&&s.result instanceof Array&&s.result.forEach(function(e){r[e[n.keyField]]=e[n.valueField]}),a["a"].set(e.currentTable.columns[t],"linkList",r)});i.push(s)}},l=0;l<o.length;l++)u(l);i.length>0?Promise.all(i).then(this.dispatch("selectPage",1)).catch(function(e){n.state.statusBar.text="error when load linkList: "+e}):this.dispatch("selectPage",1)},selectPage:function(e,t){var n=this;e.statusBar.text="Loading page ".concat(t," data...");var a=e.currentTable,r=a.name,s=a.perPage;W("GET",e.serverURL+r+"/page/"+t+"/perpage/"+s).then(function(a){a.err?e.statusBar.text=a:(e.currentTable.rows=a.result,e.currentTable.curPage=+t,e.statusBar.text="page ".concat(t," loaded successfull"),n.dispatch("countTableLength"))}).catch(function(n){e.statusBar.text="error: ".concat(n," when loading page ").concat(t)})},countTableLength:function(e){var t=e.currentTable.name;W("GET",e.serverURL+t+"/count").then(function(t){e.currentTable.length=t.result,e.currentTable.maxPage=Math.ceil(t.result/e.currentTable.perPage),e.statusBar.text=t})},onEditRow:function(e,t){var n=JSON.parse(JSON.stringify(t));a["a"].set(e.newRow,[e.currentTable.name],n)},replaceRow:function(e,t){var n=e.tableList[e.currentTable.num];e.tableRows[n.name].forEach(function(r,s){+r.id===+t.id&&Object.keys(t).forEach(function(r){a["a"].set(e.tableRows[n.name][s],r,t[r])})})},onChangePerPage:function(e,t){e.currentTable.curPage=1,e.currentTable.perPage=+t,this.dispatch("selectTable",e.currentTable.num).then(this.dispatch("selectPage",1))},delNewRowImage:function(e,t){var n=t.imageId,a=t.columnName,r=e.currentTable.name,s=e.newRow[r][a];s instanceof Array?s.splice(s.indexOf(n),1):s=null,Object.assign(e.newRow[r][a],s)}},actions:{checkLogin:function(e){var t=e.commit;t("checkLogin")},login:function(e,t){var n=e.commit;n("login",t)},logout:function(e){var t=e.commit;t("logout")},delNewRowImage:function(e,t){var n=e.commit,a=t.imageId,r=t.columnName;console.log(a,r),n("delNewRowImage",{imageId:a,columnName:r})},selectTable:function(e,t){var n=e.commit;n("selectTable",t)},selectPage:function(e,t){var n=e.commit;n("selectPage",t)},putRow:function(e,t){var n=e.commit,a=e.state;W("PUT",a.serverURL+a.currentTable.name+"/"+t._id,t).then(function(e){n("selectPage",a.currentTable.curPage),n("showStatusBar","result: "+e)}).catch(function(e){return n("showStatusBar","error: "+e)})},postRow:function(e,t){var n=e.commit,a=e.state,r=a.tableList[a.currentTable.num];W("POST",a.serverURL+r.name,t).then(function(e){n("selectPage",a.currentTable.curPage),n("showStatusBar","result: "+e.req)}).catch(function(e){return n("showStatusBar","error: "+e)})},onSelectPage:function(e,t){var n=e.commit;e.state;n("selectPage",t)},countTableLength:function(e){var t=e.commit;t("countTableLength")},onChangePerPage:function(e,t){var n=e.commit;e.state;n("onChangePerPage",t)},showStatusText:function(e,t){var n=e.commit;n("showStatusBar",t)}}}),Oe=n("189c");a["a"].config.productionTip=!1;var Ne=new a["a"]({router:ke,store:Le,render:function(e){return e(b)}}).$mount("#app");Ne.$store.state.tableList=Oe,Ne.$store.state.tableList.forEach(function(e){a["a"].set(Ne.$store.state.newRow,e.name,{})}),Ne.$store.dispatch("checkLogin").then(Ne.$store.dispatch("selectTable",0)),console.dir(Ne)},"5b60":function(e,t,n){"use strict";var a=n("c596"),r=n.n(a);r.a},"5d07":function(e,t,n){},6561:function(e,t,n){"use strict";var a=n("cd23"),r=n.n(a);r.a},7036:function(e,t,n){},"7faf":function(e,t,n){"use strict";var a=n("0af1"),r=n.n(a);r.a},"82a5":function(e,t,n){},9463:function(e,t,n){"use strict";var a=n("f2a8"),r=n.n(a);r.a},abc8:function(e,t,n){},c1ec:function(e,t,n){"use strict";var a=n("abc8"),r=n.n(a);r.a},c596:function(e,t,n){},cd23:function(e,t,n){},d6a1:function(e,t,n){},f2a8:function(e,t,n){}});
//# sourceMappingURL=app.5d8e484c.js.map