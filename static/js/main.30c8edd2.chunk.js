(this["webpackJsonpunsplash-image-search"]=this["webpackJsonpunsplash-image-search"]||[]).push([[0],{14:function(e,t,n){},69:function(e,t,n){},70:function(e,t,n){"use strict";n.r(t);var r=n(31),a=n.n(r),c=n(5),s=n.n(c),i=n(11),o=n(4),u=n(0),l=(n(14),n(2)),j=n(9),d=Object(u.createContext)(null),h=n(18),b=n.n(h),x="&client_id=k7OYrmaj7NjZpJJ9QYDXE0jejMLhB-rm7NTO3SLHbJ0",p="https://api.unsplash.com/";function O(e){return m.apply(this,arguments)}function m(){return(m=Object(i.a)(s.a.mark((function e(t){var n,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://unsplash.com/nautocomplete/".concat(t),e.next=3,b.a.get(n);case 3:return r=e.sent,e.abrupt("return",r.data.autocomplete);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(e){return g.apply(this,arguments)}function g(){return(g=Object(i.a)(s.a.mark((function e(t){var n,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(p,"search/photos?query=").concat(t).concat(x),e.next=3,v(n);case 3:return r=e.sent,e.abrupt("return",r.map((function(e){return{id:e.id,regularImgQuality:e.urls.regular,fullImgQuality:e.urls.full,name:e.user.name,username:e.user.username,location:e.user.location,description:e.description,profile_image:e.user.profile_image.medium,tags:e.tags.map((function(e){return e.title}))}})));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function v(e){return w.apply(this,arguments)}function w(){return(w=Object(i.a)(s.a.mark((function e(t){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get(t);case 2:return n=e.sent,e.abrupt("return",n.data.results);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var y=function(e){return e.pathname.substring(0,e.pathname.lastIndexOf("/")+1)},S=function(e){return e.pathname.substring(e.pathname.lastIndexOf("/")+1)},N=n(1);function C(){return Object(u.useEffect)((function(){function e(){document.documentElement.style.setProperty("--vh","".concat(window.innerHeight/100,"px"))}return window.addEventListener("resize",e()),window.addEventListener("orientationchange",e()),function(){document.removeEventListener("resize",e),document.removeEventListener("orientationchange",e)}}),[]),Object(N.jsx)(N.Fragment,{})}var k=n(19),I=n.n(k),T=n.p+"static/media/pin.72e55ebe.svg";function E(e){var t=e.open,n=e.onClose,r=e.id,a=Object(u.useContext)(d).imagesData;return Object(N.jsx)("div",{className:"SingleImageContainer",children:Object(N.jsx)(j.a,{exitBeforeEnter:!0,children:t&&Object(N.jsxs)(j.b.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.3},children:[Object(N.jsx)("div",{className:"DarkerBG"}),Object(N.jsx)("div",{className:"SingleImage",children:a.filter((function(e){return e.id===r})).map((function(e){return Object(N.jsxs)("div",{children:[Object(N.jsxs)("div",{className:"header",children:[Object(N.jsxs)("div",{className:"userData",children:[Object(N.jsx)("img",{src:e.profile_image,alt:"profile img"}),Object(N.jsxs)("div",{children:[Object(N.jsx)("p",{children:e.name}),Object(N.jsxs)("p",{className:"username",children:["@",e.username]})]})]}),Object(N.jsx)("div",{className:"btnContainer",children:Object(N.jsx)("button",{className:"btn btn-exit","aria-label":"Close",onClick:n,children:Object(N.jsx)("span",{"aria-hidden":"true",children:"\xd7"})})})]}),Object(N.jsx)("img",{src:e.regularImgQuality,alt:"img ".concat(e.id)}),Object(N.jsxs)("div",{className:"location",children:[e.location&&Object(N.jsx)("img",{src:T,alt:"location img"}),Object(N.jsx)("p",{children:e.location}),Object(N.jsx)("p",{className:"description",children:e.description})]})]})}))})]})})})}function B(){var e=Object(u.useContext)(d),t=e.searchbarText,n=e.setSearchbarText,r=e.oldSearchbarText,a=e.setSearchID,c=e.setShowSuggestions,s=Object(l.f)();return[function(e){t.length>0&&void 0!==e&&(s.push("/s/".concat(e)),n(r),c(!1),a(e))}]}function D(){var e=Object(u.useContext)(d),t=e.imagesData,n=e.searchID,r=B(),a=Object(o.a)(r,1)[0],c=Object(u.useState)(!1),s=Object(o.a)(c,2),i=s[0],l=s[1],h=Object(u.useState)(),b=Object(o.a)(h,2),x=b[0],p=b[1];return Object(N.jsxs)("div",{className:"galleryCards",children:[Object(N.jsx)(j.a,{exitBeforeEnter:!0,children:Object(N.jsxs)(j.b.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:1},children:[Object(N.jsx)("p",{className:"title",children:n}),Object(N.jsx)(k.ResponsiveMasonry,{columnsCountBreakPoints:{475:1,575:2,1e3:3,1800:4},children:Object(N.jsx)(I.a,{children:t.map((function(e){return Object(N.jsx)("div",{className:"cardContainer",children:Object(N.jsxs)("div",{className:"Card",children:[Object(N.jsx)("img",{src:e.regularImgQuality,className:0===e.tags.length?"roundCorners":"",alt:"poster ".concat(e.id),onClick:function(t){return n=e.id,p(n),void l(!0);var n}}),Object(N.jsx)("div",{children:e.tags.map((function(t,n){return Object(N.jsx)("div",{onClick:function(){return a(t)},children:Object(N.jsx)("p",{children:t})},"".concat(e.id,"-").concat(n))}))})]})},e.id)}))})})]},n)}),Object(N.jsx)(E,{open:i,onClose:function(){return l(!1)},id:x})]})}function _(){var e=Object(u.useContext)(d),t=e.searchbarText,n=e.suggestions,r=e.showSuggestions,a=e.hoveredSuggestionIdx,c=B(),s=Object(o.a)(c,1)[0];return Object(N.jsx)("ul",{className:"searchbar_ul "+(r&&t.length>=3&&"fadeIn"),children:n.length>0?n.map((function(e,t){return Object(N.jsx)("li",{className:"searchbar_li "+(a===t&&"active"),onClick:function(){return s(e.query)},index:t,children:Object(N.jsx)("p",{children:e.query})},t)})):Object(N.jsx)("li",{className:"noResult",children:Object(N.jsx)("p",{children:"no suggestions"})})})}var L=n.p+"static/media/lupe.af78e9aa.svg";function P(){var e=Object(u.useContext)(d),t=e.searchbarText,n=e.oldSearchbarText,r=e.onSearchbarTextChanging,a=function(e){var t=Object(u.useContext)(d),n=t.searchbarText,r=t.setSearchbarText,a=t.oldSearchbarText,c=t.setOldSearchbarText,o=t.showResInSearchBar,l=t.setShowSuggestions,j=Object(u.useRef)();function h(e){j.current.contains(e.target)||l(!1)}return Object(u.useEffect)((function(){return document.addEventListener("mousedown",h),function(){document.removeEventListener("mousedown",h)}}),[]),[j,function(){var e=Object(i.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:l(!0),""===n&&(o(a),r(a),c(""));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()]}(),c=Object(o.a)(a,2),l=c[0],j=c[1],h=B(),b=Object(o.a)(h,1)[0];return Object(N.jsxs)(N.Fragment,{children:[Object(N.jsxs)("div",{className:"searchBar",ref:l,children:[Object(N.jsx)("div",{onClick:function(){return b(t)},children:Object(N.jsx)("img",{src:L,alt:"lupe"})}),Object(N.jsx)("form",{onSubmit:function(e){return e.preventDefault()},children:Object(N.jsx)("input",{onChange:r,type:"text",placeholder:"Search free high-resolution photos",value:t||n,onKeyPress:function(e){13===(e.keyCode||e.which)&&b(t)},onClick:j})})]}),Object(N.jsx)(_,{})]})}function J(){return Object(N.jsx)("div",{className:"col-lg-6 col-md-8 col-sm-9 col-12 gallerySearchbar",children:Object(N.jsx)("div",{className:"row",children:Object(N.jsx)(P,{})})})}var Q=n(33),R=n.n(Q),q=n(34);n(69);function z(e){return q.isMobile?Object(N.jsx)("div",{className:"overflow-y-auto",children:e.children}):Object(N.jsx)(R.a,{className:"AppScroolbar",children:e.children})}function H(){return Object(N.jsx)(j.b.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:1},children:Object(N.jsxs)(z,{children:[Object(N.jsx)(J,{}),Object(N.jsx)(D,{})]})})}var M=n.p+"static/media/BG_Unsplash.57fddc0a.jpg";function F(){return Object(N.jsxs)(j.b.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:1},children:[Object(N.jsx)("div",{className:"startPage",children:Object(N.jsxs)("div",{className:"row container",children:[Object(N.jsx)("h1",{children:"Unsplash"}),Object(N.jsxs)("p",{children:["The internet's source of\xa0",Object(N.jsx)("a",{href:"https://unsplash.com/license",children:"freely-usable images"}),Object(N.jsx)("br",{}),"Powered by creators everywhere."]}),Object(N.jsx)(P,{})]})}),Object(N.jsx)("img",{className:"BgImage",src:M,alt:"background_image"})]})}function G(){var e=Object(l.g)(),t=Object(u.useState)([]),n=Object(o.a)(t,2),r=n[0],a=n[1],c=Object(u.useState)(S(e)),h=Object(o.a)(c,2),b=h[0],x=h[1];Object(u.useEffect)((function(){(function(){var e=Object(i.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t.length>0)){e.next=6;break}return e.t0=a,e.next=4,f(t);case 4:e.t1=e.sent,(0,e.t0)(e.t1);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}})()(b)}),[b]),Object(u.useEffect)((function(){x(S(e))}),[e.pathname]);var p=Object(u.useState)(""),m=Object(o.a)(p,2),g=m[0],v=m[1],w=Object(u.useState)(""),k=Object(o.a)(w,2),I=k[0],T=k[1],E=Object(u.useState)([]),B=Object(o.a)(E,2),D=B[0],_=B[1],L=Object(u.useState)(!1),P=Object(o.a)(L,2),J=P[0],Q=P[1],R=Object(u.useState)(),q=Object(o.a)(R,2),z=q[0],M=q[1],G=function(){var e=Object(i.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0===t.length&&T(""),!(t.length>=3)){e.next=8;break}return e.t0=_,e.next=5,O(t);case 5:e.t1=e.sent,(0,e.t0)(e.t1),T(t);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(N.jsxs)("div",{children:[Object(N.jsx)(C,{}),Object(N.jsx)(d.Provider,{value:{searchID:b,searchbarText:g,setSearchbarText:v,oldSearchbarText:I,setOldSearchbarText:T,onSearchbarTextChanging:function(e){var t=e.target.value.replace(/[^\w\s]/gi,"");v(t),G(t)},imagesData:r,setSearchID:x,showResInSearchBar:G,suggestions:D,showSuggestions:J,setShowSuggestions:Q,hoveredSuggestionIdx:z,setHoveredSuggestionIdx:M},children:Object(N.jsx)(j.a,{exitBeforeEnter:!0,children:Object(N.jsxs)(l.c,{location:e,children:[Object(N.jsx)(l.a,{exact:!0,path:"/",render:function(){return Object(N.jsx)(F,{})}}),Object(N.jsx)(l.a,{exact:!0,path:"/s/:".concat(b),render:function(){return Object(N.jsx)(H,{})}})]},y(e))})})]})}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var U=n(15);a.a.render(Object(N.jsx)(U.a,{basename:"/zad_rekrut-hand2band-unsplash_img_search",children:Object(N.jsx)(G,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[70,1,2]]]);
//# sourceMappingURL=main.30c8edd2.chunk.js.map