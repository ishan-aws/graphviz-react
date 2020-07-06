(this["webpackJsonpgraphviz-react-demo"]=this["webpackJsonpgraphviz-react-demo"]||[]).push([[0],{135:function(n,e){},136:function(n,e){},137:function(n,e,t){"use strict";var r=t(2),o=t(0),a=t.n(o),c=t(1),u=t(3);function i(){var n=Object(r.a)(["\n  display: flex;\n  justify-content: center;\n  padding: 10px;\n"]);return i=function(){return n},n}function l(){var n=Object(r.a)(["\n  background-color: ",";\n  display: grid;\n  grid-template-columns: 1fr 3fr;\n"]);return l=function(){return n},n}var d=Object(u.a)().backgroundColor,b=c.c.div(l(),d),f=c.c.div(i());e.a=function(n){var e=n.children,t=n.columns;void 0===t&&a.a.Children.count(e);return a.a.createElement(b,null,a.a.Children.map(e,(function(n){return a.a.createElement(f,null,n)})))}},138:function(n,e,t){"use strict";var r=t(145);t.d(e,"OptionsSelector",(function(){return r.a}));var o=t(139);t.o(o,"TabbedContainer")&&t.d(e,"TabbedContainer",(function(){return o.TabbedContainer}))},139:function(n,e){},140:function(n,e,t){"use strict";var r=t(5),o=t(2),a=t(0),c=t.n(a),u=t(1),i=t(3);function l(){var n=Object(o.a)(["\n  background-color: ",";\n  color: ",";\n  position: absolute;\n  border: 1px solid ",";\n  :focus {\n    outline: none;\n  }\n"]);return l=function(){return n},n}function d(){var n=Object(o.a)(["\n  display: flex;\n  flex-direction: row-reverse;\n"]);return d=function(){return n},n}function b(){var n=Object(o.a)(["\n  body {\n    background-color: ",";\n  }\n"]);return b=function(){return n},n}var f=Object(i.a)(),s=f.backgroundColor,p=f.textColor,v=Object(u.b)(b(),s),g=u.c.div(d()),h=u.c.button(l(),s,p,p);e.a=function(n){var e=n.children,t=n.themes,o=Object(a.useState)(0),i=Object(r.a)(o,2),l=i[0],d=i[1],b=t[l];return 0===t.length?c.a.createElement(c.a.Fragment,null,e):c.a.createElement(u.a,{theme:{mode:b}},c.a.createElement(v,null),c.a.createElement(g,null,c.a.createElement(h,{type:"button",onClick:function(){return d((l+1)%t.length)}},"".concat(b.charAt(0).toUpperCase()).concat(b.slice(1)))),e)}},141:function(n,e,t){"use strict";var r=t(2),o=t(1),a=t(3);function c(){var n=Object(r.a)(["\n  color: ",";\n  font-weight: bold;\n  text-align: center;\n"]);return c=function(){return n},n}var u=Object(a.a)().textColor,i=o.c.h1(c(),u);e.a=i},142:function(n,e,t){"use strict";t.d(e,"a",(function(){return W}));var r=t(5),o=t(2),a=t(147),c=t(0),u=t.n(c),i=t(1),l={simple_graph:"graph {\n    a -- b\n    a -- c\n    b -- d\n    c -- d\n}",simple_directed_graph:"digraph {\n    rankdir=LR\n    a -> b\n    b -> c\n    b -> d\n    c -> e\n    d -> e\n    e -> a\n}",different_edge_types:'digraph D {\n\n    A [shape=diamond]\n    B [shape=box]\n    C [shape=circle]\n  \n    A -> B [style=dashed, color=grey]\n    A -> C [color="black:invis:black"]\n    A -> D [penwidth=5, arrowhead=none]\n  \n  }',nested_clusters:'digraph D {\n\n    subgraph cluster_p {\n      label = "Parent";\n  \n      subgraph cluster_c1 {\n        label = "Child one";\n        a;\n  \n        subgraph cluster_gc_1 {\n          label = "Grand-Child one";\n           b;\n        }\n        subgraph cluster_gc_2 {\n          label = "Grand-Child two";\n            c;\n            d;\n        }\n  \n      }\n  \n      subgraph cluster_c2 {\n        label = "Child two";\n        e;\n      }\n    }\n}'},d=t(3);function b(){var n=Object(o.a)(["\n  background-color: ",";\n  color: red;\n"]);return b=function(){return n},n}function f(){var n=Object(o.a)(["\n  background-color: ",";\n  color: ",";\n  resize: none;\n  :focus {\n    outline: none;\n  }\n"]);return f=function(){return n},n}var s=Object(d.a)(["graphInput","inputArea"]),p=s.backgroundColor,v=s.textColor,g=i.c.textarea(f(),p,v),h=i.c.div(b(),p),C=function(n){var e=n.dot,t=n.error,r=void 0===t?"":t,o=n.onChange,a=n.submit;return u.a.createElement(u.a.Fragment,null,u.a.createElement(g,{rows:25,value:e,onChange:function(n){return o(n.target.value)},onKeyDown:function(n){n.ctrlKey&&13===n.keyCode&&a()}}),0!==r.trim().length?u.a.createElement(h,null,r):null)},m=t(12);function O(){var n=Object(o.a)(["\n  background-color: ",";\n  color: ",";\n  :focus {\n    outline: none;\n  }\n"]);return O=function(){return n},n}var j=Object(d.a)(["graphInput","exampleSelector"]),k=j.backgroundColor,x=j.textColor,E=i.c.select(O(),k,x),w=function(n){var e=n.examples,t=n.onChange;return u.a.createElement(E,{onChange:function(n){n.target.value&&t(n.target.value)}},Object.entries(Object(m.a)({"--- Examples ---":""},e)).map((function(n){var e=Object(r.a)(n,2),t=e[0],o=e[1];return u.a.createElement("option",{key:t,value:o},t.split("_").map((function(n){return"".concat(n.charAt(0).toUpperCase()).concat(n.slice(1))})).join(" "))})))};function y(){var n=Object(o.a)(["\n  :enabled {\n    background-color: ",";\n    color: ",";\n\n    :hover {\n      background-color: ",";\n      color: ",";\n    }\n  }\n\n  :focus {\n    outline: none;\n  }\n"]);return y=function(){return n},n}var S=Object(d.a)(["graphInput","updateButton"]),T=S.backgroundColor,A=S.textColor,_=S.hoverColor,G=S.hoverTextColor,U=i.c.button(y(),T,A,_,G),z=function(n){var e=n.active,t=n.update;return u.a.createElement(U,{onClick:t,disabled:e},"Update",u.a.createElement("br",null),u.a.createElement("span",{style:{fontSize:"10pt"}},"(Ctrl + Enter)"))};function I(){var n=Object(o.a)(["\n  background-color: ",";\n  :focus {\n    outline: none;\n  }\n"]);return I=function(){return n},n}var D=["graphInput","autoUpdate"],P=Object(d.a)(D).backgroundColor,V=Object(d.a)([].concat(D,["inactive"])).backgroundColor,B=i.c.button(I(),(function(n){return n.active?P:V})),M=function(n){var e=n.active,t=n.onClick;return u.a.createElement(B,{active:e,onClick:t}," ","Auto-update: ".concat(e?"On":"Off"))};function F(){var n=Object(o.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  > * {\n    flex-grow: 1;\n    flex-shrink: 0;\n    flex-basis: 45%;\n    margin: 2px;\n  }\n"]);return F=function(){return n},n}var N=i.c.div(F()),J=function(n){var e=n.setAutoUpdate,t=n.update,o=Object(c.useState)(!1),a=Object(r.a)(o,2),i=a[0],l=a[1];return u.a.createElement(N,null,u.a.createElement(M,{active:i,onClick:function(){var n=!i;e(n),l(n)}}),u.a.createElement(z,{active:i,update:t}))};function K(){var n=Object(o.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  > * {\n    flex-grow: 1;\n    flex-shrink: 0;\n    flex-basis: 100%;\n    padding: 2px;\n  }\n"]);return K=function(){return n},n}var R=i.c.div(K()),W=function(n){var e=n.initialDot,t=void 0===e?"":e,o=n.onUpdate,i=Object(c.useState)(t),d=Object(r.a)(i,2),b=d[0],f=d[1],s=Object(c.useState)(""),p=Object(r.a)(s,2),v=p[0],g=p[1],h=Object(c.useState)(!1),m=Object(r.a)(h,2),O=m[0],j=m[1],k=function(n){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(f(n),e)try{Object(a.read)(n),o(n),g("")}catch(t){g("Parse Error: ".concat(t.message))}};return u.a.createElement(R,null,u.a.createElement(C,{dot:b,error:v,onChange:function(n){return k(n,O)},submit:function(){return k(b,!0)}}),u.a.createElement(w,{examples:l,onChange:function(n){return k(n)}}),u.a.createElement(J,{update:function(){return k(b)},setAutoUpdate:function(n){return j(n)}}))}},143:function(n,e,t){"use strict";t.d(e,"a",(function(){return _}));var r=t(89),o=t(5),a=t(2),c=t(0),u=t.n(c),i=t(1),l=t(3);function d(){var n=Object(a.a)([""]);return d=function(){return n},n}function b(){var n=Object(a.a)(["\n  border: none;\n  color: ",";\n  background-color: ",";\n  :hover {\n    background-color: ",";\n    color: ",";\n  }\n  :focus {\n    outline: none;\n  }\n"]);return b=function(){return n},n}var f=Object(l.a)(["tabContainer"]),s=f.backgroundColor,p=f.textColor,v=f.hoverColor,g=f.hoverTextColor,h=Object(l.a)(["tabContainer","inactiveTabs"]),C=h.backgroundColor,m=h.textColor,O=i.c.button(b(),(function(n){return n.active?p:m}),(function(n){return n.active?s:C}),v,g),j=Object(i.c)((function(n){var e=n.active,t=n.label,r=n.onClick;return u.a.createElement(O,{active:e,onClick:r},t)}))(d());function k(){var n=Object(a.a)(["\n  display: flex;\n  > * {\n    flex-grow: 1;\n  }\n"]);return k=function(){return n},n}var x=i.c.div(k()),E=function(n){var e=n.labels,t=void 0===e?[]:e,r=n.onClick,a=void 0===r?function(){}:r,i=Object(c.useState)(0),l=Object(o.a)(i,2),d=l[0],b=l[1];return u.a.createElement(x,null,t.map((function(n,e){return u.a.createElement(j,{active:d===e,label:n,onClick:function(){a(e),b(e)}})})))};function w(){var n=Object(a.a)(["\n  padding: 5px;\n"]);return w=function(){return n},n}function y(){var n=Object(a.a)(["\n  background-color: ",";\n  border: 2px solid black;\n"]);return y=function(){return n},n}var S=Object(l.a)(["tabContainer"]).backgroundColor,T=i.c.div(y(),S),A=i.c.div(w()),_=function(n){var e=n.labels,t=void 0===e?[]:e,a=n.children,i=Object(c.useState)(0),l=Object(o.a)(i,2),d=l[0],b=l[1],f=u.a.Children.count(a)-t.length,s=[].concat(Object(r.a)(t),Object(r.a)(new Array(f).fill(void 0))).map((function(n,e){return null!==n&&void 0!==n?n:e}));return u.a.createElement(T,null,u.a.createElement(E,{labels:s,onClick:function(n){return b(n)}}),u.a.createElement(A,null,u.a.Children.toArray(a)[d]))}},144:function(n,e,t){"use strict";var r=t(2),o=t(152),a=t(156),c=t(155),u=t(88),i=t(153),l=function(n){Object(a.a)(t,n);var e=Object(c.a)(t);function t(n){var r;return Object(o.a)(this,t),(r=e.call(this,n)).render=function(){var n=r.props.className;return u.createElement("div",{className:n,id:r.id})},r.componentDidMount=function(){r.renderGraph()},r.componentDidUpdate=function(){r.renderGraph()},r.renderGraph=function(){var n=r.props,e=n.dot,o=n.options;Object(i.graphviz)("#".concat(r.id)).options(Object.assign(Object.assign({},t.defaultOptions),o||{})).renderDot(e)},r.id="graphviz".concat(t.count),t.count+=1,r}return t}(u.Component);l.count=0,l.defaultOptions={fit:!0,height:500,width:500,zoom:!1};var d=t(1),b=t(3);function f(){var n=Object(r.a)(["\n  border: 2px solid black;\n  background-color: ",";\n  fill: ",";\n  .graph {\n    > polygon {\n      fill: ",";\n    }\n\n    /* \n      Below is an example of styling the graph with CSS but this will override\n      any styles present in the DOT string so may not be preferable.\n     */\n    /* .node {\n      > * {\n        stroke: white;\n      }\n\n      > text {\n        stroke: transparent;\n      }\n    }\n\n    .edge {\n      > * {\n        stroke: white;\n      }\n\n      > polygon {\n        fill: white;\n      }\n    }\n\n    text {\n      fill: white;\n    } */\n  }\n"]);return f=function(){return n},n}var s=Object(b.a)(["graphArea"]).backgroundColor;e.a=Object(d.c)(l)(f(),s,s,s)},145:function(n,e,t){"use strict";t.d(e,"a",(function(){return k}));var r=t(5),o=t(2),a=t(0),c=t.n(a),u=t(1),i=t(3);function l(){var n=Object(o.a)(["\n  width: 100%;\n  text-align: center;\n  background-color: ",";\n  color: ",";\n"]);return l=function(){return n},n}var d=Object(i.a)(["optionsSelector","input"]),b=d.backgroundColor,f=d.textColor,s=u.c.input(l(),b,f),p=function(n){var e=n.value,t=n.allowedValues,r=n.onChange;switch(typeof e){case"number":return c.a.createElement(s,{type:"number",min:0,step:0,defaultValue:e.toString(),onChange:function(n){return r(Number.parseInt(n.target.value,10))}});case"boolean":return c.a.createElement(s,{type:"checkbox",defaultChecked:e,onChange:function(n){return r(n.target.checked)}});case"string":return t?c.a.createElement(s,{as:"select",defaultValue:e,onChange:function(n){return r(n.target.value)}},t.map((function(n){return c.a.createElement("option",{key:n,value:n},n)}))):c.a.createElement(s,{type:"input",defaultValue:e,onChange:function(n){return r(n.target.value)}});default:return c.a.createElement(c.a.Fragment,null)}};function v(){var n=Object(o.a)(["\n  background-color: ",";\n  border-color: black;\n  border-style: solid;\n  border-width: 1px;\n  color: ",";\n  padding: 10px;\n  text-align: center;\n"]);return v=function(){return n},n}function g(){var n=Object(o.a)(["\n  border-color: black;\n  border-style: solid;\n  border-width: 1px;\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n"]);return g=function(){return n},n}var h=Object(i.a)(["optionsSelector"]),C=h.backgroundColor,m=h.textColor,O=u.c.div(g()),j=u.c.div(v(),C,m),k=function(n){var e=n.options,t=n.allowedValues,o=n.onChange;return c.a.createElement(O,null,Object.entries(e).map((function(n){var e=Object(r.a)(n,2),a=e[0],u=e[1];return c.a.createElement(c.a.Fragment,null,c.a.createElement(j,null,a.split("").map((function(n){return/[A-Z]/.test(n)?" ".concat(n):n})).map((function(n,e){return 0===e?n.toUpperCase():n})).join("")),c.a.createElement(j,null,c.a.createElement(p,{value:u,allowedValues:t?t[a]:void 0,onChange:function(n){return o(a,n)}})))})))}},157:function(n,e,t){n.exports=t(315)},21:function(n,e,t){"use strict";var r=t(142);t.d(e,"GraphInput",(function(){return r.a}));var o=t(144);t.d(e,"Graphviz",(function(){return o.a}));var a=t(137);t.d(e,"Grid",(function(){return a.a}));var c=t(138);t.o(c,"OptionsSelector")&&t.d(e,"OptionsSelector",(function(){return c.OptionsSelector})),t.o(c,"TabbedContainer")&&t.d(e,"TabbedContainer",(function(){return c.TabbedContainer}));var u=t(143);t.d(e,"TabbedContainer",(function(){return u.a}));var i=t(140);t.d(e,"ThemePicker",(function(){return i.a}));var l=t(141);t.d(e,"Title",(function(){return l.a}))},3:function(n,e,t){"use strict";t.d(e,"b",(function(){return h})),t.d(e,"a",(function(){return C}));var r=t(12),o=t(19),a=t(148),c=t.n(a),u=t(154),i="#000000",l="#282c34",d="#4b5263",b="#abb2bf",f={backgroundColor:l,textColor:b,hoverColor:"#61afef",hoverTextColor:i,graphArea:{backgroundColor:d},graphInput:{autoUpdate:{backgroundColor:"#98c379",inactive:{backgroundColor:"#be5046"}}},optionsSelector:{input:{backgroundColor:d,textColor:b}},tabContainer:{backgroundColor:Object(u.a)(.3,l),textColor:i,inactiveTabs:{backgroundColor:d,textColor:b}}},s="lightgrey",p={backgroundColor:"#ffffff",textColor:"#000000",hoverColor:"grey",graphInput:{autoUpdate:{backgroundColor:"green",inactive:{backgroundColor:"red"}},updateButton:{backgroundColor:s}},optionsSelector:{input:{backgroundColor:s}},tabContainer:{backgroundColor:"darkgrey",inactiveTabs:{backgroundColor:s}}},v=t(5);var g=function(n,e,t){return Object.entries(n).map((function(n){var r=Object(v.a)(n,2),a=r[0],c=r[1];return Object(o.a)({},a,function n(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],o=e[t]||"";if(0===r.length)return o;var a=r[0],c=e[a];return c&&n(c,t,r.slice(1))||o}(c,e,t))})).reduce((function(n,e){return Object(r.a)(Object(r.a)({},n),e)}),{})},h={dark:f,light:p},C=function(n){return["backgroundColor","textColor","hoverColor","hoverTextColor"].map((function(e){return Object(o.a)({},e,function(n,e){return c()("mode",g(h,n,e))}(e,n))})).reduce((function(n,e){return Object(r.a)(Object(r.a)({},n),e)}),{})}},312:function(n,e){},315:function(n,e,t){"use strict";t.r(e);var r=t(0),o=t.n(r),a=t(146),c=t(19),u=t(12),i=t(5),l=t(21),d=t(3),b=window,f=b.innerWidth,s=b.innerHeight,p={height:Math.floor(.7*s),width:Math.floor(.75*f),scale:1,tweenPrecision:1,engine:"dot",keyMode:"title",convertEqualSidedPolygons:!1,fade:!1,growEnteringEdges:!1,fit:!0,tweenPaths:!1,tweenShapes:!1,useWorker:!1,zoom:!1},v={engine:["circo","dot","fdp","neato","osage","patchwork","twopi"],keyMode:["title","id","tag-index","index"]},g=function(){var n=Object(r.useState)("graph { a }"),e=Object(i.a)(n,2),t=e[0],a=e[1],b=Object(r.useState)(p),f=Object(i.a)(b,2),s=f[0],g=f[1];return o.a.createElement(l.ThemePicker,{themes:Object.keys(d.b)},o.a.createElement(l.Title,null,"Graphviz-React"),o.a.createElement(l.Grid,null,o.a.createElement(l.TabbedContainer,{labels:["Input","Settings"]},o.a.createElement(l.GraphInput,{initialDot:t,onUpdate:function(n){return a(n)}}),o.a.createElement(l.OptionsSelector,{options:s,onChange:function(n,e){return g(Object(u.a)(Object(u.a)({},s),{},Object(c.a)({},n,e)))},allowedValues:v})),o.a.createElement(l.Graphviz,{dot:t,options:s})))};Object(a.render)(o.a.createElement(g,null),document.getElementById("root"))}},[[157,1,2]]]);