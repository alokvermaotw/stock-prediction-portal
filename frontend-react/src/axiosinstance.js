import axios from "axios";

const baseURL = import.meta.env.VITE_BACKEND_BASE_API;

const axiosInstance = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-Type": "application/json",
  }
})

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    // console.log("config", config)
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
)

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest.retry) {
      originalRequest.retry = true;
      const refreshToken = localStorage.getItem("refreshToken");
      try{
        const response = await axiosInstance.post('/token/refresh', {refresh: refreshToken});
        // console.log("new access token", response.data.access);
        localStorage.setItem("accessToken", response.data.access);
        originalRequest.headers['Authorization'] = `Bearer ${response.data.access}`;
        return axiosInstance(originalRequest); // Retry the original request with the new access token in the header
      }catch(error){
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        return error.response.data;
      }
    }
    return Promise.reject(error);
  }
)


export default axiosInstance;