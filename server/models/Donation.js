import { Schema, model } from 'mongoose';

const donationSchema = new Schema({
  donorName: String,
  amount: Number,
  charity: {
    type: Schema.Types.ObjectId,
    ref: 'Charity',
  },
  donationDate: {
    type: Date,
    default: Date.now,
  },
});

export default model('Donation', donationSchema);