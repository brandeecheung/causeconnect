import { useMutation } from '@apollo/client';
import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { ADD_DONATION } from '../utils/mutations';
import { QUERY_DONATIONS } from '../utils/queries';

const DonationForm = () => {

  const location = useLocation();
  const charity = location.state;

  const { _id } = useParams();

  const [amount, setAmount] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [success, setSuccess] = useState(false);


  const [addDonation, { error }] = useMutation(
    ADD_DONATION, {
    refetchQueries: [
      QUERY_DONATIONS,
      'getDonations',
      // QUERY_ME,
      // 'me'
    ]
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Add donation to DB with _id

    try {
      const { data } = await addDonation({
        variables: { donorName: "DONOR", /* replace with real user */ amount, charityId: _id },
      });
      console.log(data);
    } catch (err) {
      console.error(err);
    }

    setSuccess(true);
    setAmount('');
  };

  return (
    <div className="donation-form">
      <h2>Make a Donation to {charity.name}</h2>
      {success && <p className="success-message">Thank you for your contribution!</p>}
      <form onSubmit={handleSubmit}>
        <label htmlFor="donation-amount">Donation Amount</label>
        <input
          id="donation-amount"
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter donation amount"
          required
        />
        <label htmlFor="card-element">Card Details</label>
        <input
          id="card-details"
          type="number"
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
          placeholder="Enter card number"
          required
        />
        <button type="submit">
          Donate
        </button>
      </form>
    </div>
  );
};

const Donation = () => (
  
  <div className="donation-page">
    <h1>Support a Cause</h1>
    <DonationForm />
  </div>
);

export default Donation;
