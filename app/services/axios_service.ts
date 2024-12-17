import axios from "axios";

const axiosService = axios.create({
    baseURL: 'http://127.0.0.1:5000', 
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    },
});

axiosService.interceptors.request.use (
    (response) => {
        return response.data;
    },
    (error) => {
        alert("ERROR => "+error)
        return Promise.reject(error);
    }
)
export default axiosService;