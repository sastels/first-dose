/* eslint-disable indent */

const fetch = require("node-fetch");
const { bucket } = require("./config");
// const util = require('util')

async function uploadFile(data, fileName) {
  const file = bucket.file(fileName);
  file.save(JSON.stringify(data)).then(() => {
    console.log(`file uploaded: ${fileName}`);
  });
}

const mungeCovid19TrackerData = (data, area) => {
  var lastWeekCases = [0, 0, 0, 0, 0, 0, 0];
  var lastWeekPeopleVaccinated = [0, 0, 0, 0, 0, 0, 0, 0];
  var lastWeekPeopleFullyVaccinated = [0, 0, 0, 0, 0, 0, 0, 0];
  var lastWeekPeopleBoosted = [0, 0, 0, 0, 0, 0, 0, 0];

  return {
    [area]: data.data.map((day) => {
      var totalVaccinations = day.total_vaccinations
      var totalVaccinated = day.total_vaccinated
      var totalBoosted = day.total_boosters_1
      if (day.date === "2021-07-28") {
        totalVaccinations += 4750 - 156
        totalVaccinated += 3950 - 138
      } else if (day.date >= "2021-07-29") {
        totalVaccinations -= (30400 - 4750 - 4272)
        totalVaccinated -= (13635 - 3950 - 3359)
      }
      var peopleVaccinated = totalVaccinations - totalVaccinated - totalBoosted;
      lastWeekCases.shift();
      lastWeekPeopleVaccinated.shift();
      lastWeekPeopleFullyVaccinated.shift();
      lastWeekPeopleBoosted.shift();

      lastWeekCases.push(day.change_cases);
      lastWeekPeopleVaccinated.push(peopleVaccinated);
      lastWeekPeopleFullyVaccinated.push(totalVaccinated);
      lastWeekPeopleBoosted.push(totalBoosted);

      return {
        date: Date.parse(day.date),
        dateString: day.date,
        peopleVaccinated: peopleVaccinated,
        changePeopleVaccinatedPastWeek: lastWeekPeopleVaccinated[7] - lastWeekPeopleVaccinated[0],
        peopleFullyVaccinated: totalVaccinated,
        changePeopleFullyVaccinatedPastWeek: lastWeekPeopleFullyVaccinated[7] - lastWeekPeopleFullyVaccinated[0],
        peopleBoosted: totalBoosted,
        changePeopleBoosted: lastWeekPeopleBoosted[7] - lastWeekPeopleBoosted[0],
        changeCases: day.change_cases,
        changeCasesPastWeek: Math.round(lastWeekCases.reduce((a, b) => a + b, 0)),
        hospitalized: day.total_hospitalizations,
        icu: day.total_criticals,
        activeCases:
          day.total_cases - day.total_fatalities - day.total_recoveries,
      };
    }),
  };
};

const getCanadaData = () => {
  const dataFileName = "https://api.covid19tracker.ca/reports/";
  return fetch(dataFileName)
    .then((res) => res.json())
    .then((json) => mungeCovid19TrackerData(json, "Canada"))
    .then((data) => {
      uploadFile(data, "covid19_tracker_canada.json");
    });
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
      // console.log(util.inspect(data, { maxArrayLength: null }))
      uploadFile(data, "covid19_tracker_ottawa.json");
    });
};

// getOntarioData();
// getOttawaData();
// getCanadaData();

exports.getOntarioData = getOntarioData;
exports.getOttawaData = getOttawaData;
exports.getCanadaData = getCanadaData;
