(this["webpackJsonpfirst-dose"]=this["webpackJsonpfirst-dose"]||[]).push([[0],{15:function(e,t){t.chartData=function(e,t,a,n){var c=arguments.length>4&&void 0!==arguments[4]?arguments[4]:16084224e5,r=arguments.length>5&&void 0!==arguments[5]?arguments[5]:100,s=e[a]||{},i=[];for(var o in s)if(null!==s[o]){var d=s[o];d.date>=c&&i.push([d.date,d[t]*r/n])}return i}},40:function(e,t,a){},42:function(e,t,a){},49:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(19),s=a.n(r),i=(a(40),a(23)),o=a(10),d=a.n(o),l=a(13),u=a(18),j=(a(42),a(21)),p=(a(50),a(29)),h=a.n(p),b=a(32),O=a.n(b),f=a(2);var x=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"percent",c=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null,r={plotOptions:{line:{marker:{enabled:!1}}},tooltip:{shared:!0,formatter:function(){var e=new Date(this.x),t=e.getTimezoneOffset(),c=(e=new Date(e.getTime()+60*t*1e3)).toISOString().split("T")[0]+"<br>";return c+=this.points.map((function(e){return"".concat(e.series.name,": ").concat(e.y.toFixed(a))+("percent"===n?"%":"")})).join("<br>")}},chart:{zoomType:"x",resetZoomButton:{position:{align:"left",y:-40}}},title:{text:e},xAxis:{type:"datetime"},yAxis:[{title:{text:"percent"===n?"Percentage covered":""},max:c},{title:{text:" "},linkedTo:0,opposite:!0}],series:t};return Object(f.jsx)("div",{style:{boxShadow:"0 0 3px #ddd"},children:Object(f.jsx)(O.a,{highcharts:h.a,options:r})})},v=a(15),m=a(75),g=a(79),w=a(78),y=a(74),k=a(76),C=a(77),D=function(e){var t=e.data,a=e.keys,n=e.population;return Object(f.jsx)(y.a,{children:Object(f.jsxs)(m.a,{size:"small",children:[Object(f.jsx)(k.a,{children:Object(f.jsxs)(C.a,{children:[Object(f.jsx)(w.a,{}),Object(f.jsx)(w.a,{children:"First dose"}),Object(f.jsx)(w.a,{children:"Fully vaccinated"})]})}),Object(f.jsx)(g.a,{children:a.map((function(e){return t[e]&&Object(f.jsxs)(C.a,{children:[Object(f.jsx)(w.a,{children:e}),Object(f.jsxs)(w.a,{children:[(100*t[e].slice(-1)[0].peopleVaccinated/n[e]).toFixed(1)," ","% (+",(100*t[e].slice(-1)[0].changePeopleVaccinatedPastWeek/n[e]).toFixed(1)," ","%)"]}),Object(f.jsxs)(w.a,{children:[(100*t[e].slice(-1)[0].peopleFullyVaccinated/n[e]).toFixed(1)," ","% (+",(100*t[e].slice(-1)[0].changePeopleFullyVaccinatedPastWeek/n[e]).toFixed(1)," ","%)"]})]},e)}))})]})})},F=a(51),S=a(80),T=a(81);j.a.initializeApp({apiKey:"AIzaSyCYOlqH5i8Q_nN_5i91JvUY3qU4Blan9Uo",authDomain:"first-dose-eb9bd.firebaseapp.com",projectId:"first-dose-eb9bd",storageBucket:"first-dose-eb9bd.appspot.com",messagingSenderId:"212541290476",appId:"1:212541290476:web:03a13b63cb5280de87b2c9",measurementId:"G-2CY2T47KWQ"});var N={Israel:8652167,"United Kingdom":67893379,"United States":334438269,Canada:38131204,Ontario:14789821,Ottawa:1045022},I={Canada:.87157980511*N.Canada,Ontario:.87451625442*N.Ontario,Ottawa:.875*N.Ottawa},V=function(e){var t=null,a=e.Canada||{};for(var n in a)if(null!==a[n]){var c=a[n];t=t?Math.max(t,c.date):c.date}return(t=new Date(t)).toISOString().substring(0,10)};var P=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)([]),s=Object(u.a)(r,2),o=s[0],p=s[1],h=Object(n.useState)([]),b=Object(u.a)(h,2),O=b[0],m=b[1],g=Object(n.useState)([]),w=Object(u.a)(g,2),y=w[0],k=w[1],C=Object(n.useState)([]),P=Object(u.a)(C,2),U=P[0],W=P[1],L=Object(n.useState)(!0),B=Object(u.a)(L,2),E=B[0],R=B[1],_=function(){var e=Object(l.a)(d.a.mark((function e(){var t,a,n,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=j.a.storage(),a=t.ref(),e.next=4,a.child("ourWorldInData.json").getDownloadURL();case 4:n=e.sent,(r=new XMLHttpRequest).responseType="json",r.onload=Object(l.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.response;case 2:t=e.sent,c(t),W(V(t));case 5:case"end":return e.stop()}}),e)}))),r.open("GET",n),r.send();case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),q=function(){var e=Object(l.a)(d.a.mark((function e(){var t,a,n,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=j.a.storage(),a=t.ref(),e.next=4,a.child("covid19_tracker_canada.json").getDownloadURL();case 4:n=e.sent,(c=new XMLHttpRequest).responseType="json",c.onload=Object(l.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.response;case 2:t=e.sent,p(t);case 4:case"end":return e.stop()}}),e)}))),c.open("GET",n),c.send();case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),A=function(){var e=Object(l.a)(d.a.mark((function e(){var t,a,n,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=j.a.storage(),a=t.ref(),e.next=4,a.child("covid19_tracker_on.json").getDownloadURL();case 4:n=e.sent,(c=new XMLHttpRequest).responseType="json",c.onload=Object(l.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.response;case 2:t=e.sent,m(t);case 4:case"end":return e.stop()}}),e)}))),c.open("GET",n),c.send();case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),G=function(){var e=Object(l.a)(d.a.mark((function e(){var t,a,n,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=j.a.storage(),a=t.ref(),e.next=4,a.child("covid19_tracker_ottawa.json").getDownloadURL();case 4:n=e.sent,(c=new XMLHttpRequest).responseType="json",c.onload=Object(l.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.response;case 2:t=e.sent,k(t);case 4:case"end":return e.stop()}}),e)}))),c.open("GET",n),c.send();case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){_(),q(),A(),G()}),[]);var M=Object(i.a)(Object(i.a)(Object(i.a)(Object(i.a)({},a),o),O),y),z=["Israel","United Kingdom","United States","Canada"],H=["Canada","Ontario","Ottawa"];return[].concat(z,H).some((function(e){return!(e in M)}))?"":(z.sort((function(e,t){var a=M[e].slice(-1)[0].peopleVaccinated/N[e],n=M[t].slice(-1)[0].peopleVaccinated/N[t];return a<n?1:n<a?-1:0})),Object(f.jsxs)("div",{children:[Object(f.jsxs)("div",{style:{marginBottom:50},children:[Object(f.jsxs)(F.a,{variant:"h5",component:"h2",children:["Coverage and week over week (",U,")"]}),Object(f.jsxs)("div",{className:"cards",children:[Object(f.jsx)("div",{className:"card",children:Object(f.jsx)(D,{data:M,keys:z,population:N})}),Object(f.jsxs)("div",{className:"card",children:[Object(f.jsx)(S.a,{control:Object(f.jsx)(T.a,{checked:E,onChange:function(e){return R(e.target.checked)},name:"onlyEligible",color:"primary"}),label:"12+"}),Object(f.jsx)(D,{data:M,keys:H,population:E?I:N})]})]})]}),Object(f.jsxs)("div",{style:{marginBottom:50},children:[Object(f.jsx)(F.a,{variant:"h5",component:"h2",children:"Countries"}),Object(f.jsxs)("div",{className:"cards",children:[Object(f.jsx)("div",{className:"card",children:x("First dose",z.map((function(e){return{name:e,data:Object(v.chartData)(M,"peopleVaccinated",e,N[e])}})))}),Object(f.jsx)("div",{className:"card",children:x("Fully vaccinated",z.map((function(e){return{name:e,data:Object(v.chartData)(M,"peopleFullyVaccinated",e,N[e])}})))})]})]}),Object(f.jsxs)("div",{style:{marginBottom:50},children:[Object(f.jsx)(F.a,{variant:"h5",component:"h2",gutterBottom:!0,children:"Canada / Ontario / Ottawa"}),Object(f.jsx)(S.a,{control:Object(f.jsx)(T.a,{checked:E,onChange:function(e){return R(e.target.checked)},name:"onlyEligible",color:"primary"}),label:"12+"}),Object(f.jsxs)("div",{className:"cards",children:[Object(f.jsx)("div",{className:"card",children:x("First dose",H.map((function(e){return{name:e,data:Object(v.chartData)(M,"peopleVaccinated",e,E?I[e]:N[e])}})),1,"percent",E?100:null)}),Object(f.jsx)("div",{className:"card",children:x("Fully vaccinated",H.map((function(e){return{name:e,data:Object(v.chartData)(M,"peopleFullyVaccinated",e,E?I[e]:N[e])}})),1,"percent",E?100:null)}),Object(f.jsx)("div",{className:"card",children:x("Weekly increase first dose",H.map((function(e){return{name:e,data:Object(v.chartData)(M,"changePeopleVaccinatedPastWeek",e,E?I[e]:N[e])}})),1,"percent",null)}),Object(f.jsx)("div",{className:"card",children:x("Weekly increase fully vaccinated",H.map((function(e){return{name:e,data:Object(v.chartData)(M,"changePeopleFullyVaccinatedPastWeek",e,E?I[e]:N[e])}})),1,"percent",null)})]})]}),x("New cases this week per 100,000",["Canada","Ontario","Ottawa"].map((function(e){return{name:e.startsWith("Ottawa")?"Ottawa":e,data:Object(v.chartData)(M,"changeCasesPastWeek",e,N[e],0,1e5)}})),1,"number")]}))};var U=function(){return Object(f.jsxs)("div",{style:{textAlign:"center"},children:[Object(f.jsx)(F.a,{variant:"h4",component:"h1",children:"Ottawa Covid Statistics"}),Object(f.jsx)("div",{style:{margin:50},className:"App",children:Object(f.jsx)(P,{})}),Object(f.jsxs)(F.a,{varient:"body1",children:["Data from"," ",Object(f.jsx)("a",{href:"https://github.com/owid/covid-19-data",children:"Our World in Data"})," and ",Object(f.jsx)("a",{href:"https://api.covid19tracker.ca",children:"COVID-19 Tracker Canada"})]}),Object(f.jsx)("br",{}),Object(f.jsxs)(F.a,{varient:"body1",children:["Code in ",Object(f.jsx)("a",{href:"https://github.com/sastels/first-dose",children:"Github"})]})]})},W=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,82)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),n(e),c(e),r(e),s(e)}))};s.a.render(Object(f.jsx)(c.a.StrictMode,{children:Object(f.jsx)(U,{})}),document.getElementById("root")),W()}},[[49,1,2]]]);
//# sourceMappingURL=main.e6da768f.chunk.js.map