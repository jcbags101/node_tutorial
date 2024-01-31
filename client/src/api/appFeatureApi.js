import axios from 'axios';

export const getAppOptions = () => {
  return axios.get('/api/apps/options');
};

export const saveAppFeature = (appData) => {
  return axios.post('/api/apps/features', appData);
};