(window.webpackJsonp=window.webpackJsonp||[]).push([[8,6],{269:function(e,t,c){var content=c(280);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,c(59).default)("9c866c4c",content,!0,{sourceMap:!1})},270:function(e,t,c){"use strict";var f=c(2),o=c(4),n=c(30),r=c(25),d=c(31),A=c(195),l=c(13),x=c(3),m=c(194),h=c(132),_=c(276),v=c(277),k=c(82),j=c(278),w=[],y=o(w.sort),B=o(w.push),C=x((function(){w.sort(void 0)})),T=x((function(){w.sort(null)})),Y=h("sort"),S=!x((function(){if(k)return k<70;if(!(_&&_>3)){if(v)return!0;if(j)return j<603;var code,e,t,c,f="";for(code=65;code<76;code++){switch(e=String.fromCharCode(code),code){case 66:case 69:case 70:case 72:t=3;break;case 68:case 71:t=4;break;default:t=2}for(c=0;c<47;c++)w.push({k:e+c,v:t})}for(w.sort((function(a,b){return b.v-a.v})),c=0;c<w.length;c++)e=w[c].k.charAt(0),f.charAt(f.length-1)!==e&&(f+=e);return"DGBEFHACIJK"!==f}}));f({target:"Array",proto:!0,forced:C||!T||!Y||!S},{sort:function(e){void 0!==e&&n(e);var t=r(this);if(S)return void 0===e?y(t):y(t,e);var c,f,o=[],x=d(t);for(f=0;f<x;f++)f in t&&B(o,t[f]);for(m(o,function(e){return function(t,c){return void 0===c?-1:void 0===t?1:void 0!==e?+e(t,c)||0:l(t)>l(c)?1:-1}}(e)),c=d(o),f=0;f<c;)t[f]=o[f++];for(;f<x;)A(t,f++);return t}})},276:function(e,t,c){var f=c(61).match(/firefox\/(\d+)/i);e.exports=!!f&&+f[1]},277:function(e,t,c){var f=c(61);e.exports=/MSIE|Trident/.test(f)},278:function(e,t,c){var f=c(61).match(/AppleWebKit\/(\d+)\./);e.exports=!!f&&+f[1]},279:function(e,t,c){"use strict";c(269)},280:function(e,t,c){var f=c(58)((function(i){return i[1]}));f.push([e.i,".read-less,.read-more{background-color:transparent;border:1px solid #717171!important;border-radius:2rem;color:#717171;cursor:pointer;font-size:1rem;margin-bottom:.5rem;padding:0 .5rem!important}.read-less:hover,.read-more:hover{color:#000}",""]),f.locals={},e.exports=f},281:function(e,t,c){"use strict";c.r(t);c(36),c(60),c(196);var f={props:{description:String,limit:{type:Number,default:150}},data:function(){return{expanded:!1}},computed:{truncatedText:function(){return this.description.length<=this.limit?this.description:this.description.substring(0,this.limit)+"..."}},methods:{toggleText:function(){this.expanded=!this.expanded}}},o=(c(279),c(43)),component=Object(o.a)(f,(function(){var e=this,t=e._self._c;return t("div",[e.expanded?t("p",[e._v(e._s(e.description))]):t("p",[e._v(e._s(e.truncatedText))]),e._v(" "),e.description.length>e.limit?t("button",{staticClass:"read-more",on:{click:e.toggleText}},[e._v("\n    "+e._s(e.expanded?"Read Less":"Read More")+"\n  ")]):e._e()])}),[],!1,null,null,null);t.default=component.exports},286:function(e,t,c){"use strict";c.d(t,"a",(function(){return f})),c.d(t,"b",(function(){return o}));c(270),c(62);function f(e,t){return e.slice().sort((function(a,b){var e=t.indexOf(a.category),c=t.indexOf(b.category);return-1!==e&&-1!==c?e-c:-1!==e?-1:-1!==c?1:0}))}function o(e){return e.logo?c(287)("./".concat(e.logo,".jpeg")):c(313)}},287:function(e,t,c){var map={"./0e521d3e-add7-4d14-982f-4e2dd0b8fb5d.jpeg":288,"./0e521d3e-add7-4d14-982f-4e2dd0b8fb5d__641a888e5b2b754dabb97b20cb3fff990eeff041.jpeg":289,"./302fcb0d-1f13-4aa6-b6cc-2619f25467e2.jpeg":290,"./302fcb0d-1f13-4aa6-b6cc-2619f25467e2__641a888e5b2b754dabb97b20cb3fff990eeff041.jpeg":291,"./302fcb0d-1f13-4aa6-b6cc-2619f25467e2__f72164e261a70c44dc69373e74c2f82d3bbf2a23.jpeg":292,"./38e58ca9-f1de-48eb-85c4-389ac1ba333c.jpeg":293,"./38e58ca9-f1de-48eb-85c4-389ac1ba333c__641a888e5b2b754dabb97b20cb3fff990eeff041.jpeg":294,"./3b8d2521-3df5-4d8a-b227-95753947a9e2.jpeg":295,"./3b8d2521-3df5-4d8a-b227-95753947a9e2__641a888e5b2b754dabb97b20cb3fff990eeff041.jpeg":296,"./42220bcd-16fe-4adf-a6bc-ad02a279ee2d.jpeg":297,"./42220bcd-16fe-4adf-a6bc-ad02a279ee2d__641a888e5b2b754dabb97b20cb3fff990eeff041.jpeg":298,"./b153eba9-4f27-4185-965c-3535cb4a09ef.jpeg":299,"./b153eba9-4f27-4185-965c-3535cb4a09ef__f72164e261a70c44dc69373e74c2f82d3bbf2a23.jpeg":300,"./ba6796cc-c44e-4410-b199-a2ba62e3968c.jpeg":301,"./ba6796cc-c44e-4410-b199-a2ba62e3968c__641a888e5b2b754dabb97b20cb3fff990eeff041.jpeg":302,"./bcdf54b2-870d-487f-9327-611c5ac61d7a.jpeg":303,"./bcdf54b2-870d-487f-9327-611c5ac61d7a__641a888e5b2b754dabb97b20cb3fff990eeff041.jpeg":304,"./c05896a1-71e7-484a-bd1a-f194a79bd234.jpeg":305,"./c05896a1-71e7-484a-bd1a-f194a79bd234__f72164e261a70c44dc69373e74c2f82d3bbf2a23.jpeg":306,"./d80c5e94-fd63-481d-a5ce-edd6144b1540.jpeg":307,"./d80c5e94-fd63-481d-a5ce-edd6144b1540__641a888e5b2b754dabb97b20cb3fff990eeff041.jpeg":308,"./e6cabb6d-4c5f-47fc-8dae-472491ea3626.jpeg":309,"./e6cabb6d-4c5f-47fc-8dae-472491ea3626__641a888e5b2b754dabb97b20cb3fff990eeff041.jpeg":310,"./f7de2dfd-c912-47b2-94f2-5affc5c83807.jpeg":311,"./f7de2dfd-c912-47b2-94f2-5affc5c83807__641a888e5b2b754dabb97b20cb3fff990eeff041.jpeg":312};function f(e){var t=o(e);return c(t)}function o(e){if(!c.o(map,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return map[e]}f.keys=function(){return Object.keys(map)},f.resolve=o,e.exports=f,f.id=287},288:function(e,t,c){e.exports=c.p+"img/0e521d3e-add7-4d14-982f-4e2dd0b8fb5d.75aa239.jpeg"},289:function(e,t,c){e.exports=c.p+"img/0e521d3e-add7-4d14-982f-4e2dd0b8fb5d__641a888e5b2b754dabb97b20cb3fff990eeff041.6fec693.jpeg"},290:function(e,t,c){e.exports=c.p+"img/302fcb0d-1f13-4aa6-b6cc-2619f25467e2.b77da26.jpeg"},291:function(e,t,c){e.exports=c.p+"img/302fcb0d-1f13-4aa6-b6cc-2619f25467e2__641a888e5b2b754dabb97b20cb3fff990eeff041.3b02c4f.jpeg"},292:function(e,t,c){e.exports=c.p+"img/302fcb0d-1f13-4aa6-b6cc-2619f25467e2__f72164e261a70c44dc69373e74c2f82d3bbf2a23.be0fe18.jpeg"},293:function(e,t,c){e.exports=c.p+"img/38e58ca9-f1de-48eb-85c4-389ac1ba333c.9cad99c.jpeg"},294:function(e,t,c){e.exports=c.p+"img/38e58ca9-f1de-48eb-85c4-389ac1ba333c__641a888e5b2b754dabb97b20cb3fff990eeff041.1681415.jpeg"},295:function(e,t,c){e.exports=c.p+"img/3b8d2521-3df5-4d8a-b227-95753947a9e2.f7f7f85.jpeg"},296:function(e,t,c){e.exports=c.p+"img/3b8d2521-3df5-4d8a-b227-95753947a9e2__641a888e5b2b754dabb97b20cb3fff990eeff041.2d8ebd6.jpeg"},297:function(e,t,c){e.exports=c.p+"img/42220bcd-16fe-4adf-a6bc-ad02a279ee2d.4f091e2.jpeg"},298:function(e,t,c){e.exports=c.p+"img/42220bcd-16fe-4adf-a6bc-ad02a279ee2d__641a888e5b2b754dabb97b20cb3fff990eeff041.000ab91.jpeg"},299:function(e,t,c){e.exports=c.p+"img/b153eba9-4f27-4185-965c-3535cb4a09ef.9ceab6c.jpeg"},300:function(e,t,c){e.exports=c.p+"img/b153eba9-4f27-4185-965c-3535cb4a09ef__f72164e261a70c44dc69373e74c2f82d3bbf2a23.ff4c219.jpeg"},301:function(e,t,c){e.exports=c.p+"img/ba6796cc-c44e-4410-b199-a2ba62e3968c.f7f7f85.jpeg"},302:function(e,t,c){e.exports=c.p+"img/ba6796cc-c44e-4410-b199-a2ba62e3968c__641a888e5b2b754dabb97b20cb3fff990eeff041.2d8ebd6.jpeg"},303:function(e,t,c){e.exports=c.p+"img/bcdf54b2-870d-487f-9327-611c5ac61d7a.9ceab6c.jpeg"},304:function(e,t,c){e.exports=c.p+"img/bcdf54b2-870d-487f-9327-611c5ac61d7a__641a888e5b2b754dabb97b20cb3fff990eeff041.cfc3dc1.jpeg"},305:function(e,t,c){e.exports=c.p+"img/c05896a1-71e7-484a-bd1a-f194a79bd234.75aa239.jpeg"},306:function(e,t,c){e.exports=c.p+"img/c05896a1-71e7-484a-bd1a-f194a79bd234__f72164e261a70c44dc69373e74c2f82d3bbf2a23.b6bbb06.jpeg"},307:function(e,t,c){e.exports=c.p+"img/d80c5e94-fd63-481d-a5ce-edd6144b1540.4f091e2.jpeg"},308:function(e,t,c){e.exports=c.p+"img/d80c5e94-fd63-481d-a5ce-edd6144b1540__641a888e5b2b754dabb97b20cb3fff990eeff041.000ab91.jpeg"},309:function(e,t,c){e.exports=c.p+"img/e6cabb6d-4c5f-47fc-8dae-472491ea3626.f7f7f85.jpeg"},310:function(e,t,c){e.exports=c.p+"img/e6cabb6d-4c5f-47fc-8dae-472491ea3626__641a888e5b2b754dabb97b20cb3fff990eeff041.2d8ebd6.jpeg"},311:function(e,t,c){e.exports=c.p+"img/f7de2dfd-c912-47b2-94f2-5affc5c83807.096fb66.jpeg"},312:function(e,t,c){e.exports=c.p+"img/f7de2dfd-c912-47b2-94f2-5affc5c83807__641a888e5b2b754dabb97b20cb3fff990eeff041.857905c.jpeg"},313:function(e,t,c){e.exports=c.p+"img/dummy.d18b065.jpeg"},323:function(e,t,c){var content=c(338);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,c(59).default)("16915954",content,!0,{sourceMap:!1})},335:function(e,t,c){var content=c(336);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,c(59).default)("fd5479ae",content,!0,{sourceMap:!1})},336:function(e,t,c){var f=c(58)((function(i){return i[1]}));f.push([e.i,'@charset "UTF-8";@font-face{font-family:"slick";src:url(data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAATsAA0AAAAAB2wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABGRlRNAAAE0AAAABoAAAAcdIcYB0dERUYAAAS0AAAAHAAAAB4AJwANT1MvMgAAAZwAAABRAAAAYFAQ/45jbWFwAAACAAAAAFcAAAFiIhFFt2dhc3AAAASsAAAACAAAAAj//wADZ2x5ZgAAAmgAAAE1AAACLD+btmBoZWFkAAABMAAAAC8AAAA2AAEx+2hoZWEAAAFgAAAAHAAAACQD5QIFaG10eAAAAfAAAAAQAAAAFgZKAEpsb2NhAAACWAAAABAAAAAQATYBoG1heHAAAAF8AAAAHQAAACAASwBHbmFtZQAAA6AAAADcAAABbgUngcJwb3N0AAAEfAAAAC4AAABFOXjBpHjaY2BkYGAA4vMGfuHx/DZfGbiZGEDgfGFFPZxWZVBlvM14G8jlYABLAwAT1QnNAHjaY2BkYGC8zcDAoMfEAAJANiMDKmABADBkAe942mNgZGBgYGdwYWBiAAEQycgAEnMA8xkACcgAkwAAAHjaY2BmYmCcwMDKwMDow5jGwMDgDqW/MkgytDAwMDGwcjKAQQNQCZBSYICCgDTXFAYHhkTFSYwP/j9g0GO8/f82A0QNA+NtsBIFBkYANHMN4wAAAHjaY2KAACYIVoVAAALCAJt42mNgYGBmgGAZBkYGEIgB8hjBfBYGByDNw8DBwARkMzAkKigpTlCc9P8/WB0S7/+i+4/uld4rgZoAB4xsDHAhRiYgwcSApoCBcsBMBTNYGGgGAEdEDyUAAAAAAAAAAAAAZgCKANABFnjadZBdToNAEMd3CrtAl5TQLtS0LCoN0A8SGkBI+mAfPET75B1896HppfQcvnII4w3cLYpW6k4ymdn9z8xvBwEKUQg11OgBIXAYWUEQR1uIZoFGpLGxKy3PqrIq8+waXIfJ+5mQSSvkvXwRqqocu1D39QMl2JgvN9zzhsyk1GRDz+OBfzMioCqx0rtdLYo0SiZTZttsOkmidBkveKibFF4Oep9SI46bqk3Twhp4iihUemrMWFPy2NRbthfqKkHi/PxlJLITZdAiSj6ouZ+tn9eZz78DuD9LZYB6bZ8rlCAUVuVdkULjxV4sIEysIc/KSyPmnJDdjhCOdQ0fCTliTX/tjH3ysWao+71qaNjHQjcQwrcuyl+WLZQthCMotJP/h+Xjazz+hfTeRWmG4zOiSyif/q1OtAAAAHjabY49asNAEIU/2ZJDfkiRIvXapUFCEqpcptABUrg3ZhEiQoKVfY9UqVLlGDlADpAT5e16IUWysMz3hjfzBrjjjQT/EjKpCy+4YhN5yZoxcirPe+SMWz4jr6S+5UzSa3VuwpTnBfc8RF7yxDZyKs9r5IxHPiKv1P9iZqDnyAvMQ39UecbScVb/gJO03Xk4CFom3XYK1clhMdQUlKo7/d9NF13RkIdfy+MV7TSe2sl11tRFaXYmJKpWTd7kdVnJ8veevZKc+n3I93t9Jnvr5n4aTVWU/0z9AI2qMkV42mNgYkAGjAzogB0sysTgwtDOyMTIzJlYVJRfnpOaVsIFZhVlpmeUAABuKQkSAAAAAAAB//8AAnjaY2BkYGDgAWIxIGZiYARCNiBmAfMYAAPgADV42mNgYGBkAIKrS9Q5QPT5wop6GA0APf8GGAAA) format("woff")}.slick-next,.slick-prev{border:none;cursor:pointer;display:block;font-size:0;height:20px;line-height:0;padding:0;position:absolute;top:50%;transform:translateY(-50%);width:20px}.slick-next,.slick-next:focus,.slick-next:hover,.slick-prev,.slick-prev:focus,.slick-prev:hover{background:transparent;color:transparent;outline:none}.slick-next:focus:before,.slick-next:hover:before,.slick-prev:focus:before,.slick-prev:hover:before{opacity:1}.slick-next.slick-disabled:before,.slick-prev.slick-disabled:before{opacity:.25}.slick-next:before,.slick-prev:before{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;color:#fff;font-family:"slick";font-size:20px;line-height:1;opacity:.75}.slick-prev{left:-25px}[dir=rtl] .slick-prev{left:auto;right:-25px}.slick-prev:before{content:"←"}[dir=rtl] .slick-prev:before{content:"→"}.slick-next{right:-25px}[dir=rtl] .slick-next{left:-25px;right:auto}.slick-next:before{content:"→"}[dir=rtl] .slick-next:before{content:"←"}.slick-dotted.slick-slider{margin-bottom:30px}.slick-dots{bottom:-25px;display:block;list-style:none;margin:0;padding:0;position:absolute;text-align:center;width:100%}.slick-dots li{display:inline-block;margin:0 5px;padding:0;position:relative}.slick-dots li,.slick-dots li button{cursor:pointer;height:20px;width:20px}.slick-dots li button{background:transparent;border:0;color:transparent;display:block;font-size:0;line-height:0;outline:none;padding:5px}.slick-dots li button:focus,.slick-dots li button:hover{outline:none}.slick-dots li button:focus:before,.slick-dots li button:hover:before{opacity:1}.slick-dots li button:before{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;color:#000;content:"•";font-family:"slick";font-size:6px;height:20px;left:0;line-height:20px;opacity:.25;position:absolute;text-align:center;top:0;width:20px}.slick-dots li.slick-active button:before{color:#000;opacity:.75}',""]),f.locals={},e.exports=f},337:function(e,t,c){"use strict";c(323)},338:function(e,t,c){var f=c(58)((function(i){return i[1]}));f.push([e.i,".slick-track[data-v-4bdacef8]{display:flex!important}.slick-slide[data-v-4bdacef8]{height:inherit!important;width:300px!important}h3[data-v-4bdacef8]{text-shadow:1px 1px 0 rgba(51,51,51,.75)}.feature__item[data-v-4bdacef8]{background-color:#fafafa;border-radius:5%;display:flex!important;flex-direction:column;height:25rem;margin:0 .2rem;max-width:280px;min-height:20rem;min-width:10rem}.feature__item[data-v-4bdacef8]:hover{box-shadow:5px 5px 5px 0 #e6e6e6}img[data-v-4bdacef8]{border-radius:50%;height:100px;width:100px}.read-less[data-v-4bdacef8],.read-more[data-v-4bdacef8]{border:none!important}.partner[data-v-4bdacef8]{align-items:center;display:flex;flex:1;flex-direction:column;height:100%;padding:.5em}.partner__title[data-v-4bdacef8]{flex:1;font-size:1.4rem;font-weight:700;text-align:center}@media only screen and (max-width:600px){.partner__title[data-v-4bdacef8]{font-size:1.2rem}}.partner__subtitle[data-v-4bdacef8]{flex:4;font-size:1.2rem;text-align:center}@media only screen and (max-width:600px){.partner__subtitle[data-v-4bdacef8]{font-size:1.1rem}}.partner__image[data-v-4bdacef8]{display:flex;flex:2;justify-content:center}.partner[data-v-4bdacef8]:hover{cursor:pointer}",""]),f.locals={},e.exports=f},349:function(e,t,c){"use strict";c.r(t);c(36),c(60),c(335);var f={name:"GenericCarousel",props:["partners","type","categories"],data:function(){return{requestCompleted:!1,isExpanded:[],settings:{dots:!0,infinite:!0,focusOnSelect:!0,speed:500,touchThreshold:5,slidesToShow:4,slidesToScroll:4,initialSlide:0,arrows:!1,responsive:[{breakpoint:1440,settings:{slidesToShow:5,slidesToScroll:4,infinite:!0}},{breakpoint:1024,settings:{slidesToShow:4,slidesToScroll:3,infinite:!0}},{breakpoint:768,settings:{slidesToShow:3,slidesToScroll:2}},{breakpoint:480,settings:{slidesToShow:2,slidesToScroll:2}}]}}},methods:{getImgUrl:c(286).b}},o=(c(337),c(43)),component=Object(o.a)(f,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"container w-100 p-2"},[t("h2",{staticClass:"page-title h5 h4-sm font-1 fs-3"},[e._v("\n    Highlighted "+e._s(e.type)+"s by Nepikose "),t("br")]),e._v(" "),e.partners&&e.partners.length?t("div",[t("VueSlickCarousel",e._b({staticClass:"feature__section"},"VueSlickCarousel",e.settings,!1),e._l(e.partners,(function(c,f){return t("div",{key:f},[t("div",{staticClass:"feature__item py-3"},[t("div",{staticClass:"partner"},[t("div",{staticClass:"partner__image pb-2"},[t("img",{attrs:{src:e.getImgUrl(c),alt:c.title}})]),e._v(" "),t("div",{staticClass:"partner__title px-2"},[e._v(e._s(c.title))]),e._v(" "),t("DescriptionText",{staticClass:"partner__subtitle px-2 py-1",attrs:{description:null==c?void 0:c.description,limit:70}})],1)])])})),0)],1):e._e()])}),[],!1,null,"4bdacef8",null);t.default=component.exports;installComponents(component,{DescriptionText:c(281).default})}}]);