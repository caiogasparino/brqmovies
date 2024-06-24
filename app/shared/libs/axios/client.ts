import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
});

export function setDefaultToken(token: string | undefined) {
    axiosInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
}

axiosInstance.interceptors.request.use(
    (config) => {
        return config;
    },
    async (error) => {
        return await Promise.reject(error);
    },
);

axiosInstance.interceptors.response.use(
    (response) => {
        return response;
    },
    async (error) => {
        return await Promise.reject(error);
    },
);

export { axiosInstance };
