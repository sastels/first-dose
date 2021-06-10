import React, { useState, useEffect } from "react";
import firebase from "firebase/app";
import "firebase/storage";
import MasterChart from "./MasterChart";
import { chartData } from "./mungingUtils";

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
  const [trackerData, setTrackerData] = useState([]);
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

  const getTrackerData = async () => {
    const storage = firebase.storage();
    const storageRef = storage.ref();
    const url = await storageRef
      .child("covid19_tracker_on.json")
      .getDownloadURL();
    var xhr = new XMLHttpRequest();
    xhr.responseType = "json";
    xhr.onload = async () => {
      var data = await xhr.response;
      setTrackerData(data);
    };
    xhr.open("GET", url);
    xhr.send();
  };

  useEffect(() => {
    getOurWorldData();
    getTrackerData();
  }, []);

  const data = {
    ...ourWorldData,
    ...trackerData,
  };

  const countries = ["Israel", "United Kingdom", "United States", "Canada"];
  const local = ["Canada", "Ontario"];

  return (
    <div className="App">
      <h2> Canada vs other countries</h2>
      {MasterChart(
        data,
        "First Dose",
        countries.map((c) => ({
          name: c,
          data: chartData(data, "peopleVaccinated", c, population[c]),
        }))
      )}

      {MasterChart(
        data,
        "Fully Vaccinated",
        countries.map((c) => ({
          name: c,
          data: chartData(data, "peopleFullyVaccinated", c, population[c]),
        }))
      )}

      <h2> Canada / Ontario</h2>
      {MasterChart(
        data,
        "First Dose",
        local.map((c) => ({
          name: c,
          data: chartData(data, "peopleVaccinated", c, population[c]),
        }))
      )}

      {MasterChart(
        data,
        "Fully Vaccinated",
        local.map((c) => ({
          name: c,
          data: chartData(data, "peopleFullyVaccinated", c, population[c]),
        }))
      )}

      <p> Data last updated at {updated}</p>
    </div>
  );
}

export default AllCharts;