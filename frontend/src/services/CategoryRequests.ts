import { AxiosResponse } from "axios";
import { IPairIdName } from "../@types/Post";
import { api } from "./api/api";

const CATEGORY_URL = 'category';

export async function getAllCategory(): Promise<AxiosResponse<IPairIdName[]>> {
    return await api.get<IPairIdName[]>(`${CATEGORY_URL}`);
}