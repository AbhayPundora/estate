import axios from "axios";

const apiRequest = axios.create({
  baseURL: "http://localhost:8800/api",
  withCredentials: true,
  headers: {
    "x-api-key": "sk_live_estate_demo_7f3c9a2b1d4e",
  },
});

export default apiRequest;