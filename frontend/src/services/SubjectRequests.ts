import { AxiosResponse } from "axios";
import { IPairIdName } from "../@types/Post";
import { api } from "./api/api";

const SUBJECT_URL = 'subject';

export async function getAllSubject(): Promise<AxiosResponse<IPairIdName[]>> {
    return await api.get<IPairIdName[]>(`${SUBJECT_URL}`);
}