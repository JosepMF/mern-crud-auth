import axios from "axios";

const API = "http://127.0.0.1:3000/api"

export const registerRequest = user => axios.post(`${API}/register`, user)