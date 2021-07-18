(this.webpackJsonptradingbot_fe=this.webpackJsonptradingbot_fe||[]).push([[0],{68:function(e,t,n){},69:function(e,t,n){"use strict";n.r(t);var c,a=n(0),r=n.n(a),s=n(19),o=n.n(s),i=n(10),u=n(35).a,l=u,b=l("bg-gray-100","dark:bg-gray-700"),j=l("text-gray-900","dark:text-gray-100"),d=l("py-3","px-6"),h=l("rounded","border"),p={background:b,textColor:j,pageEdge:d,border:h,borderGray:l(h,"border-gray-100","dark:border-gray-600"),buttonStyle:l("block","w-full","text-center","py-2","px-4","hover:bg-blue-500","font-semibold","text-blue-500","hover:text-white",h,"border-blue-500","hover:border-transparent")},O=n(8),x=n(3),f=n(20),m=n(16),g=n(13),v=n.n(g),y=n(18),N=n(21),S=n(12),k=n.n(S),A=n(2),w=new function e(){var t=this;Object(N.a)(this,e),this.accounts=[],this.loadAccounts=Object(y.a)(v.a.mark((function e(){var n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.a.get("/accounts/all").then((function(e){return e.data}));case 2:(n=e.sent).forEach((function(e){e.balances=(e.balances||[]).map((function(e){return e.free=Number(e.free),e.locked=Number(e.locked),e.sum=e.free+e.locked,e})).sort((function(e,t){return e.sum-t.sum}))})),t.accounts=n;case 5:case"end":return e.stop()}}),e)}))),this.save=function(){var e=Object(y.a)(v.a.mark((function e(t){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.a.post("/accounts/save",t).then((function(e){return e.data}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Object(A.l)(this)},C=n(1),L="New",E={root:l(p.pageEdge,"grid","grid-cols-2","gap-2"),input:l(p.background,p.borderGray,"px-3"),checkbox:l("translate-y-1.5","transform-gpu"),error:l("col-span-2","pt-2","text-red-500","text-xs"),button:l(p.buttonStyle,"col-span-2")},z={id:"",name:"",apiKey:"",apiSecret:"",quota:0,disabled:!1},F=function(){var e=Object(x.h)().id,t=Object(a.useState)(Object(i.a)({},z)),n=Object(m.a)(t,2),c=n[0],r=n[1];Object(a.useEffect)((function(){var t=w.accounts.find((function(t){return t.id===e}))||z;r(Object(i.a)({},t))}),[e]);var s=function(e){var t=e.currentTarget,n="checkbox"===t.type?t.checked:t.value,a=t.name;r(Object(i.a)(Object(i.a)({},c),{},Object(f.a)({},a,n)))};return Object(C.jsxs)("div",{className:E.root,children:[Object(C.jsx)("label",{children:"\u540d\u7a31"}),Object(C.jsx)("input",{className:E.input,name:"name",type:"text",value:c.name,onChange:s}),e===L&&Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)("label",{children:"API key"}),Object(C.jsx)("input",{className:E.input,name:"apiKey",type:"text",value:c.apiKey,onChange:s}),Object(C.jsx)("label",{children:"API Secret"}),Object(C.jsx)("input",{className:E.input,name:"apiSecret",type:"text",value:c.apiSecret,onChange:s})]}),Object(C.jsx)("label",{children:"\u55ae\u7b46\u6295\u8cc7\u984d"}),Object(C.jsx)("input",{className:E.input,name:"quota",type:"number",value:c.quota,onChange:s}),Object(C.jsx)("label",{children:"\u505c\u7528"}),Object(C.jsx)("input",{className:E.checkbox,name:"disabled",type:"checkbox",checked:c.disabled,onChange:s}),Object(C.jsx)("pre",{className:E.error,children:c.error}),Object(C.jsx)("button",{className:E.button,onClick:function(){var t=[];c.name||t.push("\u8acb\u8f38\u5165 \u540d\u7a31"),e===L&&(c.apiKey||t.push("\u8acb\u8f38\u5165 api Key"),c.apiSecret||t.push("\u8acb\u8f38\u5165 api Secret"),r(Object(i.a)(Object(i.a)({},c),{},{error:t.join("\n")}))),t.length>0||w.save(c)},children:"\u5132\u5b58"})]})},P=n(9),q={root:l(p.pageEdge),actions:l("flex","justify-end"),action:l(p.buttonStyle,"w-28"),table:l("table-auto","rounded","border-collapse","border","border-gray-800","min-w-full"),tableCell:l("py-3","px-2","border","border-gray-600","h-10","text-center"),balancesCell:l("h-full","overflow-auto","text-left")},K=Object(P.b)((function(){return Object(a.useEffect)((function(){Object(y.a)(v.a.mark((function e(){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.loadAccounts();case 2:case"end":return e.stop()}}),e)})))()}),[]),Object(C.jsxs)("div",{className:q.root,children:[Object(C.jsx)("div",{className:q.actions,children:Object(C.jsx)(O.b,{className:q.action,to:"/Account/".concat(L),children:"\u65b0\u589e\u5e33\u865f"})}),"\u5e33\u6236\u5217\u8868:",Object(C.jsxs)("table",{className:q.table,children:[Object(C.jsx)("thead",{children:Object(C.jsxs)("tr",{children:[Object(C.jsx)("th",{className:q.tableCell,children:"\u540d\u7a31"}),Object(C.jsx)("th",{className:q.tableCell,children:"\u9918\u984d (free/locked)"}),Object(C.jsx)("th",{className:q.tableCell,children:"\u55ae\u7b46\u6295\u8cc7\u984d"}),Object(C.jsx)("th",{className:q.tableCell,children:"\u505c\u7528"}),Object(C.jsx)("th",{className:q.tableCell})]})}),Object(C.jsx)("tbody",{children:w.accounts.map((function(e,t){return Object(C.jsxs)("tr",{children:[Object(C.jsx)("td",{className:q.tableCell,children:e.name}),Object(C.jsx)("td",{className:q.tableCell,children:Object(C.jsx)("pre",{className:q.balancesCell,children:(e.balances||[]).map((function(e){return"".concat(e.asset,": ").concat(e.free," / ").concat(e.locked)})).join("\n")})}),Object(C.jsx)("td",{className:q.tableCell,children:e.quota}),Object(C.jsx)("td",{className:q.tableCell,children:e.disabled?"Y":""}),Object(C.jsx)("td",{className:q.tableCell,children:Object(C.jsx)(O.b,{className:p.buttonStyle,to:"/Account/".concat(e.id),children:"\u7de8\u8f2f"})})]},t)}))})]})]})})),B={isDev:"localhost:4200"===window.location.host},D=n(15),I=n.n(D);!function(e){e[e.Authenticated=0]="Authenticated",e[e.Authorized=1]="Authorized"}(c||(c={}));var R=new function e(){var t=this;Object(N.a)(this,e),this.authStatus=void 0,this.setAuthStatus=function(e){t.authStatus=e},Object(A.l)(this);var n=I.a.get("auth-token");this.setAuthStatus(n?c.Authorized:void 0)},T={root:l("m-16","p-16")},G=Object(P.b)((function(){var e=Object(a.useState)(""),t=Object(m.a)(e,2),n=t[0],r=t[1];return Object(a.useEffect)((function(){B.isDev?r("/#/Register"):fetch("/auth/url").then((function(e){return e.text()})).then((function(e){r(e)}))}),[]),R.authStatus===c.Authenticated?Object(C.jsx)(x.a,{push:!0,to:Y(_.Register)}):Object(C.jsx)("div",{className:T.root,children:Object(C.jsx)("a",{className:p.buttonStyle,href:n,children:"\u767b\u5165"})})})),J={root:l("m-16","p-16")},M=function(){return Object(C.jsx)(C.Fragment,{children:"SignalsSignalsSignals"})},_={Login:{path:"/",exact:!0,component:G},Register:{path:"/Register",component:Object(P.b)((function(){var e=Object(a.useMemo)((function(){return I.a.get("auth-token")}),[]),t=Object(a.useState)(!1),n=Object(m.a)(t,2),c=n[0],r=n[1];return e?c?Object(C.jsx)(x.a,{push:!0,to:Y(_.Accounts)}):Object(C.jsx)("div",{className:J.root,children:Object(C.jsx)("button",{className:p.buttonStyle,onClick:function(){B.isDev?r(!0):k.a.post("/auth/register").then((function(){r(!0)}))},children:"\u8a3b\u518a"})}):Object(C.jsx)(x.a,{push:!0,to:Y(_.Login)})})),protectionLevel:c.Authenticated},Accounts:{path:"/Accounts",lable:"\u5e63\u5b89\u5e33\u6236",component:K,protectionLevel:c.Authorized},Account:{path:"/Account/:id",lable:"\u7de8\u8f2f\u5e63\u5b89\u5e33\u6236",component:F,protectionLevel:c.Authorized},Signals:{path:"/Signals",lable:"\u8a0a\u865f\u7d00\u9304",component:M,protectionLevel:c.Authorized}},Y=function(e){return e.path?Object(x.f)(e.path):""},H=[_.Accounts,_.Signals],Q={root:l("bg-white","dark:bg-gray-800","py-3","px-6","flex","justify-between"),menus:l("flex","justify-between"),site:l("font-bold"),menu:l("pl-6")},U=Object(P.b)((function(){return Object(C.jsxs)("div",{className:Q.root,children:[Object(C.jsxs)("div",{className:Q.menus,children:[Object(C.jsx)("div",{className:Q.site,children:"TradingBotttt v.0"}),R.authStatus===c.Authorized&&H.map((function(e,t){return Object(C.jsx)(O.b,{to:Y(e),className:Q.menu,children:e.lable},t)}))]}),R.authStatus===c.Authorized&&Object(C.jsx)("button",{onClick:function(){R.setAuthStatus(void 0)},children:"logout"})]})})),V=Object.values(_),W=Object(P.b)((function(){return Object(C.jsx)(x.d,{children:V.map((function(e,t){return e.protectionLevel&&e.protectionLevel!==R.authStatus?Object(C.jsx)(x.a,{to:Y(_.Login)},t):Object(C.jsx)(x.b,Object(i.a)({},e),t)}))})})),X={authStore:R,accountStore:w},Z=X;window.stores=X,k.a.interceptors.request.use((function(e){var t=I.a.get("auth-token");return t&&(e.headers.Authorization="Bearer ".concat(t)),e}),(function(e){return Promise.reject(e)})),k.a.interceptors.response.use((function(e){return e}),(function(e){if(e.response)switch(e.response.status){case 401:window.location.href="/"}return Promise.reject(e)}));var $=u(p.background,p.textColor,"min-h-screen"),ee=function(){return Object(a.useEffect)((function(){document.documentElement.classList.add("dark")}),[]),Object(C.jsx)("div",{className:$,children:Object(C.jsx)(P.a,Object(i.a)(Object(i.a)({},Z),{},{children:Object(C.jsxs)(O.a,{children:[Object(C.jsx)(U,{}),Object(C.jsx)(W,{})]})}))})},te=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,70)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),r(e),s(e)}))};n(68);o.a.render(Object(C.jsx)(r.a.StrictMode,{children:Object(C.jsx)(ee,{})}),document.getElementById("root")),te()}},[[69,1,2]]]);
//# sourceMappingURL=main.7af0ee21.chunk.js.map