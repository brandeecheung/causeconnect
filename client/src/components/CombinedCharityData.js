import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_COMBINED_CHARITY_DATA } from '../utils/queries';
import PropTypes from 'prop-types';

function CombinedCharityData({ charityId }) {
  const { data, loading, error } = useQuery(GET_COMBINED_CHARITY_DATA, {
    variables: { charityId },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const { charityName, charityDescription, donations } = data.combinedCharityData;

  return (
    <div>
      <h3>{charityName}</h3>
      <p>{charityDescription}</p>
      <h4>Donations:</h4>
      <ul>
        {donations.map(({ donorName, amount, donationDate }) => (
          <li key={donorName}>
            {donorName} donated ${amount}
            <span className="text-muted">
              on {new Date(donationDate).toLocaleDateString()}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
CombinedCharityData.propTypes = {
    charityId: PropTypes.string.isRequired,
  };
export default CombinedCharityData;
