export type CountriesProps = {
  selected: Function;
};

export type DetailsProps = {
  countryCode: string;
};

export type DataListProps = {
  items: {
    total_active_cases: number;
    total_cases: number;
    total_deaths: number;
    total_new_cases_today: number;
    total_new_deaths_today: number;
    total_recovered: number;
    total_serious_cases: number;
    total_unresolved: number;
  };
};
