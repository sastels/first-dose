
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import React,{useState,useEffect} from 'react';
import firebase from "firebase/app";
import 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyCYOlqH5i8Q_nN_5i91JvUY3qU4Blan9Uo",
  authDomain: "first-dose-eb9bd.firebaseapp.com",
  projectId: "first-dose-eb9bd",
  storageBucket: "first-dose-eb9bd.appspot.com",
  messagingSenderId: "212541290476",
  appId: "1:212541290476:web:03a13b63cb5280de87b2c9",
  measurementId: "G-2CY2T47KWQ"
};
firebase.initializeApp(firebaseConfig);


const mungeData = (data, country) => {
    const country_data = data[country] || {}
    var munged = []
    for (const key in country_data) {
        if (country_data[key] !== null) {
            munged.push([parseInt(key), country_data[key]])
        }
    }
    return munged
}

function Chart(data) {
    const options = {
        plotOptions: {
            line: {
                marker: {
                    enabled: false
                }
            }
        },
        tooltip: {
            shared: true,
            formatter: function () {
                var yourDate = new Date(this.x);
                const offset = yourDate.getTimezoneOffset(); 
                yourDate = new Date(yourDate.getTime() + (offset*60*1000)); 
                const date = yourDate.toISOString().split('T')[0]
                var retval = date + '<br>'
                retval += this.points.map(x=> `${x.series.name}: ${x.y.toFixed(1)}%`).join('<br>')
                return retval
            }
        },
        chart: {
            zoomType: 'x'
        },
        title: {
          text: 'First Dose Coverage'
        },
        xAxis: {
            type: 'datetime'
        },
        yAxis: {
            title: {
                text: 'Percentage covered'
            }
        },
        series: [
            {
                name: "Israel",    
                data:  mungeData(data, "Israel")
            },
            {
                name: "United Kingdom",    
                data:  mungeData(data, "United Kingdom")
            },
            {
                name: "United States",    
                data:  mungeData(data, "United States")
            },
            {       
                name: "Canada",    
                data: mungeData(data, "Canada")
            },
        ]
      }
        return (
            <HighchartsReact
              highcharts={Highcharts}
              options={options}
            />
          )    
}

function DoseChart() {
    const [data,setData]=useState([]);
     
      const getData = async () => {
        const storage = firebase.storage();
        const storageRef = storage.ref();
        const url = await storageRef.child('dose_stats.json').getDownloadURL()      
        var xhr = new XMLHttpRequest();
        xhr.responseType = 'json';
        xhr.onload = async () => {
            var data = await xhr.response
            setData(data)
        };
        xhr.open('GET', url);
        xhr.send();
      }

      useEffect(() => {
        getData()
      }, [])

      return (
        <div className="App">
         {
           Chart(data)
         }
        </div>
      );
    }

export default DoseChart