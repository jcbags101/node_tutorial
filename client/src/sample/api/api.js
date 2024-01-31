import axios from 'axios';

export const getApps = () => {
  return axios.get('/api/apps');
};

export const createApp = (appName) => {
  return axios.post('/api/apps', { name: appName });
};

export const createFeature = (appId, featureName) => {
  return axios.post(`/api/apps/${appId}/features`, { name: featureName });
};