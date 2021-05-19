
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import React,{useState,useEffect} from 'react';

function Chart(data) {
    const canada = data["Canada"] || "no data"
    var munged = []
    for (const key in canada) {
        munged.push([parseInt(key), canada[key]])
    }
    
    console.log(munged)

    const options = {
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
        series: [{
          data: munged
        }]
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
            console.log(response)
            return response.json();
          })
          .then(function(data) {
              for (const key in data) {
                console.log(`${key}: ${JSON.stringify(data[key])}`);
              }
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