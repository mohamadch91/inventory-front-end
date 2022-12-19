"use strict";(self.webpackChunkinventory=self.webpackChunkinventory||[]).push([[85],{67116:function(e,n,l){l.d(n,{p:function(){return r}});var c=l(60324),i=function(){return c.Z.language},r=function(){return"ar"===i()||"en"===i()?".":","}},60085:function(e,n,l){l.r(n);var c=l(29439),i=l(56890),r=l(35855),s=l(53994),a=l(53382),t=l(72791),d=(l(40277),l(95907),l(23821)),o=l(65218),h=l(59909),x=(l(93650),l(2423),l(69778),l(17994)),j=l(34045),u=l(55914),p=l(13967),m=l(64554),g=l(13400),Z=l(12715),f=l(41133),v=l(5397),w=l(10111),b=l(30606),S=l(67116),y=l(80184);function P(e){var n=(0,p.Z)(),l=e.count,c=e.page,i=e.rowsPerPage,r=e.onPageChange;return(0,y.jsxs)(m.Z,{sx:{flexShrink:0,ml:2.5},children:[(0,y.jsx)(g.Z,{onClick:function(e){r(e,0)},disabled:0===c,"aria-label":"first page",children:"rtl"===n.direction?(0,y.jsx)(w.Z,{}):(0,y.jsx)(Z.Z,{})}),(0,y.jsx)(g.Z,{onClick:function(e){r(e,c-1)},disabled:0===c,"aria-label":"previous page",children:"rtl"===n.direction?(0,y.jsx)(v.Z,{}):(0,y.jsx)(f.Z,{})}),(0,y.jsx)(g.Z,{onClick:function(e){r(e,c+1)},disabled:c>=Math.ceil(l/i)-1,"aria-label":"next page",children:"rtl"===n.direction?(0,y.jsx)(f.Z,{}):(0,y.jsx)(v.Z,{})}),(0,y.jsx)(g.Z,{onClick:function(e){r(e,Math.max(0,Math.ceil(l/i)-1))},disabled:c>=Math.ceil(l/i)-1,"aria-label":"last page",children:"rtl"===n.direction?(0,y.jsx)(Z.Z,{}):(0,y.jsx)(w.Z,{})})]})}n.default=function(){var e=(0,t.useState)([]),n=(0,c.Z)(e,2),l=n[0],p=n[1],m=t.useState(0),g=(0,c.Z)(m,2),Z=g[0],f=g[1],v=t.useState(5),w=(0,c.Z)(v,2),k=w[0],N=w[1],C=(0,t.useState)(!0),A=(0,c.Z)(C,2),F=A[0],M=A[1],B=(0,t.useState)(null),I=(0,c.Z)(B,2);function z(){x.Z.getpqs3().then((function(e){p(e.data),M(!1),f(e.data.length/10)})).catch((function(e){o.ZP.error((0,y.jsx)(b.c,{children:"There is a problem loading data"})),M(!1)}))}I[0],I[1],(0,t.useEffect)((function(){z(),f(0),N(5)}),[]);var L=Z>0?Math.max(0,(1+Z)*k-l.length):0,_=(0,t.useState)(null),Q=(0,c.Z)(_,2),R=Q[0],q=Q[1],D=(0,t.useState)(null),E=(0,c.Z)(D,2),J=E[0],T=E[1];return(0,y.jsxs)("div",{className:"item-class-page",children:[(0,y.jsx)("h3",{className:"page-title mb-3",children:(0,y.jsx)(b.c,{children:"Import PQS/PIS 003 and view"})}),F?(0,y.jsx)(h.Z,{}):(0,y.jsxs)(y.Fragment,{children:[(0,y.jsxs)("div",{className:"add-row mt-4 mb-4",children:[(0,y.jsx)("h3",{className:"mb-3 mt-3",children:(0,y.jsx)(b.c,{children:"Insert PQS excel file"})}),(0,y.jsxs)("div",{className:"row",children:[(0,y.jsxs)("div",{className:"col-md-3 flex-column d-flex",children:[(0,y.jsx)("label",{className:"mb-3",children:(0,y.jsx)(b.c,{children:"Excel file"})}),(0,y.jsxs)("label",{className:"btn btn-primary",children:[(0,y.jsx)(b.c,{children:"Choose file"}),(0,y.jsx)("input",{name:"describe",type:"file",onChange:function(e){var n=(0,c.Z)(e.target.files,1)[0];T(n.name);var l=new FileReader;l.onload=function(e){var n=e.target.result,l=j.ij(n,{type:"binary"}),c=l.SheetNames[0],i=l.Sheets[c];q(i)},l.readAsBinaryString(n)},style:{display:"none"},required:!0})]}),(0,y.jsxs)("span",{className:"glyphicon glyphicon-upload mt-3 text-black",children:[" ",J]})]}),(0,y.jsxs)("div",{className:"col-md-3 flex-column d-flex ",children:[(0,y.jsx)("label",{className:"",children:(0,y.jsx)(b.c,{children:"If you click on submit, all old data will be erased!"})}),(0,y.jsx)("button",{onClick:function(){M(!0);var e=[],n=j.P6.sheet_to_json(R).length+2;console.log(n);for(var l=7;l<n;l++){var c=0,i=0,r=0;c="###"===R["Z"+l]||void 0===R["Z"+l]?0:parseFloat(R["Z"+l].w),i="###"===R["AA"+l]||void 0===R["AA"+l]?0:parseFloat(R["AA"+l].w),"###"===R["AB"+l]||void 0===R["AB"+l]?r=0:(console.log(R["AB"+l]),r=parseFloat(R["AB"+l].w));var s={description:void 0===R["A"+l]?"":R["A"+l].v,make:void 0===R["B"+l]?"":R["B"+l].v,model:void 0===R["C"+l]?"":R["C"+l].v,pqscode:void 0===R["D"+l]?"":R["D"+l].v,refrigerant:void 0===R["F"+l]?"":R["F"+l].v,refrigeratorcapacity:void 0===R["I"+l]?0:R["I"+l].v,freezercapacity:void 0===R["J"+l]?0:R["J"+l].v,kg_24_hrs:void 0===R["M"+l]?0:R["M"+l].v,h:c,w:i,l:r};e.push(s)}x.Z.addpqs3(e).then((function(e){o.ZP.success((0,y.jsx)(b.c,{children:"Data imported successfully"})),z()})).catch((function(e){o.ZP.error((0,y.jsx)(b.c,{children:"There is a problem importing data"})),M(!1)}))},className:"save-btn mt-3",children:(0,y.jsx)(b.c,{children:"Submit"})})]}),(0,y.jsx)("div",{className:"col-md-3 ml-2 mt-1",children:(0,y.jsx)("a",{href:"./sample/PQS-import-sampleV1.xlsx",download:!0,children:(0,y.jsx)(b.c,{children:"Download sample excel file"})})})]})]}),(0,y.jsx)("div",{className:"row mb-4 mt-4",children:(0,y.jsx)("div",{className:"col-md-2 d-flex align-items-center",children:(0,y.jsx)("h4",{children:(0,y.jsx)(b.c,{children:"PQS list"})})})}),(0,y.jsxs)("div",{className:"table-container",children:[(0,y.jsxs)(d.Z,{children:[(0,y.jsx)(i.Z,{children:(0,y.jsxs)(r.Z,{children:[(0,y.jsx)(s.Z,{children:(0,y.jsx)(b.c,{children:"PQS/PIS Code"})}),(0,y.jsx)(s.Z,{children:(0,y.jsx)(b.c,{children:"PQS/PIS type"})}),(0,y.jsx)(s.Z,{children:(0,y.jsx)(b.c,{children:"Manufacturer"})}),(0,y.jsx)(s.Z,{children:(0,y.jsx)(b.c,{children:"Model"})}),(0,y.jsx)(s.Z,{children:(0,y.jsx)(b.c,{children:"Refrigerant gas"})}),(0,y.jsx)(s.Z,{children:(0,y.jsx)(b.c,{children:"Net vaccine storage capacity (lit.)"})}),(0,y.jsx)(s.Z,{children:(0,y.jsx)(b.c,{children:"Net freeze capacity (lit.)"})}),(0,y.jsxs)(s.Z,{children:[(0,y.jsx)(b.c,{children:"CCoolant pack production capacity (Kg/24 hours)"})," "]}),(0,y.jsx)(s.Z,{children:(0,y.jsx)(b.c,{children:"Height (cm)"})}),(0,y.jsx)(s.Z,{children:(0,y.jsx)(b.c,{children:"Width (cm)"})}),(0,y.jsx)(s.Z,{children:(0,y.jsx)(b.c,{children:"Length (cm)"})})]})}),(0,y.jsxs)(a.Z,{children:[l&&(k>0?l.slice(Z*k,Z*k+k):l).map((function(e,n){return(0,y.jsxs)(r.Z,{children:[(0,y.jsx)(s.Z,{children:e.pqscode}),(0,y.jsx)(s.Z,{children:e.description}),(0,y.jsx)(s.Z,{children:e.make}),(0,y.jsx)(s.Z,{children:e.model}),(0,y.jsx)(s.Z,{children:e.refrigerant}),(0,y.jsx)(s.Z,{children:e.refrigeratorcapacity}),(0,y.jsx)(s.Z,{children:e.freezercapacity}),(0,y.jsx)(s.Z,{children:e.kg_24_hrs.toFixed(2).toString().replace(".",(0,S.p)())}),(0,y.jsx)(s.Z,{children:e.h.toFixed(2).toString().replace(".",(0,S.p)())}),(0,y.jsx)(s.Z,{children:e.w.toFixed(2).toString().replace(".",(0,S.p)())}),(0,y.jsx)(s.Z,{children:e.l.toFixed(2).toString().replace(".",(0,S.p)())})]},n)})),L>0&&(0,y.jsx)(r.Z,{style:{height:53*L},children:(0,y.jsx)(s.Z,{colSpan:6})})]})]}),(0,y.jsx)(u.Z,{rowsPerPageOptions:[5,10,15,25,{label:"All",value:l.length}],colSpan:3,count:l.length,rowsPerPage:k,page:Z,SelectProps:{inputProps:{"aria-label":"rows per page"},native:!0},labelDisplayedRows:function(e){var n=e.from,l=e.to,c=e.count;return"".concat(Math.ceil(n),"\u2013").concat(l," of ").concat(-1!==c?Math.ceil(c):"more than ".concat(l))},onPageChange:function(e,n){f(n)},onRowsPerPageChange:function(e){N(parseInt(e.target.value,10)),f(0)},ActionsComponent:P})]})]})]})}},40277:function(e,n,l){var c=l(80184);n.Z=function(){return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)("svg",{version:"1.1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",width:"121.31px",height:"122.876px",viewBox:"0 0 121.31 122.876",enableBackground:"new 0 0 121.31 122.876",xmlSpace:"preserve",children:(0,c.jsx)("g",{children:(0,c.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M90.914,5.296c6.927-7.034,18.188-7.065,25.154-0.068 c6.961,6.995,6.991,18.369,0.068,25.397L85.743,61.452l30.425,30.855c6.866,6.978,6.773,18.28-0.208,25.247 c-6.983,6.964-18.21,6.946-25.074-0.031L60.669,86.881L30.395,117.58c-6.927,7.034-18.188,7.065-25.154,0.068 c-6.961-6.995-6.992-18.369-0.068-25.397l30.393-30.827L5.142,30.568c-6.867-6.978-6.773-18.28,0.208-25.247 c6.983-6.963,18.21-6.946,25.074,0.031l30.217,30.643L90.914,5.296L90.914,5.296z"})})})})}},95907:function(e,n,l){var c=l(80184);n.Z=function(){return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",width:"30",height:"30",xmlnsXlink:"http://www.w3.org/1999/xlink","enable-background":"new 0 0 512 512",children:(0,c.jsx)("path",{d:"m455.1,137.9l-32.4,32.4-81-81.1 32.4-32.4c6.6-6.6 18.1-6.6 24.7,0l56.3,56.4c6.8,6.8 6.8,17.9 0,24.7zm-270.7,271l-81-81.1 209.4-209.7 81,81.1-209.4,209.7zm-99.7-42l60.6,60.7-84.4,23.8 23.8-84.5zm399.3-282.6l-56.3-56.4c-11-11-50.7-31.8-82.4,0l-285.3,285.5c-2.5,2.5-4.3,5.5-5.2,8.9l-43,153.1c-2,7.1 0.1,14.7 5.2,20 5.2,5.3 15.6,6.2 20,5.2l153-43.1c3.4-0.9 6.4-2.7 8.9-5.2l285.1-285.5c22.7-22.7 22.7-59.7 0-82.5z"})})})}},23821:function(e,n,l){var c=l(39281),i=l(79836),r=l(80184);n.Z=function(e){var n=e.children;return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(c.Z,{children:(0,r.jsx)(i.Z,{children:n})})})}},93650:function(){}}]);
//# sourceMappingURL=85.9f355095.chunk.js.map