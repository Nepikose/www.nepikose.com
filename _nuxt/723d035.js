(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{282:function(t,e,r){t.exports=r.p+"img/dummy.d18b065.jpeg"},287:function(t,e,r){var content=r(302);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(59).default)("f6898154",content,!0,{sourceMap:!1})},301:function(t,e,r){"use strict";r(287)},302:function(t,e,r){var n=r(58)((function(i){return i[1]}));n.push([t.i,".generic-section{min-height:78vh}.page-title{font-size:1.5rem;font-weight:700;padding:1rem 0!important;text-align:center;text-transform:capitalize}.card{border:none;padding:.25rem}.card__logo{border-radius:50%;flex-shrink:0;height:5rem;width:5rem}.card__contact{display:flex;flex-direction:row;gap:1rem;height:40px;padding-bottom:.5rem;padding-top:.5rem}.card__contact i:hover{color:gray;transform:scale(1.1)}.card__body{padding:.5rem 1rem}.card__subtitle{font-size:.9rem}.card__contact>a:nth-child(2n){animation:updown 1.5s ease}.card__contact>a:nth-child(odd){animation:updownReverse 1.5s ease}.card__description,.visit-btn{font-size:.9rem}.visit-btn{border-radius:.7rem;box-shadow:0 7px 29px 0 hsla(240,5%,41%,.2);display:inline-block;padding:.3rem 2rem;text-transform:uppercase;transition:transform .3s ease}.visit-btn:hover{transform:scale(1.06)!important}.generic-section>div:nth-child(odd){background-color:var(--nepikose-cyan)}@keyframes updown{0%{transform:translateY(-8%)}50%{transform:translateY(8%)}to{transform:translateY(-8%)}}@keyframes updownReverse{0%{transform:translateY(8%)}50%{transform:translateY(-8%)}to{transform:translateY(8%)}}.skeleton{animation:skeleton-loading 1s linear infinite alternate;opacity:.7}.skeleton__text{border-radius:.6rem;height:35px;margin-bottom:.5rem;padding-bottom:.5rem;padding-top:.5rem;width:100%}.skeleton__website{border-radius:.7rem;box-shadow:0 7px 29px 0 hsla(240,5%,41%,.2);font-size:.8rem;height:24px;padding:.3rem 2rem;text-transform:uppercase;width:100%}.read-less,.read-more{background-color:transparent;border:1px solid #717171!important;border-radius:2rem;color:#717171;cursor:pointer;font-size:1rem;padding:0 .5rem!important}.read-less:hover,.read-more:hover{color:#000}.read-less{display:inline-block}@keyframes skeleton-loading{0%{background-color:#a3b8c2}to{background-color:#f0f3f5}}",""]),n.locals={},t.exports=n},319:function(t,e,r){"use strict";r.r(e);r(36),r(61),r(62);var n={name:"GenericPage",props:["pageTitle","description","partners","icon","category"],data:function(){return{requestCompleted:!1,isExpanded:[]}},methods:{onLoadHandler:function(t){t.preventDefault(),this.requestCompleted=!0},toggleExpand:function(t){console.log("toggleExpand",t),this.$set(this.isExpanded,t,!this.isExpanded[t])},truncatedText:function(t,e){return this.isExpanded[e]?t:t.slice(0,50)+"..."}}},o=(r(301),r(43)),component=Object(o.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"generic-section"},[e("h2",{staticClass:"page-title"},[t._v(t._s(t.pageTitle)+" "),e("br")]),t._v(" "),t._l(t.partners,(function(n,o){return e("div",{key:o,staticClass:"card"},[e("div",{staticClass:"d-flex p-1 align-items-center text-center"},[e("img",{staticClass:"card__logo",class:t.requestCompleted?"":"skeleton",attrs:{src:r(282),alt:"Card image cap"},on:{load:function(e){return t.onLoadHandler(e)}}}),t._v(" "),e("div",{staticClass:"card__body text-start"},[e("div",{staticClass:"card__title fw-bold fs-4 font-1"},[t._v("\n          "+t._s(n.title)+"\n        ")]),t._v(" "),e("div",{staticClass:"card__description fs-6 font-1 secondary-text"},[t.isExpanded[o]?e("div",[t._v("\n            "+t._s(n.description)+"\n            "),e("button",{staticClass:"read-less",on:{click:function(e){return t.toggleExpand(o)}}},[t._v("\n              Read Less\n            ")])]):e("div",[t._v("\n            "+t._s(t.truncatedText(n.description,o))+"\n            "),e("button",{staticClass:"read-more",on:{click:function(e){return t.toggleExpand(o)}}},[t._v("\n              Read More\n            ")])])]),t._v(" "),e("div",{staticClass:"card__contact"},[n.contact.phone?e("a",{staticClass:"color-5",attrs:{target:"_blank",alt:"",href:"tel:".concat(n.contact.phone)}},[e("i",{staticClass:"fas fa-phone"})]):t._e(),t._v(" "),n.contact.mapLink?e("a",{staticClass:"color-5",attrs:{target:"_blank",alt:"",href:"".concat(n.contact.mapLink)}},[e("i",{staticClass:"fas fa-map"})]):t._e(),t._v(" "),n.contact.email?e("a",{staticClass:"color-5",attrs:{target:"_blank",href:"mailto:".concat(n.contact.email)}},[e("i",{staticClass:"fas fa-envelope"})]):t._e(),t._v(" "),n.contact.facebook?e("a",{staticClass:"color-5",attrs:{target:"_blank",href:"".concat(n.contact.facebook)}},[e("i",{staticClass:"fab fa-facebook"})]):t._e(),t._v(" "),n.contact.instagram?e("a",{staticClass:"color-5",attrs:{target:"_blank",href:"".concat(n.contact.instagram)}},[e("i",{staticClass:"fab fa-instagram"})]):t._e()]),t._v(" "),n.contact.website&&t.requestCompleted?e("a",{staticClass:"visit-btn bg-color-2",attrs:{href:"".concat(n.contact.website),target:"_blank"}},[t._v("Visit Website")]):t._e()])])])}))],2)}),[],!1,null,null,null);e.default=component.exports}}]);