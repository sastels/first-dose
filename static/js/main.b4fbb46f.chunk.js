(this["webpackJsonpfirst-dose"]=this["webpackJsonpfirst-dose"]||[]).push([[0],{20:function(e,t,a){},21:function(e,t,a){},23:function(e,t,a){},26:function(e,t,a){},27:function(e,t,a){"use strict";a.r(t);var n=a(4),r=a.n(n),c=a(14),s=a.n(c),i=(a(20),a(21),a(11)),o=a(3),d=a.n(o),u=a(5),p=a(10),l=(a(23),a(8)),j=(a(28),a(13)),h=a.n(j),O=a(15),b=a.n(O),f=a(0);var x=function(e,t,a){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1,r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"percent",c={plotOptions:{line:{marker:{enabled:!1}}},tooltip:{shared:!0,formatter:function(){var e=new Date(this.x),t=e.getTimezoneOffset(),a=(e=new Date(e.getTime()+60*t*1e3)).toISOString().split("T")[0]+"<br>";return a+=this.points.map((function(e){return"".concat(e.series.name,": ").concat(e.y.toFixed(n))+("percent"===r?"%":"")})).join("<br>")}},chart:{zoomType:"x"},title:{text:t},xAxis:{type:"datetime"},yAxis:[{title:{text:"percent"===r?"Percentage covered":""}},{title:{text:" "},linkedTo:0,opposite:!0}],series:a};return Object(f.jsx)(b.a,{highcharts:h.a,options:c})},v=a(9),m=(a(26),function(e){var t=e.data,a=e.keys,n=e.population;return Object(f.jsxs)("table",{children:[Object(f.jsx)("thead",{children:Object(f.jsxs)("tr",{children:[Object(f.jsx)("th",{}),Object(f.jsx)("th",{children:"First Dose"}),Object(f.jsx)("th",{children:"Fully Vaccinated"})]})}),Object(f.jsx)("tbody",{children:a.sort((function(e,a){return t[e]&&t[a]&&t[e].slice(-1)[0].peopleVaccinated/n[e]<t[a].slice(-1)[0].peopleVaccinated/n[a]})).map((function(e){return t[e]&&Object(f.jsxs)("tr",{children:[Object(f.jsx)("td",{children:e}),Object(f.jsxs)("td",{children:[(100*t[e].slice(-1)[0].peopleVaccinated/n[e]).toFixed(1)," ","%"]}),Object(f.jsxs)("td",{children:[(100*t[e].slice(-1)[0].peopleFullyVaccinated/n[e]).toFixed(1)," ","%"]})]},e)}))})]})});l.a.initializeApp({apiKey:"AIzaSyCYOlqH5i8Q_nN_5i91JvUY3qU4Blan9Uo",authDomain:"first-dose-eb9bd.firebaseapp.com",projectId:"first-dose-eb9bd",storageBucket:"first-dose-eb9bd.appspot.com",messagingSenderId:"212541290476",appId:"1:212541290476:web:03a13b63cb5280de87b2c9",measurementId:"G-2CY2T47KWQ"});var w={Israel:8652167,"United Kingdom":67893379,"United States":334438269,Canada:37746527,Ontario:14745040,Ottawa:1060658,OttawaOPH:1060658},g=function(e){var t=null,a=e.Canada||{};for(var n in a)if(null!==a[n]){var r=a[n];t=t?Math.max(t,r.date):r.date}return(t=new Date(t)).toISOString().substring(0,10)};var y=function(){var e=Object(n.useState)([]),t=Object(p.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)([]),s=Object(p.a)(c,2),o=s[0],j=s[1],h=Object(n.useState)([]),O=Object(p.a)(h,2),b=O[0],y=O[1],D=Object(n.useState)([]),k=Object(p.a)(D,2),T=k[0],F=k[1],C=Object(n.useState)([]),S=Object(p.a)(C,2),I=S[0],V=S[1],L=function(){var e=Object(u.a)(d.a.mark((function e(){var t,a,n,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=l.a.storage(),a=t.ref(),e.next=4,a.child("ourWorldInData.json").getDownloadURL();case 4:n=e.sent,(c=new XMLHttpRequest).responseType="json",c.onload=Object(u.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.response;case 2:t=e.sent,r(t),V(g(t));case 5:case"end":return e.stop()}}),e)}))),c.open("GET",n),c.send();case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),U=function(){var e=Object(u.a)(d.a.mark((function e(){var t,a,n,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=l.a.storage(),a=t.ref(),e.next=4,a.child("covid19_tracker_on.json").getDownloadURL();case 4:n=e.sent,(r=new XMLHttpRequest).responseType="json",r.onload=Object(u.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.response;case 2:t=e.sent,j(t);case 4:case"end":return e.stop()}}),e)}))),r.open("GET",n),r.send();case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),A=function(){var e=Object(u.a)(d.a.mark((function e(){var t,a,n,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=l.a.storage(),a=t.ref(),e.next=4,a.child("covid19_tracker_ottawa.json").getDownloadURL();case 4:n=e.sent,(r=new XMLHttpRequest).responseType="json",r.onload=Object(u.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.response;case 2:t=e.sent,y(t);case 4:case"end":return e.stop()}}),e)}))),r.open("GET",n),r.send();case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),H=function(){var e=Object(u.a)(d.a.mark((function e(){var t,a,n,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=l.a.storage(),a=t.ref(),e.next=4,a.child("openOttawa.json").getDownloadURL();case 4:n=e.sent,(r=new XMLHttpRequest).responseType="json",r.onload=Object(u.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.response;case 2:t=e.sent,F({OttawaOPH:t.Ottawa});case 4:case"end":return e.stop()}}),e)}))),r.open("GET",n),r.send();case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){L(),U(),A(),H()}),[]);var R=Object(i.a)(Object(i.a)(Object(i.a)(Object(i.a)({},a),o),b),T),q=["Israel","United Kingdom","United States","Canada"],E=["Canada","Ontario","Ottawa"];return Object(f.jsxs)("div",{className:"App",children:[Object(f.jsxs)("h2",{children:["Latest (",I,")"]}),Object(f.jsxs)("div",{class:"cards",children:[Object(f.jsx)("div",{class:"card",children:Object(f.jsx)(m,{data:R,keys:q,population:w})}),Object(f.jsx)("div",{class:"card",children:Object(f.jsx)(m,{data:R,keys:E,population:w})})]}),Object(f.jsx)("h2",{children:"Countries"}),Object(f.jsxs)("div",{class:"cards",children:[Object(f.jsx)("div",{class:"card",children:x(R,"First Dose",q.map((function(e){return{name:e,data:Object(v.chartData)(R,"peopleVaccinated",e,w[e])}})))}),Object(f.jsx)("div",{class:"card",children:x(R,"Fully Vaccinated",q.map((function(e){return{name:e,data:Object(v.chartData)(R,"peopleFullyVaccinated",e,w[e])}})))})]}),Object(f.jsx)("h2",{children:"Canada / Ontario / Ottawa"}),Object(f.jsxs)("div",{class:"cards",children:[Object(f.jsx)("div",{class:"card",children:x(R,"First Dose",E.map((function(e){return{name:e,data:Object(v.chartData)(R,"peopleVaccinated",e,w[e])}})))}),Object(f.jsx)("div",{class:"card",children:x(R,"Fully Vaccinated",E.map((function(e){return{name:e,data:Object(v.chartData)(R,"peopleFullyVaccinated",e,w[e])}})))})]}),x(R,"Active cases per 100,000",["Ontario","OttawaOPH"].map((function(e){return{name:e.startsWith("Ottawa")?"Ottawa":e,data:Object(v.chartData)(R,"activeCases",e,w[e],0,1e5)}})),0,"number"),Object(f.jsxs)("p",{children:[" Data last updated at ",I]})]})};var D=function(){return Object(f.jsxs)("div",{style:{textAlign:"center"},children:[Object(f.jsx)("div",{style:{margin:50},className:"App",children:Object(f.jsx)(y,{})}),Object(f.jsxs)("p",{children:["Data from"," ",Object(f.jsx)("a",{href:"https://github.com/owid/covid-19-data",children:"Our World in Data"}),","," ",Object(f.jsx)("a",{href:"https://api.covid19tracker.ca",children:"COVID-19 Tracker Canada"}),","," and ",Object(f.jsx)("a",{href:"https://open.ottawa.ca/",children:"Open Ottawa"}),"."]}),Object(f.jsxs)("p",{children:["Code in ",Object(f.jsx)("a",{href:"https://github.com/sastels/first-dose",children:"Github"}),"."]})]})},k=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,29)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;a(e),n(e),r(e),c(e),s(e)}))};s.a.render(Object(f.jsx)(r.a.StrictMode,{children:Object(f.jsx)(D,{})}),document.getElementById("root")),k()},9:function(e,t){t.chartData=function(e,t,a,n){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:16084224e5,c=arguments.length>5&&void 0!==arguments[5]?arguments[5]:100,s=e[a]||{},i=[];for(var o in s)if(null!==s[o]){var d=s[o];d.date>=r&&i.push([d.date,d[t]*c/n])}return i}}},[[27,1,2]]]);
//# sourceMappingURL=main.b4fbb46f.chunk.js.map