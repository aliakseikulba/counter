(this.webpackJsonpcounter=this.webpackJsonpcounter||[]).push([[0],[,,function(e,t,a){e.exports={display:"Counter_display__2IUo3",counter:"Counter_counter__2d6O8",counterFinal:"Counter_counterFinal__1xsDE",counterTitle:"Counter_counterTitle__3hzE6",errorTitle:"Counter_errorTitle__29Nip",buttonsArea:"Counter_buttonsArea__21vEO"}},function(e,t,a){e.exports={settings:"Setter_settings__1fg4S",settingsTitle:"Setter_settingsTitle__2V7Ci",setter:"Setter_setter__2RaZh",errorSetter:"Setter_errorSetter__32SC9"}},,,function(e,t,a){e.exports={btn:"Btn_btn__3iWZQ",disabled:"Btn_disabled__2NUhn"}},function(e,t,a){e.exports={display:"Controller_display__281Hm",buttonsArea:"Controller_buttonsArea__26rxY"}},,,,,,function(e,t,a){},function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(8),s=a.n(c),l=(a(13),a(4)),u=(a(14),a(2)),i=a.n(u),o=a(6),b=a.n(o),j=a(0),d=function(e){var t=e.callback,a=e.isDisabled,n=e.name,r="".concat(a?b.a.disabled:b.a.btn);return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("button",{className:r,onClick:t,disabled:a,children:n})})},m=function(e){var t=e.counter,a=e.startValue,n=e.maxValue,r=e.incrementValue,c=e.resetValue,s=e.changeValue,l=t===n?i.a.counterFinal:i.a.counter,u=function(){return a>=n||a<0};return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("div",{className:i.a.display,children:[!s&&Object(j.jsx)("div",{className:l,children:t}),s&&!u()&&Object(j.jsx)("div",{className:i.a.counterTitle,children:"change value and press 'Set'"}),u()&&Object(j.jsx)("div",{className:i.a.errorTitle,children:"incorrect value!"})]}),Object(j.jsxs)("div",{className:i.a.buttonsArea,children:[Object(j.jsx)(d,{callback:r,isDisabled:s||t===n,name:"Inc"}),Object(j.jsx)(d,{callback:c,isDisabled:s||t===a,name:"Reset"})]})]})},x=a(7),O=a.n(x),h=a(3),_=a.n(h),g=function(e){var t=e.name,a=e.startValue,n=e.maxValue,r=e.inputValue,c=e.changeValue,s=a<0||a>=n?_.a.errorSetter:_.a.setter;return Object(j.jsxs)("div",{className:_.a.settings,children:[Object(j.jsx)("div",{className:_.a.settingsTitle,children:t}),Object(j.jsx)("input",{className:s,value:r,onChange:c,type:"number"})]})},V=function(e){var t=e.startValue,a=e.maxValue,n=e.changeStartValue,r=e.changeMaxValue,c=e.changeCounter,s=e.setChangeValue;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("div",{className:O.a.display,children:[Object(j.jsx)(g,{name:"start value:",startValue:t,maxValue:a,inputValue:t,changeValue:function(e){var t=Number(e.currentTarget.value);n(t)}}),Object(j.jsx)(g,{name:"max value:",startValue:t,maxValue:a,inputValue:a,changeValue:function(e){var t=Number(e.currentTarget.value);r(t)}})]}),Object(j.jsx)("div",{className:O.a.buttonsArea,children:Object(j.jsx)(d,{callback:function(){s(!1),c()},isDisabled:t>=a||t<0,name:"Set"})})]})};var f=function(){var e=Object(n.useState)(0),t=Object(l.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(0),s=Object(l.a)(c,2),u=s[0],i=s[1],o=Object(n.useState)(a),b=Object(l.a)(o,2),d=b[0],x=b[1],O=Object(n.useState)(!1),h=Object(l.a)(O,2),_=h[0],g=h[1];return Object(n.useEffect)((function(){var e=localStorage.getItem("startValue"),t=JSON.parse(e);r(t),x(t),g(!0);var a=localStorage.getItem("maxValue"),n=JSON.parse(a);i(n)}),[]),Object(n.useEffect)((function(){localStorage.setItem("startValue",JSON.stringify(a)),localStorage.setItem("maxValue",JSON.stringify(u))}),[a,u]),Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)("h1",{className:"title",children:"custom counter"}),Object(j.jsxs)("div",{className:"content",children:[Object(j.jsx)("div",{className:"wrapper",children:Object(j.jsx)(V,{startValue:a,maxValue:u,setChangeValue:g,changeStartValue:function(e){g(!0),r(e)},changeMaxValue:function(e){g(!0),i(e)},changeCounter:function(){x(a)}})}),Object(j.jsx)("div",{className:"wrapper",children:Object(j.jsx)(m,{counter:d,startValue:a,maxValue:u,changeValue:_,incrementValue:function(){x((function(e){return e+1}))},resetValue:function(){x(a)}})})]})]})},v=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,17)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;a(e),n(e),r(e),c(e),s(e)}))};s.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(f,{})}),document.getElementById("root")),v()}],[[16,1,2]]]);
//# sourceMappingURL=main.63df8564.chunk.js.map