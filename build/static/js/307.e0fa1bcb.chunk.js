/*! For license information please see 307.e0fa1bcb.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkinventory=self.webpackChunkinventory||[]).push([[307],{78083:function(e,t,r){r.d(t,{k:function(){return n}});var n=function(e){if(void 0!==e&&null!==e)return function(e,t){function r(e){return e.split("").reverse().join("")}var n=/(\d{3}(?!.*\.|$))/g;t||(t=" ");return r(r(e.toString()).replace(n,"$1"+t))}(e=parseInt(e))}},10307:function(e,t,r){r.r(t);var n=r(74165),a=r(15861),i=r(29439),o=r(72791),c=r(30606),u=r(91933),l=r(51763),s=r(59909),h=r(23821),f=r(56890),d=r(35855),p=r(53994),v=r(53382),y=(r(93650),r(16149)),g=(r(92854),r(78083)),m=r(80184),x=[{headTitle:"Level",valueKey:"id"},{headTitle:"Level name",valueKey:"name"},{headTitle:"General population",valueKey:"general"},{headTitle:"Number of under-one children served by this facility",valueKey:"under1"},{headTitle:"Cold RoomA",valueKey:"cold_a"},{headTitle:"Freezer Room",valueKey:"fr"},{headTitle:"Refrigerator",valueKey:"refrig"},{headTitle:"Freezer",valueKey:"freezer"},{headTitle:"Cold Box",valueKey:"cb"},{headTitle:"Vaccine Carrier",valueKey:"vc"},{headTitle:"Cold RoomA",valueKey:"nw_cold_a"},{headTitle:"Freezer Room",valueKey:"nw_fr"},{headTitle:"Refrigerator",valueKey:"nw_refrig"},{headTitle:"Freezer",valueKey:"nw_freezer"},{headTitle:"Cold Box",valueKey:"nw_cb"},{headTitle:"Vaccine Carrier",valueKey:"nw_vc"}],Z=[{headTitle:"Level",valueKey:"id",func:function(e){return e},size:"fit"},{headTitle:"Level name",valueKey:"name",func:function(e){return e},size:"fit"},{headTitle:"General population",valueKey:"general",func:function(e){return(0,g.k)(e)},size:"fit"},{headTitle:"Number of under-one children served by this facility",valueKey:"under1",func:function(e){return(0,g.k)(e)},size:"large"},{headTitle:"Require capacity per target population (cm3)",valueKey:"req",func:function(e){return(+e).toFixed(2)},size:"large"},{headTitle:"Available capacity per target population (cm3)",valueKey:"available",func:function(e){return(+e).toFixed(2)},size:"large"},{headTitle:"The difference between available capacity and require capacity per target population (cm3)",valueKey:"diff",func:function(e){return(+e).toFixed(2)},size:"large"},{headTitle:"Require capacity",valueKey:"require_capacity",func:function(e){return(+(0,g.k)(e)).toFixed(2)},size:"fit"},{headTitle:"Available capacity (lit.)",valueKey:"available_capacity",func:function(e){return(+(0,g.k)(e)).toFixed(2)},size:"fit"},{headTitle:"The difference between current available capacity and require capacity (lit.)",valueKey:"diff_capacity",func:function(e){return(+(0,g.k)(e)).toFixed(2)},size:"large"}],w=[{id:1,name:"2-8 C"},{id:2,name:"-20 C"},{id:3,name:"-70 C"},{id:4,name:"+25 C"}];t.default=function(){var e=(0,o.useState)(1),t=(0,i.Z)(e,2),r=t[0],g=t[1],j=(0,u.useQuery)(["profile-of-cold-chain",r],(0,a.Z)((0,n.Z)().mark((function e(){var t;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.Z.getColdProf(r);case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})))),b=j.data;return j.isLoading?(0,m.jsx)(s.Z,{}):(0,m.jsxs)("div",{children:[(0,m.jsx)("h3",{className:"page-title mb-3",children:(0,m.jsx)(c.c,{children:"Profile of Cold Chain"})}),(0,m.jsx)("div",{className:"mt-3",children:(0,m.jsx)("div",{className:"card",children:(0,m.jsx)("div",{className:"card-body py-3",children:(0,m.jsx)("div",{className:"mt-3 table-container",children:(0,m.jsxs)(h.Z,{children:[(0,m.jsxs)(f.Z,{children:[(0,m.jsxs)(d.Z,{children:[(0,m.jsx)(p.Z,{align:"center",colSpan:4}),(0,m.jsx)(p.Z,{align:"center",colSpan:6,children:"Exist Items"}),(0,m.jsx)(p.Z,{align:"center",colSpan:6,children:"Not Work Items"})]}),(0,m.jsx)(d.Z,{children:x.map((function(e,t){return(0,m.jsx)(p.Z,{style:{minWidth:3===t?"230px":""},children:(0,m.jsx)(c.c,{children:e.headTitle})},e.headTitle)}))})]}),(0,m.jsx)(v.Z,{children:null===b||void 0===b?void 0:b.table_1.map((function(e,t){return(0,m.jsx)(d.Z,{children:x.map((function(t){var r;return(0,m.jsx)(p.Z,{children:null!==(r=e[t.valueKey])&&void 0!==r?r:"-"},t.valueKey)}))},t)}))})]})})})})}),(0,m.jsx)("div",{className:"mt-3",children:(0,m.jsx)("div",{className:"card",children:(0,m.jsxs)("div",{className:"card-body",children:[(0,m.jsx)("div",{className:"row",children:(0,m.jsx)("div",{className:"col-sm-12 col-lg-6",children:(0,m.jsxs)(y.Z.Group,{className:"row",children:[(0,m.jsx)("label",{className:"col-sm-4 mt-3",children:(0,m.jsx)(c.c,{children:"Please select ..."})}),(0,m.jsx)(y.Z.Control,{className:"form-select col-sm-3",onChange:function(e){var t=e.target.value;g(t)},value:r,as:"select",children:w.map((function(e){return(0,m.jsx)("option",{value:e.id,children:e.name},e.id)}))})]})})}),(0,m.jsx)("div",{className:"mt-3 table-container",children:(0,m.jsxs)(h.Z,{children:[(0,m.jsx)(f.Z,{children:(0,m.jsx)(d.Z,{children:Z.map((function(e){return(0,m.jsx)(p.Z,{style:{minWidth:"large"===e.size?"230px":"auto"},children:(0,m.jsx)(c.c,{children:e.headTitle})},e.headTitle)}))})}),(0,m.jsx)(v.Z,{children:null===b||void 0===b?void 0:b.table_2.map((function(e,t){return(0,m.jsx)(d.Z,{children:Z.map((function(t){var r;return(0,m.jsx)(p.Z,{children:null!==(r=t.func(e[t.valueKey]))&&void 0!==r?r:"-"},t.valueKey)}))},t)}))})]})})]})})})]})}},51763:function(e,t,r){var n=r(15671),a=r(43144),i=r(54318),o=r(39877),c="http://127.0.0.1:8000/reports/",u=function(){function e(){(0,n.Z)(this,e)}return(0,a.Z)(e,[{key:"getDownloadLinks",value:function(){return o.Z.get(c+"excel",{headers:{Authorization:(0,i.Z)()}})}},{key:"getFacSeg",value:function(e){return o.Z.get(c+"facseg",{headers:{Authorization:(0,i.Z)()},params:e})}},{key:"getSubFacPop",value:function(e){return o.Z.get(c+"subfacpop",{headers:{Authorization:(0,i.Z)()},params:e})}},{key:"getFacMap",value:function(e){return o.Z.get(c+"facmap",{headers:{Authorization:(0,i.Z)()},params:e})}},{key:"getGapMap",value:function(e){return o.Z.get(c+"gapmap",{headers:{Authorization:(0,i.Z)()},params:e})}},{key:"getItemGp",value:function(e){return o.Z.get(c+"item-gp",{headers:{Authorization:(0,i.Z)()},params:e})}},{key:"getItemFac",value:function(e){return o.Z.get(c+"itemfac",{headers:{Authorization:(0,i.Z)()},params:e})}},{key:"getGapItem",value:function(e){return o.Z.get(c+"gapitem",{headers:{Authorization:(0,i.Z)()},params:e})}},{key:"getProfOfFac",value:function(){return o.Z.get(c+"facprof",{headers:{Authorization:(0,i.Z)()}})}},{key:"getColdProf",value:function(e){return o.Z.get(c+"coldprof",{headers:{Authorization:(0,i.Z)()},params:{degree:e}})}},{key:"getPlanningReport",value:function(e){return o.Z.get(c+"planingreport",{headers:{Authorization:(0,i.Z)()},params:e})}},{key:"getPlanningCCEGap",value:function(e){return o.Z.get(c+"gapcce",{headers:{Authorization:(0,i.Z)()},params:e})}},{key:"getGapCCEPlan",value:function(e){return o.Z.get(c+"gapccePlan",{headers:{Authorization:(0,i.Z)()},params:e})}},{key:"postGapCCEPlan",value:function(e){return o.Z.post(c+"gapccePlan",e,{headers:{Authorization:(0,i.Z)()}})}},{key:"deleteGapCCEPlan",value:function(e){return o.Z.delete(c+"gapccePlan",e,{headers:{Authorization:(0,i.Z)()}})}},{key:"putGapCCEPlan",value:function(e){return o.Z.delete(c+"gapccePlan",e,{headers:{Authorization:(0,i.Z)()}})}}]),e}();t.Z=new u},23821:function(e,t,r){var n=r(39281),a=r(79836),i=r(80184);t.Z=function(e){var t=e.children;return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(n.Z,{children:(0,i.jsx)(a.Z,{children:t})})})}},92854:function(){},93650:function(){},15861:function(e,t,r){function n(e,t,r,n,a,i,o){try{var c=e[i](o),u=c.value}catch(l){return void r(l)}c.done?t(u):Promise.resolve(u).then(n,a)}function a(e){return function(){var t=this,r=arguments;return new Promise((function(a,i){var o=e.apply(t,r);function c(e){n(o,a,i,c,u,"next",e)}function u(e){n(o,a,i,c,u,"throw",e)}c(void 0)}))}}r.d(t,{Z:function(){return a}})},74165:function(e,t,r){r.d(t,{Z:function(){return a}});var n=r(71002);function a(){a=function(){return e};var e={},t=Object.prototype,r=t.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},o=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function l(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(K){l=function(e,t,r){return e[t]=r}}function s(e,t,r,n){var a=t&&t.prototype instanceof d?t:d,i=Object.create(a.prototype),o=new T(n||[]);return i._invoke=function(e,t,r){var n="suspendedStart";return function(a,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw i;return z()}for(r.method=a,r.arg=i;;){var o=r.delegate;if(o){var c=j(o,r);if(c){if(c===f)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=h(e,t,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===f)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}(e,r,o),i}function h(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(K){return{type:"throw",arg:K}}}e.wrap=s;var f={};function d(){}function p(){}function v(){}var y={};l(y,o,(function(){return this}));var g=Object.getPrototypeOf,m=g&&g(g(L([])));m&&m!==t&&r.call(m,o)&&(y=m);var x=v.prototype=d.prototype=Object.create(y);function Z(e){["next","throw","return"].forEach((function(t){l(e,t,(function(e){return this._invoke(t,e)}))}))}function w(e,t){function a(i,o,c,u){var l=h(e[i],e,o);if("throw"!==l.type){var s=l.arg,f=s.value;return f&&"object"==(0,n.Z)(f)&&r.call(f,"__await")?t.resolve(f.__await).then((function(e){a("next",e,c,u)}),(function(e){a("throw",e,c,u)})):t.resolve(f).then((function(e){s.value=e,c(s)}),(function(e){return a("throw",e,c,u)}))}u(l.arg)}var i;this._invoke=function(e,r){function n(){return new t((function(t,n){a(e,r,t,n)}))}return i=i?i.then(n,n):n()}}function j(e,t){var r=e.iterator[t.method];if(void 0===r){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,j(e,t),"throw"===t.method))return f;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return f}var n=h(r,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,f;var a=n.arg;return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,f):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,f)}function b(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function k(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function T(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(b,this),this.reset(!0)}function L(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,a=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return a.next=a}}return{next:z}}function z(){return{value:void 0,done:!0}}return p.prototype=v,l(x,"constructor",v),l(v,"constructor",p),p.displayName=l(v,u,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===p||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,v):(e.__proto__=v,l(e,u,"GeneratorFunction")),e.prototype=Object.create(x),e},e.awrap=function(e){return{__await:e}},Z(w.prototype),l(w.prototype,c,(function(){return this})),e.AsyncIterator=w,e.async=function(t,r,n,a,i){void 0===i&&(i=Promise);var o=new w(s(t,r,n,a),i);return e.isGeneratorFunction(r)?o:o.next().then((function(e){return e.done?e.value:o.next()}))},Z(x),l(x,u,"Generator"),l(x,o,(function(){return this})),l(x,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=L,T.prototype={constructor:T,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(k),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return o.type="throw",o.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],o=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=r.call(i,"catchLoc"),u=r.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var i=a;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var o=i?i.completion:{};return o.type=e,o.arg=t,i?(this.method="next",this.next=i.finallyLoc,f):this.complete(o)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),f},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),k(r),f}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var a=n.arg;k(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:L(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),f}},e}}}]);
//# sourceMappingURL=307.e0fa1bcb.chunk.js.map