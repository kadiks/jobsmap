(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{9075:function(e,r,n){"use strict";n.r(r),n.d(r,{__N_SSG:function(){return p},default:function(){return x}});var t=n(5893),i=n(7294),c=n(9008),o=n(5152),s=n(1664),a=(n(1330),n(3802),n(6156));function l(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function d(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?l(Object(n),!0).forEach((function(r){(0,a.Z)(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}var u=function(e){var r=e.name,n=e.value,i=e.coords,c=e.onClick;return(0,t.jsxs)("li",{onClick:function(){return c(i)},className:"flex p-1 border-b border-indigo-500 cursor-pointer hover:bg-indigo-500 hover:text-indigo-800",children:[(0,t.jsx)("span",{className:"flex-grow",children:r}),(0,t.jsx)("span",{className:"text-indigo-300",children:n})]})},f=function(e){var r=e.cities,n=void 0===r?[{name:"Paris",value:1234},{name:"Paris",value:1234}]:r,i=e.onClick,c=void 0===i?function(){}:i;return(0,t.jsx)("ul",{className:"text-white overflow-scroll",style:{overflow:"scroll",height:"80vh"},children:n.map((function(e,r){return(0,t.jsx)(u,d(d({},e),{},{onClick:c}),r)}))})},h=function(e){var r=e.cities,n=e.onClick;return(0,t.jsxs)("div",{className:"bg-indigo-600 h-screen",children:[(0,t.jsx)("div",{className:"px-12 pb-4 pt-2 border-b border-indigo-900",children:(0,t.jsx)("h2",{className:"text-white text-2xl italic ",children:"Jobsmap"})}),(0,t.jsxs)("div",{className:"pt-4 flex flex-col space-x-px",children:[(0,t.jsx)("div",{className:"flex-1",children:(0,t.jsx)(f,{cities:r,onClick:n})}),(0,t.jsx)(s.default,{href:"/about",children:(0,t.jsx)("a",{className:"border text-center border-indigo-100 rounded-md p-2 text-white hover:text-indigo-600 hover:bg-indigo-100",children:"A propos"})})]})]})},p=!0,x=function(e){var r,s=e.places,a=(0,i.useState)((null===(r=s[0])||void 0===r?void 0:r.coords)||[45.78365,3.10013]),l=a[0],d=a[1],u=(0,i.useRef)(),f=u.current;(0,i.useEffect)((function(){u.current=l}),[l]);var p=(0,o.default)((function(){return Promise.all([n.e(269),n.e(677)]).then(n.bind(n,4677))}),{ssr:!1,loadableGenerated:{webpack:function(){return[4677]},modules:["index.js -> ../components/map"]}}),x=s.map((function(e){return{title:"".concat(e.name,". Total : ").concat(e.total),coords:e.coords}})),v=s.map((function(e){return{name:e.name,value:e.total,coords:e.coords}}));return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(c.default,{children:[(0,t.jsx)("title",{children:"Page d'accueil : Cartographie des offres d'emplois tech en France"}),(0,t.jsx)("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width"})]}),(0,t.jsxs)("div",{className:"flex",children:[(0,t.jsx)("div",{className:"flex-none",children:(0,t.jsx)(h,{cities:v,onClick:function(e){d(e)}})}),(0,t.jsx)("div",{className:"flex-grow h-screen",children:(0,t.jsx)(p,{center:l,prevCenter:f,markers:x})})]})]})}},8581:function(e,r,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(9075)}])}},function(e){e.O(0,[774,482,888,179],(function(){return r=8581,e(e.s=r);var r}));var r=e.O();_N_E=r}]);