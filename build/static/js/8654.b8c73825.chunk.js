"use strict";(self.webpackChunkinventory=self.webpackChunkinventory||[]).push([[8654],{38654:function(e,n,s){s.r(n),s.d(n,{default:function(){return v}});var a=s(74165),r=s(15861),t=s(29439),c=s(16149),l=s(63587),i=s(91933),d=s(59909),o=s(72791),u={en:"English",fr:"Fran\xe7ais",ar:"\u0627\u0644\u0639\u0631\u0628\u064a\u0629",fa:"\u0641\u0627\u0631\u0633\u06cc",es:"Espa\xf1ol",ru:"\u0420\u0443\u0441\u0441\u043a\u0438\u0439"},h={dashboard:"Dashboard",facilities:"Facilities",hr:"Human Resources",user:"User",message:"Message",reports:"Reports",settings:"Settings","about-iga":"About-IGA"},m=s(80794),p=s(30606),x=s(12902),j=s(80184);var v=function(){var e=(0,o.useState)("en"),n=(0,t.Z)(e,2),s=n[0],v=n[1],f=(0,o.useState)("dashboard"),b=(0,t.Z)(f,2),g=b[0],N=b[1],Z=(0,o.useState)(null),w=(0,t.Z)(Z,2),y=w[0],C=w[1],k=(0,i.useQuery)(["help",s,g],(0,r.Z)((0,a.Z)().mark((function e(){var n;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.Z.getHelpContent(s,g);case 2:return n=e.sent,e.abrupt("return",n.data.length>0?n.data[0]:{});case 4:case"end":return e.stop()}}),e)})))),H=k.data,S=k.isLoading,D=k.refetch,F=function(){var e=(0,r.Z)((0,a.Z)().mark((function e(n){var r;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),(r=new FormData).append("lang",s),r.append("page",g),r.append("abr",y),H.id&&r.append("id",H.id),e.next=8,H.id?l.Z.putHelpContent(r):l.Z.postHelpContent(r);case 8:e.sent,D();case 10:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return(0,j.jsxs)("div",{children:[(0,j.jsx)("h3",{className:"page-title mb-3",children:(0,j.jsx)(p.c,{children:"Manage HELP"})}),S?(0,j.jsx)(d.Z,{}):(0,j.jsxs)("div",{className:"mt-3",children:[(0,j.jsx)("div",{className:"card",children:(0,j.jsx)("div",{className:"card-body",children:(0,j.jsxs)("div",{className:"row",children:[(0,j.jsx)("div",{className:"col-sm-12 col-lg-5",children:(0,j.jsxs)(c.Z.Group,{className:"row",children:[(0,j.jsx)("label",{className:"col-sm-12",children:(0,j.jsx)(p.c,{children:"Language"})}),(0,j.jsx)("div",{className:"col-sm-12",children:(0,j.jsx)(c.Z.Control,{onChange:function(e){return v(e.target.value)},className:"form-select",as:"select",value:s,children:Object.keys(u).map((function(e){return(0,j.jsx)("option",{value:e,id:e,children:u[e]})}))})})]})}),(0,j.jsx)("div",{className:"col-sm-12 col-lg-5",children:(0,j.jsxs)(c.Z.Group,{className:"row",children:[(0,j.jsx)("label",{className:"col-sm-12",children:(0,j.jsx)(p.c,{children:"Page"})}),(0,j.jsx)("div",{className:"col-sm-12",children:(0,j.jsx)(c.Z.Control,{onChange:function(e){return N(e.target.value)},className:"form-select",as:"select",value:g,children:Object.keys(h).map((function(e){return(0,j.jsx)(x.W,{children:function(n,s){s.i18n;return(0,j.jsx)("option",{value:e,children:n("".concat(h[e]))},e)}})}))})})]})}),(0,j.jsx)("div",{className:"col-sm-12 col-lg-2",children:(0,j.jsx)("button",{className:"btn btn-primary w-100 mt-4",onClick:D,children:(0,j.jsx)(p.c,{children:"Filter"})})})]})})}),(0,j.jsx)("div",{className:"card mt-3",children:(0,j.jsx)("div",{className:"card-body pb-3",children:(0,j.jsxs)("form",{onSubmit:F,children:[(0,j.jsx)("div",{className:"row",children:(0,j.jsx)("input",{type:"file",onChange:function(e){e.persist();var n=e.target.files[0];C(n)}})}),(0,j.jsxs)("div",{className:"row",children:[(0,j.jsx)("button",{className:"btn btn-primary mt-3",style:{marginLeft:"auto",width:"72px"},type:"submit",children:(0,j.jsx)(p.c,{children:"Save"})}),(null===H||void 0===H?void 0:H.abr)&&(0,j.jsx)("a",{href:m.Z+H.abr,download:!0,style:{width:"fit-content"},children:(0,j.jsx)("button",{className:"btn btn-success mt-3 ml-2",type:"button",children:(0,j.jsx)(p.c,{children:"Download Help"})})})]})]})})})]})]})}},12902:function(e,n,s){s.d(n,{W:function(){return l}});var a=s(29439),r=s(45987),t=s(22020),c=["ns","children"];function l(e){var n=e.ns,s=e.children,l=(0,r.Z)(e,c),i=(0,t.$)(n,l),d=(0,a.Z)(i,3),o=d[0],u=d[1],h=d[2];return s(o,{i18n:u,lng:u.language},h)}}}]);
//# sourceMappingURL=8654.b8c73825.chunk.js.map