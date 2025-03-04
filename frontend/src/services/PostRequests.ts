import { AxiosResponse } from "axios";
import { api } from "./api/api";
import { IPage, IPost } from "../@types/Post";

const POST_URL = 'post';

export async function getAllPosts(): Promise<AxiosResponse<IPage>> {
  return await api.get<IPage>(`${POST_URL}/?page=0`);
}

export async function getPostById(id: number): Promise<AxiosResponse<IPost>> {
  return await api.get<IPost>(`${POST_URL}?id=${id}`);
}