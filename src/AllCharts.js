import "./AllCharts.css";
import React, { useState, useEffect } from "react";
import firebase from "firebase/app";
import "firebase/storage";
import MasterChart from "./MasterChart";
import { chartData } from "./mungingUtils";
import DoseTable from "./Tables";
import Typography from "@material-ui/core/Typography";

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
  Canada: 38131204, // estimate from covid19tracker.ca
  Ontario: 14789821, // estimate from covid19tracker.ca
  Ottawa: 1045022 // was 1057022 // estimate from OPH vaccination dashboard
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
  const [canadaData, setCanadaData] = useState([]);
  const [ontarioData, setOntarioData] = useState([]);
  const [ottawaData, setOttawaData] = useState([]);
  const [updated, setUpdated] = useState([]);

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
      setUpdated(lastUpdated(data));
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
    getCanadaData();
    getOntarioData();
    getOttawaData();
  }, []);

  const data = {
    ...canadaData,
    ...ontarioData,
    ...ottawaData,
  };

  const local = ["Canada", "Ontario", "Ottawa"];

  if ([...local].some((k) => !(k in data))) {
    return "";
  }

  // const compareFunction = (a, b) => {
  //   let aV = data[a].slice(-1)[0].peopleVaccinated / population[a];
  //   let bV = data[b].slice(-1)[0].peopleVaccinated / population[b];
  //   if (aV < bV) return 1;
  //   else if (bV < aV) return -1;
  //   else return 0;
  // };

  return (
    <div>
      <div style={{ marginBottom: 50 }}>
        <Typography variant="h5" component="h2">
          Coverage and week over week ({updated})
        </Typography>
        <div className="card">
          <DoseTable data={data} keys={local} population={population} />
        </div>
      </div>

      <div style={{ marginBottom: 50 }}>
        <Typography variant="h5" component="h2" gutterBottom>
          Canada / Ontario / Ottawa
        </Typography>

        <div className="cards">
          <div className="card">
            {MasterChart(
              "First dose",
              local.map((c) => ({
                name: c,
                data: chartData(data, "peopleVaccinated", c, population[c]),
              })),
              1,
              "percent",
              null
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
                  population[c]
                ),
              })),
              1,
              "percent",
              null
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
                  population[c]
                ),
              })),
              1,
              "percent",
              null
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
                  population[c]
                ),
              })),
              1,
              "percent",
              null
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

      <div className="cards">
        <div className="card">
          {MasterChart(
            "Hospitalized",
            local.map((c) => ({
              name: c,
              data: chartData(data, "hospitalized", c, population[c], 0, 100000),
            })),
            1,
            "number",
            null
          )}
        </div>

        <div className="card">
          {MasterChart(
            "ICU",
            local.map((c) => ({
              name: c,
              data: chartData(
                data,
                "icu",
                c,
                population[c],
                0,
                100000
              ),
            })),
            1,
            "number",
            null
          )}
        </div>
      </div>

    </div>
  );
}

export default AllCharts;
