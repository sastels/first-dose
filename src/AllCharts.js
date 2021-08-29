import "./AllCharts.css";
import React, { useState, useEffect } from "react";
import firebase from "firebase/app";
import "firebase/storage";
import MasterChart from "./MasterChart";
import { chartData } from "./mungingUtils";
import DoseTable from "./Tables";
import Typography from "@material-ui/core/Typography";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

const firebaseConfig = {
  apiKey: "AIzaSyCYOlqH5i8Q_nN_5i91JvUY3qU4Blan9Uo",
  authDomain: "first-dose-eb9bd.firebaseapp.com",
  projectId: "first-dose-eb9bd",
  storageBucket: "first-dose-eb9bd.appspot.com",
  messagingSenderId: "212541290476",
  appId: "1:212541290476:web:03a13b63cb5280de87b2c9",
  measurementId: "G-2CY2T47KWQ",
};
firebase.initializeApp(firebaseConfig);

const population = {
  Israel: 8652167,
  "United Kingdom": 67893379,
  "United States": 334438269,
  Canada: 38131204, // estimate from covid19tracker.ca
  Ontario: 14789821, // estimate from covid19tracker.ca
  Ottawa: 1057022 // was 1057022 // estimate from OPH vaccination dashboard
};

/*
2016 Census
Canada: 35,151,725
0 - 11: 4689950 = 1,898,790 + 2,018,130 + 389,160 + 383,870
12+: 0.86657980511

Ontario: 13,448,495
0 - 11: 1754810 =  697,360 + 756,085 + 150,380 + 150,985
12+: 0.86951625442

Ottawa: 991,725
0-11: 131900 = 51,980 + 57,335 + 11,185 + 11,400
12+: 0.8669994202
*/
const eligiblePopulation = {
  Canada: 0.87157980511 * population.Canada,
  Ontario: 0.87451625442 * population.Ontario,
  Ottawa: 0.8809994202 * population.Ottawa
};


const lastUpdated = (data) => {
  var lastDate = null;
  const country = "Canada";
  const country_data = data[country] || {};
  for (const key in country_data) {
    if (country_data[key] !== null) {
      const x = country_data[key];
      lastDate = lastDate ? Math.max(lastDate, x.date) : x.date;
    }
  }
  lastDate = new Date(lastDate);
  return lastDate.toISOString().substring(0, 10);
};

