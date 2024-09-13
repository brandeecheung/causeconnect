import React, { useState } from 'react';
import { useMutation, gql } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
// Unit test for AuthService.getProfile()

// Import necessary libraries
const { expect } = require('chai');
const AuthService = require('../utils/auth');

// Test case: getProfile() should return null when the token is not set
describe('AuthService.getProfile()', () => {
  it('should return null when the token is not set', () => {
    // Arrange
    localStorage.removeItem('id_token');

    // Act
    const profile = AuthService.getProfile();

    // Assert
    expect(profile).to.be.null;
  });
});

const Login = (props) => {
  const [formState, setFormState] = useState({ username: '', password: '' });
  const [login, { error, data }] = useMutation(LOGIN_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    
    try {
      const { data } = await login({ variables: { username, password } });
      const token = data.login.token;
      localStorage.setItem('jwt', token);
      console.log('Authentification successfull');
    } catch (err) {
      console.error('Authentification failed:', err);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
      {error && <p>{error.message}</p>}
    </div>
  );
};

export default Login;