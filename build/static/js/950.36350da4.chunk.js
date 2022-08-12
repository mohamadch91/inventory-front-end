"use strict";(self.webpackChunkinventory=self.webpackChunkinventory||[]).push([[950],{5596:function(e,l,n){n.d(l,{Z:function(){return c}});var a=n(5671),r=n(3144),s=n(4569),t=n.n(s);function i(){var e=JSON.parse(localStorage.getItem("user"));return e&&e.access?"Bearer "+e.access:{}}var o="http://5.182.47.38:8001/settings/",c=new(function(){function e(){(0,a.Z)(this,e)}return(0,r.Z)(e,[{key:"getPublicContent",value:function(){return t().get(o+"all")}},{key:"addcountry",value:function(e){return console.log(e),t().post(o+"country/",e,{headers:{Authorization:i()}})}},{key:"editcountry",value:function(e){return console.log(e),t().put(o+"country/",e,{headers:{Authorization:i(),"Content-Type":"multipart/form-data"}})}},{key:"addlevel",value:function(e){return t().post(o+"level",e,{headers:{Authorization:i()}})}},{key:"getLevels",value:function(){return t().get(o+"level",{headers:{Authorization:i()}})}},{key:"putLevels",value:function(e){return console.log("vayyy"),t().put(o+"level",e,{headers:{Authorization:i()}})}},{key:"getUserBoard",value:function(){return t().get(o+"user",{headers:{Authorization:i()}})}},{key:"getModeratorBoard",value:function(){return t().get(o+"mod",{headers:{Authorization:i()}})}},{key:"getAdminBoard",value:function(){return t().get(o+"admin",{headers:{Authorization:i()}})}}]),e}())},7561:function(e,l,n){n.r(l),n.d(l,{default:function(){return f}});var a=n(2982),r=n(1413),s=n(885),t=n(2791),i=n(4912),o=n(6016),c=n.n(o),u=n(5596),d=n(184),m=n(4554),h=n(242),x=n(4512),v=n(5825),p=n(9373),j=n(890),f=function(e){var l=(0,t.useState)(new Date),n=(0,s.Z)(l,2),o=(n[0],n[1]),f=(0,t.useState)(!1),Z=(0,s.Z)(f,2),g=Z[0],N=Z[1],b=(0,t.useState)(0),C=(0,s.Z)(b,2),y=C[0],w=C[1],S=(0,t.useState)(100),k=(0,s.Z)(S,2),F=k[0],V=k[1],G=(0,t.useState)(""),q=(0,s.Z)(G,2),A=q[0],D=q[1],z=(0,t.useState)(1),B=(0,s.Z)(z,2),I=(B[0],B[1]),L=(0,t.useState)(0),P=(0,s.Z)(L,2),M=P[0],E=P[1],J=(0,t.useState)(0),O=(0,s.Z)(J,2),T=O[0],U=O[1],Y=(0,t.useState)(0),H=(0,s.Z)(Y,2),K=H[0],Q=H[1],R=(0,t.useState)(0),W=(0,s.Z)(R,2),X=W[0],$=W[1],_=(0,t.useState)(0),ee=(0,s.Z)(_,2),le=ee[0],ne=ee[1],ae=(0,t.useState)(0),re=(0,s.Z)(ae,2),se=re[0],te=re[1],ie=(0,t.useState)(0),oe=(0,s.Z)(ie,2),ce=oe[0],ue=oe[1],de=(0,t.useState)(0),me=(0,s.Z)(de,2),he=me[0],xe=me[1],ve=(0,t.useState)(0),pe=(0,s.Z)(ve,2),je=pe[0],fe=pe[1],Ze=(0,t.useState)(0),ge=(0,s.Z)(Ze,2),Ne=ge[0],be=ge[1],Ce=(0,t.useState)(null),ye=(0,s.Z)(Ce,2),we=ye[0],Se=ye[1],ke=(0,t.useState)(JSON.parse(localStorage.getItem("country"))),Fe=(0,s.Z)(ke,2),Ve=Fe[0],Ge=(Fe[1],(0,t.useState)(1)),qe=(0,s.Z)(Ge,2),Ae=qe[0],De=qe[1],ze=["Add level","Current","Planned"],Be=(0,t.useState)(0),Ie=(0,s.Z)(Be,2),Le=Ie[0],Pe=Ie[1],Me=(0,t.useState)(new Set),Ee=(0,s.Z)(Me,2),Je=Ee[0],Oe=Ee[1],Te=function(e){return 1===e},Ue=function(e){return Je.has(e)},Ye=function(){var e=Je;Ue(Le)&&(e=new Set(e.values())).delete(Le),Pe((function(e){return e+1})),Oe(e)},He=function(){Pe((function(e){return e-1}))},Ke=function(){if(!Te(Le))throw new Error("You can't skip a step that isn't optional.");Pe((function(e){return e+1})),Oe((function(e){var l=new Set(e.values());return l.add(Le),l}))};(0,t.useEffect)((function(){c().init()}),[]);var Qe=function(e){if(Se(1===Ae?null:Ae-1),e.preventDefault(),e.stopPropagation(),!1===e.currentTarget.checkValidity())e.preventDefault(),e.stopPropagation();else{var l={number:Ae,maxpop:F,minpop:y,uppervol:M,undervol:T,m25vol:K,m70vol:X,m25volnew:he,m70volnew:je,uppervolnew:ce,undervolnew:se,name:A,dryvol:le,dryvolnew:Ne,country:1,parent:we};u.Z.addlevel(l).then((function(e){var l=Je;Ue(Le)&&(l=new Set(l.values())).delete(Le),Pe((function(e){return e+1})),Oe(l),o(new Date),N(!1),w(0),V(100),D(""),I(1),E(),U(),Q(),$(),ne(),te(),ue(),xe(),fe(),be(),Se()})).catch((function(e){}))}N(!0)},Re=function(e){return!(e<0)&&(e.toString().length>0||void 0)};return(0,d.jsx)(i.Z,{noValidate:!0,validated:g,onSubmit:Qe,className:"form-sample",children:(0,d.jsxs)(m.Z,{sx:{width:"100%"},children:[(0,d.jsx)(h.Z,{activeStep:Le,children:ze.map((function(e,l){var n={};return Te(l),Ue(l)&&(n.completed=!1),(0,d.jsx)(x.Z,(0,r.Z)((0,r.Z)({},n),{},{children:(0,d.jsx)(v.Z,(0,r.Z)((0,r.Z)({},{}),{},{children:e}))}),e)}))}),Le===ze.length?(0,d.jsxs)(t.Fragment,{children:[(0,d.jsx)(j.Z,{sx:{mt:2,mb:1},children:"All steps completed - you have submited your level."}),(0,d.jsxs)(m.Z,{sx:{display:"flex",flexDirection:"row",pt:2},children:[(0,d.jsx)(m.Z,{sx:{flex:"1 1 auto"}}),(0,d.jsx)(p.Z,{onClick:function(){Pe(0)},variant:"contained",children:"Add new level"})]})]}):0===Le?(0,d.jsx)(t.Fragment,{children:(0,d.jsx)("div",{className:"row",children:(0,d.jsxs)("div",{className:"col-12 grid-margin text-black",children:[(0,d.jsxs)("h4",{className:"card-title",children:[(0,d.jsxs)(j.Z,{sx:{mt:2,mb:1},children:["Step ",Le+1]})," ","Level configurations"]}),(0,d.jsx)("p",{className:"card-description h3",children:" Level info "}),(0,d.jsx)("div",{className:"row",children:(0,d.jsxs)(i.Z.Group,{className:"row",children:[(0,d.jsx)("label",{className:"col-sm-3 col-form-label control-label",children:"Level number"}),(0,d.jsx)("div",{className:"col-sm-9",children:(0,d.jsx)(i.Z.Control,{className:"form-select",as:"select",onChange:function(e){De(parseInt(e.target.value))},value:Ae,children:(0,a.Z)(Array(Ve.levels)).map((function(e,l){return(0,d.jsx)("option",{value:l+1,children:l+1})}))})})]})}),(0,d.jsx)("div",{className:"row",children:(0,d.jsxs)(i.Z.Group,{className:"row",children:[(0,d.jsx)("label",{className:"col-sm-3 col-form-label control-label",children:"Level name"}),(0,d.jsx)("div",{className:"col-sm-9",children:(0,d.jsx)(i.Z.Control,{required:!0,isValid:function(){if(A.length>0)return!0}(),value:A,onChange:function(e){D(e.target.value)},type:"text"})})]})}),(0,d.jsx)("div",{className:"row",children:(0,d.jsxs)(i.Z.Group,{className:"row",children:[(0,d.jsxs)("label",{className:"col-sm-3 col-form-label control-label",children:["Min ",Ve.poptarget," at this level"]}),(0,d.jsx)("div",{className:"col-sm-9",children:(0,d.jsx)(i.Z.Control,{required:!0,isValid:function(){if(y.toString().length>0)return!0}(),value:y,onChange:function(e){w(e.target.value)},type:"number"})})]})}),(0,d.jsx)("div",{className:"row",children:(0,d.jsxs)(i.Z.Group,{className:"row",children:[(0,d.jsxs)("label",{className:"col-sm-3 col-form-label control-label",children:["Max ",Ve.poptarget," at this level"]}),(0,d.jsx)("div",{className:"col-sm-9",children:(0,d.jsx)(i.Z.Control,{required:!0,isValid:function(){if(F.toString().length>0)return!0}(),value:F,onChange:function(e){V(e.target.value)},type:"number"})})]})}),(0,d.jsxs)(m.Z,{sx:{display:"flex",flexDirection:"row",pt:2},children:[(0,d.jsx)(p.Z,{color:"inherit",disabled:0===Le,onClick:He,sx:{mr:1},variant:"outlined",children:"Back"}),(0,d.jsx)(m.Z,{sx:{flex:"1 1 auto"}}),Te(Le)&&(0,d.jsx)(p.Z,{color:"inherit",onClick:Ke,sx:{mr:1},variant:"contained",children:"Skip"}),(0,d.jsx)(p.Z,{onClick:Ye,variant:"contained",children:Le===ze.length-1?"Finish":"Next"})]})]})})}):1===Le?(0,d.jsx)(t.Fragment,{children:(0,d.jsxs)("div",{className:"row",children:[(0,d.jsxs)("div",{className:"col-md-12 grid-margin text-black",children:[(0,d.jsxs)("h4",{className:"card-title",children:[(0,d.jsxs)(j.Z,{sx:{mt:2,mb:1},children:["Step",Le+1]})," ","Current"]}),(0,d.jsx)("p",{className:"card-description",children:" Current Capacities "}),(0,d.jsxs)(i.Z.Group,{className:"row",children:[(0,d.jsx)("label",{className:"col-sm-3 col-form-label",children:"(+25 C) in cm3"}),(0,d.jsx)("div",{className:"col-sm-9",children:(0,d.jsx)(i.Z.Control,{required:!0,isValid:Re(K),value:K,onChange:function(e){Q(parseFloat(e.target.value))},type:"number",placeholder:"0",min:"0"})})]}),(0,d.jsxs)(i.Z.Group,{className:"row",children:[(0,d.jsx)("label",{className:"col-sm-3 col-form-label",children:"(+2- +8 C) in cm3"}),(0,d.jsx)("div",{className:"col-sm-9",children:(0,d.jsx)(i.Z.Control,{required:!0,isValid:Re(M),value:M,onChange:function(e){E(parseFloat(e.target.value))},type:"number",placeholder:"0",min:"0"})})]}),(0,d.jsxs)(i.Z.Group,{className:"row",children:[(0,d.jsx)("label",{className:"col-sm-3 col-form-label",children:"-20 C in cm3"}),(0,d.jsx)("div",{className:"col-sm-9",children:(0,d.jsx)(i.Z.Control,{required:!0,isValid:Re(T),value:T,onChange:function(e){U(parseFloat(e.target.value))},type:"number",placeholder:"0",min:"0"})})]}),(0,d.jsxs)(i.Z.Group,{className:"row",children:[(0,d.jsx)("label",{className:"col-sm-3 col-form-label",children:"-70 C in cm3"}),(0,d.jsx)("div",{className:"col-sm-9",children:(0,d.jsx)(i.Z.Control,{required:!0,isValid:Re(X),value:X,onChange:function(e){$(parseFloat(e.target.value))},type:"number",placeholder:"0",min:"0"})})]}),(0,d.jsxs)(i.Z.Group,{className:"row",children:[(0,d.jsx)("label",{className:"col-sm-3 col-form-label",children:"Dry Store in cm3"}),(0,d.jsx)("div",{className:"col-sm-9",children:(0,d.jsx)(i.Z.Control,{required:!0,isValid:Re(le),value:le,onChange:function(e){ne(parseFloat(e.target.value))},type:"number",placeholder:"0",min:"0"})})]})]}),(0,d.jsxs)(m.Z,{sx:{display:"flex",flexDirection:"row",pt:2},children:[(0,d.jsx)(p.Z,{color:"inherit",disabled:0===Le,onClick:He,sx:{mr:1},variant:"outlined",children:"Back"}),(0,d.jsx)(m.Z,{sx:{flex:"1 1 auto"}}),(0,d.jsx)(p.Z,{onClick:Ye,variant:"contained",children:Le===ze.length-1?"Finish":"Next"})]})]})}):2===Le?(0,d.jsx)(t.Fragment,{children:(0,d.jsxs)("div",{className:"row",children:[(0,d.jsxs)("div",{className:"col-md-12 grid-margin text-black",children:[(0,d.jsxs)("h4",{className:"card-title",children:[(0,d.jsxs)(j.Z,{sx:{mt:2,mb:1},children:["Step ",Le+1]})," ","Planned"]}),(0,d.jsx)("p",{className:"card-description",children:" planned Capacity "}),(0,d.jsxs)(i.Z.Group,{className:"row",children:[(0,d.jsx)("label",{className:"col-sm-3 col-form-label",children:"(+25 C) in cm3"}),(0,d.jsx)("div",{className:"col-sm-9",children:(0,d.jsx)(i.Z.Control,{required:!0,isValid:Re(he),value:he,onChange:function(e){xe(parseFloat(e.target.value))},type:"number",placeholder:"0",min:"0"})})]}),(0,d.jsxs)(i.Z.Group,{className:"row",children:[(0,d.jsx)("label",{className:"col-sm-3 col-form-label",children:"(+2 - +8 C) in cm3"}),(0,d.jsx)("div",{className:"col-sm-9",children:(0,d.jsx)(i.Z.Control,{required:!0,isValid:Re(se),value:se,onChange:function(e){te(parseFloat(e.target.value))},type:"number",placeholder:"0",min:"0"})})]}),(0,d.jsxs)(i.Z.Group,{className:"row",children:[(0,d.jsx)("label",{className:"col-sm-3 col-form-label",children:"-20 C in cm3"}),(0,d.jsx)("div",{className:"col-sm-9",children:(0,d.jsx)(i.Z.Control,{required:!0,isInvalid:!Re(ce),isValid:Re(ce),value:ce,onChange:function(e){ue(parseFloat(e.target.value))},type:"number",placeholder:"0",min:"0"})})]}),(0,d.jsxs)(i.Z.Group,{className:"row",children:[(0,d.jsx)("label",{className:"col-sm-3 col-form-label",children:"-70 C in cm3"}),(0,d.jsx)("div",{className:"col-sm-9",children:(0,d.jsx)(i.Z.Control,{required:!0,isInvalid:!Re(je),isValid:Re(je),value:je,onChange:function(e){fe(parseFloat(e.target.value))},type:"number",placeholder:"0",min:"0"})})]}),(0,d.jsxs)(i.Z.Group,{className:"row",children:[(0,d.jsx)("label",{className:"col-sm-3 col-form-label",children:"Dry Store in cm3"}),(0,d.jsx)("div",{className:"col-sm-9",children:(0,d.jsx)(i.Z.Control,{required:!0,isInvalid:!Re(Ne),isValid:Re(Ne),value:Ne,onChange:function(e){be(parseFloat(e.target.value))},type:"number",placeholder:"0",min:"0"})})]})]}),(0,d.jsxs)(m.Z,{sx:{display:"flex",flexDirection:"row",pt:2},children:[(0,d.jsx)(p.Z,{color:"inherit",disabled:0===Le,onClick:He,sx:{mr:1},variant:"outlined",children:"Back"}),(0,d.jsx)(m.Z,{sx:{flex:"1 1 auto"}}),Te(Le)&&(0,d.jsx)(p.Z,{color:"inherit",onClick:Ke,sx:{mr:1},children:"Skip"}),(0,d.jsx)(p.Z,{onClick:Qe,variant:"contained",children:"Submit"})]})]})}):"hello"]})})}}}]);
//# sourceMappingURL=950.36350da4.chunk.js.map