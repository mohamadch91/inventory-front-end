"use strict";(self.webpackChunkinventory=self.webpackChunkinventory||[]).push([[3085],{67116:function(e,n,l){l.d(n,{p:function(){return i}});var c=l(60324),a=function(){return c.Z.language},i=function(){return"ar"===a()||"en"===a()?".":","}},73085:function(e,n,l){l.r(n),l.d(n,{default:function(){return k}});var c=l(29439),a=l(56890),i=l(35855),s=l(53994),r=l(53382),t=l(72791),o=(l(40277),l(95907),l(23821)),d=l(65218),h=l(59909),x=(l(93650),l(2423),l(69778),l(17994)),u=l(34045),j=l(55914),m=l(13967),p=l(64554),v=l(13400),f=l(12715),g=l(41133),Z=l(5397),b=l(10111),w=l(30606),y=l(67116),P=l(80184);function S(e){var n=(0,m.Z)(),l=e.count,c=e.page,a=e.rowsPerPage,i=e.onPageChange;return(0,P.jsxs)(p.Z,{sx:{flexShrink:0,ml:2.5},children:[(0,P.jsx)(v.Z,{onClick:function(e){i(e,0)},disabled:0===c,"aria-label":"first page",children:"rtl"===n.direction?(0,P.jsx)(b.Z,{}):(0,P.jsx)(f.Z,{})}),(0,P.jsx)(v.Z,{onClick:function(e){i(e,c-1)},disabled:0===c,"aria-label":"previous page",children:"rtl"===n.direction?(0,P.jsx)(Z.Z,{}):(0,P.jsx)(g.Z,{})}),(0,P.jsx)(v.Z,{onClick:function(e){i(e,c+1)},disabled:c>=Math.ceil(l/a)-1,"aria-label":"next page",children:"rtl"===n.direction?(0,P.jsx)(g.Z,{}):(0,P.jsx)(Z.Z,{})}),(0,P.jsx)(v.Z,{onClick:function(e){i(e,Math.max(0,Math.ceil(l/a)-1))},disabled:c>=Math.ceil(l/a)-1,"aria-label":"last page",children:"rtl"===n.direction?(0,P.jsx)(f.Z,{}):(0,P.jsx)(b.Z,{})})]})}var k=function(){var e=(0,t.useState)([]),n=(0,c.Z)(e,2),l=n[0],m=n[1],p=t.useState(0),v=(0,c.Z)(p,2),f=v[0],g=v[1],Z=t.useState(5),b=(0,c.Z)(Z,2),k=b[0],N=b[1],C=(0,t.useState)(!0),M=(0,c.Z)(C,2),F=M[0],Q=M[1],I=(0,t.useState)(null),L=(0,c.Z)(I,2);function B(){x.Z.getpqs4().then((function(e){m(e.data),Q(!1),g(e.data.length/10)})).catch((function(e){d.ZP.error((0,P.jsx)(w.c,{children:"There is a problem loading data"})),Q(!1)}))}L[0],L[1],(0,t.useEffect)((function(){B(),g(0),N(5)}),[]);var q=f>0?Math.max(0,(1+f)*k-l.length):0,z=(0,t.useState)(null),D=(0,c.Z)(z,2),R=D[0],E=D[1],A=(0,t.useState)(""),G=(0,c.Z)(A,2),V=G[0],_=G[1];return(0,P.jsxs)("div",{className:"item-class-page",children:[(0,P.jsx)("h3",{className:"page-title mb-3",children:(0,P.jsx)(w.c,{children:"Import PQS/PIS 004 and view"})}),F?(0,P.jsx)(h.Z,{}):(0,P.jsxs)(P.Fragment,{children:[(0,P.jsxs)("div",{className:"add-row mt-4 mb-4",children:[(0,P.jsx)("h3",{className:"mb-3 mt-3",children:(0,P.jsx)(w.c,{children:"Insert PQS excel file"})}),(0,P.jsxs)("div",{className:"row",children:[(0,P.jsxs)("div",{className:"col-md-3 flex-column d-flex",children:[(0,P.jsx)("label",{className:"mb-3",children:(0,P.jsx)(w.c,{children:"From Excel file"})}),(0,P.jsxs)("label",{className:"btn btn-primary w-25",children:[(0,P.jsx)(w.c,{children:"Choose file"}),(0,P.jsx)("input",{name:"describe",type:"file",onChange:function(e){var n=(0,c.Z)(e.target.files,1)[0];_(n.name);var l=new FileReader;l.onload=function(e){var n=e.target.result,l=u.ij(n,{type:"binary"}),c=l.SheetNames[1],a=l.Sheets[c];E(a)},l.readAsBinaryString(n)},style:{display:"none"},required:!0})]}),(0,P.jsxs)("span",{className:"glyphicon glyphicon-upload mt-3 text-black",children:[" ",V]})]}),(0,P.jsxs)("div",{className:"col-md-4 flex-column d-flex ",children:[(0,P.jsx)("label",{className:" mb-3",children:(0,P.jsx)(w.c,{children:"If you click on submit, all old data will be erased!"})}),(0,P.jsx)("button",{onClick:function(){Q(!0);for(var e=[],n=u.P6.sheet_to_json(R).length+2,l=6;l<n;l++){var c=0;"string"===typeof R["P"+l]&&(c=parseFloat(R["P"+l].split("&")[0]));var a={pqsnumber:void 0===R["B"+l]?"":R["B"+l].v,type:void 0===R["C"+l]?"":R["C"+l].v,manufacturer:void 0===R["D"+l]?"":R["D"+l].v,model:void 0===R["E"+l]?"":R["E"+l].v,vaccinenetstoragecapacity:void 0===R["G"+l]?0:R["G"+l].v,coolantpacknominalcapacity:c,numbercoolantpacks:void 0===R["Q"+l]?0:R["Q"+l].v,externalvolume:void 0===R["V"+l]?0:R["V"+l].v};e.push(a)}x.Z.addpqs4(e).then((function(e){d.ZP.success((0,P.jsx)(w.c,{children:"Data imported successfully"})),B()})).catch((function(e){d.ZP.error((0,P.jsx)(w.c,{children:"There is a problem importing data"})),Q(!1)}))},className:"save-btn",children:(0,P.jsx)(w.c,{children:"Submit"})})]}),(0,P.jsx)("div",{className:"col-md-3 ml-2 mt-1",children:(0,P.jsx)("a",{href:"./sample/PQS-import-sampleV1.xlsx",download:!0,children:(0,P.jsx)(w.c,{children:"Download sample excel file"})})})]})]}),(0,P.jsx)("div",{className:"row mb-4 mt-4",children:(0,P.jsx)("div",{className:"col-md-2 d-flex align-items-center",children:(0,P.jsx)("h4",{children:(0,P.jsx)(w.c,{children:"PQS list"})})})}),(0,P.jsxs)("div",{className:"table-container",children:[(0,P.jsxs)(o.Z,{children:[(0,P.jsx)(a.Z,{children:(0,P.jsxs)(i.Z,{children:[(0,P.jsx)(s.Z,{children:(0,P.jsx)(w.c,{children:"PQS/PIS Code"})}),(0,P.jsx)(s.Z,{children:(0,P.jsx)(w.c,{children:"PQS/PIS type"})}),(0,P.jsx)(s.Z,{children:(0,P.jsx)(w.c,{children:"Manufacturer"})}),(0,P.jsx)(s.Z,{children:(0,P.jsx)(w.c,{children:"Model"})}),(0,P.jsx)(s.Z,{children:(0,P.jsx)(w.c,{children:"Net vaccine storage capacity (lit.)"})}),(0,P.jsx)(s.Z,{children:(0,P.jsx)(w.c,{children:"Coolant pack nominal capacity (lit.)"})}),(0,P.jsx)(s.Z,{children:(0,P.jsx)(w.c,{children:"Number of coolant pack"})}),(0,P.jsxs)(s.Z,{children:[(0,P.jsx)(w.c,{children:"Gross volume (lit.)"}),":"]})]})}),(0,P.jsxs)(r.Z,{children:[l&&(k>0?l.slice(f*k,f*k+k):l).map((function(e,n){return(0,P.jsxs)(i.Z,{children:[(0,P.jsx)(s.Z,{children:e.pqsnumber}),(0,P.jsx)(s.Z,{children:e.type}),(0,P.jsx)(s.Z,{children:e.manufacturer}),(0,P.jsx)(s.Z,{children:e.model}),(0,P.jsx)(s.Z,{children:e.vaccinenetstoragecapacity}),(0,P.jsx)(s.Z,{children:e.coolantpacknominalcapacity}),(0,P.jsx)(s.Z,{children:e.numbercoolantpacks}),(0,P.jsx)(s.Z,{children:e.externalvolume.toFixed(2).toString().replace(".",(0,y.p)())})]},n)})),q>0&&(0,P.jsx)(i.Z,{style:{height:53*q},children:(0,P.jsx)(s.Z,{colSpan:6})})]})]}),(0,P.jsx)(j.Z,{rowsPerPageOptions:[5,10,15,25,{label:"All",value:l.length}],colSpan:3,count:l.length,rowsPerPage:k,page:f,SelectProps:{inputProps:{"aria-label":(0,P.jsx)(w.c,{children:"rows per page"})},native:!0},labelDisplayedRows:function(e){var n=e.from,l=e.to,c=e.count;return"".concat(Math.ceil(n),"\u2013").concat(l," of ").concat(-1!==c?Math.ceil(c):"more than ".concat(l))},onPageChange:function(e,n){g(n)},onRowsPerPageChange:function(e){N(parseInt(e.target.value,10)),g(0)},ActionsComponent:S})]})]})]})}},40277:function(e,n,l){var c=l(80184);n.Z=function(){return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)("svg",{version:"1.1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",width:"121.31px",height:"122.876px",viewBox:"0 0 121.31 122.876",enableBackground:"new 0 0 121.31 122.876",xmlSpace:"preserve",children:(0,c.jsx)("g",{children:(0,c.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M90.914,5.296c6.927-7.034,18.188-7.065,25.154-0.068 c6.961,6.995,6.991,18.369,0.068,25.397L85.743,61.452l30.425,30.855c6.866,6.978,6.773,18.28-0.208,25.247 c-6.983,6.964-18.21,6.946-25.074-0.031L60.669,86.881L30.395,117.58c-6.927,7.034-18.188,7.065-25.154,0.068 c-6.961-6.995-6.992-18.369-0.068-25.397l30.393-30.827L5.142,30.568c-6.867-6.978-6.773-18.28,0.208-25.247 c6.983-6.963,18.21-6.946,25.074,0.031l30.217,30.643L90.914,5.296L90.914,5.296z"})})})})}},95907:function(e,n,l){var c=l(80184);n.Z=function(){return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",width:"30",height:"30",xmlnsXlink:"http://www.w3.org/1999/xlink","enable-background":"new 0 0 512 512",children:(0,c.jsx)("path",{d:"m455.1,137.9l-32.4,32.4-81-81.1 32.4-32.4c6.6-6.6 18.1-6.6 24.7,0l56.3,56.4c6.8,6.8 6.8,17.9 0,24.7zm-270.7,271l-81-81.1 209.4-209.7 81,81.1-209.4,209.7zm-99.7-42l60.6,60.7-84.4,23.8 23.8-84.5zm399.3-282.6l-56.3-56.4c-11-11-50.7-31.8-82.4,0l-285.3,285.5c-2.5,2.5-4.3,5.5-5.2,8.9l-43,153.1c-2,7.1 0.1,14.7 5.2,20 5.2,5.3 15.6,6.2 20,5.2l153-43.1c3.4-0.9 6.4-2.7 8.9-5.2l285.1-285.5c22.7-22.7 22.7-59.7 0-82.5z"})})})}},23821:function(e,n,l){var c=l(39281),a=l(79836),i=l(80184);n.Z=function(e){var n=e.children;return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(c.Z,{children:(0,i.jsx)(a.Z,{children:n})})})}},93650:function(){}}]);
//# sourceMappingURL=3085.9e515889.chunk.js.map