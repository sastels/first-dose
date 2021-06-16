(this["webpackJsonpfirst-dose"]=this["webpackJsonpfirst-dose"]||[]).push([[0],{18:function(e,t){t.chartData=function(e,t,a,n){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:16084224e5,c=arguments.length>5&&void 0!==arguments[5]?arguments[5]:100,s=e[a]||{},i=[];for(var o in s)if(null!==s[o]){var d=s[o];d.date>=r&&i.push([d.date,d[t]*c/n])}return i}},35:function(e,t,a){},37:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(25),s=a.n(c),i=(a(35),a(20)),o=a(6),d=a.n(o),u=a(12),l=a(19),j=(a(37),a(17)),p=(a(45),a(24)),h=a.n(p),b=a(26),O=a.n(b),f=a(2);var x=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"percent",r={plotOptions:{line:{marker:{enabled:!1}}},tooltip:{shared:!0,formatter:function(){var e=new Date(this.x),t=e.getTimezoneOffset(),r=(e=new Date(e.getTime()+60*t*1e3)).toISOString().split("T")[0]+"<br>";return r+=this.points.map((function(e){return"".concat(e.series.name,": ").concat(e.y.toFixed(a))+("percent"===n?"%":"")})).join("<br>")}},chart:{zoomType:"x",resetZoomButton:{position:{align:"left",y:-40}}},title:{text:e},xAxis:{type:"datetime"},yAxis:[{title:{text:"percent"===n?"Percentage covered":""}},{title:{text:" "},linkedTo:0,opposite:!0}],series:t};return Object(f.jsx)("div",{style:{boxShadow:"0 0 3px #ddd"},children:Object(f.jsx)(O.a,{highcharts:h.a,options:r})})},v=a(18),m=a(63),w=a(67),g=a(66),y=a(62),k=a(64),D=a(65),C=function(e){var t=e.data,a=e.keys,n=e.population;return Object(f.jsx)(y.a,{children:Object(f.jsxs)(m.a,{size:"small",children:[Object(f.jsx)(k.a,{children:Object(f.jsxs)(D.a,{children:[Object(f.jsx)(g.a,{}),Object(f.jsx)(g.a,{children:"First Dose"}),Object(f.jsx)(g.a,{children:"Fully Vaccinated"})]})}),Object(f.jsx)(w.a,{children:a.map((function(e){return t[e]&&Object(f.jsxs)(D.a,{children:[Object(f.jsx)(g.a,{children:e}),Object(f.jsxs)(g.a,{children:[(100*t[e].slice(-1)[0].peopleVaccinated/n[e]).toFixed(1)," ","%"]}),Object(f.jsxs)(g.a,{children:[(100*t[e].slice(-1)[0].peopleFullyVaccinated/n[e]).toFixed(1)," ","%"]})]},e)}))})]})})},S=a(68);j.a.initializeApp({apiKey:"AIzaSyCYOlqH5i8Q_nN_5i91JvUY3qU4Blan9Uo",authDomain:"first-dose-eb9bd.firebaseapp.com",projectId:"first-dose-eb9bd",storageBucket:"first-dose-eb9bd.appspot.com",messagingSenderId:"212541290476",appId:"1:212541290476:web:03a13b63cb5280de87b2c9",measurementId:"G-2CY2T47KWQ"});var T={Israel:8652167,"United Kingdom":67893379,"United States":334438269,Canada:37746527,Ontario:14745040,Ottawa:1060658},F=function(e){var t=null,a=e.Canada||{};for(var n in a)if(null!==a[n]){var r=a[n];t=t?Math.max(t,r.date):r.date}return(t=new Date(t)).toISOString().substring(0,10)};var I=function(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)([]),s=Object(l.a)(c,2),o=s[0],p=s[1],h=Object(n.useState)([]),b=Object(l.a)(h,2),O=b[0],m=b[1],w=Object(n.useState)([]),g=Object(l.a)(w,2),y=g[0],k=g[1],D=Object(n.useState)([]),I=Object(l.a)(D,2),N=I[0],V=I[1],L=function(){var e=Object(u.a)(d.a.mark((function e(){var t,a,n,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=j.a.storage(),a=t.ref(),e.next=4,a.child("ourWorldInData.json").getDownloadURL();case 4:n=e.sent,(c=new XMLHttpRequest).responseType="json",c.onload=Object(u.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.response;case 2:t=e.sent,r(t),V(F(t));case 5:case"end":return e.stop()}}),e)}))),c.open("GET",n),c.send();case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),U=function(){var e=Object(u.a)(d.a.mark((function e(){var t,a,n,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=j.a.storage(),a=t.ref(),e.next=4,a.child("covid19_tracker_canada.json").getDownloadURL();case 4:n=e.sent,(r=new XMLHttpRequest).responseType="json",r.onload=Object(u.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.response;case 2:t=e.sent,p(t);case 4:case"end":return e.stop()}}),e)}))),r.open("GET",n),r.send();case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),B=function(){var e=Object(u.a)(d.a.mark((function e(){var t,a,n,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=j.a.storage(),a=t.ref(),e.next=4,a.child("covid19_tracker_on.json").getDownloadURL();case 4:n=e.sent,(r=new XMLHttpRequest).responseType="json",r.onload=Object(u.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.response;case 2:t=e.sent,m(t);case 4:case"end":return e.stop()}}),e)}))),r.open("GET",n),r.send();case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),R=function(){var e=Object(u.a)(d.a.mark((function e(){var t,a,n,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=j.a.storage(),a=t.ref(),e.next=4,a.child("covid19_tracker_ottawa.json").getDownloadURL();case 4:n=e.sent,(r=new XMLHttpRequest).responseType="json",r.onload=Object(u.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.response;case 2:t=e.sent,k(t);case 4:case"end":return e.stop()}}),e)}))),r.open("GET",n),r.send();case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){L(),U(),B(),R()}),[]);var _=Object(i.a)(Object(i.a)(Object(i.a)(Object(i.a)({},a),o),O),y),q=["Israel","United Kingdom","United States","Canada"],A=["Canada","Ontario","Ottawa"];return[].concat(q,A).some((function(e){return!(e in _)}))?"":(q.sort((function(e,t){var a=_[e].slice(-1)[0].peopleVaccinated/T[e],n=_[t].slice(-1)[0].peopleVaccinated/T[t];return a<n?1:n<a?-1:0})),Object(f.jsxs)("div",{children:[Object(f.jsxs)("div",{style:{marginBottom:50},children:[Object(f.jsxs)(S.a,{variant:"h5",component:"h2",children:["Latest (",N,")"]}),Object(f.jsxs)("div",{className:"cards",children:[Object(f.jsx)("div",{className:"card",children:Object(f.jsx)(C,{data:_,keys:q,population:T})}),Object(f.jsx)("div",{className:"card",children:Object(f.jsx)(C,{data:_,keys:A,population:T})})]})]}),Object(f.jsxs)("div",{style:{marginBottom:50},children:[Object(f.jsx)(S.a,{variant:"h5",component:"h2",children:"Countries"}),Object(f.jsxs)("div",{className:"cards",children:[Object(f.jsx)("div",{className:"card",children:x("First Dose",q.map((function(e){return{name:e,data:Object(v.chartData)(_,"peopleVaccinated",e,T[e])}})))}),Object(f.jsx)("div",{className:"card",children:x("Fully Vaccinated",q.map((function(e){return{name:e,data:Object(v.chartData)(_,"peopleFullyVaccinated",e,T[e])}})))})]})]}),Object(f.jsxs)("div",{style:{marginBottom:50},children:[Object(f.jsx)(S.a,{variant:"h5",component:"h2",gutterBottom:!0,children:"Canada / Ontario / Ottawa"}),Object(f.jsxs)("div",{className:"cards",children:[Object(f.jsx)("div",{className:"card",children:x("First Dose",A.map((function(e){return{name:e,data:Object(v.chartData)(_,"peopleVaccinated",e,T[e])}})))}),Object(f.jsx)("div",{className:"card",children:x("Fully Vaccinated",A.map((function(e){return{name:e,data:Object(v.chartData)(_,"peopleFullyVaccinated",e,T[e])}})))})]})]}),x("New cases this week per 100,000",["Canada","Ontario","Ottawa"].map((function(e){return{name:e.startsWith("Ottawa")?"Ottawa":e,data:Object(v.chartData)(_,"changeCasesPastWeek",e,T[e],0,1e5)}})),0,"number")]}))};var N=function(){return Object(f.jsxs)("div",{style:{textAlign:"center"},children:[Object(f.jsx)(S.a,{variant:"h4",component:"h1",children:"Ottawa Covid Statistics"}),Object(f.jsx)("div",{style:{margin:50},className:"App",children:Object(f.jsx)(I,{})}),Object(f.jsxs)(S.a,{varient:"body1",children:["Data from"," ",Object(f.jsx)("a",{href:"https://github.com/owid/covid-19-data",children:"Our World in Data"})," and ",Object(f.jsx)("a",{href:"https://api.covid19tracker.ca",children:"COVID-19 Tracker Canada"})]}),Object(f.jsx)("br",{}),Object(f.jsxs)(S.a,{varient:"body1",children:["Code in ",Object(f.jsx)("a",{href:"https://github.com/sastels/first-dose",children:"Github"})]})]})},V=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,69)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;a(e),n(e),r(e),c(e),s(e)}))};s.a.render(Object(f.jsx)(r.a.StrictMode,{children:Object(f.jsx)(N,{})}),document.getElementById("root")),V()}},[[44,1,2]]]);
//# sourceMappingURL=main.3b091180.chunk.js.map