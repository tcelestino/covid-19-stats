import axios, { AxiosResponse } from 'axios';
import { FetchData } from '../types';

export async function fetch(url: string): Promise<AxiosResponse> {
  try {
    const response: AxiosResponse = await axios.get(`${url}`);
    return response;
  } catch (error) {
    return error;
  }
}

export async function getData<T>(url: string): Promise<FetchData<T>> {
  const result: FetchData<T> = await fetch(url);
  return result;
}
