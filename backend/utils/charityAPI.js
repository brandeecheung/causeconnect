import axios from 'axios';

const orgSearch = (term) =>
  axios.get(`https://api.charityapi.org/api/organizations/search/:${term}`);

export default {
    orgSearch,
    
};
