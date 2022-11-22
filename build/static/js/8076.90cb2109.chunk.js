"use strict";(self.webpackChunkinventory=self.webpackChunkinventory||[]).push([[8076],{58076:function(e,n,t){t.r(n);var s=t(1413),c=t(93433),i=t(74165),r=t(15861),l=t(29439),a=t(56890),d=t(35855),o=t(53994),u=t(53382),m=t(72791),h=t(23821),v=t(16149),x=t(69778),f=t(91933),p=t(59909),j=(t(93650),t(30606)),Z=t(80184);n.default=function(){var e,n,t=(0,m.useState)(),y=(0,l.Z)(t,2),N=y[0],g=y[1],b=(0,m.useState)(1),k=(0,l.Z)(b,2),w=k[0],C=k[1],I=(0,m.useState)([]),S=(0,l.Z)(I,2),L=S[0],T=S[1],_=(0,f.useQuery)(["active-item-classes-with-item-type"],(0,r.Z)((0,i.Z)().mark((function e(){var n;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.Z.getActiveItemClassesWithFields();case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)}))),{onSuccess:function(e){g(e[0])}}),A=_.data,E=_.isLoading,F=(0,f.useQuery)(["itemTinLevel",w],(0,r.Z)((0,i.Z)().mark((function e(){var n,t;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.Z.getItemTinLevels(w);case 2:return n=e.sent,t=(0,c.Z)(L),n.data.forEach((function(e){L.find((function(n){return n.itemtypeid===e.itemtype.id&&n.level===e.level.id}))||t.push({itemtypeid:e.itemtype.id,level:e.level.id,active:e.active,id:e.id})})),T(t),e.abrupt("return",t);case 7:case"end":return e.stop()}}),e)}))),{refetchOnMount:!0}),G=F.data,O=F.isLoading,Q=null!==(e=null===(n=JSON.parse(localStorage.getItem("country")))||void 0===n?void 0:n.levels)&&void 0!==e?e:1,J=function(){var e=(0,r.Z)((0,i.Z)().mark((function e(){var n;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=L.filter((function(e){return!(null!==G&&void 0!==G&&G.some((function(n){return n.itemtypeid===e.itemtypeid&&n.level===e.level&&n.active===e.active})))})),e.next=3,x.Z.putItemTypeInClass(n);case 3:e.sent;case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,Z.jsxs)("div",{children:[(0,Z.jsx)("h3",{className:"page-title mb-3",children:(0,Z.jsx)(j.c,{children:"Item categories in different levels"})}),E?(0,Z.jsx)(p.Z,{}):(0,Z.jsxs)("div",{className:"mt-3",children:[(0,Z.jsx)("div",{className:"card",children:(0,Z.jsx)("div",{className:"card-body",children:(0,Z.jsxs)("div",{className:"row",children:[(0,Z.jsx)("div",{className:"col-sm-12 col-lg-5",children:(0,Z.jsxs)(v.Z.Group,{className:"row",children:[(0,Z.jsx)("label",{className:"col-sm-12",children:(0,Z.jsx)(j.c,{children:"Item class"})}),(0,Z.jsx)("div",{className:"col-sm-12",children:(0,Z.jsx)(v.Z.Control,{onChange:function(e){g(A[e.target.value])},className:"form-select",as:"select",children:A.map((function(e,n){return(0,Z.jsx)("option",{value:n,children:e.item_class.title})}))})})]})}),(0,Z.jsx)("div",{className:"col-sm-12 col-lg-5",children:(0,Z.jsxs)(v.Z.Group,{className:"row",children:[(0,Z.jsx)("label",{className:"col-sm-12",children:(0,Z.jsx)(j.c,{children:"Levels"})}),(0,Z.jsx)("div",{className:"col-sm-12",children:(0,Z.jsx)(v.Z.Control,{onChange:function(e){C(+e.target.value)},value:w,className:"form-select",as:"select",children:Array.from({length:Q}).map((function(e,n){return(0,Z.jsx)("option",{value:n+1,children:n+1})}))})})]})}),(0,Z.jsx)("div",{className:"col-sm-12 col-lg-2",children:(0,Z.jsx)("button",{className:"btn btn-primary w-100 mt-4",onClick:J,children:(0,Z.jsx)(j.c,{children:"Save"})})})]})})}),(null===N||void 0===N?void 0:N.item_type.length)>0&&(0,Z.jsx)("div",{className:"mt-5 table-container",children:(0,Z.jsxs)(h.Z,{children:[(0,Z.jsx)(a.Z,{children:(0,Z.jsxs)(d.Z,{children:[(0,Z.jsx)(o.Z,{className:"col-sm-10",children:(0,Z.jsx)(j.c,{children:"Items category"})}),(0,Z.jsx)(o.Z,{children:(0,Z.jsx)(j.c,{children:"Enable"})})]})}),(0,Z.jsx)(u.Z,{children:N.item_type.map((function(e){var n,t=null===(n=L.find((function(n){return n.itemtypeid===e.id&&n.level===w})))||void 0===n?void 0:n.active;return(0,Z.jsxs)(d.Z,{children:[(0,Z.jsx)(o.Z,{className:"col-sm-10",children:e.title}),(0,Z.jsx)(o.Z,{children:(0,Z.jsx)("div",{class:"form-check form-check-primary mt-3",children:(0,Z.jsxs)("label",{className:"form-check-label",children:[(0,Z.jsx)("input",{type:"checkbox",disabled:O,checked:!!t,onChange:function(n){return function(e,n){var t=e.target.checked,i=(0,c.Z)(L),r=L.findIndex((function(e){return e.itemtypeid===n.id&&e.level===w}));if(-1===r)i.push({itemtypeid:n.id,level:w,active:t});else{var l=L[r];i[r]=(0,s.Z)((0,s.Z)({},l),{},{active:!l.active,level:w})}T(i)}(n,e)}}),(0,Z.jsx)("i",{className:"input-helper mt-3"})]})})})]},e.id)}))})]})})]})]})}},23821:function(e,n,t){var s=t(39281),c=t(79836),i=t(80184);n.Z=function(e){var n=e.children;return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(s.Z,{children:(0,i.jsx)(c.Z,{children:n})})})}},93650:function(){}}]);
//# sourceMappingURL=8076.90cb2109.chunk.js.map