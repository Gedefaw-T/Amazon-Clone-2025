const { onRequest } = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
const stripe = require("stripe")(process.env.STRIPE_KEY);

const app = express();
app.use(cors({ origin: true }));

app.use(express.json());

// test app.get through firebase

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Success !",
  });
});

// create payment
app.post("/payment/create", async (req, res) => {
  const total = req.query.total;
  if (total > 0) {
    // console.log("payement recieved", total);
    // res.send(total);

    // create payment intent
    const paymentIntent = await stripe.paymentIntents.create({
      amount: total,
      currency: "USD",
    });
    res.status(201).json({ clientSecret: paymentIntent.client_secret });
  } else {
    res.status(403).json({
      message: "total must be gretaer than 0",
    });
  }
});

exports.api = onRequest(app);
