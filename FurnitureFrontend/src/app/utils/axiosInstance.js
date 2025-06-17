import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: "https://api.manmohanfurniture.com",
    headers: {
        "Content-Type": "application/json",
    },
    withCredentials: true,
})