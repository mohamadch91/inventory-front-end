"use strict";(self.webpackChunkinventory=self.webpackChunkinventory||[]).push([[9108],{9108:function(e,n,s){s.r(n);var r=s(74165),i=s(15861),a=(s(72791),s(79271)),c=s(91933),t=s(10140),d=s(24849),l=s(30606),h=s(40355),o=s(80184);n.default=function(){var e=(0,a.UO)(),n=(0,c.useQuery)(["log-details"],(0,i.Z)((0,r.Z)().mark((function n(){var s;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.Z.getLogDetails("?item="+e.id);case 2:return s=n.sent,n.abrupt("return",s.data);case 4:case"end":return n.stop()}}),n)}))),{refetchOnMount:!0}),s=n.data,x=n.isLoading;if(x)return(0,o.jsx)(d.Z,{});if(!x&&0===s.length)return(0,o.jsx)(h.Z,{});var j=s.maintanances;return(0,o.jsx)("div",{className:"d-flex mb-3",children:(0,o.jsx)("div",{className:"col-lg-12 stretch-card",children:(0,o.jsx)("div",{className:"card",children:(0,o.jsxs)("div",{className:"card-body",children:[(0,o.jsx)("h4",{className:"card-title",children:(0,o.jsxs)(l.c,{children:["Details of ",(0,o.jsx)("i",{children:"".concat(s.type)})," maintenance performed by ","".concat(s.gp),": #","".concat(s.code)]})}),(0,o.jsx)("div",{className:"table-responsive",children:(0,o.jsxs)("table",{className:"table table-bordered",children:[(0,o.jsx)("thead",{children:(0,o.jsxs)("tr",{children:[(0,o.jsxs)("th",{children:[" ",(0,o.jsx)(l.c,{children:"#"})," "]}),(0,o.jsxs)("th",{children:[" ",(0,o.jsx)(l.c,{children:"Name"})," "]}),(0,o.jsxs)("th",{children:[" ",(0,o.jsx)(l.c,{children:"Code"})," "]}),(0,o.jsxs)("th",{children:[" ",(0,o.jsx)(l.c,{children:"interval"})," "]}),(0,o.jsxs)("th",{children:[" ",(0,o.jsx)(l.c,{children:"interval in location"})," "]}),(0,o.jsxs)("th",{children:[" ",(0,o.jsx)(l.c,{children:"Deadline"})," "]}),(0,o.jsxs)("th",{children:[" ",(0,o.jsx)(l.c,{children:" Deadline in location"})," "]}),(0,o.jsxs)("th",{children:[" ",(0,o.jsx)(l.c,{children:"Status"})," "]})]})}),(0,o.jsx)("tbody",{children:j.map((function(e,n){return(0,o.jsxs)("tr",{className:"table-info",children:[(0,o.jsxs)("td",{children:[" ",n+1," "]},e.id+n),(0,o.jsxs)("td",{children:[" ",e.name," "]},n+e.name),(0,o.jsxs)("td",{children:[" ",e.code," "]},n+e.code),(0,o.jsxs)("td",{children:[" ",e.interval," "]},n+e.interval),(0,o.jsxs)("td",{children:[" ",e.loc_interval," "]},n+e.loc_interval),(0,o.jsxs)("td",{children:[" ",e.deadline," "]},n+e.deadline),(0,o.jsx)("td",{children:e.deadline_in_loc},n+e.deadline_in_loc),(0,o.jsx)("td",{children:(0,o.jsx)("label",{className:"badge badge-".concat(e.done?"success":"warning","  "),style:{fontSize:"12px"},children:e.done?"Done":"Pending"})},n+"A")]},e.id)}))})]})})]})})})})}},40355:function(e,n,s){s(72791);var r=s(30606),i=s(80184);n.Z=function(e){return(0,i.jsxs)("div",{className:"alert alert-danger w-50 text-center m-auto",role:"alert",children:[(0,i.jsx)("p",{className:"display-4",children:(0,i.jsx)(r.c,{children:"We've been looking everywhere, nothing was found ... \ud83d\ude1f"})}),e.message&&(0,i.jsx)("p",{children:e.message})]})}},24849:function(e,n,s){var r=s(87462),i=s(63366),a=s(81694),c=s.n(a),t=s(72791),d=s(10162),l=["bsPrefix","variant","animation","size","children","as","className"],h=t.forwardRef((function(e,n){var s=e.bsPrefix,a=e.variant,h=e.animation,o=e.size,x=e.children,j=e.as,u=void 0===j?"div":j,m=e.className,v=(0,i.Z)(e,l),f=(s=(0,d.vE)(s,"spinner"))+"-"+h;return t.createElement(u,(0,r.Z)({ref:n},v,{className:c()(m,f,o&&f+"-"+o,a&&"text-"+a)}),x)}));h.displayName="Spinner",n.Z=h}}]);
//# sourceMappingURL=9108.869c9c99.chunk.js.map