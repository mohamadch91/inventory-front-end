"use strict";(self.webpackChunkinventory=self.webpackChunkinventory||[]).push([[2963],{32963:function(e,n,s){s.r(n),s.d(n,{default:function(){return O}});var a=s(1413),t=s(15671),o=s(43144),r=s(97326),l=s(60136),i=s(54062),c=s(72791),d=s(79271),u=s(16149),m=s(60364),h=s(48858),f=s(30606),p=(s(8859),s(87462)),v=s(63366),g=s(81694),b=s.n(g),w=s(55746),x=s(91683),y=Math.pow(2,31)-1;function N(e,n,s){var a=s-Date.now();e.current=a<=y?setTimeout(n,a):setTimeout((function(){return N(e,n,s)}),y)}function C(){var e=(0,w.Z)(),n=(0,c.useRef)();return(0,x.Z)((function(){return clearTimeout(n.current)})),(0,c.useMemo)((function(){var s=function(){return clearTimeout(n.current)};return{set:function(a,t){void 0===t&&(t=0),e()&&(s(),t<=y?n.current=setTimeout(a,t):N(n,a,Date.now()+t))},clear:s}}),[])}var Z=s(72709),j=s(52134),k=s(10162),P=s(80473),E=c.createContext({onClose:function(){}}),S=["bsPrefix","closeLabel","closeButton","className","children"],L=c.forwardRef((function(e,n){var s=e.bsPrefix,a=e.closeLabel,t=e.closeButton,o=e.className,r=e.children,l=(0,v.Z)(e,S);s=(0,k.vE)(s,"toast-header");var i=(0,c.useContext)(E),d=(0,j.Z)((function(e){i&&i.onClose&&i.onClose(e)}));return c.createElement("div",(0,p.Z)({ref:n},l,{className:b()(s,o)}),r,t&&c.createElement(P.Z,{label:a,onClick:d,className:"ml-2 mb-1","data-dismiss":"toast"}))}));L.displayName="ToastHeader",L.defaultProps={closeLabel:"Close",closeButton:!0};var R=L,T=(0,s(66543).Z)("toast-body"),D=["bsPrefix","className","children","transition","show","animation","delay","autohide","onClose"],B=c.forwardRef((function(e,n){var s=e.bsPrefix,a=e.className,t=e.children,o=e.transition,r=void 0===o?Z.Z:o,l=e.show,i=void 0===l||l,d=e.animation,u=void 0===d||d,m=e.delay,h=void 0===m?3e3:m,f=e.autohide,g=void 0!==f&&f,w=e.onClose,x=(0,v.Z)(e,D);s=(0,k.vE)(s,"toast");var y=(0,c.useRef)(h),N=(0,c.useRef)(w);(0,c.useEffect)((function(){y.current=h,N.current=w}),[h,w]);var j=C(),P=!(!g||!i),S=(0,c.useCallback)((function(){P&&(null==N.current||N.current())}),[P]);(0,c.useEffect)((function(){j.set(S,y.current)}),[j,S]);var L=(0,c.useMemo)((function(){return{onClose:w}}),[w]),R=!(!r||!u),T=c.createElement("div",(0,p.Z)({},x,{ref:n,className:b()(s,a,!R&&(i?"show":"hide")),role:"alert","aria-live":"assertive","aria-atomic":"true"}),t);return c.createElement(E.Provider,{value:L},R&&r?c.createElement(r,{in:i,unmountOnExit:!0},T):T)}));B.displayName="Toast";var I=Object.assign(B,{Body:T,Header:R}),F=s(65218),U=s(80184),M=function(e){(0,l.Z)(s,e);var n=(0,i.Z)(s);function s(e){var o;return(0,t.Z)(this,s),(o=n.call(this,e)).handleClosesnack=function(e,n){"clickaway"!==n&&o.setState({snackopen:!1})},o.handleClickShowPassword=function(){o.setState({values:(0,a.Z)((0,a.Z)({},o.state.values),{},{showPassword:!o.state.values.showPassword})})},o.handleLogin=o.handleLogin.bind((0,r.Z)(o)),o.onChangeUsername=o.onChangeUsername.bind((0,r.Z)(o)),o.onChangePassword=o.onChangePassword.bind((0,r.Z)(o)),o.handleClickShowPassword=o.handleClickShowPassword.bind((0,r.Z)(o)),o.alerthandle=o.alerthandle.bind((0,r.Z)(o)),o.state={username:"",password:"",content:"",loading:!1,name:"",values:{showPassword:!1},snackopen:!1,loadfile:!1,type:"success",progress:0,source:null,open:!1},o}return(0,o.Z)(s,[{key:"alerthandle",value:function(e,n){this.setState({content:e,type:n,snackopen:!0})}},{key:"onChangeUsername",value:function(e){console.log(e.target.value),this.setState({username:e.target.value,name:e.target.value})}},{key:"onChangePassword",value:function(e){this.setState({password:e.target.value})}},{key:"handleLogin",value:function(e){var n=this;if(e.preventDefault(),this.setState({loading:!0}),""==this.state.username)return F.ZP.error((0,U.jsx)(f.c,{children:"Please enter username"})),void this.setState({loading:!1});if(""==this.state.password)return F.ZP.error((0,U.jsx)(f.c,{children:"Password is required"})),void this.setState({loading:!1});var s=this.props,a=s.dispatch,t=s.history;a((0,h.x4)(this.state.username,this.state.password)).then((function(e){F.ZP.success((0,U.jsx)(f.c,{children:"Login Successfull"})),t.push("/dashboard"),window.location.reload()})).catch((function(e){F.ZP.error((0,U.jsx)(f.c,{children:"Login Failed"})),n.setState({loading:!1})}))}},{key:"handleMouseDownPassword",value:function(e){e.preventDefault()}},{key:"render",value:function(){var e=this,n=this.props,s=n.isLoggedIn;n.message;return console.log(s),s?(0,U.jsx)(d.l_,{to:"/dashboard"}):(0,U.jsxs)("section",{className:"background-radial-gradient overflow-hidden w-100",children:[(0,U.jsx)("div",{className:"container mobile-padding px-4 py-5 px-md-5 text-center text-lg-start my-5",children:(0,U.jsxs)("div",{className:"row mobile gx-lg-5 align-items-center mb-5 new_row ",children:[(0,U.jsxs)("div",{className:"col-lg-6 mb-5 zero_margin mb-lg-0",style:{Zindex:"10",marginRight:"10%"},children:[(0,U.jsxs)("h1",{className:"my-5 new-margin  display-5 fw-bold ",style:{color:"hsl(218, 81%, 95%)",fontSize:"30px"},children:["Inventory and Gap analyses system ",(0,U.jsx)("br",{}),(0,U.jsx)("span",{style:{color:"hsl(218, 81%, 75%)"}})]}),(0,U.jsx)("img",{className:"who",src:"./who-emblem.png"})]}),(0,U.jsxs)("div",{className:"offset-1 offset-sm-0 col-lg-4 zero_margin mb-5 mb-lg-0 position-relative mt-5",children:[(0,U.jsx)("div",{id:"radius-shape-1",className:"position-absolute rounded-circle shadow-5-strong"}),(0,U.jsx)("div",{id:"radius-shape-2",className:"position-absolute shadow-5-strong"}),(0,U.jsx)("div",{className:"card bg-glass new-margin  mb-5 mt-5",children:(0,U.jsx)("div",{className:"card-body px-5 py-5 px-md-5 col-md-12",children:(0,U.jsxs)(u.Z,{onSubmit:this.handleLogin,ref:function(n){e.form=n},children:[(0,U.jsxs)("div",{className:"form-outline mb-4 mt-2",children:[(0,U.jsx)("label",{className:"form-label",htmlFor:"form3Example3",children:"Username"}),(0,U.jsx)("input",{onChange:function(n){e.onChangeUsername(n)},type:"text",id:"form3Example3",className:"form-control"})]}),(0,U.jsxs)("div",{className:"form-outline mb-4",children:[(0,U.jsx)("label",{className:"form-label",htmlFor:"form3Example4",children:"Password"}),(0,U.jsx)("input",{onChange:function(n){e.onChangePassword(n)},type:"password",id:"form3Example4",className:"form-control"})]}),(0,U.jsx)("div",{className:"form-check d-flex justify-content-center mb-4"}),(0,U.jsxs)("button",{type:"submit",className:"btn sign btn-primary btn-block mb-2",children:[(0,U.jsx)("h3",{className:"m-auto",children:"SIGN IN "}),this.state.loading&&(0,U.jsx)("span",{className:"mr-2 pr-1 pl-2 spinner-border spinner-border-sm"})]})]})})})]})]})}),(0,U.jsx)(I,{style:{position:"absolute",top:"90vh",right:"18vw",backgroundColor:"success"==this.state.type?"hsl(218, 81%, 95%)":"#F8D7DA",color:"#000"},onClose:function(n){e.handleClosesnack(n)},show:this.state.snackopen,delay:3e3,autohide:!0,className:"d-inline-block m-1",bg:this.state.type,children:(0,U.jsx)(I.Body,{children:this.state.content})})]})}}]),s}(c.Component);var O=(0,m.$j)((function(e){return{isLoggedIn:e.auth.isLoggedIn,message:e.message.message}}))(M)},91683:function(e,n,s){s.d(n,{Z:function(){return t}});var a=s(72791);function t(e){var n=function(e){var n=(0,a.useRef)(e);return n.current=e,n}(e);(0,a.useEffect)((function(){return function(){return n.current()}}),[])}},80473:function(e,n,s){var a=s(87462),t=s(63366),o=s(52007),r=s.n(o),l=s(72791),i=s(81694),c=s.n(i),d=["label","onClick","className"],u={label:r().string.isRequired,onClick:r().func},m=l.forwardRef((function(e,n){var s=e.label,o=e.onClick,r=e.className,i=(0,t.Z)(e,d);return l.createElement("button",(0,a.Z)({ref:n,type:"button",className:c()("close",r),onClick:o},i),l.createElement("span",{"aria-hidden":"true"},"\xd7"),l.createElement("span",{className:"sr-only"},s))}));m.displayName="CloseButton",m.propTypes=u,m.defaultProps={label:"Close"},n.Z=m},72709:function(e,n,s){var a,t=s(87462),o=s(63366),r=s(81694),l=s.n(r),i=s(72791),c=s(26752),d=s(71380),u=s(67202),m=["className","children"],h=((a={})[c.d0]="show",a[c.cn]="show",a),f=i.forwardRef((function(e,n){var s=e.className,a=e.children,r=(0,o.Z)(e,m),f=(0,i.useCallback)((function(e){(0,u.Z)(e),r.onEnter&&r.onEnter(e)}),[r]);return i.createElement(c.ZP,(0,t.Z)({ref:n,addEndListener:d.Z},r,{onEnter:f}),(function(e,n){return i.cloneElement(a,(0,t.Z)({},n,{className:l()("fade",s,a.props.className,h[e])}))}))}));f.defaultProps={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1},f.displayName="Fade",n.Z=f}}]);
//# sourceMappingURL=2963.41b94f84.chunk.js.map