const functions = require("firebase-functions");
const { getOurWorldInData } = require("./ourWorldInData");
const { getOntarioData, getOttawaData } = require("./covid19Tracker");

exports.helloWorld = functions.https.onRequest((_, response) => {
  functions.logger.info("Hello logs!", { structuredData: true });
  response.send("Hello from Firebase!");
});

exports.mungeOurWorldInData = functions.pubsub
  .schedule("every 12 hours")
  .onRun(() => {
    getOurWorldInData();
    return null;
  });

exports.mungeCovid19Tracker = functions.pubsub
  .schedule("every 12 hours")
  .onRun(() => {
    getOntarioData();
    getOttawaData();
    return null;
  });
