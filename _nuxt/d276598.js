(window.webpackJsonp=window.webpackJsonp||[]).push([[21,8,11,12,13],{276:function(t,e,o){t.exports=o.p+"img/NepikoseLogo.ceb1d27.svg"},277:function(t,e,o){var content=o(290);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(45).default)("9d48120a",content,!0,{sourceMap:!1})},279:function(t,e,o){"use strict";o.r(e);o(289);var r=o(43),component=Object(r.a)({},(function(){var t=this._self._c;return t("header",{staticClass:"header__section w-100"},[t("nav",{staticClass:"navbar navbar-expand-lg navbar-light"},[t("div",{staticClass:"container-fluid"},[t("nuxt-link",{attrs:{to:"/"}},[t("img",{attrs:{src:o(276),alt:"Nepikose logo"}})])],1)])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Header:o(279).default})},285:function(t,e,o){var content=o(334);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(45).default)("e05774c2",content,!0,{sourceMap:!1})},286:function(t,e,o){"use strict";o.r(e);o(333);var r=o(43),component=Object(r.a)({},(function(){var t=this,e=t._self._c;return e("div",[e("footer",{staticClass:"pt-3"},[e("img",{attrs:{src:o(276),alt:"logo"}}),t._v(" "),e("div",{staticClass:"contact"},[e("nuxt-link",{attrs:{to:"/about"}},[e("p",{staticClass:"mb-2 fs-5"},[t._v("About Us")])]),t._v(" "),e("div",{staticClass:"contact__social py-2"},[e("a",{staticClass:"color-5",attrs:{href:""}},[e("i",{staticClass:"fab fa-facebook fa-lg"})]),t._v(" "),e("a",{staticClass:"color-5",attrs:{href:""}},[e("i",{staticClass:"fab fa-instagram fa-lg"})]),t._v(" "),e("a",{staticClass:"color-5",attrs:{href:"mailto:nepikose@gmail.com"}},[e("i",{staticClass:"fas fa-envelope fa-lg"})]),t._v(" "),e("a",{staticClass:"color-5",attrs:{href:"tel:0034651491515"}},[e("i",{staticClass:"fas fa-phone fa-lg"})])])],1)])])}),[],!1,null,"fa63fc54",null);e.default=component.exports;installComponents(component,{Footer:o(286).default})},289:function(t,e,o){"use strict";o(277)},290:function(t,e,o){var r=o(44)((function(i){return i[1]}));r.push([t.i,".header__section{border-bottom:1px solid gray;border-top:1px solid gray}",""]),r.locals={},t.exports=r},333:function(t,e,o){"use strict";o(285)},334:function(t,e,o){var r=o(44)((function(i){return i[1]}));r.push([t.i,"footer[data-v-fa63fc54]{align-items:center;border-top:1.5px solid #000;display:flex;flex-direction:column;justify-content:center}.contact[data-v-fa63fc54]{padding:.5rem 0;text-align:center}.contact__social[data-v-fa63fc54]{display:flex;gap:1rem;justify-content:center}",""]),r.locals={},t.exports=r},335:function(t,e,o){var content=o(361);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(45).default)("5dc18c0d",content,!0,{sourceMap:!1})},356:function(t,e,o){"use strict";o.r(e);var r={name:"Modal",props:["id","title"]},n=o(43),component=Object(n.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"modal fade",attrs:{id:t.id,tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[e("div",{staticClass:"modal-dialog modal-fullscreen-sm-down modal-dialog-centered"},[e("div",{staticClass:"modal-content"},[e("div",{staticClass:"modal-header"},[e("h5",{staticClass:"modal-title text-center",attrs:{id:"exampleModalLabel"}},[t._v(t._s(t.title))]),t._v(" "),e("button",{staticClass:"btn-close",attrs:{type:"button","data-bs-dismiss":"modal","aria-label":"Close"}})]),t._v(" "),e("div",{staticClass:"modal-body"},[t._t("default")],2)])])])}),[],!1,null,null,null);e.default=component.exports},357:function(t,e,o){var content=o(368);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(45).default)("3d115d87",content,!0,{sourceMap:!1})},359:function(t,e,o){var content=o(374);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(45).default)("284b2b92",content,!0,{sourceMap:!1})},360:function(t,e,o){"use strict";o(335)},361:function(t,e,o){var r=o(44)((function(i){return i[1]}));r.push([t.i,".card[data-v-0628c19c]{background:#fff;border:1px solid #cde1e0!important;box-shadow:5px 5px 5px 0 #e6e6e6}.card[data-v-0628c19c]:hover{background:#ecfbfa;cursor:pointer}.card__title[data-v-0628c19c]{font-size:1.2rem}",""]),r.locals={},t.exports=r},363:function(t,e,o){var content=o(380);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(45).default)("65b7955c",content,!0,{sourceMap:!1})},365:function(t,e,o){"use strict";o.r(e);o(31),o(291),o(18);var r=o(278),n={props:["cardInfo"],methods:{getIconkey:function(t){return r.a.getCategories().find((function(e){return e.type===t}))?r.a.getCategories().find((function(e){return e.type===t})).logo:""},redirectToRequest:function(){this.$router.push("/requests")}}},l=(o(360),o(43)),component=Object(l.a)(n,(function(){var t,e=this,o=e._self._c;return o("div",{staticClass:"card",attrs:{"data-aos":"fade-up"},on:{click:function(t){return e.redirectToRequest()}}},[o("div",{staticClass:"card-body"},[o("h5",{staticClass:"card__title"},[o("i",{class:"fa fa-".concat(e.getIconkey(e.cardInfo.category)," fs-2 me-2"),attrs:{"aria-hidden":"true"}}),e._v(" "),o("span",{staticClass:"fw-bold fs-3"},[e._v(e._s(e.cardInfo.name))])]),e._v(" "),o("DescriptionText",{staticClass:"partner__subtitle px-2 py-1",attrs:{description:null===(t=e.cardInfo)||void 0===t?void 0:t.message,limit:100}})],1),e._v(" "),o("div",{staticClass:"card__contact ps-3"},[e.cardInfo.contact.phone?o("a",{staticClass:"color-5",attrs:{target:"_blank",alt:"",href:"tel:".concat(e.cardInfo.contact.phone)}},[o("i",{staticClass:"fas fa-phone me-2"}),e._v("Call")]):e._e(),e._v(" "),e.cardInfo.contact.maplink?o("a",{staticClass:"color-5",attrs:{target:"_blank",alt:"",href:"tel:".concat(e.cardInfo.contact.maplink)}},[o("i",{staticClass:"fas fa-map"})]):e._e(),e._v(" "),e.cardInfo.contact.email?o("a",{staticClass:"color-5",attrs:{target:"_blank",href:"mailto:".concat(e.cardInfo.contact.email,"?cc=nepikose@gmail.com")}},[o("i",{staticClass:"fas fa-envelope me-2"}),e._v("Email")]):e._e(),e._v(" "),e.cardInfo.contact.facebook?o("a",{staticClass:"color-5",attrs:{target:"_blank",href:"".concat(e.cardInfo.contact.facebook)}},[o("i",{staticClass:"fab fa-facebook"})]):e._e(),e._v(" "),e.cardInfo.contact.instagram?o("a",{staticClass:"color-5",attrs:{target:"_blank",href:"".concat(e.cardInfo.contact.instagram)}},[o("i",{staticClass:"fab fa-instagram"})]):e._e(),e._v(" "),o("div",{staticClass:"fw-bold text-uppercase ms-auto pe-3",class:"offer"===e.cardInfo.request?"text-success":"text-danger"},[e._v("\n      "+e._s(e.cardInfo.request)+"\n    ")])])])}),[],!1,null,"0628c19c",null);e.default=component.exports;installComponents(component,{DescriptionText:o(283).default})},366:function(t,e,o){t.exports=o.p+"img/Nepikose-hero-image.b247901.jpg"},367:function(t,e,o){"use strict";o(357)},368:function(t,e,o){var r=o(44)((function(i){return i[1]}));r.push([t.i,'.hero-img[data-v-61168273]{background-position:bottom;background-size:cover;height:18rem;width:100%}.hero-img[data-v-61168273]:before{content:"";filter:blur(5px)!important}.hero-overlay[data-v-61168273]{align-items:center;background-color:rgba(0,0,0,.6);display:flex;flex-direction:column;height:18rem;justify-content:center}.hero-text[data-v-61168273]{left:100px;padding-right:.2rem;position:absolute}@media only screen and (max-width:600px){.hero-text[data-v-61168273]{left:20px}}.hero-text__title[data-v-61168273]{font-weight:700;text-transform:uppercase}.hero-text__subtitle[data-v-61168273]{font-size:20px;margin-bottom:15px}h2[data-v-61168273],h3[data-v-61168273]{color:#fff!important}.hero-button[data-v-61168273]{border:1px solid;border-radius:13px;color:#fff;font-size:19px;line-height:2rem;margin-top:11px;padding:.5rem 1rem}a span[data-v-61168273]{background-color:hsla(0,1%,51%,.3)}a span[data-v-61168273]:hover{background-color:transparent;color:#fff}',""]),r.locals={},t.exports=r},373:function(t,e,o){"use strict";o(359)},374:function(t,e,o){var r=o(44)((function(i){return i[1]}));r.push([t.i,"a i{transition:transform .3s ease}a i:hover{transform:scale(1.1)}.category-section{background:#fff;border:1px solid #cde1e0!important;border-radius:10px;box-shadow:5px 5px 5px 0 #e6e6e6;padding:1rem}",""]),r.locals={},t.exports=r},379:function(t,e,o){"use strict";o(363)},380:function(t,e,o){var r=o(44)((function(i){return i[1]}));r.push([t.i,".offer-demand{background:var(--nepikose-cyan);border:1px solid #cde1e0!important;border-radius:10px;box-shadow:5px 5px 5px 0 #e6e6e6;display:flex;flex-direction:column;justify-content:center;padding:1rem}.offer-demand__title{align-items:flex-start;display:flex;flex:1}.offer-demand__button{background:#fff!important;border:1px solid #a6aead!important;font-size:1.3rem;font-weight:700;margin:auto auto 1rem;padding:1rem;transition:transform .3s}.offer-demand__button:hover{transform:scale(1.02)}.offer-demand__form{display:flex;flex-direction:column;gap:2rem}.see-all-button{background-color:transparent;border:1px solid;border-radius:12px;color:#423c3c;font-size:16px;line-height:1.5rem;margin:.2rem 1rem auto auto;text-align:center;width:4rem}.see-more{background:#fff;border:1px solid #cde1e0;border-radius:15px;box-shadow:5px 5px 5px 0 #e6e6e6;font-size:1.5rem;margin:auto;padding:.2rem .6rem}.see-more:hover{background:#cde1e0}",""]),r.locals={},t.exports=r},385:function(t,e,o){"use strict";o.r(e);var r={name:"HeroSection",data:function(){return{heroImage:o(366)}}},n=(o(367),o(43)),component=Object(n.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"w-100"},[e("div",{staticClass:"hero-img",style:{"background-image":"url(".concat(t.heroImage,")")}},[e("div",{staticClass:"hero-overlay"},[e("div",{staticClass:"hero-text"},[e("h2",{staticClass:"hero-text__title"},[t._v("Explore opportunities")]),t._v(" "),e("h3",{staticClass:"hero-text__subtitle"},[t._v("\n          We connect Nepalese job seekers & employees based in Barcelona\n        ")]),t._v(" "),e("nuxt-link",{attrs:{to:"/requests"}},[e("span",{staticClass:"hero-button"},[t._v("Check current offers / demands")])])],1)])])])}),[],!1,null,"61168273",null);e.default=component.exports},386:function(t,e,o){"use strict";o.r(e);var r=o(278),n={data:function(){return{categories:{}}},created:function(){this.categories=r.a.getCategories()}},l=(o(373),o(43)),component=Object(l.a)(n,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"container mt-4"},[e("div",{staticClass:"category-section"},[e("h2",{staticClass:"page-title text-center h4-sm font-1 fs-3 font-bold"},[t._v("\n      Nepalese owned businesses by categories\n    ")]),t._v(" "),e("div",{staticClass:"row"},t._l(t.categories,(function(o){return e("div",{key:o.type,staticClass:"col-4 text-center pb-3"},[e("nuxt-link",{attrs:{to:"/category/".concat(o.type)}},[e("i",{class:"fa fa-".concat(o.logo," fs-1"),attrs:{"aria-hidden":"true"}}),t._v(" "),e("p",{staticClass:"h6"},[t._v(t._s(o.title))])])],1)})),0)])])}),[],!1,null,null,null);e.default=component.exports},389:function(t,e,o){var content=o(414);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(45).default)("af327730",content,!0,{sourceMap:!1})},394:function(t,e,o){"use strict";o.r(e);o(62),o(46),o(18),o(109),o(47);var r=o(278),n={data:function(){return{categories:["Restaurant","Shops"],isExpanded:[],featuredRequest:[]}},created:function(){var t=r.a.getRequests().filter((function(t){return"restaurant"===t.category})).slice(0,2),e=r.a.getRequests().filter((function(t){return"professional"===t.category})).slice(0,2);this.featuredRequest=t.concat(e),this.categories=r.a.getCategories().map((function(t){return t.title}))}},l=(o(379),o(43)),component=Object(l.a)(n,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"container mt-4"},[e("div",{staticClass:"offer-demand"},[e("div",{staticClass:"offer-demand__title"},[e("h2",{staticClass:"text-center pb-3 fs-3 fw-bold",staticStyle:{flex:"4"}},[t._v("\n        Current offerings\n      ")]),t._v(" "),e("nuxt-link",{attrs:{to:"/requests"}},[e("div",{staticClass:"fw-bold see-all-button"},[t._v("See all")])])],1),t._v(" "),e("div",{staticClass:"d-flex gap-2 px-3 flex-column"},t._l(t.featuredRequest,(function(t,o){return e("CardSection",{key:o,attrs:{cardInfo:t}})})),1),t._v(" "),t._m(0),t._v(" "),e("Modal",{attrs:{id:"offerdemand",title:"OFFER Demand form"}},[e("form",{attrs:{action:"https://formsubmit.co/nepikose@gmail.com",method:"POST"}},[e("input",{attrs:{type:"hidden",name:"_captcha",value:"false"}}),t._v(" "),e("div",{staticClass:"mb-3"},[e("label",{attrs:{for:"name"}},[t._v("Name*")]),t._v(" "),e("input",{staticClass:"form-control",attrs:{type:"text",id:"name",name:"name",required:""}})]),t._v(" "),e("div",{staticClass:"mb-3"},[e("label",{attrs:{for:"phone"}},[t._v("Contact phone*")]),t._v(" "),e("input",{staticClass:"form-control",attrs:{type:"phone",id:"phone",name:"phone",pattern:"[0-9]{10}",title:"Please enter a 10-digit phone number",minlength:"10",maxlength:"15",required:""}})]),t._v(" "),e("div",{staticClass:"mb-3"},[e("label",{attrs:{for:"exampleInputEmail1"}},[t._v("Email address")]),t._v(" "),e("input",{staticClass:"form-control",attrs:{type:"email",id:"exampleInputEmail1","aria-describedby":"emailHelp",name:"email"}})]),t._v(" "),e("select",{staticClass:"form-select mb-4",attrs:{name:"request","aria-label":"Default select example"}},[e("option",{attrs:{value:"",disabled:"",selected:""}},[t._v("Select a request*")]),t._v(" "),e("option",{attrs:{value:"Offer"}},[t._v("Offer")]),t._v(" "),e("option",{attrs:{value:"Offer"}},[t._v("Demand")])]),t._v(" "),e("select",{staticClass:"form-select mb-4",attrs:{name:"category","aria-label":"Default select example"}},[e("option",{attrs:{value:"",disabled:"",selected:""}},[t._v("Select a category*")]),t._v(" "),t._l(t.categories,(function(option,o){return e("option",{key:o,domProps:{value:option}},[t._v("\n            "+t._s(option)+"\n          ")])}))],2),t._v(" "),e("textarea",{staticClass:"field w-100 mt-1 font-bold",attrs:{rows:"8",name:"message",placeholder:"Write you message here"}}),t._v(" "),e("button",{staticClass:"btn btn-primary w-100 my-2 submit-btn",attrs:{type:"submit"}},[t._v("\n          Submit\n        ")])])])],1)])}),[function(){var t=this._self._c;return t("div",{staticStyle:{display:"flex"}},[t("button",{staticClass:"btn btn-primary offer-demand__button see-more my-3",attrs:{type:"button","data-bs-toggle":"modal","data-bs-target":"#offerdemand"}},[this._v("\n        Submit request\n      ")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{CardSection:o(365).default,Modal:o(356).default})},413:function(t,e,o){"use strict";o(389)},414:function(t,e,o){var r=o(44)((function(i){return i[1]}));r.push([t.i,".main-page[data-v-8f433c8c]{background-color:var(--nepikose-cyan)}",""]),r.locals={},t.exports=r},423:function(t,e,o){"use strict";o.r(e);var r=o(279),n=o(385),l=o(386),c=o(365),d=o(392),f=o(286),m={name:"IndexPage",components:{Header:r.default,HeroSection:n.default,CategorySection:l.default,CardSection:c.default,FeatureSection:d.default,Footer:f.default}},v=(o(413),o(43)),component=Object(v.a)(m,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"main-page font-1"},[e("Header"),t._v(" "),e("HeroSection"),t._v(" "),e("CategorySection",{attrs:{"data-aos":"fade-up"}}),t._v(" "),e("OfferDemandSection",{attrs:{"data-aos":"fade-up"}}),t._v(" "),e("FeatureSection",{attrs:{"data-aos":"fade-up"}}),t._v(" "),e("Footer")],1)}),[],!1,null,"8f433c8c",null);e.default=component.exports;installComponents(component,{Header:o(279).default,HeroSection:o(385).default,CategorySection:o(386).default,OfferDemandSection:o(394).default,FeatureSection:o(392).default,Footer:o(286).default})}}]);