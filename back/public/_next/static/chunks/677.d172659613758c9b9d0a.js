(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[677],{4542:function(n,t,e){!function(n){"use strict";function t(t,e){var o=n.DomUtil.create("div",t,document.body),i=r(c(o),e),l=u(o,"width"),a=u(o,"height"),s=u(o,"margin-left"),f=u(o,"margin-top");return o.parentNode.removeChild(o),{Url:i[0],RetinaUrl:i[1],Size:[l,a],Anchor:[-s,-f]}}function e(t){var e=n.DomUtil.create("div",t,document.body),r=u(e,"margin-left"),o=u(e,"margin-top");return e.parentNode.removeChild(e),{Anchor:[r,o]}}function r(n,t){for(var e=/url\(['"]?([^"']*?)['"]?\)/gi,r=[],u=e.exec(n);u;)r.push(t?o(u[1]):u[1]),u=e.exec(n);return r}function o(n){return n.substr(n.lastIndexOf("/")+1)}function u(n,t){return parseInt(i(n,t),10)}function i(t,e){return n.DomUtil.getStyle(t,e)||n.DomUtil.getStyle(t,l(e))}function c(n){var t=i(n,"background-image");return t&&"none"!==t?t:i(n,"cursor")}function l(n){return n.replace(/-(\w)/g,(function(n,t){return t.toUpperCase()}))}n.Icon.Default.mergeOptions({iconUrl:null,iconRetinaUrl:null,shadowUrl:null,iconSize:null,iconAnchor:null,popupAnchor:null,tooltipAnchor:null,shadowSize:null,classNamePrefix:"leaflet-default-icon-"}),n.Icon.Default.include({_needsInit:!0,_getIconUrl:function(t){var e=this.options.imagePath||n.Icon.Default.imagePath||"";return this._needsInit&&this._initializeOptions(e),e+n.Icon.prototype._getIconUrl.call(this,t)},_initializeOptions:function(n){this._setOptions("icon",t,n),this._setOptions("shadow",t,n),this._setOptions("popup",e),this._setOptions("tooltip",e),this._needsInit=!1},_setOptions:function(n,t,e){var r=this.options,o=t(r.classNamePrefix+n,e);for(var u in o)r[n+u]=r[n+u]||o[u]}})}(e(5243))},4677:function(n,t,e){"use strict";e.r(t),e.d(t,{default:function(){return x}});var r=e(5893),o=e(7294);const u=(0,o.createContext)(null),i=u.Provider;function c(){const n=(0,o.useContext)(u);if(null==n)throw new Error("No context provided: useLeafletContext() can only be used in a descendant of <MapContainer>");return n}var l=e(5243);function a(){return(a=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r])}return n}).apply(this,arguments)}function s({children:n,className:t,id:e,placeholder:r,style:u,whenCreated:c,...s}){const f=(0,o.useRef)(null),p=function(n,t){const[e,r]=(0,o.useState)(null);return(0,o.useEffect)((()=>{if(null!==n.current&&null===e){const e=new l.Map(n.current,t);null!=t.center&&null!=t.zoom?e.setView(t.center,t.zoom):null!=t.bounds&&e.fitBounds(t.bounds,t.boundsOptions),null!=t.whenReady&&e.whenReady(t.whenReady),r(e)}}),[n,e,t]),e}(f,s),d=(0,o.useRef)(!1);(0,o.useEffect)((()=>{null!=p&&!1===d.current&&null!=c&&(d.current=!0,c(p))}),[p,c]);const[h]=(0,o.useState)({className:t,id:e,style:u}),m=(0,o.useMemo)((()=>p?{__version:1,map:p}:null),[p]),g=m?o.createElement(i,{value:m},n):r??null;return o.createElement("div",a({},h,{ref:f}),g)}var f=e(3935);function p(n,t){return null==t?function(t,e){return(0,o.useRef)(n(t,e))}:function(e,r){const u=(0,o.useRef)(n(e,r)),i=(0,o.useRef)(e),{instance:c}=u.current;return(0,o.useEffect)((function(){i.current!==e&&(t(c,e,i.current),i.current=e)}),[c,e,r]),u}}function d(n,t){const e=(0,o.useRef)(t);(0,o.useEffect)((function(){t!==e.current&&null!=n.attributionControl&&(null!=e.current&&n.attributionControl.removeAttribution(e.current),null!=t&&n.attributionControl.addAttribution(t)),e.current=t}),[n,t])}function h(n,t){const e=(0,o.useRef)();(0,o.useEffect)((function(){return null!=t&&n.instance.on(t),e.current=t,function(){null!=e.current&&n.instance.off(e.current),e.current=null}}),[n,t])}function m(n,t){const e=n.pane??t.pane;return e?{...n,pane:e}:n}function g(n){return function(t){const e=c(),r=n(m(t,e),e);return d(e.map,t.attribution),h(r.current,t.eventHandlers),function(n,t){(0,o.useEffect)((function(){return(t.layerContainer??t.map).addLayer(n.instance),function(){var e;null==(e=t.layersControl)||e.removeLayer(n.instance),t.map.removeLayer(n.instance)}}),[t,n])}(r.current,e),r}}const v=function(n){function t(t,e){const{instance:r}=n(t).current;return(0,o.useImperativeHandle)(e,(()=>r)),null}return(0,o.forwardRef)(t)}(g(p((function({url:n,...t},e){return{instance:new l.TileLayer(n,m(t,e)),context:e}}),(function(n,t,e){const{opacity:r,zIndex:o}=t;null!=r&&r!==e.opacity&&n.setOpacity(r),null!=o&&o!==e.zIndex&&n.setZIndex(o)}))));const y=function(n,t){return function(n){function t(t,e){const{instance:r,context:u}=n(t).current;return(0,o.useImperativeHandle)(e,(()=>r)),null==t.children?null:o.createElement(i,{value:u},t.children)}return(0,o.forwardRef)(t)}(g(p(n,t)))}((function({position:n,...t},e){const r=new l.Marker(n,t);return{instance:r,context:{...e,overlayContainer:r}}}),(function(n,t,e){t.position!==e.position&&n.setLatLng(t.position),null!=t.icon&&t.icon!==e.icon&&n.setIcon(t.icon),null!=t.zIndexOffset&&t.zIndexOffset!==e.zIndexOffset&&n.setZIndexOffset(t.zIndexOffset),null!=t.opacity&&t.opacity!==e.opacity&&n.setOpacity(t.opacity),null!=n.dragging&&t.draggable!==e.draggable&&(!0===t.draggable?n.dragging.enable():n.dragging.disable())})),b=function(n,t){return function(n){function t(t,e){const[r,u]=(0,o.useState)(!1),{instance:i}=n(t,u).current;(0,o.useImperativeHandle)(e,(()=>i)),(0,o.useEffect)((function(){r&&i.update()}),[i,r,t.children]);const c=i._contentNode;return c?(0,f.createPortal)(t.children,c):null}return(0,o.forwardRef)(t)}(function(n,t){return function(e,r){const o=c(),u=n(m(e,o),o);return d(o.map,e.attribution),h(u.current,e.eventHandlers),t(u.current,o,e,r),u}}(p(n),t))}((function(n,t){return{instance:new l.Popup(n,t.overlayContainer),context:t}}),(function(n,t,e,r){const{onClose:u,onOpen:i,position:c}=e;(0,o.useEffect)((function(){const{instance:e}=n;function o(n){n.popup===e&&(e.update(),r(!0),null==i||i())}function l(n){n.popup===e&&(r(!1),null==u||u())}return t.map.on({popupopen:o,popupclose:l}),null==t.overlayContainer?(null!=c&&e.setLatLng(c),e.openOn(t.map)):t.overlayContainer.bindPopup(e),function(){t.map.off({popupopen:o,popupclose:l}),t.map.removeLayer(e)}}),[n,t,r,u,i,c])}));e(1291),e(4542);var x=function(n){var t=n.markers,e=n.defaultCenter,o=n.center,u=n.zoom,i=void 0===u?8:u,c=n.getMap;return(0,r.jsxs)(s,{center:e,zoom:i,scrollWheelZoom:!1,whenCreated:function(n){n.flyTo(o),c({map:n})},style:{width:"100%",height:"100%"},children:[(0,r.jsx)(v,{attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),t.map((function(n,t){var e=n.title,o=n.coords;return(0,r.jsx)(y,{position:o,children:e&&(0,r.jsx)(b,{className:"font-sans",children:(0,r.jsx)("p",{dangerouslySetInnerHTML:{__html:e}})})},t)}))]})}},1291:function(){}}]);