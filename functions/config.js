const admin = require("firebase-admin");

const LOCAL = false;

if (LOCAL) {
  const LOCAL_SERVICE_ACCOUNT_KEY =
    "/Users/sastels/Firebase_Keys/first-dose-eb9bd-firebase-adminsdk-srkcq-39b504aac1.json";
  const serviceAccount = require(LOCAL_SERVICE_ACCOUNT_KEY);

  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    storageBucket: "first-dose-eb9bd.appspot.com",
  });
} else {
  admin.initializeApp({
    storageBucket: "first-dose-eb9bd.appspot.com",
  });
}

const bucket = admin.storage().bucket();

exports.bucket = bucket;
