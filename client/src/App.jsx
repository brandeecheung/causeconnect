import React from 'react';
import { ApolloProvider, InMemoryCache, ApolloClient } from '@apollo/client';
import { Outlet } from 'react-router-dom';
import Nav from './components/Nav';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql', // Replace with the appropriate backend URL
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="app">
        <Nav/>
        <Outlet />
      </div>
    </ApolloProvider>
  );
}

export default App;


