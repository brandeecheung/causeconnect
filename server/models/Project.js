import {Schema, model} from 'mongoose';

const projectSchema = new Schema({
    projects: [{
    active: { type: Boolean, required: true },
    activities: { type: String, required: true },
    additionalDocumentation: { type: String },
    approvedDate: { type: Date },
    contactInfo: [{
        contactAddress: { type: String },
        contactCity: { type: String },
        contactCountry: { type: String },
        contactName: { type: String },
        contactPostal: { type: String },
        contactState: { type: String },
        contactTitle: { type: String },
        contactUrl: { type: String },
    }],
    donationOptions: [{
        amount: { type: Number },
        description: { type: String }
    }],
    funding: { type: Number },
    goal: { type: Number },
    id: { type: Number, unique: true },
    imageGallerySize: { type: Number },
    imageLink: { type: String },
    imageSizeOptions: [{
        size: { type: String },
        url: { type: String }
    }],
    longTermImpact: { type: String },
    need: { type: String },
    notice: { type: String },
    numberOfDonations: { type: Number },
    organization: {
        addressLine1: { type: String },
        city: { type: String },
        country: { type: String },
        id: { type: Number },
        iso3166CountryCode: { type: String },
        logoUrl: { type: String },
        name: { type: String },
        postal: { type: String },
        url: { type: String }
    },
    progressReportLink: { type: String },
    projectLink: { type: String },
    remaining: { type: Number },
    status: { type: String },
    summary: { type: String },
    themeName: { type: String },
    themes: [{
        id: { type: String },
        name: { type: String }
    }],
    title: { type: String },
}]
});

export default model('Project', projectSchema);