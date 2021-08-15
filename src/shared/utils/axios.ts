import axios from "axios";
import { BASE_URL } from "../data/tmdb/meta";

const instance = axios.create({
    baseURL: BASE_URL
});

export default instance;