// src/services/api.js
const BASE_URL = 'http://localhost:5000/api';

const request = async (endpoint, options = {}) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
    ...options,
  };
  
  const res = await fetch(`${BASE_URL}${endpoint}`, config);
  const data = await res.json();
  
  if (!res.ok) throw new Error(data.message || 'Request failed');
  return data;
};

export const api = {
  quotes: {
    submit: (data) => request('/quotes', { method: 'POST', body: JSON.stringify(data) })
  },
  consultations: {
    book: (data) => request('/consultations', { method: 'POST', body: JSON.stringify(data) }),
    getSlots: (date) => request(`/consultations/available-slots?date=${date}`),
  },
  contact: {
    submit: (data) => request('/contact', { method: 'POST', body: JSON.stringify(data) }),
  }
};
