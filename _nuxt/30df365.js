(window.webpackJsonp=window.webpackJsonp||[]).push([[1,6,12],{269:function(e,t,c){var content=c(280);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,c(59).default)("9c866c4c",content,!0,{sourceMap:!1})},270:function(e,t,c){"use strict";var n=c(2),r=c(4),f=c(30),o=c(25),d=c(31),l=c(195),m=c(13),_=c(3),v=c(194),h=c(132),x=c(276),j=c(277),C=c(82),y=c(278),k=[],w=r(k.sort),I=r(k.push),O=_((function(){k.sort(void 0)})),M=_((function(){k.sort(null)})),P=h("sort"),D=!_((function(){if(C)return C<70;if(!(x&&x>3)){if(j)return!0;if(y)return y<603;var code,e,t,c,n="";for(code=65;code<76;code++){switch(e=String.fromCharCode(code),code){case 66:case 69:case 70:case 72:t=3;break;case 68:case 71:t=4;break;default:t=2}for(c=0;c<47;c++)k.push({k:e+c,v:t})}for(k.sort((function(a,b){return b.v-a.v})),c=0;c<k.length;c++)e=k[c].k.charAt(0),n.charAt(n.length-1)!==e&&(n+=e);return"DGBEFHACIJK"!==n}}));n({target:"Array",proto:!0,forced:O||!M||!P||!D},{sort:function(e){void 0!==e&&f(e);var t=o(this);if(D)return void 0===e?w(t):w(t,e);var c,n,r=[],_=d(t);for(n=0;n<_;n++)n in t&&I(r,t[n]);for(v(r,function(e){return function(t,c){return void 0===c?-1:void 0===t?1:void 0!==e?+e(t,c)||0:m(t)>m(c)?1:-1}}(e)),c=d(r),n=0;n<c;)t[n]=r[n++];for(;n<_;)l(t,n++);return t}})},274:function(e,t,c){"use strict";c(44),c(18),c(275),c(270),c(36),c(60);function n(){return JSON.parse(sessionStorage.getItem("data"))}t.a={getDataFromSession:n,getCategories:function(){return n().categories},getPartnersByType:function(e){var t,data=n();return(t=data.partners.filter((function(t){return t.type===e}))).sort((function(a,b){return a.description&&!b.description?-1:!a.description&&b.description?1:0})),t},getPartnerById:function(e){return n().partners.find((function(t){return t.id===e}))},getPartners:function(e){return n().partners},getRequests:function(e){return n().requests}}},275:function(e,t,c){"use strict";var n=c(2),r=c(83).find,f=c(133),o="find",d=!0;o in[]&&Array(1)[o]((function(){d=!1})),n({target:"Array",proto:!0,forced:d},{find:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}}),f(o)},276:function(e,t,c){var n=c(61).match(/firefox\/(\d+)/i);e.exports=!!n&&+n[1]},277:function(e,t,c){var n=c(61);e.exports=/MSIE|Trident/.test(n)},278:function(e,t,c){var n=c(61).match(/AppleWebKit\/(\d+)\./);e.exports=!!n&&+n[1]},279:function(e,t,c){"use strict";c(269)},280:function(e,t,c){var n=c(58)((function(i){return i[1]}));n.push([e.i,".read-less,.read-more{background-color:transparent;border:1px solid #717171!important;border-radius:2rem;color:#717171;cursor:pointer;font-size:1rem;margin-bottom:.5rem;padding:0 .5rem!important}.read-less:hover,.read-more:hover{color:#000}",""]),n.locals={},e.exports=n},281:function(e,t,c){"use strict";c.r(t);c(36),c(60),c(196);var n={props:{description:String,limit:{type:Number,default:150}},data:function(){return{expanded:!1}},computed:{truncatedText:function(){return this.description.length<=this.limit?this.description:this.description.substring(0,this.limit)+"..."}},methods:{toggleText:function(){this.expanded=!this.expanded}}},r=(c(279),c(43)),component=Object(r.a)(n,(function(){var e=this,t=e._self._c;return t("div",[e.expanded?t("p",[e._v(e._s(e.description))]):t("p",[e._v(e._s(e.truncatedText))]),e._v(" "),e.description.length>e.limit?t("button",{staticClass:"read-more",on:{click:e.toggleText}},[e._v("\n    "+e._s(e.expanded?"Read Less":"Read More")+"\n  ")]):e._e()])}),[],!1,null,null,null);t.default=component.exports},286:function(e,t,c){"use strict";c.d(t,"a",(function(){return n})),c.d(t,"b",(function(){return r}));c(270),c(62);function n(e,t){return e.slice().sort((function(a,b){var e=t.indexOf(a.category),c=t.indexOf(b.category);return-1!==e&&-1!==c?e-c:-1!==e?-1:-1!==c?1:0}))}function r(e){return e.logo?c(287)("./".concat(e.logo,".jpeg")):c(313)}},287:function(e,t,c){var map={"./0e521d3e-add7-4d14-982f-4e2dd0b8fb5d.jpeg":288,"./0e521d3e-add7-4d14-982f-4e2dd0b8fb5d__641a888e5b2b754dabb97b20cb3fff990eeff041.jpeg":289,"./302fcb0d-1f13-4aa6-b6cc-2619f25467e2.jpeg":290,"./302fcb0d-1f13-4aa6-b6cc-2619f25467e2__641a888e5b2b754dabb97b20cb3fff990eeff041.jpeg":291,"./302fcb0d-1f13-4aa6-b6cc-2619f25467e2__f72164e261a70c44dc69373e74c2f82d3bbf2a23.jpeg":292,"./38e58ca9-f1de-48eb-85c4-389ac1ba333c.jpeg":293,"./38e58ca9-f1de-48eb-85c4-389ac1ba333c__641a888e5b2b754dabb97b20cb3fff990eeff041.jpeg":294,"./3b8d2521-3df5-4d8a-b227-95753947a9e2.jpeg":295,"./3b8d2521-3df5-4d8a-b227-95753947a9e2__641a888e5b2b754dabb97b20cb3fff990eeff041.jpeg":296,"./42220bcd-16fe-4adf-a6bc-ad02a279ee2d.jpeg":297,"./42220bcd-16fe-4adf-a6bc-ad02a279ee2d__641a888e5b2b754dabb97b20cb3fff990eeff041.jpeg":298,"./b153eba9-4f27-4185-965c-3535cb4a09ef.jpeg":299,"./b153eba9-4f27-4185-965c-3535cb4a09ef__f72164e261a70c44dc69373e74c2f82d3bbf2a23.jpeg":300,"./ba6796cc-c44e-4410-b199-a2ba62e3968c.jpeg":301,"./ba6796cc-c44e-4410-b199-a2ba62e3968c__641a888e5b2b754dabb97b20cb3fff990eeff041.jpeg":302,"./bcdf54b2-870d-487f-9327-611c5ac61d7a.jpeg":303,"./bcdf54b2-870d-487f-9327-611c5ac61d7a__641a888e5b2b754dabb97b20cb3fff990eeff041.jpeg":304,"./c05896a1-71e7-484a-bd1a-f194a79bd234.jpeg":305,"./c05896a1-71e7-484a-bd1a-f194a79bd234__f72164e261a70c44dc69373e74c2f82d3bbf2a23.jpeg":306,"./d80c5e94-fd63-481d-a5ce-edd6144b1540.jpeg":307,"./d80c5e94-fd63-481d-a5ce-edd6144b1540__641a888e5b2b754dabb97b20cb3fff990eeff041.jpeg":308,"./e6cabb6d-4c5f-47fc-8dae-472491ea3626.jpeg":309,"./e6cabb6d-4c5f-47fc-8dae-472491ea3626__641a888e5b2b754dabb97b20cb3fff990eeff041.jpeg":310,"./f7de2dfd-c912-47b2-94f2-5affc5c83807.jpeg":311,"./f7de2dfd-c912-47b2-94f2-5affc5c83807__641a888e5b2b754dabb97b20cb3fff990eeff041.jpeg":312};function n(e){var t=r(e);return c(t)}function r(e){if(!c.o(map,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return map[e]}n.keys=function(){return Object.keys(map)},n.resolve=r,e.exports=n,n.id=287},288:function(e,t,c){e.exports=c.p+"img/0e521d3e-add7-4d14-982f-4e2dd0b8fb5d.75aa239.jpeg"},289:function(e,t,c){e.exports=c.p+"img/0e521d3e-add7-4d14-982f-4e2dd0b8fb5d__641a888e5b2b754dabb97b20cb3fff990eeff041.6fec693.jpeg"},290:function(e,t,c){e.exports=c.p+"img/302fcb0d-1f13-4aa6-b6cc-2619f25467e2.b77da26.jpeg"},291:function(e,t,c){e.exports=c.p+"img/302fcb0d-1f13-4aa6-b6cc-2619f25467e2__641a888e5b2b754dabb97b20cb3fff990eeff041.3b02c4f.jpeg"},292:function(e,t,c){e.exports=c.p+"img/302fcb0d-1f13-4aa6-b6cc-2619f25467e2__f72164e261a70c44dc69373e74c2f82d3bbf2a23.be0fe18.jpeg"},293:function(e,t,c){e.exports=c.p+"img/38e58ca9-f1de-48eb-85c4-389ac1ba333c.9cad99c.jpeg"},294:function(e,t,c){e.exports=c.p+"img/38e58ca9-f1de-48eb-85c4-389ac1ba333c__641a888e5b2b754dabb97b20cb3fff990eeff041.1681415.jpeg"},295:function(e,t,c){e.exports=c.p+"img/3b8d2521-3df5-4d8a-b227-95753947a9e2.f7f7f85.jpeg"},296:function(e,t,c){e.exports=c.p+"img/3b8d2521-3df5-4d8a-b227-95753947a9e2__641a888e5b2b754dabb97b20cb3fff990eeff041.2d8ebd6.jpeg"},297:function(e,t,c){e.exports=c.p+"img/42220bcd-16fe-4adf-a6bc-ad02a279ee2d.4f091e2.jpeg"},298:function(e,t,c){e.exports=c.p+"img/42220bcd-16fe-4adf-a6bc-ad02a279ee2d__641a888e5b2b754dabb97b20cb3fff990eeff041.000ab91.jpeg"},299:function(e,t,c){e.exports=c.p+"img/b153eba9-4f27-4185-965c-3535cb4a09ef.9ceab6c.jpeg"},300:function(e,t,c){e.exports=c.p+"img/b153eba9-4f27-4185-965c-3535cb4a09ef__f72164e261a70c44dc69373e74c2f82d3bbf2a23.ff4c219.jpeg"},301:function(e,t,c){e.exports=c.p+"img/ba6796cc-c44e-4410-b199-a2ba62e3968c.f7f7f85.jpeg"},302:function(e,t,c){e.exports=c.p+"img/ba6796cc-c44e-4410-b199-a2ba62e3968c__641a888e5b2b754dabb97b20cb3fff990eeff041.2d8ebd6.jpeg"},303:function(e,t,c){e.exports=c.p+"img/bcdf54b2-870d-487f-9327-611c5ac61d7a.9ceab6c.jpeg"},304:function(e,t,c){e.exports=c.p+"img/bcdf54b2-870d-487f-9327-611c5ac61d7a__641a888e5b2b754dabb97b20cb3fff990eeff041.cfc3dc1.jpeg"},305:function(e,t,c){e.exports=c.p+"img/c05896a1-71e7-484a-bd1a-f194a79bd234.75aa239.jpeg"},306:function(e,t,c){e.exports=c.p+"img/c05896a1-71e7-484a-bd1a-f194a79bd234__f72164e261a70c44dc69373e74c2f82d3bbf2a23.b6bbb06.jpeg"},307:function(e,t,c){e.exports=c.p+"img/d80c5e94-fd63-481d-a5ce-edd6144b1540.4f091e2.jpeg"},308:function(e,t,c){e.exports=c.p+"img/d80c5e94-fd63-481d-a5ce-edd6144b1540__641a888e5b2b754dabb97b20cb3fff990eeff041.000ab91.jpeg"},309:function(e,t,c){e.exports=c.p+"img/e6cabb6d-4c5f-47fc-8dae-472491ea3626.f7f7f85.jpeg"},310:function(e,t,c){e.exports=c.p+"img/e6cabb6d-4c5f-47fc-8dae-472491ea3626__641a888e5b2b754dabb97b20cb3fff990eeff041.2d8ebd6.jpeg"},311:function(e,t,c){e.exports=c.p+"img/f7de2dfd-c912-47b2-94f2-5affc5c83807.096fb66.jpeg"},312:function(e,t,c){e.exports=c.p+"img/f7de2dfd-c912-47b2-94f2-5affc5c83807__641a888e5b2b754dabb97b20cb3fff990eeff041.857905c.jpeg"},313:function(e,t,c){e.exports=c.p+"img/dummy.d18b065.jpeg"},317:function(e,t,c){"use strict";c.r(t);var n={name:"Modal",props:["id","title"]},r=c(43),component=Object(r.a)(n,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"modal fade",attrs:{id:e.id,tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[t("div",{staticClass:"modal-dialog modal-fullscreen-sm-down modal-dialog-centered"},[t("div",{staticClass:"modal-content"},[t("div",{staticClass:"modal-header"},[t("h5",{staticClass:"modal-title text-center",attrs:{id:"exampleModalLabel"}},[e._v(e._s(e.title))]),e._v(" "),t("button",{staticClass:"btn-close",attrs:{type:"button","data-bs-dismiss":"modal","aria-label":"Close"}})]),e._v(" "),t("div",{staticClass:"modal-body"},[e._t("default")],2)])])])}),[],!1,null,null,null);t.default=component.exports},345:function(e,t,c){var content=c(356);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,c(59).default)("0878a94b",content,!0,{sourceMap:!1})},355:function(e,t,c){"use strict";c(345)},356:function(e,t,c){var n=c(58)((function(i){return i[1]}));n.push([e.i,".request-section{min-height:77vh}.request-section>div:nth-child(odd){background-color:var(--nepikose-cyan)}.load-more{display:block}.load-more:hover{background:#c2d3d2!important}.submit-btn{background:#e3f6f5!important;padding:1rem}",""]),n.locals={},e.exports=n},360:function(e,t,c){"use strict";c.r(t);c(32),c(275),c(18),c(62),c(45);var n=c(274),r=c(286),f={props:["requests","pageTitle"],data:function(){return{dafaultIcon:"spa",categoryList:[],items:[],displayedItems:[],itemsPerPage:5,currentPage:1}},computed:{showLoadMoreButton:function(){return this.displayedItems.length<this.items.length},showDefaultNoRequest:function(){return 0===this.displayedItems.length}},methods:{getIconkey:function(e){return n.a.getCategories().find((function(t){return t.type===e}))?n.a.getCategories().find((function(t){return t.type===e})).logo:dafaultIcon},loadMoreItems:function(){this.currentPage,this.itemsPerPage;var e=this.currentPage*this.itemsPerPage;this.displayedItems=this.items.slice(0,e),this.currentPage++}},created:function(){this.priorityOrder=["restaurant","taxi","shop"],this.items=Object(r.a)(this.requests,this.priorityOrder),this.loadMoreItems(),this.categoryList=n.a.getCategories().map((function(e){return e.title}))}},o=(c(355),c(43)),component=Object(o.a)(f,(function(){var e=this,t=e._self._c;return t("main",{staticClass:"request-section container"},[t("div",{staticClass:"d-flex flex-column pb-3"},[t("h2",{staticClass:"page-title h5 h4-sm font-1 fs-3"},[e._v(e._s(e.pageTitle)+" "),t("br")]),e._v(" "),t("button",{staticClass:"btn btn-primary m-auto text-uppercase fw-bold",attrs:{type:"button","data-bs-toggle":"modal","data-bs-target":"#offerdemand"}},[e._v("\n     Submit request\n    ")])]),e._v(" "),e._l(e.displayedItems,(function(c,n){return t("div",{key:n,staticClass:"card"},[t("div",{staticClass:"d-flex p-1 align-items-center text-center"},[t("i",{class:"fa fa-".concat(e.getIconkey(c.category)," fs-2 ps-2"),attrs:{"aria-hidden":"true"}}),e._v(" "),t("div",{staticClass:"card__body text-start"},[t("div",{staticClass:"card__title fw-bold fs-4 font-1"},[e._v("\n          "+e._s(c.name)+"\n        ")]),e._v(" "),t("div",{staticClass:"d-flex gap-2 align-items-center"},[t("div",{staticClass:"card__description fs-6 pe-3 font-1 secondary-text"},[t("DescriptionText",{attrs:{description:null==c?void 0:c.message}})],1),e._v(" "),t("div",{staticClass:"fw-bold text-uppercase",class:"offer"===c.request?"text-success":"text-danger"},[e._v("\n            "+e._s(c.request)+"\n          ")])]),e._v(" "),t("div",{staticClass:"card__contact"},[c.contact.phone?t("a",{staticClass:"color-5",attrs:{target:"_blank",alt:"",href:"tel:".concat(c.contact.phone)}},[t("i",{staticClass:"fas fa-phone"})]):e._e(),e._v(" "),c.contact.maplink?t("a",{staticClass:"color-5",attrs:{target:"_blank",alt:"",href:"tel:".concat(c.contact.maplink)}},[t("i",{staticClass:"fas fa-map"})]):e._e(),e._v(" "),c.contact.email?t("a",{staticClass:"color-5",attrs:{target:"_blank",href:"mailto:".concat(c.contact.email)}},[t("i",{staticClass:"fas fa-envelope"})]):e._e(),e._v(" "),c.contact.facebook?t("a",{staticClass:"color-5",attrs:{target:"_blank",href:"".concat(c.contact.facebook)}},[t("i",{staticClass:"fab fa-facebook"})]):e._e(),e._v(" "),c.contact.instagram?t("a",{staticClass:"color-5",attrs:{target:"_blank",href:"".concat(c.contact.instagram)}},[t("i",{staticClass:"fab fa-instagram"})]):e._e()]),e._v(" "),c.contact.website&&e.requestCompleted?t("a",{staticClass:"visit-btn bg-color-2",attrs:{href:"".concat(c.contact.website),target:"_blank"}},[e._v("Visit Website")]):e._e()])])])})),e._v(" "),e.showLoadMoreButton?t("button",{staticClass:"btn btn-primary load-more m-auto my-3",on:{click:e.loadMoreItems}},[e._v("\n    Load More\n  ")]):e._e(),e._v(" "),e.showDefaultNoRequest?t("div",{staticClass:"text-center"},[e._v("\n    No Current On-Going Requests In Barcelona\n  ")]):e._e(),e._v(" "),t("Modal",{attrs:{id:"offerdemand",title:"OFFER Demand form"}},[t("form",{attrs:{action:"https://formsubmit.co/87666f7f42c791cde05c2d06cdcd6c74",method:"POST"}},[t("input",{attrs:{type:"hidden",name:"_captcha",value:"false"}}),e._v(" "),t("div",{staticClass:"mb-3"},[t("label",{attrs:{for:"name"}},[e._v("Name*")]),e._v(" "),t("input",{staticClass:"form-control",attrs:{type:"text",id:"name",name:"name",required:""}})]),e._v(" "),t("div",{staticClass:"mb-3"},[t("label",{attrs:{for:"phone"}},[e._v("Contact phone")]),e._v(" "),t("input",{staticClass:"form-control",attrs:{type:"phone",id:"phone",name:"phone",required:""}})]),e._v(" "),t("div",{staticClass:"mb-3"},[t("label",{attrs:{for:"exampleInputEmail1"}},[e._v("Email address")]),e._v(" "),t("input",{staticClass:"form-control",attrs:{type:"email",id:"exampleInputEmail1","aria-describedby":"emailHelp",name:"email"}})]),e._v(" "),t("select",{staticClass:"form-select mb-4",attrs:{name:"request","aria-label":"Default select example"}},[t("option",{attrs:{value:"",disabled:"",selected:""}},[e._v("Select a request")]),e._v(" "),t("option",{attrs:{value:"Offer"}},[e._v("Offer")]),e._v(" "),t("option",{attrs:{value:"Offer"}},[e._v("Demand")])]),e._v(" "),t("select",{staticClass:"form-select mb-4",attrs:{name:"category","aria-label":"Default select example"}},[t("option",{attrs:{value:"",disabled:"",selected:""}},[e._v("Select a category")]),e._v(" "),e._l(e.categoryList,(function(option,c){return t("option",{key:c,domProps:{value:option}},[e._v("\n          "+e._s(option)+"\n        ")])}))],2),e._v(" "),t("textarea",{staticClass:"field w-100 mt-1 font-bold",attrs:{rows:"8",name:"message",placeholder:"Write you message here"}}),e._v(" "),t("button",{staticClass:"btn btn-primary w-100 my-2 submit-btn",attrs:{type:"submit"}},[e._v("Submit")])])])],2)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{DescriptionText:c(281).default,Modal:c(317).default})}}]);