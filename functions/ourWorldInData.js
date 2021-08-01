/* eslint-disable indent */

const fetch = require("node-fetch");
const { bucket } = require("./config");

async function uploadFile(data, fileName) {
  const file = bucket.file(fileName);
  file.save(JSON.stringify(data)).then(() => {
    console.log(`file uploaded: ${fileName}`);
  });
}

const mungeOurWorldInData = (data, country) => {

  var lastWeekPeopleVaccinated = [0, 0, 0, 0, 0, 0, 0, 0];
  var lastWeekPeopleFullyVaccinated = [0, 0, 0, 0, 0, 0, 0, 0];


  const countryData = data
    .filter((x) => x.country === country)[0]
    .data.map((day) => {

      lastWeekPeopleVaccinated.shift();
      lastWeekPeopleFullyVaccinated.shift();
      lastWeekPeopleVaccinated.push(day.people_vaccinated);
      lastWeekPeopleFullyVaccinated.push(day.people_fully_vaccinated);

      return {
        date: Date.parse(day.date),
        dateString: day.date,
        peopleVaccinated: day.people_vaccinated,
        changePeopleVaccinatedPastWeek: lastWeekPeopleVaccinated[7] - lastWeekPeopleVaccinated[0],
        peopleFullyVaccinated: day.people_fully_vaccinated,
        changePeopleFullyVaccinatedPastWeek: lastWeekPeopleFullyVaccinated[7] - lastWeekPeopleFullyVaccinated[0],
      }
    });
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
      // console.log(JSON.stringify(data, null, 4))
      uploadFile(data, "ourWorldInData.json");
    });
};

// getOurWorldInData();

exports.getOurWorldInData = getOurWorldInData;
