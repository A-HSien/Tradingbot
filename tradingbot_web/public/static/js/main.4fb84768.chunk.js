(this.webpackJsonptradingbot_fe=this.webpackJsonptradingbot_fe||[]).push([[0],{68:function(e,t,n){},69:function(e,t,n){"use strict";n.r(t);var c,a=n(0),r=n.n(a),s=n(19),o=n.n(s),l=n(11),u=n(35).a,i=u,b=i("bg-gray-100","dark:bg-gray-700"),j=i("text-gray-900","dark:text-gray-100"),d=i("py-3","px-6"),h=i("rounded","border"),O={background:b,textColor:j,pageEdge:d,border:h,borderGray:i(h,"border-gray-100","dark:border-gray-600"),buttonStyle:i("block","w-full","text-center","py-2","px-4","hover:bg-blue-500","font-semibold","text-blue-500","hover:text-white",h,"border-blue-500","hover:border-transparent"),table:i("table-auto","rounded","border-collapse","border","border-gray-800","w-full"),tableCell:i("py-3","px-2","border","border-gray-600","h-10","text-center")},p=n(5),f=n(3),x=n(20),m=n(10),g=n(14),v=n.n(g),y=n(15),N=n(21),k=n(13),S=n.n(k),C=n(2),w=new function e(){var t=this;Object(N.a)(this,e),this.accounts=[],this.loadAccounts=Object(y.a)(v.a.mark((function e(){var n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S.a.get("/accounts/all").then((function(e){return e.data}));case 2:(n=e.sent).forEach((function(e){e.balances=(e.balances||[]).map((function(e){return e.free=Number(e.free),e.locked=Number(e.locked),e.sum=e.free+e.locked,e})).sort((function(e,t){return e.sum-t.sum}))})),t.accounts=n;case 5:case"end":return e.stop()}}),e)}))),this.save=function(){var e=Object(y.a)(v.a.mark((function e(t){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S.a.post("/accounts/save",t).then((function(e){return e.data}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Object(C.l)(this)},A=n(1),E="New",L={root:i(O.pageEdge,"grid","grid-cols-2","gap-2"),input:i(O.background,O.borderGray,"px-3"),checkbox:i("translate-y-1.5","transform-gpu"),error:i("col-span-2","pt-2","text-red-500","text-xs"),button:i(O.buttonStyle,"col-span-2")},z={id:"",name:"",apiKey:"",apiSecret:"",quota:0,disabled:!1},K=function(){var e=Object(f.h)().id,t=Object(a.useState)(Object(l.a)({},z)),n=Object(m.a)(t,2),c=n[0],r=n[1],s=Object(a.useState)(!1),o=Object(m.a)(s,2),u=o[0],i=o[1],b=Object(a.useState)(""),j=Object(m.a)(b,2),d=j[0],h=j[1];Object(a.useEffect)((function(){var t=e===E?z:w.accounts.find((function(t){return t.id===e}));t?r(Object(l.a)({},t)):i(!0)}),[e]);var O=function(e){var t=e.currentTarget,n="checkbox"===t.type?t.checked:t.value,a=t.name;r(Object(l.a)(Object(l.a)({},c),{},Object(x.a)({},a,n)))};return u?Object(A.jsx)(f.a,{push:!0,to:H(Y.Accounts)}):Object(A.jsxs)("div",{className:L.root,children:[Object(A.jsx)("label",{children:"\u540d\u7a31"}),Object(A.jsx)("input",{className:L.input,name:"name",type:"text",value:c.name,onChange:O}),e===E&&Object(A.jsxs)(A.Fragment,{children:[Object(A.jsx)("label",{children:"API key"}),Object(A.jsx)("input",{className:L.input,name:"apiKey",type:"text",value:c.apiKey,onChange:O}),Object(A.jsx)("label",{children:"API Secret"}),Object(A.jsx)("input",{className:L.input,name:"apiSecret",type:"text",value:c.apiSecret,onChange:O})]}),Object(A.jsx)("label",{children:"\u55ae\u7b46\u6295\u8cc7\u984d"}),Object(A.jsx)("input",{className:L.input,name:"quota",type:"number",value:c.quota,onChange:O}),Object(A.jsx)("label",{children:"\u505c\u7528"}),Object(A.jsx)("input",{className:L.checkbox,name:"disabled",type:"checkbox",checked:c.disabled,onChange:O}),Object(A.jsx)("pre",{className:L.error,children:d||c.error}),Object(A.jsx)("button",{className:L.button,onClick:function(){var t=[];c.name||t.push("\u8acb\u8f38\u5165 \u540d\u7a31"),e===E&&(c.apiKey||t.push("\u8acb\u8f38\u5165 api Key"),c.apiSecret||t.push("\u8acb\u8f38\u5165 api Secret"),r(Object(l.a)(Object(l.a)({},c),{},{error:t.join("\n")}))),t.length>0||w.save(c).then((function(){i(!0)})).catch((function(){h("\u5132\u5b58\u5931\u6557, \u8acb\u6aa2\u67e5\u60a8\u7684 api Key \u6216 api Secret")}))},children:"\u5132\u5b58"})]})},P=n(9),q={actions:i("flex","justify-end"),action:i(O.buttonStyle,"w-28"),table:O.table,tableCell:O.tableCell,balancesCell:i("h-full","overflow-auto","text-left")},F=Object(P.b)((function(){return Object(a.useEffect)((function(){Object(y.a)(v.a.mark((function e(){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.loadAccounts();case 2:case"end":return e.stop()}}),e)})))()}),[]),Object(A.jsxs)("div",{className:O.pageEdge,children:[Object(A.jsx)("div",{className:q.actions,children:Object(A.jsx)(p.b,{className:q.action,to:"/Account/".concat(E),children:"\u65b0\u589e\u5e33\u865f"})}),"\u5e33\u6236\u5217\u8868:",Object(A.jsxs)("table",{className:q.table,children:[Object(A.jsx)("thead",{children:Object(A.jsxs)("tr",{children:[Object(A.jsx)("th",{className:q.tableCell,children:"\u540d\u7a31"}),Object(A.jsx)("th",{className:q.tableCell,children:"\u9918\u984d (free/locked)"}),Object(A.jsx)("th",{className:q.tableCell,children:"\u55ae\u7b46\u6295\u8cc7\u984d"}),Object(A.jsx)("th",{className:q.tableCell,children:"\u505c\u7528"}),Object(A.jsx)("th",{className:q.tableCell})]})}),Object(A.jsx)("tbody",{children:w.accounts.map((function(e,t){return Object(A.jsxs)("tr",{children:[Object(A.jsx)("td",{className:q.tableCell,children:e.name}),Object(A.jsx)("td",{className:q.tableCell,children:Object(A.jsx)("pre",{className:q.balancesCell,children:(e.balances||[]).map((function(e){return"".concat(e.asset,": ").concat(e.free," / ").concat(e.locked)})).join("\n")})}),Object(A.jsx)("td",{className:q.tableCell,children:e.quota}),Object(A.jsx)("td",{className:q.tableCell,children:e.disabled?"Y":""}),Object(A.jsx)("td",{className:q.tableCell,children:Object(A.jsx)(p.b,{className:O.buttonStyle,to:"/Account/".concat(e.id),children:"\u7de8\u8f2f"})})]},t)}))})]})]})})),T={isDev:"localhost:4200"===window.location.host},B=n(17),D=n.n(B);!function(e){e[e.Authenticated=0]="Authenticated",e[e.Authorized=1]="Authorized"}(c||(c={}));var I=new function e(){var t=this;Object(N.a)(this,e),this.authStatus=void 0,this.setAuthStatus=function(e){t.authStatus=e},Object(C.l)(this);var n=D.a.get("auth-token");this.setAuthStatus(n?c.Authorized:void 0)},R={root:i("m-16","p-16")},_=Object(P.b)((function(){var e=Object(a.useState)(""),t=Object(m.a)(e,2),n=t[0],r=t[1];return Object(a.useEffect)((function(){T.isDev?r("/"):fetch("/auth/url").then((function(e){return e.text()})).then((function(e){r(e)}))}),[]),I.authStatus===c.Authenticated?Object(A.jsx)(f.a,{push:!0,to:H(Y.Register)}):Object(A.jsx)("div",{className:R.root,children:Object(A.jsx)("a",{className:O.buttonStyle,href:n,children:"\u767b\u5165"})})})),G={root:i("m-16","p-16")},J=Object(P.b)((function(){var e=Object(a.useMemo)((function(){return D.a.get("auth-token")}),[]),t=Object(a.useState)(!1),n=Object(m.a)(t,2),c=n[0],r=n[1];return e?c?Object(A.jsx)(f.a,{push:!0,to:H(Y.Accounts)}):Object(A.jsx)("div",{className:G.root,children:Object(A.jsx)("button",{className:O.buttonStyle,onClick:function(){T.isDev?r(!0):S.a.post("/auth/register").then((function(){r(!0)}))},children:"\u8a3b\u518a"})}):Object(A.jsx)(f.a,{push:!0,to:H(Y.Login)})})),M={token:i("w-full","break-all","border","rounded-xl","bg-gray-600","p-2","mb-3"),table:O.table,tableCell:i(O.tableCell,"break-all")},W=function(){var e=Object(a.useState)([]),t=Object(m.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)([]),s=Object(m.a)(r,2),o=s[0],l=s[1],u=Object(a.useState)(""),i=Object(m.a)(u,2),b=i[0],j=i[1],d=function(){var e=Object(y.a)(v.a.mark((function e(){var t,n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S.a.get("/signal/history").then((function(e){return e.data}));case 2:t=e.sent,c(t),n=new Set,t.forEach((function(e){Object.keys(e).forEach((function(e){e.startsWith("_")||n.add(e)}))})),l(Array.from(n));case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){d(),S.a.get("/signal/getToken").then((function(e){j(e.data)}))}),[]),Object(A.jsxs)("div",{className:O.pageEdge,children:["token:",Object(A.jsx)("div",{className:M.token,children:b}),Object(A.jsx)(p.b,{to:"",children:"\u8a0a\u865f\u8a2d\u5b9a\u8aaa\u660e"}),"\u8a0a\u865f\u7d00\u9304:",Object(A.jsxs)("table",{className:M.table,children:[Object(A.jsx)("thead",{children:Object(A.jsxs)("tr",{children:[0===o.length&&Object(A.jsx)("th",{className:M.tableCell,children:"\u7121\u4efb\u4f55\u7d00\u9304"}),o.length>0&&o.map((function(e,t){return Object(A.jsx)("th",{className:M.tableCell,children:e},t)}))]})}),Object(A.jsx)("tbody",{children:n.map((function(e,t){return Object(A.jsx)("tr",{children:o.map((function(t,n){return Object(A.jsx)("td",{className:M.tableCell,children:e[t]},n)}))},t)}))})]})]})},Y={Login:{path:"/",exact:!0,component:_},Register:{path:"/Register",component:J,protectionLevel:c.Authenticated},Accounts:{path:"/Accounts",lable:"\u5e63\u5b89\u5e33\u6236",component:F,protectionLevel:c.Authorized},Account:{path:"/Account/:id",lable:"\u7de8\u8f2f\u5e63\u5b89\u5e33\u6236",component:K,protectionLevel:c.Authorized},Signals:{path:"/Signals",lable:"\u8a0a\u865f\u7d00\u9304",component:W,protectionLevel:c.Authorized}},H=function(e){return e.path?Object(f.f)(e.path):""},Q=[Y.Accounts,Y.Signals],U={root:i("bg-white","dark:bg-gray-800","py-3","px-6","flex","justify-between"),menus:i("flex","justify-between"),site:i("font-bold"),menu:i("pl-6")},V=Object(P.b)((function(){return Object(A.jsxs)("div",{className:U.root,children:[Object(A.jsxs)("div",{className:U.menus,children:[Object(A.jsx)("div",{className:U.site,children:"TradingBotttt v.0"}),I.authStatus===c.Authorized&&Q.map((function(e,t){return Object(A.jsx)(p.b,{to:H(e),className:U.menu,children:e.lable},t)}))]}),I.authStatus===c.Authorized&&Object(A.jsx)("button",{onClick:function(){I.setAuthStatus(void 0)},children:"logout"})]})})),X=Object.values(Y),Z=Object(P.b)((function(){return Object(A.jsx)(f.d,{children:X.map((function(e,t){return e.protectionLevel&&e.protectionLevel!==I.authStatus?Object(A.jsx)(f.a,{to:H(Y.Login)},t):Object(A.jsx)(f.b,Object(l.a)({},e),t)}))})})),$={authStore:I,accountStore:w},ee=$;window.stores=$,S.a.interceptors.request.use((function(e){var t=D.a.get("auth-token");return t&&(e.headers.Authorization="Bearer ".concat(t)),e}),(function(e){return Promise.reject(e)})),S.a.interceptors.response.use((function(e){return e}),(function(e){if(e.response)switch(e.response.status){case 401:window.location.href="/"}return Promise.reject(e)}));var te=u(O.background,O.textColor,"min-h-screen"),ne=function(){return Object(a.useEffect)((function(){document.documentElement.classList.add("dark")}),[]),Object(A.jsx)("div",{className:te,children:Object(A.jsx)(P.a,Object(l.a)(Object(l.a)({},ee),{},{children:Object(A.jsxs)(p.a,{children:[Object(A.jsx)(V,{}),Object(A.jsx)(Z,{})]})}))})},ce=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,70)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),r(e),s(e)}))};n(68);o.a.render(Object(A.jsx)(r.a.StrictMode,{children:Object(A.jsx)(ne,{})}),document.getElementById("root")),ce()}},[[69,1,2]]]);
//# sourceMappingURL=main.4fb84768.chunk.js.map