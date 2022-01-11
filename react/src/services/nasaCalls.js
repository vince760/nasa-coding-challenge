import axios from 'axios';
import * as helpers from './serviceHelpers';

const baseUrl = 'https://localhost:5001/api/nasaimages';

// Get 10 Random images from APOD 1 for Hero Section 9 for info cards
const initialApodCall = () => {
  const config = {
    method: 'GET',
    url: baseUrl,
    crossdomain: true,
    xhrFields: {
      withCredentials: true,
    },
    headers: { 'Content-Type': 'application/json' },
  };

  return axios(config)
    .then(helpers.onGlobalSuccess)
    .catch(helpers.onGlobalError);
};

const singleImageCall = () => {
  const config = {
    method: 'GET',
    url: `${baseUrl}/single`,
    crossdomain: true,
    xhrFields: {
      withCredentials: true,
    },
    headers: { 'Content-Type': 'application/json' },
  };

  return axios(config)
    .then(helpers.onGlobalSuccess)
    .catch(helpers.onGlobalError);
};

const searchByQuantity = (qty) => {
  const config = {
    method: 'GET',
    url: `${baseUrl}/quantity/${qty}`,
    crossdomain: true,
    xhrFields: {
      withCredentials: true,
    },
    headers: { 'Content-Type': 'application/json' },
  };

  return axios(config)
    .then(helpers.onGlobalSuccess)
    .catch(helpers.onGlobalError);
};

const searchByStartDate = (date) => {
  const config = {
    method: 'GET',
    url: `${baseUrl}/startdate?date=${date}`,
    crossdomain: true,
    xhrFields: {
      withCredentials: true,
    },
    headers: { 'Content-Type': 'application/json' },
  };

  return axios(config)
    .then(helpers.onGlobalSuccess)
    .catch(helpers.onGlobalError);
};

const searchByDateRange = (startDate, endDate) => {
  const config = {
    method: 'GET',
    url: `${baseUrl}/daterange?startDate=${startDate}&endDate=${endDate}`,
    crossdomain: true,
    xhrFields: {
      withCredentials: true,
    },
    headers: { 'Content-Type': 'application/json' },
  };

  return axios(config)
    .then(helpers.onGlobalSuccess)
    .catch(helpers.onGlobalError);
};

export {
  initialApodCall, singleImageCall, searchByQuantity, searchByStartDate, searchByDateRange,
};
