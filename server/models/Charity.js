// models/Charity.js
import mongoose from 'mongoose';

const charitySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: String,
  goalAmount: Number,
  amountRaised: Number,
  category: String, // Example categories: Education, Health, Environment
});

export default mongoose.model('Charity', charitySchema);


