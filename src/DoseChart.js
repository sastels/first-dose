
import React,{useState,useEffect} from 'react';


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
           data && "data"
         }
        </div>
      );
    }

export default DoseChart