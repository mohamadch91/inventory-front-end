"use strict";(self.webpackChunkinventory=self.webpackChunkinventory||[]).push([[8674],{98674:function(e,n,t){t.r(n),t.d(n,{default:function(){return m}});var r=t(74165),a=t(15861),s=t(29439),i=t(72791),c=t(93433),l=t(30606),o=t(80184),u=function(e){return(0,o.jsx)("div",{className:"form-check pl-2 ",children:(0,o.jsxs)("label",{className:"form-check-label",children:[(0,o.jsx)("input",{onChange:function(n){return e.onChange(n)},type:"checkbox",className:"form-check-input",value:e.value}),(0,o.jsx)("i",{className:"input-helper"}),(0,o.jsx)(l.c,{children:e.label})]})})},d=function(e){var n=e.data,t=e.setState,r=e.state,a=function(e){var n=e.target.value;r.includes(n)?t((function(e){return e.filter((function(e){return e!==n}))})):t((function(e){return[].concat((0,c.Z)(e),[n])}))};return(0,o.jsx)("div",{className:"col-lg-12 stretch-card",children:(0,o.jsx)("div",{className:"card",children:(0,o.jsxs)("div",{className:"card-body",children:[(0,o.jsx)("h4",{className:"card-title",children:"Warnings Info"}),(0,o.jsxs)("div",{className:"table-responsive",children:[(0,o.jsxs)("table",{className:"table table-bordered",children:[(0,o.jsx)("thead",{children:(0,o.jsxs)("tr",{children:[(0,o.jsxs)("th",{children:[(0,o.jsx)(l.c,{children:"#"})," "]}),(0,o.jsxs)("th",{children:[" ",(0,o.jsx)(l.c,{children:"Item Type"})," "]}),(0,o.jsxs)("th",{children:[" ",(0,o.jsx)(l.c,{children:"Code"})," "]}),(0,o.jsxs)("th",{children:[" ",(0,o.jsx)(l.c,{children:"Deadline"})," "]}),(0,o.jsxs)("th",{children:[" ",(0,o.jsx)(l.c,{children:"Service interval"})," "]}),(0,o.jsxs)("th",{children:[" ",(0,o.jsx)(l.c,{children:"Done"})," "]})]})}),(0,o.jsx)("tbody",{children:n.map((function(e,n){return(0,o.jsxs)("tr",{className:"table-danger",children:[(0,o.jsxs)("td",{children:[" ",n+1," "]},e.id+n),(0,o.jsxs)("td",{children:[" ",e.name," "]},n+e.name),(0,o.jsxs)("td",{children:[" ",e.code," "]},n+e.code),(0,o.jsxs)("td",{children:[" ",e.deadline," "]},n+e.deadline),(0,o.jsxs)("td",{children:[" ",e.interval," "]},n+e.interval),(0,o.jsx)("td",{children:(0,o.jsx)(u,{onChange:a,value:e.id})},n+"A")]},e.id)}))})]}),(0,o.jsx)("button",{type:"button",className:" mt-3 btn btn-primary btn-fw",onClick:e.onSubmit,children:(0,o.jsx)(l.c,{children:"Mark as done"})})]})]})})})},h=t(79271),x=t(91933),f=t(59909),j=t(10140),g=t(65218),m=function(){var e=i.useState([]),n=(0,s.Z)(e,2),t=n[0],c=n[1],l=i.useState(!1),u=(0,s.Z)(l,2),m=u[0],v=u[1],p=(0,h.UO)(),Z=(0,h.k6)(),b=(0,x.useQuery)([],(0,a.Z)((0,r.Z)().mark((function e(){var n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.Z.getWarningsInfo("?"+p.wType);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)}))),{refetchOnMount:!0}),k=b.data,y=b.isLoading,A=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(){var n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=[],t.map((function(e){n.push({id:e,done:!0})})),e.prev=2,v(!0),e.next=6,j.Z.postWarningsAsDone(n);case 6:200===e.sent.status&&(v(!1),g.ZP.success("Done like a charm Boss! \ud83d\ude09"),Z.push("/dashboard")),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),g.ZP.error("There was a problem reaching server, try again in a moment pls");case 13:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(){return e.apply(this,arguments)}}();return y||0===k.length||m?(0,o.jsx)(f.Z,{}):(0,o.jsx)(i.Fragment,{children:k&&(0,o.jsx)(d,{data:k,setState:c,state:t,onSubmit:A})})}},10140:function(e,n,t){var r=t(15671),a=t(43144),s=t(39877),i=t(54318),c="http://5.182.47.38:8000/dashboard",l=function(){function e(){(0,r.Z)(this,e)}return(0,a.Z)(e,[{key:"getAllDashboardItems",value:function(){return s.Z.get(c+"/item",{headers:{Authorization:(0,i.Z)()}})}},{key:"getAllFacilities",value:function(){return s.Z.get(c+"/facility",{headers:{Authorization:(0,i.Z)()}})}},{key:"getAllTablesData",value:function(){return s.Z.get(c+"/table",{headers:{Authorization:(0,i.Z)()}})}},{key:"getAllWarningsData",value:function(){return s.Z.get(c+"/maintenance",{headers:{Authorization:(0,i.Z)()}})}},{key:"getWarningsInfo",value:function(e){return s.Z.get(c+"/todo"+e,{headers:{Authorization:(0,i.Z)()}})}},{key:"getMaintenanceLog",value:function(){return s.Z.get(c+"/maintenancelog",{headers:{Authorization:(0,i.Z)()}})}},{key:"postWarningsAsDone",value:function(e){return s.Z.post(c+"/todo",e,{headers:{Authorization:(0,i.Z)()}})}},{key:"getLogDetails",value:function(e){return console.log(c+"/maintenancelog"+e),s.Z.get(c+"/maintenancelog"+e,{headers:{Authorization:(0,i.Z)()}})}}]),e}();n.Z=new l}}]);
//# sourceMappingURL=8674.7e8ef7ca.chunk.js.map