
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import React,{useState,useEffect} from 'react';

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
    const getData=()=>{
        fetch('dose_stats.json'
        ,{
          headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
           }
        }
        )
          .then(function(response){
            return response.json();
          })
          .then(function(data) {
            setData(data);
          });
      }
      useEffect(()=>{
        getData()
      },[])

      return (
        <div className="App">
         {
           Chart(data)
         }
        </div>
      );
    }

export default DoseChart