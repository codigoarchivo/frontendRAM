import axios from "axios";

const trickandmortyApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

export default trickandmortyApi;
