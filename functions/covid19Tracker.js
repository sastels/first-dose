/* eslint-disable indent */

const fetch = require("node-fetch");
const { bucket } = require("./config");

async function uploadFile(data, fileName) {
  const file = bucket.file(fileName);
  file.save(JSON.stringify(data)).then(() => {
    console.log(`file uploaded: ${fileName}`);
  });
}

const mungeCovid19TrackerData = (data, area) => {
  return {
    [area]: data.data.map((day) => ({
      date: Date.parse(day.date),
      dateString: day.date,
      peopleVaccinated: day.total_vaccinations - day.total_vaccinated,
      peopleFullyVaccinated: day.total_vaccinated,
      activeCases:
        day.total_cases - day.total_fatalities - day.total_recoveries,
    })),
  };
};

const getOntarioData = () => {
  const dataFileName = "https://api.covid19tracker.ca/reports/province/on";
  return fetch(dataFileName)
    .then((res) => res.json())
    .then((json) => mungeCovid19TrackerData(json, "Ontario"))
    .then((data) => {
      uploadFile(data, "covid19_tracker_on.json");
    });
};

const getOttawaData = () => {
  const dataFileName = "https://api.covid19tracker.ca/reports/regions/3551";
  return fetch(dataFileName)
    .then((res) => res.json())
    .then((json) => mungeCovid19TrackerData(json, "Ottawa"))
    .then((data) => {
      uploadFile(data, "covid19_tracker_ottawa.json");
    });
};

// getOntarioData();
// getOttawaData();

exports.getOntarioData = getOntarioData;
exports.getOttawaData = getOttawaData;
