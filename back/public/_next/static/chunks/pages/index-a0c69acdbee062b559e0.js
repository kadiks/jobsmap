(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{3847:function(e,n,t){"use strict";t.r(n),t.d(n,{__N_SSG:function(){return V},default:function(){return B}});var r=t(5893),o=t(18),i=t(7294),a=t(9008),c=t(5152),s=t(1664),l=(t(1330),function(){return(0,r.jsx)("div",{className:"flex-none px-12 pb-4 pt-2 border-b border-indigo-900",children:(0,r.jsx)("h2",{className:"text-white text-2xl italic font-sans",children:"Jobsmap"})})}),u=function(e){var n=e.children,t=e.className,i=void 0===t?"":t,a=e.onClick,c=void 0===a?function(){}:a,s=["focus:outline-none"].concat((0,o.Z)(i.split(" ")));return(0,r.jsx)("button",{className:s.join(" "),onClick:c,children:n})},d=function(e){var n=e.buttons,t=e.selectedId,o=e.onChange,i=void 0===o?function(){}:o;t||(t=n[0].id);return(0,r.jsx)("div",{className:"tab-group flex justify-center text-white",children:n.map((function(e,o){var a=e.id,c=e.name;console.log("buttons.map");var s=["border","py-1","px-2","hover:bg-indigo-100","hover:text-indigo-600","hover:shadow-inner","hover:border-indigo-200"];return 0===o&&(s.push("rounded-l-lg"),s.push("border-r-0")),n.length===o+1&&s.push("rounded-r-lg"),t===a&&(s.push("bg-indigo-100"),s.push("text-indigo-600")),(0,r.jsx)(u,{className:s.join(" "),onClick:function(){return function(e){i(e)}(a)},children:c},a)}))})},y=function(e){var n=e.enabled,t=e.onChange;return(0,r.jsx)("input",{type:"checkbox",onChange:t,checked:n})},f=function(e){var n=e.cities,t=e.filterType,o=e.selectedKeywords,i=e.onChangeFilterType,a=e.isDptView,c=e.onClickGroupDpt;return(0,r.jsxs)("div",{className:"flex-none",children:[(0,r.jsx)(d,{buttons:[{name:"Villes",id:"cities"},{name:"Technos",id:"technologies"}],selectedId:t,onChange:i}),(0,r.jsxs)("div",{className:"flex justify-center flex-wrap items-center border-t border-b border-indigo-900 mt-2 mb-2",children:[(0,r.jsx)(y,{enabled:a,onChange:c}),(0,r.jsx)("span",{className:"pl-2 text-white text-xs",children:"Grouper les d\xe9partements ?"})]}),(0,r.jsxs)("div",{className:"mt-2 flex flex-col items-center justify-center px-4 text-white",children:[o.length>0&&(0,r.jsxs)("p",{children:["Lieux contenants des offres avec : ",o.join(", ")]}),(0,r.jsxs)("p",{children:["Total: ",n.length]})]})]})},m=t(6156);function h(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?h(Object(t),!0).forEach((function(n){(0,m.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):h(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var v=function(e){var n=e.name,t=e.value,o=e.coords,i=e.onClick;return(0,r.jsxs)("li",{onClick:function(){return i(o)},className:"flex p-1 border-b border-indigo-500 cursor-pointer hover:bg-indigo-500 hover:text-indigo-800",children:[(0,r.jsx)("span",{className:"flex-grow font-sans",children:n}),(0,r.jsx)("span",{className:"text-indigo-300 font-sans",children:t})]})},b=function(e){var n=e.cities,t=void 0===n?[{name:"Paris",value:1234},{name:"Paris",value:1234}]:n,o=e.scrollHeight,i=e.onClick,a=void 0===i?function(){}:i;return(0,r.jsx)("ul",{className:"text-white overflow-scroll",style:{overflow:"scroll",height:o},children:t.map((function(e,n){return(0,r.jsx)(v,p(p({},e),{},{onClick:a}),n)}))})};function g(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function w(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?g(Object(t),!0).forEach((function(n){(0,m.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):g(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var x=function(e){var n=e.name,t=e.value,o=e.selectedKeywords,i=e.onClick;return(0,r.jsxs)("li",{className:"flex p-1 border-b border-indigo-500 cursor-pointer hover:bg-indigo-500 hover:text-indigo-800",children:[(0,r.jsx)("span",{className:"flex-grow font-sans",children:n}),(0,r.jsx)("input",{type:"checkbox",onChange:function(){return i(t)},checked:o.includes(t),className:"form-tick appearance-none h-6 w-6 border border-gray-300 rounded-md checked:border-transparent focus:outline-none checked:bg-yellow-400 checked:border-transparent"})]})},j=function(e){var n=e.keywords,t=void 0===n?[{name:"PHP",value:"php"},{name:"C#",value:"c#"}]:n,o=e.selectedKeywords,i=e.scrollHeight,a=e.onClick,c=void 0===a?function(){}:a;return(0,r.jsx)("ul",{className:"text-white overflow-scroll",style:{overflow:"scroll",height:i},children:t.map((function(e,n){return(0,r.jsx)(x,w(w({},e),{},{selectedKeywords:o,onClick:c}),n)}))})},C=t(7039),k=t.n(C),O=function(e){var n=e.cities,t=e.filterType,o=e.keywords,i=e.selectedKeywords,a=e.onClickCity,c=e.onClickKeyword,s="65vh";return(0,r.jsx)("div",{className:k().scrollbar,children:(0,r.jsxs)("div",{className:"flex-1",children:["cities"===t&&(0,r.jsx)(b,{scrollHeight:s,cities:n,onClick:a}),"technologies"===t&&(0,r.jsx)(j,{scrollHeight:s,keywords:o,selectedKeywords:i,onClick:c})]})})},A=function(){return(0,r.jsx)("div",{className:"flex-none py-2 flex justify-center items-center",children:(0,r.jsx)(s.default,{href:"/about",children:(0,r.jsx)("a",{className:"border text-center border-indigo-100 rounded-md p-2 text-white hover:text-indigo-600 hover:bg-indigo-100",children:"A propos"})})})},S=function(e){var n=e.cities,t=e.filterType,o=e.keywords,i=e.selectedKeywords,a=e.isDptView,c=e.onChangeFilterType,s=e.onClickCity,u=e.onClickKeyword,d=e.onClickGroupDpt;return(0,r.jsxs)("div",{className:"bg-indigo-600 h-screen flex flex-col",children:[(0,r.jsx)(l,{}),(0,r.jsx)(f,{cities:n,filterType:t,selectedKeywords:i,onChangeFilterType:c,isDptView:a,onClickGroupDpt:d}),(0,r.jsx)(O,{cities:n,filterType:t,keywords:o,selectedKeywords:i,onClickCity:s,onClickKeyword:u}),(0,r.jsx)(A,{})]})};function N(e,n){var t;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(t=function(e,n){if(!e)return;if("string"===typeof e)return P(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return P(e,n)}(e))||n&&e&&"number"===typeof e.length){t&&(e=t);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,c=!1;return{s:function(){t=e[Symbol.iterator]()},n:function(){var e=t.next();return a=e.done,e},e:function(e){c=!0,i=e},f:function(){try{a||null==t.return||t.return()}finally{if(c)throw i}}}}function P(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}var T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.places,t=void 0===n?[]:n,r=e.keywords,o=void 0===r?[]:r,i=t;if(o.length>0){var a,c=N(o);try{var s=function(){var e=a.value;i=i.filter((function(n){return n.keywords.find((function(n){return n.keyword===e}))})),console.log("curKeyword",e),console.log("filteredPlaces",i.length)};for(c.s();!(a=c.n()).done;)s()}catch(l){c.e(l)}finally{c.f()}}return i},L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.places,t=void 0===n?[]:n,r=e.search,o=void 0===r?null:r;if(null===o)return t;var i=t.filter((function(e){return null!==e.name.match(new RegExp(o,"gi"))}));return i},M={"01":{name:"Ain",city:"Bourg-en-bresse"},"02":{name:"Aisne",city:"Laon"},"03":{name:"Allier",city:"Moulins"},"04":{name:"Alpes-de-Haute-Provence",city:"Digne-les-bains"},"05":{name:"Hautes-alpes",city:"Gap"},"06":{name:"Alpes maritimes",city:"Nice"},"07":{name:"Ard\xe8che",city:"Privas"},"08":{name:"Ardennes",city:"Charleville-m\xe9zi\xe8res"},"09":{name:"Ari\xe8ge",city:"Foix"},10:{name:"Aube",city:"Troyes"},11:{name:"Aude",city:"Carcassonne"},12:{name:"Aveyron",city:"Rodez"},13:{name:"Bouches-du-Rh\xf4ne",city:"Marseille"},14:{name:"Calvados",city:"Caen"},15:{name:"Cantal",city:"Aurillac"},16:{name:"Charente",city:"Angoul\xeame"},17:{name:"Charente-maritime",city:"La rochelle"},18:{name:"Cher",city:"Bourges"},19:{name:"Corr\xe8ze",city:"Tulle"},20:{name:"Corse",city:"Ajaccio"},"2A":{name:"Corse-du-sud",city:"Ajaccio"},"2B":{name:"Haute-Corse",city:"Bastia"},21:{name:"C\xf4te-d'Or",city:"Dijon"},22:{name:"C\xf4tes-d'Armor",city:"Saint-brieuc"},23:{name:"Creuse",city:"Gu\xe9ret"},24:{name:"Dordogne",city:"P\xe9rigueux"},25:{name:"Doubs",city:"Besan\xe7on"},26:{name:"Dr\xf4me",city:"Valence"},27:{name:"Eure",city:"\xc9vreux"},28:{name:"Eure-et-loir",city:"Chartres"},29:{name:"Finist\xe8re",city:"Quimper"},30:{name:"Gard",city:"N\xeemes"},31:{name:"Garonne (Haute)",city:"Toulouse"},32:{name:"Gers",city:"Auch"},33:{name:"Gironde",city:"Bordeaux"},34:{name:"H\xe9rault",city:"Montpellier"},35:{name:"Ille et vilaine",city:"Rennes"},36:{name:"Indre",city:"Ch\xe2teauroux"},37:{name:"Indre-et-loire",city:"Tours"},38:{name:"Is\xe8re",city:"Grenoble"},39:{name:"Jura",city:"Lons-le-saunier"},40:{name:"Landes",city:"Mont-de-marsan"},41:{name:"Loir-et-cher",city:"Blois"},42:{name:"Loire",city:"Saint-\xe9tienne"},43:{name:"Haute-loire",city:"Le puy-en-velay"},44:{name:"Loire atlantique",city:"Nantes"},45:{name:"Loiret",city:"Orl\xe9ans"},46:{name:"Lot",city:"Cahors"},47:{name:"Lot-et-garonne",city:"Agen"},48:{name:"Loz\xe8re",city:"Mende"},49:{name:"Maine et loire",city:"Angers"},50:{name:"Manche",city:"Saint-l\xf4"},51:{name:"Marne",city:"Ch\xe2lons-en-champagne"},52:{name:"Haute-marne",city:"Chaumont"},53:{name:"Mayenne",city:"Laval"},54:{name:"Meurthe-et-moselle",city:"Nancy"},55:{name:"Meuse",city:"Bar-le-duc"},56:{name:"Morbihan",city:"Vannes"},57:{name:"Moselle",city:"Metz"},58:{name:"Ni\xe8vre",city:"Nevers"},59:{name:"Nord",city:"Lille"},60:{name:"Oise",city:"Beauvais"},61:{name:"Orne",city:"Alen\xe7on"},62:{name:"Pas-de-calais",city:"Arras"},63:{name:"Puy-de-d\xf4me",city:"Clermont-ferrand"},64:{name:"Pyr\xe9n\xe9es-atlantiques",city:"Pau"},65:{name:"Hautes-Pyr\xe9n\xe9es",city:"Tarbes"},66:{name:"Pyr\xe9n\xe9es-orientales",city:"Perpignan"},67:{name:"Bas-rhin",city:"Strasbourg"},68:{name:"Haut-rhin",city:"Colmar"},69:{name:"Rh\xf4ne",city:"Lyon"},70:{name:"Haute-sa\xf4ne",city:"Vesoul"},71:{name:"Sa\xf4ne-et-loire",city:"M\xe2con"},72:{name:"Sarthe",city:"Le mans"},73:{name:"Savoie",city:"Chamb\xe9ry"},74:{name:"Haute-savoie",city:"Annecy"},75:{name:"Paris",city:"Paris"},76:{name:"Seine-maritime",city:"Rouen"},77:{name:"Seine-et-marne",city:"Melun"},78:{name:"Yvelines",city:"Versailles"},79:{name:"Deux-s\xe8vres",city:"Niort"},80:{name:"Somme",city:"Amiens"},81:{name:"Tarn",city:"Albi"},82:{name:"Tarn-et-Garonne",city:"Montauban"},83:{name:"Var",city:"Toulon"},84:{name:"Vaucluse",city:"Avignon"},85:{name:"Vend\xe9e",city:"La roche-sur-yon"},86:{name:"Vienne",city:"Poitiers"},87:{name:"Haute-vienne",city:"Limoges"},88:{name:"Vosges",city:"\xc9pinal"},89:{name:"Yonne",city:"Auxerre"},90:{name:"Territoire de belfort",city:"Belfort"},91:{name:"Essonne",city:"\xc9vry"},92:{name:"Hauts de seine",city:"Nanterre"},93:{name:"Seine-Saint-Denis",city:"Bobigny"},94:{name:"Val-de-marne",city:"Cr\xe9teil"},95:{name:"Val-d'Oise",city:"Cergy Pontoise"},971:{name:"Guadeloupe",city:"Basse-terre"},972:{name:"Martinique",city:"Fort-de-france"},973:{name:"Guyane",city:"Cayenne"},974:{name:"La r\xe9union",city:"Saint-denis"},976:{name:"Mayotte",city:"Mamoudzou"}},D=function(e){var n=Object.entries(e),t={};return n.forEach((function(e){var n=e[1].name.toLowerCase();t[n]=e[0]})),t}(M);function E(e,n){var t;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(t=function(e,n){if(!e)return;if("string"===typeof e)return H(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return H(e,n)}(e))||n&&e&&"number"===typeof e.length){t&&(e=t);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,c=!1;return{s:function(){t=e[Symbol.iterator]()},n:function(){var e=t.next();return a=e.done,e},e:function(e){c=!0,i=e},f:function(){try{a||null==t.return||t.return()}finally{if(c)throw i}}}}function H(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}var _=function(e){var n,t=e.keywords,r=E(e.newKeywords);try{var o=function(){var e=n.value,r=t.findIndex((function(n){return n.keyword===e.keyword}));-1===r?t.push(e):t[r].count+=e.count};for(r.s();!(n=r.n()).done;)o()}catch(i){r.e(i)}finally{r.f()}return t},G=function(){var e,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=n.places,r=void 0===t?[]:t,o={},i=E(r);try{for(i.s();!(e=i.n()).done;){var a=e.value;if(a.id||D[a.name.toLowerCase()]&&(a.id=D[a.name.toLowerCase()]),a.id){var c=a.id.substr(0,2);o.hasOwnProperty(c)||(o[c]=[]),o[c].push(a)}}}catch(b){i.e(b)}finally{i.f()}for(var s=[],l=Object.keys(o),u=0,d=l;u<d.length;u++){var y,f=d[u],m=o[f],h={id:f,name:M[f].name,total:0,type:"department",coords:m[0].coords,keywords:[]},p=E(m);try{for(p.s();!(y=p.n()).done;){var v=y.value;h.total+=v.total,h.keywords=_({keywords:h.keywords,newKeywords:v.keywords})}}catch(b){p.e(b)}finally{p.f()}s.push(h)}return s.sort((function(e,n){return e.name.toLowerCase().charCodeAt(0)-n.name.toLowerCase().charCodeAt(0)})),s};function K(e,n){var t;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(t=function(e,n){if(!e)return;if("string"===typeof e)return I(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return I(e,n)}(e))||n&&e&&"number"===typeof e.length){t&&(e=t);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,c=!1;return{s:function(){t=e[Symbol.iterator]()},n:function(){var e=t.next();return a=e.done,e},e:function(e){c=!0,i=e},f:function(){try{a||null==t.return||t.return()}finally{if(c)throw i}}}}function I(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}var V=!0,B=function(e){var n,s,l=(null===(n=e.places[0])||void 0===n?void 0:n.coords)||[45.78365,3.10013],u=(0,i.useState)(l),d=u[0],y=u[1],f=(0,i.useState)(e.places),m=f[0],h=f[1],p=(0,i.useState)([]),v=p[0],b=p[1],g=(0,i.useState)("technologies"),w=g[0],x=g[1],j=(0,i.useState)("departments"),C=(j[0],j[1],(0,i.useState)(null)),k=C[0],O=(C[1],(0,i.useState)(!1)),A=O[0],N=O[1],P=(0,i.useRef)();P.current;(0,i.useEffect)((function(){E()}),[]),(0,i.useEffect)((function(){E()}),[A]),(0,i.useEffect)((function(){P.current=d}),[d]);var M,D=(0,c.default)((function(){return Promise.all([t.e(269),t.e(677)]).then(t.bind(t,4677))}),{ssr:!1,loadableGenerated:{webpack:function(){return[4677]},modules:["index.js -> ../components/map"]}}),E=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=(0,o.Z)(v);if(null!==n){var r=v.indexOf(n);r>=0?t.splice(r,1):t.push(n)}var i=T({places:e.places,keywords:t});i=L({places:i,search:k}),A&&(i=G({places:i})),h(i),b(t),x("cities"),console.log("mapComp flyTo #filter 1"),s?(console.log("mapComp flyTo #filter 2"),s.flyTo(i[0].coords)):y(i[0].coords)},H=[],_=[],I=[],V=K(m);try{for(V.s();!(M=V.n()).done;){var B=M.value,F=B.keywords.map((function(e){return"".concat(e.keyword," : ").concat(e.count)})),R={title:"".concat(B.name," <br/> ").concat(F.join("<br />")),coords:B.coords},z={name:B.name,value:B.total,coords:B.coords},Z=B.keywords;H.push(R),_.push(z),I.push(Z)}}catch(W){V.e(W)}finally{V.f()}for(var q=[],U=[],$=0,J=I;$<J.length;$++){var Q,X=K(J[$]);try{for(X.s();!(Q=X.n()).done;){var Y=Q.value;q.includes(Y.keyword)||(q.push(Y.keyword),U.push({name:Y.keyword,value:Y.keyword}))}}catch(W){X.e(W)}finally{X.f()}}return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(a.default,{children:[(0,r.jsx)("title",{children:"Cartographie des offres d'emplois tech en France"}),(0,r.jsx)("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width"})]}),(0,r.jsxs)("div",{className:"flex",children:[(0,r.jsx)("div",{className:"flex-none",children:(0,r.jsx)(S,{filterType:w,onChangeFilterType:function(e){x(e)},cities:_,keywords:U,selectedKeywords:v,isDptView:A,onClickCity:function(e){s.flyTo(e),setTimeout((function(){}),2e3)},onClickKeyword:function(e){console.log("pages/index #onClickkeyword keyword",e),E(e)},onClickGroupDpt:function(){N(!A)}})}),(0,r.jsx)("div",{className:"flex flex-col flex-grow h-screen",children:(0,r.jsx)("div",{className:"flex-1",children:(0,r.jsx)(D,{defaultCenter:l,center:d,markers:H,getMap:function(e){var n=e.map;s=n}})})})]})]})}},8581:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(3847)}])},7039:function(e){e.exports={scrollbar:"Scrollbar_scrollbar__1sQ1e"}}},function(e){e.O(0,[774,922,888,179],(function(){return n=8581,e(e.s=n);var n}));var n=e.O();_N_E=n}]);