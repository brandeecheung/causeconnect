// schema/typeDefs.js
import { gql } from 'apollo-server-express';

const typeDefs = gql`
  type Charity {
    _id: ID!
    name: String!
    description: String
    goalAmount: Float
    amountRaised: Float
    category: String
  }

  type Donation {
    _id: ID!
    donorName: String!
    amount: Float!
    charity: Charity!
    donationDate: String!
  }

  type Query {
    charities(category: String): [Charity]
    charity(_id: ID!): Charity
    donations(charityId: ID!): [Donation]
  }

  type Mutation {
    addCharity(name: String!, description: String, goalAmount: Float, category: String): Charity
    addDonation(donorName: String!, amount: Float!, charityId: ID!): Donation
  }
`;

export default typeDefs;
