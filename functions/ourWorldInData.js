/* eslint-disable indent */

const fetch = require("node-fetch");
const { bucket } = require("./config");

async function uploadFile(data, fileName) {
  const file = bucket.file(fileName);
  file.save(JSON.stringify(data)).then(() => {
    console.log(`file uploaded`);
  });
}

const mungeOurWorldInData = (data, country) => {
  const countryData = data
    .filter((x) => x.country === country)[0]
    .data.map((day) => ({
      date: Date.parse(day.date),
      dateString: day.date,
      peopleVaccinated: day.people_vaccinated,
      peopleFullyVaccinated: day.people_fully_vaccinated,
    }));
  return { [country]: countryData };
};

const getOurWorldInData = () => {
  const dataFileName =
    "https://raw.githubusercontent.com/owid/covid-19-data/master/public/data/vaccinations/vaccinations.json";

  return fetch(dataFileName)
    .then((res) => res.json())
    .then((json) => ({
      ...mungeOurWorldInData(json, "Canada"),
      ...mungeOurWorldInData(json, "United States"),
      ...mungeOurWorldInData(json, "United Kingdom"),
      ...mungeOurWorldInData(json, "Israel"),
    }))
    .then((data) => {
      uploadFile(data, "ourWorldInData.json");
    });
};

// getOurWorldInData();

exports.getOurWorldInData = getOurWorldInData;
