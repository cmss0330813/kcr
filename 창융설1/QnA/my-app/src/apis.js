
import { axios } from "Axios";

const apis = axios.create({
  baseURL: 'http://localhost:8080'
})

export default apis;
