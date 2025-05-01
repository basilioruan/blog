import { AxiosResponse } from "axios";
import api from "./api/api";

const AUTH_URL = 'user';

export async function signUp(name: string, email: string, password: string): Promise<AxiosResponse> {
  return await api.post(`${AUTH_URL}`, { name, email, password });
}