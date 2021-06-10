/* eslint-disable indent */

const fetch = require("node-fetch");
const { bucket } = require("./config");

async function uploadFile(data, fileName) {
  const file = bucket.file(fileName);
  file.save(JSON.stringify(data)).then(() => {
    console.log(`file uploaded`);
  });
}

const mungeCovid19TrackerData = (data) => {
  return {
    Ontario: data.data.map((day) => ({
      date: Date.parse(day.date),
      dateString: day.date,
      peopleVaccinated: day.total_vaccinations - day.total_vaccinated,
      peopleFullyVaccinated: day.total_vaccinated,
      activeCases:
        day.total_cases - day.total_fatalities - day.total_recoveries,
    })),
  };
};

const getCovid19TrackerData = () => {
  const dataFileName = "https://api.covid19tracker.ca/reports/province/on";
  return fetch(dataFileName)
    .then((res) => res.json())
    .then((json) => mungeCovid19TrackerData(json))
    .then((data) => {
      uploadFile(data, "covid19_tracker_on.json");
    });
};

const getOttawaData = () => {
  const dataFileName = "https://api.covid19tracker.ca/reports/regions/3551";
  return fetch(dataFileName)
    .then((res) => res.json())
    .then((json) => mungeCovid19TrackerData(json))
    .then((data) => {
      uploadFile(data, "covid19_tracker_ottawa.json");
    });
};

// getCovid19TrackerData();
getOttawaData();

exports.getCovid19TrackerData = getCovid19TrackerData;
exports.getOttawaData = getOttawaData;
