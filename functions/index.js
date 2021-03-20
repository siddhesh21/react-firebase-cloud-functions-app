const functions = require("firebase-functions");
const cors = require("cors");
const express = require("express");

const app = express();

app.use(cors({ origin: true }));

app.get("/hello", (req, res) => {
  res.send("HELLO there!");
});

app.post("/post-to-me", (req, res) => {
  res.send("Hey, gotcha!");
});

exports.server = functions.https.onRequest(app);

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   cors(request, response, () => {
//     // console.log(request.query.term);
//     functions.logger.info("Hello logs!", { structuredData: true });
//     response.json({ searchResults: [] });
//   });
// });
