const mongoose = require('mongoose');

const organizationSchema = new mongoose.Schema({
    acct_pd: {
        type: String,
        required: true,
    },
    activity: {
        type: String,
        required: true,
    },
    affiliation: {
        type: String,
        required: true,
    },
    asset_amt: {
        type: String,
        required: true,
    },
    asset_cd: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    classification: {
        type: String,
        required: true,
    },
    deductibility: {
        type: String,
        required: true,
    },
    ein: {
        type: String,
        required: true,
    },
    filing_req_cd: {
        type: String,
        required: true,
    },
    foundation: {
        type: String,
        required: true,
    },
    group: {
        type: String,
        required: true,
    },
    ico: {
        type: String,
        required: true,
    },
    income_amt: {
        type: String,
        required: true,
    },
    income_cd: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    ntee_cd: {
        type: String,
        required: true,
    },
    organization: {
        type: String,
        required: true,
    },
    pf_filing_req_cd: {
        type: String,
        required: true,
    },
    revenue_amt: {
        type: String,
        required: true,
    },
    ruling: {
        type: String,
        required: true,
    },
    sort_name: {
        type: String,
        required: true,
    },
    state: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        required: true,
    },
    street: {
        type: String,
        required: true,
    },
    subsection: {
        type: String,
        required: true,
    },
    tax_period: {
        type: String,
        required: true,
    },
    zip: {
        type: String,
        required: true,
    },
});

const Organization = mongoose.model('Organization', organizationSchema);

module.exports = Organization;