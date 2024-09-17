// server.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const Stripe = require('stripe');
const stripe = Stripe('sk_test_51Py1lOBewpQgTQhWIzWfr2O6IlCQZBJ7uqMIO5meNViOeeTsvjj5xr2ZfhD4LIQsSrbTW4Pu5z6BFLmPXDdKMd2Y001BkV3Qnz'); 

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post('/create-payment-intent', async (req, res) => {
  const { amount } = req.body;

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount,
      currency: 'usd',
      payment_method_types: ['card'],
    });

    res.json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
 
});
