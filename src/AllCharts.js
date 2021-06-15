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
  Israel: 8652167,
  "United Kingdom": 67893379,
  "United States": 334438269,
  Canada: 37746527,
  Ontario: 14745040,
  Ottawa: 1060658,
  OttawaOPH: 1060658,
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
  const [ontarioData, setOntarioData] = useState([]);
  const [ottawaData, setOttawaData] = useState([]);
  const [ophData, setOphData] = useState([]);
  const [updated, setUpdated] = useState([]);

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

  const getOPHData = async () => {
    const storage = firebase.storage();
    const storageRef = storage.ref();
    const url = await storageRef.child("openOttawa.json").getDownloadURL();
    var xhr = new XMLHttpRequest();
    xhr.responseType = "json";
    xhr.onload = async () => {
      var data = await xhr.response;
      setOphData({ OttawaOPH: data.Ottawa });
    };
    xhr.open("GET", url);
    xhr.send();
  };

  useEffect(() => {
    getOurWorldData();
    getOntarioData();
    getOttawaData();
    getOPHData();
  }, []);

  const data = {
    ...ourWorldData,
    ...ontarioData,
    ...ottawaData,
    ...ophData,
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
          Latest ({updated})
        </Typography>
        <div className="cards">
          <div className="card">
            <DoseTable data={data} keys={countries} population={population} />
          </div>
          <div className="card">
            <DoseTable data={data} keys={local} population={population} />
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
              "First Dose",
              countries.map((c) => ({
                name: c,
                data: chartData(data, "peopleVaccinated", c, population[c]),
              }))
            )}
          </div>
          <div className="card">
            {MasterChart(
              "Fully Vaccinated",
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

        <div className="cards">
          <div className="card">
            {MasterChart(
              "First Dose",
              local.map((c) => ({
                name: c,
                data: chartData(data, "peopleVaccinated", c, population[c]),
              }))
            )}
          </div>
          <div className="card">
            {MasterChart(
              "Fully Vaccinated",
              local.map((c) => ({
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

      {MasterChart(
        "Active cases per 100,000",
        ["Ontario", "OttawaOPH"].map((c) => ({
          name: c.startsWith("Ottawa") ? "Ottawa" : c,
          data: chartData(data, "activeCases", c, population[c], 0, 100000),
        })),
        0,
        "number"
      )}
    </div>
  );
}

export default AllCharts;
