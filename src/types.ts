export interface Country {
  id: number;
  name: string;
  value: string;
}

export interface CountriesProps {
  onSelected: Function;
}

export interface DetailsProps {
  countryCode: string;
}
