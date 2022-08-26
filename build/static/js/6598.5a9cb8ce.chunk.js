"use strict";(self.webpackChunkinventory=self.webpackChunkinventory||[]).push([[6598],{96598:function(e,t,a){a.r(t),a.d(t,{Country:function(){return C},default:function(){return f}});var l=a(29439),s=a(4942),n=a(15671),o=a(43144),r=a(97326),i=a(60136),c=a(54062),d=a(72791),u=a(94912),m=a(17994),h=a(78559),p=a.n(h),g=a(34045),v=a(65218),y=a(87649),x=a(30606),j=a(80184);delete p().Icon.Default.prototype._getIconUrl,p().Icon.Default.mergeOptions({iconRetinaUrl:a(6431),iconUrl:a(37093),shadowUrl:a(68858)});var C=function(e){(0,i.Z)(a,e);var t=(0,c.Z)(a);function a(e){var l;return(0,n.Z)(this,a),(l=t.call(this,e)).changestate=function(e,t){l.setState((0,s.Z)({},t,e.target.value))},l.handleChange=function(e){l.setState({startDate:e})},l.handleSubmit=function(e){e.preventDefault(),e.stopPropagation();var t=e.currentTarget;if(!l.isCountryCodeValid()||!l.isCurrencyValid()||!l.isCountryValid())return l.setState({validated:!1}),e.preventDefault(),e.stopPropagation(),void v.Am.error("complete form correctly");if(!1===t.checkValidity())e.preventDefault(),e.stopPropagation(),v.Am.error("complete form correctly");else{l.setState({validated:!0});var a=new FormData;a.append("country",l.state.CountryName),a.append("codecountry",l.state.CountryCode),a.append("currency",l.state.Currency),a.append("levels",l.state.levels),null!==l.state.logo&&"string"!==typeof l.state.logo&&a.append("logo",l.state.logo),null!==l.state.slogo&&"string"!==typeof l.state.slogo&&a.append("secondLogo",l.state.slogo),a.append("poptarget",l.state.targetpopulation),a.append("poprate",l.state.growthRate),a.append("havehr",l.state.enableHR),a.append("mainlocation",l.state.mainlocation),a.append("logo2",l.state.logo2),a.append("usingtool",l.state.requiredcapacities),a.append("usingmaintenance",l.state.enableMaintaining),l.state.user.admin&&Object.keys(l.state.country).length?(a.append("id",l.state.country.id),m.Z.editcountry(a).then((function(e){var t=JSON.parse(localStorage.getItem("country"));localStorage.setItem("country",JSON.stringify(e.data));var a=JSON.parse(localStorage.getItem("country"));if(a.levels>t.levels)for(var s=0;s<a.levels-t.levels;s++){var n={maxpop:0,minpop:0,uppervol:0,undervol:0,m25vol:0,m70vol:0,m25volnew:0,m70volnew:0,uppervolnew:0,undervolnew:0,name:"levels"+(t.levels+s+1),dryvol:0,dryvolnew:0,country:1,parent:t.levels+s-1};m.Z.addlevel(n).then((function(e){console.log(e)})).catch((function(e){console.log(e)}))}l.setState({CountryName:a.country,CountryCode:a.codecountry,Currency:a.currency,levels:a.levels,logo:a.logo,slogo:a.secondLogo,growthRate:a.poprate,targetpopulation:a.poptarget,enableHR:a.havehr,mainlocation:a.mainlocation,requiredcapacities:a.usingtool,enableMaintaining:a.usingmaintenance}),l.alerthandle("Country changed successfully","success"),v.Am.success("Country changed successfully")})).catch((function(e){l.alerthandle("Country changed unsuccessfully","error"),v.Am.error("Country changed unsuccessfully")}))):m.Z.addcountry(a).then((function(e){l.alerthandle("Country added successfully","success"),v.Am.success("Country added successfully"),localStorage.setItem("country",JSON.stringify(e.data));for(var t=JSON.parse(localStorage.getItem("country")),a=0;a<t.levels;a++){var s={maxpop:0,minpop:0,uppervol:0,undervol:0,m25vol:0,m70vol:0,m25volnew:0,m70volnew:0,uppervolnew:0,undervolnew:0,name:"levels"+a,dryvol:0,dryvolnew:0,country:1,parent:0===a?null:a-1};m.Z.addlevel(s).then((function(e){console.log(e)})).catch((function(e){console.log(e)}))}l.setState({CountryName:t.country,CountryCode:t.codecountry,Currency:t.currency,levels:t.levels,logo:t.logo,slogo:t.secondLogo,growthRate:t.poprate,targetpopulation:t.poptarget,enableHR:t.havehr,mainlocation:t.mainlocation,requiredcapacities:t.usingtool,enableMaintaining:t.usingmaintenance})})).catch((function(e){l.alerthandle("Country added unsuccessfully","error"),v.Am.error("Country added unsuccessfully")}))}},l.isCountryCodeValid=function(){return 0===l.state.CountryCode.length||!(l.state.CountryCode.length>3)&&(!(l.state.CountryCode.length<3)&&!/\d/.test(l.state.CountryCode))},l.isCountryValid=function(){return l.state.CountryName.length>1&&!/\d/.test(l.state.CountryName)},l.isCurrencyValid=function(){return l.state.Currency.length>0&&l.state.Currency.length<4&&!/\d/.test(l.state.Currency)},l.handleClosesnack=function(e,t){"clickaway"!==t&&l.setState({snackopen:!1})},l.state={levels:4,validated:!1,CountryName:"",CountryCode:"",Currency:"",logo:null,slogo:null,growthRate:0,mainlocation:"",enableHR:!1,enableMaintaining:!1,targetpopulation:"General population",requiredcapacities:!0,excelData:[],user:JSON.parse(localStorage.getItem("user")),country:JSON.parse(localStorage.getItem("country")),put:!1,snackopen:!1,type:"success",isCountyValid:!1,isCountyCodeValid:!1,isCurrencyValid:!1},l.handleChange=l.handleChange.bind((0,r.Z)(l)),l.handleSubmit=l.handleSubmit.bind((0,r.Z)(l)),l.handleExcelChange=l.handleExcelChange.bind((0,r.Z)(l)),l.isCountryValid=l.isCountryValid.bind((0,r.Z)(l)),l.isCurrencyValid=l.isCurrencyValid.bind((0,r.Z)(l)),l.isCountryCodeValid=l.isCountryCodeValid.bind((0,r.Z)(l)),l.handlemapclick=l.handlemapclick.bind((0,r.Z)(l)),l}return(0,o.Z)(a,[{key:"alerthandle",value:function(e,t){this.setState({content:e,type:t,snackopen:!0})}},{key:"handlemapclick",value:function(e){this.setState({mainlocation:e.latlng})}},{key:"handleExcelChange",value:function(e){var t=this,a=(0,l.Z)(e.target.files,1)[0],s=new FileReader;s.onload=function(e){var a=e.target.result,l=g.ij(a,{type:"binary"}),s=l.SheetNames[0],n=l.Sheets[s],o=g.P6.sheet_to_csv(n,{header:1});t.setState({excelData:o})},s.readAsBinaryString(a)}},{key:"componentDidMount",value:function(){var e=JSON.parse(localStorage.getItem("user")),t=JSON.parse(localStorage.getItem("country"));0!==Object.keys(t).length&&this.setState({CountryName:t.country,CountryCode:t.codecountry,Currency:t.currency,levels:t.levels,logo:t.logo,slogo:t.secondLogo,growthRate:t.poprate,targetpopulation:t.poptarget,enableHR:t.havehr,mainlocation:t.mainlocation,requiredcapacities:t.usingtool,enableMaintaining:t.usingmaintenance,country:t}),this.setState({user:e})}},{key:"render",value:function(){var e=this;return(0,j.jsxs)("div",{children:[(0,j.jsx)("div",{className:"page-header",children:(0,j.jsxs)("h3",{className:"page-title",children:[" ",(0,j.jsx)(x.c,{children:"Settings"})," "]})}),(0,j.jsx)("div",{className:"row",children:(0,j.jsx)("div",{className:"col-12 grid-margin",children:(0,j.jsx)("div",{className:"card",children:(0,j.jsxs)("div",{className:"card-body",children:[(0,j.jsx)("h4",{className:"card-title",children:(0,j.jsx)(x.c,{children:"Add Country"})}),(0,j.jsxs)(u.Z,{noValidate:!0,validated:this.state.validated,onSubmit:this.handleSubmit,className:"form-sample",children:[(0,j.jsxs)("h3",{className:" card-description text-bold",children:[" ",(0,j.jsxs)(x.c,{children:["Country info"," "]})]}),(0,j.jsxs)("div",{className:"row",children:[(0,j.jsx)("div",{className:"col-md-6",children:(0,j.jsxs)(u.Z.Group,{className:"row",children:[(0,j.jsx)("label",{className:"col-sm-3 col-form-label control-label control-label",children:(0,j.jsx)(x.c,{children:"     Country"})}),(0,j.jsx)("div",{className:"col-sm-9",children:(0,j.jsx)(u.Z.Control,{isValid:this.isCountryValid(),isInvalid:!this.isCountryValid(),value:this.state.CountryName,onChange:function(t){e.setState({CountryName:t.target.value})},required:!0,placeholder:"Example: USA",type:"text"})})]})}),(0,j.jsx)("div",{className:"col-md-6",children:(0,j.jsxs)(u.Z.Group,{className:"row",children:[(0,j.jsx)("label",{className:"col-sm-3 col-form-label control-label",children:(0,j.jsx)(x.c,{children:"  Country code"})}),(0,j.jsx)("div",{className:"col-sm-9",children:(0,j.jsx)(u.Z.Control,{disabled:!this.state.user.admin,required:!0,isInvalid:!this.isCountryCodeValid(),isValid:this.isCountryCodeValid(),value:this.state.CountryCode,onChange:function(t){var a=t.target.value.toString().toUpperCase();e.setState({CountryCode:a})},placeholder:"Example: ABC",type:"text"})})]})})]}),(0,j.jsxs)("div",{className:"row",children:[(0,j.jsx)("div",{className:"col-md-6",children:(0,j.jsxs)(u.Z.Group,{className:"row",children:[(0,j.jsx)("label",{className:"col-sm-3 col-form-label control-label",children:(0,j.jsx)(x.c,{children:"   Currency"})}),(0,j.jsx)("div",{className:"col-sm-9",children:(0,j.jsx)("div",{className:"input-group",children:(0,j.jsx)(u.Z.Control,{required:!0,disabled:!this.state.user.admin,isInvalid:!this.isCurrencyValid(),isValid:this.isCurrencyValid(),value:this.state.Currency,onChange:function(t){e.setState({Currency:t.target.value})},placeholder:"Example: $",type:"text",className:"form-control","aria-label":"Amount (to the nearest dollar)"})})})]})}),(0,j.jsx)("div",{className:"col-md-6",children:(0,j.jsxs)(u.Z.Group,{className:"row",children:[(0,j.jsx)("label",{className:"col-sm-3 col-form-label control-label",children:(0,j.jsx)(x.c,{children:"   Allow levels"})}),(0,j.jsxs)("div",{style:{marginTop:"2.5%"},className:"col-sm-9 ",children:[(0,j.jsx)(u.Z.Control,{disabled:!this.state.user.admin,required:!0,onChange:function(t){e.setState({levels:t.target.value})},type:"range",min:"1",max:"8",step:"1",value:this.state.levels}),(0,j.jsxs)("label",{className:"col-sm-3 col-form-label  ",children:[(0,j.jsx)(x.c,{children:"    value :"})," ",this.state.levels," "]})]})]})})]}),(0,j.jsxs)("div",{className:"row",children:[(0,j.jsx)("div",{className:"col-md-6",children:(0,j.jsxs)(u.Z.Group,{className:"row",children:[(0,j.jsx)("label",{className:"col-sm-3 col-form-label ",children:(0,j.jsxs)(x.c,{children:["   logo ",(0,j.jsx)("br",{})," jpg, jpeg, png ",(0,j.jsx)("br",{}),"aspect ratio 1:1"]})}),(0,j.jsx)("div",{className:"col-sm-9 mt-3",children:(0,j.jsxs)("div",{className:"custom-file ",children:[(0,j.jsx)(u.Z.Control,{onChange:function(t){e.setState({logo:t.target.files[0]})},disabled:!this.state.user.admin,type:"file",className:"form-control visibility-hidden",id:"customFileLang",lang:"es",accept:"image/png, image/jpeg, image/jpg"}),(0,j.jsxs)("label",{className:"custom-file-label",htmlFor:"customFileLang",children:[null!==this.state.logo?this.state.logo.name:"Upload image","string"===typeof this.state.logo?this.state.logo.split("/")[2]:""]})]})})]})}),(0,j.jsx)("div",{className:"col-md-6",children:(0,j.jsxs)(u.Z.Group,{className:"row",children:[(0,j.jsx)("label",{className:"col-sm-3 col-form-label ",children:(0,j.jsxs)(x.c,{children:[" second logo ",(0,j.jsx)("br",{})," jpg, jpeg, png",(0,j.jsx)("br",{})," aspect ratio 1:1"]})}),(0,j.jsx)("div",{className:"col-sm-9 mt-3",children:(0,j.jsxs)("div",{className:"custom-file ",children:[(0,j.jsx)(u.Z.Control,{onChange:function(t){e.setState({slogo:t.target.files[0]})},disabled:!this.state.user.admin,type:"file",className:"form-control visibility-hidden",id:"customFileLang1",lang:"es",accept:"image/png, image/jpeg, image/jpg"}),(0,j.jsxs)("label",{className:"custom-file-label",htmlFor:"customFileLang1",children:[null!==this.state.slogo?this.state.slogo.name:"Upload image","string"===typeof this.state.slogo?this.state.slogo.split("/")[2]:""]})]})})]})})]}),(0,j.jsx)("div",{className:"row",children:(0,j.jsx)("div",{className:"col-md-6 ",children:(0,j.jsxs)(u.Z.Group,{className:" row  ",children:[(0,j.jsx)("label",{className:"col-sm-3 col-form-label control-label",children:(0,j.jsx)(x.c,{children:"  Annual Population Growth Rate"})}),(0,j.jsx)("div",{className:"col-sm-9",children:(0,j.jsxs)("div",{className:"input-group ",children:[(0,j.jsx)(u.Z.Control,{disabled:!this.state.user.admin,required:!0,isValid:!0,value:this.state.growthRate,onChange:function(t){var a=t.target.value,l=a.split(".").length;if(console.log(l),l>1){var s=a.split(".")[0],n=a.split(".")[1].slice(0,2);a=s+"."+n,console.log(a)}e.setState({growthRate:parseFloat(a)})},type:"number",className:"form-control","aria-label":"Amount (to the nearest dollar)"}),(0,j.jsx)("div",{className:"input-group-append h-75 pb-3",children:(0,j.jsx)("span",{className:"input-group-text",children:"%"})})]})})]})})}),(0,j.jsxs)("div",{className:"row",children:[(0,j.jsx)("div",{className:"col-md-6",children:(0,j.jsxs)(u.Z.Group,{className:"row",children:[(0,j.jsx)("label",{className:"col-sm-5 col-form-label",children:(0,j.jsx)(x.c,{children:"   Enable HR"})}),(0,j.jsx)("div",{className:"col-sm-7",children:(0,j.jsx)(u.Z.Check,{disabled:!this.state.user.admin,checked:this.state.enableHR,value:this.state.enableHR,onChange:function(t){e.setState({enableHR:!e.state.enableHR})},type:"switch",label:"",id:"disabled-custom-switch"})})]})}),(0,j.jsx)("div",{className:"col-md-6",children:(0,j.jsxs)(u.Z.Group,{className:"row",children:[(0,j.jsx)("label",{className:"col-sm-5 col-form-label",children:(0,j.jsx)(x.c,{children:"   Enable Maintenance"})}),(0,j.jsx)("div",{className:"col-sm-7",children:(0,j.jsx)(u.Z.Check,{checked:this.state.enableMaintaining,disabled:!this.state.user.admin,onChange:function(t){e.setState({enableMaintaining:!e.state.enableMaintaining})},type:"switch",label:"",id:"disabled-custom"})})]})})]}),(0,j.jsxs)("div",{className:"row",children:[(0,j.jsx)("div",{className:"col-md-6",children:(0,j.jsxs)(u.Z.Group,{className:"row",children:[(0,j.jsx)("label",{className:"col-sm-3 col-form-label control-label",children:(0,j.jsx)(x.c,{children:"       Target Population"})}),(0,j.jsx)("div",{className:"col-sm-9",children:(0,j.jsxs)(u.Z.Control,{required:!0,disabled:!this.state.user.admin,onChange:function(t){e.setState({targetpopulation:t.target.value})},value:this.state.targetpopulation,className:"form-select",as:"select",children:[(0,j.jsx)("option",{value:"General population",children:(0,j.jsx)(x.c,{children:"      General population"})}),(0,j.jsx)("option",{value:"Under-1 Population",children:(0,j.jsx)(x.c,{children:"      Under-1 Population"})})]})})]})}),(0,j.jsx)("div",{className:"col-md-6",children:(0,j.jsxs)(u.Z.Group,{className:"row",children:[(0,j.jsx)("label",{className:"col-sm-3 col-form-label control-label",children:(0,j.jsx)(x.c,{children:"        Require Capacity"})}),(0,j.jsx)("div",{className:"col-sm-9",children:(0,j.jsxs)(u.Z.Control,{required:!0,disabled:!this.state.user.admin,onChange:function(t){var a="true"===t.target.value;e.setState({requiredcapacities:a})},value:this.state.requiredcapacities,className:"form-select",as:"select",children:[(0,j.jsx)("option",{value:!0,children:(0,j.jsx)(x.c,{children:"     Estimate required capacity (in MS Excel)"})}),(0,j.jsx)("option",{value:!1,children:(0,j.jsx)(x.c,{children:"              Enter required capacity manually"})})]})})]})})]}),(0,j.jsxs)(u.Z.Group,{className:"row",children:[(0,j.jsxs)("div",{className:"col-md-6",children:[(0,j.jsx)("label",{className:"col-sm-3 col-form-label ",children:(0,j.jsx)(x.c,{children:"  Main Location"})}),(0,j.jsx)("div",{className:"map",children:(0,j.jsx)(y.Z,{loca:this.state.mainlocation,handleChange:this.handlemapclick})})]}),(0,j.jsx)("div",{className:"col-md-6",children:(0,j.jsx)(u.Z.Group,{className:"mt-5",children:(0,j.jsx)("div",{className:"col-sm-12",children:(0,j.jsx)(u.Z.Control,{disabled:!0,value:this.state.mainlocation,onChange:function(t){e.setState({mainlocation:t.target.value})},type:"text"})})})})]}),this.state.country!==[]&&void 0!==this.state.country&&this.state.user.admin?(0,j.jsx)("button",{type:"submit",className:"btn btn-primary mr-2",children:(0,j.jsx)(x.c,{children:"   Save"})}):(0,j.jsx)("button",{type:"submit",disabled:!0,className:"btn btn-primary mr-2",children:(0,j.jsx)(x.c,{children:"   Save"})})]})]})})})})]})}}]),a}(d.Component),f=C},87649:function(e,t,a){var l=a(29439),s=a(72791),n=a(46293),o=a(69961),r=a(17626),i=a(6042),c=a(59500),d=a(78559),u=a.n(d),m=a(80184);function h(){var e=(0,s.useState)(null),t=(0,l.Z)(e,2),a=t[0],o=t[1],r=(0,n.zV)({click:function(){r.locate()},locationfound:function(e){o(e.latlng),r.flyTo(e.latlng,r.getZoom())}});return null===a?null:(0,m.jsx)(m.Fragment,{})}delete u().Icon.Default.prototype._getIconUrl,u().Icon.Default.mergeOptions({iconRetinaUrl:a(6431),iconUrl:a(37093),shadowUrl:a(68858)});var p=function(e){var t=(0,n.Sx)();return(0,s.useEffect)((function(){if(t){var a=u().DomUtil.create("div","legend"),l=u().Control.extend({options:{position:"bottomleft"},onAdd:function(){return a.textContent="Click on map",a}});t.on("click",(function(t){window.navigator.geolocation.getCurrentPosition(console.log,console.log),a.textContent=t.latlng,function(t){e.change(t)}(t)})),t.addControl(new l)}}),[t]),null};t.Z=function(e){var t=(0,s.useState)(null),a=(0,l.Z)(t,2),n=a[0],d=a[1];return(0,m.jsxs)(o.h,{center:[52.22,21.01178],zoom:13,scrollWheelZoom:!0,children:[(0,m.jsx)(r.I,{attribution:'&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),(0,m.jsx)(p,{change:function(t){e.handleChange(t),d(t.latlng)}}),(0,m.jsx)(m.Fragment,{children:n&&(0,m.jsx)(i.J,{position:n,draggable:!0,children:(0,m.jsxs)(c.G,{position:n,children:["Current location: ",(0,m.jsx)("pre",{children:JSON.stringify(n,null,2)})]})})}),(0,m.jsx)(h,{})]})}}}]);
//# sourceMappingURL=6598.5a9cb8ce.chunk.js.map