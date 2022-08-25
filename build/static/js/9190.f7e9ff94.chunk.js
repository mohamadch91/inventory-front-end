/*! For license information please see 9190.f7e9ff94.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkinventory=self.webpackChunkinventory||[]).push([[9190],{30027:function(t,e,n){var r=n(94912),i=n(80184);e.Z=function(t){var e,n=t.field,o=t.onChangeHandler,a=t.defaultValue,c=t.separator;if("select"===n.type)return(0,i.jsxs)(r.Z.Control,{onChange:function(t){return o(t.target.value,n)},defaultValue:a,className:"form-control",as:"select",disabled:n.active?!n.active:n.disabled,id:"field-".concat(n.id),children:[(0,i.jsx)("option",{value:"",selected:!0,disabled:!0,children:"Please select"}),n.params.map((function(t){return(0,i.jsx)("option",{disabled:t.enabled?!t.enabled:!t.active,value:t.id,children:t.name||t.describe})}))]});if("bool"===n.type)return(0,i.jsx)("input",{type:"checkbox",defaultChecked:a,onChange:function(t){return o(t.target.checked,n)},disabled:n.active?!n.active:n.disabled});var l=null===(e=n.validation)||void 0===e?void 0:e[0];return(0,i.jsx)(r.Z.Control,{onKeyPress:function(t){t.persist(),"number"!==n.type||-1!=="0123456789".indexOf(t.key)?o(t.target.value,n):t.preventDefault()},onChange:function(t){return o(t.target.value,n)},value:a,className:"form-control",id:"field-".concat(n.id),type:c?"text":n.type,disabled:n.active?!n.active:n.disabled,min:l&&-1!==(null===l||void 0===l?void 0:l.min)?l.min:void 0,max:l&&-1!==(null===l||void 0===l?void 0:l.max)?l.max:void 0,step:l&&null!==l&&void 0!==l&&l.float?Math.pow(.1,l.floating).toFixed(l.floating):void 0,maxLength:l&&-1!==(null===l||void 0===l?void 0:l.digits)?l.digits:void 0,onBlur:function(t){if(t.persist(),c){var e=t.target.value.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",");console.log(e),o(e,n)}}})}},29190:function(t,e,n){n.r(e),n.d(e,{default:function(){return N}});var r=n(1413),i=n(37762),o=n(74165),a=n(15861),c=n(29439),l=n(72791),u=n(91933),s=n(87681),d=n(79271),f=n(59909),h=n(70242),v=n(74512),p=n(15825),m=n(64554),y=n(36151),g=n(94912),x=n(30027),b=n(95804),w={is_suitable:["is_suitable_reason"],haveimmservice:["typeimmservice","numimmperweek"],other_service:["other_services"]},j=n(87649),Z=n(80184);var N=function(){var t,e=(0,l.useState)(0),n=(0,c.Z)(e,2),N=n[0],k=n[1],L=(0,l.useState)({}),S=(0,c.Z)(L,2),O=S[0],E=S[1],_=(0,l.useState)({}),C=(0,c.Z)(_,2),F=C[0],I=C[1],A=(0,d.UO)().id,P=(0,u.useQuery)(["facility-default-value",A],(0,a.Z)((0,o.Z)().mark((function t(){var e,n;return(0,o.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e=JSON.parse(localStorage.getItem("user")),"new"!==A){t.next=3;break}return t.abrupt("return",{"parent-facility":null===e||void 0===e?void 0:e.facility_id,completerstaffname:null===e||void 0===e?void 0:e.username,updated_at:(new Date).toISOString().split("T")[0]});case 3:return t.next=5,s.Z.getFacilities(A);case 5:return(n=t.sent).data["parent-facility"]=null===e||void 0===e?void 0:e.facility_id,n.data.updated_at=(new Date).toISOString().split("T")[0],t.abrupt("return",n.data);case 9:case"end":return t.stop()}}),t)}))),{refetchOnMount:!0,onSuccess:function(t){E(t)}}).isLoading,D=(0,u.useQuery)(["facility-fields"],(0,a.Z)((0,o.Z)().mark((function t(){var e,n,r,a,c,l,u,d;return(0,o.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.Z.getFacilityFields();case 2:if(e=t.sent,n={},e.data){r=(0,i.Z)(e.data.related);try{for(r.s();!(a=r.n()).done;)l=a.value,(u=null!==(c=n[l.topic])&&void 0!==c?c:[]).push(l),n[l.topic]=u}catch(o){r.e(o)}finally{r.f()}d=Object.keys(n)[0],n[d].unshift({id:"level",name:"Level",topic:d,type:"select",active:!0,required:!0,stateName:"level",params:e.data.levels.map((function(t){return{id:t.id,name:t.name,order:1,enabled:!0,paramid:t.id}}))}),n[d].unshift({id:"code",name:"Facility code:",topic:d,type:"text",active:!1,disabled:!0,required:!1,stateName:"code",params:[]}),n[d].unshift({id:"parent-facility",name:"Parent facility:",topic:d,type:"text",active:!1,disabled:!0,required:!1,stateName:"parent-facility",params:[]})}return t.abrupt("return",n);case 6:case"end":return t.stop()}}),t)}))),{refetchOnMount:!0}),G=D.data,T=D.isLoading;if(P||T)return(0,Z.jsx)(f.Z,{});var z=function(){var t=(0,r.Z)({},F);return Object.values(G)[N].forEach((function(e){e.required&&!O[e.stateName]&&(t[e.id]="this field is required!")})),I(t),Object.keys(t).length>0},q=function(t,e){var n,i=(0,b.D)(t,null===(n=e.validation)||void 0===n?void 0:n[0]),o=(0,r.Z)({},O);o[e.stateName]=t,E(o);var a=(0,r.Z)({},F);i?a[e.id]=i:delete a[e.id],I(a)};console.log(O);var U=function(){var t=(0,a.Z)((0,o.Z)().mark((function t(e){var n,i,a;return(0,o.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.preventDefault(),!z()){t.next=3;break}return t.abrupt("return");case 3:for(i in n=(0,r.Z)({},O),w)a=w[i],!1===O[i]&&a.forEach((function(t){delete n[t]}));return t.next=7,"new"===A?s.Z.postFacility(n):s.Z.putFacility(n);case 7:t.sent;case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),M=function(t){var e=(0,r.Z)({},O);e.gpsCordinate={mainlocation:t.latlng},E(e)};return(0,Z.jsxs)("form",{onSubmit:U,children:[(0,Z.jsx)("h3",{className:"page-title mb-3",children:"Facility information"}),(0,Z.jsx)("div",{className:"mt-3",children:(0,Z.jsx)("div",{className:"card",children:(0,Z.jsxs)("div",{className:"card-body pb-3",children:[(0,Z.jsx)("div",{className:"row pb-4",style:{overflow:"auto"},children:(0,Z.jsx)(h.Z,{activeStep:N,children:Object.keys(G).map((function(t,e){return(0,Z.jsx)(v.Z,{children:(0,Z.jsx)(p.Z,{style:{width:"max-content"},children:t})},t)}))})}),(0,Z.jsx)("div",{className:"row mt-2",children:(0,Z.jsxs)(m.Z,{sx:{display:"flex",flexDirection:"row",pt:2},children:[(0,Z.jsx)(y.Z,{color:"inherit",disabled:0===N,onClick:function(){k((function(t){return t-1}))},sx:{mr:1},type:"button",children:"Back"}),(0,Z.jsx)(m.Z,{sx:{flex:"1 1 auto"}}),N===Object.keys(G).length-1?(0,Z.jsx)("button",{className:"btn btn-primary ",children:"Save"}):(0,Z.jsx)(y.Z,{disabled:Object.keys(F).length>0,onClick:function(){z()||k((function(t){return t+1}))},type:"button",sx:{mr:1},children:"Next"})]})})]})})}),(0,Z.jsx)("div",{className:"mt-3",children:(0,Z.jsx)("div",{className:"card",children:(0,Z.jsx)("div",{className:"card-body",children:null===(t=Object.values(G)[N])||void 0===t?void 0:t.map((function(t){if(!function(t,e){for(var n in w)if(w[n].indexOf(t)>=0)return e[n];return!0}(t.stateName,O))return null;var e=!!F[t.id];return(0,Z.jsxs)(g.Z.Group,{className:"row mb-0",children:[(0,Z.jsx)("label",{className:"col-sm-4 text-right ".concat(t.required?"control-label":""),style:{display:"flex",justifyContent:"flex-start",alignItems:"center",lineHeight:"1.4"},children:t.name}),(0,Z.jsx)("div",{className:"col-sm-8",children:"gpsCordinate"===t.stateName?(0,Z.jsx)("div",{className:"map h-50",children:(0,Z.jsx)(j.Z,{loca:O[t.stateName],handleChange:M})}):(0,Z.jsx)(x.Z,{field:t,onChangeHandler:q,defaultValue:O[t.stateName],separator:"childrennumber"===t.stateName||"loverlevelfac"===t.stateName})}),e&&(0,Z.jsxs)("div",{className:"row",children:[(0,Z.jsx)("div",{className:"col-sm-4"}),(0,Z.jsx)("div",{className:"col-sm-8",children:(0,Z.jsxs)("p",{className:"my-1 ml-2 text-danger",children:[F[t.id]," "]})})]}),(0,Z.jsx)("hr",{className:"my-3"})]},t.name)}))})})})]})}},95804:function(t,e,n){n.d(e,{D:function(){return r}});var r=function(t,e){return!(void 0===e||!t)&&(-1!==e.min&&e.min>t?"value must greater than ".concat(e.min):-1!==e.max&&e.max<t?"value must less than ".concat(e.max):e.float&&(+t).toFixed(e.floating)!==t?"value must has ".concat(e.floating," decimals"):-1!==e.digits&&t.toString().replaceAll(",","").replaceAll(".","").length!==e.digits+(e.floating>0?e.floating:0)&&(console.log("----------"),"value must be ".concat(e.digits," digits")))}},87681:function(t,e,n){var r=n(15671),i=n(43144),o=n(74569),a=n.n(o),c=n(54318),l="http://5.182.47.38:8001/facilities/",u=function(){function t(){(0,r.Z)(this,t)}return(0,i.Z)(t,[{key:"getFacilities",value:function(t){var e={};return t&&(e.id=t),a().get(l,{headers:{Authorization:(0,c.Z)()},params:e})}},{key:"getSubFacilities",value:function(t){var e={id:t};return a().get(l+"parent",{headers:{Authorization:(0,c.Z)()},params:e})}},{key:"getFacilityFields",value:function(){return a().get(l+"facility-field",{headers:{Authorization:(0,c.Z)()}})}},{key:"postFacility",value:function(t){return a().post(l,t,{headers:{Authorization:(0,c.Z)()}})}},{key:"putFacility",value:function(t){return a().put(l,t,{headers:{Authorization:(0,c.Z)()}})}}]),t}();e.Z=new u},87649:function(t,e,n){var r=n(29439),i=n(72791),o=n(46293),a=n(69961),c=n(17626),l=n(6042),u=n(59500),s=n(78559),d=n.n(s),f=n(80184);function h(){var t=(0,i.useState)(null),e=(0,r.Z)(t,2),n=e[0],a=e[1],c=(0,o.zV)({click:function(){c.locate()},locationfound:function(t){a(t.latlng),c.flyTo(t.latlng,c.getZoom())}});return null===n?null:(0,f.jsx)(f.Fragment,{})}delete d().Icon.Default.prototype._getIconUrl,d().Icon.Default.mergeOptions({iconRetinaUrl:n(6431),iconUrl:n(37093),shadowUrl:n(68858)});var v=function(t){var e=(0,o.Sx)();return(0,i.useEffect)((function(){if(e){var n=d().DomUtil.create("div","legend"),r=d().Control.extend({options:{position:"bottomleft"},onAdd:function(){return n.textContent="Click on map",n}});e.on("click",(function(e){window.navigator.geolocation.getCurrentPosition(console.log,console.log),n.textContent=e.latlng,function(e){t.change(e)}(e)})),e.addControl(new r)}}),[e]),null};e.Z=function(t){var e=(0,i.useState)(null),n=(0,r.Z)(e,2),o=n[0],s=n[1];return(0,f.jsxs)(a.h,{center:[52.22,21.01178],zoom:13,scrollWheelZoom:!0,children:[(0,f.jsx)(c.I,{attribution:'&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),(0,f.jsx)(v,{change:function(e){t.handleChange(e),s(e.latlng)}}),(0,f.jsx)(f.Fragment,{children:o&&(0,f.jsx)(l.J,{position:o,draggable:!0,children:(0,f.jsxs)(u.G,{position:o,children:["Current location: ",(0,f.jsx)("pre",{children:JSON.stringify(o,null,2)})]})})}),(0,f.jsx)(h,{})]})}},15861:function(t,e,n){function r(t,e,n,r,i,o,a){try{var c=t[o](a),l=c.value}catch(u){return void n(u)}c.done?e(l):Promise.resolve(l).then(r,i)}function i(t){return function(){var e=this,n=arguments;return new Promise((function(i,o){var a=t.apply(e,n);function c(t){r(a,i,o,c,l,"next",t)}function l(t){r(a,i,o,c,l,"throw",t)}c(void 0)}))}}n.d(e,{Z:function(){return i}})},37762:function(t,e,n){n.d(e,{Z:function(){return i}});var r=n(40181);function i(t,e){var n="undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=(0,r.Z)(t))||e&&t&&"number"===typeof t.length){n&&(t=n);var i=0,o=function(){};return{s:o,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,c=!0,l=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return c=t.done,t},e:function(t){l=!0,a=t},f:function(){try{c||null==n.return||n.return()}finally{if(l)throw a}}}}},74165:function(t,e,n){n.d(e,{Z:function(){return i}});var r=n(71002);function i(){i=function(){return t};var t={},e=Object.prototype,n=e.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",c=o.asyncIterator||"@@asyncIterator",l=o.toStringTag||"@@toStringTag";function u(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(O){u=function(t,e,n){return t[e]=n}}function s(t,e,n,r){var i=e&&e.prototype instanceof h?e:h,o=Object.create(i.prototype),a=new k(r||[]);return o._invoke=function(t,e,n){var r="suspendedStart";return function(i,o){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===i)throw o;return S()}for(n.method=i,n.arg=o;;){var a=n.delegate;if(a){var c=j(a,n);if(c){if(c===f)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var l=d(t,e,n);if("normal"===l.type){if(r=n.done?"completed":"suspendedYield",l.arg===f)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(r="completed",n.method="throw",n.arg=l.arg)}}}(t,n,a),o}function d(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(O){return{type:"throw",arg:O}}}t.wrap=s;var f={};function h(){}function v(){}function p(){}var m={};u(m,a,(function(){return this}));var y=Object.getPrototypeOf,g=y&&y(y(L([])));g&&g!==e&&n.call(g,a)&&(m=g);var x=p.prototype=h.prototype=Object.create(m);function b(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function w(t,e){function i(o,a,c,l){var u=d(t[o],t,a);if("throw"!==u.type){var s=u.arg,f=s.value;return f&&"object"==(0,r.Z)(f)&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){i("next",t,c,l)}),(function(t){i("throw",t,c,l)})):e.resolve(f).then((function(t){s.value=t,c(s)}),(function(t){return i("throw",t,c,l)}))}l(u.arg)}var o;this._invoke=function(t,n){function r(){return new e((function(e,r){i(t,n,e,r)}))}return o=o?o.then(r,r):r()}}function j(t,e){var n=t.iterator[e.method];if(void 0===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,j(t,e),"throw"===e.method))return f;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return f}var r=d(n,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,f;var i=r.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,f):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,f)}function Z(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function N(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(Z,this),this.reset(!0)}function L(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,i=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return i.next=i}}return{next:S}}function S(){return{value:void 0,done:!0}}return v.prototype=p,u(x,"constructor",p),u(p,"constructor",v),v.displayName=u(p,l,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,p):(t.__proto__=p,u(t,l,"GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},b(w.prototype),u(w.prototype,c,(function(){return this})),t.AsyncIterator=w,t.async=function(e,n,r,i,o){void 0===o&&(o=Promise);var a=new w(s(e,n,r,i),o);return t.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},b(x),u(x,l,"Generator"),u(x,a,(function(){return this})),u(x,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=L,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(N),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(n,r){return a.type="throw",a.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var i=this.tryEntries.length-1;i>=0;--i){var o=this.tryEntries[i],a=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var c=n.call(o,"catchLoc"),l=n.call(o,"finallyLoc");if(c&&l){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,f):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),N(n),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var i=r.arg;N(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:L(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),f}},t}}}]);
//# sourceMappingURL=9190.f7e9ff94.chunk.js.map