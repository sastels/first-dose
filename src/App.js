// import "./App.css";
import AllCharts from "./AllCharts";
import Typography from "@material-ui/core/Typography";

function App() {
  return (
    <div style={{ textAlign: "center" }}>
      <Typography variant="h4" component="h1">
        Ottawa Covid Statistics
      </Typography>

      <div className="App">
        <AllCharts />
      </div>

      <Typography varient="body1">
        Data from <a href="https://api.covid19tracker.ca">COVID-19 Tracker Canada</a>
      </Typography>
      <br />
      <Typography varient="body1">
        Code in <a href="https://github.com/sastels/first-dose">Github</a>
      </Typography>
    </div>
  );
}

export default App;
