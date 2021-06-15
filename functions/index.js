const functions = require("firebase-functions");
const { getGoCData } = require("./goc");
const { getOurWorldInData } = require("./ourWorldInData");
const {
  getOntarioData,
  getOttawaData,
  getCanadaData,
} = require("./covid19Tracker");
const { getOpenOttawaData } = require("./openOttawa");

exports.helloWorld = functions.https.onRequest((_, response) => {
  functions.logger.info("Hello logs!", { structuredData: true });
  response.send("Hello from Firebase!");
});

exports.mungeOurWorldInData = functions.pubsub
  .schedule("every 6 hours")
  .onRun(() => {
    getOurWorldInData();
    return null;
  });

exports.mungeCovid19Tracker = functions.pubsub
  .schedule("every 6 hours")
  .onRun(() => {
    getCanadaData();
    getOntarioData();
    getOttawaData();
    return null;
  });

exports.mungeOpenOttawa = functions.pubsub
  .schedule("every 6 hours")
  .onRun(() => {
    getOpenOttawaData();
    return null;
  });

exports.mungeGoC = functions.pubsub.schedule("every 6 hours").onRun(() => {
  getGoCData();
  return null;
});
