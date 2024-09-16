import { Schema, model } from 'mongoose';

const charitySchema = new Schema({
organizations: [{
  name: String,
  id: Number,
  address: [{
    addressLine1: String,
    addressLine2: String,
    city: String,
    state: String,
    postal: String,
    country: String,
  }],
  info: [{
  logoUrl: String,
  mission: String,
  themes: String,
  url: String,
  }],
}],
});

export default model('Charity', charitySchema);



