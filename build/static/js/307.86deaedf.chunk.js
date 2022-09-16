"use strict";(self.webpackChunkinventory=self.webpackChunkinventory||[]).push([[307],{78083:function(e,n,a){a.d(n,{k:function(){return r}});var r=function(e){if(void 0!==e&&null!==e&&""!==e)return function(e,n){function a(e){return e.split("").reverse().join("")}var r=/(\d{3}(?!.*\.|$))/g;n||(n=" ");return a(a(e.toString()).replace(r,"$1"+n))}(e=parseInt(e))}},10307:function(e,n,a){a.r(n);var r=a(74165),t=a(15861),i=a(29439),u=a(72791),c=a(30606),l=a(91933),o=a(51763),d=a(59909),s=a(23821),f=a(56890),h=a(35855),p=a(53994),v=a(53382),m=(a(93650),a(16149)),g=(a(92854),a(78083)),y=a(80184),Z=[{headTitle:"Level",valueKey:"id",func:function(e){return e}},{headTitle:"Level name",valueKey:"name",func:function(e){return e}},{headTitle:"General population",valueKey:"general",func:function(e){return(0,g.k)(e)}},{headTitle:"Number of under-one children",valueKey:"under1",func:function(e){return(0,g.k)(e)}},{headTitle:"Cold RoomA",valueKey:"cold_a",func:function(e){return e}},{headTitle:"Freezer Room",valueKey:"fr",func:function(e){return e}},{headTitle:"Refrigerator",valueKey:"refrig",func:function(e){return e}},{headTitle:"Freezer",valueKey:"freezer",func:function(e){return e}},{headTitle:"Cold Box",valueKey:"cb",func:function(e){return e}},{headTitle:"Vaccine Carrier",valueKey:"vc",func:function(e){return e}},{headTitle:"Cold RoomA",valueKey:"nw_cold_a",func:function(e){return e}},{headTitle:"Freezer Room",valueKey:"nw_fr",func:function(e){return e}},{headTitle:"Refrigerator",valueKey:"nw_refrig",func:function(e){return e}},{headTitle:"Freezer",valueKey:"nw_freezer",func:function(e){return e}},{headTitle:"Cold Box",valueKey:"nw_cb",func:function(e){return e}},{headTitle:"Vaccine Carrier",valueKey:"nw_vc",func:function(e){return e}}],x=[{headTitle:"Level",valueKey:"id",func:function(e){return e},size:"fit"},{headTitle:"Level name",valueKey:"name",func:function(e){return e},size:"fit"},{headTitle:"General population",valueKey:"general",func:function(e){return(0,g.k)(e)},size:"large"},{headTitle:"Number of under-one children ",valueKey:"under1",func:function(e){return(0,g.k)(e)},size:"large"},{headTitle:"Require capacity per target population (cm3)",valueKey:"req",func:function(e){return(+e).toFixed(2)},size:"fit"},{headTitle:"Available capacity per target population (cm3)",valueKey:"available",func:function(e){return(+e).toFixed(2)},size:"large"},{headTitle:"The difference between available capacity and require capacity per target population (cm3)",valueKey:"diff",func:function(e){return e.toFixed(2)},size:"large"},{headTitle:"Require capacity",valueKey:"require_capacity",func:function(e){return e.toFixed(2)},size:"fit"},{headTitle:"Available capacity (lit.)",valueKey:"available_capacity",func:function(e){return e.toFixed(2)},size:"fit"},{headTitle:"The difference between current available capacity and require capacity (lit.)",valueKey:"diff_capacity",func:function(e){return e.toFixed(2)},size:"large"}],j=[{id:1,name:"2-8 C"},{id:2,name:"-20 C"},{id:3,name:"-70 C"},{id:4,name:"+25 C"}];n.default=function(){var e=(0,u.useState)(1),n=(0,i.Z)(e,2),a=n[0],g=n[1],z=(0,l.useQuery)(["profile-of-cold-chain",a],(0,t.Z)((0,r.Z)().mark((function e(){var n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.getColdProf(a);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})))),T=z.data;if(z.isLoading)return(0,y.jsx)(d.Z,{});var C=JSON.parse(localStorage.getItem("country"))||{};return(0,y.jsxs)("div",{children:[(0,y.jsx)("h3",{className:"page-title mb-3",children:(0,y.jsx)(c.c,{children:"Profile of Cold Chain"})}),(0,y.jsx)("div",{className:"mt-3",children:(0,y.jsx)("div",{className:"card",children:(0,y.jsxs)("div",{className:"card-body py-3",children:[(0,y.jsx)("h4",{children:(0,y.jsxs)(c.c,{children:["Report Number: Profile of Cold Chain (",null===C||void 0===C?void 0:C.country,")"]})}),(0,y.jsxs)("h6",{children:["Date: ",(new Date).toISOString().split("T")[0]]}),(0,y.jsx)("div",{className:"mt-3 table-container",children:(0,y.jsxs)(s.Z,{children:[(0,y.jsxs)(f.Z,{children:[(0,y.jsxs)(h.Z,{children:[(0,y.jsx)(p.Z,{align:"center",colSpan:6}),(0,y.jsx)(p.Z,{align:"center",colSpan:6,children:"Exist Items"}),(0,y.jsx)(p.Z,{align:"center",colSpan:6,children:"Not Work Items"})]}),(0,y.jsx)(h.Z,{children:Z.map((function(e,n){return(0,y.jsx)(p.Z,{style:{minWidth:3===n||2===n?"230px":""},children:(0,y.jsx)(c.c,{children:e.headTitle})},e.headTitle)}))})]}),(0,y.jsx)(v.Z,{children:null===T||void 0===T?void 0:T.table_1.map((function(e,n){return(0,y.jsx)(h.Z,{children:Z.map((function(n){var a;return(0,y.jsx)(p.Z,{children:null!==(a=n.func(e[n.valueKey]))&&void 0!==a?a:"-"},n.valueKey)}))},n)}))})]})})]})})}),(0,y.jsx)("div",{className:"mt-3",children:(0,y.jsx)("div",{className:"card",children:(0,y.jsxs)("div",{className:"card-body",children:[(0,y.jsx)("div",{className:"row",children:(0,y.jsx)("div",{className:"col-sm-12 col-lg-6",children:(0,y.jsxs)(m.Z.Group,{className:"row",children:[(0,y.jsx)("label",{className:"col-sm-4 mt-3",children:(0,y.jsx)(c.c,{children:"Please select ..."})}),(0,y.jsx)(m.Z.Control,{className:"form-select col-sm-3",onChange:function(e){var n=e.target.value;g(n)},value:a,as:"select",children:j.map((function(e){return(0,y.jsx)("option",{value:e.id,children:e.name},e.id)}))})]})})}),(0,y.jsx)("div",{className:"mt-3 table-container",children:(0,y.jsxs)(s.Z,{children:[(0,y.jsx)(f.Z,{children:(0,y.jsx)(h.Z,{children:x.map((function(e){return(0,y.jsx)(p.Z,{style:{minWidth:"large"===e.size?"230px":"auto"},children:(0,y.jsx)(c.c,{children:e.headTitle})},e.headTitle)}))})}),(0,y.jsx)(v.Z,{children:null===T||void 0===T?void 0:T.table_2.map((function(e,n){return(0,y.jsx)(h.Z,{children:x.map((function(n){var a;return(0,y.jsx)(p.Z,{children:null!==(a=n.func(e[n.valueKey]))&&void 0!==a?a:"-"},n.valueKey)}))},n)}))})]})})]})})})]})}},51763:function(e,n,a){var r=a(15671),t=a(43144),i=a(54318),u=a(39877),c="https://inventory.runflare.run/reports/",l=function(){function e(){(0,r.Z)(this,e)}return(0,t.Z)(e,[{key:"getDownloadLinks",value:function(){return u.Z.get(c+"excel",{headers:{Authorization:(0,i.Z)()}})}},{key:"getFacSeg",value:function(e){return u.Z.get(c+"facseg",{headers:{Authorization:(0,i.Z)()},params:e})}},{key:"getSubFacPop",value:function(e){return u.Z.get(c+"subfacpop",{headers:{Authorization:(0,i.Z)()},params:e})}},{key:"getFacMap",value:function(e){return u.Z.get(c+"facmap",{headers:{Authorization:(0,i.Z)()},params:e})}},{key:"getGapMap",value:function(e){return u.Z.get(c+"gapmap",{headers:{Authorization:(0,i.Z)()},params:e})}},{key:"getItemGp",value:function(e){return u.Z.get(c+"item-gp",{headers:{Authorization:(0,i.Z)()},params:e})}},{key:"getItemFac",value:function(e){return u.Z.get(c+"itemfac",{headers:{Authorization:(0,i.Z)()},params:e})}},{key:"getGapItem",value:function(e){return u.Z.get(c+"gapitem",{headers:{Authorization:(0,i.Z)()},params:e})}},{key:"getProfOfFac",value:function(){return u.Z.get(c+"facprof",{headers:{Authorization:(0,i.Z)()}})}},{key:"getColdProf",value:function(e){return u.Z.get(c+"coldprof",{headers:{Authorization:(0,i.Z)()},params:{degree:e}})}},{key:"getPlanningReport",value:function(e){return u.Z.get(c+"planingreport",{headers:{Authorization:(0,i.Z)()},params:e})}},{key:"getPlanningCCEGap",value:function(e){return u.Z.get(c+"gapcce",{headers:{Authorization:(0,i.Z)()},params:e})}},{key:"getGapCCEPlan",value:function(e){return u.Z.get(c+"gapccePlan",{headers:{Authorization:(0,i.Z)()},params:e})}},{key:"postGapCCEPlan",value:function(e){return u.Z.post(c+"gapccePlan",e,{headers:{Authorization:(0,i.Z)()}})}},{key:"deleteGapCCEPlan",value:function(e){return u.Z.delete(c+"gapccePlan",{headers:{Authorization:(0,i.Z)()},data:e})}},{key:"putGapCCEPlan",value:function(e){return u.Z.put(c+"gapccePlan",e,{headers:{Authorization:(0,i.Z)()}})}}]),e}();n.Z=new l},23821:function(e,n,a){var r=a(39281),t=a(79836),i=a(80184);n.Z=function(e){var n=e.children;return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(r.Z,{children:(0,i.jsx)(t.Z,{children:n})})})}},92854:function(){},93650:function(){}}]);
//# sourceMappingURL=307.86deaedf.chunk.js.map