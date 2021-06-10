/* eslint-disable indent */

const fetch = require("node-fetch");
const { bucket } = require("./config");

async function uploadFile(data, fileName) {
  const file = bucket.file(fileName);
  file.save(JSON.stringify(data)).then(() => {
    console.log(`file uploaded: ${fileName}`);
  });
}

const mungeOpenOttawaData = (data, area) => {
  return {
    [area]: data.features.map((day) => ({
      date: day.attributes.Date,
      dateString: `${new Date(day.attributes.Date)}`.slice(4, 15),
      activeCases: day.attributes.Total_Active_Cases_by_Date,
    })),
  };
};

const getOpenOttawaData = () => {
  const dataFileName =
    "https://opendata.arcgis.com/datasets/6bfe7832017546e5b30c5cc6a201091b_0/FeatureServer/0/query?where=1%3D1&outFields=OBJECTID,Date,Total_Active_Cases_by_Date&outSR=4326&f=json";
  return fetch(dataFileName)
    .then((res) => res.json())
    .then((json) => mungeOpenOttawaData(json, "Ottawa"))
    .then((data) => {
      uploadFile(data, "openOttawa.json");
    });
};

// getOpenOttawaData();

exports.getOpenOttawaData = getOpenOttawaData;
