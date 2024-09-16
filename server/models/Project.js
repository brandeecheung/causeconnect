import {Schema, model} from 'mongoose';

const projectSchema = new Schema({
    projects: [{
    active: Boolean, required: true,
    activities: String, required: true,
    additionalDocumentation: String,
    approvedDate: Date, 
    id: Number, unique: true,
    funding: Number,
    goal: Number,
    longTermImpact: String,
    progressReportLink: String,
    projectLink: String,
    remaining: Number,
    status: String,
    summary: String,
    themeName: String,
    themes: [{
        id: String,
        name: String
    }],
    title: String,
    }],
    donationOptions: [{
        amount: Number,
        description: String
    }],
    imageGallerySize: Number,
    imageLink: String,
    imageSizeOptions: [{
        size: String,
        url: String
    }],
    
    organization: {
        addressLine1: String,
        city: String,
        country: String,
        id: Number,
        iso3166CountryCode: String,
        logoUrl: String,
        name: String,
        postal: String,
        url: String
    },
});

export default model('Project', projectSchema);