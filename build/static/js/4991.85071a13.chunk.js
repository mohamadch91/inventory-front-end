"use strict";(self.webpackChunkinventory=self.webpackChunkinventory||[]).push([[4991],{30027:function(e,t,n){var a=n(29439),i=n(1413),r=n(16149),l=n(78083),s=n(85109),c=n(97915),o=n(30606),d=n(12902),u=n(60324),f=n(72791),v=n(80184),m="0123456789.:",x=function(e){return(0,v.jsx)("div",{children:(0,v.jsxs)(s.F.Option,(0,i.Z)((0,i.Z)({},e),{},{children:[(0,v.jsx)("input",{type:"checkbox",checked:e.isSelected,onChange:function(){return null}})," ",(0,v.jsx)("label",{children:(0,v.jsx)(o.c,{children:e.label})})]}))})};t.Z=function(e){var t,n=e.field,i=e.onChangeHandler,s=e.defaultValue,o=e.separator,p=(0,f.useState)([]),h=(0,a.Z)(p,2),g=h[0],j=h[1];if("select"===n.type){if("other_services"!==n.stateName)return(0,v.jsxs)(r.Z.Control,{onChange:function(e){return i(e.target.value,n)},className:"form-control form-select",multiple:"other_services"===n.stateName,as:"select",disabled:n.active?!n.active:n.disabled,id:"field-".concat(n.id),children:[(0,v.jsx)(d.W,{children:function(e,t){t.i18n;return(0,v.jsx)("option",{i18n:!0,value:"",selected:!0,children:e("Please select")})}}),n.params.map((function(e){return(0,v.jsx)("option",{disabled:e.enabled?!e.enabled:e.active?!e.active:!e.enable,value:e.id,selected:parseInt(s)===e.id,children:e.name||e.describe})}))]});var b=[],y=[];console.log(y);for(var S=0;S<n.params.length;S++){var Z=n.params[S].enabled?!n.params[S].enabled:n.params[S].active?!n.params[S].active:!n.params[S].enable,N=!(void 0===s||null===s||!s.includes(n.params[S].id));Z||b.push({label:n.params[S].name||n.params[S].describe,value:n.params[S].id}),N&&y.push({label:n.params[S].name||n.params[S].describe,value:n.params[S].id})}return(0,v.jsx)(c.ZP,{options:b,isMulti:!0,closeMenuOnSelect:!1,hideSelectedOptions:!1,components:{Option:x},onChange:function(e){console.log(e);var t=[],a="";if(null!==e){for(var r=0;r<e.length;r++)t.push(e[r].value),a+=e[r].value;j(e),y=e,i(a,n)}else i("",n),j([]),y=[]},allowSelectAll:!0,value:g.length>0?g:y})}if("bool"===n.type)return(0,v.jsx)(v.Fragment,{children:(0,v.jsxs)(r.Z.Control,{onChange:function(e){return i("true"===e.target.value,n)},className:"form-control form-select",as:"select",disabled:n.active?!n.active:n.disabled,id:"field-".concat(n.id),children:[(0,v.jsx)(d.W,{children:function(e,t){t.i18n;return(0,v.jsx)("option",{i18n:!0,value:"",selected:null===s||void 0===s,disabled:!0,children:e("Please select")})}}),(0,v.jsx)("option",{selected:null!==s&&void 0!==s&&s,value:!0,children:"Yes"}),(0,v.jsx)("option",{selected:null!==s&&void 0!==s&&!s,value:!1,children:"No"})]})});"en"!=u.Z.language&"ar"!=u.Z.language&&(m="0123456789,:");var w=null===(t=n.validation)||void 0===t?void 0:t[0];return(0,v.jsx)(r.Z.Control,{onKeyPress:function(e){if(e.persist(),"number"===n.type)if(w&&null!==w&&void 0!==w&&w.float){if(-1===m.indexOf(e.key))return void e.preventDefault()}else if(w&&!1===(null===w||void 0===w?void 0:w.float)&&-1==="0123456789".indexOf(e.key))return void e.preventDefault();i(e.target.value,n)},lang:"en-US",onChange:function(e){return i(e.target.value,n)},value:s,className:"form-control",id:"field-".concat(n.id),disabled:n.active?!n.active:n.disabled,min:w&&-1!==(null===w||void 0===w?void 0:w.min)?w.min:void 0,max:w&&-1!==(null===w||void 0===w?void 0:w.max)?w.max:void 0,step:w&&null!==w&&void 0!==w&&w.float?Math.pow(.1,w.floating).toFixed(w.floating):void 0,maxLength:w&&-1!==(null===w||void 0===w?void 0:w.digits)?w.digits:void 0,onBlur:function(e){if(e.persist(),o){var t=(0,l.k)(e.target.value);i(t,n)}}})}},66437:function(e,t,n){n(72791);var a=n(64554),i=n(36151),r=n(30606),l=n(2997),s=n(80906),c=n(79271),o=n(80184);t.Z=function(e){var t=e.activeStep,n=e.handleBack,d=e.handleNext,u=e.stepsLength,f=e.isNextDisabled,v=e.id;return(0,c.k6)(),(0,o.jsx)("div",{className:"row mt-2",children:(0,o.jsxs)(a.Z,{sx:{display:"flex",flexDirection:"row",pt:2},children:[(0,o.jsxs)(i.Z,{disabled:0===t,onClick:n,sx:{mr:1},type:"button",children:[(0,o.jsx)(l.Z,{sx:{mr:2}}),(0,o.jsx)(r.c,{children:"Back"})]}),(0,o.jsx)(a.Z,{sx:{flex:"0.5 0.5 auto"}}),(0,o.jsxs)(o.Fragment,{children:["new"!==v&&t!==u&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("button",{className:"btn btn-primary w-10 ",children:(0,o.jsx)(r.c,{children:"SAVE ALL"})}),(0,o.jsx)(a.Z,{sx:{flex:"0.6 0.5 auto"}}),(0,o.jsxs)(i.Z,{disabled:f,onClick:d,type:"button",sx:{mr:1},children:[(0,o.jsx)(r.c,{children:"Next"}),(0,o.jsx)(s.Z,{})]})]}),"new"!==v&&t===u&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(a.Z,{sx:{flex:"0.48 0.5 auto"}}),(0,o.jsx)("button",{className:"btn btn-primary w-10 ",value:"saveAll",name:"saveaLL",children:(0,o.jsx)(r.c,{children:"SAVE ALL"})})]}),"new"===v&&t!==u&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(a.Z,{sx:{flex:"0.6 0.5 auto"}}),(0,o.jsxs)(i.Z,{disabled:f,onClick:d,type:"button",sx:{mr:1},children:[(0,o.jsx)(r.c,{children:"Next"}),(0,o.jsx)(s.Z,{})]})]}),"new"===v&&t===u&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(a.Z,{sx:{flex:"0.6 0.5 auto"}}),(0,o.jsx)("button",{className:"btn btn-primary w-10 ",name:"save",value:"x",children:(0,o.jsx)(r.c,{children:"SAVE ALL"})}),(0,o.jsx)("button",{className:"btn btn-primary w-10 ",name:"saveNew",value:"y",children:(0,o.jsx)(r.c,{children:"SAVE and New"})})]})]})]})})}},78083:function(e,t,n){n.d(t,{k:function(){return a}});var a=function(e){if(void 0!==e&&null!==e&&""!==e)return function(e,t){function n(e){return e.split("").reverse().join("")}var a=/(\d{3}(?!.*\.|$))/g;t||(t=" ");return n(n(e.toString()).replace(a,"$1"+t))}(e=parseInt(e))}},67116:function(e,t,n){n.d(t,{p:function(){return r}});var a=n(60324),i=function(){return a.Z.language},r=function(){return"ar"===i()||"en"===i()?".":","}},95804:function(e,t,n){n.d(t,{D:function(){return r},q:function(){return l}});var a=n(78083),i=n(67116),r=function(e,t){if("string"!==typeof e&&"number"!==typeof e)return!1;var n=e.replaceAll(" ","");return!(void 0===t||!n)&&(-1!==t.min&&t.min>n?"value must greater than ".concat((0,a.k)(t.min)):-1!==t.max&&t.max<n?"value must less than ".concat((0,a.k)(t.max)):(console.log(n.split(".")),!!(t.float&&n.includes((0,i.p)())&&n.split((0,i.p)())[1].length>t.floating)&&"value must has ".concat(t.floating," decimals")))},l=function(e){return!/^([0-1]?[0-9]|2[0-4]):([0-5][0-9])(:[0-5][0-9])?$/.test(e)&&"value must be in (hh:mm) format!"}},14991:function(e,t,n){n.r(t),n.d(t,{default:function(){return I}});var a=n(37762),i=n(74165),r=n(1413),l=n(15861),s=n(29439),c=n(72791),o=n(91933),d=n(79271),u=n(59909),f=n(70242),v=n(74512),m=n(15825),x=n(16149),p=n(74936),h=n(30027),g=[{id:"PQSPISCode",name:"PQS/PIS Code:",topic:"",type:"text",active:!0,disabled:!1,required:!1,state:"PQSPISCode",params:[]},{id:"PQSPISType",name:"PQS/PIS-Type:",topic:"",type:"text",active:!0,disabled:!1,required:!1,state:"PQSPISType",params:[]},{id:"PQSPISManufacturer",name:"PQS/PIS-Manufacturer",topic:"",type:"text",active:!0,disabled:!1,required:!1,state:"PQSPISManufacturer",params:[]},{id:"PQSPISRefrigerantGas",name:"PQS/PIS-Refrigerant gas",topic:"",type:"text",active:!0,disabled:!1,required:!1,state:"PQSPISRefrigerantGas",params:[]}],j=n(95804),b=n(30606),y=n(97915),S=n(66437),Z={IsItFunctioning:["ReasonsForNotFunctioning","NotInUseSince"]},N={IsItFunctioning:["ReasonsForNotFunctioning","NotInUseSince"]},w=n(67116),P=n(80184),k={id:"facility",type:"text",active:!1,disabled:!0,state:"facility",name:""};var I=function(){var e,t,n=(0,c.useState)(0),I=(0,s.Z)(n,2),C=I[0],Q=I[1],F=(0,c.useState)({}),_=(0,s.Z)(F,2),O=_[0],L=_[1],A=(0,c.useState)({}),q=(0,s.Z)(A,2),M=q[0],H=q[1],G=(0,c.useState)(null),E=(0,s.Z)(G,2),R=E[0],V=E[1],D=(0,c.useState)(null),T=(0,s.Z)(D,2),B=T[0],U=T[1],z=(0,c.useState)(!1),W=(0,s.Z)(z,2),$=W[0],K=W[1],Y=(0,d.UO)().id,J=(0,d.k6)(),X=new URLSearchParams(J.location.search).get("parent"),ee=(0,o.useQuery)(["item-default-value",Y],(0,l.Z)((0,i.Z)().mark((function e(){var t,n,a,l;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t={code:"Unique code generated by IGA",same_item:"1"},"new"!==Y){e.next=3;break}return e.abrupt("return",t);case 3:return e.next=5,p.Z.getItems(Y);case 5:for(l in n=e.sent,(a=n.data[0]).PQSPISCode&&K(!0),a)"number"===typeof a[l]&&a[l]%1!==0&&(a[l]=a[l].toFixed(2).toString().replace(".",(0,w.p)()));return e.abrupt("return",(0,r.Z)({},a));case 10:case"end":return e.stop()}}),e)}))),{refetchOnMount:!0,onSuccess:function(e){L((function(t){return(0,r.Z)((0,r.Z)({},e),t)}))}}).isLoading,te=(0,o.useQuery)(["item-classes-and-types"],(0,l.Z)((0,i.Z)().mark((function e(){var t;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.Z.getItemClassesAndTypes(X);case 2:return t=e.sent,L((function(e){return(0,r.Z)((0,r.Z)({},e),{},{facility:t.data.facility})})),e.abrupt("return",t.data.data.filter((function(e){return e.item_type.length>0})));case 5:case"end":return e.stop()}}),e)}))),{refetchOnMount:!0,onSuccess:function(e){if("new"===Y){var t,n;V(e[0]),U(null===(t=e[0])||void 0===t||null===(n=t.item_type)||void 0===n?void 0:n[0])}else{var a;console.log(O);var i=e.find((function(e){var t;return(null===e||void 0===e||null===(t=e.item_class)||void 0===t?void 0:t.id)===O.item_class}));console.log(i);var r=null===i||void 0===i||null===(a=i.item_type)||void 0===a?void 0:a.find((function(e){return e.id===O.item_type}));V(i),U(r)}}}),ne=te.data,ae=te.isLoading,ie=(0,o.useQuery)(["pqs",null===B||void 0===B?void 0:B.id],(0,l.Z)((0,i.Z)().mark((function e(){var t,n,a;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=0,"new"==Y?n=null===B||void 0===B?void 0:B.id:(n=1,O!=={}&&(n=O.item_type)),e.next=4,p.Z.getPQS(n);case 4:return a=e.sent,e.abrupt("return",null===a||void 0===a||null===(t=a.data)||void 0===t?void 0:t.map((function(e){var t;return{label:null!==(t=e.pqsnumber)&&void 0!==t?t:e.pqscode,value:e}})));case 6:case"end":return e.stop()}}),e)}))),{refetchOnMount:!0}),re=ie.data,le=ie.isLoading,se=(0,o.useQuery)(["item-fields",null===R||void 0===R?void 0:R.item_class.id,null===B||void 0===B?void 0:B.id,X],(0,l.Z)((0,i.Z)().mark((function e(){var t,n,r,l,s,c,o,d,u;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.Z.getItemFields(R.item_class.id,B.id,X);case 2:if(t=e.sent,n={},!t.data.fields){e.next=28;break}l=(0,a.Z)(t.data.fields),e.prev=6,l.s();case 8:if((s=l.n()).done){e.next=17;break}if(o=s.value,"new"===Y||"same_item"!==o.field.state){e.next=12;break}return e.abrupt("continue",15);case 12:(d=null!==(c=n[o.field.topic])&&void 0!==c?c:[]).push(o.field),n[o.field.topic]=d;case 15:e.next=8;break;case 17:e.next=22;break;case 19:e.prev=19,e.t0=e.catch(6),l.e(e.t0);case 22:return e.prev=22,l.f(),e.finish(22);case 25:u=null!==(r=Object.keys(n)[0])&&void 0!==r?r:"Type",void 0===n[u]&&(n[u]=[]),n[u].unshift({id:"code",name:"Item code:",topic:u,type:"text",active:!1,disabled:!0,required:!1,state:"code",params:[]});case 28:return e.abrupt("return",n);case 29:case"end":return e.stop()}}),e,null,[[6,19,22,25]])}))),{enabled:!!B}),ce=se.data,oe=se.isLoading,de=se.isIdle,ue=se.refetch;(0,c.useEffect)((function(){B&&ue()}),[B]);var fe=function(){var e=(0,r.Z)({},M),t=Object.values(ce)[C];for(var n in t.forEach((function(t){console.log(O[t.state]),!t.required||O[t.state]||function(e,t){for(var n in N)if(N[n].indexOf(e)>=0)return void 0!==t[n]&&null!==t[n]&&t[n];return!1}(t.state,O)||0===O[t.state]||"bool"===t.type&&void 0!==O[t.state]&&null!==O[t.state]||(e[t.state]="this field is required!")})),Z){var a=Z[n];!0===O[n]&&a.forEach((function(t){delete e[t]}))}return H(e),Object.keys(e).length>0},ve=function(){fe()||Q((function(e){return e+1}))},me=function(){Q((function(e){return e-1})),H({})},xe=function(){var e=(0,l.Z)((0,i.Z)().mark((function e(t,n){var a,l,s,c,o,d;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(o in l=(0,j.D)(t,null===(a=n.validation)||void 0===a?void 0:a[0]),(s=(0,r.Z)({},O))[n.state]=t,L(s),c=(0,r.Z)({},M),l?c[n.state]=l:delete c[n.state],Z)d=Z[o],console.log(O[o]),d.forEach((function(e){delete c[e]}));console.log(c),H(c);case 9:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),pe=function(){var e=(0,l.Z)((0,i.Z)().mark((function e(t){var n,a,l,s,c,o,d,u;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),!fe()){e.next=3;break}return e.abrupt("return");case 3:for(a in n=(0,r.Z)({},O),Z)l=Z[a],!0===O[a]&&l.forEach((function(e){delete n[e]}));if(!$)for(c in s=function(e){g.find((function(t){return t.state===e}))&&delete n[e]},O)s(c);n.item_class=R.item_class.id,n.item_type=B.id,n.facility=n.facility.id,o=function(e){var t=Object.values(ce).flat().find((function(t){return t.state===e}));return void 0===t?("string"===typeof n[e]&&n[e].includes((0,w.p)())&&(n[e]=parseFloat(n[e].replace(",","."))),"continue"):""===n[e]||null===n[e]?(delete n[e],"continue"):void("string"===typeof n[e]&&(console.log(Object.values(ce).flat()),console.log(e),"number"===t.type&&(n[e]=parseFloat(n[e].replace(",",".")))))},e.t0=(0,i.Z)().keys(n);case 11:if((e.t1=e.t0()).done){e.next=18;break}if(d=e.t1.value,"continue"!==o(d)){e.next=16;break}return e.abrupt("continue",11);case 16:e.next=11;break;case 18:return u="saveNew"===window.event.submitter.name?"new":"edit",e.next=21,"new"===Y?p.Z.postItem(n):p.Z.putItem(n);case 21:e.sent,"new"===u?window.location.reload():(J.push("/items/list"),L(n));case 23:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),he=function(){var e=(0,l.Z)((0,i.Z)().mark((function e(t){return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log(t.target.value),console.log(ne),V(ne[t.target.value]),U(ne[t.target.value].item_type[0]);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ge=function(){var e,t=null===(e=re.find((function(e){return e.label===O.PQSPISCode})))||void 0===e?void 0:e.value;if(void 0!==t){var n=(0,r.Z)({},O),a=re.find((function(e){var n;return(null===e||void 0===e||null===(n=e.value)||void 0===n?void 0:n.id)===(null===t||void 0===t?void 0:t.id)})).value;3==a.ptype?(n.PQSPISManufacturer=a.make,n.PQSPISRefrigerantGas=a.refrigerant,n.PQSPISType=a.model,n.PQSPISTemperatureWorkingZone=a.refrigerant,n.NetVaccineStorageCapacity=a.refrigeratorcapacity.toFixed(2).toString().replace(".",(0,w.p)()),n.FreezerNetCapacity=a.freezercapacity.toFixed(2).toString().replace(".",(0,w.p)()),n.Height=a.h.toFixed(2).toString().replace(".",(0,w.p)()),n.Width=a.w.toFixed(2).toString().replace(".",(0,w.p)()),n.Length=a.l.toFixed(2).toString().replace(".",(0,w.p)())):(n.PQSPISType=a.type,n.PQSPISManufacturer=a.manufacturer,n.PQSPISRefrigerantGas="--",n.PQSPISTemperatureWorkingZone="--",n.NetVaccineStorageCapacity=a.vaccinenetstoragecapacity.toFixed(2).toString().replace(".",(0,w.p)()),n.CoolantPackNominalCapacity=a.coolantpacknominalcapacity.toFixed(2).toString().replace(".",(0,w.p)()),n.NumberOfCoolantPacksRequired=a.numbercoolantpacks,n.ExternalSize=a.externalvolume.toFixed(2).toString().replace(".",(0,w.p)())),L(n)}};return ee||ae||oe||de||le?(0,P.jsx)(u.Z,{}):(0,P.jsxs)("form",{onSubmit:pe,children:[(0,P.jsx)("h3",{className:"page-title mb-3",children:(0,P.jsx)(b.c,{children:"Item information"})}),(0,P.jsx)("div",{className:"mt-3",children:(0,P.jsx)("div",{className:"card",children:(0,P.jsxs)("div",{className:"card-body pb-3",children:[(0,P.jsx)("div",{className:"row pb-4",style:{overflow:"auto"},children:(0,P.jsx)(f.Z,{activeStep:C,children:Object.keys(ce).map((function(e){return(0,P.jsx)(v.Z,{children:(0,P.jsx)(m.Z,{style:{width:"max-content"},children:(0,P.jsx)(b.c,{children:e})})},e)}))})}),(0,P.jsx)(S.Z,{handleBack:me,handleNext:ve,activeStep:C,id:Y,stepsLength:Object.keys(ce).length-1,isNextDisabled:Object.keys(M).length>0})]})})}),(0,P.jsx)("div",{className:"mt-3",children:(0,P.jsx)("div",{className:"card",children:(0,P.jsxs)("div",{className:"card-body pb-3",children:[(0,P.jsx)("div",{className:"row",children:(0,P.jsxs)(x.Z.Group,{className:"row mb-0",children:[(0,P.jsxs)("label",{className:"col-sm-4 text-right",style:{display:"flex",justifyContent:"flex-end",alignItems:"center",lineHeight:"1.4",textAlign:"right"},children:[(0,P.jsx)(b.c,{children:"Facility Name"}),":"]}),(0,P.jsx)("div",{className:"col-sm-8",children:(0,P.jsx)(h.Z,{field:k,defaultValue:null===(e=O.facility)||void 0===e?void 0:e.name})})]})}),(0,P.jsx)("div",{className:"row mt-3",children:(0,P.jsxs)(x.Z.Group,{className:"row mb-0",children:[(0,P.jsx)("label",{className:"col-sm-4 text-left control-label",style:{display:"flex",justifyContent:"flex-end",alignItems:"center",lineHeight:"1.4",textAlign:"right"},children:(0,P.jsx)(b.c,{children:"Item class"})}),(0,P.jsx)("div",{className:"col-sm-8",children:(0,P.jsx)(x.Z.Control,{onChange:he,className:"form-select",as:"select",value:null===ne||void 0===ne?void 0:ne.findIndex((function(e){return(null===e||void 0===e?void 0:e.item_class.id)===(null===R||void 0===R?void 0:R.item_class.id)})),disabled:0!==C||"new"!==Y,children:ne.map((function(e,t){return(0,P.jsx)("option",{value:t,children:e.item_class.title})}))})})]})}),(0,P.jsx)("div",{className:"row mt-3",children:(0,P.jsxs)(x.Z.Group,{className:"row mb-0",children:[(0,P.jsx)("label",{className:"col-sm-4 text-right control-label",style:{display:"flex",justifyContent:"flex-end",alignItems:"center",lineHeight:"1.4",textAlign:"right"},children:(0,P.jsx)(b.c,{children:"Items category"})}),(0,P.jsx)("div",{className:"col-sm-8",children:(0,P.jsx)(x.Z.Control,{onChange:function(e){U(R.item_type[e.target.value])},className:"form-select",as:"select",value:null===R||void 0===R?void 0:R.item_type.findIndex((function(e){return(null===e||void 0===e?void 0:e.id)===(null===B||void 0===B?void 0:B.id)})),disabled:0!==C||"new"!==Y,children:null===R||void 0===R?void 0:R.item_type.map((function(e,t){return(0,P.jsx)("option",{value:t,children:e.title})}))})})]})})]})})}),(0,P.jsx)("div",{className:"mt-3",children:(0,P.jsx)("div",{className:"card",children:(0,P.jsxs)("div",{className:"card-body",children:[0===C&&(0,P.jsx)(P.Fragment,{children:B.havepqs&&(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)("div",{className:"row",children:(0,P.jsxs)(x.Z.Group,{className:"row mb-0",children:[(0,P.jsx)("label",{className:"col-sm-4 text-right",style:{display:"flex",justifyContent:"flex-end",alignItems:"center",lineHeight:"1.4",textAlign:"right"},children:(0,P.jsx)(b.c,{children:"Is this item from PQS/PIS list?"})}),(0,P.jsx)("div",{className:"col-sm-6",children:(0,P.jsx)("input",{name:"is-from-pqs",type:"checkbox",onChange:function(){K((function(e){return!e}))},checked:$})}),(0,P.jsx)("hr",{className:"my-3"})]})}),$&&g.map((function(e){var t;return(0,P.jsx)("div",{className:"row",children:(0,P.jsxs)(x.Z.Group,{className:"row mb-0",children:[(0,P.jsx)("label",{className:"col-sm-4 text-right ".concat(e.required?"control-label":""),style:{display:"flex",justifyContent:"flex-end",alignItems:"center",lineHeight:"1.4",textAlign:"right"},children:e.name}),(0,P.jsx)("div",{className:"".concat("PQSPISCode"===e.state?"col-sm-7":"col-sm-8"),children:re&&"PQSPISCode"===e.state?(0,P.jsx)(y.ZP,{options:re,onChange:function(t){xe(t.label,e)},value:{label:O.PQSPISCode,value:null===(t=re.find((function(e){return e.label===O.PQSPISCode})))||void 0===t?void 0:t.value},onBlur:function(t){var n=t.target.value;n.length>0&&xe(n,e)}}):(0,P.jsx)(h.Z,{field:e,onChangeHandler:xe,defaultValue:O[e.state]})}),"PQSPISCode"===e.state&&(0,P.jsx)("div",{className:"col-sm-1",children:(0,P.jsx)("button",{className:"btn btn-primary w-100 h-100",onClick:ge,type:"button",children:(0,P.jsx)(b.c,{children:"Load"})})}),(0,P.jsx)("hr",{className:"my-3"})]})},e.name)}))]})}),null===(t=Object.values(ce)[C])||void 0===t?void 0:t.map((function(e){if(!function(e,t){for(var n in Z)if(Z[n].indexOf(e)>=0)return void 0!==t[n]&&null!==t[n]&&!t[n];return!0}(e.state,O))return null;var t=!!M[e.state];return(0,P.jsx)("div",{className:"row",children:(0,P.jsxs)(x.Z.Group,{className:"row mb-0",children:[(0,P.jsx)("label",{className:"col-sm-4 text-right ".concat(e.required?"control-label":""),style:{display:"flex",justifyContent:"flex-end",alignItems:"center",lineHeight:"1.4",textAlign:"right"},children:(0,P.jsx)(b.c,{children:e.name})}),(0,P.jsx)("div",{className:"col-sm-8",children:(0,P.jsx)(h.Z,{field:e,onChangeHandler:xe,defaultValue:O[e.state]})}),t&&(0,P.jsxs)("div",{className:"row",children:[(0,P.jsx)("div",{className:"col-sm-4"}),(0,P.jsx)("div",{className:"col-sm-8",children:(0,P.jsx)("p",{className:"my-1 ml-2 text-danger",children:(0,P.jsx)(b.c,{children:M[e.state]})})})]}),(0,P.jsx)("hr",{className:"my-3"})]})},e.name)}))]})})}),(0,P.jsx)("div",{className:"mt-3",children:(0,P.jsx)("div",{className:"card",children:(0,P.jsx)("div",{className:"card-body py-3",children:(0,P.jsx)(S.Z,{handleBack:me,handleNext:ve,id:Y,activeStep:C,stepsLength:Object.keys(ce).length-1,isNextDisabled:Object.keys(M).length>0})})})})]})}},2997:function(e,t,n){var a=n(80184);t.Z=function(){return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("svg",{version:"1.1",id:"Capa_1",x:"0px",y:"0px",width:"20px",height:"20px",viewBox:"0 0 400 400",style:{marginRight:"5px"},children:(0,a.jsx)("path",{fill:"currentColor",d:"M382.688,182.686H59.116l77.209-77.214c6.764-6.76,6.764-17.726,0-24.485c-6.764-6.764-17.73-6.764-24.484,0L5.073,187.757 c-6.764,6.76-6.764,17.727,0,24.485l106.768,106.775c3.381,3.383,7.812,5.072,12.242,5.072c4.43,0,8.861-1.689,12.242-5.072 c6.764-6.76,6.764-17.726,0-24.484l-77.209-77.218h323.572c9.562,0,17.316-7.753,17.316-17.315 C400.004,190.438,392.251,182.686,382.688,182.686z"})})})}},80906:function(e,t,n){var a=n(80184);t.Z=function(){return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("svg",{version:"1.1",id:"Capa_1",x:"0px",y:"0px",width:"20px",height:"20px",viewBox:"0 0 1024 1024",children:(0,a.jsx)("path",{fill:"currentColor",d:"M754.752 480H160a32 32 0 100 64h594.752L521.344 777.344a32 32 0 0045.312 45.312l288-288a32 32 0 000-45.312l-288-288a32 32 0 10-45.312 45.312L754.752 480z"})})})}}}]);
//# sourceMappingURL=4991.85071a13.chunk.js.map