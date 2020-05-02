(this.webpackJsonpgithub_profiler=this.webpackJsonpgithub_profiler||[]).push([[0],{12:function(e,t,a){},14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(5),o=a.n(c),i=(a(12),a(1)),l=a(2),u=a.n(l),s=a(3),p=a(6),m=function e(){var t=this;Object(p.a)(this,e),this.getUserProfile=function(){var e=Object(s.a)(u.a.mark((function e(t){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.github.com/users/".concat(t),{method:"GET",headers:{"Content-Type":"application/json"}});case 2:return a=e.sent,e.abrupt("return",a.json());case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.getUserRepos=function(){var e=Object(s.a)(u.a.mark((function e(t){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.github.com/users/".concat(t,"/repos"),{method:"GET",headers:{"Content-Type":"application/json"}});case 2:return a=e.sent,e.abrupt("return",a.json());case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.getUserActivity=function(){var e=Object(s.a)(u.a.mark((function e(t){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.github.com/users/".concat(t,"/received_events"),{method:"GET",headers:{"Content-Type":"application/json"}});case 2:return a=e.sent,e.abrupt("return",a.json());case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.getUserAccountField=function(e,t){return JSON.parse(e)[t]},this.setUserAccountField=function(e,a){return t.getUserAccountField(e,a)}},g=function(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)(""),l=Object(i.a)(o,2),u=(l[0],l[1],new m);return r.a.createElement("div",{id:"user-form"},r.a.createElement("form",{onSubmit:function(){u.getUserProfile(a).then((function(e){console.log(e),localStorage.setItem("user-account-data",JSON.stringify(e))})).catch((function(e){console.log(e)}))}},r.a.createElement("input",{type:"text",placeholder:"GitHub username",value:a,onChange:function(e){return c(e.target.value)}}),r.a.createElement("input",{type:"submit",value:"Get account data"})))},d=function(e){var t=e.iconType,a=e.value,n=e.showData;return r.a.createElement("div",{onClick:n},r.a.createElement("ion-icon",{name:t}),r.a.createElement("p",null,a))},f=function(e){var t=e.children,a=e.showRepos,c=e.showActivity,o=Object(n.useState)([]),l=Object(i.a)(o,2),u=l[0],s=l[1],p=Object(n.useState)(""),g=Object(i.a)(p,2),f=(g[0],g[1]),v=Object(n.useState)(""),y=Object(i.a)(v,2),h=(y[0],y[1]),E=new m;return Object(n.useEffect)((function(){if(localStorage.getItem("user-account-data")){var e=E.setUserAccountField(localStorage.getItem("user-account-data"),"login");E.getUserRepos(e).then((function(e){f(JSON.stringify(e)),localStorage.setItem("user-repos",JSON.stringify(e))})).catch((function(e){f(JSON.stringify(e))}))}else f("")}),[]),Object(n.useEffect)((function(){if(localStorage.getItem("user-account-data")){var e=E.setUserAccountField(localStorage.getItem("user-account-data"),"login");E.getUserActivity(e).then((function(e){h(JSON.stringify(e)),localStorage.setItem("user-activity",JSON.stringify(e))})).catch((function(e){h(JSON.stringify(e))}))}else h("")}),[]),Object(n.useEffect)((function(){var e=0;localStorage.getItem("user-account-data")&&(e=E.setUserAccountField(localStorage.getItem("user-account-data"),"public_repos")),s(e>0?function(e){return e.concat({id:1,iconType:"code-slash-outline",value:"Repos",loadFunction:a},{id:2,iconType:"git-branch-outline",value:"Recent Activity",loadFunction:c})}:function(e){return e.concat({id:1,iconType:"git-branch-outline",value:"Recent Activity",loadFunction:c})})}),[]),r.a.createElement("div",{id:"navigator"},r.a.createElement("nav",null,u.map((function(e){return r.a.createElement(d,{key:e.id,value:e.value,iconType:e.iconType,showData:e.loadFunction})}))),r.a.createElement("hr",{style:{margin:"0px 10px 20px 10px"}}),r.a.createElement("div",{id:"navigator-children"},t))},v=function(e){var t=e.iconType,a=e.activityMessage,n=e.repoName,c=e.activityDate;return r.a.createElement("div",{className:"activity-item"},r.a.createElement("ion-icon",{name:t}),r.a.createElement("h5",null,a),r.a.createElement("p",null,r.a.createElement("span",{style:{fontStyle:"italic"}},"Repo: "),n.split("/")[1]),r.a.createElement("p",null,r.a.createElement("span",{style:{fontStyle:"italic"}},"Created: "),c))},y=function(e){var t=e.repoURL,a=e.repoImage,n=e.repoName,c=e.createDate,o=e.modifyDate,i=e.language;return r.a.createElement("a",{href:t,target:"_blank",className:"repo-item"},r.a.createElement("div",{style:{display:"flex"}},r.a.createElement("ion-icon",{name:a}),r.a.createElement("div",{style:{display:"block"}},r.a.createElement("h5",null,n),r.a.createElement("p",null,r.a.createElement("span",null,"Create Date:")," ",c),r.a.createElement("p",null,r.a.createElement("span",null,"Last Modify Date:")," ",o),r.a.createElement("p",null,r.a.createElement("span",null,"Language:")," ",i))))},h=function(e){var t=e.image,a=e.name,c=e.username,o=e.location,l=e.profileURL,u=Object(n.useState)(null),s=Object(i.a)(u,2),p=s[0],g=s[1],d=Object(n.useState)(""),h=Object(i.a)(d,2),E=h[0],b=h[1],S=new m;Object(n.useEffect)((function(){localStorage.getItem("user-account-data")&&b(localStorage.getItem("user-account-data"))}),[localStorage.getItem("user-account-data")]);var O=function(e){var t;switch(e){case"DeleteEvent":t="close-outline";break;case"CreateEvent":t="add-outline";break;case"PullRequestEvent":t="enter-outline";break;default:t="alert-outline"}return t},j=function(e){var t;switch(e){case"JavaScript":t="logo-javascript";break;case"Python":t="logo-python";break;case"HTML":t="logo-html5";break;default:t="logo-ionic"}return t};return r.a.createElement("div",{id:"user-bio"},r.a.createElement("div",{id:"user-bio-container"},r.a.createElement("img",{src:t,alt:"No avatar"}),r.a.createElement("div",{style:{display:"block"}},r.a.createElement("div",{style:{display:"block",margin:"30px 0px 0px 0px"}},r.a.createElement("p",{style:{margin:"0px 0px 5px 0px",fontSize:"20px"}},a),r.a.createElement("div",{style:{display:"flex"}},r.a.createElement("ion-icon",{name:"location"}),r.a.createElement("p",{style:{margin:"0px 0px 0px 5px",fontSize:"13px"}},o)),r.a.createElement("a",{href:l},c),r.a.createElement("div",{id:"other-info"},r.a.createElement("p",null,r.a.createElement("span",null,"Bio:")," ",E?S.setUserAccountField(E,"bio"):"N/A"),r.a.createElement("p",null,r.a.createElement("span",null,"Company:")," ",E?S.setUserAccountField(E,"company"):"N/A"),r.a.createElement("p",null,r.a.createElement("span",null,"Email:")," ",E?S.setUserAccountField(E,"email"):"N/A"),r.a.createElement("p",null,r.a.createElement("span",null,"Hireable:")," ",E?S.setUserAccountField(E,"hireable"):"N/A"))))),r.a.createElement(f,{showActivity:function(){return g("activity")},showRepos:function(){return g("repos")}},"activity"===p?function(){var e=[];if(!localStorage.getItem("user-activity"))return[{id:0,repoName:"",activityDate:"",iconType:"",activityMessage:""}];var t=localStorage.getItem("user-activity");return JSON.parse(t).map((function(t,a){e.push({id:a,repoName:t.repo.name,activityDate:t.created_at,iconType:O(t.type),activityMessage:t.type})})),e.map((function(e){return r.a.createElement(v,{key:e.id,repoName:e.repoName,activityDate:e.activityDate,iconType:e.iconType,activityMessage:e.activityMessage})}))}():"repos"===p?function(){var e=[];if(!localStorage.getItem("user-repos"))return[{id:0,repoURL:"",repoImage:"",repoName:"",createDate:"",modifyDate:"",language:""}];var t=localStorage.getItem("user-repos");return JSON.parse(t).map((function(t,a){e.push({id:a,repoURL:t.html_url,repoImage:j(t.language),repoName:t.name,createDate:new Date(t.created_at).toDateString(),modifyDate:new Date(t.updated_at).toDateString(),language:t.language})})),e.map((function(e){return r.a.createElement(y,{key:e.id,repoURL:e.repoURL,createDate:e.createDate,language:e.language,modifyDate:e.modifyDate,repoImage:e.repoImage,repoName:e.repoName})}))}():null))},E=function(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),a=t[0],c=t[1],o=new m;return Object(n.useEffect)((function(){localStorage.getItem("user-account-data")&&c(localStorage.getItem("user-account-data"))}),[localStorage.getItem("user-account-data")]),r.a.createElement("div",{id:"user-profile"},r.a.createElement(h,{username:a?o.setUserAccountField(a,"login"):"",image:a?o.setUserAccountField(a,"avatar_url"):"",name:a?o.setUserAccountField(a,"name"):"",location:a?o.setUserAccountField(a,"location"):"",profileURL:a?o.setUserAccountField(a,"html_url"):""}))},b=(a(14),function(){return r.a.createElement("div",{className:"App"},r.a.createElement("div",{id:"toolbar"},r.a.createElement("p",null,"GitHub Tracker"),r.a.createElement(g,null)),r.a.createElement(E,null))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t,a){e.exports=a(15)}},[[7,1,2]]]);
//# sourceMappingURL=main.fae49816.chunk.js.map