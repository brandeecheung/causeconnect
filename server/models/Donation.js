// models/Donation.js
import mongoose from 'mongoose';

const donationSchema = new mongoose.Schema({
  donorName: String,
  amount: Number,
  charity: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Charity',
  },
  donationDate: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model('Donation', donationSchema);