import { useQuery } from "@apollo/client";
import CharityList from "../components/CharityList";
import { QUERY_CHARITIES } from "../utils/queries";

export default function Charities() {

  const fakeCharities = [
    {
      _id: 1,
      name: "Charity 1",
      description: "This is the first charity",
      goalAmount: 10000,
      amountRaised: 5000,
      category: "Category 1"
    },
    {
      _id: 2,
      name: "Charity 2",
      description: "This is the second charity",
      goalAmount: 20000,
      amountRaised: 10000,
      category: "Category 2"
    },
    {
      _id: 3,
      name: "Charity 3",
      description: "This is the third charity",
      goalAmount: 30000,
      amountRaised: 15000,
      category: "Category"
    }
  ]

  // Set to true to use fake charities
  const USE_FAKE_CHARITIES = true;

  const { loading, data } = useQuery(QUERY_CHARITIES);
  const charities = data?.charities || [];

  return (
    <main>
      <div>
        {loading ? (
          <div>Loading...</div>
        ) : (
          <CharityList
            charities={USE_FAKE_CHARITIES ? fakeCharities : charities}
          />
        )}
      </div>
    </main>
  );
}
