import { AxiosResponse } from "axios";
import { ICategory } from "../@types/Post";
import { api } from "./api/api";

const CATEGORY_URL = 'category';

export async function getAllCategory(): Promise<AxiosResponse<ICategory[]>> {
    return await api.get<ICategory[]>(`${CATEGORY_URL}`);
}