import axios from "axios";
// 93230495/json/
const api = axios.create({
    baseURL: "https://viacep.com.br/ws/"
});

export default api;