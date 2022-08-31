/*! For license information please see 8674.421f6632.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkinventory=self.webpackChunkinventory||[]).push([[8674],{98674:function(t,e,r){r.r(e),r.d(e,{default:function(){return d}});var n=r(74165),o=r(15861),i=r(72791),a=r(80184),c=function(t){return(0,a.jsx)("div",{className:"form-check pl-2 ",children:(0,a.jsxs)("label",{className:"form-check-label",children:[(0,a.jsx)("input",{onChange:function(e){return t.onChange(e)},type:"checkbox",className:"form-check-input",value:t.value}),(0,a.jsx)("i",{className:"input-helper"}),t.label]})})},u=function(t){var e=function(t){console.log("checked box with value "+t.target.value)};return(0,a.jsx)("div",{className:"col-lg-12 stretch-card",children:(0,a.jsx)("div",{className:"card",children:(0,a.jsxs)("div",{className:"card-body",children:[(0,a.jsx)("h4",{className:"card-title",children:"Warnings Info"}),(0,a.jsxs)("div",{className:"table-responsive",children:[(0,a.jsxs)("table",{className:"table table-bordered",children:[(0,a.jsx)("thead",{children:(0,a.jsxs)("tr",{children:[(0,a.jsx)("th",{children:" # "}),(0,a.jsx)("th",{children:" Item Type "}),(0,a.jsx)("th",{children:" Code "}),(0,a.jsx)("th",{children:" Deadline "}),(0,a.jsx)("th",{children:" Service interval "}),(0,a.jsx)("th",{children:" Done "})]})}),(0,a.jsx)("tbody",{children:t.data.map((function(t,r){return(0,a.jsxs)("tr",{className:"table-danger",children:[(0,a.jsxs)("td",{children:[" ",r+1," "]},r+r+1),(0,a.jsxs)("td",{children:[" ",t.name," "]},r+t.name),(0,a.jsxs)("td",{children:[" ",t.code," "]},r+t.code),(0,a.jsxs)("td",{children:[" ",t.deadline," "]},r+t.deadline),(0,a.jsxs)("td",{children:[" ",t.interval," "]},r+t.interval),(0,a.jsx)("td",{children:(0,a.jsx)(c,{onChange:e})},r+"A")]},t.id)}))})]}),(0,a.jsx)("button",{type:"button",className:" mt-3 btn btn-primary btn-fw",children:"Mark as done"})]})]})})})},s=r(79271),l=r(91933),h=r(59909),f=r(10140),d=function(){var t=(0,s.UO)(),e=(0,l.useQuery)([],(0,o.Z)((0,n.Z)().mark((function e(){var r;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.Z.getWarningsInfo("?"+t.wType);case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)}))),{refetchOnMount:!0}),r=e.data;return e.isLoading||0===r.length?(0,a.jsx)(h.Z,{}):(console.log(r),(0,a.jsx)(i.Fragment,{children:r&&(0,a.jsx)(u,{data:r})}))}},10140:function(t,e,r){var n=r(15671),o=r(43144),i=r(39877),a=r(54318),c="http://5.182.47.38:8001/dashboard",u=function(){function t(){(0,n.Z)(this,t)}return(0,o.Z)(t,[{key:"getAllDashboardItems",value:function(){return i.Z.get(c+"/item",{headers:{Authorization:(0,a.Z)()}})}},{key:"getAllFacilities",value:function(){return i.Z.get(c+"/facility",{headers:{Authorization:(0,a.Z)()}})}},{key:"getAllTablesData",value:function(){return i.Z.get(c+"/table",{headers:{Authorization:(0,a.Z)()}})}},{key:"getAllWarningsData",value:function(){return i.Z.get(c+"/maintenance",{headers:{Authorization:(0,a.Z)()}})}},{key:"getWarningsInfo",value:function(t){return console.log("Now requesting to "+c+"/maintenance"+t),i.Z.get(c+"/todo"+t,{headers:{Authorization:(0,a.Z)()}})}}]),t}();e.Z=new u},15861:function(t,e,r){function n(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(s){return void r(s)}c.done?e(u):Promise.resolve(u).then(n,o)}function o(t){return function(){var e=this,r=arguments;return new Promise((function(o,i){var a=t.apply(e,r);function c(t){n(a,o,i,c,u,"next",t)}function u(t){n(a,o,i,c,u,"throw",t)}c(void 0)}))}}r.d(e,{Z:function(){return o}})},74165:function(t,e,r){r.d(e,{Z:function(){return o}});var n=r(71002);function o(){o=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(_){s=function(t,e,r){return t[e]=r}}function l(t,e,r,n){var o=e&&e.prototype instanceof d?e:d,i=Object.create(o.prototype),a=new E(n||[]);return i._invoke=function(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return Z()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=j(a,r);if(c){if(c===f)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=h(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===f)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}(t,r,a),i}function h(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(_){return{type:"throw",arg:_}}}t.wrap=l;var f={};function d(){}function v(){}function p(){}var y={};s(y,a,(function(){return this}));var g=Object.getPrototypeOf,m=g&&g(g(N([])));m&&m!==e&&r.call(m,a)&&(y=m);var x=p.prototype=d.prototype=Object.create(y);function w(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function b(t,e){function o(i,a,c,u){var s=h(t[i],t,a);if("throw"!==s.type){var l=s.arg,f=l.value;return f&&"object"==(0,n.Z)(f)&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){o("next",t,c,u)}),(function(t){o("throw",t,c,u)})):e.resolve(f).then((function(t){l.value=t,c(l)}),(function(t){return o("throw",t,c,u)}))}u(s.arg)}var i;this._invoke=function(t,r){function n(){return new e((function(e,n){o(t,r,e,n)}))}return i=i?i.then(n,n):n()}}function j(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,j(t,e),"throw"===e.method))return f;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return f}var n=h(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,f;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,f):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,f)}function L(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function k(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function E(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(L,this),this.reset(!0)}function N(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:Z}}function Z(){return{value:void 0,done:!0}}return v.prototype=p,s(x,"constructor",p),s(p,"constructor",v),v.displayName=s(p,u,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,p):(t.__proto__=p,s(t,u,"GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},w(b.prototype),s(b.prototype,c,(function(){return this})),t.AsyncIterator=b,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new b(l(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},w(x),s(x,u,"Generator"),s(x,a,(function(){return this})),s(x,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=N,E.prototype={constructor:E,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(k),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=r.call(i,"catchLoc"),u=r.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,f):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),k(r),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;k(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:N(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),f}},t}}}]);
//# sourceMappingURL=8674.421f6632.chunk.js.map