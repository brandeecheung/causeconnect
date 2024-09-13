import { get } from 'axios';
import Charity from '../models/Charity';
import Donation from '../models/Donation';

const resolvers = {
  Query: {
    charities: async ({ category: charityCategory }) => {
      const filter = charityCategory ? { category: charityCategory } : {};
      return await Charity.find(filter);
    },
    charity: async ({ _id }) => Charity.findById(_id),
    donations: async (_, { charityId }) => {
      return await Donation.find({ charity: charityId }).populate('charity');
    },
    externalCharityData: async ({ charityName }) => {
      try {
        const { data } = await get(`https://api.example.com/charity/${charityName}`);
        return data;
      } catch (error) {
        throw new Error(`Failed to fetch external data for ${charityName}`, error);
      }
    },
    combinedCharityData: async ({ charityId }) => {
      try {
        const [charityResponse, donationResponse] = await Promise.all([
          get(`https://api1.com/charities/${charityId}`),
          get(`https://api2.com/charities/${charityId}/donations`),
        ]);

        return {
          charityName: charityResponse.data.name,
          charityDescription: charityResponse.data.description,
          donations: donationResponse.data.donations,
        };
      } catch (error) {
        throw new Error(`Failed to fetch combined data for ${charityId}`, error);
      }
    },
  },

  Mutation: {
    addCharity: async ({ name, description, goalAmount, category }) => {
      const charity = new Charity({ name, description, goalAmount, category });
      return await charity.save();
    },
    addDonation: async ({ donorName, amount, charityId }, _, { charities }) => {
      const charity = await charities.findOne({ _id: charityId });
      if (!charity) {
        throw new Error(`Charity with ID ${charityId} not found`);
      }

      const donation = new Donation({ donorName, amount, charity: charity._id });
      await charity.updateOne({ $inc: { amountRaised: amount } });
      return await donation.save();
    },

    updateCharity: async ({ _id, name, description, goalAmount, amountRaised, category }, _, { charities }) => {
      const charityToUpdate = await charities.findOne({ _id });

      if (!charityToUpdate) {
        throw new Error(`Charity with ID ${_id} not found`);
      }

      return await charities.findOneAndUpdate(
        { _id },
        { name, description, goalAmount, amountRaised, category },
        { new: true }
      );
    },

    deleteCharity: async ({ charityId }) => {
      const charity = await Charity.findByIdAndDelete(charityId);

      if (!charity) {
        throw new Error(`Charity with ID ${charityId} not found`);
      }

      return charity;
    },
  }
}

export default resolvers;

