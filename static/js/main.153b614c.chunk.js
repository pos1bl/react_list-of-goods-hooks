(this["webpackJsonpreact_list-of-goods-hooks"]=this["webpackJsonpreact_list-of-goods-hooks"]||[]).push([[0],{14:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var c,s=n(7),r=n.n(s),o=n(6),i=n(8),a=n(4),u=n.n(a),l=n(1),E=(n(13),n(14),n(0)),b=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"];function O(t,e){return t!==e}!function(t){t.SORT_FIELD_ALPHABET="alphabet",t.SORT_FIELD_LENGTH="length",t.SORT_FIELD_REVERSE="reverse",t.NONE=""}(c||(c={}));var h=function(){var t=Object(l.useState)(c.NONE),e=Object(o.a)(t,2),n=e[0],s=e[1],r=Object(l.useState)(c.NONE),a=Object(o.a)(r,2),h=a[0],_=a[1],j=function(t,e,n){var s=Object(i.a)(t);if(e)switch(e){case c.SORT_FIELD_ALPHABET:s=s.sort((function(t,e){return t.localeCompare(e)}));break;case c.SORT_FIELD_LENGTH:s=s.sort((function(t,e){return t.length-e.length}));break;default:return s}return n&&(s=s.reverse()),s}(b,n,h);return Object(E.jsxs)("div",{className:"section content",children:[Object(E.jsxs)("div",{className:"buttons",children:[Object(E.jsx)("button",{onClick:function(){return s(c.SORT_FIELD_ALPHABET)},type:"button",className:u()("button","is-info",{"is-light":O(n,c.SORT_FIELD_ALPHABET)}),children:"Sort alphabetically"}),Object(E.jsx)("button",{onClick:function(){return s(c.SORT_FIELD_LENGTH)},type:"button",className:u()("button","is-success",{"is-light":O(n,c.SORT_FIELD_LENGTH)}),children:"Sort by length"}),Object(E.jsx)("button",{onClick:function(){return _(function(t){return t?c.NONE:c.SORT_FIELD_REVERSE}(h))},type:"button",className:u()("button","is-warning",{"is-light":O(h,c.SORT_FIELD_REVERSE)}),children:"Reverse"}),(n||h)&&Object(E.jsx)("button",{onClick:function(){s(c.NONE),_(c.NONE)},type:"button",className:"button is-danger is-light",children:"Reset"})]}),Object(E.jsx)("ul",{children:j.map((function(t){return Object(E.jsx)("li",{"data-cy":"Good",children:t},t)}))})]})};r.a.render(Object(E.jsx)(h,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.153b614c.chunk.js.map