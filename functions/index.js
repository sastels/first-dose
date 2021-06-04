const functions = require("firebase-functions");
const { getData } = require("./munger");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello logs!", { structuredData: true });
  response.send("Hello from Firebase!");
});

exports.munge = functions.https.onRequest((request, response) => {
  functions.logger.info("munging data", { structuredData: true });
  getData();
  response.send("Data munged and saved!");
});
