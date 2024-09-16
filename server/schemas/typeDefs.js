// import gql from '@apollo/client';

const typeDefs = `

  type User {
    _id: ID
    username: String
    email: String
    password: String
    thoughts: [Thought]!
  }

  type Auth {
    token: ID!
    user: User
  }

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

  # Define the type for the external API data
   type CombinedCharityData {
    charityName: String
    charityDescription: String
    donations: [Donation]
  }

  type Query {
    charities(category: String): [Charity]
    charity(_id: ID!): Charity
    donations(charityId: ID!): [Donation]
    externalCharityData(charityName: String!): ExternalCharity
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addCharity(name: String!, description: String, goalAmount: Float, category: String): Charity
    addDonation(donorName: String!, amount: Float!, charityId: ID!): Donation
    updateCharity(_id: ID!, name: String, description: String, goalAmount: Float, amountRaised: Float, category: String): Charity
    deleteCharity(_id: ID!): Charity
  }
`;

export default typeDefs;


