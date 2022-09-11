"use strict";(self.webpackChunkinventory=self.webpackChunkinventory||[]).push([[85],{60085:function(e,n,c){c.r(n);var i=c(29439),l=c(56890),r=c(35855),s=c(53994),a=c(53382),t=c(72791),d=(c(40277),c(95907),c(23821)),o=c(65218),h=c(59909),x=(c(93650),c(2423),c(9716),c(69778),c(17994)),j=c(34045),u=c(55914),m=c(13967),p=c(64554),Z=c(13400),g=c(12715),v=c(41133),f=c(5397),w=c(10111),b=c(30606),P=c(80184);function S(e){var n=(0,m.Z)(),c=e.count,i=e.page,l=e.rowsPerPage,r=e.onPageChange;return(0,P.jsxs)(p.Z,{sx:{flexShrink:0,ml:2.5},children:[(0,P.jsx)(Z.Z,{onClick:function(e){r(e,0)},disabled:0===i,"aria-label":"first page",children:"rtl"===n.direction?(0,P.jsx)(w.Z,{}):(0,P.jsx)(g.Z,{})}),(0,P.jsx)(Z.Z,{onClick:function(e){r(e,i-1)},disabled:0===i,"aria-label":"previous page",children:"rtl"===n.direction?(0,P.jsx)(f.Z,{}):(0,P.jsx)(v.Z,{})}),(0,P.jsx)(Z.Z,{onClick:function(e){r(e,i+1)},disabled:i>=Math.ceil(c/l)-1,"aria-label":"next page",children:"rtl"===n.direction?(0,P.jsx)(v.Z,{}):(0,P.jsx)(f.Z,{})}),(0,P.jsx)(Z.Z,{onClick:function(e){r(e,Math.max(0,Math.ceil(c/l)-1))},disabled:i>=Math.ceil(c/l)-1,"aria-label":"last page",children:"rtl"===n.direction?(0,P.jsx)(g.Z,{}):(0,P.jsx)(w.Z,{})})]})}n.default=function(){var e=(0,t.useState)([]),n=(0,i.Z)(e,2),c=n[0],m=n[1],p=t.useState(0),Z=(0,i.Z)(p,2),g=Z[0],v=Z[1],f=t.useState(5),w=(0,i.Z)(f,2),k=w[0],y=w[1],C=(0,t.useState)(!0),N=(0,i.Z)(C,2),A=N[0],M=N[1],F=(0,t.useState)(null),B=(0,i.Z)(F,2);function z(){x.Z.getpqs3().then((function(e){m(e.data),M(!1),v(e.data.length/10)})).catch((function(e){o.ZP.error("There is a problem loading data"),M(!1)}))}B[0],B[1],(0,t.useEffect)((function(){z(),v(0),y(5)}),[]);var I=g>0?Math.max(0,(1+g)*k-c.length):0,L=(0,t.useState)(null),_=(0,i.Z)(L,2),R=_[0],q=_[1];return(0,P.jsxs)("div",{className:"item-class-page",children:[(0,P.jsx)("h3",{className:"page-title mb-3",children:(0,P.jsx)(b.c,{children:"Import PQS/PIS3 and view"})}),A?(0,P.jsx)(h.Z,{}):(0,P.jsxs)(P.Fragment,{children:[(0,P.jsxs)("div",{className:"add-row mt-4 mb-4",children:[(0,P.jsx)("h3",{className:"mb-3 mt-3",children:(0,P.jsx)(b.c,{children:"Insert PQS excel file"})}),(0,P.jsxs)("div",{className:"row",children:[(0,P.jsxs)("div",{className:"col-md-3 flex-column d-flex",children:[(0,P.jsx)("label",{className:"mb-3",children:"Excel file"}),(0,P.jsx)("input",{name:"describe",type:"file",onChange:function(e){var n=(0,i.Z)(e.target.files,1)[0],c=new FileReader;c.onload=function(e){var n=e.target.result,c=j.ij(n,{type:"binary"}),i=c.SheetNames[0],l=c.Sheets[i];q(l)},c.readAsBinaryString(n)},required:!0})]}),(0,P.jsxs)("div",{className:"col-md-3 flex-column d-flex mt-2",children:[(0,P.jsx)("label",{className:"mb-3",children:(0,P.jsx)(b.c,{children:"If you sumbit all old datas erased"})}),(0,P.jsx)("button",{onClick:function(){var e=[],n=j.P6.sheet_to_json(R).length+2;console.log(n);for(var c=7;c<n;c++){var i=0,l=0,r=0;i="###"===R["Z"+c]||void 0===R["Z"+c]?0:parseFloat(R["Z"+c]),l="###"===R["AA"+c]||void 0===R["AA"+c]?0:parseFloat(R["AA"+c]),r="###"===R["AB"+c]||void 0===R["AB"+c]?0:parseFloat(R["AB"+c]);var s={description:void 0===R["A"+c]?"":R["A"+c].v,make:void 0===R["B"+c]?"":R["B"+c].v,model:void 0===R["C"+c]?"":R["C"+c].v,pqscode:void 0===R["D"+c]?"":R["D"+c].v,refrigerant:void 0===R["F"+c]?"":R["F"+c].v,refrigeratorcapacity:void 0===R["I"+c]?0:R["I"+c].v,freezercapacity:void 0===R["J"+c]?0:R["J"+c].v,kg_24_hrs:void 0===R["M"+c]?0:R["M"+c].v,h:i,w:l,l:r};e.push(s)}x.Z.addpqs3(e).then((function(e){o.ZP.success("Data imported successfully"),z()})).catch((function(e){o.ZP.error("There is a problem importing data")}))},className:"save-btn",children:(0,P.jsx)(b.c,{children:"Sumbit"})})]})]})]}),(0,P.jsx)("div",{className:"row mb-4 mt-4",children:(0,P.jsx)("div",{className:"col-md-2 d-flex align-items-center",children:(0,P.jsx)("h4",{children:(0,P.jsx)(b.c,{children:"PQS list"})})})}),(0,P.jsxs)("div",{children:[(0,P.jsxs)(d.Z,{children:[(0,P.jsx)(l.Z,{children:(0,P.jsxs)(r.Z,{children:[(0,P.jsx)(s.Z,{children:(0,P.jsx)(b.c,{children:"PQS code"})}),(0,P.jsx)(s.Z,{children:(0,P.jsx)(b.c,{children:"PQS/PIS Type"})}),(0,P.jsx)(s.Z,{children:(0,P.jsx)(b.c,{children:"Manufacturer"})}),(0,P.jsx)(s.Z,{children:(0,P.jsx)(b.c,{children:"Model"})}),(0,P.jsx)(s.Z,{children:(0,P.jsx)(b.c,{children:"Refrigerant gas"})}),(0,P.jsxs)(s.Z,{children:[(0,P.jsx)(b.c,{children:"Net vaccine storage capacity"})," ",(0,P.jsx)(b.c,{children:"(lit.)"})]}),(0,P.jsxs)(s.Z,{children:[(0,P.jsx)(b.c,{children:"Net freeze capacity at -20 C"})," ",(0,P.jsx)(b.c,{children:"(lit.)"})]}),(0,P.jsxs)(s.Z,{children:[(0,P.jsx)(b.c,{children:"Coolant pack production capacity"})," (Kg/24 hours)"]}),(0,P.jsxs)(s.Z,{children:[(0,P.jsx)(b.c,{children:"Height"})," ",(0,P.jsx)(b.c,{children:"(cm)"})]}),(0,P.jsxs)(s.Z,{children:[(0,P.jsx)(b.c,{children:"Width"})," ",(0,P.jsx)(b.c,{children:"(cm)"})]}),(0,P.jsxs)(s.Z,{children:[(0,P.jsx)(b.c,{children:"Length"})," ",(0,P.jsx)(b.c,{children:"(cm)"})]})]})}),(0,P.jsxs)(a.Z,{children:[c&&(k>0?c.slice(g*k,g*k+k):c).map((function(e,n){return(0,P.jsx)(P.Fragment,{children:(0,P.jsxs)(r.Z,{children:[(0,P.jsx)(s.Z,{children:e.pqscode}),(0,P.jsx)(s.Z,{children:e.description}),(0,P.jsx)(s.Z,{children:e.make}),(0,P.jsx)(s.Z,{children:e.model}),(0,P.jsx)(s.Z,{children:e.refrigerant}),(0,P.jsx)(s.Z,{children:e.refrigeratorcapacity}),(0,P.jsx)(s.Z,{children:e.freezercapacity}),(0,P.jsx)(s.Z,{children:e.kg_24_hrs}),(0,P.jsx)(s.Z,{children:e.h}),(0,P.jsx)(s.Z,{children:e.w}),(0,P.jsx)(s.Z,{children:e.l})]})})})),I>0&&(0,P.jsx)(r.Z,{style:{height:53*I},children:(0,P.jsx)(s.Z,{colSpan:6})})]})]}),(0,P.jsx)(u.Z,{rowsPerPageOptions:[5,10,15,25,{label:"All",value:5}],colSpan:3,count:c.length,rowsPerPage:k,page:g,SelectProps:{inputProps:{"aria-label":"rows per page"},native:!0},labelDisplayedRows:function(e){var n=e.from,c=e.to,i=e.count;return"".concat(Math.ceil(n),"\u2013").concat(c," of ").concat(-1!==i?Math.ceil(i):"more than ".concat(c))},onPageChange:function(e,n){v(n)},onRowsPerPageChange:function(e){y(parseInt(e.target.value,10)),v(0)},ActionsComponent:S})]})]})]})}},40277:function(e,n,c){var i=c(80184);n.Z=function(){return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("svg",{version:"1.1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",width:"121.31px",height:"122.876px",viewBox:"0 0 121.31 122.876",enableBackground:"new 0 0 121.31 122.876",xmlSpace:"preserve",children:(0,i.jsx)("g",{children:(0,i.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M90.914,5.296c6.927-7.034,18.188-7.065,25.154-0.068 c6.961,6.995,6.991,18.369,0.068,25.397L85.743,61.452l30.425,30.855c6.866,6.978,6.773,18.28-0.208,25.247 c-6.983,6.964-18.21,6.946-25.074-0.031L60.669,86.881L30.395,117.58c-6.927,7.034-18.188,7.065-25.154,0.068 c-6.961-6.995-6.992-18.369-0.068-25.397l30.393-30.827L5.142,30.568c-6.867-6.978-6.773-18.28,0.208-25.247 c6.983-6.963,18.21-6.946,25.074,0.031l30.217,30.643L90.914,5.296L90.914,5.296z"})})})})}},95907:function(e,n,c){var i=c(80184);n.Z=function(){return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",width:"20",height:"20",xmlnsXlink:"http://www.w3.org/1999/xlink","enable-background":"new 0 0 512 512",children:(0,i.jsx)("path",{d:"m455.1,137.9l-32.4,32.4-81-81.1 32.4-32.4c6.6-6.6 18.1-6.6 24.7,0l56.3,56.4c6.8,6.8 6.8,17.9 0,24.7zm-270.7,271l-81-81.1 209.4-209.7 81,81.1-209.4,209.7zm-99.7-42l60.6,60.7-84.4,23.8 23.8-84.5zm399.3-282.6l-56.3-56.4c-11-11-50.7-31.8-82.4,0l-285.3,285.5c-2.5,2.5-4.3,5.5-5.2,8.9l-43,153.1c-2,7.1 0.1,14.7 5.2,20 5.2,5.3 15.6,6.2 20,5.2l153-43.1c3.4-0.9 6.4-2.7 8.9-5.2l285.1-285.5c22.7-22.7 22.7-59.7 0-82.5z"})})})}},23821:function(e,n,c){var i=c(39281),l=c(79836),r=c(80184);n.Z=function(e){var n=e.children;return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(i.Z,{children:(0,r.jsx)(l.Z,{children:n})})})}},9716:function(){},93650:function(){}}]);
//# sourceMappingURL=85.814b4348.chunk.js.map