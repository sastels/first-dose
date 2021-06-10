(this["webpackJsonpfirst-dose"]=this["webpackJsonpfirst-dose"]||[]).push([[0],{20:function(e,t,a){},21:function(e,t,a){},23:function(e,t,a){},26:function(e,t,a){"use strict";a.r(t);var n=a(4),r=a.n(n),c=a(14),s=a.n(c),i=(a(20),a(21),a(11)),o=a(3),d=a.n(o),u=a(7),p=a(10),l=(a(23),a(8)),j=(a(27),a(13)),f=a.n(j),b=a(15),h=a.n(b),O=a(1);var v=function(e,t,a){var n={plotOptions:{line:{marker:{enabled:!1}}},tooltip:{shared:!0,formatter:function(){var e=new Date(this.x),t=e.getTimezoneOffset(),a=(e=new Date(e.getTime()+60*t*1e3)).toISOString().split("T")[0]+"<br>";return a+=this.points.map((function(e){return"".concat(e.series.name,": ").concat(e.y.toFixed(1),"%")})).join("<br>")}},chart:{zoomType:"x"},title:{text:t},xAxis:{type:"datetime"},yAxis:[{title:{text:"Percentage covered"}},{title:{text:" "},linkedTo:0,opposite:!0}],series:a};return Object(O.jsx)(h.a,{highcharts:f.a,options:n})},x=a(9);l.a.initializeApp({apiKey:"AIzaSyCYOlqH5i8Q_nN_5i91JvUY3qU4Blan9Uo",authDomain:"first-dose-eb9bd.firebaseapp.com",projectId:"first-dose-eb9bd",storageBucket:"first-dose-eb9bd.appspot.com",messagingSenderId:"212541290476",appId:"1:212541290476:web:03a13b63cb5280de87b2c9",measurementId:"G-2CY2T47KWQ"});var m={Israel:8652167,"United Kingdom":67893379,"United States":334438269,Canada:37746527,Ontario:14745040,Ottawa:1060658},w=function(e){var t=null,a=e.Canada||{};for(var n in a)if(null!==a[n]){var r=a[n];t=t?Math.max(t,r.date):r.date}return(t=new Date(t)).toISOString().substring(0,10)};var g=function(){var e=Object(n.useState)([]),t=Object(p.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)([]),s=Object(p.a)(c,2),o=s[0],j=s[1],f=Object(n.useState)([]),b=Object(p.a)(f,2),h=b[0],g=b[1],D=Object(n.useState)([]),y=Object(p.a)(D,2),k=y[0],T=y[1],C=function(){var e=Object(u.a)(d.a.mark((function e(){var t,a,n,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=l.a.storage(),a=t.ref(),e.next=4,a.child("ourWorldInData.json").getDownloadURL();case 4:n=e.sent,(c=new XMLHttpRequest).responseType="json",c.onload=Object(u.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.response;case 2:t=e.sent,r(t),T(w(t));case 5:case"end":return e.stop()}}),e)}))),c.open("GET",n),c.send();case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),S=function(){var e=Object(u.a)(d.a.mark((function e(){var t,a,n,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=l.a.storage(),a=t.ref(),e.next=4,a.child("covid19_tracker_on.json").getDownloadURL();case 4:n=e.sent,(r=new XMLHttpRequest).responseType="json",r.onload=Object(u.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.response;case 2:t=e.sent,j(t);case 4:case"end":return e.stop()}}),e)}))),r.open("GET",n),r.send();case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),I=function(){var e=Object(u.a)(d.a.mark((function e(){var t,a,n,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=l.a.storage(),a=t.ref(),e.next=4,a.child("covid19_tracker_ottawa.json").getDownloadURL();case 4:n=e.sent,(r=new XMLHttpRequest).responseType="json",r.onload=Object(u.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.response;case 2:t=e.sent,g(t);case 4:case"end":return e.stop()}}),e)}))),r.open("GET",n),r.send();case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){C(),S(),I()}),[]);var F=Object(i.a)(Object(i.a)(Object(i.a)({},a),o),h),U=["Israel","United Kingdom","United States","Canada"],L=["Canada","Ontario","Ottawa"];return Object(O.jsxs)("div",{className:"App",children:[Object(O.jsx)("h2",{children:"Countries"}),Object(O.jsxs)("div",{class:"cards",children:[Object(O.jsx)("div",{class:"card",children:v(F,"First Dose",U.map((function(e){return{name:e,data:Object(x.chartData)(F,"peopleVaccinated",e,m[e])}})))}),Object(O.jsx)("div",{class:"card",children:v(F,"Fully Vaccinated",U.map((function(e){return{name:e,data:Object(x.chartData)(F,"peopleFullyVaccinated",e,m[e])}})))})]}),Object(O.jsx)("h2",{children:"Canada / Ontario / Ottawa"}),Object(O.jsxs)("div",{class:"cards",children:[Object(O.jsx)("div",{class:"card",children:v(F,"First Dose",L.map((function(e){return{name:e,data:Object(x.chartData)(F,"peopleVaccinated",e,m[e])}})))}),Object(O.jsx)("div",{class:"card",children:v(F,"Fully Vaccinated",L.map((function(e){return{name:e,data:Object(x.chartData)(F,"peopleFullyVaccinated",e,m[e])}})))})]}),Object(O.jsxs)("p",{children:[" Data last updated at ",k]})]})};var D=function(){return Object(O.jsxs)("div",{style:{textAlign:"center"},children:[Object(O.jsx)("div",{style:{margin:50},className:"App",children:Object(O.jsx)(g,{})}),Object(O.jsxs)("p",{children:["Data from"," ",Object(O.jsx)("a",{href:"https://github.com/owid/covid-19-data",children:"Our World in Data"})," and ",Object(O.jsx)("a",{href:"https://api.covid19tracker.ca",children:"COVID-19 Tracker Canada"}),"."]}),Object(O.jsxs)("p",{children:["Code in ",Object(O.jsx)("a",{href:"https://github.com/sastels/first-dose",children:"Github"}),"."]})]})},y=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,28)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;a(e),n(e),r(e),c(e),s(e)}))};s.a.render(Object(O.jsx)(r.a.StrictMode,{children:Object(O.jsx)(D,{})}),document.getElementById("root")),y()},9:function(e,t){t.chartData=function(e,t,a,n){var r=e[a]||{},c=[];for(var s in r)if(null!==r[s]){var i=r[s];i.date>=16084224e5&&c.push([i.date,100*i[t]/n])}return c}}},[[26,1,2]]]);
//# sourceMappingURL=main.00275dd7.chunk.js.map