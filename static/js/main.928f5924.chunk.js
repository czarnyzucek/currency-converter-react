(this["webpackJsonpcurrency-converter-react"]=this["webpackJsonpcurrency-converter-react"]||[]).push([[0],[,,,,,,,,,function(e,t,r){},function(e,t,r){},,function(e,t,r){},function(e,t,r){},function(e,t,r){},function(e,t,r){"use strict";r.r(t);var n=r(1),a=r.n(n),c=r(4),s=r.n(c),l=(r(9),r(2)),o=(r(10),r(0)),u=function(e){var t=e.title;return Object(o.jsx)("h1",{className:"header",children:t})},i=(r(12),function(e){var t=e.children;return Object(o.jsx)("div",{className:"container",children:t})}),j=(r(13),[{short:"EUR",name:"Euro",rate:4.56},{short:"USD",name:"Dolar ameryka\u0144ski",rate:3.68},{short:"GBP",name:"Funt brytyjski",rate:5.23},{short:"CHF",name:"Frank szwajcarski",rate:4.12}]),m=(r(14),function(e){var t=e.result;return Object(o.jsx)("p",{className:"form__result",children:void 0!==t&&Object(o.jsxs)(o.Fragment,{children:[t.sourceAmount.toFixed(2),"\xa0PLN\xa0="," ",Object(o.jsxs)("strong",{children:[t.targetAmount.toFixed(2),"\xa0",t.currency]})]})})}),b=function(e){var t=e.calculateResult,r=e.result,a=Object(n.useState)(j[0].short),c=Object(l.a)(a,2),s=c[0],u=c[1],i=Object(n.useState)(""),b=Object(l.a)(i,2),f=b[0],d=b[1];return Object(o.jsxs)("form",{className:"form",onSubmit:function(e){e.preventDefault(),t(s,f)},children:[Object(o.jsxs)("fieldset",{className:"form__fieldset",children:[Object(o.jsx)("legend",{className:"form__legend",children:"Kalkulator walut"}),Object(o.jsx)("p",{className:"form__pragraph",children:Object(o.jsxs)("label",{className:"form__label",children:[Object(o.jsx)("span",{className:"form__labelData",children:"Kwota w PLN:*"}),Object(o.jsx)("input",{value:f,onChange:function(e){var t=e.target;return d(t.value)},className:"form__field",type:"number",name:"amount",step:"0.10",min:"0",required:!0})]})}),Object(o.jsx)("p",{className:"form__pragraph",children:Object(o.jsxs)("label",{className:"form__label",children:[Object(o.jsx)("span",{className:"form__labelData ",children:"Waluta:"}),Object(o.jsx)("select",{className:"form__field",value:s,onChange:function(e){var t=e.target;return u(t.value)},children:j.map((function(e){return Object(o.jsx)("option",{value:e.short,children:e.name},e.short)}))})]})})]}),Object(o.jsx)("div",{className:"form__buttonsContener",children:Object(o.jsx)("button",{className:"form__button",children:"Przelicz"})}),Object(o.jsx)(m,{result:r}),Object(o.jsx)("p",{className:"form__information",children:"*pole obowi\u0105zkowe"})]})};var f=function(){var e=Object(n.useState)(),t=Object(l.a)(e,2),r=t[0],a=t[1];return Object(o.jsxs)(i,{children:[Object(o.jsx)(u,{title:"Internetowy kantor"}),Object(o.jsx)(b,{result:r,calculateResult:function(e,t){var r=j.find((function(t){return t.short===e})).rate;a({sourceAmount:+t,targetAmount:t/r,currency:e})}})]})},d=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,16)).then((function(t){var r=t.getCLS,n=t.getFID,a=t.getFCP,c=t.getLCP,s=t.getTTFB;r(e),n(e),a(e),c(e),s(e)}))};s.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(f,{})}),document.getElementById("root")),d()}],[[15,1,2]]]);
//# sourceMappingURL=main.928f5924.chunk.js.map