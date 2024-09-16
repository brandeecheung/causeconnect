import { gql } from '@apollo/client';

export const QUERY_CHARITIES = gql`
  query getCharities($category: String) {
    charities(category: $category) {
      id
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

export const GET_COMBINED_CHARITY_DATA = gql`
  query getCombinedCharityData($charityId: ID!) {
    combinedCharityData(charityId: $charityId) {
      charityName
      charityDescription
      donations {
        donorName
        amount
        donationDate
      }
    }
  }
`;

