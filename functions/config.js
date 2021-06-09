const admin = require("firebase-admin");

// Local

const LOCAL_SERVICE_ACCOUNT_KEY =
  "/Users/sastels/Firebase_Keys/first-dose-eb9bd-firebase-adminsdk-srkcq-39b504aac1.json";
const serviceAccount = require(LOCAL_SERVICE_ACCOUNT_KEY);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: "first-dose-eb9bd.appspot.com",
});

// Firebase function

// admin.initializeApp({
//   storageBucket: "first-dose-eb9bd.appspot.com",
// });

// both

const bucket = admin.storage().bucket();

exports.bucket = bucket;