function AllCharts() {
  const [ourWorldData, setOurWorldData] = useState([]);
  const [canadaData, setCanadaData] = useState([]);
  const [ontarioData, setOntarioData] = useState([]);
  const [ottawaData, setOttawaData] = useState([]);
  const [updated, setUpdated] = useState([]);
  const [onlyEligible, setOnlyEligible] = useState(true);

  const getOurWorldData = async () => {
    const storage = firebase.storage();
    const storageRef = storage.ref();
    const url = await storageRef.child("ourWorldInData.json").getDownloadURL();
    var xhr = new XMLHttpRequest();
    xhr.responseType = "json";
    xhr.onload = async () => {
      var data = await xhr.response;
      setOurWorldData(data);
      setUpdated(lastUpdated(data));
    };
    xhr.open("GET", url);
    xhr.send();
  };

  const getCanadaData = async () => {
    const storage = firebase.storage();
    const storageRef = storage.ref();
    const url = await storageRef
      .child("covid19_tracker_canada.json")
      .getDownloadURL();
    var xhr = new XMLHttpRequest();
    xhr.responseType = "json";
    xhr.onload = async () => {
      var data = await xhr.response;
      setCanadaData(data);
    };
    xhr.open("GET", url);
    xhr.send();
  };

  const getOntarioData = async () => {
    const storage = firebase.storage();
    const storageRef = storage.ref();
    const url = await storageRef
      .child("covid19_tracker_on.json")
      .getDownloadURL();
    var xhr = new XMLHttpRequest();
    xhr.responseType = "json";
    xhr.onload = async () => {
      var data = await xhr.response;
      setOntarioData(data);
    };
    xhr.open("GET", url);
    xhr.send();
  };

  const getOttawaData = async () => {
    const storage = firebase.storage();
    const storageRef = storage.ref();
    const url = await storageRef
      .child("covid19_tracker_ottawa.json")
      .getDownloadURL();
    var xhr = new XMLHttpRequest();
    xhr.responseType = "json";
    xhr.onload = async () => {
      var data = await xhr.response;
      setOttawaData(data);
    };
    xhr.open("GET", url);
    xhr.send();
  };

  useEffect(() => {
    getOurWorldData();
    getCanadaData();
    getOntarioData();
    getOttawaData();
  }, []);

  const data = {
    ...ourWorldData,
    ...canadaData,
    ...ontarioData,
    ...ottawaData,
  };

  const countries = ["Israel", "United Kingdom", "United States", "Canada"];
  const local = ["Canada", "Ontario", "Ottawa"];

  if ([...countries, ...local].some((k) => !(k in data))) {
    return "";
  }

  const compareFunction = (a, b) => {
    let aV = data[a].slice(-1)[0].peopleVaccinated / population[a];
    let bV = data[b].slice(-1)[0].peopleVaccinated / population[b];
    if (aV < bV) return 1;
    else if (bV < aV) return -1;
    else return 0;
  };
  countries.sort(compareFunction);

  return (
    <div>
      <div style={{ marginBottom: 50 }}>
        <Typography variant="h5" component="h2">
          Coverage and week over week ({updated})
        </Typography>
        <div className="cards">
          <div className="card">
            <DoseTable data={data} keys={countries} population={population} />
          </div>
          <div className="card">

          <FormControlLabel
            control={
              <Switch
                checked={onlyEligible}
                onChange={event => setOnlyEligible(event.target.checked)}
                name="onlyEligible"
                color="primary"
              />
            }
            label="12+"
          />
            <DoseTable data={data} keys={local} population={onlyEligible ? eligiblePopulation : population} />
          </div>
        </div>
      </div>

      <div style={{ marginBottom: 50 }}>
        <Typography variant="h5" component="h2">
          Countries
        </Typography>

        <div className="cards">
          <div className="card">
            {MasterChart(
              "First dose",
              countries.map((c) => ({
                name: c,
                data: chartData(data, "peopleVaccinated", c, population[c]),
              }))
            )}
          </div>
          <div className="card">
            {MasterChart(
              "Fully vaccinated",
              countries.map((c) => ({
                name: c,
                data: chartData(
                  data,
                  "peopleFullyVaccinated",
                  c,
                  population[c]
                ),
              }))
            )}
          </div>
        </div>
      </div>

      <div style={{ marginBottom: 50 }}>
        <Typography variant="h5" component="h2" gutterBottom>
          Canada / Ontario / Ottawa
        </Typography>

        <FormControlLabel
            control={
              <Switch
                checked={onlyEligible}
                onChange={event => setOnlyEligible(event.target.checked)}
                name="onlyEligible"
                color="primary"
              />
            }
            label="12+"
          />

        <div className="cards">
          <div className="card">
            {MasterChart(
              "First dose",
              local.map((c) => ({
                name: c,
                data: chartData(data, "peopleVaccinated", c, onlyEligible ? eligiblePopulation[c] : population[c]),
              })),
              1,
              "percent",
              onlyEligible ? 100 : null
            )}
          </div>

          <div className="card">
            {MasterChart(
              "Fully vaccinated",
              local.map((c) => ({
                name: c,
                data: chartData(
                  data,
                  "peopleFullyVaccinated",
                  c,
                  onlyEligible ? eligiblePopulation[c] : population[c]
                ),
              })),
              1,
              "percent",
              onlyEligible ? 100 : null
            )}
          </div>

          <div className="card">
            {MasterChart(
              "Weekly increase first dose",
              local.map((c) => ({
                name: c,
                data: chartData(
                  data,
                  "changePeopleVaccinatedPastWeek",
                  c,
                  onlyEligible ? eligiblePopulation[c] : population[c]
                ),
              })),
              1,
              "percent",
              onlyEligible ? null : null
            )}
          </div>

          <div className="card">
            {MasterChart(
              "Weekly increase fully vaccinated",
              local.map((c) => ({
                name: c,
                data: chartData(
                  data,
                  "changePeopleFullyVaccinatedPastWeek",
                  c,
                  onlyEligible ? eligiblePopulation[c] : population[c]
                ),
              })),
              1,
              "percent",
              onlyEligible ? null : null
            )}
          </div>

        </div>
      </div>

      {MasterChart(
        "New cases this week per 100,000",
        ["Canada", "Ontario", "Ottawa"].map((c) => ({
          name: c.startsWith("Ottawa") ? "Ottawa" : c,
          data: chartData(
            data,
            "changeCasesPastWeek",
            c,
            population[c],
            0,
            100000
          ),
        })),
        1,
        "number"
      )}
    </div>
  );
}

export default AllCharts;
