(this.webpackJsonpg2fanpage=this.webpackJsonpg2fanpage||[]).push([[5],{67:function(e,t,a){},78:function(e,t,a){"use strict";a.r(t);var c=a(12),r=a.n(c),n=a(15),s=a(2),i=a(1),o=(a(67),a(7)),u=a(0),h=function(e){var t=e.id,a=e.name,c=e.image;return Object(u.jsx)(o.b,{to:"/characters/".concat(t),children:Object(u.jsxs)("div",{className:"character-card",children:[Object(u.jsx)("img",{src:"".concat("https://g2backend.herokuapp.com","/").concat(c),alt:a}),Object(u.jsx)("p",{children:a})]})})},j=(a(23),a(22)),l=a(16);t.default=function(){var e=Object(j.a)(),t=e.isLoading,a=(e.error,e.sendRequest),c=(e.clearError,Object(i.useState)([])),o=Object(s.a)(c,2),d=o[0],p=o[1],b=Object(i.useState)(),f=Object(s.a)(b,2),O=f[0],m=f[1],v=Object(i.useState)(""),g=Object(s.a)(v,2),x=g[0],k=g[1];Object(i.useEffect)((function(){window.scrollTo(0,0);var e=function(){var e=Object(n.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,a("".concat("https://g2backend.herokuapp.com","/api/characters/"));case 3:t=e.sent,p(t.characters),m(t.characters),e.next=10;break;case 8:e.prev=8,e.t0=e.catch(0);case 10:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();e()}),[a]);return Object(u.jsxs)("div",{className:"characters",children:[Object(u.jsx)("div",{className:"characters-image",children:Object(u.jsx)("h1",{children:"Characters"})}),Object(u.jsx)("input",{value:x,placeholder:"search",onChange:function(e){k(e.target.value);var t=e.target.value.toLowerCase(),a=O.filter((function(e){return e.name.toLowerCase().includes(t)}));p(a)}}),Object(u.jsxs)("div",{className:"characters-list",children:[t&&Object(u.jsx)(l.a,{asOverlay:!0}),d.length>0?function(){var e;return d&&(e=d.sort((function(e,t){return e.name>t.name?1:-1})).map((function(e){return Object(u.jsx)(h,{id:e.id,name:e.name,image:e.image,description:e.description,intresting_facts:e.intresting_facts},e.id)}))),e}():Object(u.jsx)("p",{children:"No characters found"})]})]})}}}]);
//# sourceMappingURL=5.8c83d498.chunk.js.map