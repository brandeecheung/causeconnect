
import { ApolloProvider, InMemoryCache, ApolloClient } from '@apollo/client';
import CharityList from './components/CharityList'; // Component that displays charities
import { Outlet } from 'react-router-dom';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql', // Replace with the appropriate backend URL
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="app">
        {/* <CharityList /> */}
        <Outlet />
      </div>
    </ApolloProvider>
  );
}

export default App;


