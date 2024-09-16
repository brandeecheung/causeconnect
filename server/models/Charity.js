import { Schema, model } from 'mongoose';

const charitySchema = new Schema({
organizations: [{
  name: String,
  id: Number,
  required: true,
  address: [{
    addressLine1: String,
    addressLine2: String,
    city: String,
    state: String,
    postal: String,
    country: String,
    required: true,
  }],
  info: [{
  logoUrl: String,
  mission: String,
  themes: String,
  url: String,
  required: true,
  }],
}],
});

export default model('Charity', charitySchema);



