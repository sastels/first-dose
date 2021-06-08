import FirstDoseChart from "./FirstDoseChart";
import FullyVaccinatedChart from "./FullyVaccinatedChart";
import React, { useState, useEffect } from "react";
import firebase from "firebase/app";
import "firebase/storage";

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

function DoseChart() {
  const [data, setData] = useState([]);
  const [updated, setUpdated] = useState([]);

  const getData = async () => {
    const storage = firebase.storage();
    const storageRef = storage.ref();
    const url = await storageRef.child("munged_data.json").getDownloadURL();
    var xhr = new XMLHttpRequest();
    xhr.responseType = "json";
    xhr.onload = async () => {
      var data = await xhr.response;
      setData(data);
      setUpdated(lastUpdated(data));
    };
    xhr.open("GET", url);
    xhr.send();
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App">
      {FirstDoseChart(data)}
      {FullyVaccinatedChart(data)}
      <p> Data last updated at {updated}</p>
    </div>
  );
}

export default DoseChart;
