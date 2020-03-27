export interface Country {
  id: number;
  name: string;
  value: string;
}

export interface GlobalStatsProps {
  data: Results[];
}

export interface CountriesProps {
  onSelected: Function;
}

export interface DetailsProps {
  countryCode?: string;
}

export interface DetailProps {
  title: string;
  data: number;
}

export interface CountryData extends Results {
  info: InfoResults;
}

export interface InfoResults {
  ourid: number;
  title: string;
  code: string;
  source?: string;
}

export interface Results {
  source?: {};
  total_active_cases: number;
  total_cases: number;
  total_deaths: number;
  total_new_cases_today: number;
  total_new_deaths_today: number;
  total_recovered: number;
  total_serious_cases: number;
  total_unresolved: number;
}

export interface FetchData<T> {
  data: T | null;
}

export interface GlobalStatsResults {
  results: Array<Results> | [];
  stat: number;
}

export interface CountryStatsResult {
  countrydata: [];
  countrynewsitems?: [];
}

export type GlobalData = Results;
