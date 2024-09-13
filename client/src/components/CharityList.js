import { useQuery } from '@apollo/client';
import { QUERY_CHARITIES } from '../utils/queries';

function CharityList() {
  const { data, loading } = useQuery(QUERY_CHARITIES);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h2>Charities</h2>
      <ul>
        {data.charities.map((charityData) => (
          <li key={charityData._id}>
            <h3>{charityData.name}</h3>
            <p>{charityData.description}</p>
            <p>
              Goal: ${charityData.goalAmount} | Raised: ${charityData.amountRaised}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CharityList;

