(()=>{"use strict";var n={426:(n,e,t)=>{t.d(e,{Z:()=>A});var a=t(537),i=t.n(a),r=t(645),o=t.n(r)()(i());o.push([n.id,"body {\n    padding: 0;\n    margin:0;\n}\n\n/* header part */\n.header {\n    height: 13vh;\n    width: 100vw;\n    display: grid;\n    grid-template-columns: 2fr 0.5fr 2fr;\n    box-shadow: 0 4px 5px rgb(177, 177, 177);\n    background-color: white;\n   \n}\n\n.headerLeft {\n    grid-column: 1/2;\n    margin-left: 5vw;\n    align-self: center;\n    display: flex;\n}\n\n.headerLeft > img {\n    height: 100px;\n    width: 200px;\n}\n\n.headerLeft > p {\n    display: flex;\n    align-items: center;\n    font-size: 26px;\n    margin: 0 0 0 5%;\n    font-family: 'Raleway', sans-serif;\n}\n\n.headerRight {\n    grid-column: 3/4;\n    align-self: center;\n    justify-self:center;\n    margin-right: 5vw;\n}\n\n.headerRight > button {\n    margin: 9px;\n    height: 30px;\n    width: 80px;\n    border: none;\n    background-color: white;\n    font-size: 22px;\n    font-family: 'Raleway', sans-serif;\n}\n\n.headerRight > button:hover {\n    transform: translateY(-4px);\n    transition: transform 0.3s ease-out\n}\n\n/* main part */\n.main{\n    margin: 30px 5vw 30px 5vw;\n    height: calc(85vh - 70px);\n    font-family: 'Josefin Sans', sans-serif;\n}\n\n/* main part - Homepage main */\n.mainHomepage { \n    display: grid;\n    grid-template-columns: 1.5fr 1fr;\n    padding-top: 50px;\n}\n\n.mainLeft {\n    margin-left: 7vw;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    width: 35vw;\n    text-align: justify;\n    font-size: 22px;\n    line-height: 30px;\n}\n\n.mainLeft > p:first-of-type {\n    text-align: center;\n    font-weight: 600;\n}\n\n.mainSlideShow {\n    margin-right: 5vw;\n    width: 100%;\n    height: 100%;\n    display: block;\n    border-radius: 15px;\n    transition: 2s all ease-in-out;\n    box-shadow: 0 5px 7px rgb(150 150 150);\n}\n\n/* main part - Menu main */\n.mainMenu {\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    grid-template-rows: repeat(2, minmax(280px, 1fr));\n    gap: 15px;\n    height: auto;\n}\n\n.mainMenu > div {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 10px;\n    /* margin-bottom: 10px; */\n}\n\n.menuPics {\n    width: 65%;\n    height: 60%;\n    border-radius: 15px;\n    box-shadow: 0 5px 7px rgb(150, 150, 150);\n}\n.menuText {\n    font-family: 'Raleway', sans-serif;\n    font-size: 20px;\n}\n.itemInfo {\n    width: 65%;\n}\n\n/* main part - Contact main */\n.mainContact {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    padding-top: 80px;\n    gap: 40px;\n}\n\n.mainContact > img {\n    height: 80%;\n    border-radius: 15px;\n    box-shadow: 0 5px 7px rgb(150, 150, 150);\n}\n\n.contactTop > div {\n    display: flex;\n    align-items: center;\n    padding-top:10px;\n}\n\n.logo{\n    width: 24px;\n    height: 24px;\n}\n\n.contactBottom {\n    padding-top: 30px;\n    width: 300px;\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n}\n\ninput {\n    height: 20px;\n    border-radius: 5px;\n    box-shadow: 0 5px 7px rgb(150, 150, 150);\n    border: 2px solid #f2f2f0a9;\n}\ninput:hover {\n    border: 2px solid #297373;\n    \n}\ninput:focus {\n    outline: none !important;\n    border: 2px solid #297373;\n}\ntextarea {\n    border-radius: 5px;\n    box-shadow: 0 5px 7px rgb(150, 150, 150);\n    border: 2px solid #f2f2f0a9;\n}\ntextarea:hover {\n    border: 2px solid #297373;\n    \n}\ntextarea:focus {\n    outline: none !important;\n    border: 2px solid #297373;\n}\n.contactBottom > button {\n    border: 1.5px solid black;\n    border-radius: 15px;\n    background-color: #339191;\n    font-size: 18px;\n    color:rgb(255, 255, 255);\n}\n.contactBottom > button:hover {\n        background-color: #297373;\n\n}\n.contactBottomFormMessage {\n    height: 80px;\n}\n\n/* footer part */\n.footer {\n        display: flex;\n        justify-content: center;\n        margin-top: auto;\n        padding-bottom: 7px;\n        font-size: 16px;\n        font-family: 'Raleway', sans-serif;\n}\n\n@media only screen and (max-width: 1300px) {\n    .mainHomepage { \n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        padding-top: 0;\n    }\n    .mainLeft {\n        width: 90vw;\n        margin: 0;\n    }\n    .mainSlideShow {\n        width: 90vw;\n        max-width: 900px;\n        height: 65vh;\n        margin: 0;\n    }\n    .mainLeft > p {\n        margin-top: 0;\n    }\n    .main {\n        height: 100%;\n    }\n    \n    .mainMenu {\n        display: grid;\n        grid-template-columns: repeat(2, 1fr);\n        gap: 15px;\n    }\n\n    .mainContact {\n        display: flex;\n        flex-direction: column;\n        padding-top: 20px;\n        \n    }\n    .header {\n        grid-template-columns: 1fr;\n        grid-template-rows: 1fr 1fr;\n    }\n    .headerLeft {\n        display: flex;\n        justify-content: center;\n        margin: 0;\n        grid-row: 1/2;\n    }\n    .headerLeft > p {\n        margin: 0;\n    }\n    .headerLeft > img {\n        display: none;\n    }\n    .headerRight {\n        display: flex;\n        justify-content: center;\n        margin: 0;\n        grid-column: 1/2;\n        grid-row: 2/3;\n    }\n    .menuPics {\n       height: 225px;\n       width: 80%;\n    }\n    .itemInfo {\n        width: 80%;\n    }\n   \n\n}\n\n@media only screen and (max-width: 800px) {\n\n    .mainMenu {\n        display: grid;\n        grid-template-columns: 1fr;\n        gap: 30px;\n    }\n    .menuPics {\n        height: 200px;\n    }\n\n    .mainContact > img {\n        width: 90vw;\n    }\n\n}\n@media only screen and (max-width: 480px)    {\n\n    .headerLeft > p {\n        font-size: 18px;\n    }\n    .headerRight > button {\n        font-size: 22px;\n    }\n\n}","",{version:3,sources:["webpack://./src/style.css"],names:[],mappings:"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",sourcesContent:["body {\n    padding: 0;\n    margin:0;\n}\n\n/* header part */\n.header {\n    height: 13vh;\n    width: 100vw;\n    display: grid;\n    grid-template-columns: 2fr 0.5fr 2fr;\n    box-shadow: 0 4px 5px rgb(177, 177, 177);\n    background-color: white;\n   \n}\n\n.headerLeft {\n    grid-column: 1/2;\n    margin-left: 5vw;\n    align-self: center;\n    display: flex;\n}\n\n.headerLeft > img {\n    height: 100px;\n    width: 200px;\n}\n\n.headerLeft > p {\n    display: flex;\n    align-items: center;\n    font-size: 26px;\n    margin: 0 0 0 5%;\n    font-family: 'Raleway', sans-serif;\n}\n\n.headerRight {\n    grid-column: 3/4;\n    align-self: center;\n    justify-self:center;\n    margin-right: 5vw;\n}\n\n.headerRight > button {\n    margin: 9px;\n    height: 30px;\n    width: 80px;\n    border: none;\n    background-color: white;\n    font-size: 22px;\n    font-family: 'Raleway', sans-serif;\n}\n\n.headerRight > button:hover {\n    transform: translateY(-4px);\n    transition: transform 0.3s ease-out\n}\n\n/* main part */\n.main{\n    margin: 30px 5vw 30px 5vw;\n    height: calc(85vh - 70px);\n    font-family: 'Josefin Sans', sans-serif;\n}\n\n/* main part - Homepage main */\n.mainHomepage { \n    display: grid;\n    grid-template-columns: 1.5fr 1fr;\n    padding-top: 50px;\n}\n\n.mainLeft {\n    margin-left: 7vw;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    width: 35vw;\n    text-align: justify;\n    font-size: 22px;\n    line-height: 30px;\n}\n\n.mainLeft > p:first-of-type {\n    text-align: center;\n    font-weight: 600;\n}\n\n.mainSlideShow {\n    margin-right: 5vw;\n    width: 100%;\n    height: 100%;\n    display: block;\n    border-radius: 15px;\n    transition: 2s all ease-in-out;\n    box-shadow: 0 5px 7px rgb(150 150 150);\n}\n\n/* main part - Menu main */\n.mainMenu {\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    grid-template-rows: repeat(2, minmax(280px, 1fr));\n    gap: 15px;\n    height: auto;\n}\n\n.mainMenu > div {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 10px;\n    /* margin-bottom: 10px; */\n}\n\n.menuPics {\n    width: 65%;\n    height: 60%;\n    border-radius: 15px;\n    box-shadow: 0 5px 7px rgb(150, 150, 150);\n}\n.menuText {\n    font-family: 'Raleway', sans-serif;\n    font-size: 20px;\n}\n.itemInfo {\n    width: 65%;\n}\n\n/* main part - Contact main */\n.mainContact {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    padding-top: 80px;\n    gap: 40px;\n}\n\n.mainContact > img {\n    height: 80%;\n    border-radius: 15px;\n    box-shadow: 0 5px 7px rgb(150, 150, 150);\n}\n\n.contactTop > div {\n    display: flex;\n    align-items: center;\n    padding-top:10px;\n}\n\n.logo{\n    width: 24px;\n    height: 24px;\n}\n\n.contactBottom {\n    padding-top: 30px;\n    width: 300px;\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n}\n\ninput {\n    height: 20px;\n    border-radius: 5px;\n    box-shadow: 0 5px 7px rgb(150, 150, 150);\n    border: 2px solid #f2f2f0a9;\n}\ninput:hover {\n    border: 2px solid #297373;\n    \n}\ninput:focus {\n    outline: none !important;\n    border: 2px solid #297373;\n}\ntextarea {\n    border-radius: 5px;\n    box-shadow: 0 5px 7px rgb(150, 150, 150);\n    border: 2px solid #f2f2f0a9;\n}\ntextarea:hover {\n    border: 2px solid #297373;\n    \n}\ntextarea:focus {\n    outline: none !important;\n    border: 2px solid #297373;\n}\n.contactBottom > button {\n    border: 1.5px solid black;\n    border-radius: 15px;\n    background-color: #339191;\n    font-size: 18px;\n    color:rgb(255, 255, 255);\n}\n.contactBottom > button:hover {\n        background-color: #297373;\n\n}\n.contactBottomFormMessage {\n    height: 80px;\n}\n\n/* footer part */\n.footer {\n        display: flex;\n        justify-content: center;\n        margin-top: auto;\n        padding-bottom: 7px;\n        font-size: 16px;\n        font-family: 'Raleway', sans-serif;\n}\n\n@media only screen and (max-width: 1300px) {\n    .mainHomepage { \n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        padding-top: 0;\n    }\n    .mainLeft {\n        width: 90vw;\n        margin: 0;\n    }\n    .mainSlideShow {\n        width: 90vw;\n        max-width: 900px;\n        height: 65vh;\n        margin: 0;\n    }\n    .mainLeft > p {\n        margin-top: 0;\n    }\n    .main {\n        height: 100%;\n    }\n    \n    .mainMenu {\n        display: grid;\n        grid-template-columns: repeat(2, 1fr);\n        gap: 15px;\n    }\n\n    .mainContact {\n        display: flex;\n        flex-direction: column;\n        padding-top: 20px;\n        \n    }\n    .header {\n        grid-template-columns: 1fr;\n        grid-template-rows: 1fr 1fr;\n    }\n    .headerLeft {\n        display: flex;\n        justify-content: center;\n        margin: 0;\n        grid-row: 1/2;\n    }\n    .headerLeft > p {\n        margin: 0;\n    }\n    .headerLeft > img {\n        display: none;\n    }\n    .headerRight {\n        display: flex;\n        justify-content: center;\n        margin: 0;\n        grid-column: 1/2;\n        grid-row: 2/3;\n    }\n    .menuPics {\n       height: 225px;\n       width: 80%;\n    }\n    .itemInfo {\n        width: 80%;\n    }\n   \n\n}\n\n@media only screen and (max-width: 800px) {\n\n    .mainMenu {\n        display: grid;\n        grid-template-columns: 1fr;\n        gap: 30px;\n    }\n    .menuPics {\n        height: 200px;\n    }\n\n    .mainContact > img {\n        width: 90vw;\n    }\n\n}\n@media only screen and (max-width: 480px)    {\n\n    .headerLeft > p {\n        font-size: 18px;\n    }\n    .headerRight > button {\n        font-size: 22px;\n    }\n\n}"],sourceRoot:""}]);const A=o},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",a=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),a&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),a&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,a,i,r){"string"==typeof n&&(n=[[null,n,void 0]]);var o={};if(a)for(var A=0;A<this.length;A++){var d=this[A][0];null!=d&&(o[d]=!0)}for(var s=0;s<n.length;s++){var c=[].concat(n[s]);a&&o[c[0]]||(void 0!==r&&(void 0===c[5]||(c[1]="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {").concat(c[1],"}")),c[5]=r),t&&(c[2]?(c[1]="@media ".concat(c[2]," {").concat(c[1],"}"),c[2]=t):c[2]=t),i&&(c[4]?(c[1]="@supports (".concat(c[4],") {").concat(c[1],"}"),c[4]=i):c[4]="".concat(i)),e.push(c))}},e}},537:n=>{n.exports=function(n){var e=n[1],t=n[3];if(!t)return e;if("function"==typeof btoa){var a=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),i="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(a),r="/*# ".concat(i," */"),o=t.sources.map((function(n){return"/*# sourceURL=".concat(t.sourceRoot||"").concat(n," */")}));return[e].concat(o).concat([r]).join("\n")}return[e].join("\n")}},379:n=>{var e=[];function t(n){for(var t=-1,a=0;a<e.length;a++)if(e[a].identifier===n){t=a;break}return t}function a(n,a){for(var r={},o=[],A=0;A<n.length;A++){var d=n[A],s=a.base?d[0]+a.base:d[0],c=r[s]||0,p="".concat(s," ").concat(c);r[s]=c+1;var l=t(p),m={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==l)e[l].references++,e[l].updater(m);else{var u=i(m,a);a.byIndex=A,e.splice(A,0,{identifier:p,updater:u,references:1})}o.push(p)}return o}function i(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,i){var r=a(n=n||[],i=i||{});return function(n){n=n||[];for(var o=0;o<r.length;o++){var A=t(r[o]);e[A].references--}for(var d=a(n,i),s=0;s<r.length;s++){var c=t(r[s]);0===e[c].references&&(e[c].updater(),e.splice(c,1))}r=d}}},569:n=>{var e={};n.exports=function(n,t){var a=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var a="";t.supports&&(a+="@supports (".concat(t.supports,") {")),t.media&&(a+="@media ".concat(t.media," {"));var i=void 0!==t.layer;i&&(a+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),a+=t.css,i&&(a+="}"),t.media&&(a+="}"),t.supports&&(a+="}");var r=t.sourceMap;r&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleTagTransform(a,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(a){var i=e[a];if(void 0!==i)return i.exports;var r=e[a]={id:a,exports:{}};return n[a](r,r.exports,t),r.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var a in e)t.o(e,a)&&!t.o(n,a)&&Object.defineProperty(n,a,{enumerable:!0,get:e[a]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var a=e.getElementsByTagName("script");a.length&&(n=a[a.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.nc=void 0,(()=>{const n=t.p+"e3084d541cac21b0c225.jpg",e=t.p+"c57d5c76ec47909eb64a.jpg",a=t.p+"0f281e8745ab3d0f36e9.jpg",i=t.p+"363c5f00b3b2f2fc1e49.jpg";function r(){const n=document.getElementById("mainPanel"),t=document.createElement("div");t.classList.add("mainHomepage"),t.setAttribute("id","mainHomepage"),n.childElementCount>0?t.remove():n.appendChild(t),function(){const n=document.getElementById("mainHomepage"),e=document.createElement("div");e.classList.add("mainLeft"),n.appendChild(e);const t=document.createElement("p"),a=document.createElement("p"),i=document.createElement("p"),r=["\b\b\b\bFor 15 years, the restaurant has been offering its customers authentic Bulgarian cuisine and traditional interior! ","The restaurant team has collected recipes of various dishes from all over Bulgaria! ","It is here that you will have the opportunity to feel Bulgarian hospitality and Bulgarian traditions."].join(""),o=["\b\b\b\bRarely, foreign groups visiting Sofia miss visiting the Tavern and trying the wonderful Bulgarian specialties. "," 'Izbata' Tavern is located in the heart of Sofia, near the 'Alexander Nevsky' memorial temple and the National Assembly. ","The establishment has been awarded many times for quality and style! Don't miss it!"].join("");t.innerText="'Izbata' Tavern is a place you must visit !",a.innerText=r,i.innerText=o,e.appendChild(t),e.appendChild(a),e.appendChild(i)}(),function(){const n=document.getElementById("mainHomepage"),t=document.createElement("div");t.classList.add("mainSlideShow"),n.appendChild(t);let r=0,o=[];o[0]=e,o[1]=a,o[2]=i,function n(){t.style.backgroundImage=`url(${o[r]})`,r<o.length-1?r++:r=0,setTimeout((()=>{n()}),3e3)}()}()}const o=t.p+"a8504233fd01d2487f37.jpg",A=t.p+"13e3fb49f47869f4ee43.jpg",d=t.p+"d125e670d3dad7445a39.jpg",s=t.p+"b7aeb63b080c2128b931.jpg",c=t.p+"0d30e10d0c2dd3312aa0.jpg",p=t.p+"90e0e7ab2bc9303dc0cd.jpg";function l(n,e,t){const a=document.createElement("div"),i=document.createElement("img");i.classList.add("menuPics"),i.src=`${n}`;const r=document.createElement("div");r.classList.add("menuText"),r.innerText=`${e}`;const o=document.createElement("div");return o.classList.add("itemInfo"),o.innerText=`${t}`,a.appendChild(i),a.appendChild(r),a.appendChild(o),a}const m=t.p+"b61b18f3261e586e54ca.jpg",u=t.p+"eb76a9ba6fef96b1188d.jpg",C=t.p+"8d499d726bb5fd319963.jpg",h=t.p+"d05de19cc8088adcf59e.jpg";function f(){const n=document.createElement("div");n.setAttribute("id","information"),mainContact.appendChild(n);const e=document.createElement("img");e.src=h,mainContact.appendChild(e)}var g=t(379),B=t.n(g),x=t(795),I=t.n(x),b=t(569),y=t.n(b),v=t(565),w=t.n(v),E=t(216),L=t.n(E),S=t(589),k=t.n(S),j=t(426),Q={};Q.styleTagTransform=k(),Q.setAttributes=w(),Q.insert=y().bind(null,"head"),Q.domAPI=I(),Q.insertStyleElement=L(),B()(j.Z,Q),j.Z&&j.Z.locals&&j.Z.locals;const T=document.getElementById("content"),M=document.createElement("div"),Y=document.createElement("div");!function(){const e=document.getElementById("content"),t=document.createElement("div"),a=document.createElement("button"),i=document.createElement("button"),r=document.createElement("button"),o=document.createElement("div"),A=document.createElement("p"),d=document.createElement("div"),s=new Image;s.src=n,t.classList.add("header"),t.appendChild(o),o.classList.add("headerLeft"),o.appendChild(s),A.innerText=" 'Izbata' Tavern - Autentic Bulgarian Cuisine",o.appendChild(A),t.appendChild(d),d.classList.add("headerRight"),d.appendChild(a),a.classList.add("homepageBtn"),a.setAttribute("id","homepageBtn"),d.appendChild(i),i.classList.add("menuBtn"),i.setAttribute("id","menuBtn"),d.appendChild(r),r.classList.add("contactBtn"),r.setAttribute("id","contactBtn"),a.innerText="Home",i.innerText="Menu",r.innerText="Contact",e.appendChild(t)}();const R=document.getElementById("homepageBtn"),z=document.getElementById("menuBtn"),W=document.getElementById("contactBtn");M.classList.add("main"),M.setAttribute("id","mainPanel"),T.appendChild(M),r(),R.addEventListener("click",(function(){M.firstChild.remove(),r()})),z.addEventListener("click",(function(){M.firstChild.remove(),function(){const n=document.getElementById("mainPanel"),e=document.createElement("div");e.classList.add("mainMenu"),e.setAttribute("id","mainMenu"),n.childElementCount>0?e.remove():n.appendChild(e),function(){const n=document.getElementById("mainMenu");n.appendChild(l(o,"Banitsa","Made by layering a mixture of whisked eggs, natural yogurt and pieces of white brined cheese between pastry and then baking it in an oven.")),n.appendChild(l(A,"Tarator","Made of salted strained yogurt mixed with cucumbers, garlic, salt, olive oil, and herbs such as dill, mint, parsley and thyme.")),n.appendChild(l(d,"Meshana Skara","Mixed grill consisting of one kyufte, one pork steak, one kebapche, and one pork skewer, accompanied by french fries and lyutenitsa.")),n.appendChild(l(s,"Zelevi Sarmi","Made from cabbage leaves stuffed with rice and grounded meat and then boiled.")),n.appendChild(l(c,"Shkembe Chorba","Soup made from beef stomach (tripe) with red wine vinegar and spices such as paprika, chili, black pepper and garlic.")),n.appendChild(l(p,"Musaka","Made with baked potatoes, a rich tomatoey beef mince sauce and topped off with a deliciously creamy bechamel sauce."))}()}()})),W.addEventListener("click",(function(){M.firstChild.remove(),function(){const n=document.getElementById("mainPanel"),e=document.createElement("div");e.classList.add("mainContact"),e.setAttribute("id","mainContact"),n.childElementCount>0?e.remove():n.appendChild(e),f(),function(){const n=document.getElementById("information"),e=document.createElement("div");e.classList.add("contactTop");const t=document.createElement("div"),a=document.createElement("div"),i=document.createElement("div"),r=document.createElement("img");r.classList.add("logo"),r.src=m;const o=document.createElement("img");o.classList.add("logo"),o.src=u;const A=document.createElement("img");A.classList.add("logo"),A.src=C;const d=document.createElement("div");d.innerText="\b18 Slavyanska str., Sofia";const s=document.createElement("div");s.innerText="\b+ 359 29 895 533,\b+ 359 88 989 533";const c=document.createElement("div");c.innerText="\bOpen from 10 am till 11 pm",t.appendChild(r),t.appendChild(d),a.appendChild(o),a.appendChild(s),i.appendChild(A),i.appendChild(c),e.appendChild(t),e.appendChild(a),e.appendChild(i),n.appendChild(e)}(),function(){const n=document.getElementById("information"),e=document.createElement("div");e.classList.add("contactBottom");const t=document.createElement("input");t.setAttribute("type","text");const a=document.createElement("input");a.setAttribute("type","email");const i=document.createElement("input");i.setAttribute("type","text");const r=document.createElement("textArea");r.classList.add("contactBottomFormMessage"),r.setAttribute("type","text");const o=document.createElement("button");o.addEventListener("click",(function(){t.value="",a.value="",i.value="",r.value=""})),t.placeholder="Name",a.placeholder="E-mail",i.placeholder="About",r.placeholder="Message",o.innerText="Send",e.appendChild(t),e.appendChild(a),e.appendChild(i),e.appendChild(r),e.appendChild(o),n.appendChild(e)}()}()})),Y.classList.add("footer"),T.appendChild(Y),Y.innerText="Copyright © 2022 steress"})()})();
//# sourceMappingURL=main.js.map