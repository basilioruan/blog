import { AxiosResponse } from "axios";
import { ISubject } from "../@types/Post";
import { api } from "./api/api";

const SUBJECT_URL = 'subject';

export async function getAllSubject(): Promise<AxiosResponse<ISubject[]>> {
    return await api.get<ISubject[]>(`${SUBJECT_URL}`);
}