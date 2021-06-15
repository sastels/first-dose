/* eslint-disable indent */

const parse = require("csv-parse");
const fetch = require("node-fetch");
const { bucket } = require("./config");

async function uploadFile(data, fileName) {
  const file = bucket.file(fileName);
  file.save(JSON.stringify(data)).then(() => {
    console.log(`file uploaded: ${fileName}`);
  });
}

const mungeGoCData = (data, area) => {
  parse(data, {}, (err, records) => {
    if (err != null) {
      console.log(`Error: ${err}`);
    } else {
      records.shift();
      const toSave = records
        .filter((r) => r[0] === "1")
        .map((r) => ({
          date: Date.parse(r[3]),
          dateString: r[3],
          activeCases: parseInt(r[25]),
        }));
      uploadFile({ [area]: toSave }, "GoC.json");
    }
  });
};

const getGoCData = () => {
  const dataFileName =
    "https://health-infobase.canada.ca/src/data/covidLive/covid19-download.csv";
  return fetch(dataFileName)
    .then((res) => res.text())
    .then((data) => mungeGoCData(data, "CanadaGoC"));
};

// getGoCData();

exports.getGoCData = getGoCData;
