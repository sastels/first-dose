import './App.css';
import DoseChart from './DoseChart';


function App() {
  return (
    <div style={{textAlign:"center"}}>
    <div style = {{margin : 50 }} className="App">
      <DoseChart/>
    </div>
    <p>
      Percentage of people in a country that has had at least one dose of a Covid-19 vaccine. 
      Data from <a href="https://github.com/owid/covid-19-data">Our World in Data</a>.
    </p>
    </div>
  );
}

export default App;
