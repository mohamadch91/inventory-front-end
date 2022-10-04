"use strict";(self.webpackChunkinventory=self.webpackChunkinventory||[]).push([[865],{865:function(e,n,i){i.r(n);var c=i(4942),l=i(1413),t=i(29439),s=i(56890),a=i(35855),r=i(53994),d=i(53382),h=i(72791),o=i(69778),u=i(40277),x=i(95907),v=i(23821),j=i(65218),m=i(59909),Z=(i(5227),i(87004),i(2423),i(30606)),f=i(80184);n.default=function(){var e=(0,h.useState)([]),n=(0,t.Z)(e,2),i=n[0],p=n[1],g=(0,h.useState)([]),b=(0,t.Z)(g,2),S=b[0],k=b[1],w=(0,h.useState)([]),P=(0,t.Z)(w,2),C=P[0],y=P[1],N=(0,h.useState)({}),Q=(0,t.Z)(N,2),I=Q[0],T=Q[1],L=(0,h.useState)({}),F=(0,t.Z)(L,2),z=F[0],E=F[1],A=(0,h.useState)(null),B=(0,t.Z)(A,2),q=B[0],O=B[1],R=(0,h.useState)(!0),X=(0,t.Z)(R,2),M=X[0],_=X[1],D=(0,h.useState)(0),G=(0,t.Z)(D,2),H=G[0],J=G[1];function K(){o.Z.getItemTypes().then((function(e){p(e.data),k(e.data),_(!1)})).catch((function(e){j.ZP.error((0,f.jsx)(Z.c,{children:"There is a problem loading data"})),_(!1)}))}function U(e){var n=e.target,i=n.name,t=n.value;T((0,l.Z)((0,l.Z)({},I),{},(0,c.Z)({},i,t)))}function V(e){var n=e.target,i=n.name,t=n.value;E((0,l.Z)((0,l.Z)({},z),{},(0,c.Z)({},i,t)))}function W(){var e;if(Object.keys(I).every((function(e){return""!==I[e]}))){_(!0);var n={id:(e=I).id,title:e.title,code:e.code,active:e.active,havePQS:e.havePQS,itemclass:e.itemclass};o.Z.putItemTypes(n).then((function(e){K()})).catch((function(e){j.ZP.error((0,f.jsx)(Z.c,{children:"There is a problem sending data"})),_(!1)})),O(null),T({})}else j.ZP.error((0,f.jsx)(Z.c,{children:"Please fill all the fields"}))}return(0,h.useEffect)((function(){o.Z.getItemClasses().then((function(e){var n=e.data.filter((function(e){return!0===e.active}));y(n),K()})).catch((function(e){j.ZP.error((0,f.jsx)(Z.c,{children:"There is a problem loading data"})),_(!1)}))}),[]),(0,h.useEffect)((function(){k(H&&"0"!==H?null===i||void 0===i?void 0:i.filter((function(e){return e.itemclass===parseInt(H)})):i)}),[H]),(0,h.useEffect)((function(){E((0,l.Z)((0,l.Z)({},z),{},{itemClass:C[0],active:!1,havePQS:!1}))}),[C]),(0,f.jsx)("div",{className:"item-class-page",children:M?(0,f.jsx)(m.Z,{}):(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)("div",{className:"mb-4",children:[(0,f.jsx)("div",{className:"mb-2",children:(0,f.jsx)("h4",{className:"page-title",children:(0,f.jsx)(Z.c,{children:"Item class Filter to list categories"})})}),(0,f.jsx)("div",{className:"",children:(0,f.jsxs)("select",{name:"itemclass",onChange:function(e){J(e.target.value)},value:H,children:[(0,f.jsx)("option",{value:0,children:"All"}),C.map((function(e,n){return(0,f.jsx)("option",{value:e.id,children:e.title},e.id)}))]})})]}),(0,f.jsxs)("div",{className:"add-row mt-4 mb-2",children:[(0,f.jsxs)("h3",{children:[" ",(0,f.jsx)(Z.c,{children:"Enter new item category"})]}),(0,f.jsxs)("div",{className:"row",children:[(0,f.jsxs)("div",{className:"col-md-3 flex-column d-flex",children:[(0,f.jsx)("label",{children:(0,f.jsx)(Z.c,{children:"Title"})}),(0,f.jsx)("input",{name:"title",type:"text",onChange:V,value:null===z||void 0===z?void 0:z.title,required:!0})]}),(0,f.jsxs)("div",{className:"col-md-3 flex-column d-flex",children:[(0,f.jsx)("label",{children:(0,f.jsx)(Z.c,{children:"Item class"})}),(0,f.jsx)("select",{name:"itemClass",onChange:V,value:null===z||void 0===z?void 0:z.itemClass,children:C.map((function(e,n){return(0,f.jsx)("option",{value:e.id,selected:0===n,children:e.title},e.id)}))})]}),(0,f.jsxs)("div",{className:"col-md-6 d-flex justify-content-center align-items-center",children:[(0,f.jsx)("label",{children:(0,f.jsx)(Z.c,{children:"Active"})}),(0,f.jsx)("input",{name:"active",className:"mr-1",type:"checkbox",onChange:function(){return E((0,l.Z)((0,l.Z)({},z),{},{active:!z.active}))},checked:null===z||void 0===z?void 0:z.active}),(0,f.jsx)("label",{children:(0,f.jsx)(Z.c,{children:"Is it from PQS/PIS list?"})}),(0,f.jsx)("input",{name:"havePQS",className:"mr-1",type:"checkbox",onChange:function(){return E((0,l.Z)((0,l.Z)({},z),{},{havePQS:!z.havePQS}))},checked:null===z||void 0===z?void 0:z.havePQS}),(0,f.jsx)("button",{className:"save-btn w-50",onClick:function(){var e;if(Object.keys(z).every((function(e){return""!==z[e]}))){var n;_(!0);var i={title:(e=z).title,code:e.code,active:e.active,havePQS:e.havePQS};null!==z&&void 0!==z&&null!==(n=z.itemClass)&&void 0!==n&&n.id?i.itemclass=parseInt(z.itemClass.id):i.itemclass=parseInt(z.itemClass),o.Z.postItemType(i).then((function(e){K(),J(0)})).catch((function(e){j.ZP.error((0,f.jsx)(Z.c,{children:"There is a problem sending data"})),_(!1)})),E((0,l.Z)((0,l.Z)({},z),{},{itemClass:C[0],active:!1,havePQS:!1,title:""}))}else j.ZP.error((0,f.jsx)(Z.c,{children:"Please fill all the fields"}))},children:(0,f.jsx)(Z.c,{children:"Save"})})]})]})]}),(0,f.jsx)("h3",{className:"page-title mb-3",children:(0,f.jsx)(Z.c,{children:"Items category list"})}),(0,f.jsx)("div",{className:"mb-2",children:(0,f.jsxs)(v.Z,{children:[(0,f.jsx)(s.Z,{children:(0,f.jsxs)(a.Z,{children:[(0,f.jsx)(r.Z,{}),(0,f.jsx)(r.Z,{children:(0,f.jsx)(Z.c,{children:"Title"})}),(0,f.jsx)(r.Z,{children:(0,f.jsx)(Z.c,{children:"Item class"})}),(0,f.jsx)(r.Z,{children:(0,f.jsx)(Z.c,{children:"Code"})}),(0,f.jsx)(r.Z,{children:(0,f.jsx)(Z.c,{children:"Active"})}),(0,f.jsx)(r.Z,{children:(0,f.jsx)(Z.c,{children:"Is it from PQS/PIS list?"})}),(0,f.jsx)(r.Z,{children:(0,f.jsx)(Z.c,{children:"Edit"})})]})}),(0,f.jsx)(d.Z,{children:null===S||void 0===S?void 0:S.map((function(e,n){var c,t;return(0,f.jsx)(f.Fragment,{children:q!==e.id?(0,f.jsxs)(a.Z,{children:[(0,f.jsx)(r.Z,{children:n+1}),(0,f.jsx)(r.Z,{children:e.title}),(0,f.jsx)(r.Z,{children:null===(t=e.itemclass,c=C.find((function(e){return e.id===t})))||void 0===c?void 0:c.title}),(0,f.jsx)(r.Z,{children:e.code}),(0,f.jsx)(r.Z,{children:(0,f.jsx)("input",{type:"checkbox",checked:e.active,disabled:!0})}),(0,f.jsx)(r.Z,{children:(0,f.jsx)("input",{type:"checkbox",checked:e.havePQS,disabled:!0})}),(0,f.jsx)(r.Z,{children:(0,f.jsx)("button",{className:"edit-btn",onClick:function(n){return function(e){var n=i.find((function(n){return n.id===e.id}));T(n),O(e.id)}(e)},children:(0,f.jsx)(x.Z,{})})})]}):(0,f.jsxs)(a.Z,{children:[(0,f.jsx)(r.Z,{children:n+1}),(0,f.jsx)(r.Z,{children:(0,f.jsx)("input",{name:"title",type:"text",onChange:U,value:null===I||void 0===I?void 0:I.title,required:!0})}),(0,f.jsx)(r.Z,{children:(0,f.jsx)("select",{name:"itemclass",onChange:U,value:null===I||void 0===I?void 0:I.itemClass,children:C.map((function(n,i){return(0,f.jsx)("option",{value:n.id,selected:e.itemclass===n.id,children:n.title},n.id)}))})}),(0,f.jsx)(r.Z,{children:null===I||void 0===I?void 0:I.code}),(0,f.jsx)(r.Z,{children:(0,f.jsx)("input",{name:"active",type:"checkbox",onChange:function(){return T((0,l.Z)((0,l.Z)({},I),{},{active:!I.active}))},checked:null===I||void 0===I?void 0:I.active})}),(0,f.jsx)(r.Z,{children:(0,f.jsx)("input",{name:"havePQS",type:"checkbox",onChange:function(){return T((0,l.Z)((0,l.Z)({},I),{},{havePQS:!I.havePQS}))},checked:null===I||void 0===I?void 0:I.havePQS})}),(0,f.jsxs)(r.Z,{children:[(0,f.jsx)("button",{className:"save-btn",onClick:W,children:(0,f.jsx)(Z.c,{children:"Save"})}),(0,f.jsx)("button",{className:"close-btn",onClick:function(){return O(null)},children:(0,f.jsx)(u.Z,{})})]})]})})}))})]})})]})})}},40277:function(e,n,i){var c=i(80184);n.Z=function(){return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)("svg",{version:"1.1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",width:"121.31px",height:"122.876px",viewBox:"0 0 121.31 122.876",enableBackground:"new 0 0 121.31 122.876",xmlSpace:"preserve",children:(0,c.jsx)("g",{children:(0,c.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M90.914,5.296c6.927-7.034,18.188-7.065,25.154-0.068 c6.961,6.995,6.991,18.369,0.068,25.397L85.743,61.452l30.425,30.855c6.866,6.978,6.773,18.28-0.208,25.247 c-6.983,6.964-18.21,6.946-25.074-0.031L60.669,86.881L30.395,117.58c-6.927,7.034-18.188,7.065-25.154,0.068 c-6.961-6.995-6.992-18.369-0.068-25.397l30.393-30.827L5.142,30.568c-6.867-6.978-6.773-18.28,0.208-25.247 c6.983-6.963,18.21-6.946,25.074,0.031l30.217,30.643L90.914,5.296L90.914,5.296z"})})})})}},95907:function(e,n,i){var c=i(80184);n.Z=function(){return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",width:"20",height:"20",xmlnsXlink:"http://www.w3.org/1999/xlink","enable-background":"new 0 0 512 512",children:(0,c.jsx)("path",{d:"m455.1,137.9l-32.4,32.4-81-81.1 32.4-32.4c6.6-6.6 18.1-6.6 24.7,0l56.3,56.4c6.8,6.8 6.8,17.9 0,24.7zm-270.7,271l-81-81.1 209.4-209.7 81,81.1-209.4,209.7zm-99.7-42l60.6,60.7-84.4,23.8 23.8-84.5zm399.3-282.6l-56.3-56.4c-11-11-50.7-31.8-82.4,0l-285.3,285.5c-2.5,2.5-4.3,5.5-5.2,8.9l-43,153.1c-2,7.1 0.1,14.7 5.2,20 5.2,5.3 15.6,6.2 20,5.2l153-43.1c3.4-0.9 6.4-2.7 8.9-5.2l285.1-285.5c22.7-22.7 22.7-59.7 0-82.5z"})})})}},23821:function(e,n,i){var c=i(39281),l=i(79836),t=i(80184);n.Z=function(e){var n=e.children;return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(c.Z,{children:(0,t.jsx)(l.Z,{children:n})})})}}}]);
//# sourceMappingURL=865.0f8d72f2.chunk.js.map