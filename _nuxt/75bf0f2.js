(window.webpackJsonp=window.webpackJsonp||[]).push([[13,4,6,12],{275:function(t,e,r){var content=r(286);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(45).default)("9c866c4c",content,!0,{sourceMap:!1})},276:function(t,e,r){"use strict";var n=r(2),o=r(4),c=r(30),l=r(25),d=r(31),f=r(198),m=r(13),v=r(3),_=r(197),x=r(135),h=r(282),C=r(283),y=r(83),k=r(284),I=[],w=o(I.sort),S=o(I.push),M=v((function(){I.sort(void 0)})),R=v((function(){I.sort(null)})),T=x("sort"),O=!v((function(){if(y)return y<70;if(!(h&&h>3)){if(C)return!0;if(k)return k<603;var code,t,e,r,n="";for(code=65;code<76;code++){switch(t=String.fromCharCode(code),code){case 66:case 69:case 70:case 72:e=3;break;case 68:case 71:e=4;break;default:e=2}for(r=0;r<47;r++)I.push({k:t+r,v:e})}for(I.sort((function(a,b){return b.v-a.v})),r=0;r<I.length;r++)t=I[r].k.charAt(0),n.charAt(n.length-1)!==t&&(n+=t);return"DGBEFHACIJK"!==n}}));n({target:"Array",proto:!0,forced:M||!R||!T||!O},{sort:function(t){void 0!==t&&c(t);var e=l(this);if(O)return void 0===t?w(e):w(e,t);var r,n,o=[],v=d(e);for(n=0;n<v;n++)n in e&&S(o,e[n]);for(_(o,function(t){return function(e,r){return void 0===r?-1:void 0===e?1:void 0!==t?+t(e,r)||0:m(e)>m(r)?1:-1}}(t)),r=d(o),n=0;n<r;)e[n]=o[n++];for(;n<v;)f(e,n++);return e}})},279:function(t,e,r){"use strict";r(47),r(46),r(18),r(280),r(276),r(36),r(61);function n(){return JSON.parse(sessionStorage.getItem("data"))}e.a={getDataFromSession:n,getCategories:function(){return n().categories},getPartnersByType:function(t){var e,data=n();return(e=data.partners.filter((function(e){return e.type===t}))).sort((function(a,b){return a.description&&!b.description?-1:!a.description&&b.description?1:0})),e},getPartnerById:function(t){return n().partners.find((function(e){return e.id===t}))},getPartners:function(t){return n().partners},getRequests:function(t){return n().requests}}},280:function(t,e,r){"use strict";var n=r(2),o=r(84).find,c=r(136),l="find",d=!0;l in[]&&Array(1)[l]((function(){d=!1})),n({target:"Array",proto:!0,forced:d},{find:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),c(l)},282:function(t,e,r){"use strict";var n=r(62).match(/firefox\/(\d+)/i);t.exports=!!n&&+n[1]},283:function(t,e,r){"use strict";var n=r(62);t.exports=/MSIE|Trident/.test(n)},284:function(t,e,r){"use strict";var n=r(62).match(/AppleWebKit\/(\d+)\./);t.exports=!!n&&+n[1]},285:function(t,e,r){"use strict";r(275)},286:function(t,e,r){var n=r(44)((function(i){return i[1]}));n.push([t.i,".read-less,.read-more{background-color:transparent;border:1px solid #717171!important;border-radius:2rem;color:#717171;cursor:pointer;font-size:1rem;margin-bottom:.5rem;padding:0 .5rem!important}.read-less:hover,.read-more:hover{color:#000}",""]),n.locals={},t.exports=n},287:function(t,e,r){"use strict";r.r(e);r(36),r(61),r(199);var n={props:{description:String,limit:{type:Number,default:150}},data:function(){return{expanded:!1}},computed:{truncatedText:function(){return this.description.length<=this.limit?this.description:this.description.substring(0,this.limit)+"..."}},methods:{toggleText:function(){this.expanded=!this.expanded}}},o=(r(285),r(43)),component=Object(o.a)(n,(function(){var t=this,e=t._self._c;return e("div",[t.expanded?e("p",[t._v(t._s(t.description))]):e("p",[t._v(t._s(t.truncatedText))]),t._v(" "),t.description.length>t.limit?e("button",{staticClass:"read-more",on:{click:t.toggleText}},[t._v("\n    "+t._s(t.expanded?"Read Less":"Read More")+"\n  ")]):t._e()])}),[],!1,null,null,null);e.default=component.exports},322:function(t,e,r){var content=r(327);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(45).default)("5dc18c0d",content,!0,{sourceMap:!1})},323:function(t,e,r){"use strict";r.r(e);var n={name:"Modal",props:["id","title"]},o=r(43),component=Object(o.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"modal fade",attrs:{id:t.id,tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[e("div",{staticClass:"modal-dialog modal-fullscreen-sm-down modal-dialog-centered"},[e("div",{staticClass:"modal-content"},[e("div",{staticClass:"modal-header"},[e("h5",{staticClass:"modal-title text-center",attrs:{id:"exampleModalLabel"}},[t._v(t._s(t.title))]),t._v(" "),e("button",{staticClass:"btn-close",attrs:{type:"button","data-bs-dismiss":"modal","aria-label":"Close"}})]),t._v(" "),e("div",{staticClass:"modal-body"},[t._t("default")],2)])])])}),[],!1,null,null,null);e.default=component.exports},326:function(t,e,r){"use strict";r(322)},327:function(t,e,r){var n=r(44)((function(i){return i[1]}));n.push([t.i,".card[data-v-0628c19c]{background:#fff;border:1px solid #cde1e0!important;box-shadow:5px 5px 5px 0 #e6e6e6}.card[data-v-0628c19c]:hover{background:#ecfbfa;cursor:pointer}.card__title[data-v-0628c19c]{font-size:1.2rem}",""]),n.locals={},t.exports=n},329:function(t,e,r){var content=r(342);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(45).default)("53f884ba",content,!0,{sourceMap:!1})},331:function(t,e,r){"use strict";r.r(e);r(32),r(280),r(18);var n=r(279),o={props:["cardInfo"],methods:{getIconkey:function(t){return n.a.getCategories().find((function(e){return e.type===t}))?n.a.getCategories().find((function(e){return e.type===t})).logo:""},redirectToRequest:function(){this.$router.push("/requests")}}},c=(r(326),r(43)),component=Object(c.a)(o,(function(){var t,e=this,r=e._self._c;return r("div",{staticClass:"card",attrs:{"data-aos":"fade-up"},on:{click:function(t){return e.redirectToRequest()}}},[r("div",{staticClass:"card-body"},[r("h5",{staticClass:"card__title"},[r("i",{class:"fa fa-".concat(e.getIconkey(e.cardInfo.category)," fs-2 me-2"),attrs:{"aria-hidden":"true"}}),e._v(" "),r("span",{staticClass:"fw-bold fs-3"},[e._v(e._s(e.cardInfo.name))])]),e._v(" "),r("DescriptionText",{staticClass:"partner__subtitle px-2 py-1",attrs:{description:null===(t=e.cardInfo)||void 0===t?void 0:t.message,limit:100}})],1),e._v(" "),r("div",{staticClass:"card__contact ps-3"},[e.cardInfo.contact.phone?r("a",{staticClass:"color-5",attrs:{target:"_blank",alt:"",href:"tel:".concat(e.cardInfo.contact.phone)}},[r("i",{staticClass:"fas fa-phone me-2"}),e._v("Call")]):e._e(),e._v(" "),e.cardInfo.contact.maplink?r("a",{staticClass:"color-5",attrs:{target:"_blank",alt:"",href:"tel:".concat(e.cardInfo.contact.maplink)}},[r("i",{staticClass:"fas fa-map"})]):e._e(),e._v(" "),e.cardInfo.contact.email?r("a",{staticClass:"color-5",attrs:{target:"_blank",href:"mailto:".concat(e.cardInfo.contact.email,"?cc=nepikose@gmail.com")}},[r("i",{staticClass:"fas fa-envelope me-2"}),e._v("Email")]):e._e(),e._v(" "),e.cardInfo.contact.facebook?r("a",{staticClass:"color-5",attrs:{target:"_blank",href:"".concat(e.cardInfo.contact.facebook)}},[r("i",{staticClass:"fab fa-facebook"})]):e._e(),e._v(" "),e.cardInfo.contact.instagram?r("a",{staticClass:"color-5",attrs:{target:"_blank",href:"".concat(e.cardInfo.contact.instagram)}},[r("i",{staticClass:"fab fa-instagram"})]):e._e(),e._v(" "),r("div",{staticClass:"fw-bold text-uppercase ms-auto pe-3",class:"offer"===e.cardInfo.request?"text-success":"text-danger"},[e._v("\n      "+e._s(e.cardInfo.request)+"\n    ")])])])}),[],!1,null,"0628c19c",null);e.default=component.exports;installComponents(component,{DescriptionText:r(287).default})},341:function(t,e,r){"use strict";r(329)},342:function(t,e,r){var n=r(44)((function(i){return i[1]}));n.push([t.i,".offer-demand{background:var(--nepikose-cyan);border:1px solid #cde1e0!important;border-radius:10px;box-shadow:5px 5px 5px 0 #e6e6e6;display:flex;flex-direction:column;justify-content:center;padding:1rem}.offer-demand__title{align-items:flex-start;display:flex;flex:1}.offer-demand__button{background:#fff!important;border:1px solid #a6aead!important;font-size:1.3rem;font-weight:700;margin:auto auto 1rem;padding:1rem;transition:transform .3s}.offer-demand__button:hover{transform:scale(1.02)}.offer-demand__form{display:flex;flex-direction:column;gap:2rem}.see-all-button{background-color:transparent;border:1px solid;border-radius:12px;color:#423c3c;font-size:16px;line-height:1.5rem;margin:.2rem 1rem auto auto;text-align:center;width:4rem}.see-more{background:#fff;border:1px solid #cde1e0;border-radius:15px;box-shadow:5px 5px 5px 0 #e6e6e6;font-size:1.5rem;margin:auto;padding:.2rem .6rem}.see-more:hover{background:#cde1e0}",""]),n.locals={},t.exports=n},355:function(t,e,r){"use strict";r.r(e);r(63),r(46),r(18),r(109),r(48);var n=r(279),o={data:function(){return{categories:["Restaurant","Shops"],isExpanded:[],featuredRequest:[]}},created:function(){var t=n.a.getRequests().filter((function(t){return"restaurant"===t.category})).slice(0,2),e=n.a.getRequests().filter((function(t){return"professional"===t.category})).slice(0,2);this.featuredRequest=t.concat(e),this.categories=n.a.getCategories().map((function(t){return t.title}))}},c=(r(341),r(43)),component=Object(c.a)(o,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"container mt-4"},[e("div",{staticClass:"offer-demand"},[e("div",{staticClass:"offer-demand__title"},[e("h2",{staticClass:"text-center pb-3 fs-3 fw-bold",staticStyle:{flex:"4"}},[t._v("Current offerings")]),t._v(" "),e("nuxt-link",{attrs:{to:"/requests"}},[e("div",{staticClass:"fw-bold see-all-button"},[t._v("See all")])])],1),t._v(" "),e("div",{staticClass:"d-flex gap-2 px-3 flex-column"},t._l(t.featuredRequest,(function(t,r){return e("CardSection",{key:r,attrs:{cardInfo:t}})})),1),t._v(" "),t._m(0),t._v(" "),e("Modal",{attrs:{id:"offerdemand",title:"OFFER Demand form"}},[e("form",{attrs:{action:"https://formsubmit.co/nepikose@gmail.com",method:"POST"}},[e("input",{attrs:{type:"hidden",name:"_captcha",value:"false"}}),t._v(" "),e("div",{staticClass:"mb-3"},[e("label",{attrs:{for:"name"}},[t._v("Name*")]),t._v(" "),e("input",{staticClass:"form-control",attrs:{type:"text",id:"name",name:"name",required:""}})]),t._v(" "),e("div",{staticClass:"mb-3"},[e("label",{attrs:{for:"phone"}},[t._v("Contact phone*")]),t._v(" "),e("input",{staticClass:"form-control",attrs:{type:"phone",id:"phone",name:"phone",required:""}})]),t._v(" "),e("div",{staticClass:"mb-3"},[e("label",{attrs:{for:"exampleInputEmail1"}},[t._v("Email address")]),t._v(" "),e("input",{staticClass:"form-control",attrs:{type:"email",id:"exampleInputEmail1","aria-describedby":"emailHelp",name:"email"}})]),t._v(" "),e("select",{staticClass:"form-select mb-4",attrs:{name:"request","aria-label":"Default select example"}},[e("option",{attrs:{value:"",disabled:"",selected:""}},[t._v("Select a request*")]),t._v(" "),e("option",{attrs:{value:"Offer"}},[t._v("Offer")]),t._v(" "),e("option",{attrs:{value:"Offer"}},[t._v("Demand")])]),t._v(" "),e("select",{staticClass:"form-select mb-4",attrs:{name:"category","aria-label":"Default select example"}},[e("option",{attrs:{value:"",disabled:"",selected:""}},[t._v("Select a category*")]),t._v(" "),t._l(t.categories,(function(option,r){return e("option",{key:r,domProps:{value:option}},[t._v("\n            "+t._s(option)+"\n          ")])}))],2),t._v(" "),e("textarea",{staticClass:"field w-100 mt-1 font-bold",attrs:{rows:"8",name:"message",placeholder:"Write you message here"}}),t._v(" "),e("button",{staticClass:"btn btn-primary w-100 my-2 submit-btn",attrs:{type:"submit"}},[t._v("Submit")])])])],1)])}),[function(){var t=this._self._c;return t("div",{staticStyle:{display:"flex"}},[t("button",{staticClass:"btn btn-primary offer-demand__button see-more my-3",attrs:{type:"button","data-bs-toggle":"modal","data-bs-target":"#offerdemand"}},[this._v("\n        Submit request\n      ")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{CardSection:r(331).default,Modal:r(323).default})}}]);