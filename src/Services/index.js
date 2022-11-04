import axios from "axios";

export const apiLocal = axios.create({
    baseURL: "http://localhost:8080"
})

//export default apiLocal;