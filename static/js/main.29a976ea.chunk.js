(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{30:function(e,t,a){e.exports=a(65)},35:function(e,t,a){},62:function(e,t,a){},65:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(26),o=a.n(c),i=a(3),l=a(4),s=a(6),u=a(5),m=a(7),p=a(67),d=a(69),h=a(68),f=(a(35),a(37),a(8)),v=a.n(f),b=a(12),E=a(29),g=a(17),y=a(13),C=a.n(y),O=r.a.createContext(),j=function(e,t){switch(t.type){case"DELETE_CONTACT":return Object(g.a)({},e,{contacts:e.contacts.filter(function(e){return e.id!==t.payload})});case"ADD_CONTACT":return Object(g.a)({},e,{contacts:[t.payload].concat(Object(E.a)(e.contacts))});case"UPDATE_CONTACT":return Object(g.a)({},e,{contacts:e.contacts.map(function(e){return e.id===t.payload.id?e=t.payload:e})});default:return e}},w=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={contacts:[],dispatch:function(e){return a.setState(function(t){return j(t,e)})}},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=Object(b.a)(v.a.mark(function e(){var t;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.a.get("https://jsonplaceholder.typicode.com/users");case 2:t=e.sent,this.setState({contacts:t.data});case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement(O.Provider,{value:this.state},this.props.children)}}]),t}(n.Component),N=O.Consumer,k=a(66),x=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={showContactInfo:!1},a.onShowClick=function(){a.setState({showContactInfo:!a.state.showContactInfo})},a.onDeleteClick=function(){var e=Object(b.a)(v.a.mark(function e(t,a){return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,C.a.delete("https://jsonplaceholder.typicode.com/users/".concat(t));case 3:a({type:"DELETE_CONTACT",payload:t}),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),a({type:"DELETE_CONTACT",payload:t});case 9:case"end":return e.stop()}},e,this,[[0,6]])}));return function(t,a){return e.apply(this,arguments)}}(),a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.props.contact,a=t.id,n=t.name,c=t.email,o=t.phone,i=this.state.showContactInfo;return r.a.createElement(N,null,function(t){var l=t.dispatch;return r.a.createElement("div",{className:"card card-body mb-3"},r.a.createElement("h4",null,n," ",r.a.createElement("i",{onClick:e.onShowClick,className:i?"fas fa-chevron-circle-up":"fas fa-chevron-circle-down",style:{cursor:"pointer"}}),r.a.createElement("i",{className:"fas fa-times-circle",style:{cursor:"pointer",float:"right",color:"red"},onClick:e.onDeleteClick.bind(e,a,l)}),r.a.createElement(k.a,{to:"contacts/edit/".concat(a)},r.a.createElement("i",{className:"fas fa-pencil-alt",style:{cursor:"pointer",float:"right",color:"black",marginRight:"1rem"}}))),i?r.a.createElement("ul",{className:"list-group"},r.a.createElement("li",{className:"list-group-item"},"Email: ",c),r.a.createElement("li",{className:"list-group-item"},"Phone: ",o)):null)})}}]),t}(n.Component),S=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(N,null,function(e){var t=e.contacts;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{className:"display-4 mb-2"},r.a.createElement("span",{className:"text-danger"},"Contact")," List"),t.map(function(e){return r.a.createElement(x,{key:e.id,contact:e})}))})}}]),t}(n.Component);function A(e){var t=e.branding;return r.a.createElement("nav",{className:"navbar navbar-expand-sm navbar-dark bg-info mb-3 py-0"},r.a.createElement("div",{className:"container"},r.a.createElement("a",{href:"/",className:"navbar-brand"},t),r.a.createElement("div",null,r.a.createElement("ul",{className:"navbar-nav mr-auto"},r.a.createElement("li",{className:"nav-item active"},r.a.createElement(k.a,{to:"/",className:"nav-link"},r.a.createElement("i",{className:"fas fa-home"})," Home")),r.a.createElement("li",{className:"nav-item active"},r.a.createElement(k.a,{to:"/contacts/add",className:"nav-link"},r.a.createElement("i",{className:"fas fa-plus"})," Add")),r.a.createElement("li",{className:"nav-item active"},r.a.createElement(k.a,{to:"/about",className:"nav-link"},r.a.createElement("i",{className:"fas fa-question"})," About"))))))}A.defaultProps={branding:"My App"};var D=a(14),T=a(1),q=a.n(T),P=a(27),I=a.n(P);function M(e){var t=e.label,a=e.name,n=e.value,c=e.placeholder,o=e.type,i=e.onChange,l=e.error;return r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:a},t),r.a.createElement("input",{type:o,className:I()("form-control form-control-lg",{"is-invalid":l}),placeholder:c,name:a,value:n,onChange:i}),l&&r.a.createElement("div",{className:"invalid-feedback"},l))}M.PropTypes={name:q.a.string.isRequired,placeholder:q.a.string.isRequired,value:q.a.string.isRequired,type:q.a.string.isRequired,label:q.a.string.isRequired,onChange:q.a.func.isRequired,error:q.a.string},M.defaultProps={label:"text"};var R=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={name:"",email:"",phone:"",errors:{}},a.onSubmit=function(){var e=Object(b.a)(v.a.mark(function e(t,n){var r,c,o,i,l,s;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),r=a.state,c=r.name,o=r.email,i=r.phone,""!==c){e.next=5;break}return a.setState({errors:{name:"Name is required"}}),e.abrupt("return");case 5:if(""!==o){e.next=8;break}return a.setState({errors:{email:"Email is required"}}),e.abrupt("return");case 8:if(""!==i){e.next=11;break}return a.setState({errors:{phone:"Phone is required"}}),e.abrupt("return");case 11:return l={name:c,email:o,phone:i},e.next=14,C.a.post("https://jsonplaceholder.typicode.com/users",l);case 14:s=e.sent,t({type:"ADD_CONTACT",payload:s.data}),a.setState({name:"",email:"",phone:"",errors:{}}),a.props.history.push("/");case 18:case"end":return e.stop()}},e,this)}));return function(t,a){return e.apply(this,arguments)}}(),a.onChange=function(e){return a.setState(Object(D.a)({},e.target.name,e.target.value))},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.name,n=t.phone,c=t.email,o=t.errors;return r.a.createElement(N,null,function(t){var i=t.dispatch;return r.a.createElement("div",{className:"card mb-3"},r.a.createElement("div",{className:"card-header"},"Add Contact"),r.a.createElement("div",{className:"card-body"},r.a.createElement("form",{onSubmit:e.onSubmit.bind(e,i)},r.a.createElement(M,{label:"Name",name:"name",value:a,placeholder:"Enter Name",onChange:e.onChange,error:o.name}),r.a.createElement(M,{label:"Email",name:"email",value:c,type:"email",placeholder:"Enter Email",onChange:e.onChange,error:o.email}),r.a.createElement(M,{label:"Phone",name:"phone",value:n,placeholder:"Enter Phone",onChange:e.onChange,error:o.phone}),r.a.createElement("input",{type:"submit",value:"Add Contact",className:"btn btn-block btn-dark"}))))})}}]),t}(n.Component),W=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={name:"",email:"",phone:"",errors:{}},a.onSubmit=function(){var e=Object(b.a)(v.a.mark(function e(t,n){var r,c,o,i,l,s,u;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),r=a.state,c=r.name,o=r.email,i=r.phone,""!==c){e.next=5;break}return a.setState({errors:{name:"Name is required"}}),e.abrupt("return");case 5:if(""!==o){e.next=8;break}return a.setState({errors:{email:"Email is required"}}),e.abrupt("return");case 8:if(""!==i){e.next=11;break}return a.setState({errors:{phone:"Phone is required"}}),e.abrupt("return");case 11:return l={name:c,email:o,phone:i},s=a.props.match.params.id,e.next=15,C.a.put("https://jsonplaceholder.typicode.com/users/".concat(s),l);case 15:u=e.sent,t({type:"UPDATE_CONTACT",payload:u.data}),a.setState({name:"",email:"",phone:"",errors:{}}),a.props.history.push("/");case 19:case"end":return e.stop()}},e,this)}));return function(t,a){return e.apply(this,arguments)}}(),a.onChange=function(e){return a.setState(Object(D.a)({},e.target.name,e.target.value))},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=Object(b.a)(v.a.mark(function e(){var t,a,n;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.match.params.id,e.next=3,C.a.get("https://jsonplaceholder.typicode.com/users/".concat(t));case 3:a=e.sent,n=a.data,this.setState({name:n.name,email:n.email,phone:n.phone});case 6:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state,a=t.name,n=t.phone,c=t.email,o=t.errors;return r.a.createElement(N,null,function(t){var i=t.dispatch;return r.a.createElement("div",{className:"card mb-3"},r.a.createElement("div",{className:"card-header"},"Add Contact"),r.a.createElement("div",{className:"card-body"},r.a.createElement("form",{onSubmit:e.onSubmit.bind(e,i)},r.a.createElement(M,{label:"Name",name:"name",value:a,placeholder:"Enter Name",onChange:e.onChange,error:o.name}),r.a.createElement(M,{label:"Email",name:"email",value:c,type:"email",placeholder:"Enter Email",onChange:e.onChange,error:o.email}),r.a.createElement(M,{label:"Phone",name:"phone",value:n,placeholder:"Enter Phone",onChange:e.onChange,error:o.phone}),r.a.createElement("input",{type:"submit",value:"Update Contact",className:"btn btn-block btn-dark"}))))})}}]),t}(n.Component);function _(){return r.a.createElement("div",null,r.a.createElement("h1",{className:"display-4"},"About Contact Manager"),r.a.createElement("p",{class:"lead"},"Simple App to manage contacts"),r.a.createElement("p",{class:"text-secondary"},"Version 1.0.0"))}a(62);var L=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){function e(){return Math.floor(9*Math.random())+1}var t,a,n,r=0,c=document.querySelector(".thirdDigit"),o=document.querySelector(".secondDigit"),i=document.querySelector(".firstDigit");n=setInterval(function(){r>40?(clearInterval(n),c.textContent=4):(c.textContent=e(),r++)},30),a=setInterval(function(){r>80?(clearInterval(a),o.textContent=0):(o.textContent=e(),r++)},30),t=setInterval(function(){r>100?(clearInterval(t),i.textContent=4):(i.textContent=e(),r++)},30)}},{key:"render",value:function(){return r.a.createElement("div",{class:"error"},r.a.createElement("div",{class:"container-floud"},r.a.createElement("div",{class:"col-xs-12 ground-color text-center"},r.a.createElement("div",{class:"container-error-404"},r.a.createElement("div",{class:"clip"},r.a.createElement("div",{class:"shadow"},r.a.createElement("span",{class:"digit thirdDigit"}))),r.a.createElement("div",{class:"clip"},r.a.createElement("div",{class:"shadow"},r.a.createElement("span",{class:"digit secondDigit"}))),r.a.createElement("div",{class:"clip"},r.a.createElement("div",{class:"shadow"},r.a.createElement("span",{class:"digit firstDigit"}))),r.a.createElement("div",{class:"msg"},"OH!",r.a.createElement("span",{class:"triangle"}))),r.a.createElement("h2",{class:"h1"},"Sorry! Page not found"))))}}]),t}(n.Component),U=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(w,null,r.a.createElement(p.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(A,{branding:"Contact Manager"}),r.a.createElement("div",{className:"container"},r.a.createElement(d.a,null,r.a.createElement(h.a,{exact:!0,path:"/",component:S}),r.a.createElement(h.a,{exact:!0,path:"/contacts/add",component:R}),r.a.createElement(h.a,{exact:!0,path:"/contacts/edit/:id",component:W}),r.a.createElement(h.a,{exact:!0,path:"/about",component:_}),r.a.createElement(h.a,{component:L}))))))}}]),t}(n.Component),B=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function F(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var a=e.installing;a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}o.a.render(r.a.createElement(U,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/Conatact-Manager",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/Conatact-Manager","/service-worker.js");B?(function(e,t){fetch(e).then(function(a){404===a.status||-1===a.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):F(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):F(t,e)})}}()}},[[30,2,1]]]);
//# sourceMappingURL=main.29a976ea.chunk.js.map