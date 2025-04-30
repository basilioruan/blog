import { AxiosResponse } from "axios";
import { api } from "./api/api";

const AUTH_URL = 'login';

export async function signIn(email: string, password: string): Promise<AxiosResponse> {
    return await api.post(`${AUTH_URL}`, { email, password });
}