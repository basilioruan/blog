import { AxiosResponse } from "axios";
import { api } from "./api/api";

export async function getAllPosts<T>() {
  const response: AxiosResponse = await api.get('/api/post/?page=0');

  return response;
}