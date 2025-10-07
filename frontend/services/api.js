import axios from 'axios';
import * as SecureStore from 'expo-secure-store';

const API_URL = 'http://<YOUR_LOCAL_IP>:5000/api/'; // ⚠️ IMPORTANT: Use your local IP for Expo testing

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use(async (config) => {
  const token = await SecureStore.getItemAsync('userToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const authService = {
  register: (email, password) => api.post('users/register', { email, password }),
  login: (email, password) => api.post('users/login', { email, password }),
  // ... other auth methods
};

export default api;