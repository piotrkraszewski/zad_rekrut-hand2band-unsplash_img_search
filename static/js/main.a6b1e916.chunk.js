(this["webpackJsonpunsplash-image-search"]=this["webpackJsonpunsplash-image-search"]||[]).push([[0],{14:function(e,t,n){},45:function(e,t,n){},70:function(e,t,n){"use strict";n.r(t);var a=n(31),r=n.n(a),c=n(5),s=n.n(c),i=n(11),o=n(4),u=n(0),l=(n(14),n(2)),j=n(9),d=Object(u.createContext)(null),h=n(32),b=n.n(h),p=n(33),m=(n(45),n(1));function x(e){return p.isMobile?Object(m.jsx)("div",{className:"overflow-y-auto",children:e.children}):Object(m.jsx)(b.a,{className:"AppScroolbar",children:e.children})}var O=n(18),f=n.n(O),g="&client_id=k7OYrmaj7NjZpJJ9QYDXE0jejMLhB-rm7NTO3SLHbJ0",v="https://api.unsplash.com/",y="".concat("https://image.tmdb.org/t/p/","w500"),w="".concat(y,"null"),S=function(e){return e.pathname.substring(0,e.pathname.lastIndexOf("/")+1)},C=function(e){return e.pathname.substring(e.pathname.lastIndexOf("/")+1)};function N(e){return k.apply(this,arguments)}function k(){return(k=Object(i.a)(s.a.mark((function e(t){var n,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://unsplash.com/nautocomplete/".concat(t),e.next=3,f.a.get(n);case 3:return a=e.sent,e.abrupt("return",a.data.autocomplete);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function I(e){return T.apply(this,arguments)}function T(){return(T=Object(i.a)(s.a.mark((function e(t){var n,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(v,"search/photos?query=").concat(t).concat(g),e.next=3,E(n);case 3:return a=e.sent,e.abrupt("return",a.map((function(e){return{id:e.id,regularImgQuality:e.urls.regular,fullImgQuality:e.urls.full,name:e.user.name,username:e.user.username,location:e.user.location,description:e.description,profile_image:e.user.profile_image.medium,tags:e.tags.map((function(e){return e.title}))}})));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function E(e){return B.apply(this,arguments)}function B(){return(B=Object(i.a)(s.a.mark((function e(t){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.get(t);case 2:return n=e.sent,e.abrupt("return",n.data.results);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function D(){return Object(u.useEffect)((function(){function e(){document.documentElement.style.setProperty("--vh","".concat(window.innerHeight/100,"px"))}return window.addEventListener("resize",e()),window.addEventListener("orientationchange",e()),function(){document.removeEventListener("resize",e),document.removeEventListener("orientationchange",e)}}),[]),Object(m.jsx)(m.Fragment,{})}var _=n(19),L=n.n(_),P=n.p+"static/media/no_image.2f8a70e1.png",Q=n.p+"static/media/pin.72e55ebe.svg";function H(e){var t=e.open,n=e.onClose,a=e.id,r=Object(u.useContext)(d).imagesData;return Object(m.jsx)(j.a,{exitBeforeEnter:!0,children:t&&Object(m.jsxs)(j.b.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.3},children:[Object(m.jsx)("div",{className:"DarkerBG"}),Object(m.jsx)("div",{className:"SingleImage",children:r.filter((function(e){return e.id===a})).map((function(e){return Object(m.jsxs)("div",{children:[Object(m.jsxs)("div",{className:"header",children:[Object(m.jsxs)("div",{className:"userData",children:[Object(m.jsx)("img",{src:e.profile_image,alt:"profile img"}),Object(m.jsxs)("div",{children:[Object(m.jsx)("p",{children:e.name}),Object(m.jsxs)("p",{className:"username",children:["@",e.username]})]})]}),Object(m.jsx)("div",{className:"btnContainer",children:Object(m.jsx)("button",{className:"btn btn-exit","aria-label":"Close",onClick:n,children:Object(m.jsx)("span",{"aria-hidden":"true",children:"\xd7"})})})]}),Object(m.jsx)("img",{src:e.regularImgQuality,alt:"img ".concat(e.id)}),Object(m.jsxs)("div",{className:"location",children:[e.location&&Object(m.jsx)("img",{src:Q,alt:"location img"}),Object(m.jsx)("p",{children:e.location}),Object(m.jsx)("p",{className:"description",children:e.description})]})]})}))})]})})}function J(){var e=Object(u.useContext)(d),t=e.setSearchbarText,n=e.oldSearchbarText,a=e.setSearchID,r=e.pushToHistory,c=e.setShowSuggestions,s=e.getImages;return[function(e){void 0!==e&&(console.log(e),r("/s/".concat(e)),t(n),c(!1),s(e),a(e))},function(){t(""),r("/")}]}function R(){var e=Object(u.useContext)(d),t=e.imagesData,n=e.searchID,a=J(),r=Object(o.a)(a,1)[0],c=Object(u.useState)(!1),s=Object(o.a)(c,2),i=s[0],l=s[1],h=Object(u.useState)(),b=Object(o.a)(h,2),p=b[0],x=b[1];return Object(m.jsxs)("div",{className:"galleryCards",children:[Object(m.jsx)(j.a,{exitBeforeEnter:!0,children:Object(m.jsxs)(j.b.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:1},children:[Object(m.jsx)("p",{className:"title",children:n}),Object(m.jsx)(_.ResponsiveMasonry,{columnsCountBreakPoints:{475:1,575:2,1e3:3,1800:4},children:Object(m.jsx)(L.a,{children:t.map((function(e){return Object(m.jsx)("div",{className:"cardContainer",children:Object(m.jsxs)("div",{className:"Card",children:[Object(m.jsx)("img",{src:e.regularImgQuality!==w?e.regularImgQuality:P,className:0===e.tags.length&&"roundCorners",alt:"poster ".concat(e.id),onClick:function(t){return n=e.id,x(n),void l(!0);var n}}),Object(m.jsx)("div",{children:e.tags.map((function(e){return Object(m.jsx)("div",{onClick:function(){return r(e)},children:Object(m.jsx)("p",{children:e})})}))})]},e.id)})}))})})]},n)}),Object(m.jsx)(H,{open:i,onClose:function(){return l(!1)},id:p})]})}function q(){var e=Object(u.useContext)(d),t=e.searchbarText,n=e.autoCompltions,a=e.showSuggestions,r=e.hoveredSuggestionIdx,c=J(),s=Object(o.a)(c,1)[0];return Object(m.jsx)("ul",{className:"searchbar_ul "+(a&&t.length>=3&&"fadeIn"),children:n.length>0?n.map((function(e,t){return Object(m.jsx)("li",{className:"searchbar_li "+(r===t&&"active"),onClick:function(){return s(e.query)},index:t,children:Object(m.jsx)("p",{children:e.query})},t)})):Object(m.jsx)("li",{className:"noResult",children:Object(m.jsx)("p",{children:"no suggestions"})})})}var z=n.p+"static/media/lupe.af78e9aa.svg";function M(){var e=Object(u.useContext)(d),t=e.searchbarText,n=e.oldSearchbarText,a=e.onSearchbarTextChanging,r=function(e){var t=Object(u.useContext)(d),n=t.searchbarText,a=t.setSearchbarText,r=t.oldSearchbarText,c=t.setOldSearchbarText,o=t.showResInSearchBar,l=t.setShowSuggestions,j=Object(u.useRef)();function h(e){j.current.contains(e.target)||l(!1)}return Object(u.useEffect)((function(){return document.addEventListener("mousedown",h),function(){document.removeEventListener("mousedown",h)}}),[]),[j,function(){var e=Object(i.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:l(!0),""===n&&(o(r),a(r),c(""));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()]}(),c=Object(o.a)(r,2),l=c[0],j=c[1],h=J(),b=Object(o.a)(h,1)[0];return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)("div",{className:"searchBar",ref:l,children:[Object(m.jsx)("div",{onClick:function(){return b(t)},children:Object(m.jsx)("img",{src:z,alt:"lupe"})}),Object(m.jsx)("form",{onSubmit:function(e){return e.preventDefault()},children:Object(m.jsx)("input",{onChange:a,type:"text",placeholder:"Search free high-resolution photos",value:t||n,onKeyPress:function(e){13===(e.keyCode||e.which)&&b(t)},onClick:j})})]}),Object(m.jsx)(q,{})]})}function F(){return Object(m.jsx)("div",{className:"col-lg-6 col-md-8 col-sm-9 col-12 gallerySearchbar",children:Object(m.jsx)("div",{className:"row",children:Object(m.jsx)(M,{})})})}function G(){return Object(m.jsxs)(j.b.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:1},children:[Object(m.jsx)(F,{}),Object(m.jsx)(R,{})]})}var U=n.p+"static/media/BG_Unsplash.57fddc0a.jpg";function W(){return Object(m.jsxs)(j.b.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:1},children:[Object(m.jsx)("div",{className:"startPage",children:Object(m.jsxs)("div",{className:"row container",children:[Object(m.jsx)("h1",{children:"Unsplash"}),Object(m.jsxs)("p",{children:["The internet's source of\xa0",Object(m.jsx)("a",{href:"https://unsplash.com/license",children:"freely-usable images"}),Object(m.jsx)("br",{}),"Powered by creators everywhere."]}),Object(m.jsx)(M,{})]})}),Object(m.jsx)("img",{className:"BgImage",src:U,alt:"background_image"})]})}function Y(){var e=Object(l.g)(),t=Object(l.f)(),n=Object(u.useState)(function(e){var t=C(e);return""===t?"157336":t}(e)),a=Object(o.a)(n,2),r=a[0],c=a[1];Object(u.useEffect)((function(){f(r),console.log(r)}),[r]),Object(u.useEffect)((function(){c(C(e))}),[e.pathname]);var h=Object(u.useState)([]),b=Object(o.a)(h,2),p=b[0],O=b[1],f=function(){var e=Object(i.a)(s.a.mark((function e(t){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I(t);case 2:n=e.sent,O(n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g=Object(u.useState)(""),v=Object(o.a)(g,2),y=v[0],w=v[1],k=Object(u.useState)(""),T=Object(o.a)(k,2),E=T[0],B=T[1],_=Object(u.useState)([]),L=Object(o.a)(_,2),P=L[0],Q=L[1],H=Object(u.useState)(!1),J=Object(o.a)(H,2),R=J[0],q=J[1],z=Object(u.useState)(),M=Object(o.a)(z,2),F=M[0],U=M[1],Y=function(){var e=Object(i.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0===t.length&&B(""),!(t.length>=3)){e.next=8;break}return e.t0=Q,e.next=5,N(t);case 5:e.t1=e.sent,(0,e.t0)(e.t1),B(t);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(u.useEffect)((function(){console.log({imagesData:p})}),[p]),Object(m.jsxs)("div",{children:[Object(m.jsx)(D,{}),Object(m.jsx)(d.Provider,{value:{searchID:r,searchbarText:y,setSearchbarText:w,oldSearchbarText:E,setOldSearchbarText:B,onSearchbarTextChanging:function(e){var t=e.target.value.replace(/[^\w\s]/gi,"");w(t),Y(t)},imagesData:p,setSearchID:c,showResInSearchBar:Y,pushToHistory:function(e){return t.push(e)},autoCompltions:P,showSuggestions:R,setShowSuggestions:q,hoveredSuggestionIdx:F,setHoveredSuggestionIdx:U,getImages:f},children:Object(m.jsx)(x,{children:Object(m.jsx)(j.a,{exitBeforeEnter:!0,children:Object(m.jsxs)(l.c,{location:e,children:[Object(m.jsx)(l.a,{exact:!0,path:"/",render:function(){return Object(m.jsx)(W,{})}}),Object(m.jsx)(l.a,{exact:!0,path:"/s/:".concat(r),render:function(){return Object(m.jsx)(G,{})}})]},S(e))})})})]})}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var A=n(17);r.a.render(Object(m.jsx)(A.a,{basename:"/zad_rekrut-hand2band-unsplash_img_search",children:Object(m.jsx)(Y,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[70,1,2]]]);
//# sourceMappingURL=main.a6b1e916.chunk.js.map