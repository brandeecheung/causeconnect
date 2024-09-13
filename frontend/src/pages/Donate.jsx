import React, { useState } from 'react';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_51Py1lOBewpQgTQhWOc9wawJhTm2PVOKKq85MMLMuDA0uYxGwEXfyrIDbfS65TvHwiQefKoid8kvUv6d9vkxYv5FM00SSwokRMH'); 

const DonationForm = () => {
  const [amount, setAmount] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const { error: backendError, clientSecret } = await fetch('http://localhost:3000/create-payment-intent', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ amount: parseInt(amount) * 100 }), 
    }).then(res => res.json());

    if (backendError) {
      setError(backendError);
      return;
    }

    const { error: stripeError } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
      },
    });

    if (stripeError) {
      setError(stripeError.message);
      return;
    }

    setSuccess(true);
    setAmount('');
  };

  return (
    <div>
      <h2>Donations</h2>
      {success && <p>Thank you for your contribution!</p>}
      {error && <p>Error: {error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter donation"
          required
        />
        <CardElement />
        <button type="submit" disabled={!stripe}>Donate Here</button>
      </form>
    </div>
  );
};

const DonationPage = () => (
  <Elements stripe={stripePromise}>
    <DonationForm />
  </Elements>
);

export default DonationPage;
