import axios from "axios";

const api = axios.create({
  baseURL: 'https://backendpatincarrera.onrender.com/api'  /*http://localhost:5000*/
})

export default api;