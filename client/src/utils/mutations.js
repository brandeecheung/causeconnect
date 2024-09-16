import { gql } from '@apollo/client';

export const ADD_CHARITY = gql`
  mutation addCharity($name: String!, $description: String, $goalAmount: Float, $category: String) {
    addCharity(name: $name, description: $description, goalAmount: $goalAmount, category: $category) {
      _id
      name
      description
    }
  }
`;

export const ADD_DONATION = gql`
  mutation addDonation($donorName: String!, $amount: Float!, $charityId: ID!) {
    addDonation(donorName: $donorName, amount: $amount, charityId: $charityId) {
      _id
      donorName
      amount
      charity {
        name
      }
    }
  }
`;

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      profile {
        _id
        name
      }
    }
  }
`;