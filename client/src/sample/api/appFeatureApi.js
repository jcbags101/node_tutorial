// appFeatureApi.js
import axios from 'axios';

const API_URL = 'http://yourapi.com/api';

export const getAppOptions = async () => {
  try {
    const response = await axios.get(`${API_URL}/apps`);
    return response.data;
  } catch (error) {
    console.error('Error fetching app options', error);
  }
};

export const saveAppFeature = async (appName, featureName) => {
  try {
    const response = await axios.post(`${API_URL}/appfeatures`, { appName, featureName });
    return response.data;
  } catch (error) {
    console.error('Error saving app feature', error);
  }
};