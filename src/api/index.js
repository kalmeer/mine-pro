import axios from "axios";

const BASE_URL = "https://react-native-mini-project-items.eapi.joincoded.com";
const instance = axios.create({ baseURL: BASE_URL });

export { BASE_URL, instance };
