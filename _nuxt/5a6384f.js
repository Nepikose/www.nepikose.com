(window.webpackJsonp=window.webpackJsonp||[]).push([[13,5,11],{269:function(t,e,c){"use strict";var r=c(2),n=c(4),o=c(30),f=c(25),d=c(31),l=c(195),m=c(13),_=c(3),v=c(194),h=c(132),x=c(273),y=c(274),C=c(82),j=c(275),k=[],w=n(k.sort),M=n(k.push),O=_((function(){k.sort(void 0)})),I=_((function(){k.sort(null)})),P=h("sort"),T=!_((function(){if(C)return C<70;if(!(x&&x>3)){if(y)return!0;if(j)return j<603;var code,t,e,c,r="";for(code=65;code<76;code++){switch(t=String.fromCharCode(code),code){case 66:case 69:case 70:case 72:e=3;break;case 68:case 71:e=4;break;default:e=2}for(c=0;c<47;c++)k.push({k:t+c,v:e})}for(k.sort((function(a,b){return b.v-a.v})),c=0;c<k.length;c++)t=k[c].k.charAt(0),r.charAt(r.length-1)!==t&&(r+=t);return"DGBEFHACIJK"!==r}}));r({target:"Array",proto:!0,forced:O||!I||!P||!T},{sort:function(t){void 0!==t&&o(t);var e=f(this);if(T)return void 0===t?w(e):w(e,t);var c,r,n=[],_=d(e);for(r=0;r<_;r++)r in e&&M(n,e[r]);for(v(n,function(t){return function(e,c){return void 0===c?-1:void 0===e?1:void 0!==t?+t(e,c)||0:m(e)>m(c)?1:-1}}(t)),c=d(n),r=0;r<c;)e[r]=n[r++];for(;r<_;)l(e,r++);return e}})},270:function(t,e,c){var content=c(282);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,c(59).default)("9c866c4c",content,!0,{sourceMap:!1})},271:function(t,e,c){"use strict";c(44),c(18),c(272),c(269),c(36),c(61);function r(){return JSON.parse(sessionStorage.getItem("data"))}e.a={getDataFromSession:r,getCategories:function(){return r().categories},getPartnersByType:function(t){var e,data=r();return(e=data.partners.filter((function(e){return e.type===t}))).sort((function(a,b){return a.description&&!b.description?-1:!a.description&&b.description?1:0})),e},getPartnerById:function(t){return r().partners.find((function(e){return e.id===t}))},getPartners:function(t){return r().partners},getRequests:function(t){return r().requests}}},272:function(t,e,c){"use strict";var r=c(2),n=c(83).find,o=c(133),f="find",d=!0;f in[]&&Array(1)[f]((function(){d=!1})),r({target:"Array",proto:!0,forced:d},{find:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}}),o(f)},273:function(t,e,c){var r=c(60).match(/firefox\/(\d+)/i);t.exports=!!r&&+r[1]},274:function(t,e,c){var r=c(60);t.exports=/MSIE|Trident/.test(r)},275:function(t,e,c){var r=c(60).match(/AppleWebKit\/(\d+)\./);t.exports=!!r&&+r[1]},281:function(t,e,c){"use strict";c(270)},282:function(t,e,c){var r=c(58)((function(i){return i[1]}));r.push([t.i,".read-less,.read-more{background-color:transparent;border:1px solid #717171!important;border-radius:2rem;color:#717171;cursor:pointer;font-size:1rem;margin-bottom:.5rem;padding:0 .5rem!important}.read-less:hover,.read-more:hover{color:#000}",""]),r.locals={},t.exports=r},283:function(t,e,c){"use strict";c.r(e);c(36),c(61),c(196);var r={props:{description:String,limit:{type:Number,default:150}},data:function(){return{expanded:!1}},computed:{truncatedText:function(){return this.description.length<=this.limit?this.description:this.description.substring(0,this.limit)+"..."}},methods:{toggleText:function(){this.expanded=!this.expanded}}},n=(c(281),c(43)),component=Object(n.a)(r,(function(){var t=this,e=t._self._c;return e("div",[t.expanded?e("p",[t._v(t._s(t.description))]):e("p",[t._v(t._s(t.truncatedText))]),t._v(" "),t.description.length>t.limit?e("button",{staticClass:"read-more",on:{click:t.toggleText}},[t._v("\n    "+t._s(t.expanded?"Read Less":"Read More")+"\n  ")]):t._e()])}),[],!1,null,null,null);e.default=component.exports},284:function(t,e,c){"use strict";c.d(e,"a",(function(){return r})),c.d(e,"b",(function(){return n}));c(269),c(62);function r(t,e){return t.slice().sort((function(a,b){var t=e.indexOf(a.category),c=e.indexOf(b.category);return-1!==t&&-1!==c?t-c:-1!==t?-1:-1!==c?1:0}))}function n(t){return t.logo?c(285)("./".concat(t.logo,".jpeg")):c(305)}},285:function(t,e,c){var map={"./0e521d3e-add7-4d14-982f-4e2dd0b8fb5d.jpeg":286,"./0e521d3e-add7-4d14-982f-4e2dd0b8fb5d__641a888e5b2b754dabb97b20cb3fff990eeff041.jpeg":287,"./302fcb0d-1f13-4aa6-b6cc-2619f25467e2.jpeg":288,"./302fcb0d-1f13-4aa6-b6cc-2619f25467e2__641a888e5b2b754dabb97b20cb3fff990eeff041.jpeg":289,"./302fcb0d-1f13-4aa6-b6cc-2619f25467e2__f72164e261a70c44dc69373e74c2f82d3bbf2a23.jpeg":290,"./38e58ca9-f1de-48eb-85c4-389ac1ba333c.jpeg":291,"./38e58ca9-f1de-48eb-85c4-389ac1ba333c__641a888e5b2b754dabb97b20cb3fff990eeff041.jpeg":292,"./3b8d2521-3df5-4d8a-b227-95753947a9e2.jpeg":293,"./3b8d2521-3df5-4d8a-b227-95753947a9e2__641a888e5b2b754dabb97b20cb3fff990eeff041.jpeg":294,"./b153eba9-4f27-4185-965c-3535cb4a09ef.jpeg":295,"./b153eba9-4f27-4185-965c-3535cb4a09ef__f72164e261a70c44dc69373e74c2f82d3bbf2a23.jpeg":296,"./ba6796cc-c44e-4410-b199-a2ba62e3968c.jpeg":297,"./ba6796cc-c44e-4410-b199-a2ba62e3968c__641a888e5b2b754dabb97b20cb3fff990eeff041.jpeg":298,"./bcdf54b2-870d-487f-9327-611c5ac61d7a.jpeg":299,"./bcdf54b2-870d-487f-9327-611c5ac61d7a__641a888e5b2b754dabb97b20cb3fff990eeff041.jpeg":300,"./c05896a1-71e7-484a-bd1a-f194a79bd234.jpeg":301,"./c05896a1-71e7-484a-bd1a-f194a79bd234__f72164e261a70c44dc69373e74c2f82d3bbf2a23.jpeg":302,"./e6cabb6d-4c5f-47fc-8dae-472491ea3626.jpeg":303,"./e6cabb6d-4c5f-47fc-8dae-472491ea3626__641a888e5b2b754dabb97b20cb3fff990eeff041.jpeg":304};function r(t){var e=n(t);return c(e)}function n(t){if(!c.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}r.keys=function(){return Object.keys(map)},r.resolve=n,t.exports=r,r.id=285},286:function(t,e,c){t.exports=c.p+"img/0e521d3e-add7-4d14-982f-4e2dd0b8fb5d.75aa239.jpeg"},287:function(t,e,c){t.exports=c.p+"img/0e521d3e-add7-4d14-982f-4e2dd0b8fb5d__641a888e5b2b754dabb97b20cb3fff990eeff041.6fec693.jpeg"},288:function(t,e,c){t.exports=c.p+"img/302fcb0d-1f13-4aa6-b6cc-2619f25467e2.b77da26.jpeg"},289:function(t,e,c){t.exports=c.p+"img/302fcb0d-1f13-4aa6-b6cc-2619f25467e2__641a888e5b2b754dabb97b20cb3fff990eeff041.3b02c4f.jpeg"},290:function(t,e,c){t.exports=c.p+"img/302fcb0d-1f13-4aa6-b6cc-2619f25467e2__f72164e261a70c44dc69373e74c2f82d3bbf2a23.be0fe18.jpeg"},291:function(t,e,c){t.exports=c.p+"img/38e58ca9-f1de-48eb-85c4-389ac1ba333c.9cad99c.jpeg"},292:function(t,e,c){t.exports=c.p+"img/38e58ca9-f1de-48eb-85c4-389ac1ba333c__641a888e5b2b754dabb97b20cb3fff990eeff041.1681415.jpeg"},293:function(t,e,c){t.exports=c.p+"img/3b8d2521-3df5-4d8a-b227-95753947a9e2.f7f7f85.jpeg"},294:function(t,e,c){t.exports=c.p+"img/3b8d2521-3df5-4d8a-b227-95753947a9e2__641a888e5b2b754dabb97b20cb3fff990eeff041.2d8ebd6.jpeg"},295:function(t,e,c){t.exports=c.p+"img/b153eba9-4f27-4185-965c-3535cb4a09ef.9ceab6c.jpeg"},296:function(t,e,c){t.exports=c.p+"img/b153eba9-4f27-4185-965c-3535cb4a09ef__f72164e261a70c44dc69373e74c2f82d3bbf2a23.ff4c219.jpeg"},297:function(t,e,c){t.exports=c.p+"img/ba6796cc-c44e-4410-b199-a2ba62e3968c.f7f7f85.jpeg"},298:function(t,e,c){t.exports=c.p+"img/ba6796cc-c44e-4410-b199-a2ba62e3968c__641a888e5b2b754dabb97b20cb3fff990eeff041.2d8ebd6.jpeg"},299:function(t,e,c){t.exports=c.p+"img/bcdf54b2-870d-487f-9327-611c5ac61d7a.9ceab6c.jpeg"},300:function(t,e,c){t.exports=c.p+"img/bcdf54b2-870d-487f-9327-611c5ac61d7a__641a888e5b2b754dabb97b20cb3fff990eeff041.cfc3dc1.jpeg"},301:function(t,e,c){t.exports=c.p+"img/c05896a1-71e7-484a-bd1a-f194a79bd234.75aa239.jpeg"},302:function(t,e,c){t.exports=c.p+"img/c05896a1-71e7-484a-bd1a-f194a79bd234__f72164e261a70c44dc69373e74c2f82d3bbf2a23.b6bbb06.jpeg"},303:function(t,e,c){t.exports=c.p+"img/e6cabb6d-4c5f-47fc-8dae-472491ea3626.f7f7f85.jpeg"},304:function(t,e,c){t.exports=c.p+"img/e6cabb6d-4c5f-47fc-8dae-472491ea3626__641a888e5b2b754dabb97b20cb3fff990eeff041.2d8ebd6.jpeg"},305:function(t,e,c){t.exports=c.p+"img/dummy.d18b065.jpeg"},311:function(t,e,c){"use strict";c.r(e);var r={name:"Modal",props:["id","title"]},n=c(43),component=Object(n.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"modal fade",attrs:{id:t.id,tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[e("div",{staticClass:"modal-dialog modal-fullscreen-sm-down modal-dialog-centered"},[e("div",{staticClass:"modal-content"},[e("div",{staticClass:"modal-header"},[e("h5",{staticClass:"modal-title text-center",attrs:{id:"exampleModalLabel"}},[t._v(t._s(t.title))]),t._v(" "),e("button",{staticClass:"btn-close",attrs:{type:"button","data-bs-dismiss":"modal","aria-label":"Close"}})]),t._v(" "),e("div",{staticClass:"modal-body"},[t._t("default")],2)])])])}),[],!1,null,null,null);e.default=component.exports},313:function(t,e,c){var content=c(326);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,c(59).default)("9249f5c8",content,!0,{sourceMap:!1})},325:function(t,e,c){"use strict";c(313)},326:function(t,e,c){var r=c(58)((function(i){return i[1]}));r.push([t.i,".request-section>div:nth-child(odd){background-color:var(--nepikose-cyan)}.load-more{display:block}.load-more:hover{background:#c2d3d2!important}.submit-btn{background:#e3f6f5!important;padding:1rem}",""]),r.locals={},t.exports=r},343:function(t,e,c){"use strict";c.r(e);c(32),c(272),c(18),c(62),c(45);var r=c(271),n=c(284),o={props:["requests","pageTitle"],data:function(){return{dafaultIcon:"spa",categoryList:[],items:[],displayedItems:[],itemsPerPage:5,currentPage:1}},computed:{showLoadMoreButton:function(){return this.displayedItems.length<this.items.length}},methods:{getIconkey:function(t){return r.a.getCategories().find((function(e){return e.type===t}))?r.a.getCategories().find((function(e){return e.type===t})).logo:dafaultIcon},loadMoreItems:function(){this.currentPage,this.itemsPerPage;var t=this.currentPage*this.itemsPerPage;this.displayedItems=this.items.slice(0,t),this.currentPage++}},created:function(){this.priorityOrder=["restaurant","taxi","shop"],this.items=Object(n.a)(this.requests,this.priorityOrder),this.loadMoreItems(),this.categoryList=r.a.getCategories().map((function(t){return t.title}))}},f=(c(325),c(43)),component=Object(f.a)(o,(function(){var t=this,e=t._self._c;return e("main",{staticClass:"request-section container"},[e("div",{staticClass:"d-flex flex-column pb-3"},[e("h2",{staticClass:"page-title h5 h4-sm font-1 fs-3"},[t._v(t._s(t.pageTitle)+" "),e("br")]),t._v(" "),e("button",{staticClass:"btn btn-primary m-auto text-uppercase fw-bold",attrs:{type:"button","data-bs-toggle":"modal","data-bs-target":"#offerdemand"}},[t._v("\n     Fill this form for your request\n    ")])]),t._v(" "),t._l(t.displayedItems,(function(c,r){return e("div",{key:r,staticClass:"card"},[e("div",{staticClass:"d-flex p-1 align-items-center text-center"},[e("i",{class:"fa fa-".concat(t.getIconkey(c.category)," fs-2 ps-2"),attrs:{"aria-hidden":"true"}}),t._v(" "),e("div",{staticClass:"card__body text-start"},[e("div",{staticClass:"card__title fw-bold fs-4 font-1"},[t._v("\n          "+t._s(c.name)+"\n        ")]),t._v(" "),e("div",{staticClass:"d-flex gap-2 align-items-center"},[e("div",{staticClass:"card__description fs-6 pe-3 font-1 secondary-text"},[e("DescriptionText",{attrs:{description:c.message}})],1),t._v(" "),e("div",{staticClass:"fw-bold text-uppercase",class:"offer"===c.request?"text-success":"text-danger"},[t._v("\n            "+t._s(c.request)+"\n          ")])]),t._v(" "),e("div",{staticClass:"card__contact"},[c.contact.phone?e("a",{staticClass:"color-5",attrs:{target:"_blank",alt:"",href:"tel:".concat(c.contact.phone)}},[e("i",{staticClass:"fas fa-phone"})]):t._e(),t._v(" "),c.contact.maplink?e("a",{staticClass:"color-5",attrs:{target:"_blank",alt:"",href:"tel:".concat(c.contact.maplink)}},[e("i",{staticClass:"fas fa-map"})]):t._e(),t._v(" "),c.contact.email?e("a",{staticClass:"color-5",attrs:{target:"_blank",href:"mailto:".concat(c.contact.email)}},[e("i",{staticClass:"fas fa-envelope"})]):t._e(),t._v(" "),c.contact.facebook?e("a",{staticClass:"color-5",attrs:{target:"_blank",href:"".concat(c.contact.facebook)}},[e("i",{staticClass:"fab fa-facebook"})]):t._e(),t._v(" "),c.contact.instagram?e("a",{staticClass:"color-5",attrs:{target:"_blank",href:"".concat(c.contact.instagram)}},[e("i",{staticClass:"fab fa-instagram"})]):t._e()]),t._v(" "),c.contact.website&&t.requestCompleted?e("a",{staticClass:"visit-btn bg-color-2",attrs:{href:"".concat(c.contact.website),target:"_blank"}},[t._v("Visit Website")]):t._e()])])])})),t._v(" "),t.showLoadMoreButton?e("button",{staticClass:"btn btn-primary load-more m-auto my-3",on:{click:t.loadMoreItems}},[t._v("\n    Load More\n  ")]):t._e(),t._v(" "),e("Modal",{attrs:{id:"offerdemand",title:"OFFER Demand form"}},[e("form",{attrs:{action:"https://formsubmit.co/87666f7f42c791cde05c2d06cdcd6c74",method:"POST"}},[e("input",{attrs:{type:"hidden",name:"_captcha",value:"false"}}),t._v(" "),e("div",{staticClass:"mb-3"},[e("label",{attrs:{for:"name"}},[t._v("Name*")]),t._v(" "),e("input",{staticClass:"form-control",attrs:{type:"text",id:"name",name:"name",required:""}})]),t._v(" "),e("div",{staticClass:"mb-3"},[e("label",{attrs:{for:"phone"}},[t._v("Contact phone")]),t._v(" "),e("input",{staticClass:"form-control",attrs:{type:"phone",id:"phone",name:"phone",required:""}})]),t._v(" "),e("div",{staticClass:"mb-3"},[e("label",{attrs:{for:"exampleInputEmail1"}},[t._v("Email address")]),t._v(" "),e("input",{staticClass:"form-control",attrs:{type:"email",id:"exampleInputEmail1","aria-describedby":"emailHelp",name:"email"}})]),t._v(" "),e("select",{staticClass:"form-select mb-4",attrs:{name:"request","aria-label":"Default select example"}},[e("option",{attrs:{value:"",disabled:"",selected:""}},[t._v("Select a request")]),t._v(" "),e("option",{attrs:{value:"Offer"}},[t._v("Offer")]),t._v(" "),e("option",{attrs:{value:"Offer"}},[t._v("Demand")])]),t._v(" "),e("select",{staticClass:"form-select mb-4",attrs:{name:"category","aria-label":"Default select example"}},[e("option",{attrs:{value:"",disabled:"",selected:""}},[t._v("Select a category")]),t._v(" "),t._l(t.categoryList,(function(option,c){return e("option",{key:c,domProps:{value:option}},[t._v("\n          "+t._s(option)+"\n        ")])}))],2),t._v(" "),e("textarea",{staticClass:"field w-100 mt-1 font-bold",attrs:{rows:"8",name:"message",placeholder:"Write you message here"}}),t._v(" "),e("button",{staticClass:"btn btn-primary w-100 my-2 submit-btn",attrs:{type:"submit"}},[t._v("Submit")])])])],2)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{DescriptionText:c(283).default,Modal:c(311).default})}}]);