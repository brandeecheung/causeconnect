// src/components/CharityList.js
import { useQuery } from '@apollo/client';
import { QUERY_CHARITIES } from '../utils/queries';

function CharityList() {
  const { loading, data } = useQuery(QUERY_CHARITIES);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h2>Charities</h2>
      <ul>
        {data.charities.map((charity) => (
          <li key={charity._id}>
            <h3>{charity.name}</h3>
            <p>{charity.description}</p>
            <p>Goal: ${charity.goalAmount}</p>
            <p>Raised: ${charity.amountRaised}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CharityList;
