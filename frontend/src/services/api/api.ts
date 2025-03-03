import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

const config: AxiosRequestConfig = {
  baseURL: "http://localhost:8080/",
  validateStatus: status => {
    return status >= 200 && status <= 302;
  }
}

export const api: AxiosInstance = axios.create(config);