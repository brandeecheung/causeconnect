// src/App.js
import { ApolloProvider, InMemoryCache, ApolloClient } from '@apollo/client';
import CharityList from './components/CharityList'; // Example component

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <CharityList />
      </div>
    </ApolloProvider>
  );
}

export default App;

