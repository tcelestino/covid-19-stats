import axios, { AxiosResponse } from 'axios';
import { GlobalStatsResult, CountryStatsResult } from './types';

export async function fetch(url: string): Promise<AxiosResponse> {
  try {
    const response: AxiosResponse = await axios.get(`${url}`);
    return response;
  } catch (error) {
    return error;
  }
}

export async function getGlobalStats(url: string): Promise<GlobalStatsResult> {
  const result = await fetch(url);
  return result.data;
}

export async function getCountryStats(
  url: string
): Promise<CountryStatsResult> {
  const result = await fetch(url);
  return result.data;
}
