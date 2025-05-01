import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import SessionEnum from "./SessionEnum";
import { decryptWithPrivateKey, encryptWithPublicKey } from "../../utils/criptUtils";

const config: AxiosRequestConfig = {
  baseURL: "http://localhost:8080/api/",
  withCredentials: true,
  validateStatus: status => {
    return status >= 200 && status <= 302;
  }
}

const api: AxiosInstance = axios.create(config);

api.interceptors.request.use(
  (config) => {
    const auth = window.sessionStorage.getItem(SessionEnum.AUTH);
    if (auth) {
      const credentials: string[] = auth.split(';');
      config.auth = {
        username: decryptWithPrivateKey(credentials[0]),
        password: decryptWithPrivateKey(credentials[1])
      };
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;