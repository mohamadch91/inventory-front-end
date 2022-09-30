"use strict";(self.webpackChunkinventory=self.webpackChunkinventory||[]).push([[2346],{82346:function(e,n,t){t.r(n);var s=t(74165),c=t(15861),l=t(29439),i=t(72791),r=t(56890),a=t(35855),d=t(53994),o=t(53382),u=t(78840),m=(t(93650),t(59909)),h=t(91933),x=t(23821),j=t(95907),v=t(79271),f=t(91523),p=t(74936),Z=t(30606),g=t(92490),b=t(16536),w=t(80184);n.default=function(){var e=(0,v.k6)(),n=new URLSearchParams(e.location.search).get("facility"),t=i.useState(!1),N=(0,l.Z)(t,2),y=N[0],k=N[1],C=i.useState(null),M=(0,l.Z)(C,2),S=M[0],z=M[1],L=i.useState([]),_=(0,l.Z)(L,2),D=_[0],V=_[1],I=i.useState(!1),H=(0,l.Z)(I,2),F=H[0],O=H[1],P=i.useState(""),A=(0,l.Z)(P,2),B=A[0],Q=A[1],T=i.useState(!1),U=(0,l.Z)(T,2),E=U[0],R=U[1],X=(0,h.useQuery)(["item-default-value",n],(0,c.Z)((0,s.Z)().mark((function e(){var t;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.Z.getItems(void 0,n,E);case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)}))),{refetchOnMount:!0}),q=X.data,G=X.isLoading,J=X.refetch,K=(0,h.useQuery)(["item-classes-and-types"],(0,c.Z)((0,s.Z)().mark((function e(){var n;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.Z.getItemClassesAndTypes();case 2:return n=e.sent,e.abrupt("return",n.data.data.filter((function(e){return e.item_type.length>0})));case 4:case"end":return e.stop()}}),e)}))),{refetchOnMount:!0}),W=K.data,Y=K.isLoading,$=(0,h.useMutation)({mutationFn:function(){var e=(0,c.Z)((0,s.Z)().mark((function e(n){var t;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.Z.deleteItem(n);case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),onSuccess:function(){J()}}),ee=$.isLoading;return $.mutateAsync,G||Y||F?(0,w.jsx)(m.Z,{}):(0,w.jsxs)("div",{children:[(0,w.jsx)("h3",{className:"page-title mb-3",children:(0,w.jsx)(Z.c,{children:"Item list"})}),(0,w.jsxs)("div",{className:"mt-3",children:[(0,w.jsxs)("div",{children:[(0,w.jsxs)("label",{className:"mr-2 mb-1",children:[" ",(0,w.jsx)(Z.c,{children:"Deleted"})," "]}),(0,w.jsx)("input",{type:"checkbox",checked:E,onChange:function(){R(!E)},className:"mt-1 "}),(0,w.jsx)("button",{className:"btn btn-success text-dark w-25  mb-2   ",onClick:function(){return J()},style:{marginLeft:"5%"},type:"submit",children:(0,w.jsx)(Z.c,{children:"filter"})})]}),(0,w.jsx)("div",{className:"card",children:(0,w.jsx)("div",{className:"card-body",children:(0,w.jsxs)("div",{className:"mt-5 table-container",children:[(0,w.jsxs)(x.Z,{children:[(0,w.jsx)(r.Z,{children:(0,w.jsxs)(a.Z,{children:[(0,w.jsx)(d.Z,{className:"col-sm-2",children:(0,w.jsx)(Z.c,{children:"Item class"})}),(0,w.jsx)(d.Z,{className:"col-sm-2",children:(0,w.jsx)(Z.c,{children:"Item category"})}),(0,w.jsx)(d.Z,{className:"col-sm-2",children:(0,w.jsx)(Z.c,{children:"Code"})}),(0,w.jsx)(d.Z,{className:"col-sm-2",children:(0,w.jsx)(Z.c,{children:"Manufacturer"})}),(0,w.jsx)(d.Z,{className:"col-sm-2",children:(0,w.jsx)(Z.c,{children:"Last Changed on"})}),(0,w.jsx)(d.Z,{className:"col-sm-2",children:(0,w.jsx)(Z.c,{children:"Edit"})})]})}),(0,w.jsx)(o.Z,{children:null===q||void 0===q?void 0:q.map((function(e){var n,t,s,c,l,i=null===W||void 0===W?void 0:W.find((function(n){return n.item_class.id===e.item_class})),r=null===i||void 0===i?void 0:i.item_type.find((function(n){return n.id===e.item_type}));return(0,w.jsxs)(a.Z,{children:[(0,w.jsx)(d.Z,{className:"col-sm-2",children:null!==(n=null===i||void 0===i?void 0:i.item_class.title)&&void 0!==n?n:"-"}),(0,w.jsx)(d.Z,{className:"col-sm-2",children:null!==(t=null===r||void 0===r?void 0:r.title)&&void 0!==t?t:"-"}),(0,w.jsx)(d.Z,{className:"col-sm-2",children:null!==(s=e.code)&&void 0!==s?s:"-"}),(0,w.jsx)(d.Z,{className:"col-sm-2",children:null!==(c=e.Manufacturer)&&void 0!==c?c:"-"}),(0,w.jsx)(d.Z,{className:"col-sm-2",children:null!==e&&void 0!==e&&e.updated_at?(l=e.updated_at,new Date(l).toISOString().split("T")[0]):"-"}),(0,w.jsxs)(d.Z,{className:"col-sm-2",children:[(0,w.jsx)(f.rU,{to:"/items/info/".concat(e.id),children:(0,w.jsx)("div",{style:{width:"20px",height:"20px"},children:(0,w.jsx)(j.Z,{})})}),(0,w.jsx)(u.Z,{title:"Delete item",children:(0,w.jsx)("button",{className:"edit-btn",disabled:ee,onClick:function(){return n=e.id,O(!0),p.Z.deleteitemparam(n).then((function(e){V(e.data),O(!1)})),z(n),k(!0),void O(!1);var n},children:(0,w.jsx)(g.Z,{})})})]})]},e.id)}))})]}),(0,w.jsx)(b.Z,{show:y,onHide:function(){return k(!1)},children:(0,w.jsxs)("form",{onSubmit:function(){var e={id:S,delete_reason:B,isDel:!0};p.Z.deleteitem(e);k(!1),J()},children:[(0,w.jsx)("h1",{className:"mb-1 mr-3  mt-5 mb-5 text-black",style:{marginLeft:"33%"},children:(0,w.jsx)(Z.c,{children:"Delete Item"})}),(0,w.jsx)("div",{className:"d-flex flex-column align-items-center"}),(0,w.jsx)("div",{className:"d-flex flex-column align-items-center"}),(0,w.jsx)("div",{className:"d-flex flex-column align-items-center"}),(0,w.jsx)("div",{className:"d-flex flex-column align-items-center"}),(0,w.jsxs)("div",{className:"d-flex flex-column align-items-center w-100",children:[(0,w.jsx)("label",{children:(0,w.jsx)(Z.c,{children:"Delete reasons"})}),(0,w.jsxs)("select",{name:"Delete reasons",onChange:function(e){Q(e.target.value)},children:[(0,w.jsx)("option",{value:"-1",selected:!0,disabled:!0,children:"Please select"}),null===D||void 0===D?void 0:D.map((function(e,n){return(0,w.jsx)("option",{value:e.id,children:e.name},e.id)}))]})]}),(0,w.jsx)("button",{className:"btn btn-success text-dark w-50 mt-4 mb-2   ",style:{marginLeft:"24%"},type:"submit",children:(0,w.jsx)(Z.c,{children:"Delete"})}),(0,w.jsx)("button",{className:"btn btn-danger text-dark w-50 mt-4 mb-2   ",style:{marginLeft:"24%"},onClick:function(e){e.preventDefault(),e.stopPropagation(),k(!1)},children:(0,w.jsx)(Z.c,{children:"Cancel"})})]})})]})})})]})]})}},95907:function(e,n,t){var s=t(80184);n.Z=function(){return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",width:"20",height:"20",xmlnsXlink:"http://www.w3.org/1999/xlink","enable-background":"new 0 0 512 512",children:(0,s.jsx)("path",{d:"m455.1,137.9l-32.4,32.4-81-81.1 32.4-32.4c6.6-6.6 18.1-6.6 24.7,0l56.3,56.4c6.8,6.8 6.8,17.9 0,24.7zm-270.7,271l-81-81.1 209.4-209.7 81,81.1-209.4,209.7zm-99.7-42l60.6,60.7-84.4,23.8 23.8-84.5zm399.3-282.6l-56.3-56.4c-11-11-50.7-31.8-82.4,0l-285.3,285.5c-2.5,2.5-4.3,5.5-5.2,8.9l-43,153.1c-2,7.1 0.1,14.7 5.2,20 5.2,5.3 15.6,6.2 20,5.2l153-43.1c3.4-0.9 6.4-2.7 8.9-5.2l285.1-285.5c22.7-22.7 22.7-59.7 0-82.5z"})})})}},23821:function(e,n,t){var s=t(39281),c=t(79836),l=t(80184);n.Z=function(e){var n=e.children;return(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(s.Z,{children:(0,l.jsx)(c.Z,{children:n})})})}},92490:function(e,n,t){var s=t(80184);n.Z=function(){return(0,s.jsxs)("svg",{version:"1.1",id:"Layer_1",x:"0px",y:"0px",width:"20px",height:"20px",viewBox:"0 0 473 473",children:[(0,s.jsx)("path",{d:"M324.285,215.015V128h20V38h-98.384V0H132.669v38H34.285v90h20v305h161.523c23.578,24.635,56.766,40,93.477,40 c71.368,0,129.43-58.062,129.43-129.43C438.715,277.276,388.612,222.474,324.285,215.015z M294.285,215.015 c-18.052,2.093-34.982,7.911-50,16.669V128h50V215.015z M162.669,30h53.232v8h-53.232V30z M64.285,68h250v30h-250V68z M84.285,128 h50v275h-50V128z M164.285,403V128h50v127.768c-21.356,23.089-34.429,53.946-34.429,87.802c0,21.411,5.231,41.622,14.475,59.43 H164.285z M309.285,443c-54.826,0-99.429-44.604-99.429-99.43s44.604-99.429,99.429-99.429s99.43,44.604,99.43,99.429 S364.111,443,309.285,443z"}),(0,s.jsx)("polygon",{points:"342.248,289.395 309.285,322.358 276.323,289.395 255.11,310.608 288.073,343.571 255.11,376.533 276.323,397.746  309.285,364.783 342.248,397.746 363.461,376.533 330.498,343.571 363.461,310.608 \t"})]})}},93650:function(){}}]);
//# sourceMappingURL=2346.1e204b70.chunk.js.map