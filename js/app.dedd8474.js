(function(t){function e(e){for(var s,o,r=e[0],l=e[1],c=e[2],f=0,p=[];f<r.length;f++)o=r[f],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&p.push(i[o][0]),i[o]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);u&&u(e);while(p.length)p.shift()();return n.push.apply(n,c||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],s=!0,r=1;r<a.length;r++){var l=a[r];0!==i[l]&&(s=!1)}s&&(n.splice(e--,1),t=o(o.s=a[0]))}return t}var s={},i={app:0},n=[];function o(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=s,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)o.d(a,s,function(e){return t[e]}.bind(null,s));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/test2uit-dist/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=e,r=r.slice();for(var c=0;c<r.length;c++)e(r[c]);var u=l;n.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},1978:function(t,e,a){t.exports=a.p+"img/ribbon-design.81c3a86e.svg"},"1ae4":function(t,e,a){t.exports=a.p+"img/logo.aa281cf3.svg"},2776:function(t,e,a){t.exports=a.p+"img/jewelry.ae62fc54.svg"},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("f751"),a("097d");var s=a("2b0e"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"wrapper",attrs:{id:"app"}},[a("catalog")],1)},n=[],o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("header",{staticClass:"header"},[t._m(0),a("div",{staticClass:"burger",class:{active:t.burgerState},on:{click:function(e){t.burgerState=!t.burgerState}}},[a("span"),a("span"),a("span")]),a("div",{staticClass:"burger-content",class:{active:t.burgerState}},[t._m(1),t._m(2),t._m(3)])]),a("section",{staticClass:"filter"},[a("div",{staticClass:"container"},[a("div",{staticClass:"filter__wrap"},[a("select",{directives:[{name:"model",rawName:"v-model",value:t.filter.brand,expression:"filter.brand"}],staticClass:"selection-box",attrs:{name:"brand",id:""},on:{change:[function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.filter,"brand",e.target.multiple?a:a[0])},t.onFilter]}},[a("option",{attrs:{value:"",disabled:"",selected:""}},[t._v("Бренд")]),a("option",{attrs:{value:"1"}},[t._v("option 1")]),a("option",{attrs:{value:"2"}},[t._v("option 2")]),a("option",{attrs:{value:"3"}},[t._v("option 3")])]),a("select",{directives:[{name:"model",rawName:"v-model",value:t.filter.price,expression:"filter.price"}],staticClass:"selection-box",attrs:{name:"price",id:""},on:{change:[function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.filter,"price",e.target.multiple?a:a[0])},t.onFilter]}},[a("option",{attrs:{value:"",disabled:"",selected:""}},[t._v("Цена")]),a("option",{attrs:{value:"1"}},[t._v("option 1")]),a("option",{attrs:{value:"2"}},[t._v("option 2")]),a("option",{attrs:{value:"3"}},[t._v("option 3")])]),a("select",{directives:[{name:"model",rawName:"v-model",value:t.filter.forHome,expression:"filter.forHome"}],staticClass:"selection-box",attrs:{name:"for_home",id:""},on:{change:[function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.filter,"forHome",e.target.multiple?a:a[0])},t.onFilter]}},[a("option",{attrs:{value:"",disabled:"",selected:""}},[t._v("Для кого")]),a("option",{attrs:{value:"1"}},[t._v("option 1")]),a("option",{attrs:{value:"2"}},[t._v("option 2")]),a("option",{attrs:{value:"3"}},[t._v("option 3")])]),a("select",{directives:[{name:"model",rawName:"v-model",value:t.filter.collection,expression:"filter.collection"}],staticClass:"selection-box",attrs:{name:"collection",id:""},on:{change:[function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.filter,"collection",e.target.multiple?a:a[0])},t.onFilter]}},[a("option",{attrs:{value:"",disabled:"",selected:""}},[t._v("Коллекция")]),a("option",{attrs:{value:"1"}},[t._v("option 1")]),a("option",{attrs:{value:"2"}},[t._v("option 2")]),a("option",{attrs:{value:"3"}},[t._v("option 3")])]),a("select",{directives:[{name:"model",rawName:"v-model",value:t.filter.season,expression:"filter.season"}],staticClass:"selection-box",attrs:{name:"season",id:""},on:{change:[function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.filter,"season",e.target.multiple?a:a[0])},t.onFilter]}},[a("option",{attrs:{value:"",disabled:"",selected:""}},[t._v("Сезон")]),a("option",{attrs:{value:"1"}},[t._v("option 1")]),a("option",{attrs:{value:"2"}},[t._v("option 2")]),a("option",{attrs:{value:"3"}},[t._v("option 3")])]),a("select",{directives:[{name:"model",rawName:"v-model",value:t.filter.event,expression:"filter.event"}],staticClass:"selection-box",attrs:{name:"event",id:""},on:{change:[function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.filter,"event",e.target.multiple?a:a[0])},t.onFilter]}},[a("option",{attrs:{value:"",disabled:"",selected:""}},[t._v("Событие")]),a("option",{attrs:{value:"1"}},[t._v("option 1")]),a("option",{attrs:{value:"2"}},[t._v("option 2")]),a("option",{attrs:{value:"3"}},[t._v("option 3")])])])])]),a("section",{staticClass:"product-cards"},[a("div",{staticClass:"container"},[a("div",{staticClass:"product-cards__wrap"},t._l(t.productsList,(function(e){return a("div",{key:e.id,staticClass:"product-cards__item"},[a("a",{attrs:{href:"#"}},[a("img",{attrs:{src:e.image,alt:"",width:"280",height:"220"}})]),a("p",[t._v(t._s(e.product_type))]),a("a",{attrs:{href:"#"}},[a("h3",[t._v(t._s(e.title))])]),a("a",{staticClass:"product-cards__item-btn",attrs:{href:"#"}},[t._v(t._s(e.price)+" ₽")])])})),0),a("a",{staticClass:"product-cards__btn",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.loadData()}}},[t._v("покажите еще")])])]),a("section",{staticClass:"discription"},[a("div",{staticClass:"container"},[a("div",{staticClass:"discription__text-seo",class:{"full-text":t.showFullText}},[a("p",[t._v("\n          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet, lorem\n          eu commodo porttitor erat. Amet mauris cursus bibendum in egestas.\n          Nulla porttitor amet quam elit, mauris. Tortor egestas dignissim\n          augue suspendisse rutrum pretium lobortis dolor. Commodo sagittis at\n          amet faucibus faucibus id. Bibendum placerat convallis gravida eu\n          quisque et augue. Sed dignissim amet ut vitae at ornare sed. Commodo\n          sagittis at amet faucibus faucibus id. Bibendum placerat convallis\n          gravida eu quisque et augue. Sed dignissim amet ut vitae at ornare\n          sed. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet,\n          lorem eu commodo porttitor erat. Amet mauris cursus bibendum in\n          egestas. Nulla porttitor amet quam elit, mauris. Tortor egestas\n          dignissim augue suspendisse rutrum pretium lobortis dolor. Commodo\n          sagittis at amet faucibus faucibus id. Bibendum placerat convallis\n          gravida eu quisque et augue. Sed dignissim amet ut vitae at ornare\n          sed. Commodo sagittis at amet faucibus faucibus id. Bibendum\n          placerat convallis gravida eu quisque et augue. Sed dignissim amet\n          ut vitae at ornare sed.\n        ")]),a("a",{staticClass:"discription__btn",attrs:{href:"#"},on:{click:function(e){e.preventDefault(),t.showFullText=!t.showFullText}}},[t._v("\n          "+t._s(t.showFullText?"показать меньше текста":"читать полностью")+"\n        ")])]),t._m(4)])]),a("section",{staticClass:"subscribe"},[a("div",{staticClass:"container"},[t._m(5),a("div",{staticClass:"subscribe__body"},[t._m(6),a("form",{staticClass:"subscribe__form",attrs:{action:"#",method:"get"},on:{submit:t.onSubmit}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.email,expression:"form.email"}],staticClass:"subscribe__form-email",attrs:{type:"email",placeholder:"Ваш e-mail"},domProps:{value:t.form.email},on:{input:function(e){e.target.composing||t.$set(t.form,"email",e.target.value)}}}),a("button",{staticClass:"subscribe__form-btn",attrs:{type:"submit"}},[t._v("отправить")])])])])]),t._m(7)])},r=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[s("div",{staticClass:"header__block-links"},[s("a",{attrs:{href:"#"}},[t._v("Контрагентам")]),s("a",{attrs:{href:"#"}},[t._v("Дизайнерам")]),s("a",{attrs:{href:"#"}},[t._v("Вакансии")])]),s("a",{staticClass:"header__logo",attrs:{href:"#"}},[s("img",{attrs:{src:a("1ae4"),alt:"logo"}})]),s("div",{staticClass:"header__menu"},[s("div",{staticClass:"header__search"},[s("span",{staticClass:"iconify",staticStyle:{color:"#ffffff","font-size":"24px"},attrs:{"data-inline":"false","data-icon":"gridicons:search"}}),s("input",{staticClass:"header__search-input",attrs:{type:"text",placeholder:"Поиск"}})]),s("div",{staticClass:"header__account"},[s("span",[s("a",{attrs:{href:"#"}},[t._v("Вход")]),t._v("\n            /\n            "),s("a",{attrs:{href:"#"}},[t._v("Регистрация")])]),s("a",{attrs:{href:"#"}},[s("span",{staticClass:"iconify",staticStyle:{color:"#ffffff","font-size":"24px"},attrs:{"data-inline":"false","data-icon":"mdi:account"}})]),s("a",{attrs:{href:"#"}},[s("span",{staticClass:"iconify",staticStyle:{color:"#ffffff","font-size":"18px"},attrs:{"data-inline":"false","data-icon":"topcoat:like"}})])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"burger-content__block-links"},[a("a",{attrs:{href:"#"}},[t._v("Контрагентам")]),a("a",{attrs:{href:"#"}},[t._v("Дизайнерам")]),a("a",{attrs:{href:"#"}},[t._v("Вакансии")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"burger-content__account"},[a("div",[a("a",{attrs:{href:"#"}},[t._v("Вход")]),t._v("\n          /\n          "),a("a",{attrs:{href:"#"}},[t._v("Регистрация")])]),a("div",{staticClass:"burger-content__account-icons-wrap"},[a("div",{staticClass:"burger-content__account-icons"},[a("a",{attrs:{href:"#"}},[a("span",{staticClass:"iconify",staticStyle:{color:"#ffffff","font-size":"45px"},attrs:{"data-inline":"false","data-icon":"mdi:account"}})]),a("a",{attrs:{href:"#"}},[a("span",{staticClass:"iconify",staticStyle:{color:"#ffffff","font-size":"40px"},attrs:{"data-inline":"false","data-icon":"topcoat:like"}})])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"burger-content__social-icon"},[a("a",{attrs:{href:"#"}},[a("span",{staticClass:"iconify",staticStyle:{color:"#ffffff","font-size":"39px"},attrs:{"data-inline":"false","data-icon":"carbon:logo-youtube"}})]),a("a",{attrs:{href:"#"}},[a("span",{staticClass:"iconify",staticStyle:{color:"#ffffff","font-size":"36px"},attrs:{"data-inline":"false","data-icon":"entypo-social:vk"}})]),a("a",{attrs:{href:"#"}},[a("span",{staticClass:"iconify",staticStyle:{color:"#ffffff","font-size":"39px"},attrs:{"data-inline":"false","data-icon":"bx:bxl-facebook"}})]),a("a",{attrs:{href:"#"}},[a("span",{staticClass:"iconify",staticStyle:{color:"#ffffff","font-size":"36px"},attrs:{"data-inline":"false","data-icon":"bx:bxl-telegram"}})]),a("a",{attrs:{href:"#"}},[a("span",{staticClass:"iconify",staticStyle:{color:"#ffffff","font-size":"24px"},attrs:{"data-inline":"false","data-icon":"simple-icons:etsy"}})])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"discription__icon-list"},[s("div",{staticClass:"discription__icon-item"},[s("img",{attrs:{src:a("8bee"),alt:""}}),s("p",[t._v("Бесплатная доставка")])]),s("div",{staticClass:"discription__icon-item"},[s("img",{attrs:{src:a("764e"),alt:""}}),s("p",[t._v("Индивидуальный дизайн")])]),s("div",{staticClass:"discription__icon-item"},[s("img",{attrs:{src:a("1978"),alt:""}}),s("p",[t._v("Бесплатная примерка")])]),s("div",{staticClass:"discription__icon-item"},[s("img",{attrs:{src:a("2776"),alt:""}}),s("p",[t._v("Личный подход")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"subscribe__title"},[a("h2",[t._v("Полезные советы и персональный предложения")]),a("h3",[t._v("Эксклюзивная рассылка")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",{staticClass:"subscribe__list"},[a("li",[t._v("Личный менеджер")]),a("li",[t._v("Доставка и оформление")]),a("li",[t._v("Индивидуальный дизайн")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",{staticClass:"footer"},[a("div",{staticClass:"container"},[a("div",{staticClass:"footer__first-row"},[a("div",{staticClass:"footer__column"},[a("h3",[t._v("Полезные ссылки")]),a("a",{attrs:{href:"#"}},[t._v("Доставка")]),a("a",{attrs:{href:"#"}},[t._v("Оплата")]),a("a",{attrs:{href:"#"}},[t._v("Акции")]),a("a",{attrs:{href:"#"}},[t._v("Политика конфиденциальности")])]),a("div",{staticClass:"footer__column"},[a("h3",[t._v("Оплата")]),a("p",[t._v("\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n            Ullamcorper justo, nec, pellentesque.\n          ")]),a("img",{attrs:{src:"",alt:""}}),a("img",{attrs:{src:"",alt:""}})]),a("div",{staticClass:"footer__column"},[a("h3",[t._v("Kонтакты")]),a("div",{staticClass:"footer__contacts"},[a("a",{attrs:{href:"tel:88122345655"}},[a("span",{staticClass:"iconify",staticStyle:{"font-size":"20px"},attrs:{"data-inline":"false","data-icon":"entypo:old-phone"}}),t._v("8 (812) 234-56-55\n            ")]),a("a",{attrs:{href:"tel:88122345655"}},[a("span",{staticClass:"iconify",staticStyle:{"font-size":"20px"},attrs:{"data-inline":"false","data-icon":"entypo:old-phone"}}),t._v("8 (812) 234-56-55\n            ")]),a("a",{attrs:{href:"mailto:ojjo@ojjo.ru"}},[a("span",{staticClass:"iconify",staticStyle:{"font-size":"20px"},attrs:{"data-inline":"false","data-icon":"entypo:mail"}}),t._v("ojjo@ojjo.ru\n            ")])])]),a("div",{staticClass:"footer__column"},[a("h3",[t._v("Социальные сети")]),a("p",[t._v("\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n            Ullamcorper justo, nec, pellentesque.\n          ")]),a("div",{staticClass:"footer__social-links"},[a("a",{attrs:{href:"#"}},[a("span",{staticClass:"iconify",staticStyle:{"font-size":"26px"},attrs:{"data-inline":"false","data-icon":"carbon:logo-youtube"}})]),a("a",{attrs:{href:"#"}},[a("span",{staticClass:"iconify",staticStyle:{"font-size":"24px"},attrs:{"data-inline":"false","data-icon":"entypo-social:vk"}})]),a("a",{attrs:{href:"#"}},[a("span",{staticClass:"iconify",staticStyle:{"font-size":"26px"},attrs:{"data-inline":"false","data-icon":"bx:bxl-facebook"}})]),a("a",{attrs:{href:"#"}},[a("span",{staticClass:"iconify",staticStyle:{"font-size":"24px"},attrs:{"data-inline":"false","data-icon":"bx:bxl-telegram"}})]),a("a",{attrs:{href:"#"}},[a("span",{staticClass:"iconify",staticStyle:{"font-size":"16px"},attrs:{"data-inline":"false","data-icon":"simple-icons:etsy"}})])])])]),a("div",{staticClass:"footer__last-row"},[a("a",{attrs:{href:"#"}},[t._v("(c) 2020 OJJO jewelry")]),a("a",{attrs:{href:"#"}},[t._v("Договор публичной офферты")]),a("a",{attrs:{href:"#"}},[t._v("Контрагентам")]),a("a",{attrs:{href:"#"}},[t._v("Сделано Figma.info")])])])])}],l=a("2909"),c=(a("ac6a"),a("456d"),{URL:"http://localhost:8080"}),u=a("bc3a"),f=a.n(u),p={data:function(){return{json:null,burgerState:!1,showFullText:!1,productsList:[],pageNumber:0,pageSize:3,filter:{brand:"",price:"",forHome:"",collection:"",season:"",event:""},form:{email:""}}},mounted:function(){var t=this;f.a.get("products.json").then((function(e){t.json=e.data.products,console.log(e.data.products),t.loadData()})).catch((function(t){return console.log(t)}))},computed:{totalPage:function(){return Math.ceil(Object.keys(this.json).length/this.pageSize)}},methods:{loadData:function(){var t;null!==this.json&&((t=this.productsList).push.apply(t,Object(l["a"])(this.json.slice(this.pageNumber*this.pageSize,this.pageNumber*this.pageSize+this.pageSize))),this.pageNumber<this.totalPage&&this.pageNumber++)},onFilter:function(){f.a.post(c.URL,JSON.stringify(this.filter)).then((function(t){return console.log(t.data)})).catch((function(t){return console.log(t)}))},onSubmit:function(t){t.preventDefault(),f.a.post(c.URL,JSON.stringify(this.form)).then((function(t){return console.log(t.data)})).catch((function(t){return console.log(t)}))}}},d=p,v=a("2877"),m=Object(v["a"])(d,o,r,!1,null,null,null),_=m.exports,h=(a("a24a"),{name:"app",components:{Catalog:_}}),g=h,b=Object(v["a"])(g,i,n,!1,null,null,null),y=b.exports;s["a"].config.productionTip=!1,new s["a"]({render:function(t){return t(y)}}).$mount("#app")},"764e":function(t,e,a){t.exports=a.p+"img/list.f87aca26.svg"},"8bee":function(t,e,a){t.exports=a.p+"img/delivery.3705bc1b.svg"},a24a:function(t,e,a){}});
//# sourceMappingURL=app.dedd8474.js.map