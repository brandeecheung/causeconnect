// src/utils/queries.js
import { gql } from '@apollo/client';

export const QUERY_CHARITIES = gql`
  query getCharities($category: String) {
    charities(category: $category) {
      _id
      name
      description
      goalAmount
      amountRaised
    }
  }
`;

export const QUERY_DONATIONS = gql`
  query getDonations($charityId: ID!) {
    donations(charityId: $charityId) {
      _id
      donorName
      amount
      donationDate
      charity {
        name
      }
    }
  }
`;
