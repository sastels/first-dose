
import React,{useState,useEffect} from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';
function Chart(data) {


    const canada = data["Canada"] || "no data"

    var munged = []
    for (const key in canada) {
        munged.push({date: key, doses: canada[key]})
    }

    const d = [{name: 'Page A', uv: 400, pv: 2400, amt: 2400},
    {name: 'Page B', uv: 500, pv: 2400, amt: 2400},
    {name: 'Page C', uv: 200, pv: 2400, amt: 2400},
    {name: 'Page D', uv: 600, pv: 2400, amt: 2400},
]
    
    return (

        <div>
        {JSON.stringify(canada)}
        
        <LineChart width={600} height={300} data={munged}>
            <Line type="monotone" dataKey="doses" stroke="#8884d8" />
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="date" />
            <YAxis />
        </LineChart>


        <LineChart width={600} height={300} data={d}>
            <Line type="monotone" dataKey="uv" stroke="#8884d8" />
            <CartesianGrid stroke="#ccc" />
            {/* <XAxis dataKey="name" /> */}
            <YAxis />
        </LineChart>

        </div>

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