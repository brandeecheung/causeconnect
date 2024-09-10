// schema/resolvers.js
import Charity from '../models/Charity.js';
import Donation from '../models/Donation.js';

const resolvers = {
  Query: {
    charities: async (_, { category }) => {
      const params = category ? { category } : {};
      return await Charity.find(params);
    },
    charity: async (_, { _id }) => {
      return await Charity.findById(_id);
    },
    donations: async (_, { charityId }) => {
      return await Donation.find({ charity: charityId }).populate('charity');
    },
  },

  Mutation: {
    addCharity: async (_, { name, description, goalAmount, category }) => {
      const charity = new Charity({ name, description, goalAmount, category });
      return await charity.save();
    },
    addDonation: async (_, { donorName, amount, charityId }) => {
      const donation = new Donation({ donorName, amount, charity: charityId });
      await Charity.findByIdAndUpdate(
        charityId,
        { $inc: { amountRaised: amount } }, // Update amount raised for the charity
        { new: true }
      );
      return await donation.save();
    },
  },
};

export default resolvers;
