(window.webpackJsonp=window.webpackJsonp||[]).push([[7,5],{269:function(e,t,c){var content=c(277);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,c(59).default)("9c866c4c",content,!0,{sourceMap:!1})},270:function(e,t,c){"use strict";var o=c(2),n=c(4),r=c(30),f=c(25),d=c(31),A=c(195),l=c(13),x=c(3),m=c(194),h=c(132),v=c(273),k=c(274),_=c(82),j=c(275),w=[],y=n(w.sort),B=n(w.push),C=x((function(){w.sort(void 0)})),T=x((function(){w.sort(null)})),Y=h("sort"),S=!x((function(){if(_)return _<70;if(!(v&&v>3)){if(k)return!0;if(j)return j<603;var code,e,t,c,o="";for(code=65;code<76;code++){switch(e=String.fromCharCode(code),code){case 66:case 69:case 70:case 72:t=3;break;case 68:case 71:t=4;break;default:t=2}for(c=0;c<47;c++)w.push({k:e+c,v:t})}for(w.sort((function(a,b){return b.v-a.v})),c=0;c<w.length;c++)e=w[c].k.charAt(0),o.charAt(o.length-1)!==e&&(o+=e);return"DGBEFHACIJK"!==o}}));o({target:"Array",proto:!0,forced:C||!T||!Y||!S},{sort:function(e){void 0!==e&&r(e);var t=f(this);if(S)return void 0===e?y(t):y(t,e);var c,o,n=[],x=d(t);for(o=0;o<x;o++)o in t&&B(n,t[o]);for(m(n,function(e){return function(t,c){return void 0===c?-1:void 0===t?1:void 0!==e?+e(t,c)||0:l(t)>l(c)?1:-1}}(e)),c=d(n),o=0;o<c;)t[o]=n[o++];for(;o<x;)A(t,o++);return t}})},273:function(e,t,c){var o=c(61).match(/firefox\/(\d+)/i);e.exports=!!o&&+o[1]},274:function(e,t,c){var o=c(61);e.exports=/MSIE|Trident/.test(o)},275:function(e,t,c){var o=c(61).match(/AppleWebKit\/(\d+)\./);e.exports=!!o&&+o[1]},276:function(e,t,c){"use strict";c(269)},277:function(e,t,c){var o=c(58)((function(i){return i[1]}));o.push([e.i,".read-less,.read-more{background-color:transparent;border:1px solid #717171!important;border-radius:2rem;color:#717171;cursor:pointer;font-size:1rem;margin-bottom:.5rem;padding:0 .5rem!important}.read-less:hover,.read-more:hover{color:#000}",""]),o.locals={},e.exports=o},278:function(e,t,c){"use strict";c.r(t);c(36),c(60),c(196);var o={props:{description:String,limit:{type:Number,default:150}},data:function(){return{expanded:!1}},computed:{truncatedText:function(){return this.description.length<=this.limit?this.description:this.description.substring(0,this.limit)+"..."}},methods:{toggleText:function(){this.expanded=!this.expanded}}},n=(c(276),c(43)),component=Object(n.a)(o,(function(){var e=this,t=e._self._c;return t("div",[e.expanded?t("p",[e._v(e._s(e.description))]):t("p",[e._v(e._s(e.truncatedText))]),e._v(" "),e.description.length>e.limit?t("button",{staticClass:"read-more",on:{click:e.toggleText}},[e._v("\n    "+e._s(e.expanded?"Read Less":"Read More")+"\n  ")]):e._e()])}),[],!1,null,null,null);t.default=component.exports},284:function(e,t,c){"use strict";c.d(t,"a",(function(){return o})),c.d(t,"b",(function(){return n}));c(270),c(62);function o(e,t){return e.slice().sort((function(a,b){var e=t.indexOf(a.category),c=t.indexOf(b.category);return-1!==e&&-1!==c?e-c:-1!==e?-1:-1!==c?1:0}))}function n(e){return e.logo?c(285)("./".concat(e.logo,".jpeg")):c(307)}},285:function(e,t,c){var map={"./0e521d3e-add7-4d14-982f-4e2dd0b8fb5d.jpeg":286,"./0e521d3e-add7-4d14-982f-4e2dd0b8fb5d__641a888e5b2b754dabb97b20cb3fff990eeff041.jpeg":287,"./302fcb0d-1f13-4aa6-b6cc-2619f25467e2.jpeg":288,"./302fcb0d-1f13-4aa6-b6cc-2619f25467e2__641a888e5b2b754dabb97b20cb3fff990eeff041.jpeg":289,"./302fcb0d-1f13-4aa6-b6cc-2619f25467e2__f72164e261a70c44dc69373e74c2f82d3bbf2a23.jpeg":290,"./38e58ca9-f1de-48eb-85c4-389ac1ba333c.jpeg":291,"./38e58ca9-f1de-48eb-85c4-389ac1ba333c__641a888e5b2b754dabb97b20cb3fff990eeff041.jpeg":292,"./3b8d2521-3df5-4d8a-b227-95753947a9e2.jpeg":293,"./3b8d2521-3df5-4d8a-b227-95753947a9e2__641a888e5b2b754dabb97b20cb3fff990eeff041.jpeg":294,"./b153eba9-4f27-4185-965c-3535cb4a09ef.jpeg":295,"./b153eba9-4f27-4185-965c-3535cb4a09ef__f72164e261a70c44dc69373e74c2f82d3bbf2a23.jpeg":296,"./ba6796cc-c44e-4410-b199-a2ba62e3968c.jpeg":297,"./ba6796cc-c44e-4410-b199-a2ba62e3968c__641a888e5b2b754dabb97b20cb3fff990eeff041.jpeg":298,"./bcdf54b2-870d-487f-9327-611c5ac61d7a.jpeg":299,"./bcdf54b2-870d-487f-9327-611c5ac61d7a__641a888e5b2b754dabb97b20cb3fff990eeff041.jpeg":300,"./c05896a1-71e7-484a-bd1a-f194a79bd234.jpeg":301,"./c05896a1-71e7-484a-bd1a-f194a79bd234__f72164e261a70c44dc69373e74c2f82d3bbf2a23.jpeg":302,"./e6cabb6d-4c5f-47fc-8dae-472491ea3626.jpeg":303,"./e6cabb6d-4c5f-47fc-8dae-472491ea3626__641a888e5b2b754dabb97b20cb3fff990eeff041.jpeg":304,"./f7de2dfd-c912-47b2-94f2-5affc5c83807.jpeg":305,"./f7de2dfd-c912-47b2-94f2-5affc5c83807__641a888e5b2b754dabb97b20cb3fff990eeff041.jpeg":306};function o(e){var t=n(e);return c(t)}function n(e){if(!c.o(map,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return map[e]}o.keys=function(){return Object.keys(map)},o.resolve=n,e.exports=o,o.id=285},286:function(e,t,c){e.exports=c.p+"img/0e521d3e-add7-4d14-982f-4e2dd0b8fb5d.75aa239.jpeg"},287:function(e,t,c){e.exports=c.p+"img/0e521d3e-add7-4d14-982f-4e2dd0b8fb5d__641a888e5b2b754dabb97b20cb3fff990eeff041.6fec693.jpeg"},288:function(e,t,c){e.exports=c.p+"img/302fcb0d-1f13-4aa6-b6cc-2619f25467e2.b77da26.jpeg"},289:function(e,t,c){e.exports=c.p+"img/302fcb0d-1f13-4aa6-b6cc-2619f25467e2__641a888e5b2b754dabb97b20cb3fff990eeff041.3b02c4f.jpeg"},290:function(e,t,c){e.exports=c.p+"img/302fcb0d-1f13-4aa6-b6cc-2619f25467e2__f72164e261a70c44dc69373e74c2f82d3bbf2a23.be0fe18.jpeg"},291:function(e,t,c){e.exports=c.p+"img/38e58ca9-f1de-48eb-85c4-389ac1ba333c.9cad99c.jpeg"},292:function(e,t,c){e.exports=c.p+"img/38e58ca9-f1de-48eb-85c4-389ac1ba333c__641a888e5b2b754dabb97b20cb3fff990eeff041.1681415.jpeg"},293:function(e,t,c){e.exports=c.p+"img/3b8d2521-3df5-4d8a-b227-95753947a9e2.f7f7f85.jpeg"},294:function(e,t,c){e.exports=c.p+"img/3b8d2521-3df5-4d8a-b227-95753947a9e2__641a888e5b2b754dabb97b20cb3fff990eeff041.2d8ebd6.jpeg"},295:function(e,t,c){e.exports=c.p+"img/b153eba9-4f27-4185-965c-3535cb4a09ef.9ceab6c.jpeg"},296:function(e,t,c){e.exports=c.p+"img/b153eba9-4f27-4185-965c-3535cb4a09ef__f72164e261a70c44dc69373e74c2f82d3bbf2a23.ff4c219.jpeg"},297:function(e,t,c){e.exports=c.p+"img/ba6796cc-c44e-4410-b199-a2ba62e3968c.f7f7f85.jpeg"},298:function(e,t,c){e.exports=c.p+"img/ba6796cc-c44e-4410-b199-a2ba62e3968c__641a888e5b2b754dabb97b20cb3fff990eeff041.2d8ebd6.jpeg"},299:function(e,t,c){e.exports=c.p+"img/bcdf54b2-870d-487f-9327-611c5ac61d7a.9ceab6c.jpeg"},300:function(e,t,c){e.exports=c.p+"img/bcdf54b2-870d-487f-9327-611c5ac61d7a__641a888e5b2b754dabb97b20cb3fff990eeff041.cfc3dc1.jpeg"},301:function(e,t,c){e.exports=c.p+"img/c05896a1-71e7-484a-bd1a-f194a79bd234.75aa239.jpeg"},302:function(e,t,c){e.exports=c.p+"img/c05896a1-71e7-484a-bd1a-f194a79bd234__f72164e261a70c44dc69373e74c2f82d3bbf2a23.b6bbb06.jpeg"},303:function(e,t,c){e.exports=c.p+"img/e6cabb6d-4c5f-47fc-8dae-472491ea3626.f7f7f85.jpeg"},304:function(e,t,c){e.exports=c.p+"img/e6cabb6d-4c5f-47fc-8dae-472491ea3626__641a888e5b2b754dabb97b20cb3fff990eeff041.2d8ebd6.jpeg"},305:function(e,t,c){e.exports=c.p+"img/f7de2dfd-c912-47b2-94f2-5affc5c83807.096fb66.jpeg"},306:function(e,t,c){e.exports=c.p+"img/f7de2dfd-c912-47b2-94f2-5affc5c83807__641a888e5b2b754dabb97b20cb3fff990eeff041.857905c.jpeg"},307:function(e,t,c){e.exports=c.p+"img/dummy.d18b065.jpeg"},320:function(e,t,c){var content=c(337);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,c(59).default)("9acf4710",content,!0,{sourceMap:!1})},334:function(e,t,c){var content=c(335);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,c(59).default)("fd5479ae",content,!0,{sourceMap:!1})},335:function(e,t,c){var o=c(58)((function(i){return i[1]}));o.push([e.i,'@charset "UTF-8";@font-face{font-family:"slick";src:url(data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAATsAA0AAAAAB2wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABGRlRNAAAE0AAAABoAAAAcdIcYB0dERUYAAAS0AAAAHAAAAB4AJwANT1MvMgAAAZwAAABRAAAAYFAQ/45jbWFwAAACAAAAAFcAAAFiIhFFt2dhc3AAAASsAAAACAAAAAj//wADZ2x5ZgAAAmgAAAE1AAACLD+btmBoZWFkAAABMAAAAC8AAAA2AAEx+2hoZWEAAAFgAAAAHAAAACQD5QIFaG10eAAAAfAAAAAQAAAAFgZKAEpsb2NhAAACWAAAABAAAAAQATYBoG1heHAAAAF8AAAAHQAAACAASwBHbmFtZQAAA6AAAADcAAABbgUngcJwb3N0AAAEfAAAAC4AAABFOXjBpHjaY2BkYGAA4vMGfuHx/DZfGbiZGEDgfGFFPZxWZVBlvM14G8jlYABLAwAT1QnNAHjaY2BkYGC8zcDAoMfEAAJANiMDKmABADBkAe942mNgZGBgYGdwYWBiAAEQycgAEnMA8xkACcgAkwAAAHjaY2BmYmCcwMDKwMDow5jGwMDgDqW/MkgytDAwMDGwcjKAQQNQCZBSYICCgDTXFAYHhkTFSYwP/j9g0GO8/f82A0QNA+NtsBIFBkYANHMN4wAAAHjaY2KAACYIVoVAAALCAJt42mNgYGBmgGAZBkYGEIgB8hjBfBYGByDNw8DBwARkMzAkKigpTlCc9P8/WB0S7/+i+4/uld4rgZoAB4xsDHAhRiYgwcSApoCBcsBMBTNYGGgGAEdEDyUAAAAAAAAAAAAAZgCKANABFnjadZBdToNAEMd3CrtAl5TQLtS0LCoN0A8SGkBI+mAfPET75B1896HppfQcvnII4w3cLYpW6k4ymdn9z8xvBwEKUQg11OgBIXAYWUEQR1uIZoFGpLGxKy3PqrIq8+waXIfJ+5mQSSvkvXwRqqocu1D39QMl2JgvN9zzhsyk1GRDz+OBfzMioCqx0rtdLYo0SiZTZttsOkmidBkveKibFF4Oep9SI46bqk3Twhp4iihUemrMWFPy2NRbthfqKkHi/PxlJLITZdAiSj6ouZ+tn9eZz78DuD9LZYB6bZ8rlCAUVuVdkULjxV4sIEysIc/KSyPmnJDdjhCOdQ0fCTliTX/tjH3ysWao+71qaNjHQjcQwrcuyl+WLZQthCMotJP/h+Xjazz+hfTeRWmG4zOiSyif/q1OtAAAAHjabY49asNAEIU/2ZJDfkiRIvXapUFCEqpcptABUrg3ZhEiQoKVfY9UqVLlGDlADpAT5e16IUWysMz3hjfzBrjjjQT/EjKpCy+4YhN5yZoxcirPe+SMWz4jr6S+5UzSa3VuwpTnBfc8RF7yxDZyKs9r5IxHPiKv1P9iZqDnyAvMQ39UecbScVb/gJO03Xk4CFom3XYK1clhMdQUlKo7/d9NF13RkIdfy+MV7TSe2sl11tRFaXYmJKpWTd7kdVnJ8veevZKc+n3I93t9Jnvr5n4aTVWU/0z9AI2qMkV42mNgYkAGjAzogB0sysTgwtDOyMTIzJlYVJRfnpOaVsIFZhVlpmeUAABuKQkSAAAAAAAB//8AAnjaY2BkYGDgAWIxIGZiYARCNiBmAfMYAAPgADV42mNgYGBkAIKrS9Q5QPT5wop6GA0APf8GGAAA) format("woff")}.slick-next,.slick-prev{border:none;cursor:pointer;display:block;font-size:0;height:20px;line-height:0;padding:0;position:absolute;top:50%;transform:translateY(-50%);width:20px}.slick-next,.slick-next:focus,.slick-next:hover,.slick-prev,.slick-prev:focus,.slick-prev:hover{background:transparent;color:transparent;outline:none}.slick-next:focus:before,.slick-next:hover:before,.slick-prev:focus:before,.slick-prev:hover:before{opacity:1}.slick-next.slick-disabled:before,.slick-prev.slick-disabled:before{opacity:.25}.slick-next:before,.slick-prev:before{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;color:#fff;font-family:"slick";font-size:20px;line-height:1;opacity:.75}.slick-prev{left:-25px}[dir=rtl] .slick-prev{left:auto;right:-25px}.slick-prev:before{content:"←"}[dir=rtl] .slick-prev:before{content:"→"}.slick-next{right:-25px}[dir=rtl] .slick-next{left:-25px;right:auto}.slick-next:before{content:"→"}[dir=rtl] .slick-next:before{content:"←"}.slick-dotted.slick-slider{margin-bottom:30px}.slick-dots{bottom:-25px;display:block;list-style:none;margin:0;padding:0;position:absolute;text-align:center;width:100%}.slick-dots li{display:inline-block;margin:0 5px;padding:0;position:relative}.slick-dots li,.slick-dots li button{cursor:pointer;height:20px;width:20px}.slick-dots li button{background:transparent;border:0;color:transparent;display:block;font-size:0;line-height:0;outline:none;padding:5px}.slick-dots li button:focus,.slick-dots li button:hover{outline:none}.slick-dots li button:focus:before,.slick-dots li button:hover:before{opacity:1}.slick-dots li button:before{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;color:#000;content:"•";font-family:"slick";font-size:6px;height:20px;left:0;line-height:20px;opacity:.25;position:absolute;text-align:center;top:0;width:20px}.slick-dots li.slick-active button:before{color:#000;opacity:.75}',""]),o.locals={},e.exports=o},336:function(e,t,c){"use strict";c(320)},337:function(e,t,c){var o=c(58)((function(i){return i[1]}));o.push([e.i,".slick-track[data-v-235c5bcd]{display:flex!important}.slick-slide[data-v-235c5bcd]{height:inherit!important;width:300px!important}h3[data-v-235c5bcd]{text-shadow:1px 1px 0 rgba(51,51,51,.75)}.feature__item[data-v-235c5bcd]{background-color:#fafafa;border-radius:5%;display:flex!important;flex-direction:column;margin:0 .2rem;max-width:280px;min-height:20rem;min-width:10rem}.feature__item[data-v-235c5bcd]:hover{box-shadow:5px 5px 5px 0 #e6e6e6}img[data-v-235c5bcd]{border-radius:50%;height:100px;width:100px}.read-less[data-v-235c5bcd],.read-more[data-v-235c5bcd]{border:none!important}.partner[data-v-235c5bcd]{align-items:center;display:flex;flex:1;flex-direction:column;padding:.5em}.partner__title[data-v-235c5bcd]{font-size:1.4rem;font-weight:700;text-align:center}@media only screen and (max-width:600px){.partner__title[data-v-235c5bcd]{font-size:1.2rem}}.partner__subtitle[data-v-235c5bcd]{font-size:1.2rem;text-align:center}@media only screen and (max-width:600px){.partner__subtitle[data-v-235c5bcd]{font-size:1.1rem}}.partner__image[data-v-235c5bcd]{display:flex;justify-content:center}.partner__contact[data-v-235c5bcd]{display:flex;flex-direction:row;gap:1rem;margin-top:auto}.partner[data-v-235c5bcd]:hover{cursor:pointer}",""]),o.locals={},e.exports=o},347:function(e,t,c){"use strict";c.r(t);c(36),c(60),c(334);var o={name:"GenericCarousel",props:["partners","type","categories"],data:function(){return{requestCompleted:!1,isExpanded:[],settings:{dots:!0,infinite:!0,focusOnSelect:!0,speed:500,touchThreshold:5,slidesToShow:4,slidesToScroll:4,initialSlide:0,arrows:!1,responsive:[{breakpoint:1440,settings:{slidesToShow:5,slidesToScroll:4,infinite:!0}},{breakpoint:1024,settings:{slidesToShow:4,slidesToScroll:3,infinite:!0}},{breakpoint:768,settings:{slidesToShow:3,slidesToScroll:2}},{breakpoint:480,settings:{slidesToShow:2,slidesToScroll:2}}]}}},methods:{getImgUrl:c(284).b}},n=(c(336),c(43)),component=Object(n.a)(o,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"container w-100 p-2"},[t("h2",{staticClass:"page-title h5 h4-sm font-1 fs-3"},[e._v("\n    Highlighted "+e._s(e.type)+"s by Nepikose "),t("br")]),e._v(" "),e.partners&&e.partners.length?t("div",[t("VueSlickCarousel",e._b({staticClass:"feature__section"},"VueSlickCarousel",e.settings,!1),e._l(e.partners,(function(c,o){return t("div",{key:o},[t("div",{staticClass:"feature__item py-3"},[t("div",{staticClass:"partner"},[t("div",{staticClass:"partner__image pb-2"},[t("img",{attrs:{src:e.getImgUrl(c),alt:c.title}})]),e._v(" "),t("div",{staticClass:"partner__title px-2"},[e._v(e._s(c.title))]),e._v(" "),t("div",{},[t("DescriptionText",{staticClass:"partner__subtitle px-2 py-1",attrs:{description:c.description,limit:60}})],1)])])])})),0)],1):e._e()])}),[],!1,null,"235c5bcd",null);t.default=component.exports;installComponents(component,{DescriptionText:c(278).default})}}]);