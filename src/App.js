import "./App.css";
import AllCharts from "./AllCharts";

function App() {
  return (
    <div style={{ textAlign: "center" }}>
      <div style={{ margin: 50 }} className="App">
        <AllCharts />
      </div>
      <p>
        Data from{" "}
        <a href="https://github.com/owid/covid-19-data">Our World in Data</a>
        {" and "}
        <a href="https://api.covid19tracker.ca">COVID-19 Tracker Canada</a>.
      </p>
      <p>
        Code in <a href="https://github.com/sastels/first-dose">Github</a>.
      </p>
    </div>
  );
}

export default App;
