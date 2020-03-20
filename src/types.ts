export type Country = {
  id: number;
  name: string;
  value: string;
};

export type CountriesProps = {
  onSelected: Function;
};

export type DetailsProps = {
  countryCode: string;
};

export type CountryData = Array<{
  info: {};
  total_active_cases: string;
  total_cases: string;
  total_deaths: string;
  total_new_cases_today: string;
  total_new_deaths_today: string;
  total_recovered: string;
  total_serious_cases: string;
  total_unresolved: string;
}>;
