(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[512],{4542:function(n,e,t){!function(n){"use strict";function e(e,t){var o=n.DomUtil.create("div",e,document.body),i=r(c(o),t),a=u(o,"width"),l=u(o,"height"),s=u(o,"margin-left"),f=u(o,"margin-top");return o.parentNode.removeChild(o),{Url:i[0],RetinaUrl:i[1],Size:[a,l],Anchor:[-s,-f]}}function t(e){var t=n.DomUtil.create("div",e,document.body),r=u(t,"margin-left"),o=u(t,"margin-top");return t.parentNode.removeChild(t),{Anchor:[r,o]}}function r(n,e){for(var t=/url\(['"]?([^"']*?)['"]?\)/gi,r=[],u=t.exec(n);u;)r.push(e?o(u[1]):u[1]),u=t.exec(n);return r}function o(n){return n.substr(n.lastIndexOf("/")+1)}function u(n,e){return parseInt(i(n,e),10)}function i(e,t){return n.DomUtil.getStyle(e,t)||n.DomUtil.getStyle(e,a(t))}function c(n){var e=i(n,"background-image");return e&&"none"!==e?e:i(n,"cursor")}function a(n){return n.replace(/-(\w)/g,(function(n,e){return e.toUpperCase()}))}n.Icon.Default.mergeOptions({iconUrl:null,iconRetinaUrl:null,shadowUrl:null,iconSize:null,iconAnchor:null,popupAnchor:null,tooltipAnchor:null,shadowSize:null,classNamePrefix:"leaflet-default-icon-"}),n.Icon.Default.include({_needsInit:!0,_getIconUrl:function(e){var t=this.options.imagePath||n.Icon.Default.imagePath||"";return this._needsInit&&this._initializeOptions(t),t+n.Icon.prototype._getIconUrl.call(this,e)},_initializeOptions:function(n){this._setOptions("icon",e,n),this._setOptions("shadow",e,n),this._setOptions("popup",t),this._setOptions("tooltip",t),this._needsInit=!1},_setOptions:function(n,e,t){var r=this.options,o=e(r.classNamePrefix+n,t);for(var u in o)r[n+u]=r[n+u]||o[u]}})}(t(5243))},5512:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return _}});var r=t(5893),o=t(7294);const u=(0,o.createContext)(null),i=u.Provider;function c(){const n=(0,o.useContext)(u);if(null==n)throw new Error("No context provided: useLeafletContext() can only be used in a descendant of <MapContainer>");return n}var a=t(5243),l=t.n(a);function s(){return(s=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n}).apply(this,arguments)}function f({children:n,className:e,id:t,placeholder:r,style:u,whenCreated:c,...l}){const f=(0,o.useRef)(null),p=function(n,e){const[t,r]=(0,o.useState)(null);return(0,o.useEffect)((()=>{if(null!==n.current&&null===t){const t=new a.Map(n.current,e);null!=e.center&&null!=e.zoom?t.setView(e.center,e.zoom):null!=e.bounds&&t.fitBounds(e.bounds,e.boundsOptions),null!=e.whenReady&&t.whenReady(e.whenReady),r(t)}}),[n,t,e]),t}(f,l),d=(0,o.useRef)(!1);(0,o.useEffect)((()=>{null!=p&&!1===d.current&&null!=c&&(d.current=!0,c(p))}),[p,c]);const[m]=(0,o.useState)({className:e,id:t,style:u}),h=(0,o.useMemo)((()=>p?{__version:1,map:p}:null),[p]),v=h?o.createElement(i,{value:h},n):r??null;return o.createElement("div",s({},m,{ref:f}),v)}var p=t(3935);function d(n,e){return null==e?function(e,t){return(0,o.useRef)(n(e,t))}:function(t,r){const u=(0,o.useRef)(n(t,r)),i=(0,o.useRef)(t),{instance:c}=u.current;return(0,o.useEffect)((function(){i.current!==t&&(e(c,t,i.current),i.current=t)}),[c,t,r]),u}}function m(n,e){const t=(0,o.useRef)(e);(0,o.useEffect)((function(){e!==t.current&&null!=n.attributionControl&&(null!=t.current&&n.attributionControl.removeAttribution(t.current),null!=e&&n.attributionControl.addAttribution(e)),t.current=e}),[n,e])}function h(n,e){const t=(0,o.useRef)();(0,o.useEffect)((function(){return null!=e&&n.instance.on(e),t.current=e,function(){null!=t.current&&n.instance.off(t.current),t.current=null}}),[n,e])}function v(n,e){const t=n.pane??e.pane;return t?{...n,pane:t}:n}function g(n){return function(e){const t=c(),r=n(v(e,t),t);return m(t.map,e.attribution),h(r.current,e.eventHandlers),function(n,e){(0,o.useEffect)((function(){return(e.layerContainer??e.map).addLayer(n.instance),function(){var t;null==(t=e.layersControl)||t.removeLayer(n.instance),e.map.removeLayer(n.instance)}}),[e,n])}(r.current,t),r}}const y=function(n){function e(e,t){const{instance:r}=n(e).current;return(0,o.useImperativeHandle)(t,(()=>r)),null}return(0,o.forwardRef)(e)}(g(d((function({url:n,...e},t){return{instance:new a.TileLayer(n,v(e,t)),context:t}}),(function(n,e,t){const{opacity:r,zIndex:o}=e;null!=r&&r!==t.opacity&&n.setOpacity(r),null!=o&&o!==t.zIndex&&n.setZIndex(o)}))));const O=function(n,e){return function(n){function e(e,t){const{instance:r,context:u}=n(e).current;return(0,o.useImperativeHandle)(t,(()=>r)),null==e.children?null:o.createElement(i,{value:u},e.children)}return(0,o.forwardRef)(e)}(g(d(n,e)))}((function({position:n,...e},t){const r=new a.Marker(n,e);return{instance:r,context:{...t,overlayContainer:r}}}),(function(n,e,t){e.position!==t.position&&n.setLatLng(e.position),null!=e.icon&&e.icon!==t.icon&&n.setIcon(e.icon),null!=e.zIndexOffset&&e.zIndexOffset!==t.zIndexOffset&&n.setZIndexOffset(e.zIndexOffset),null!=e.opacity&&e.opacity!==t.opacity&&n.setOpacity(e.opacity),null!=n.dragging&&e.draggable!==t.draggable&&(!0===e.draggable?n.dragging.enable():n.dragging.disable())})),x=function(n,e){return function(n){function e(e,t){const[r,u]=(0,o.useState)(!1),{instance:i}=n(e,u).current;(0,o.useImperativeHandle)(t,(()=>i)),(0,o.useEffect)((function(){r&&i.update()}),[i,r,e.children]);const c=i._contentNode;return c?(0,p.createPortal)(e.children,c):null}return(0,o.forwardRef)(e)}(function(n,e){return function(t,r){const o=c(),u=n(v(t,o),o);return m(o.map,t.attribution),h(u.current,t.eventHandlers),e(u.current,o,t,r),u}}(d(n),e))}((function(n,e){return{instance:new a.Popup(n,e.overlayContainer),context:e}}),(function(n,e,t,r){const{onClose:u,onOpen:i,position:c}=t;(0,o.useEffect)((function(){const{instance:t}=n;function o(n){n.popup===t&&(t.update(),r(!0),null==i||i())}function a(n){n.popup===t&&(r(!1),null==u||u())}return e.map.on({popupopen:o,popupclose:a}),null==e.overlayContainer?(null!=c&&t.setLatLng(c),t.openOn(e.map)):e.overlayContainer.bindPopup(t),function(){e.map.off({popupopen:o,popupclose:a}),e.map.removeLayer(t)}}),[n,e,r,u,i,c])}));t(1291),t(4542);var b={MAPBOX_USERNAME:"jobsmap",MAPBOX_CUSTOM_STYLE:"ckpvhpl4q0xfc18mtxiqh7kje",MAPBOX_TOKEN:"pk.eyJ1Ijoiam9ic21hcCIsImEiOiJja3B2ZXZnOXIxMnVvMm9ub2pwMmJocHo3In0.ZK23L_awyd52VMXVucJKJQ"},I=new(l().Icon)({iconUrl:"/marker.svg",iconSize:[40,50],className:"marker"});var _=function(n){var e=n.markers,t=n.defaultCenter,o=n.center,u=n.zoom,i=void 0===u?8:u,c=n.getMap;return(0,r.jsxs)(f,{center:t,zoom:i,scrollWheelZoom:!1,whenCreated:function(n){n.flyTo(o),c({map:n})},style:{width:"100%",height:"100%"},children:[(0,r.jsx)(y,{attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors , <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery \xa9 <a href="https://www.mapbox.com/">Mapbox</a>',url:"https://api.mapbox.com/styles/v1/".concat(b.MAPBOX_USERNAME,"/").concat(b.MAPBOX_CUSTOM_STYLE,"/tiles/256/{z}/{x}/{y}@2x?access_token=").concat(b.MAPBOX_TOKEN)}),e.map((function(n,e){var t=n.title,o=n.coords;return(0,r.jsx)(O,{position:o,icon:I,children:t&&(0,r.jsx)(x,{className:"font-sans",children:(0,r.jsx)("p",{dangerouslySetInnerHTML:{__html:t}})})},e)}))]})}},1291:function(){}}]);