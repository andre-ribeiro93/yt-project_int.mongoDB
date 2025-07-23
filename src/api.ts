import axios from "axios";

// const token = localStorage.getItem('token'); //armazena o token no local storage

const api = axios.create({
  baseURL: import.meta.env.VITE_APP_API_BASE_URL,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
    // 'Authorization': token
  }
});

export default api;