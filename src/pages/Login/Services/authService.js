import axios from 'axios';

const API_URL = 'http://localhost:8087/api/auth';

export const loginRequest = async ({ email, password }) => {
  try {
    const response = await axios.post(`${API_URL}/login`, {
      email,
      password,
    }, {
      headers: {
        'Content-Type': 'application/json',
      },
      responseType: 'text', 
    });

    return response.data;
  } catch (error) {
    console.error("Login failed:", error);
    throw new Error('Login failed');
  }
};

export const saveToken = (token) => localStorage.setItem('token', token);
export const getToken = () => localStorage.getItem('token');
export const removeToken = () => localStorage.removeItem('token');