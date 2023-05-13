const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
    "sk_test_51MtIKLHD6bHO341enaISpFoCEHyuH5SP9Lvl2THK7WEYN6KzGkpSKntgzGf8wYEadTcvyNEZYu87n1lYHKThGfIc001IoIABcs",
);
const app = express();

// Middleware configuration
app.use(cors({origin: true}));
app.use(express.json());
app.get("/", (request, response) => response.status(200).send("Hello World!"));
app.post("/payments/create", async (request, response) => {
  const total = request.query.total;
  console.log("Payment Request Received for this amount >>>", total);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "USD",
  });
  // Ok created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// listen commands
exports.api = functions.https.onRequest(app);

// http://127.0.0.1:5001/back-end1-fc9c3/us-central1/api // used later in the axios.js component

// import * as functions from "firebase-functions";
// import express from "express";
// import cors from "cors";
// import stripe from "stripe";

// const app = express();
// const stripeSecretKey =
//   "sk_test_51MtIKLHD6bHO341enaISpFoCEHyuH5SP9Lvl2THK7WEYN6KzGkpSKntgzGf8wYEadTcvyNEZYu87n1lYHKThGfIc001IoIABcs";
// const stripeInstance = stripe(stripeSecretKey);

// // Middleware configuration
// app.use(cors({origin: true}));
// app.use(express.json());
// app.get("/", (request, response) => response.status(200).send("Hello World!"));
// app.post("/payments/create", async (request, response) => {
//   const total = request.query.total;
//   console.log("Payment Request Received for this amount >>>", total);
//   const paymentIntent = await stripeInstance.paymentIntents.create({
//     amount: total,
//     currency: "USD",
//   });
//   // Ok created
//   response.status(201).send({
//     clientSecret: paymentIntent.client_secret,
//   });
// });

// // listen commands
// export const api = functions.https.onRequest(app);
