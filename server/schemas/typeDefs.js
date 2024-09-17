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
    externalCharity: ExternalCharity
  }

  type Donation {
    _id: ID!
    donorName: String!
    amount: Float!
    charity: Charity!
    donationDate: String!
  }

  type ExternalCharity {
  id: Int!
    name: String!
    mission: String
    activeProjects: Int
    totalProjects: Int
    addressLine1: String
    addressLine2: String
    city: String
    state: String
    postal: String
    country: String
    iso3166CountryCode: String
    ein: String
    logoUrl: String
    url: String
    themes: [String]
    countries: [String]
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
    externalCharity(charityName: String!): ExternalCharity
    combinedCharityData(charityId: ID!): CombinedCharityData
    user: [User]
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addCharity(name: String!, description: String, goalAmount: Float, category: String): Charity
    addDonation(donorName: String!, amount: Float!, charityId: ID!): Donation
    updateCharity(_id: ID!, name: String, description: String, goalAmount: Float, amountRaised: Float, category: String): Charity
    deleteCharity(_id: ID!): Charity
  }

  type Thought {
  id: ID!
  text: String!
  
}
`;

export default typeDefs;


