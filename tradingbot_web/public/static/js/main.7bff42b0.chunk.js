(this.webpackJsonptradingbot_fe=this.webpackJsonptradingbot_fe||[]).push([[0],{68:function(e,t,n){},69:function(e,t,n){"use strict";n.r(t);var c,a=n(0),r=n.n(a),s=n(19),o=n.n(s),l=n(12),i=n(35).a,u=i,b=u("bg-gray-100","dark:bg-gray-700"),j=u("text-gray-900","dark:text-gray-100"),d=u("py-3","px-6"),h=u("rounded","border"),O={background:b,textColor:j,pageEdge:d,border:h,borderGray:u(h,"border-gray-100","dark:border-gray-600"),buttonStyle:u("block","w-full","text-center","py-2","px-4","hover:bg-blue-500","font-semibold","text-blue-500","hover:text-white",h,"border-blue-500","hover:border-transparent"),table:u("table-auto","rounded","border-collapse","border","border-gray-800","w-full"),tableCell:u("py-3","px-2","border","border-gray-600","h-10","text-center")},p=n(10),f=n(3),x=n(20),m=n(5),g=n(14),v=n.n(g),y=n(18),N=n(21),S=n(7),k=n.n(S),C=n(2),A=new function e(){var t=this;Object(N.a)(this,e),this.accounts=[],this.loadAccounts=Object(y.a)(v.a.mark((function e(){var n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.a.get("/accounts/all").then((function(e){return e.data}));case 2:(n=e.sent).forEach((function(e){e.balances=(e.balances||[]).map((function(e){return e.free=Number(e.free),e.locked=Number(e.locked),e.sum=e.free+e.locked,e})).sort((function(e,t){return e.sum-t.sum}))})),t.accounts=n;case 5:case"end":return e.stop()}}),e)}))),this.save=function(){var e=Object(y.a)(v.a.mark((function e(t){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.a.post("/accounts/save",t).then((function(e){return e.data}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Object(C.l)(this)},w=n(1),E="New",L={root:u(O.pageEdge,"grid","grid-cols-2","gap-2"),input:u(O.background,O.borderGray,"px-3"),checkbox:u("translate-y-1.5","transform-gpu"),error:u("col-span-2","pt-2","text-red-500","text-xs"),button:u(O.buttonStyle,"col-span-2")},z={id:"",name:"",apiKey:"",apiSecret:"",quota:0,disabled:!1},T=function(){var e=Object(f.h)().id,t=Object(a.useState)(Object(l.a)({},z)),n=Object(m.a)(t,2),c=n[0],r=n[1],s=Object(a.useState)(!1),o=Object(m.a)(s,2),i=o[0],u=o[1],b=Object(a.useState)(""),j=Object(m.a)(b,2),d=j[0],h=j[1];Object(a.useEffect)((function(){var t=e===E?z:A.accounts.find((function(t){return t.id===e}));t?r(Object(l.a)({},t)):u(!0)}),[e]);var O=function(e){var t=e.currentTarget,n="checkbox"===t.type?t.checked:t.value,a=t.name;r(Object(l.a)(Object(l.a)({},c),{},Object(x.a)({},a,n)))};return i?Object(w.jsx)(f.a,{push:!0,to:V(Q.Accounts)}):Object(w.jsxs)("div",{className:L.root,children:[Object(w.jsx)("label",{children:"\u540d\u7a31"}),Object(w.jsx)("input",{className:L.input,name:"name",type:"text",value:c.name,onChange:O}),e===E&&Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)("label",{children:"API key"}),Object(w.jsx)("input",{className:L.input,name:"apiKey",type:"text",value:c.apiKey,onChange:O}),Object(w.jsx)("label",{children:"API Secret"}),Object(w.jsx)("input",{className:L.input,name:"apiSecret",type:"text",value:c.apiSecret,onChange:O})]}),Object(w.jsx)("label",{children:"\u55ae\u7b46\u6295\u8cc7\u984d"}),Object(w.jsx)("input",{className:L.input,name:"quota",type:"number",value:c.quota,onChange:O}),Object(w.jsx)("label",{children:"\u505c\u7528"}),Object(w.jsx)("input",{className:L.checkbox,name:"disabled",type:"checkbox",checked:c.disabled,onChange:O}),Object(w.jsx)("pre",{className:L.error,children:d||c.error}),Object(w.jsx)("button",{className:L.button,onClick:function(){var t=[];c.name||t.push("\u8acb\u8f38\u5165 \u540d\u7a31"),e===E&&(c.apiKey||t.push("\u8acb\u8f38\u5165 api Key"),c.apiSecret||t.push("\u8acb\u8f38\u5165 api Secret"),r(Object(l.a)(Object(l.a)({},c),{},{error:t.join("\n")}))),t.length>0||A.save(c).then((function(){u(!0)})).catch((function(){h("\u5132\u5b58\u5931\u6557, \u8acb\u6aa2\u67e5\u60a8\u7684 api Key \u6216 api Secret")}))},children:"\u5132\u5b58"})]})},F=n(11),q={actions:u("flex","justify-end"),action:u(O.buttonStyle,"w-28"),table:O.table,tableCell:O.tableCell,balancesCell:u("h-full","overflow-auto","text-left")},K=Object(F.b)((function(){Object(a.useEffect)((function(){A.loadAccounts()}),[]);var e=Object(a.useCallback)((function(e){return e.error?Object(w.jsx)(w.Fragment,{children:e.error}):e.balances&&0!==e.balances.length?Object(w.jsx)("pre",{className:q.balancesCell,children:(e.balances||[]).map((function(e){return"".concat(e.asset,": ").concat(e.free," / ").concat(e.locked)})).join("\n")}):Object(w.jsx)(w.Fragment,{children:"\u7121\u8cc7\u7522"})}),[]);return Object(w.jsxs)("div",{className:O.pageEdge,children:[Object(w.jsx)("div",{className:q.actions,children:Object(w.jsx)(p.b,{className:q.action,to:"/Account/".concat(E),children:"\u65b0\u589e\u5e33\u865f"})}),"\u5e33\u6236\u5217\u8868:",Object(w.jsxs)("table",{className:q.table,children:[Object(w.jsx)("thead",{children:Object(w.jsxs)("tr",{children:[Object(w.jsx)("th",{className:q.tableCell,children:"\u540d\u7a31"}),Object(w.jsx)("th",{className:q.tableCell,children:"\u8cc7\u7522 (free/locked)"}),Object(w.jsx)("th",{className:q.tableCell,children:"\u55ae\u7b46\u6295\u8cc7\u984d"}),Object(w.jsx)("th",{className:q.tableCell,children:"\u505c\u7528"}),Object(w.jsx)("th",{className:q.tableCell})]})}),Object(w.jsx)("tbody",{children:A.accounts.map((function(t,n){return Object(w.jsxs)("tr",{children:[Object(w.jsx)("td",{className:q.tableCell,children:t.name}),Object(w.jsx)("td",{className:q.tableCell,children:e(t)}),Object(w.jsx)("td",{className:q.tableCell,children:t.quota}),Object(w.jsx)("td",{className:q.tableCell,children:t.disabled?"Y":""}),Object(w.jsx)("td",{className:q.tableCell,children:Object(w.jsx)(p.b,{className:O.buttonStyle,to:"/Account/".concat(t.id),children:"\u7de8\u8f2f"})})]},n)}))})]})]})})),M={isDev:"localhost:4200"===window.location.host},P=n(16),B=n.n(P);!function(e){e[e.Authenticated=0]="Authenticated",e[e.Authorized=1]="Authorized"}(c||(c={}));var D=new function e(){var t=this;Object(N.a)(this,e),this.authStatus=void 0,this.setAuthStatus=function(e){t.authStatus=e},Object(C.l)(this);var n=B.a.get("auth-token");this.setAuthStatus(n?c.Authorized:void 0)},I={root:u("m-16","p-16")},J=Object(F.b)((function(){var e=Object(a.useState)(""),t=Object(m.a)(e,2),n=t[0],r=t[1];return Object(a.useEffect)((function(){M.isDev?r("/"):fetch("/auth/url").then((function(e){return e.text()})).then((function(e){r(e)}))}),[]),D.authStatus===c.Authenticated?Object(w.jsx)(f.a,{push:!0,to:V(Q.Register)}):Object(w.jsx)("div",{className:I.root,children:Object(w.jsx)("a",{className:O.buttonStyle,href:n,children:"\u767b\u5165"})})})),R={root:u("m-16","p-16")},Y=Object(F.b)((function(){var e=Object(a.useMemo)((function(){return B.a.get("auth-token")}),[]),t=Object(a.useState)(!1),n=Object(m.a)(t,2),c=n[0],r=n[1];return e?c?Object(w.jsx)(f.a,{push:!0,to:V(Q.Accounts)}):Object(w.jsx)("div",{className:R.root,children:Object(w.jsx)("button",{className:O.buttonStyle,onClick:function(){M.isDev?r(!0):k.a.post("/auth/register").then((function(){r(!0)}))},children:"\u8a3b\u518a"})}):Object(w.jsx)(f.a,{push:!0,to:V(Q.Login)})})),G=u("w-full","break-all","border","rounded-xl","bg-gray-600","p-2","mb-3"),_={action:"order",symbol:"XLMETH",side:"BUY",quantity:"100",token:"[Your Token]"},H=function(){var e,t=Object(a.useState)(""),n=Object(m.a)(t,2),c=n[0],r=n[1];return Object(a.useEffect)((function(){k.a.get("/signal/getToken").then((function(e){return r(e.data)}))}),[]),Object(w.jsxs)("div",{className:O.pageEdge,children:["token:",Object(w.jsx)("div",{className:G,children:c}),"\u8a0a\u865f\u8a2d\u5b9a\u8aaa\u660e:",Object(w.jsxs)("pre",{className:G,children:["\u73fe\u8ca8\u55ae:",Object(w.jsx)("br",{}),(e=_,JSON.stringify(e,null,"\t"))]})]})},U={table:O.table,tableCell:u(O.tableCell,"break-all")},X=function(){var e=Object(a.useState)([]),t=Object(m.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)([]),s=Object(m.a)(r,2),o=s[0],l=s[1],i=Object(a.useState)(""),u=Object(m.a)(i,2),b=u[0],j=u[1],d=function(){var e=Object(y.a)(v.a.mark((function e(){var t,n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.a.get("/signal/history").then((function(e){return e.data}));case 2:t=e.sent,c(t),n=new Set,t.forEach((function(e){Object.keys(e).forEach((function(e){return n.add}))})),l(Array.from(n));case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){d(),k.a.get("/signal/getToken").then((function(e){return j(e.data)}))}),[]),Object(w.jsxs)("div",{className:O.pageEdge,children:["token:",Object(w.jsx)("div",{className:G,children:b}),"\u8a0a\u865f\u7d00\u9304:",Object(w.jsxs)("table",{className:U.table,children:[Object(w.jsx)("thead",{children:Object(w.jsxs)("tr",{children:[0===o.length&&Object(w.jsx)("th",{className:U.tableCell,children:"\u7121\u4efb\u4f55\u7d00\u9304"}),o.length>0&&o.map((function(e,t){return Object(w.jsx)("th",{className:U.tableCell,children:e},t)}))]})}),Object(w.jsx)("tbody",{children:n.map((function(e,t){return Object(w.jsx)("tr",{children:o.map((function(t,n){return Object(w.jsx)("td",{className:U.tableCell,children:e[t]},n)}))},t)}))})]})]})},Q={Login:{path:"/",exact:!0,component:J},Register:{path:"/Register",component:Y,protectionLevel:c.Authenticated},Accounts:{path:"/Accounts",lable:"\u5e63\u5b89\u5e33\u6236",component:K,protectionLevel:c.Authorized},Account:{path:"/Account/:id",lable:"\u7de8\u8f2f\u5e63\u5b89\u5e33\u6236",component:T,protectionLevel:c.Authorized},Signals:{path:"/Signals",lable:"\u8a0a\u865f\u7d00\u9304",component:X,protectionLevel:c.Authorized},SignalManual:{path:"/SignalManual",lable:"\u8a0a\u865f\u8a2d\u5b9a\u8aaa\u660e",component:H,protectionLevel:c.Authorized}},V=function(e){return e.path?Object(f.f)(e.path):""},W=[Q.Accounts,Q.Signals,Q.SignalManual],Z={root:u("bg-white","dark:bg-gray-800","py-3","px-6","flex","justify-between"),menus:u("flex","justify-between"),site:u("font-bold"),menu:u("pl-6")},$=Object(F.b)((function(){return Object(w.jsxs)("div",{className:Z.root,children:[Object(w.jsxs)("div",{className:Z.menus,children:[Object(w.jsx)("div",{className:Z.site,children:"TradingBotttt v.0"}),D.authStatus===c.Authorized&&W.map((function(e,t){return Object(w.jsx)(p.b,{to:V(e),className:Z.menu,children:e.lable},t)}))]}),D.authStatus===c.Authorized&&Object(w.jsx)("button",{onClick:function(){D.setAuthStatus(void 0)},children:"logout"})]})})),ee=Object.values(Q),te=Object(F.b)((function(){return Object(w.jsx)(f.d,{children:ee.map((function(e,t){return e.protectionLevel&&e.protectionLevel!==D.authStatus?Object(w.jsx)(f.a,{to:V(Q.Login)},t):Object(w.jsx)(f.b,Object(l.a)({},e),t)}))})})),ne={authStore:D,accountStore:A},ce=ne;window.stores=ne,k.a.interceptors.request.use((function(e){var t=B.a.get("auth-token");return t&&(e.headers.Authorization="Bearer ".concat(t)),e}),(function(e){return Promise.reject(e)})),k.a.interceptors.response.use((function(e){return e}),(function(e){if(e.response)switch(e.response.status){case 401:window.location.href="/"}return Promise.reject(e)}));var ae=i(O.background,O.textColor,"min-h-screen"),re=function(){return Object(a.useEffect)((function(){document.documentElement.classList.add("dark")}),[]),Object(w.jsx)("div",{className:ae,children:Object(w.jsx)(F.a,Object(l.a)(Object(l.a)({},ce),{},{children:Object(w.jsxs)(p.a,{children:[Object(w.jsx)($,{}),Object(w.jsx)(te,{})]})}))})},se=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,70)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),r(e),s(e)}))};n(68);o.a.render(Object(w.jsx)(r.a.StrictMode,{children:Object(w.jsx)(re,{})}),document.getElementById("root")),se()}},[[69,1,2]]]);
//# sourceMappingURL=main.7bff42b0.chunk.js.map