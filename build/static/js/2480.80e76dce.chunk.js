"use strict";(self.webpackChunkinventory=self.webpackChunkinventory||[]).push([[2480],{2480:function(o,t,n){n.r(t);var l=n(29439),e=n(72791),i=n(46293),a=n(69961),r=n(17626),c=n(6042),s=n(59500),u=n(78559),d=n.n(u),g=(n(23666),n(80184));function p(){var o=(0,e.useState)(null),t=(0,l.Z)(o,2),n=t[0],a=t[1],r=(0,i.zV)({click:function(){r.locate(),r.invalidateSize()},locationfound:function(o){a(o.latlng),r.flyTo(o.latlng,r.getZoom())}});return null===n?null:(0,g.jsx)(g.Fragment,{})}delete d().Icon.Default.prototype._getIconUrl,d().Icon.Default.mergeOptions({iconRetinaUrl:n(6431),iconUrl:n(37093),shadowUrl:n(68858)});var v=function(o){var t=(0,i.Sx)();return(0,e.useEffect)((function(){if(t){var n=d().DomUtil.create("div","legend"),l=d().Control.extend({options:{position:"bottomleft"},onAdd:function(){return n.textContent="Click on map too add location",n}});t.on("load",(function(o){console.log("salam")})),t.on("click",(function(t){window.navigator.geolocation.getCurrentPosition(console.log,console.log),n.textContent=t.latlng,function(t){o.change(t)}(t)})),t.addControl(new l)}}),[t]),null};t.default=function(o){var t,n,i,u,d=o.locations,f=(0,e.useState)(null),m=(0,l.Z)(f,2),S=(m[0],m[1]),h=(0,e.useState)([]),x=(0,l.Z)(h,2),y=x[0],I=x[1],j=(0,e.useState)(null===JSON.parse(localStorage.getItem("country"))||void 0===JSON.parse(localStorage.getItem("country")).mainlocation?35:null===(t=JSON.parse(localStorage.getItem("country")).mainlocation)||void 0===t||null===(n=t.split("(")[1])||void 0===n?void 0:n.split(",")[0]),C=(0,l.Z)(j,2),J=C[0],N=C[1],O=(0,e.useState)(null===JSON.parse(localStorage.getItem("country"))||void 0===JSON.parse(localStorage.getItem("country")).mainlocation?51:null===(i=JSON.parse(localStorage.getItem("country")).mainlocation)||void 0===i||null===(u=i.split(",")[1])||void 0===u?void 0:u.split(")")[0]),w=(0,l.Z)(O,2),k=w[0],Z=w[1];return(0,e.useEffect)((function(){var o=null===JSON.parse(localStorage.getItem("country"))?void 0:JSON.parse(localStorage.getItem("country")).mainlocation;console.log(o);var t=[];if(void 0===o)t=[50,50];else{var n,l,e;console.log(o);var i=null===o||void 0===o||null===(n=o.split("(")[1])||void 0===n?void 0:n.split(",")[0],a=null===o||void 0===o||null===(l=o.split("(")[1])||void 0===l||null===(e=l.split(",")[1])||void 0===e?void 0:e.split(")")[0];void 0===i||void 0===a?(N(35),Z(51)):(N(parseFloat(i)),Z(parseFloat(a)))}I(t)}),[]),(0,g.jsx)("div",{className:"map",children:null!==y&&J&&k&&(0,g.jsxs)(a.h,{center:[J,k],zoom:9,scrollWheelZoom:!0,style:{width:"100%",height:"450px",zIndex:"1"},children:[(0,g.jsx)(r.I,{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",width:500}),(0,g.jsx)(v,{change:function(t){o.handleChange(t),S(t.latlng)}}),(0,g.jsx)(g.Fragment,{children:null===d||void 0===d?void 0:d.map((function(o,t){return(0,g.jsx)(c.J,{position:o.cordinates,children:(0,g.jsx)(s.G,{children:(0,g.jsx)("span",{children:o.cordinates})})},t)}))}),(0,g.jsx)(p,{})]})})}}}]);
//# sourceMappingURL=2480.80e76dce.chunk.js.map