(window.webpackJsonp=window.webpackJsonp||[]).push([[16,4,6,8,9],{269:function(t,e,r){var content=r(278);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(59).default)("9c866c4c",content,!0,{sourceMap:!1})},270:function(t,e,r){"use strict";r(44),r(18),r(271),r(272),r(36),r(60);function n(){return JSON.parse(sessionStorage.getItem("data"))}e.a={getDataFromSession:n,getCategories:function(){return n().categories},getPartnersByType:function(t){var e,data=n();return(e=data.partners.filter((function(e){return e.type===t}))).sort((function(a,b){return a.description&&!b.description?-1:!a.description&&b.description?1:0})),e},getPartnerById:function(t){return n().partners.find((function(e){return e.id===t}))},getPartners:function(t){return n().partners},getRequests:function(t){return n().requests}}},271:function(t,e,r){"use strict";var n=r(2),o=r(83).find,c=r(132),l="find",d=!0;l in[]&&Array(1)[l]((function(){d=!1})),n({target:"Array",proto:!0,forced:d},{find:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),c(l)},272:function(t,e,r){"use strict";var n=r(2),o=r(4),c=r(30),l=r(25),d=r(31),f=r(195),m=r(13),_=r(3),v=r(194),h=r(133),x=r(273),C=r(274),k=r(82),y=r(275),w=[],T=o(w.sort),N=o(w.push),M=_((function(){w.sort(void 0)})),j=_((function(){w.sort(null)})),E=h("sort"),A=!_((function(){if(k)return k<70;if(!(x&&x>3)){if(C)return!0;if(y)return y<603;var code,t,e,r,n="";for(code=65;code<76;code++){switch(t=String.fromCharCode(code),code){case 66:case 69:case 70:case 72:e=3;break;case 68:case 71:e=4;break;default:e=2}for(r=0;r<47;r++)w.push({k:t+r,v:e})}for(w.sort((function(a,b){return b.v-a.v})),r=0;r<w.length;r++)t=w[r].k.charAt(0),n.charAt(n.length-1)!==t&&(n+=t);return"DGBEFHACIJK"!==n}}));n({target:"Array",proto:!0,forced:M||!j||!E||!A},{sort:function(t){void 0!==t&&c(t);var e=l(this);if(A)return void 0===t?T(e):T(e,t);var r,n,o=[],_=d(e);for(n=0;n<_;n++)n in e&&N(o,e[n]);for(v(o,function(t){return function(e,r){return void 0===r?-1:void 0===e?1:void 0!==t?+t(e,r)||0:m(e)>m(r)?1:-1}}(t)),r=d(o),n=0;n<r;)e[n]=o[n++];for(;n<_;)f(e,n++);return e}})},273:function(t,e,r){var n=r(61).match(/firefox\/(\d+)/i);t.exports=!!n&&+n[1]},274:function(t,e,r){var n=r(61);t.exports=/MSIE|Trident/.test(n)},275:function(t,e,r){var n=r(61).match(/AppleWebKit\/(\d+)\./);t.exports=!!n&&+n[1]},276:function(t,e,r){t.exports=r.p+"img/NepikoseLogo.ceb1d27.svg"},277:function(t,e,r){"use strict";r(269)},278:function(t,e,r){var n=r(58)((function(i){return i[1]}));n.push([t.i,".read-less,.read-more{background-color:transparent;border:1px solid #717171!important;border-radius:2rem;color:#717171;cursor:pointer;font-size:1rem;margin-bottom:.5rem;padding:0 .5rem!important}.read-less:hover,.read-more:hover{color:#000}",""]),n.locals={},t.exports=n},279:function(t,e,r){var content=r(285);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(59).default)("9d48120a",content,!0,{sourceMap:!1})},280:function(t,e,r){var content=r(288);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(59).default)("2c15a5f8",content,!0,{sourceMap:!1})},281:function(t,e,r){"use strict";r.r(e);r(36),r(60),r(196);var n={props:{description:String,limit:{type:Number,default:150}},data:function(){return{expanded:!1}},computed:{truncatedText:function(){return this.description.length<=this.limit?this.description:this.description.substring(0,this.limit)+"..."}},methods:{toggleText:function(){this.expanded=!this.expanded}}},o=(r(277),r(43)),component=Object(o.a)(n,(function(){var t=this,e=t._self._c;return e("div",[t.expanded?e("p",[t._v(t._s(t.description))]):e("p",[t._v(t._s(t.truncatedText))]),t._v(" "),t.description.length>t.limit?e("button",{staticClass:"read-more",on:{click:t.toggleText}},[t._v("\n    "+t._s(t.expanded?"Read Less":"Read More")+"\n  ")]):t._e()])}),[],!1,null,null,null);e.default=component.exports},282:function(t,e,r){"use strict";r.r(e);r(284);var n=r(43),component=Object(n.a)({},(function(){var t=this._self._c;return t("header",{staticClass:"header__section w-100"},[t("nav",{staticClass:"navbar navbar-expand-lg navbar-light"},[t("div",{staticClass:"container-fluid"},[t("nuxt-link",{attrs:{to:"/"}},[t("img",{attrs:{src:r(276),alt:"Nepikose logo"}})])],1)])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Header:r(282).default})},283:function(t,e,r){"use strict";r.r(e);r(287);var n=r(43),component=Object(n.a)({},(function(){var t=this,e=t._self._c;return e("div",[e("footer",{staticClass:"pt-3"},[e("img",{attrs:{src:r(276),alt:"logo"}}),t._v(" "),e("div",{staticClass:"contact"},[e("p",{staticClass:"mb-2 fs-5"},[t._v("From Nepali To Nepali")]),t._v(" "),e("div",{staticClass:"contact__social py-2"},[e("a",{staticClass:"color-5",attrs:{href:""}},[e("i",{staticClass:"fab fa-facebook fa-lg"})]),t._v(" "),e("a",{staticClass:"color-5",attrs:{href:""}},[e("i",{staticClass:"fab fa-instagram fa-lg"})]),t._v(" "),e("a",{staticClass:"color-5",attrs:{href:"mailto:"}},[e("i",{staticClass:"fas fa-envelope fa-lg"})]),t._v(" "),e("a",{staticClass:"color-5",attrs:{href:"tel:"}},[e("i",{staticClass:"fas fa-phone fa-lg"})])])])])])}),[],!1,null,"21150fd8",null);e.default=component.exports;installComponents(component,{Footer:r(283).default})},284:function(t,e,r){"use strict";r(279)},285:function(t,e,r){var n=r(58)((function(i){return i[1]}));n.push([t.i,".header__section{border-bottom:1px solid gray;border-top:1px solid gray}",""]),n.locals={},t.exports=n},286:function(t,e,r){t.exports=r.p+"img/dummy.d18b065.jpeg"},287:function(t,e,r){"use strict";r(280)},288:function(t,e,r){var n=r(58)((function(i){return i[1]}));n.push([t.i,"footer[data-v-21150fd8]{align-items:center;border-top:1.5px solid #000;display:flex;flex-direction:column;justify-content:center}.contact[data-v-21150fd8]{padding:.5rem 0;text-align:center}.contact__social[data-v-21150fd8]{display:flex;gap:1rem;justify-content:center}",""]),n.locals={},t.exports=n},291:function(t,e,r){var content=r(306);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(59).default)("8518edb0",content,!0,{sourceMap:!1})},305:function(t,e,r){"use strict";r(291)},306:function(t,e,r){var n=r(58)((function(i){return i[1]}));n.push([t.i,".generic-section{min-height:78vh}.page-title{font-size:1.5rem;font-weight:700;padding:1rem 0!important;text-align:center;text-transform:capitalize}.card{border:none;padding:.25rem}.card__logo{border-radius:50%;flex-shrink:0;height:5rem;width:5rem}.card__contact{display:flex;flex-direction:row;gap:1rem;height:40px;padding-bottom:.5rem;padding-top:.5rem}.card__contact i:hover{color:gray;transform:scale(1.1)}.card__body{padding:.5rem 1rem}.card__subtitle{font-size:.9rem}.card__contact>a:nth-child(2n){animation:updown 1.5s ease}.card__contact>a:nth-child(odd){animation:updownReverse 1.5s ease}.card__description,.visit-btn{font-size:.9rem}.visit-btn{border-radius:.7rem;box-shadow:0 7px 29px 0 hsla(240,5%,41%,.2);display:inline-block;padding:.3rem 2rem;text-transform:uppercase;transition:transform .3s ease}.visit-btn:hover{transform:scale(1.06)!important}.generic-section>div:nth-child(odd){background-color:var(--nepikose-cyan)}@keyframes updown{0%{transform:translateY(-8%)}50%{transform:translateY(8%)}to{transform:translateY(-8%)}}@keyframes updownReverse{0%{transform:translateY(8%)}50%{transform:translateY(-8%)}to{transform:translateY(8%)}}.skeleton{animation:skeleton-loading 1s linear infinite alternate;opacity:.7}.skeleton__text{border-radius:.6rem;height:35px;margin-bottom:.5rem;padding-bottom:.5rem;padding-top:.5rem;width:100%}.skeleton__website{border-radius:.7rem;box-shadow:0 7px 29px 0 hsla(240,5%,41%,.2);font-size:.8rem;height:24px;padding:.3rem 2rem;text-transform:uppercase;width:100%}.read-less{display:inline-block}@keyframes skeleton-loading{0%{background-color:#a3b8c2}to{background-color:#f0f3f5}}",""]),n.locals={},t.exports=n},323:function(t,e,r){"use strict";r.r(e);r(36),r(60),r(62);var n={name:"GenericPage",props:["pageTitle","description","partners","icon","category"],data:function(){return{requestCompleted:!1,isExpanded:[]}},methods:{onLoadHandler:function(t){t.preventDefault(),this.requestCompleted=!0},toggleExpand:function(t){console.log("toggleExpand",t),this.$set(this.isExpanded,t,!this.isExpanded[t])},truncatedText:function(t,e){return this.isExpanded[e]?t:t.slice(0,70)+"..."},showReadMore:function(text){console.log(text)}}},o=(r(305),r(43)),component=Object(o.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"generic-section"},[e("h2",{staticClass:"page-title"},[t._v(t._s(t.pageTitle)+" "),e("br")]),t._v(" "),t._l(t.partners,(function(n,o){return e("div",{key:o,staticClass:"card"},[e("div",{staticClass:"d-flex p-1 align-items-center text-center"},[e("img",{staticClass:"card__logo",class:t.requestCompleted?"":"skeleton",attrs:{src:r(286),alt:"Card image cap"},on:{load:function(e){return t.onLoadHandler(e)}}}),t._v(" "),e("div",{staticClass:"card__body text-start"},[e("div",{staticClass:"card__title fw-bold fs-4 font-1"},[t._v("\n          "+t._s(n.title)+"\n        ")]),t._v(" "),e("div",{staticClass:"card__description fs-6 font-1 secondary-text"},[e("DescriptionText",{attrs:{description:n.description}})],1),t._v(" "),e("div",{staticClass:"card__contact"},[n.contact.phone?e("a",{staticClass:"color-5",attrs:{target:"_blank",alt:"",href:"tel:".concat(n.contact.phone)}},[e("i",{staticClass:"fas fa-phone"})]):t._e(),t._v(" "),n.contact.maplink?e("a",{staticClass:"color-5",attrs:{target:"_blank",alt:"",href:"".concat(n.contact.maplink)}},[e("i",{staticClass:"fas fa-map"})]):t._e(),t._v(" "),n.contact.email?e("a",{staticClass:"color-5",attrs:{target:"_blank",href:"mailto:".concat(n.contact.email)}},[e("i",{staticClass:"fas fa-envelope"})]):t._e(),t._v(" "),n.contact.facebook?e("a",{staticClass:"color-5",attrs:{target:"_blank",href:"".concat(n.contact.facebook)}},[e("i",{staticClass:"fab fa-facebook"})]):t._e(),t._v(" "),n.contact.instagram?e("a",{staticClass:"color-5",attrs:{target:"_blank",href:"".concat(n.contact.instagram)}},[e("i",{staticClass:"fab fa-instagram"})]):t._e()]),t._v(" "),n.contact.website&&t.requestCompleted?e("a",{staticClass:"visit-btn bg-color-2",attrs:{href:"".concat(n.contact.website),target:"_blank"}},[t._v("Visit Website")]):t._e()])])])}))],2)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{DescriptionText:r(281).default})},334:function(t,e,r){"use strict";r.r(e);var n=r(270),o={data:function(){return{pageName:"",partners:[]}},created:function(){this.pageName=this.$route.params.slug,this.partners=n.a.getPartnersByType(this.pageName)}},c=r(43),component=Object(c.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"bg-color-1"},[e("Header"),t._v(" "),e("GenericPage",{attrs:{pageTitle:"Best Nepali ".concat(t.pageName," in Barcelona"),description:"".concat(t.pageName," pages"),partners:t.partners,category:t.pageName}}),t._v(" "),e("Footer")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Header:r(282).default,GenericPage:r(323).default,Footer:r(283).default})}}]);