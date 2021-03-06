import axios from 'axios';

export const getBusiness = businessId => {
  return (
    axios.get('/business', {
      params: {
        Id: businessId
      }
    })
  );
};

// const defaultQuery = {
//   term: "plumbing",
//   latitude: "37.786882",
//   longitude: "-122.399972",
//   category: ""
// };

export const search = query => {
  return (
    axios.get('/search', {
      params: {
        term: query.term,
        latitude: query.latitude,
        longitude: query.longitude,
        category: query.category
      }
    })
  );
};

export const fetchAutoComplete = query => {
  return (
    axios.get('/autocomplete', {
      params: {
        text: query.text,
        latitude: query.latitude,
        longitude: query.longitude,
        category: query.category
      }
    })
  );
};

// const defaultQuery = {
//   text: "plumbing",
//   latitude: "37.786882",
//   longitude: "-122.399972",
//   category: ""
// };
