const functions = require("firebase-functions");
const { getData } = require("./munger");

exports.helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello logs!", { structuredData: true });
  response.send("Hello from Firebase!");
});

exports.mungeDaily = functions.pubsub.schedule("every 12 hours").onRun(() => {
  functions.logger.info("running munger", { structuredData: true });
  getData();
  return null;
});
