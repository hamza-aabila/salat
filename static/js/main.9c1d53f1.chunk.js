(window.webpackJsonpsalat=window.webpackJsonpsalat||[]).push([[0],{20:function(e){e.exports=JSON.parse('{"fajr":{"ar":"\u0627\u0644\u0641\u062c\u0631","fr":"fajr"},"chorouq":{"fr":"chorouq","ar":"\u0627\u0644\u0634\u0631\u0648\u0642"},"dhuhr":{"fr":"dhuhr","ar":"\u0627\u0644\u0638\u0647\u0631"},"asr":{"fr":"asr","ar":"\u0627\u0644\u0639\u0635\u0631"},"maghrib":{"fr":"maghrib","ar":"\u0627\u0644\u0645\u063a\u0631\u0628"},"ishae":{"fr":"ishae","ar":"\u0627\u0644\u0639\u0634\u0627\u0621"}}')},35:function(e,t,n){e.exports=n(67)},42:function(e,t,n){},67:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(5),o=n.n(c),l=n(9),u=n.n(l),i=n(11),s=n(7),f=(n(41),n(42),n(2)),p=n.n(f),m=n(4),d=n(10),g=(n(44),n(45),{prayers:null,cities:null,id:parseInt(localStorage.getItem("id")||"1"),lang:localStorage.getItem("lang")||"ar",languages:["ar","fr"],time:p()()}),O=a.a.createContext(g);function b(){var e=Object(m.a)(["\n  height: 100vh;\n"]);return b=function(){return e},e}function y(){var e=Object(m.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n"]);return y=function(){return e},e}function v(){var e=Object(m.a)(["\n  width: 64px;\n  height: 64px;\n  flex: 1;\n  &:after {\n    content: ' ';\n    display: block;\n    width: 46px;\n    height: 46px;\n    margin: 1px;\n    border-radius: 50%;\n    border: 5px solid #fff;\n    border-color: #fff transparent #fff transparent;\n    animation: "," 1.2s linear infinite;\n  }\n"]);return v=function(){return e},e}function h(){var e=Object(m.a)(["\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n"]);return h=function(){return e},e}var j=Object(d.b)(h()),E=d.a.div(v(),j),w=d.a.div(y()),x=Object(d.a)(w)(b()),P=function(){var e="fr"===Object(r.useContext)(O).lang?"Chargement en cours ...":"... \u062c\u0627\u0631 \u0627\u0644\u062a\u062d\u0645\u064a\u0644";return a.a.createElement(x,null,a.a.createElement(w,null,a.a.createElement(E,null),a.a.createElement("h1",null,e)))},S=function(e){var t=e.format,n=Object(r.useContext)(O),c=n.cities,o=n.time,l=n.id,u=n.lang,i=c?c.find(function(e){return e.id===l}).name:null;return a.a.createElement("div",{className:"clock"},a.a.createElement("h1",null,i),a.a.createElement("h2",null,o.locale(u).format("dddd LL")),a.a.createElement("h2",null,a.a.createElement("span",null,p()(o).format(t||"HH:mm:ss"))))},I=n(20),C=function(e){var t={};return Object.keys(I).forEach(function(n){t[n]=p()(function(e,t){var n=e.split(":"),r=Object(s.a)(n,2),a=r[0],c=r[1],o=p()();return o.date(t),o.hour(parseInt(a)),o.minute(parseInt(c)),o.second(0),o}(e[n],e.day))}),t},k=n(20),N=function(){var e=Object(r.useContext)(O),t=e.prayers,n=e.id,c=e.time,o=e.lang,l={flexDirection:"".concat("fr"===o?"row":"row-reverse")},u=(t||[]).find(function(e){return e.id===n}),i=Object(r.useState)(),f=Object(s.a)(i,2),m=f[0],d=f[1],g=Object(r.useState)(),b=Object(s.a)(g,2),y=b[0],v=b[1],h=C(u),j=function(){var e=Object.keys(h).filter(function(e){return c.isBefore(h[e])});y=0===e.length?k[0]:e[0],v(y);var t=p()(h[y].diff(c)).format("HH:mm:ss");d(t)};return Object(r.useEffect)(function(){j();var e=setInterval(j,1e3);return function(){clearInterval(e)}},[c]),a.a.createElement("div",{className:"card"},a.a.createElement("ul",null,Object.keys(k).map(function(e){return a.a.createElement("li",{style:l,key:e,className:e===y?"next-prayer":""},a.a.createElement("div",{className:"name"},k[e][o]),e===y&&a.a.createElement("div",{className:"difference"},m),a.a.createElement("div",{className:"time"},u[e]))})),a.a.createElement("dl",null))},D=n(1),A=n(33);function _(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function H(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?_(n,!0).forEach(function(t){Object(D.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):_(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var G=function(e){var t=e.onChange,n=Object(r.useContext)(O),c=n.cities,o=n.id,l=n.lang,u=c?c.map(function(e){return{value:e.id,label:e.name}}):[],i={singleValue:function(e){return H({},e,{padding:"20px 10px",width:"100%",textAlign:"ar"===l?"right":"left"})},menu:function(e){return H({},e,{textAlign:"ar"===l?"right":"left"})}};return a.a.createElement("div",{className:"select"},a.a.createElement(A.a,{styles:i,options:u,menuPlacement:"top",value:u.find(function(e){return e.value===o}),onChange:t}))},R=function(e){var t=e.onChange,n=Object(r.useContext)(O),c=n.lang,o=n.languages;return a.a.createElement("select",{value:c,onChange:t},o.map(function(e){return a.a.createElement("option",{value:e,key:e},e)}))},L=n(32),J=n.n(L);function T(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function F(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?T(n,!0).forEach(function(t){Object(D.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):T(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var Y=function(){var e=Object(i.a)(u.a.mark(function e(t,n){var r;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(localStorage.getItem(t)){e.next=6;break}return e.next=3,J.a.get(n);case 3:return r=e.sent.data,localStorage.setItem(t,JSON.stringify(r)),e.abrupt("return",r);case 6:return e.abrupt("return",JSON.parse(localStorage.getItem(t)||""));case 7:case"end":return e.stop()}},e)}));return function(t,n){return e.apply(this,arguments)}}(),q=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];Object.keys(F({},localStorage)).filter(function(e){return!t.includes(e)}).forEach(function(e){return localStorage.removeItem(e)})},B="LOAD_CITIES",M="LOAD_PRAYERS";function U(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function V(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?U(n,!0).forEach(function(t){Object(D.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):U(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var z=function(e,t){switch(t.type){case"CHANGE_CITY":return localStorage.setItem("id",t.payload),V({},e,{id:t.payload});case"CHANGE_LANGUAGE":return localStorage.setItem("lang",t.payload),V({},e,{lang:t.payload});case"REFRESH_TIME":return V({},e,{time:t.payload});case B:return V({},e,{cities:t.payload});case M:return V({},e,{prayers:t.payload});default:return e}},K="https://maroc-salat.herokuapp.com/",Q=function(){var e=Object(r.useReducer)(z,g),t=Object(s.a)(e,2),n=t[0],c=t[1];Object(r.useEffect)(function(){function e(){return(e=Object(i.a)(u.a.mark(function e(){var t,r,a,o;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t="prayers_".concat(p()().date(),"_").concat(p()().month()+1),r="".concat(K,"prayer?month=").concat(p()().month()+1,"&day=").concat(p()().date()),e.next=4,Y("cities_".concat(n.lang),"".concat(K,"city?lang=").concat(n.lang));case 4:return a=e.sent,c({type:B,payload:a}),e.next=8,Y(t,r);case 8:o=e.sent,c({type:M,payload:o}),q("id","cities_ar","cities_fr","lang",t);case 11:case"end":return e.stop()}},e)}))).apply(this,arguments)}!function(){e.apply(this,arguments)}()},[n.lang]),Object(r.useEffect)(function(){var e=setInterval(function(){return c({type:"REFRESH_TIME",payload:p()()})},1e3);return function(){clearInterval(e)}});return a.a.createElement(O.Provider,{value:n},a.a.createElement("div",{id:"main"},a.a.createElement(R,{onChange:function(e){return c({payload:e.target.value,type:"CHANGE_LANGUAGE"})}}),n.id&&n.prayers?a.a.createElement(a.a.Fragment,null,a.a.createElement(S,null),a.a.createElement(N,null),a.a.createElement(G,{onChange:function(e){return c({payload:e.value,type:"CHANGE_CITY"})}})):a.a.createElement(P,null)))};o.a.render(a.a.createElement(Q,null),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.9c1d53f1.chunk.js.map