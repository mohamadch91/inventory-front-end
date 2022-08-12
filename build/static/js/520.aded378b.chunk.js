"use strict";(self.webpackChunkinventory=self.webpackChunkinventory||[]).push([[520,557],{8203:function(e,n,a){a.r(n),a.d(n,{default:function(){return R}});var i=a(2982),l=a(885),r=a(1413),d=a(2791),o=a(5596),t=a(4554),c=a(9373),s=a(890),u=(a(7561),a(2065)),p=a(9836),m=a(3382),g=a(3994),v=a(9281),x=a(6890),h=a(5855),b=a(720),j=a(4663),Z=a(703),f=a(615),w=a(1440),y=a(5573),C=a(7630),k=a(9e3),S=a(1428),P=a(184);function q(e,n,a,i,l,r,d,o,t,c,s,u,p,m,g,v){return{id:e,name:n,maxpop:a,minpop:i,uppervol:l,undervol:r,m25vol:d,m70vol:o,dryvol:t,m25volnew:c,m70volnew:s,uppervolnew:u,undervolnew:p,dryvolnew:m,country:g,parent:v}}(0,C.ZP)(t.Z)((function(e){var n=e.theme;return{height:300,width:"100%","& .MuiDataGrid-cell--editing":{backgroundColor:"rgb(255,215,115, 0.19)",color:"#1a3e72","& .MuiInputBase-root":{height:"100%"}},"& .Mui-error":{backgroundColor:"rgb(126,10,15, ".concat("dark"===n.palette.mode?0:.1,")"),color:n.palette.error.main}}}));function V(e,n,a){return n[a]<e[a]?-1:n[a]>e[a]?1:0}function I(e,n){return"desc"===e?function(e,a){return V(e,a,n)}:function(e,a){return-V(e,a,n)}}function L(e,n){var a=e.map((function(e,n){return[e,n]}));return a.sort((function(e,a){var i=n(e[0],a[0]);return 0!==i?i:e[1]-a[1]})),a.map((function(e){return e[0]}))}var N=[{id:"number",numeric:!1,disablePadding:!0,label:"Levels"},{id:"name",numeric:!1,disablePadding:!0,label:"name"},{id:"m25vol",numeric:!1,disablePadding:!0,label:"+25 C"},{id:"uppervol",numeric:!1,disablePadding:!0,label:"+2 - +8 C"},{id:"undervol",numeric:!1,disablePadding:!0,label:"-20 C"},{id:"m70vol",numeric:!1,disablePadding:!0,label:"-70 C"},{id:"dryvol",numeric:!1,disablePadding:!0,label:"Dry store"},{id:"m25volnew",numeric:!1,disablePadding:!0,label:"+25 C"},{id:"uppervolnew",numeric:!1,disablePadding:!0,label:"+2 - +8 C"},{id:"undervolnew",numeric:!1,disablePadding:!0,label:"-20 C"},{id:"m70volnew",numeric:!1,disablePadding:!0,label:"-70 C"},{id:"dryvolnew",numeric:!1,disablePadding:!0,label:"Dry store"},{id:"minpop",numeric:!1,disablePadding:!0,label:"Min pop"},{id:"max pop",numeric:!1,disablePadding:!0,label:"max pop"}];function A(e){e.onSelectAllClick;var n=e.order,a=e.orderBy,i=(e.numSelected,e.rowCount,e.onRequestSort);return(0,P.jsxs)(x.Z,{children:[(0,P.jsxs)(h.Z,{children:[(0,P.jsx)(g.Z,{colSpan:7}),(0,P.jsxs)(g.Z,{colSpan:4,children:["Target Population :",JSON.parse(localStorage.getItem("country")).poptarget]}),(0,P.jsx)(g.Z,{colSpan:6})]}),(0,P.jsxs)(h.Z,{children:[(0,P.jsx)(g.Z,{colSpan:3}),(0,P.jsx)(g.Z,{sx:{backgroundColor:"#82c4ed",textAlign:"center",borderLeft:"1px solid black"},colSpan:5,children:"Current values"}),(0,P.jsx)(g.Z,{sx:{backgroundColor:"#2f7ebf",textAlign:"center",borderLeft:"1px solid black",borderRight:"1px solid black"},colSpan:5,children:"Planned values"})]}),(0,P.jsx)(h.Z,{children:N.map((function(e){return(0,P.jsxs)(g.Z,{sx:"m25vol"==e.id||"m25volnew"==e.id?{borderLeft:"1px solid black"}:"dryvolnew"==e.id?{borderRight:"1px solid black"}:"",align:(e.numeric,"center"),padding:e.disablePadding?"none":"normal",sortDirection:a===e.id&&n,children:[(0,P.jsx)(b.Z,{active:a===e.id,direction:a===e.id?n:"asc",onClick:(l=e.id,function(e){i(e,l)}),children:a===e.id?(0,P.jsx)(t.Z,{component:"span",sx:y.Z,children:"desc"===n?"sorted descending":"sorted ascending"}):null}),e.label]},e.id);var l}))})]})}var D=function(e){var n=e.numSelected;return(0,P.jsx)(j.Z,{sx:(0,r.Z)({pl:{sm:2},pr:{xs:1,sm:1}},n>0&&{bgcolor:function(e){return(0,u.Fq)(e.palette.primary.main,e.palette.action.activatedOpacity)}}),children:n>0?(0,P.jsxs)(s.Z,{sx:{flex:"1 1 100%"},color:"inherit",variant:"subtitle1",component:"div",children:[n," selected"]}):(0,P.jsx)(s.Z,{sx:{flex:"1 1 100%"},variant:"h6",id:"tableTitle",component:"div",children:"Level list"})})};function R(){var e=d.useState(!1),n=(0,l.Z)(e,2),a=(n[0],n[1]),r=d.useState([]),s=(0,l.Z)(r,2),u=s[0],x=s[1],b=d.useState("asc"),j=(0,l.Z)(b,2),y=j[0],C=j[1],V=d.useState("calories"),N=(0,l.Z)(V,2),R=N[0],O=N[1],B=d.useState([]),E=(0,l.Z)(B,2),M=E[0],T=E[1],F=d.useState(!1),J=(0,l.Z)(F,2),z=J[0],G=J[1],W=d.useState(!1),H=(0,l.Z)(W,2),K=H[0],Q=H[1],U=d.useState(!0),X=(0,l.Z)(U,2),Y=X[0],$=X[1],_=d.useState(!1),ee=(0,l.Z)(_,2),ne=(ee[0],ee[1],function(){Q(!K),x(u),console.log("saved : ",u),$(!0),o.Z.putLevels(u).then((function(e){for(var n=JSON.parse(localStorage.getItem("country")),a=[],i=0;i<n.levels;i++)a.push(q(e.data[i].id,e.data[i].name,parseInt(e.data[i].maxpop),parseInt(e.data[i].minpop),e.data[i].uppervol,e.data[i].undervol,e.data[i].m25vol,e.data[i].m70vol,e.data[i].dryvol,e.data[i].m25volnew,e.data[i].m70volnew,e.data[i].uppervolnew,e.data[i].undervolnew,e.data[i].dryvolnew,e.data[i].country,e.data[i].parent));x(a)})).catch((function(e){})),a(!0)}),ae=function(e,n){$(!1);var a=e.target.value,l=a.split(".").length;if(console.log(l),l>1){var r=a.split(".")[0],d=a.split(".")[1].slice(0,2);a=r+"."+d,console.log(a)}var o=e.target,t=o.name,c=(o.value,(0,i.Z)(u));c[n][t]=a,x(c)},ie=function(e){return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g," ")},le=function(e){if(e.length>0)return!0},re=function(e){if(e.toString().length>0)return!0},de=function(e){if(e.toString().length>0)return!0},oe=function(e){var n=parseFloat(e);return console.log(n),!(n<0)&&(n.toString().length,!0)};return d.useEffect((function(){o.Z.getLevels().then((function(e){for(var n=JSON.parse(localStorage.getItem("country")),a=[],i=0;i<n.levels;i++)a.push(q(e.data[i].id,e.data[i].name,parseInt(e.data[i].maxpop),parseInt(e.data[i].minpop),e.data[i].uppervol,e.data[i].undervol,e.data[i].m25vol,e.data[i].m70vol,e.data[i].dryvol,e.data[i].m25volnew,e.data[i].m70volnew,e.data[i].uppervolnew,e.data[i].undervolnew,e.data[i].dryvolnew,e.data[i].country,e.data[i].parent));x(a)})).catch((function(e){}))}),[]),(0,P.jsxs)("div",{children:[(0,P.jsx)("div",{className:"page-header",children:(0,P.jsx)("h3",{className:"page-title",children:" Level Configurations "})}),0!==u.length&&(0,P.jsxs)("div",{children:[Y?(0,P.jsxs)(c.Z,{disabled:!0,align:"right",onClick:ne,children:[(0,P.jsx)(S.Z,{}),"SAVE"]}):(0,P.jsxs)(c.Z,{align:"right",onClick:ne,children:[(0,P.jsx)(S.Z,{}),"SAVE"]}),(0,P.jsxs)(c.Z,{align:"right",onClick:function(e){Q(!K)},children:[(0,P.jsx)(k.Z,{}),"EDIT"]})]}),(0,P.jsxs)(t.Z,{sx:{width:"100%"},children:[(0,P.jsxs)(Z.Z,{sx:{width:"100%",mb:2},children:[(0,P.jsx)(D,{numSelected:M.length}),(0,P.jsx)(v.Z,{children:(0,P.jsxs)(p.Z,{sx:{minWidth:750},"aria-labelledby":"tableTitle",size:z?"small":"medium",children:[(0,P.jsx)(A,{numSelected:M.length,order:y,orderBy:R,onSelectAllClick:function(e){if(e.target.checked){var n=u.map((function(e){return e.name}));T(n)}else T([])},onRequestSort:function(e,n){C(R===n&&"asc"===y?"desc":"asc"),O(n)},rowCount:u.length}),(0,P.jsx)(m.Z,{children:L(u,I(y,R)).map((function(e,n){var a,i=(a=e.name,-1!==M.indexOf(a)),l="enhanced-table-checkbox-".concat(n);return(0,P.jsx)(P.Fragment,{children:K?(0,P.jsxs)(h.Z,{hover:!0,role:"checkbox","aria-checked":i,tabIndex:-1,selected:i,children:[(0,P.jsx)(g.Z,{className:"text-center",scope:"row",padding:"none",children:e.id}),(0,P.jsxs)(g.Z,{component:"th",id:l,scope:"row",padding:"none",className:"text-center",children:[(0,P.jsx)("input",{required:!0,isValid:le(u[n].name),value:u[n].name,name:"name",onChange:function(e){ae(e,n)},type:"text"}),(0,P.jsx)("span",{})]}),(0,P.jsxs)(g.Z,{sx:{borderLeft:"1px solid black"},padding:"none",align:"center",children:[(0,P.jsx)("input",{required:!0,isValid:oe(u[n].m25vol),isInvalid:!oe(u[n].m25vol),value:u[n].m25vol,onChange:function(e){ae(e,n)},name:"m25vol",type:"number",placeholder:"0",min:"0"}),(0,P.jsx)("span",{})]}),(0,P.jsxs)(g.Z,{padding:"none",align:"center",children:[(0,P.jsx)("input",{required:!0,isValid:oe(u[n].uppervol),value:u[n].uppervol,onChange:function(e){ae(e,n)},name:"uppervol",type:"number",placeholder:"0",min:"0"}),(0,P.jsx)("span",{})]}),(0,P.jsxs)(g.Z,{padding:"none",align:"center",children:[(0,P.jsx)("input",{required:!0,isValid:oe(u[n].undervol),value:u[n].undervol,onChange:function(e){ae(e,n)},name:"undervol",type:"number",placeholder:"0",min:"0"}),(0,P.jsx)("span",{})]}),(0,P.jsxs)(g.Z,{padding:"none",align:"center",children:[(0,P.jsx)("input",{required:!0,isValid:oe(u[n].m70vol),value:u[n].m70vol,onChange:function(e){ae(e,n)},name:"m70vol",type:"number",placeholder:"0",min:"0"}),(0,P.jsx)("span",{})]}),(0,P.jsx)(g.Z,{padding:"none",align:"center",children:(0,P.jsx)("input",{required:!0,isValid:oe(u[n].dryvol),value:u[n].dryvol,onChange:function(e){ae(e,n)},name:"dryvol",type:"number",placeholder:"0",min:"0"})}),(0,P.jsxs)(g.Z,{sx:{borderLeft:"1px solid black"},padding:"none",align:"center",children:[(0,P.jsx)("input",{required:!0,isValid:oe(u[n].m25volnew),value:u[n].m25volnew,onChange:function(e){ae(e,n)},name:"m25volnew",type:"number",placeholder:"0",min:"0"}),(0,P.jsx)("span",{})]}),(0,P.jsx)(g.Z,{padding:"none",align:"center",children:(0,P.jsx)("input",{required:!0,isValid:oe(u[n].uppervolnew),value:u[n].uppervolnew,onChange:function(e){ae(e,n)},name:"uppervolnew",type:"number",placeholder:"0",min:"0"})}),(0,P.jsxs)(g.Z,{padding:"none",align:"center",children:[(0,P.jsx)("input",{required:!0,isValid:oe(u[n].undervolnew),value:u[n].undervolnew,onChange:function(e){ae(e,n)},name:"undervolnew",type:"number",placeholder:"0",min:"0"}),(0,P.jsx)("span",{})]}),(0,P.jsxs)(g.Z,{padding:"none",align:"center",children:[(0,P.jsx)("input",{required:!0,isValid:oe(u[n].m70volnew),value:u[n].m70volnew,onChange:function(e){ae(e,n)},name:"m70volnew",type:"number",placeholder:"0",min:"0"}),(0,P.jsx)("span",{})]}),(0,P.jsx)(g.Z,{padding:"none",sx:{borderRight:"1px solid black"},align:"center",children:(0,P.jsx)("input",{required:!0,isValid:oe(u[n].dryvolnew),value:u[n].dryvolnew,onChange:function(e){ae(e,n)},name:"dryvolnew",type:"number",placeholder:"0",min:"0"})}),(0,P.jsxs)(g.Z,{padding:"none",align:"center",children:[(0,P.jsx)("input",{required:!0,isValid:re(u[n].maxpop),value:ie(u[n].maxpop),onChange:function(e){ae(e,n)},name:"maxpop",type:"number"}),(0,P.jsx)("span",{})]}),(0,P.jsx)(g.Z,{padding:"none",align:"center",children:(0,P.jsx)("input",{required:!0,isValid:de(u[n].minpop),value:ie(u[n].minpop),onChange:function(e){ae(e,n)},name:"minpop",type:"number"})})]},e.id):(0,P.jsxs)(h.Z,{hover:!0,role:"checkbox","aria-checked":i,tabIndex:-1,selected:i,children:[(0,P.jsx)(g.Z,{className:"text-center",scope:"row",padding:"checkbox",children:e.id}),(0,P.jsx)(g.Z,{component:"th",id:l,scope:"row",className:"text-center",padding:"none",children:e.name}),(0,P.jsx)(g.Z,{sx:{borderLeft:"1px solid black"},padding:"none",align:"center",children:e.m25vol}),(0,P.jsx)(g.Z,{padding:"none",align:"center",children:e.uppervol}),(0,P.jsx)(g.Z,{padding:"none",align:"center",children:e.undervol}),(0,P.jsx)(g.Z,{padding:"none",align:"center",children:e.m70vol}),(0,P.jsx)(g.Z,{padding:"none",align:"center",children:e.dryvol}),(0,P.jsx)(g.Z,{sx:{borderLeft:"1px solid black"},padding:"none",align:"center",children:e.m25volnew}),(0,P.jsx)(g.Z,{padding:"none",align:"center",children:e.uppervolnew}),(0,P.jsx)(g.Z,{padding:"none",align:"center",children:e.undervolnew}),(0,P.jsx)(g.Z,{padding:"none",align:"center",children:e.m70volnew}),(0,P.jsx)(g.Z,{padding:"none",sx:{borderRight:"1px solid black"},align:"center",children:e.dryvolnew}),(0,P.jsx)(g.Z,{padding:"none",align:"center",children:ie(e.minpop)}),(0,P.jsx)(g.Z,{padding:"none",align:"center",children:ie(e.maxpop)})]},e.id)})}))})]})})]}),(0,P.jsx)(f.Z,{control:(0,P.jsx)(w.Z,{checked:z,onChange:function(e){G(e.target.checked)}}),label:"Dense padding"})]})]})}}}]);
//# sourceMappingURL=520.aded378b.chunk.js.map