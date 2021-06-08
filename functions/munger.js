/* eslint-disable indent */

const fetch = require("node-fetch");
const { bucket } = require("./config");

async function uploadFile(data) {
  const file = bucket.file("munged_data.json");
  file.save(JSON.stringify(data)).then(() => {
    console.log(`file uploaded`);
  });
}

const getFirstDose = (data, country) => {
  const countryData = data
    .filter((x) => x.country === country)[0]
    .data.map((day) => ({
      date: Date.parse(day.date),
      peopleVaccinated: day.people_vaccinated,
      peopleFullyVaccinated: day.people_fully_vaccinated,
    }));
  return { [country]: countryData };
};

const getData = () => {
  const dataFileName =
    "https://raw.githubusercontent.com/owid/covid-19-data/master/public/data/vaccinations/vaccinations.json";

  return fetch(dataFileName)
    .then((res) => res.json())
    .then((json) => ({
      ...getFirstDose(json, "Canada"),
      ...getFirstDose(json, "United States"),
      ...getFirstDose(json, "United Kingdom"),
      ...getFirstDose(json, "Israel"),
    }))
    .then((data) => {
      uploadFile(data);
    });
};

getData();

exports.getData = getData;
