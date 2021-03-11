import axios from "axios";

const axiosVigenere = axios.create({
  baseURL: "http://localhost:8000/vigenere",
});

export default axiosVigenere;
