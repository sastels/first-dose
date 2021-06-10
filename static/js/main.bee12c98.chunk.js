(this["webpackJsonpfirst-dose"]=this["webpackJsonpfirst-dose"]||[]).push([[0],{20:function(e,t,a){},21:function(e,t,a){},25:function(e,t,a){"use strict";a.r(t);var n=a(3),r=a.n(n),c=a(14),s=a.n(c),i=(a(20),a(21),a(13)),o=a(4),d=a.n(o),u=a(7),p=a(10),l=a(9),f=(a(26),a(12)),b=a.n(f),j=a(15),h=a.n(j),O=a(2);var m=function(e,t,a){var n={plotOptions:{line:{marker:{enabled:!1}}},tooltip:{shared:!0,formatter:function(){var e=new Date(this.x),t=e.getTimezoneOffset(),a=(e=new Date(e.getTime()+60*t*1e3)).toISOString().split("T")[0]+"<br>";return a+=this.points.map((function(e){return"".concat(e.series.name,": ").concat(e.y.toFixed(1),"%")})).join("<br>")}},chart:{zoomType:"x"},title:{text:t},xAxis:{type:"datetime"},yAxis:[{title:{text:"Percentage covered"}},{title:{text:" "},linkedTo:0,opposite:!0}],series:a};return Object(O.jsx)(h.a,{highcharts:b.a,options:n})},v=a(8);l.a.initializeApp({apiKey:"AIzaSyCYOlqH5i8Q_nN_5i91JvUY3qU4Blan9Uo",authDomain:"first-dose-eb9bd.firebaseapp.com",projectId:"first-dose-eb9bd",storageBucket:"first-dose-eb9bd.appspot.com",messagingSenderId:"212541290476",appId:"1:212541290476:web:03a13b63cb5280de87b2c9",measurementId:"G-2CY2T47KWQ"});var x={Israel:8652167,"United Kingdom":67893379,"United States":334438269,Canada:37746527,Ontario:14745040},g=function(e){var t=null,a=e.Canada||{};for(var n in a)if(null!==a[n]){var r=a[n];t=t?Math.max(t,r.date):r.date}return(t=new Date(t)).toISOString().substring(0,10)};var w=function(){var e=Object(n.useState)([]),t=Object(p.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)([]),s=Object(p.a)(c,2),o=s[0],f=s[1],b=Object(n.useState)([]),j=Object(p.a)(b,2),h=j[0],w=j[1],D=function(){var e=Object(u.a)(d.a.mark((function e(){var t,a,n,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=l.a.storage(),a=t.ref(),e.next=4,a.child("ourWorldInData.json").getDownloadURL();case 4:n=e.sent,(c=new XMLHttpRequest).responseType="json",c.onload=Object(u.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.response;case 2:t=e.sent,r(t),w(g(t));case 5:case"end":return e.stop()}}),e)}))),c.open("GET",n),c.send();case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),y=function(){var e=Object(u.a)(d.a.mark((function e(){var t,a,n,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=l.a.storage(),a=t.ref(),e.next=4,a.child("covid19_tracker_on.json").getDownloadURL();case 4:n=e.sent,(r=new XMLHttpRequest).responseType="json",r.onload=Object(u.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.response;case 2:t=e.sent,f(t);case 4:case"end":return e.stop()}}),e)}))),r.open("GET",n),r.send();case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){D(),y()}),[]);var C=Object(i.a)(Object(i.a)({},a),o),I=["Israel","United Kingdom","United States","Canada"],S=["Canada","Ontario"];return Object(O.jsxs)("div",{className:"App",children:[Object(O.jsx)("h2",{children:" Canada vs other countries"}),m(C,"First Dose",I.map((function(e){return{name:e,data:Object(v.chartData)(C,"peopleVaccinated",e,x[e])}}))),m(C,"Fully Vaccinated",I.map((function(e){return{name:e,data:Object(v.chartData)(C,"peopleFullyVaccinated",e,x[e])}}))),Object(O.jsx)("h2",{children:" Canada / Ontario"}),m(C,"First Dose",S.map((function(e){return{name:e,data:Object(v.chartData)(C,"peopleVaccinated",e,x[e])}}))),m(C,"Fully Vaccinated",S.map((function(e){return{name:e,data:Object(v.chartData)(C,"peopleFullyVaccinated",e,x[e])}}))),Object(O.jsxs)("p",{children:[" Data last updated at ",h]})]})};var D=function(){return Object(O.jsxs)("div",{style:{textAlign:"center"},children:[Object(O.jsx)("div",{style:{margin:50},className:"App",children:Object(O.jsx)(w,{})}),Object(O.jsxs)("p",{children:["Data from"," ",Object(O.jsx)("a",{href:"https://github.com/owid/covid-19-data",children:"Our World in Data"})," and ",Object(O.jsx)("a",{href:"https://api.covid19tracker.ca",children:"COVID-19 Tracker Canada"}),"."]}),Object(O.jsxs)("p",{children:["Code in ",Object(O.jsx)("a",{href:"https://github.com/sastels/first-dose",children:"Github"}),"."]})]})},y=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,27)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;a(e),n(e),r(e),c(e),s(e)}))};s.a.render(Object(O.jsx)(r.a.StrictMode,{children:Object(O.jsx)(D,{})}),document.getElementById("root")),y()},8:function(e,t){t.chartData=function(e,t,a,n){var r=e[a]||{},c=[];for(var s in r)if(null!==r[s]){var i=r[s];i.date>=16084224e5&&c.push([i.date,100*i[t]/n])}return c}}},[[25,1,2]]]);
//# sourceMappingURL=main.bee12c98.chunk.js.map