(this["webpackJsonpreact_list-of-goods-hooks"]=this["webpackJsonpreact_list-of-goods-hooks"]||[]).push([[0],{14:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var s,c=n(7),o=n.n(c),i=n(6),r=n(8),a=n(1),l=(n(13),n(14),n(4)),u=n.n(l),b=n(0),h=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"];!function(t){t[t.NONE=0]="NONE",t[t.ALPHABET=1]="ALPHABET",t[t.LENGTH=2]="LENGTH"}(s||(s={}));var j=function(){var t=Object(a.useState)(!1),e=Object(i.a)(t,2),n=e[0],c=e[1],o=Object(a.useState)(s.NONE),l=Object(i.a)(o,2),j=l[0],d=l[1],N=function(t,e){var n=e.sortType,c=e.isReversed,o=Object(r.a)(t);switch(console.log(n,c),n){case s.ALPHABET:o.sort((function(t,e){return t.localeCompare(e)}));break;case s.LENGTH:o.sort((function(t,e){return t.length-e.length}))}return c?o.reverse():o}(h,{sortType:j,isReversed:n});return Object(b.jsxs)("div",{className:"section content",children:[Object(b.jsxs)("div",{className:"buttons",children:[Object(b.jsx)("button",{type:"button",className:u()("button is-info",{"is-light":j!==s.ALPHABET}),onClick:function(){d(s.ALPHABET)},children:"Sort alphabetically"}),Object(b.jsx)("button",{type:"button",className:u()("button is-success",{"is-light":j!==s.LENGTH}),onClick:function(){d(s.LENGTH)},children:"Sort by length"}),Object(b.jsx)("button",{type:"button",className:u()("button is-warning",{"is-light":!n}),onClick:function(){c(!n)},children:"Reverse"}),(j||n)&&Object(b.jsx)("button",{type:"button",className:"button is-danger is-light",onClick:function(){d(s.NONE),c(!1)},children:"Reset"})]}),Object(b.jsx)("ul",{children:N.map((function(t){return Object(b.jsx)("li",{"data-cy":"Good",children:t},t)}))})]})};o.a.render(Object(b.jsx)(j,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.947f5c65.chunk.js.map