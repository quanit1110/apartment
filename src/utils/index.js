import axios from "axios";

const PRODUCTION_URL = "localhost:8080/api";

export const customFetch = axios.create({baseURL: PRODUCTION_URL})