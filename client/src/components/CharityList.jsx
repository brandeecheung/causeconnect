// import { QUERY_CHARITIES } from '../utils/queries';

// function CharityList() {
//   // const { data, loading } = useQuery(QUERY_CHARITIES);

//   // if (loading) return <p>Loading...</p>;

//   return (
//     <div>
//       <h2>Charities</h2>
//       {/* <ul>
//         {data.charities.map((charityData) => (
//           <li key={charityData._id}>
//             <h3>{charityData.name}</h3>
//             <p>{charityData.description}</p>
//             <p>
//               Goal: ${charityData.goalAmount} | Raised: ${charityData.amountRaised}
//             </p>
//           </li>
//         ))}
//       </ul> */}
//     </div>
//   );
// }

// export default CharityList;

// import { useQuery } from '@apollo/client';
// import { UPDATE_CHARITIES } from "../utils/actions";
// import { QUERY_CHARITIES } from "../utils/queries";
// import { useEffect } from 'react';

// export default function CharityList() {

//   const { loading, data } = useQuery(QUERY_CHARITIES);
//   const charities = data?.charities || [];

//   return (
//     <div className="my-2">
//       <h2>Our Products:</h2>
//       {state.charities.length ? (
//         <div className="flex-row">
//           {filterProducts().map((charity) => (
//             <ProductItem
//               key={charity._id}
//               _id={charity._id}
//               image={charity.image}
//               name={charity.name}
//               price={charity.price}
//               quantity={charity.quantity}
//             />
//           ))}
//         </div>
//       ) : (
//         <h3>You haven't added any products yet!</h3>
//       )}
//       {loading ? <img src={spinner} alt="loading" /> : null}
//     </div>
//   );
// }


import { Link } from 'react-router-dom';

const CharityList = ({
  charities
}) => {
  if (!charities.length) {
    return <h3>No Charities Found</h3>;
  }

  // const navigate = useNavigate();

  return (
    <div>
      {charities &&
        charities.map((charity) => (
          <div key={charity._id} className="card mb-3">
            <h4 className="card-header bg-secondary text-light p-2 m-0">
            <p>{charity.name}</p>
            <p>{charity.description}</p>
            <p>{charity.goalAmount}</p>
            <p>{charity.amountRaised}</p>
            <p>{charity.category}</p>
            {/* <button onClick={navigate("/charities/1", {state:
              charities
            })}>Donate</button> */}
            <Link to={`/charities/${charity._id}`} state={charity}>Donate Here</Link>
            </h4>
          </div>
        ))}
    </div>
  );
};

export default CharityList;
