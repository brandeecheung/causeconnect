import { Schema, model } from 'mongoose';

const charitySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: String,
  goalAmount: Number,
  amountRaised: {
    type: Number,
    default: 0,
  },
  category: String, // Example: Education, Health, Environment
});

export default model('Charity', charitySchema);



